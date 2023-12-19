/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        domains: ['images.unsplash.com', 'anotherdomain.com'], // Ajoutez ici les domaines autorisés pour les images externes
        deviceSizes: [320, 640, 860, 1080], // Tailles des appareils prises en charge
        imageSizes: [16, 32, 48, 64], // Tailles des images générées
        // path: '/_next/image', // Chemin pour accéder à la génération d'images
        loader: 'default', // Type de chargement pour les images (default | imgix | cloudinary | akamai | etc.)
    },
}

module.exports = nextConfig
