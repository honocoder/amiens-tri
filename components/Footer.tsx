import Link from "next/link"
import { Waves } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-white py-16 px-4">
      <div className="container mx-auto">
        <div className="grid md:grid-cols-4 gap-8">
          <div className="md:col-span-2">
            <div className="flex items-center space-x-3 mb-6">
              <img 
                src="/logo.png" 
                alt="Amiens Triathlon"
                className="w-12 h-12 object-contain filter brightness-0 saturate-100 invert"
              />
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
              <a
                href="https://www.facebook.com/pageamienstriathlon/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-slate-800 rounded-full flex items-center justify-center hover:bg-blue-600 transition-colors cursor-pointer"
                aria-label="Facebook Amiens Triathlon"
              >
                <span className="text-sm font-bold">FB</span>
              </a>
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
              <Link href="/histoire" className="block text-slate-300 hover:text-white transition-colors">
                → Histoire du club
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
  )
} 