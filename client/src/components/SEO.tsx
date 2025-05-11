import { useEffect } from 'react';
import { useLocation } from 'wouter';

interface SEOProps {
  title?: string;
  description?: string;
  image?: string;
  article?: boolean;
  jsonLD?: Record<string, any>;
}

export default function SEO({
  title = "Rahul Vishwakarma | Full Stack Developer Portfolio",
  description = "Experienced Full Stack Developer specializing in React, Node.js, and modern web technologies. View my projects, skills, and professional experience.",
  image = "/og-image.jpg",
  article = false,
  jsonLD
}: SEOProps) {
  const [location] = useLocation();
  const url = `https://rahulvishwakarma.dev${location}`;
  
  useEffect(() => {
    // Update document title
    document.title = title;
    
    // Update meta tags
    const metaTags = {
      'description': description,
      'og:title': title,
      'og:description': description,
      'og:url': url,
      'og:type': article ? 'article' : 'website',
      'og:image': image,
      'twitter:title': title,
      'twitter:description': description,
      'twitter:url': url,
      'twitter:image': image
    };
    
    // Update or create meta tags
    Object.entries(metaTags).forEach(([name, content]) => {
      let meta = document.querySelector(`meta[property="${name}"]`) as HTMLMetaElement;
      
      // If the meta tag doesn't exist with property, try with name
      if (!meta) {
        meta = document.querySelector(`meta[name="${name}"]`) as HTMLMetaElement;
      }
      
      // If meta tag exists, update it
      if (meta) {
        meta.content = content;
      }
    });
    
    // Handle JSON-LD structured data
    if (jsonLD) {
      // Remove existing JSON-LD script if it exists
      const existingScript = document.querySelector('script[type="application/ld+json"]');
      if (existingScript) {
        existingScript.textContent = JSON.stringify(jsonLD);
      }
    }
    
    return () => {
      // Cleanup function if needed
    };
  }, [title, description, image, article, url, jsonLD]);
  
  return null; // This component doesn't render anything
} 