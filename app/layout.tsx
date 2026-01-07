import type { Metadata } from "next"
import "@/app/globals.css"
import { Inter } from "next/font/google"
import { ClientLayout } from "@/components/client-layout"
import Script from "next/script"
import { metadata as metadataConfig } from "./metadata"

const inter = Inter({ 
  subsets: ["latin"],
  display: 'swap',
  variable: '--font-inter',
})

export const metadata: Metadata = metadataConfig

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR" suppressHydrationWarning className={inter.variable}>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <meta name="theme-color" content="#115E59" />
      </head>
      <body className="min-h-screen bg-background font-sans text-foreground antialiased">
        <Script id="schema-org" type="application/ld+json">
          {`
            {
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": "Werts",
              "url": "https://www.werts.com.br",
              "logo": "/images/logo.png",
              "description": "Especialistas em painéis elétricos de baixa tensão, comandos e automação industrial com qualidade e segurança.",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "Av. Tore Albert Munck, 116",
                "addressLocality": "Cotia",
                "addressRegion": "SP",
                "postalCode": "06715-050",
                "addressCountry": "BR"
              },
              "contactPoint": {
                "@type": "ContactPoint",
                "telephone": "+55-11-97830-4267",
                "contactType": "sales",
                "email": "francisco@werts.com.br",
                "availableLanguage": "Portuguese"
              },
              "sameAs": [
                "https://www.facebook.com/werts",
                "https://www.instagram.com/werts",
                "https://www.linkedin.com/company/werts"
              ]
            }
          `}
        </Script>
        <ClientLayout>{children}</ClientLayout>
      </body>
    </html>
  )
}
