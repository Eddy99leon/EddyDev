import Image from "next/image";
import Link from "next/link";
import hero from "public/hero.png"

export default function Home() {
  return (
    <div className="container flex justify-between items-center gap-10">
      <div className="flex-1">
        <h1 className="text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-sky-600 to-red-500 py-1 mb-4">
          Meilleur design
          <br />pour votre produit
          <br />digital.
        </h1>
        <p className="font-medium text-gray-300 mb-4">
          Transformer votre idée en réalité. Nous rassemblons
          <br />les équipes de l'industrie technologique mondiale.
        </p>
        <Link 
          href="/portfolio"
          className=""
        >
          <button className="bg-blue-500 text-gray-950 font-semibold text-sm px-4 py-2 rounded-sm">
            Voir Plus
          </button>
        </Link>
      </div>
      <div className="flex-1">
        <Image src={hero} alt='hero' priority={true} className="object-cover" />
      </div>
    </div>
  )
}
