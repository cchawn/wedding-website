// ABOUTME: Main landing page for Christina & Peter's wedding website
// ABOUTME: Displays "Coming Soon" message with names and date

import React from 'react';
import Head from 'next/head';
import ConfettiCanvas from '../components/ConfettiCanvas';

export default function Home() {
  return (
    <>
      <Head>
        <title>Christina & Peter - Coming Soon</title>
        <meta name="description" content="Join us for our wedding celebration in Fall 2026! More details coming soon." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        
        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Christina & Peter - Coming Soon" />
        <meta property="og:description" content="Join us for our wedding celebration in Fall 2026! More details coming soon." />
        
        {/* Twitter */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:title" content="Christina & Peter - Coming Soon" />
        <meta property="twitter:description" content="Join us for our wedding celebration in Fall 2026! More details coming soon." />
        
        {/* Favicons and PWA */}
        <meta name="theme-color" content="#fdcb6e" />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <link rel="manifest" href="/manifest.json" />
        
        {/* Fonts */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;700&family=Dancing+Script:wght@400;600;700&display=swap" rel="stylesheet" />
      </Head>
      <ConfettiCanvas />
      <main className="container">
        <div className="content">
          <h1 className="names">Christina & Peter</h1>
          <h2 className="date">Fall 2026</h2>
          <p className="message">Coming Soon</p>
        </div>
      </main>
    </>
  );
}