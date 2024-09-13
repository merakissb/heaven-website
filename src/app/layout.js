import * as React from 'react';
import { AppRouterCacheProvider } from '@mui/material-nextjs/v14-appRouter';
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import theme from '@/theme';
import ResponsiveAppBar from '@/components/Appbar';

export const metadata = {
  title: "Vertical SPA - Limpieza de Edificios y Fachadas",
  description: "Expertos en mantenimiento y limpieza de edificios. Optimiza la gestión de limpieza de tu empresa con nuestros servicios profesionales en limpieza vertical y mantenimiento de fachadas.",
  keywords: "limpieza de edificios, mantenimiento de fachadas, limpieza vertical, Vertical SPA, limpieza de altura",
  openGraph: {
    title: "Vertical SPA - Servicios Profesionales de Limpieza de Edificios",
    description: "Somos líderes en la limpieza y mantenimiento de fachadas y edificios. Descubre cómo optimizamos la limpieza de altura con nuestras soluciones profesionales.",
    url: "https://www.verticalspa.cl",
    type: "website"
  }
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <head>
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
        <meta name="keywords" content={metadata.keywords} />
        <meta property="og:title" content={metadata.openGraph.title} />
        <meta property="og:description" content={metadata.openGraph.description} />
        <meta property="og:url" content={metadata.openGraph.url} />
        <meta property="og:type" content={metadata.openGraph.type} />
      </head>
      <body>
        <AppRouterCacheProvider options={{ enableCssLayer: true }}>
          <ThemeProvider theme={theme}>
            <CssBaseline />
            <ResponsiveAppBar />
            {children}
          </ThemeProvider>
        </AppRouterCacheProvider>
      </body>
    </html>
  );
}
