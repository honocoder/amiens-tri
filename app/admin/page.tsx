"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Badge } from "@/components/ui/badge"
import { Trash2, Edit, Plus, Trophy, Medal, Award, Lock, Loader2, AlertCircle } from "lucide-react"
import { resultatsAPI, authAPI, type Resultat } from "@/lib/supabase"
import Header from "@/components/Header"
import Footer from "@/components/Footer"

export default function AdminPage() {
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const [password, setPassword] = useState("")
  const [resultats, setResultats] = useState<Resultat[]>([])
  const [editingId, setEditingId] = useState<number | null>(null)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [formData, setFormData] = useState({
    athlete: "",
    competition: "",
    date: "",
    distance: "",
    position: "",
    temps: "",
    categorie: "",
  })

  // Vérifier l'authentification au chargement
  useEffect(() => {
    setIsAuthenticated(authAPI.isAuthenticated())
  }, [])

  // Charger les résultats si authentifié
  useEffect(() => {
    if (isAuthenticated) {
      loadResultats()
    }
  }, [isAuthenticated])

  const loadResultats = async () => {
    try {
      setLoading(true)
      const data = await resultatsAPI.getAll()
      setResultats(data)
    } catch (err) {
      setError("Erreur lors du chargement des résultats")
      console.error(err)
    } finally {
      setLoading(false)
    }
  }

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setError(null)

    try {
      const isValid = await authAPI.login(password)
      if (isValid) {
        authAPI.setAuthenticated(true)
        setIsAuthenticated(true)
        setPassword("")
      } else {
        setError("Mot de passe incorrect")
      }
    } catch (err) {
      setError("Erreur de connexion")
    } finally {
      setLoading(false)
    }
  }

  const handleLogout = () => {
    authAPI.setAuthenticated(false)
    setIsAuthenticated(false)
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setError(null)

    try {
      const position = Number.parseInt(formData.position)
      const resultData = {
        athlete: formData.athlete,
        competition: formData.competition,
        date: formData.date,
        distance: formData.distance,
        position: position,
        temps: formData.temps,
        categorie: formData.categorie,
      }

      if (editingId) {
        await resultatsAPI.update(editingId, resultData)
      } else {
        await resultatsAPI.create(resultData)
      }

      // Reset form et recharger les données
      setFormData({
        athlete: "",
        competition: "",
        date: "",
        distance: "",
        position: "",
        temps: "",
        categorie: "",
      })
      setEditingId(null)
      await loadResultats()
    } catch (err) {
      setError("Erreur lors de la sauvegarde")
      console.error(err)
    } finally {
      setLoading(false)
    }
  }

  const handleEdit = (result: Resultat) => {
    setFormData({
      athlete: result.athlete,
      competition: result.competition,
      date: result.date,
      distance: result.distance,
      position: result.position.toString(),
      temps: result.temps,
      categorie: result.categorie,
    })
    setEditingId(result.id)
  }

  const handleDelete = async (id: number) => {
    if (!confirm("Êtes-vous sûr de vouloir supprimer ce résultat ?")) return

    setLoading(true)
    try {
      await resultatsAPI.delete(id)
      await loadResultats()
    } catch (err) {
      setError("Erreur lors de la suppression")
      console.error(err)
    } finally {
      setLoading(false)
    }
  }

  const getPositionIcon = (position: number) => {
    if (position === 1) return <Trophy className="w-5 h-5 text-yellow-500" />
    if (position === 2) return <Medal className="w-5 h-5 text-gray-400" />
    if (position === 3) return <Award className="w-5 h-5 text-amber-600" />
    return <span className="text-sm font-semibold text-gray-600">#{position}</span>
  }

  const getPositionBadge = (position: number) => {
    if (position === 1) return <Badge className="bg-yellow-500">1ère place</Badge>
    if (position === 2) return <Badge className="bg-gray-400">2ème place</Badge>
    if (position === 3) return <Badge className="bg-amber-600">3ème place</Badge>
    if (position <= 10) return <Badge variant="secondary">Top 10</Badge>
    return <Badge variant="outline">Participation</Badge>
  }

  // Page de connexion
  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-slate-100 flex items-center justify-center p-4">
        <Card className="w-full max-w-md">
          <CardHeader className="text-center">
            <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
              <Lock className="w-8 h-8 text-white" />
            </div>
            <CardTitle className="text-2xl">Administration</CardTitle>
            <p className="text-gray-600">Amiens Triathlon - Gestion des résultats</p>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleLogin} className="space-y-4">
              <div>
                <Label htmlFor="password">Mot de passe</Label>
                <Input
                  id="password"
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Entrez le mot de passe"
                  required
                  disabled={loading}
                />
              </div>

              {error && (
                <div className="flex items-center gap-2 p-3 bg-red-50 border border-red-200 rounded-lg text-red-700 text-sm">
                  <AlertCircle className="w-4 h-4" />
                  {error}
                </div>
              )}

              <Button type="submit" className="w-full bg-blue-600 hover:bg-blue-700" disabled={loading}>
                {loading ? (
                  <>
                    <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                    Connexion...
                  </>
                ) : (
                  "Se connecter"
                )}
              </Button>
            </form>

            <div className="mt-4 p-3 bg-blue-50 rounded-lg text-sm text-blue-800">
              <strong>Demo:</strong> Mot de passe = "amiens2024"
            </div>
          </CardContent>
        </Card>
      </div>
    )
  }

  // Interface d'administration
  return (
    <div className="min-h-screen bg-slate-50">
      <Header />
      <div className="container mx-auto max-w-6xl p-4">
        {/* Header */}
        <div className="flex justify-between items-center mb-8">
          <div>
            <h1 className="text-3xl font-bold text-slate-800">Administration</h1>
            <p className="text-slate-600">Gestion des résultats - Amiens Triathlon</p>
          </div>
          <Button
            onClick={handleLogout}
            variant="outline"
            className="text-red-600 border-red-600 hover:bg-red-50 bg-transparent"
          >
            Se déconnecter
          </Button>
        </div>

        {error && (
          <div className="mb-6 flex items-center gap-2 p-4 bg-red-50 border border-red-200 rounded-lg text-red-700">
            <AlertCircle className="w-5 h-5" />
            {error}
            <Button 
              variant="ghost" 
              size="sm" 
              onClick={() => setError(null)}
              className="ml-auto text-red-600 hover:text-red-700"
            >
              ✕
            </Button>
          </div>
        )}

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Formulaire d'ajout/modification */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Plus className="w-5 h-5 mr-2" />
                {editingId ? "Modifier le résultat" : "Ajouter un résultat"}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <Label htmlFor="athlete">Nom de l'athlète *</Label>
                  <Input
                    id="athlete"
                    value={formData.athlete}
                    onChange={(e) => setFormData({ ...formData, athlete: e.target.value })}
                    placeholder="Ex: Marie Dubois"
                    required
                    disabled={loading}
                  />
                </div>

                <div>
                  <Label htmlFor="competition">Compétition *</Label>
                  <Input
                    id="competition"
                    value={formData.competition}
                    onChange={(e) => setFormData({ ...formData, competition: e.target.value })}
                    placeholder="Ex: Triathlon de Deauville"
                    required
                    disabled={loading}
                  />
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="date">Date *</Label>
                    <Input
                      id="date"
                      type="date"
                      value={formData.date}
                      onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                      required
                      disabled={loading}
                    />
                  </div>
                  <div>
                    <Label htmlFor="position">Position *</Label>
                    <Input
                      id="position"
                      type="number"
                      min="1"
                      value={formData.position}
                      onChange={(e) => setFormData({ ...formData, position: e.target.value })}
                      placeholder="1"
                      required
                      disabled={loading}
                    />
                  </div>
                </div>

                <div>
                  <Label htmlFor="distance">Distance *</Label>
                  <Select 
                    onValueChange={(value) => setFormData({ ...formData, distance: value })}
                    value={formData.distance}
                    disabled={loading}
                  >
                    <SelectTrigger>
                      <SelectValue placeholder="Choisir une distance" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="S (750m/20km/5km)">Sprint (750m/20km/5km)</SelectItem>
                      <SelectItem value="M (1.5km/40km/10km)">Olympique (1.5km/40km/10km)</SelectItem>
                      <SelectItem value="Half (1.9km/90km/21km)">Half Ironman (1.9km/90km/21km)</SelectItem>
                      <SelectItem value="L (3.8km/180km/42km)">Ironman (3.8km/180km/42km)</SelectItem>
                      <SelectItem value="Autre">Autre distance</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="temps">Temps *</Label>
                    <Input
                      id="temps"
                      value={formData.temps}
                      onChange={(e) => setFormData({ ...formData, temps: e.target.value })}
                      placeholder="Ex: 2h15'32\"
                      required
                      disabled={loading}
                    />
                  </div>
                  <div>
                    <Label htmlFor="categorie">Catégorie *</Label>
                    <Input
                      id="categorie"
                      value={formData.categorie}
                      onChange={(e) => setFormData({ ...formData, categorie: e.target.value })}
                      placeholder="Ex: F30-34"
                      required
                      disabled={loading}
                    />
                  </div>
                </div>

                <div className="flex gap-4">
                  <Button type="submit" className="flex-1 bg-blue-600 hover:bg-blue-700" disabled={loading}>
                    {loading ? (
                      <>
                        <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                        {editingId ? "Modification..." : "Ajout..."}
                      </>
                    ) : (
                      editingId ? "Modifier" : "Ajouter"
                    )}
                  </Button>
                  {editingId && (
                    <Button
                      type="button"
                      variant="outline"
                      onClick={() => {
                        setEditingId(null)
                        setFormData({
                          athlete: "",
                          competition: "",
                          date: "",
                          distance: "",
                          position: "",
                          temps: "",
                          categorie: "",
                        })
                      }}
                      disabled={loading}
                    >
                      Annuler
                    </Button>
                  )}
                </div>
              </form>
            </CardContent>
          </Card>

          {/* Liste des résultats */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center justify-between">
                <span>Résultats enregistrés ({resultats.length})</span>
                {loading && <Loader2 className="w-5 h-5 animate-spin text-blue-600" />}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4 max-h-96 overflow-y-auto">
                {resultats.length === 0 ? (
                  <div className="text-center py-8 text-slate-500">
                    <Trophy className="w-12 h-12 mx-auto mb-4 opacity-50" />
                    <p>Aucun résultat enregistré</p>
                    <p className="text-sm">Ajoutez le premier résultat !</p>
                  </div>
                ) : (
                  resultats.map((result) => (
                    <div key={result.id} className="border rounded-lg p-4 hover:bg-slate-50">
                      <div className="flex items-start justify-between">
                        <div className="flex-1">
                          <div className="flex items-center gap-2 mb-2">
                            {getPositionIcon(result.position)}
                            <h3 className="font-semibold text-slate-800">{result.athlete}</h3>
                            {getPositionBadge(result.position)}
                          </div>
                          <p className="text-sm text-slate-600 mb-1">{result.competition}</p>
                          <p className="text-sm text-slate-500">
                            {new Date(result.date).toLocaleDateString("fr-FR")} • {result.distance} • {result.temps}
                          </p>
                        </div>
                        <div className="flex gap-2">
                          <Button 
                            size="sm" 
                            variant="outline" 
                            onClick={() => handleEdit(result)}
                            disabled={loading}
                          >
                            <Edit className="w-4 h-4" />
                          </Button>
                          <Button
                            size="sm"
                            variant="outline"
                            className="text-red-600 border-red-600 hover:bg-red-50 bg-transparent"
                            onClick={() => handleDelete(result.id)}
                            disabled={loading}
                          >
                            <Trash2 className="w-4 h-4" />
                          </Button>
                        </div>
                      </div>
                    </div>
                  ))
                )}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Instructions */}
        <Card className="mt-8 bg-blue-50">
          <CardContent className="p-6">
            <h3 className="font-semibold text-slate-800 mb-3">💡 Instructions d'utilisation</h3>
            <div className="grid md:grid-cols-2 gap-4 text-sm text-slate-600">
              <div>
                <h4 className="font-medium mb-2">Ajouter un résultat :</h4>
                <ul className="space-y-1">
                  <li>• Remplissez tous les champs obligatoires (*)</li>
                  <li>• La position détermine automatiquement le type de résultat</li>
                  <li>• Le format du temps est libre (ex: 2h15'32")</li>
                </ul>
              </div>
              <div>
                <h4 className="font-medium mb-2">Gestion :</h4>
                <ul className="space-y-1">
                  <li>• Cliquez sur l'icône crayon pour modifier</li>
                  <li>• Cliquez sur la corbeille pour supprimer</li>
                  <li>• Les données sont sauvegardées en temps réel</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Informations Supabase */}
        <Card className="mt-8 bg-green-50">
          <CardContent className="p-6">
            <h3 className="font-semibold text-slate-800 mb-3">🔒 Sécurité et données</h3>
            <div className="text-sm text-slate-600">
              <p className="mb-2">✅ Données stockées de manière sécurisée avec Supabase</p>
              <p className="mb-2">✅ Authentification requise pour toute modification</p>
              <p className="mb-2">✅ Sauvegarde automatique et synchronisation en temps réel</p>
              <p>✅ Accès en lecture seule pour le public sur la page des résultats</p>
            </div>
          </CardContent>
        </Card>
      </div>
      
      <Footer />
    </div>
  )
}
