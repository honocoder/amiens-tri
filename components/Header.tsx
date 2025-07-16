"use client"

import Link from "next/link"
import { useState } from "react"
import { Menu, X } from "lucide-react"

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  const closeMenu = () => {
    setIsMenuOpen(false)
  }

  return (
    <header className="bg-white shadow-lg border-b-4 border-blue-500">
      <div className="container mx-auto px-4 py-6">
        <nav className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="relative">
              <img 
                src="/logo.png" 
                alt="Amiens Triathlon"
                className="w-12 h-12 object-contain filter brightness-0 saturate-100"
              />
            </div>
            <div>
              <h1 className="text-2xl font-bold text-slate-800 tracking-tight">Amiens Triathlon</h1>
              <p className="text-xs text-slate-500 font-medium">Nager • Pédaler • Courir</p>
            </div>
          </div>
          
          {/* Menu desktop */}
          <div className="hidden md:flex space-x-8">
            <Link href="/" className="text-slate-700 hover:text-blue-600 font-medium hover:border-b-2 hover:border-blue-500 transition-all">
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

          {/* Bouton hamburger mobile */}
          <button
            onClick={toggleMenu}
            className="md:hidden p-2 text-slate-700 hover:text-blue-600 transition-colors"
            aria-label="Menu"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </nav>

        {/* Menu mobile */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-4 border-t border-slate-200">
            <div className="flex flex-col space-y-4 pt-4">
              <Link 
                href="/" 
                onClick={closeMenu}
                className="text-slate-700 hover:text-blue-600 font-medium py-2 px-4 rounded-lg hover:bg-slate-50 transition-all"
              >
                Accueil
              </Link>
              <Link
                href="/nous-rejoindre"
                onClick={closeMenu}
                className="text-slate-700 hover:text-blue-600 font-medium py-2 px-4 rounded-lg hover:bg-slate-50 transition-all"
              >
                Nous rejoindre
              </Link>
              <Link
                href="/resultats"
                onClick={closeMenu}
                className="text-slate-700 hover:text-blue-600 font-medium py-2 px-4 rounded-lg hover:bg-slate-50 transition-all"
              >
                Nos résultats
              </Link>
              <Link
                href="/entrainements"
                onClick={closeMenu}
                className="text-slate-700 hover:text-blue-600 font-medium py-2 px-4 rounded-lg hover:bg-slate-50 transition-all"
              >
                Nos entraînements
              </Link>
              <Link
                href="/ecole-triathlon"
                onClick={closeMenu}
                className="text-slate-700 hover:text-blue-600 font-medium py-2 px-4 rounded-lg hover:bg-slate-50 transition-all"
              >
                L'école de triathlon
              </Link>
              <Link
                href="/histoire"
                onClick={closeMenu}
                className="text-slate-700 hover:text-blue-600 font-medium py-2 px-4 rounded-lg hover:bg-slate-50 transition-all"
              >
                Histoire du club
              </Link>
              <Link
                href="/contact"
                onClick={closeMenu}
                className="text-slate-700 hover:text-blue-600 font-medium py-2 px-4 rounded-lg hover:bg-slate-50 transition-all"
              >
                Contact
              </Link>
            </div>
          </div>
        )}
      </div>
    </header>
  )
}