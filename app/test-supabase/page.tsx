"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { CheckCircle, XCircle, Loader2, Database, Key, Shield, AlertTriangle } from "lucide-react"
import { resultatsAPI } from "@/lib/supabase"
import Header from "@/components/Header"

interface TestResult {
  name: string
  status: "pending" | "success" | "error" | "warning"
  message: string
  details?: string
}

export default function TestSupabase() {
  const [tests, setTests] = useState<TestResult[]>([
    { name: "Configuration Supabase", status: "pending", message: "Vérification des variables d'environnement..." },
    { name: "Connexion à la base", status: "pending", message: "Test de connexion..." },
    { name: "Lecture des données", status: "pending", message: "Test de lecture..." },
    { name: "Écriture des données", status: "pending", message: "Test d'écriture..." },
    { name: "Suppression des données", status: "pending", message: "Test de suppression..." },
  ])
  const [isRunning, setIsRunning] = useState(false)

  const updateTest = (index: number, status: TestResult["status"], message: string, details?: string) => {
    setTests((prev) => prev.map((test, i) => (i === index ? { ...test, status, message, details } : test)))
  }

  const runTests = async () => {
    setIsRunning(true)

    // Reset tous les tests
    setTests((prev) => prev.map((test) => ({ ...test, status: "pending" as const })))

    // Test 1: Configuration
    try {
      const url = process.env.NEXT_PUBLIC_SUPABASE_URL
      const key = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
      const adminPassword = process.env.NEXT_PUBLIC_ADMIN_PASSWORD

      if (!url || !key) {
        updateTest(0, "error", "Variables d'environnement manquantes", "SUPABASE_URL ou ANON_KEY non définis")
        setIsRunning(false)
        return
      }

      updateTest(
        0,
        "success",
        "Configuration OK",
        `URL: ${url.substring(0, 50)}...\nPassword: ${adminPassword || "amiens2024"}`,
      )
    } catch (error) {
      updateTest(0, "error", "Erreur de configuration", String(error))
      setIsRunning(false)
      return
    }

    // Test 2: Connexion
    try {
      const connectionTest = await resultatsAPI.testConnection()

      if (connectionTest.success) {
        updateTest(1, "success", connectionTest.message, JSON.stringify(connectionTest.details, null, 2))
      } else {
        updateTest(1, "error", connectionTest.message, JSON.stringify(connectionTest.details, null, 2))
        // On continue quand même les autres tests
      }
    } catch (error) {
      updateTest(1, "error", "Erreur de connexion", String(error))
    }

    // Test 3: Lecture
    try {
      const resultats = await resultatsAPI.getAll()
      updateTest(2, "success", "Lecture réussie", `${resultats.length} résultats trouvés`)
    } catch (error) {
      updateTest(2, "error", "Erreur de lecture", String(error))
    }

    // Test 4: Écriture
    let createdId: number | null = null
    try {
      const testResult = {
        athlete: "Test Utilisateur",
        competition: "Test Competition",
        date: new Date().toISOString().split("T")[0],
        distance: "S (750m/20km/5km)",
        position: 99,
        temps: "1h00'00\"",
        categorie: "TEST",
      }

      const created = await resultatsAPI.create(testResult)
      createdId = created.id
      updateTest(3, "success", "Écriture réussie", `Résultat créé avec ID: ${created.id}`)
    } catch (error) {
      const errorMessage = String(error)
      if (errorMessage.includes("row-level security")) {
        updateTest(
          3,
          "warning",
          "Problème RLS détecté",
          "Les politiques Row Level Security bloquent l'écriture. Exécutez le script fix-rls-policies.sql",
        )
      } else {
        updateTest(3, "error", "Erreur d'écriture", errorMessage)
      }
    }

    // Test 5: Suppression (nettoyer le test)
    if (createdId) {
      try {
        await resultatsAPI.delete(createdId)
        updateTest(4, "success", "Suppression réussie", "Données de test nettoyées")
      } catch (error) {
        updateTest(4, "error", "Erreur de suppression", String(error))
      }
    } else {
      updateTest(4, "warning", "Test de suppression ignoré", "Aucune donnée à supprimer")
    }

    setIsRunning(false)
  }

  const seedDatabase = async () => {
    try {
      const response = await fetch("/api/seed", { method: "POST" })
      const result = await response.json()

      if (response.ok) {
        alert("✅ Données d'exemple ajoutées avec succès !")
        // Relancer le test de lecture pour voir les nouvelles données
        const resultats = await resultatsAPI.getAll()
        updateTest(2, "success", "Lecture mise à jour", `${resultats.length} résultats trouvés`)
      } else {
        alert(`❌ Erreur: ${result.error}`)
      }
    } catch (error) {
      alert(`❌ Erreur: ${error}`)
    }
  }

  const fixRLSPolicies = () => {
    const script = `-- Exécutez ce script dans l'éditeur SQL de Supabase
DROP POLICY IF EXISTS "Lecture publique des résultats" ON resultats;
DROP POLICY IF EXISTS "Admins peuvent tout faire sur résultats" ON resultats;

CREATE POLICY "Public peut lire les résultats" ON resultats FOR SELECT USING (true);
CREATE POLICY "Public peut insérer des résultats" ON resultats FOR INSERT WITH CHECK (true);
CREATE POLICY "Public peut modifier les résultats" ON resultats FOR UPDATE USING (true);
CREATE POLICY "Public peut supprimer les résultats" ON resultats FOR DELETE USING (true);

ALTER TABLE admin_users DISABLE ROW LEVEL SECURITY;`

    navigator.clipboard.writeText(script)
    alert("✅ Script copié dans le presse-papiers ! Collez-le dans l'éditeur SQL de Supabase.")
  }

  const getStatusIcon = (status: TestResult["status"]) => {
    switch (status) {
      case "success":
        return <CheckCircle className="w-5 h-5 text-green-500" />
      case "error":
        return <XCircle className="w-5 h-5 text-red-500" />
      case "warning":
        return <AlertTriangle className="w-5 h-5 text-yellow-500" />
      default:
        return <Loader2 className="w-5 h-5 text-blue-500 animate-spin" />
    }
  }

  const getStatusColor = (status: TestResult["status"]) => {
    switch (status) {
      case "success":
        return "border-green-200 bg-green-50"
      case "error":
        return "border-red-200 bg-red-50"
      case "warning":
        return "border-yellow-200 bg-yellow-50"
      default:
        return "border-blue-200 bg-blue-50"
    }
  }

  return (
    <div className="min-h-screen bg-slate-50">
      <Header />
      <div className="container mx-auto max-w-4xl p-4">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-slate-800 mb-4">Test Supabase</h1>
          <p className="text-slate-600">Vérification de la configuration et des fonctionnalités</p>
        </div>

        {/* Informations de configuration */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="flex items-center">
              <Database className="w-5 h-5 mr-2" />
              Configuration actuelle
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-3 gap-4 text-sm">
              <div className="flex items-center gap-2">
                <Key className="w-4 h-4 text-blue-500" />
                <span className="font-medium">URL:</span>
                <span className="text-slate-600 truncate">
                  {process.env.NEXT_PUBLIC_SUPABASE_URL?.substring(0, 30)}...
                </span>
              </div>
              <div className="flex items-center gap-2">
                <Shield className="w-4 h-4 text-green-500" />
                <span className="font-medium">Clé:</span>
                <span className="text-slate-600">Configurée ✓</span>
              </div>
              <div className="flex items-center gap-2">
                <Shield className="w-4 h-4 text-orange-500" />
                <span className="font-medium">Password:</span>
                <span className="text-slate-600">{process.env.NEXT_PUBLIC_ADMIN_PASSWORD || "amiens2024"}</span>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Tests */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Tests de fonctionnement</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {tests.map((test, index) => (
                <div key={index} className={`border rounded-lg p-4 ${getStatusColor(test.status)}`}>
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center gap-3">
                      {getStatusIcon(test.status)}
                      <span className="font-medium">{test.name}</span>
                    </div>
                    <span className="text-sm text-slate-500">#{index + 1}</span>
                  </div>
                  <p className="text-sm text-slate-700 mb-2">{test.message}</p>
                  {test.details && (
                    <pre className="text-xs text-slate-600 bg-white p-2 rounded border whitespace-pre-wrap">
                      {test.details}
                    </pre>
                  )}
                </div>
              ))}
            </div>

            <div className="flex flex-wrap gap-4 mt-6">
              <Button onClick={runTests} disabled={isRunning} className="bg-blue-600 hover:bg-blue-700">
                {isRunning ? (
                  <>
                    <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                    Tests en cours...
                  </>
                ) : (
                  "Lancer les tests"
                )}
              </Button>

              <Button
                onClick={seedDatabase}
                variant="outline"
                className="border-green-600 text-green-600 bg-transparent"
              >
                Ajouter données d'exemple
              </Button>

              <Button
                onClick={fixRLSPolicies}
                variant="outline"
                className="border-yellow-600 text-yellow-600 bg-transparent"
              >
                🔧 Corriger les politiques RLS
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Solution RLS */}
        <Card className="mb-8 border-yellow-200 bg-yellow-50">
          <CardHeader>
            <CardTitle className="flex items-center text-yellow-800">
              <AlertTriangle className="w-5 h-5 mr-2" />
              Problème RLS détecté ?
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-sm text-yellow-800 space-y-2">
              <p>
                <strong>Si vous voyez une erreur "row-level security policy"</strong>, cela signifie que les politiques
                de sécurité Supabase bloquent l'écriture.
              </p>
              <p>
                <strong>Solution :</strong> Cliquez sur "Corriger les politiques RLS" puis collez le script dans
                l'éditeur SQL de votre dashboard Supabase.
              </p>
              <p>
                <strong>Ou</strong> exécutez simplement cette commande dans l'éditeur SQL :
              </p>
              <code className="block bg-yellow-100 p-2 rounded text-xs">
                ALTER TABLE resultats DISABLE ROW LEVEL SECURITY;
              </code>
            </div>
          </CardContent>
        </Card>

        {/* Liens utiles */}
        <div className="grid md:grid-cols-2 gap-4">
          <Card>
            <CardContent className="p-6">
              <h3 className="font-semibold mb-3">🔗 Liens utiles</h3>
              <div className="space-y-2 text-sm">
                <a href="/admin" className="block text-blue-600 hover:underline">
                  → Interface d'administration
                </a>
                <a href="/resultats" className="block text-blue-600 hover:underline">
                  → Page des résultats
                </a>
                <a
                  href={`${process.env.NEXT_PUBLIC_SUPABASE_URL}/project/default/editor`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block text-blue-600 hover:underline"
                >
                  → Dashboard Supabase
                </a>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <h3 className="font-semibold mb-3">📋 Prochaines étapes</h3>
              <div className="space-y-1 text-sm text-slate-600">
                <p>1. Corriger les politiques RLS si nécessaire</p>
                <p>2. Vérifier que tous les tests passent</p>
                <p>3. Ajouter des données d'exemple</p>
                <p>4. Tester l'interface d'administration</p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
