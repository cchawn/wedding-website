// ABOUTME: Next.js app component for global configuration
// ABOUTME: Imports global styles and wraps all pages

import type { AppProps } from 'next/app';
import '../styles/globals.css';

export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}