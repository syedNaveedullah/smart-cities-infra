import React, { useEffect } from 'react';
import { useLocation } from '../router/Router';

const SEO = ({ 
  title, 
  description, 
  keywords, 
  image = '/og-image.png',
  type = 'website'
}) => {
  const location = useLocation();
  const baseUrl = 'https://smartcitiesinfra.com';
  const currentUrl = `${baseUrl}${location.pathname}`;

  useEffect(() => {
  // Update title
  document.title = title;

  // Update meta tags (only if provided)
  if (description) {
    updateMetaTag('name', 'description', description);
  }

  if (keywords) {
    updateMetaTag('name', 'keywords', keywords);
  }

  // Update Open Graph tags
  updateMetaTag('property', 'og:title', title);
  updateMetaTag('property', 'og:description', description);
  updateMetaTag('property', 'og:url', currentUrl);
  updateMetaTag('property', 'og:image', `${baseUrl}${image}`);
  updateMetaTag('property', 'og:type', type);

  // Update Twitter tags
  updateMetaTag('property', 'twitter:title', title);
  updateMetaTag('property', 'twitter:description', description);
  updateMetaTag('property', 'twitter:image', `${baseUrl}${image}`);

  // Update canonical link
  updateCanonical(currentUrl);
}, [title, description, keywords, currentUrl, image, type]);


  return null;
};

const updateMetaTag = (attr, key, content) => {
  let element = document.querySelector(`meta[${attr}="${key}"]`);
  if (element) {
    element.setAttribute('content', content);
  } else {
    element = document.createElement('meta');
    element.setAttribute(attr, key);
    element.setAttribute('content', content);
    document.head.appendChild(element);
  }
};

const updateCanonical = (url) => {
  let link = document.querySelector('link[rel="canonical"]');
  if (link) {
    link.setAttribute('href', url);
  } else {
    link = document.createElement('link');
    link.setAttribute('rel', 'canonical');
    link.setAttribute('href', url);
    document.head.appendChild(link);
  }
};

export default SEO;