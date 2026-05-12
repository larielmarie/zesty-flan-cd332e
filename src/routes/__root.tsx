import { HeadContent, Scripts, createRootRoute } from '@tanstack/react-router'
import '../styles.css'

export const Route = createRootRoute({
  head: () => ({
    meta: [
      { charSet: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { title: 'Advanced Furniture | Commercial Furniture Installation | Florida & Nationwide' },
      { name: 'description', content: 'Advanced Furniture provides expert commercial furniture installation across Florida and nationwide. Specializing in systems furniture, case goods, healthcare, and government projects. Serving Pensacola, Gulf Coast, and beyond.' },
      { name: 'keywords', content: 'commercial furniture installation Florida, office furniture installation, systems furniture installation, Pensacola furniture installation, Florida commercial furniture, florida furniture installation, florida furniture company, travel commerical furniture installation, afi, advanced furniture installation, nationwide furniture installation' },
    ],
    links: [
      { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
      { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossOrigin: 'anonymous' },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;600;700;900&family=Barlow+Condensed:wght@400;500;600;700&display=swap' },
    ],
  }),
  shellComponent: RootDocument,
})

function RootDocument({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  )
}
