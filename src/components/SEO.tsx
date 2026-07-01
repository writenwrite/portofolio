import { Helmet } from 'react-helmet-async'

interface SEOProps {
  title?: string
  desc?: string
  path?: string
}

function SEO({ title, desc, path }: SEOProps) {
  const site = 'Novan Portfolio'
  const fullTitle = title ? `${title} | ${site}` : site
  const description = desc || 'Portfolio website - Full-Stack Developer'
  const url = `https://novan.dev${path || '/'}`

  return (
    <Helmet>
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={url} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
    </Helmet>
  )
}

export default SEO
