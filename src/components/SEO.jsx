import React from 'react'
import { Helmet } from 'react-helmet-async'

const SEO = ({ 
  title = "École Saint Pierre Claver - Bilingual Catholic Education",
  description = "Premier Catholic bilingual educational institution in Ghana since 1970. Excellence in academics, discipline, and moral values.",
  keywords = "bilingual school, Catholic education, Ghana, French English, academic excellence",
  image = "/og-image.jpg",
  url = "https://stpierreclaver.edu.gh",
  language = "fr"
}) => {
  const siteTitle = "École Saint Pierre Claver | Saint Peter Claver School"
  
  return (
    <Helmet>
      <title>{title} | {siteTitle}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta name="language" content={language} />
      
      {/* Open Graph */}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      <meta property="og:url" content={url} />
      <meta property="og:type" content="website" />
      <meta property="og:site_name" content={siteTitle} />
      
      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />
      
      {/* Additional SEO */}
      <meta name="robots" content="index, follow" />
      <meta name="author" content="École Saint Pierre Claver" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      
      {/* Google Analytics Script */}
      <script async src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"></script>
      <script>
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'GA_MEASUREMENT_ID');
        `}
      </script>
    </Helmet>
  )
}

export default SEO