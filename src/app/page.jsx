import Image from "next/image";
import Link from "next/link";
import hero from "public/hero.png"

export default function Home() {
  return (
    <div className="container flex justify-between items-center gap-10">
      <div className="flex-1">
        <div className="flex justify-center lg:justify-start">
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-sky-600 to-red-500 py-1 mb-4 inline-block text-center lg:text-left">
            Meilleur design
            <br />pour votre produit
            <br />digital.
          </h1>
        </div>
        <p className="text-xs sm:text-sm md:text-md font-medium text-gray-300 mb-4 text-center lg:text-left">
          Transformer votre idée en réalité. Nous rassemblons
          <br />les équipes de l'industrie technologique mondiale.
        </p>
        <Link 
          href="/portfolio"
          className="flex justify-center lg:justify-start"
        >
          <button className="bg-blue-500 text-gray-950 font-bold text-xs sm:text-sm px-4 py-2 rounded-sm">
            Voir Plus
          </button>
        </Link>
      </div>
      <div className="flex-1 hidden lg:block">
        <Image src={hero} alt='hero' priority={true} className="object-cover" />
      </div>
    </div>
  )
}
