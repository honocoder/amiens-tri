"use client"

import { useState, useEffect } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Trophy, Medal, Award, Calendar, MapPin, Waves, Loader2 } from "lucide-react"
import Link from "next/link"
import { resultatsAPI, type Resultat } from "@/lib/supabase"

function getPositionIcon(position: number) {
  if (position === 1) return <Trophy className="w-5 h-5 text-yellow-500" />
  if (position === 2) return <Medal className="w-5 h-5 text-gray-400" />
  if (position === 3) return <Award className="w-5 h-5 text-amber-600" />
  return <span className="text-sm font-semibold text-gray-600">#{position}</span>
}

function getPositionBadge(position: number) {
  if (position === 1) return <Badge className="bg-yellow-500">1ère place</Badge>
  if (position === 2) return <Badge className="bg-gray-400">2ème place</Badge>
  if (position === 3) return <Badge className="bg-amber-600">3ème place</Badge>
  if (position <= 10) return <Badge variant="secondary">Top 10</Badge>
  return <Badge variant="outline">Participation</Badge>
}

export default function Resultats() {
  const [resultats, setResultats] = useState<Resultat[]>([])
  const [stats, setStats] = useState({
    victoires: 0,
    podiums: 0,
    top10: 0,
    competitions: 0,
  })
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const loadData = async () => {
      try {
        setLoading(true)
        const [resultatsData, statsData] = await Promise.all([resultatsAPI.getAll(), resultatsAPI.getStats()])

        setResultats(resultatsData)
        setStats(statsData)
      } catch (err) {
        console.error("Erreur lors du chargement des données:", err)
        setError("Erreur lors du chargement des résultats")
      } finally {
        setLoading(false)
      }
    }

    loadData()
  }, [])

  if (loading) {
    return (
      <div className="min-h-screen bg-slate-50 flex items-center justify-center">
        <div className="text-center">
          <Loader2 className="w-8 h-8 animate-spin text-blue-600 mx-auto mb-4" />
          <p className="text-slate-600">Chargement des résultats...</p>
        </div>
      </div>
    )
  }

  if (error) {
    return (
      <div className="min-h-screen bg-slate-50 flex items-center justify-center">
        <Card className="max-w-md">
          <CardContent className="p-6 text-center">
            <div className="text-red-500 mb-4">⚠️</div>
            <h3 className="font-semibold text-slate-800 mb-2">Erreur de chargement</h3>
            <p className="text-slate-600 mb-4">{error}</p>
            <button
              onClick={() => window.location.reload()}
              className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
            >
              Réessayer
            </button>
          </CardContent>
        </Card>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-slate-50">
      {/* Header identique aux autres pages */}
      <header className="bg-white shadow-lg border-b-4 border-blue-500">
        <div className="container mx-auto px-4 py-6">
          <nav className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="relative">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-600 via-blue-500 to-cyan-400 rounded-full flex items-center justify-center transform rotate-12">
                  <Waves className="w-7 h-7 text-white transform -rotate-12" />
                </div>
                <div className="absolute -top-1 -right-1 w-4 h-4 bg-orange-400 rounded-full"></div>
              </div>
              <div>
                <h1 className="text-2xl font-bold text-slate-800 tracking-tight">Amiens Triathlon</h1>
                <p className="text-xs text-slate-500 font-medium">Nager • Pédaler • Courir</p>
              </div>
            </div>
            <div className="hidden md:flex space-x-8">
              <Link
                href="/"
                className="text-slate-700 hover:text-blue-600 font-medium hover:border-b-2 hover:border-blue-500 transition-all"
              >
                Accueil
              </Link>
              <Link
                href="/nous-rejoindre"
                className="text-slate-700 hover:text-blue-600 font-medium hover:border-b-2 hover:border-blue-500 transition-all"
              >
                Nous rejoindre
              </Link>
              <Link
                href="/resultats"
                className="text-slate-700 hover:text-blue-600 font-medium border-b-2 border-blue-500"
              >
                Nos résultats
              </Link>
              <Link
                href="/entrainements"
                className="text-slate-700 hover:text-blue-600 font-medium hover:border-b-2 hover:border-blue-500 transition-all"
              >
                Nos entraînements
              </Link>
              <Link
                href="/ecole-triathlon"
                className="text-slate-700 hover:text-blue-600 font-medium hover:border-b-2 hover:border-blue-500 transition-all"
              >
                L'école de triathlon
              </Link>
              <Link
                href="/histoire"
                className="text-slate-700 hover:text-blue-600 font-medium hover:border-b-2 hover:border-blue-500 transition-all"
              >
                Histoire du club
              </Link>
              <Link
                href="/contact"
                className="text-slate-700 hover:text-blue-600 font-medium hover:border-b-2 hover:border-blue-500 transition-all"
              >
                Contact
              </Link>
            </div>
          </nav>
        </div>
      </header>

      <div className="container mx-auto px-4 py-12">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-5xl font-black text-slate-800 mb-6">
            Nos{" "}
            <span className="text-blue-600 relative">
              résultats
              <div className="absolute -bottom-2 left-0 right-0 h-3 bg-yellow-300 opacity-30 transform -skew-x-12"></div>
            </span>
          </h1>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            Découvrez les performances de nos athlètes ! Chaque résultat raconte une histoire de dépassement,
            d'entraînement et de passion partagée.
          </p>
        </div>

        {/* Stats rapides avec style plus fun */}
        <div className="grid md:grid-cols-4 gap-6 mb-12">
          <Card className="text-center bg-gradient-to-br from-yellow-50 to-yellow-100 border-l-4 border-yellow-500">
            <CardContent className="p-6">
              <Trophy className="w-10 h-10 text-yellow-500 mx-auto mb-3" />
              <div className="text-3xl font-black text-slate-800">{stats.victoires}</div>
              <div className="text-sm text-slate-600 font-medium">Victoires</div>
              <div className="text-xs text-slate-500 mt-1">🥇 Champions !</div>
            </CardContent>
          </Card>
          <Card className="text-center bg-gradient-to-br from-blue-50 to-blue-100 border-l-4 border-blue-500">
            <CardContent className="p-6">
              <Medal className="w-10 h-10 text-blue-500 mx-auto mb-3" />
              <div className="text-3xl font-black text-slate-800">{stats.podiums}</div>
              <div className="text-sm text-slate-600 font-medium">Podiums</div>
              <div className="text-xs text-slate-500 mt-1">🏆 Sur le podium</div>
            </CardContent>
          </Card>
          <Card className="text-center bg-gradient-to-br from-green-50 to-green-100 border-l-4 border-green-500">
            <CardContent className="p-6">
              <Award className="w-10 h-10 text-green-500 mx-auto mb-3" />
              <div className="text-3xl font-black text-slate-800">{stats.top10}</div>
              <div className="text-sm text-slate-600 font-medium">Top 10</div>
              <div className="text-xs text-slate-500 mt-1">⭐ Excellents</div>
            </CardContent>
          </Card>
          <Card className="text-center bg-gradient-to-br from-purple-50 to-purple-100 border-l-4 border-purple-500">
            <CardContent className="p-6">
              <Calendar className="w-10 h-10 text-purple-500 mx-auto mb-3" />
              <div className="text-3xl font-black text-slate-800">{stats.competitions}</div>
              <div className="text-sm text-slate-600 font-medium">Participations</div>
              <div className="text-xs text-slate-500 mt-1">💪 Engagés</div>
            </CardContent>
          </Card>
        </div>

        {/* Liste des résultats */}
        <div className="space-y-6">
          <h2 className="text-3xl font-bold text-slate-800 mb-6">Résultats récents</h2>

          {resultats.length === 0 ? (
            <Card className="text-center py-12">
              <CardContent>
                <Trophy className="w-16 h-16 text-slate-300 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-slate-600 mb-2">Aucun résultat pour le moment</h3>
                <p className="text-slate-500">Les résultats des compétitions apparaîtront ici prochainement !</p>
              </CardContent>
            </Card>
          ) : (
            resultats.map((resultat) => (
              <Card
                key={resultat.id}
                className="hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 bg-white border-l-4 border-blue-500"
              >
                <CardContent className="p-6">
                  <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-3">
                        {getPositionIcon(resultat.position)}
                        <h3 className="text-2xl font-bold text-slate-800">{resultat.athlete}</h3>
                        {getPositionBadge(resultat.position)}
                      </div>

                      <div className="grid md:grid-cols-2 gap-4 text-slate-600 mb-3">
                        <div className="flex items-center gap-2">
                          <MapPin className="w-4 h-4 text-blue-500" />
                          <span className="font-medium">{resultat.competition}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Calendar className="w-4 h-4 text-green-500" />
                          <span>{new Date(resultat.date).toLocaleDateString("fr-FR")}</span>
                        </div>
                      </div>

                      <div className="text-sm text-slate-600 bg-slate-50 rounded-lg p-3">
                        <span className="font-semibold text-blue-600">Distance:</span> {resultat.distance} •
                        <span className="font-semibold text-green-600 ml-2">Catégorie:</span> {resultat.categorie}
                      </div>
                    </div>

                    <div className="text-right bg-gradient-to-br from-blue-50 to-cyan-50 rounded-xl p-4">
                      <div className="text-3xl font-black text-blue-600 mb-1">{resultat.temps}</div>
                      <div className="text-sm text-slate-600 font-medium">Position #{resultat.position}</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))
          )}
        </div>

        {/* Section informative */}
        <div className="mt-16 bg-gradient-to-r from-blue-50 to-cyan-50 rounded-2xl p-8 border-l-4 border-blue-500">
          <h3 className="text-3xl font-bold text-slate-800 mb-4">🏆 Vous avez participé à une compétition ?</h3>
          <p className="text-slate-600 mb-6 text-lg leading-relaxed">
            Partagez vos exploits avec le club ! Que ce soit une victoire éclatante ou une belle participation, chaque
            résultat mérite d'être célébré. Contactez-nous pour l'ajouter à cette page.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center px-8 py-4 bg-blue-600 text-white rounded-xl hover:bg-blue-700 transition-all transform hover:-translate-y-1 shadow-lg font-semibold"
            >
              📧 Partager un résultat
            </Link>
            <Link
              href="/entrainements"
              className="inline-flex items-center justify-center px-8 py-4 border-2 border-blue-600 text-blue-600 rounded-xl hover:bg-blue-50 transition-all font-semibold"
            >
              🏃‍♀️ Voir les entraînements
            </Link>
          </div>
        </div>

        {/* Lien vers l'admin (caché en production) */}
        <div className="mt-8 text-center">
          <Link href="/admin" className="text-sm text-slate-400 hover:text-slate-600 transition-colors">
            Administration
          </Link>
        </div>
      </div>
    </div>
  )
}
