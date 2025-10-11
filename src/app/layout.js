import localFont from "next/font/local";
import "./globals.css";
import { SpeedInsights } from '@vercel/speed-insights/next';
import { name, base_url, contact } from '@/app/information'
import Critters from 'critters';

export const metadata = {
    openGraph: {
        siteName: name,
        title: "Best spa and massage center near me in Mumbai | Angel Spa",
        description: "Experience authentic Thai spa treatments in Mumbai at Angel Spa. Relax, rejuvenate, and unwind with our luxurious massages and wellness therapies.",
        url: base_url,
        type: "website",
        locale: "en_US"
    },
    author: { name: 'Dhyey Rathod', url: base_url },
    keywords: ['Best spa center near me in Mumbai', 'Best massage center near me in Mumbai', 'Best spa center in Mumbai', 'Best massage center in Mumbai'],
    robots: {
        index: true, follow: true,
    },
    verification: {
        google: 'i9hQCIBWCBRon5t-0wnEsQrLbBzMLT93x8I2tDNw7MI',
    },
}

export default function RootLayout({ children }) {

    const jsonLd = {
        "@context": "https://schema.org",
        "@type": "LocalBusiness",
        "name": name,
        "address": {
            "@type": "PostalAddress",
            "addressLocality": "Mumbai",
            "addressRegion": "Maharashtra",
            "postalCode": "400092",
            "addressCountry": "IN"
        },
        "telephone": "+91 " + contact,
        "url": "https://angelspa.vercel.app",
        "image": base_url + "/assets/img/features/banner-01.webp",
        "description": "Angel Spa is the best aroma manicure centre in Mumbai, offering relaxing and natural nail care with essential oils.",
        "openingHours": "Mo-Su 10:00-22:00"
    };
    return (
        <html lang="en">
            <body>
                <script
                    id="blog-schema"
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
                />
                {children}
                <script src={base_url + "assets/js/vendor/jquery-3.6.0.min.js"}></script>
                <script src={base_url + "assets/js/jquery.meanmenu.min.js"} strategy="lazyOnload"></script>
                <SpeedInsights />
            </body>
        </html>
    );
}
