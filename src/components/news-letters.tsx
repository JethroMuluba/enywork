"use client"

import type React from "react"

import { useState } from "react"
import { ArrowRight, Mail } from "lucide-react"

export default function NewsletterSection() {
  const [email, setEmail] = useState("")

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle newsletter subscription
    console.log("Subscribing email:", email)
    setEmail("")
    // Show success message or handle errors
  }

  return (
    <section className="py-12 md:py-16 bg-secondary bg-opacity-75 bg-blend-overlay bg-[url('/placeholder.svg?height=278&width=1535')]">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">
          <div>
            <h2 className="text-2xl md:text-3xl font-medium text-white leading-tight">Restez Connecter avec Nous</h2>
          </div>

          <div className="flex items-center gap-4">
            <Mail className="hidden md:block w-16 h-16 text-primary" />
            <p className="text-white">
              Abonnez-vous à notre newsletter pour recevoir les dernières actualités et mises à jour directement dans
              votre boîte de réception.
            </p>
          </div>

          <div>
            <form onSubmit={handleSubmit} className="flex flex-col gap-5">
              <div className="flex flex-col md:flex-row gap-4">
                <input
                  type="email"
                  placeholder="Saisissez votre Email"
                  className="flex-1 px-4 py-2 rounded"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
                <button type="submit" className="btn-primary whitespace-nowrap">
                  <span>S'ABONNER</span>
                  <ArrowRight className="w-5 h-5" />
                </button>
              </div>

              <p className="text-xs text-white">
                Votre adresse email est utilisée par Enywork SARL, en qualité de responsable de traitement, à des fins
                de prospection commerciale (nouveautés, actualités, services...). Pour connaître notre Politique de
                données personnelles et en savoir plus sur vos droits, veuillez vous rendre sur la page Protection des
                données personnelles
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}

