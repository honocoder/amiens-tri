import { NextResponse } from "next/server"
import { supabase } from "@/lib/supabase"

// Route pour initialiser la base de données avec des données d'exemple
export async function POST() {
  try {
    // Données d'exemple
    const sampleResults = [
      {
        athlete: "Marie Dubois",
        competition: "Triathlon de Deauville",
        date: "2024-09-15",
        distance: "M (1.5km/40km/10km)",
        position: 1,
        temps: "2h15'32\"",
        categorie: "F30-34",
        type: "podium",
      },
      {
        athlete: "Pierre Martin",
        competition: "Ironman 70.3 Nice",
        date: "2024-09-08",
        distance: "Half (1.9km/90km/21km)",
        position: 3,
        temps: "4h42'18\"",
        categorie: "M40-44",
        type: "podium",
      },
      {
        athlete: "Sophie Leroy",
        competition: "Triathlon de Gerardmer",
        date: "2024-08-25",
        distance: "S (750m/20km/5km)",
        position: 2,
        temps: "1h08'45\"",
        categorie: "F25-29",
        type: "podium",
      },
      {
        athlete: "Thomas Rousseau",
        competition: "Triathlon de Paris",
        date: "2024-08-18",
        distance: "M (1.5km/40km/10km)",
        position: 12,
        temps: "2h28'15\"",
        categorie: "M35-39",
        type: "participation",
      },
      {
        athlete: "Julie Moreau",
        competition: "Triathlon de Vichy",
        date: "2024-07-14",
        distance: "L (3km/80km/20km)",
        position: 5,
        temps: "5h15'22\"",
        categorie: "F35-39",
        type: "top10",
      },
    ]

    // Insérer les données d'exemple
    const { data, error } = await supabase.from("resultats").insert(sampleResults).select()

    if (error) {
      console.error("Erreur lors de l'insertion:", error)
      return NextResponse.json({ error: error.message }, { status: 500 })
    }

    return NextResponse.json({
      message: "Données d'exemple ajoutées avec succès",
      data: data,
    })
  } catch (error) {
    console.error("Erreur:", error)
    return NextResponse.json({ error: "Erreur serveur" }, { status: 500 })
  }
}
