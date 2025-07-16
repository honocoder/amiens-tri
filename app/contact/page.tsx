"use client"

import type React from "react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Mail, Phone, MapPin, Clock, Waves, Send } from "lucide-react"
import Link from "next/link"
import { useState } from "react"
import Header from "@/components/Header"
import Footer from "@/components/Footer"

export default function Contact() {
  const [formData, setFormData] = useState({
    nom: "",
    email: "",
    telephone: "",
    sujet: "",
    message: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Ici, vous intégreriez l'envoi du formulaire
    console.log("Formulaire soumis:", formData)
    alert("Message envoyé ! Nous vous répondrons rapidement.")
  }

  const handleChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      <Header />

      <div className="container mx-auto px-4 py-12">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-900 mb-6">Contactez-nous</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Une question sur nos entraînements ? Envie de nous rejoindre ? N'hésitez pas à nous contacter, nous serons
            ravis de vous répondre !
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Formulaire de contact */}
          <div>
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Send className="w-6 h-6 mr-2 text-blue-600" />
                  Envoyez-nous un message
                </CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="nom">Nom complet *</Label>
                      <Input
                        id="nom"
                        value={formData.nom}
                        onChange={(e) => handleChange("nom", e.target.value)}
                        placeholder="Votre nom et prénom"
                        required
                      />
                    </div>
                    <div>
                      <Label htmlFor="email">Email *</Label>
                      <Input
                        id="email"
                        type="email"
                        value={formData.email}
                        onChange={(e) => handleChange("email", e.target.value)}
                        placeholder="votre@email.com"
                        required
                      />
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="telephone">Téléphone</Label>
                    <Input
                      id="telephone"
                      type="tel"
                      value={formData.telephone}
                      onChange={(e) => handleChange("telephone", e.target.value)}
                      placeholder="06 12 34 56 78"
                    />
                  </div>

                  <div>
                    <Label htmlFor="sujet">Sujet *</Label>
                    <Select onValueChange={(value) => handleChange("sujet", value)} required>
                      <SelectTrigger>
                        <SelectValue placeholder="Choisissez un sujet" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="inscription">Inscription au club</SelectItem>
                        <SelectItem value="entrainements">Questions sur les entraînements</SelectItem>
                        <SelectItem value="competitions">Compétitions et résultats</SelectItem>
                        <SelectItem value="materiel">Matériel et équipement</SelectItem>
                        <SelectItem value="autre">Autre question</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div>
                    <Label htmlFor="message">Message *</Label>
                    <Textarea
                      id="message"
                      value={formData.message}
                      onChange={(e) => handleChange("message", e.target.value)}
                      placeholder="Décrivez votre demande..."
                      rows={5}
                      required
                    />
                  </div>

                  <Button type="submit" className="w-full bg-blue-600 hover:bg-blue-700">
                    <Send className="w-4 h-4 mr-2" />
                    Envoyer le message
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>

          {/* Informations de contact */}
          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Mail className="w-6 h-6 mr-2 text-blue-600" />
                  Nos coordonnées
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center space-x-3">
                  <Mail className="w-5 h-5 text-gray-500" />
                  <div>
                    <p className="font-medium">Email</p>
                    <p className="text-gray-600">contact@amiens-triathlon.fr</p>
                  </div>
                </div>

                <div className="flex items-center space-x-3">
                  <Phone className="w-5 h-5 text-gray-500" />
                  <div>
                    <p className="font-medium">Téléphone</p>
                    <p className="text-gray-600">06 11 73 21 11</p>
                  </div>
                </div>

                <div className="flex items-center space-x-3">
                  <MapPin className="w-5 h-5 text-gray-500" />
                  <div>
                    <p className="font-medium">Adresse</p>
                    <p className="text-gray-600">26 rue Marcel Pagnol<br />80480 DURY</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Clock className="w-6 h-6 mr-2 text-green-600" />
                  Horaires de contact
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span>Lundi - Vendredi</span>
                    <span className="font-medium">18h00 - 20h30</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Samedi</span>
                    <span className="font-medium">09h00 - 12h00</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Dimanche</span>
                    <span className="font-medium">09h00 - 11h00</span>
                  </div>
                </div>
                <p className="text-xs text-gray-500 mt-4">* Pendant les créneaux d'entraînement uniquement</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Lieux d'entraînement</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3 text-sm">
                <div>
                  <p className="font-medium">🏊‍♀️ Natation</p>
                  <p className="text-gray-600">Piscine Nautilus - Amiens</p>
                </div>
                <div>
                  <p className="font-medium">🚴‍♂️ Cyclisme</p>
                  <p className="text-gray-600">Gymnase municipal + sorties route</p>
                </div>
                <div>
                  <p className="font-medium">🏃‍♂️ Course à pied</p>
                  <p className="text-gray-600">Stade Moulonguet + Parc de la Hotoie</p>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-blue-50">
              <CardContent className="p-6">
                <h3 className="font-semibold text-gray-900 mb-3">Réponse rapide garantie</h3>
                <p className="text-sm text-gray-600">
                  Nous nous engageons à répondre à tous les messages dans les 24h. Pour les urgences, n'hésitez pas à
                  nous appeler directement.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* FAQ rapide */}
        <div className="mt-16">
          <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">Questions fréquentes</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <Card>
              <CardContent className="p-6">
                <h3 className="font-semibold text-gray-900 mb-2">Comment s'inscrire ?</h3>
                <p className="text-sm text-gray-600">
                  Contactez-nous pour organiser 2 séances d'essai gratuites, puis remplissez le dossier d'inscription.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <h3 className="font-semibold text-gray-900 mb-2">Quel matériel prévoir ?</h3>
                <p className="text-sm text-gray-600">
                  Pour débuter, seules les tenues de sport basiques sont nécessaires. Le matériel technique est fourni.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <h3 className="font-semibold text-gray-900 mb-2">Puis-je venir sans expérience ?</h3>
                <p className="text-sm text-gray-600">
                  Absolument ! Nous accueillons tous les niveaux avec des groupes adaptés aux débutants.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <h3 className="font-semibold text-gray-900 mb-2">Quels sont les tarifs ?</h3>
                <p className="text-sm text-gray-600">
                  À partir de 180€/an. Consultez notre page "Nous rejoindre" pour le détail des formules.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  )
}
