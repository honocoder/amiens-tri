import { createClient } from "@supabase/supabase-js"

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!

export const supabase = createClient(supabaseUrl, supabaseAnonKey)

// Types pour TypeScript
export interface Resultat {
  id: number
  athlete: string
  competition: string
  date: string
  distance: string
  position: number
  temps: string
  categorie: string
  type: string
  created_at?: string
  updated_at?: string
}

export interface AdminUser {
  id: number
  email: string
  role: string
  created_at?: string
}

// Fonctions utilitaires pour les résultats
export const getResultType = (position: number): string => {
  if (position === 1) return "podium"
  if (position <= 3) return "podium"
  if (position <= 10) return "top10"
  return "participation"
}

// API pour les résultats
export const resultatsAPI = {
  // Récupérer tous les résultats
  async getAll(): Promise<Resultat[]> {
    try {
      const { data, error } = await supabase.from("resultats").select("*").order("date", { ascending: false })

      if (error) {
        console.error("Erreur lors de la récupération des résultats:", error)
        throw new Error(`Erreur de lecture: ${error.message}`)
      }

      return data || []
    } catch (error) {
      console.error("Erreur dans getAll:", error)
      throw error
    }
  },

  // Ajouter un résultat
  async create(resultat: Omit<Resultat, "id" | "created_at" | "updated_at">): Promise<Resultat> {
    try {
      const resultData = {
        ...resultat,
        type: getResultType(resultat.position),
      }

      const { data, error } = await supabase.from("resultats").insert([resultData]).select().single()

      if (error) {
        console.error("Erreur lors de la création du résultat:", error)
        throw new Error(`Erreur de création: ${error.message}`)
      }

      if (!data) {
        throw new Error("Aucune donnée retournée après création")
      }

      return data
    } catch (error) {
      console.error("Erreur dans create:", error)
      throw error
    }
  },

  // Mettre à jour un résultat
  async update(id: number, resultat: Partial<Resultat>): Promise<Resultat> {
    try {
      const updateData = {
        ...resultat,
        updated_at: new Date().toISOString(),
      }

      if (resultat.position) {
        updateData.type = getResultType(resultat.position)
      }

      const { data, error } = await supabase.from("resultats").update(updateData).eq("id", id).select().single()

      if (error) {
        console.error("Erreur lors de la mise à jour du résultat:", error)
        throw new Error(`Erreur de mise à jour: ${error.message}`)
      }

      if (!data) {
        throw new Error("Aucune donnée retournée après mise à jour")
      }

      return data
    } catch (error) {
      console.error("Erreur dans update:", error)
      throw error
    }
  },

  // Supprimer un résultat
  async delete(id: number): Promise<void> {
    try {
      const { error } = await supabase.from("resultats").delete().eq("id", id)

      if (error) {
        console.error("Erreur lors de la suppression du résultat:", error)
        throw new Error(`Erreur de suppression: ${error.message}`)
      }
    } catch (error) {
      console.error("Erreur dans delete:", error)
      throw error
    }
  },

  // Obtenir les statistiques
  async getStats() {
    try {
      const resultats = await this.getAll()

      return {
        victoires: resultats.filter((r) => r.position === 1).length,
        podiums: resultats.filter((r) => r.position <= 3).length,
        top10: resultats.filter((r) => r.position <= 10).length,
        competitions: resultats.length,
      }
    } catch (error) {
      console.error("Erreur dans getStats:", error)
      return {
        victoires: 0,
        podiums: 0,
        top10: 0,
        competitions: 0,
      }
    }
  },

  // Test de connexion
  async testConnection(): Promise<{ success: boolean; message: string; details?: any }> {
    try {
      const { data, error, count } = await supabase.from("resultats").select("*", { count: "exact", head: true })

      if (error) {
        return {
          success: false,
          message: "Erreur de connexion à la base de données",
          details: error,
        }
      }

      return {
        success: true,
        message: `Connexion réussie. Table accessible avec ${count || 0} enregistrements.`,
        details: { count },
      }
    } catch (error) {
      return {
        success: false,
        message: "Erreur de connexion",
        details: error,
      }
    }
  },
}

// API pour l'authentification admin
export const authAPI = {
  // Connexion simple avec mot de passe
  async login(password: string): Promise<boolean> {
    // Pour la démo, on garde un mot de passe simple
    // En production, vous devriez utiliser Supabase Auth
    const ADMIN_PASSWORD = process.env.NEXT_PUBLIC_ADMIN_PASSWORD || "amiens2024"
    return password === ADMIN_PASSWORD
  },

  // Vérifier si l'utilisateur est connecté (localStorage pour la démo)
  isAuthenticated(): boolean {
    if (typeof window === "undefined") return false
    return localStorage.getItem("admin-authenticated") === "true"
  },

  // Se connecter
  setAuthenticated(value: boolean): void {
    if (typeof window === "undefined") return
    if (value) {
      localStorage.setItem("admin-authenticated", "true")
    } else {
      localStorage.removeItem("admin-authenticated")
    }
  },
}
