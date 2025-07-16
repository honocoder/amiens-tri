import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { CheckCircle, Heart, Waves, FileText, ExternalLink, Mail, Phone, MapPin, Clock } from "lucide-react"
import Link from "next/link"

export default function NousRejoindre() {
  return (
    <div className="min-h-screen bg-slate-50">
      {/* Header avec style cohérent */}
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
              <Link href="/" className="text-slate-700 hover:text-blue-600 font-medium hover:border-b-2 hover:border-blue-500 transition-all">
                Accueil
              </Link>
              <Link
                href="/nous-rejoindre"
                className="text-slate-700 hover:text-blue-600 font-medium border-b-2 border-blue-500"
              >
                Nous rejoindre
              </Link>
              <Link
                href="/resultats"
                className="text-slate-700 hover:text-blue-600 font-medium hover:border-b-2 hover:border-blue-500 transition-all"
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

      {/* Hero Section */}
      <section className="relative py-20 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-cyan-50"></div>
        <div className="container mx-auto text-center relative z-10">
          <h2 className="text-5xl font-black text-slate-800 mb-6 leading-tight">
            <span className="text-blue-600 relative">
              S'inscrire
              <div className="absolute -bottom-2 left-0 right-0 h-3 bg-yellow-300 opacity-30 transform -skew-x-12"></div>
            </span>
            <br />
            chez Amiens Triathlon
          </h2>
          <p className="text-xl text-slate-600 mb-10 max-w-3xl mx-auto leading-relaxed">
            Découvrez comment adhérer à notre club et rejoindre notre communauté de passionnés de triathlon.
          </p>
        </div>
      </section>

      <div className="container mx-auto px-4 py-12">
        {/* Procédure d'adhésion */}
        <section className="mb-16">
          <h2 className="text-4xl font-bold text-slate-800 mb-8 text-center">Procédure d'adhésion</h2>
          
          {/* Étape 1 : Fédération */}
          <div className="mb-12">
            <div className="bg-white rounded-3xl shadow-lg p-8 border-l-4 border-blue-500">
              <div className="flex items-center mb-6">
                <div className="w-16 h-16 bg-blue-500 rounded-2xl flex items-center justify-center mr-4">
                  <FileText className="w-8 h-8 text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-slate-800">Étape 1 : Fédération Française de Triathlon</h3>
                  <p className="text-slate-600 mt-1">Création de votre licence FFTRI</p>
                </div>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-blue-50 p-6 rounded-xl">
                  <h4 className="font-semibold text-slate-800 mb-3">1. Connexion au site FFTRI</h4>
                  <p className="text-slate-600 mb-4">
                    Vous devez tout d'abord vous connecter ou créer un compte sur le site de la Fédération Française de Triathlon.
                  </p>
                  <Button 
                    asChild 
                    size="sm" 
                    className="bg-blue-600 hover:bg-blue-700 text-white"
                  >
                    <Link href="https://www.fftri.com" target="_blank" className="inline-flex items-center">
                      Site FFTRI <ExternalLink className="w-4 h-4 ml-2" />
                    </Link>
                  </Button>
                </div>
                
                <div className="bg-blue-50 p-6 rounded-xl">
                  <h4 className="font-semibold text-slate-800 mb-3">2. Demande de licence</h4>
                  <p className="text-slate-600 mb-4">
                    Remplissez le formulaire en ligne, bien choisir la <strong>Ligue des Hauts de France</strong> et le club <strong>Amiens Triathlon</strong>.
                  </p>
                  <p className="text-sm text-slate-500">
                    Voir tutoriel ci-dessous pour plus de détails
                  </p>
                </div>
              </div>
              
              <div className="mt-6 bg-yellow-50 p-4 rounded-xl">
                <p className="text-slate-700 font-medium">
                  📋 N'oubliez pas d'imprimer le formulaire une fois rempli !
                </p>
              </div>
            </div>
          </div>

          {/* Étape 2 : Certificat médical */}
          <div className="mb-12">
            <div className="bg-white rounded-3xl shadow-lg p-8 border-l-4 border-green-500">
              <div className="flex items-center mb-6">
                <div className="w-16 h-16 bg-green-500 rounded-2xl flex items-center justify-center mr-4">
                  <Heart className="w-8 h-8 text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-slate-800">Étape 2 : Certificat Médical</h3>
                  <p className="text-slate-600 mt-1">Document médical obligatoire</p>
                </div>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-green-50 p-6 rounded-xl">
                  <h4 className="font-semibold text-slate-800 mb-3">Type de certificat</h4>
                  <p className="text-slate-600">
                    Faites faire un <strong>certificat médical de non contre-indication à la pratique du triathlon en compétition</strong> auprès de votre médecin traitant.
                  </p>
                </div>
                
                <div className="bg-green-50 p-6 rounded-xl">
                  <h4 className="font-semibold text-slate-800 mb-3">Recommandation</h4>
                  <p className="text-slate-600 mb-4">
                    Même si vous prenez une licence loisir, ce certificat est <strong>recommandé</strong> pour votre sécurité.
                  </p>
                  <Button 
                    asChild 
                    size="sm" 
                    variant="outline" 
                    className="border-green-600 text-green-600 hover:bg-green-50"
                  >
                    <Link href="/certificat_medical.pdf" target="_blank" className="inline-flex items-center">
                      Exemple de certificat <ExternalLink className="w-4 h-4 ml-2" />
                    </Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>

          {/* Étape 3 : Transmission */}
          <div className="mb-12">
            <div className="bg-white rounded-3xl shadow-lg p-8 border-l-4 border-orange-500">
              <div className="flex items-center mb-6">
                <div className="w-16 h-16 bg-orange-500 rounded-2xl flex items-center justify-center mr-4">
                  <Mail className="w-8 h-8 text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-slate-800">Étape 3 : Transmission du dossier</h3>
                  <p className="text-slate-600 mt-1">Envoi de vos documents</p>
                </div>
              </div>
              
              <div className="space-y-6">
                <div className="bg-orange-50 p-6 rounded-xl">
                  <h4 className="font-semibold text-slate-800 mb-3">📋 Dossier à envoyer</h4>
                  <ul className="space-y-2 text-slate-600">
                    <li className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                      <span>Formulaire FFTRI rempli et signé</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                      <span>Certificat médical</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                      <span>Règlement (chèque ou virement)</span>
                    </li>
                  </ul>
                </div>
                
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="bg-slate-100 p-6 rounded-xl">
                    <h4 className="font-semibold text-slate-800 mb-3 flex items-center">
                      <MapPin className="w-5 h-5 text-slate-600 mr-2" />
                      Adresse d'envoi
                    </h4>
                    <div className="text-slate-600">
                      <p className="font-medium">Amiens Triathlon</p>
                      <p>26 rue Marcel Pagnol</p>
                      <p>80480 DURY</p>
                    </div>
                  </div>
                  
                  <div className="bg-slate-100 p-6 rounded-xl">
                    <h4 className="font-semibold text-slate-800 mb-3 flex items-center">
                      <Clock className="w-5 h-5 text-slate-600 mr-2" />
                      Modalités d'envoi
                    </h4>
                    <p className="text-slate-600 text-sm">
                      Des plages horaires seront mises en place pour le dépôt des dossiers ou vous pouvez nous envoyer par courrier ou en main propre.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Informations importantes */}
          <div className="bg-gradient-to-r from-red-50 to-orange-50 border-l-4 border-red-500 p-6 rounded-xl mb-8">
            <h4 className="font-bold text-slate-800 mb-4">⚠️ Informations importantes</h4>
            <ul className="space-y-3 text-slate-700">
              <li className="flex items-start">
                <span className="text-red-500 mr-2">•</span>
                <span>
                  <strong>Date limite :</strong> 30 octobre - Au-delà, une pénalité de 50 € est appliquée par la FFTRI
                </span>
              </li>
              <li className="flex items-start">
                <span className="text-red-500 mr-2">•</span>
                <span>
                  Merci de ne pas donner les documents aux autres personnes du bureau. Nous devons effectuer un suivi régulier.
                </span>
              </li>
              <li className="flex items-start">
                <span className="text-red-500 mr-2">•</span>
                <span>
                  La gestion des renouvellements de licences est relativement lourde. Merci de bien respecter les délais et modalités.
                </span>
              </li>
            </ul>
          </div>

          {/* Suivi du dossier */}
          <div className="bg-white rounded-3xl shadow-lg p-8 border-l-4 border-purple-500">
            <div className="flex items-center mb-4">
              <div className="w-16 h-16 bg-purple-500 rounded-2xl flex items-center justify-center mr-4">
                <CheckCircle className="w-8 h-8 text-white" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-slate-800">Suivi de votre dossier</h3>
                <p className="text-slate-600 mt-1">Après réception de vos documents</p>
              </div>
            </div>
            
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-purple-50 p-6 rounded-xl">
                <h4 className="font-semibold text-slate-800 mb-3">Traitement administratif</h4>
                <p className="text-slate-600">
                  Une fois les pièces reçues, nous nous occupons de l'administratif avec la FFTRI et vous recevrez un email avec vos identifiants de connexion.
                </p>
              </div>
              
              <div className="bg-purple-50 p-6 rounded-xl">
                <h4 className="font-semibold text-slate-800 mb-3">Suivi en ligne</h4>
                <p className="text-slate-600 mb-4">
                  Vous pourrez suivre l'avancée de votre demande de licence sur <strong>espacetri 2.0</strong>.
                </p>
                <Button 
                  asChild 
                  size="sm" 
                  variant="outline" 
                  className="border-purple-600 text-purple-600 hover:bg-purple-50"
                >
                  <Link href="https://espacetri.fftri.com" target="_blank" className="inline-flex items-center">
                    Espacetri 2.0 <ExternalLink className="w-4 h-4 ml-2" />
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Ressources */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-slate-800 mb-8 text-center">Ressources utiles</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="bg-gradient-to-br from-blue-50 to-blue-100 border-blue-200 hover:shadow-lg transition-shadow">
              <CardContent className="p-8 text-center">
                <FileText className="w-12 h-12 text-blue-600 mx-auto mb-4" />
                <h3 className="text-xl font-bold text-slate-800 mb-3">Tutoriel d'inscription</h3>
                <p className="text-slate-600 mb-6">
                  Guide pas à pas pour créer votre compte et demander votre licence sur le site de la FFTRI.
                </p>
                <Button 
                  asChild 
                  className="bg-blue-600 hover:bg-blue-700 text-white"
                >
                  <Link href="/tuto_prise_licence.pdf" target="_blank" className="inline-flex items-center">
                    Voir le tutoriel <ExternalLink className="w-4 h-4 ml-2" />
                  </Link>
                </Button>
              </CardContent>
            </Card>
            
            <Card className="bg-gradient-to-br from-green-50 to-green-100 border-green-200 hover:shadow-lg transition-shadow">
              <CardContent className="p-8 text-center">
                <Heart className="w-12 h-12 text-green-600 mx-auto mb-4" />
                <h3 className="text-xl font-bold text-slate-800 mb-3">Certificat médical</h3>
                <p className="text-slate-600 mb-6">
                  Exemple de certificat médical proposé par la Fédération pour faciliter votre démarche.
                </p>
                <Button 
                  asChild 
                  className="bg-green-600 hover:bg-green-700 text-white"
                >
                  <Link href="/certificat_medical.pdf" target="_blank" className="inline-flex items-center">
                    Télécharger l'exemple <ExternalLink className="w-4 h-4 ml-2" />
                  </Link>
                </Button>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* CTA Final */}
        <section className="bg-gradient-to-r from-blue-600 to-green-500 text-white rounded-3xl p-12 text-center">
          <h2 className="text-4xl font-bold mb-6">À bientôt chez Amiens Triathlon !</h2>
          <p className="text-xl mb-10 max-w-2xl mx-auto">
            Si vous avez des questions, n'hésitez pas à nous contacter. Nous sommes là pour vous accompagner dans votre démarche d'inscription !
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              asChild
              size="lg"
              className="bg-white text-blue-600 hover:bg-slate-100 px-8 py-4 text-lg font-semibold rounded-xl shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all"
            >
              <Link href="/contact" className="inline-flex items-center">
                <Mail className="w-5 h-5 mr-2" />
                Envoyer un message
              </Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-2 border-white bg-transparent text-white hover:bg-white hover:text-blue-600 px-8 py-4 text-lg font-semibold rounded-xl shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all"
            >
              <Link href="tel:0611732111" className="inline-flex items-center !text-white hover:!text-blue-600">
                <Phone className="w-5 h-5 mr-2" />
                06 11 73 21 11
              </Link>
            </Button>
          </div>
        </section>
      </div>

      {/* Footer */}
      <footer className="bg-slate-900 text-white py-16 px-4 mt-16">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="md:col-span-2">
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-cyan-400 rounded-full flex items-center justify-center">
                  <Waves className="w-7 h-7 text-white" />
                </div>
                <div>
                  <h4 className="text-2xl font-bold">Amiens Triathlon</h4>
                  <p className="text-slate-400 text-sm">Nager • Pédaler • Courir</p>
                </div>
              </div>
              <p className="text-slate-300 leading-relaxed mb-6">
                Plus qu'un club, une famille ! Depuis 2009, nous accompagnons les passionnés de triathlon dans la Somme
                avec bonne humeur et expertise.
              </p>
              <div className="flex space-x-4">
                <div className="w-10 h-10 bg-slate-800 rounded-full flex items-center justify-center hover:bg-blue-600 transition-colors cursor-pointer">
                  <span className="text-sm font-bold">FB</span>
                </div>
                <div className="w-10 h-10 bg-slate-800 rounded-full flex items-center justify-center hover:bg-blue-600 transition-colors cursor-pointer">
                  <span className="text-sm font-bold">IG</span>
                </div>
              </div>
            </div>

            <div>
              <h5 className="font-bold mb-4 text-yellow-400">Navigation</h5>
              <div className="space-y-3">
                <Link href="/nous-rejoindre" className="block text-slate-300 hover:text-white transition-colors">
                  → Nous rejoindre
                </Link>
                <Link href="/entrainements" className="block text-slate-300 hover:text-white transition-colors">
                  → Entraînements
                </Link>
                <Link href="/ecole-triathlon" className="block text-slate-300 hover:text-white transition-colors">
                  → École de triathlon
                </Link>
                <Link href="/resultats" className="block text-slate-300 hover:text-white transition-colors">
                  → Résultats
                </Link>
                <Link href="/contact" className="block text-slate-300 hover:text-white transition-colors">
                  → Contact
                </Link>
              </div>
            </div>

            <div>
              <h5 className="font-bold mb-4 text-yellow-400">On vous attend !</h5>
              <div className="space-y-3 text-slate-300 text-sm">
                <p className="flex items-center">
                  <span className="mr-2">📧</span> contact@amiens-triathlon.fr
                </p>
                <p className="flex items-center">
                  <span className="mr-2">📱</span> 06 11 73 21 11
                </p>
                <p className="flex items-center">
                  <span className="mr-2">📍</span> 26 rue Marcel Pagnol, 80480 DURY
                </p>
                <p className="flex items-center">
                  <span className="mr-2">⏰</span> Lun-Sam : 18h-20h30
                </p>
              </div>
            </div>
          </div>

          <div className="border-t border-slate-800 mt-12 pt-8 text-center">
            <p className="text-slate-400">
              &copy; {new Date().getFullYear()} Amiens Triathlon - Fait avec ❤️ pour les passionnés de tri !
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}