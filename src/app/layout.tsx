import { Metadata } from 'next';

import { Footer } from '@/components/footer';
import { Header } from '@/components/header';

import './globals.css';

export const metadata: Metadata = {
  title: {
    default: 'Investindo Com Pouco',
    template: '%s | Investindo Com Pouco'
  },
  icons: {
    icon: {
      url: '/images/channelLogo.jpeg'
    }
  },
  description:
    'Conheça nosso canal no youtube, com diversos conteúdos informativos, como notícias sobre o mercado de ações, fundos imobiliários, indicadores fundamentalistas e conteúdo didático. Venham conhecer nosso canal e descubrar como investir.',
  openGraph: {
    title: 'Investindo Com Pouco',
    description:
      'Conheça nosso canal no youtube, com diversos conteúdos informativos, como notícias sobre o mercado de ações, fundos imobiliários, indicadores fundamentalistas e conteúdo didático. Venham conhecer nosso canal e descubrar como investir.',
    url: 'https://investindocompouco.vercel.app/',
    siteName: 'InvestindoComPouco'
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Investindo Com Pouco',
    description:
      'Conheça nosso canal no youtube, com diversos conteúdos informativos, como notícias sobre o mercado de ações, fundos imobiliários, indicadores fundamentalistas e conteúdo didático. Venham conhecer nosso canal e descubrar como investir.'
  },
  authors: [
    {
      name: 'Maycon Douglas',
      url: 'https://github.com/mayconjzj'
    }
  ],
  category: 'Finanças'
};

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-br">
      <body>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
