import illustration from 'public/illustration.jpg'
import noteo from 'public/NoteoDes.jpg'
import madagascar from "public/MadagascarDes.jpg"
import portfolio from "public/PortfolioDes.jpg"
import EddyDev from "public/EddyDev.png"
import onifra from "public/OnifraDes.jpg"

export const items = {
    fullstack: [
        {
            id: 1,
            title: "Oniversity FJKM Ravelonjaona",
            desc: "Lorem ipsum dolor sit amet consectetur adipisicing. Lorem ipsum dolor, sit amet consectetur adipisicing. Lorem ipsum dolor sit amet consectetur adipisicing. Lorem ipsum dolor sit amet consectetur adipisicing.",
            image: onifra,
            TechnoFront: "Tailwind et ReactJs",
            TechnoBack: "MySQL et Laravel",
            LiveLink: "https://onifra.mg",
            CodeLink: ""
        },
        {
            id: 2,
            title: "Blog and réalisation EddyDev",
            desc: "Lorem ipsum dolor sit amet consectetur adipisicing. Lorem ipsum dolor, sit amet consectetur adipisicing. Lorem ipsum dolor sit amet consectetur adipisicing. Lorem ipsum dolor sit amet consectetur adipisicing.",
            image: EddyDev,
            TechnoFront: "NextJs et Tailwind CSS",
            TechnoBack: "MongoDB et Mongoose",
            LiveLink: "https://eddy-dev.vercel.app/",
            CodeLink: "https://github.com/Eddy99leon/EddyDev"
        },
        {
            id: 3,
            title: "Plateforme Noteo",
            desc: "Lorem ipsum dolor sit amet consectetur adipisicing. Lorem ipsum dolor, sit amet consectetur adipisicing. Lorem ipsum dolor sit amet consectetur adipisicing. Lorem ipsum dolor sit amet consectetur adipisicing.",
            image: noteo,
            TechnoFront: "Tailwind et ReactJs",
            TechnoBack: "MySQL et Node/Express",
            LiveLink: "https://noteo.grossiste.mg/",
            CodeLink: ""
        },
    ],
    design: [
        {
            id: 1,
            title: "Creative Portfolio",
            desc: "Lorem ipsum dolor sit amet consectetur adipisicing. Lorem ipsum dolor, sit amet consectetur adipisicing. Lorem ipsum dolor sit amet consectetur adipisicing. Lorem ipsum dolor sit amet consectetur adipisicing.",
            image: illustration,
        },
        {
            id: 2,
            title: "Minimal Single Product",
            desc: "Lorem ipsum dolor sit amet consectetur adipisicing. Lorem ipsum dolor, sit amet consectetur adipisicing. Lorem ipsum dolor sit amet consectetur adipisicing. Lorem ipsum dolor sit amet consectetur adipisicing.",
            image: illustration,
        },
    ],
    frontend: [
        {
            id: 1,
            title: "Beautifull Madagascar",
            desc: "Lorem ipsum dolor sit amet consectetur adipisicing. Lorem ipsum dolor, sit amet consectetur adipisicing. Lorem ipsum dolor sit amet consectetur adipisicing. Lorem ipsum dolor sit amet consectetur adipisicing.",
            image: madagascar,
            Category: "frontend",
            TechnoFront: "Tailwind et ReactJs",
            TechnoBack: "",
            LiveLink: "https://eddy99leon.github.io/Madagascar/",
            CodeLink: "https://github.com/Eddy99leon/Madagascar"
        },
        {
            id: 2,
            title: "Creative EddyPortfolio",
            desc: "Lorem ipsum dolor sit amet consectetur adipisicing. Lorem ipsum dolor, sit amet consectetur adipisicing. Lorem ipsum dolor sit amet consectetur adipisicing. Lorem ipsum dolor sit amet consectetur adipisicing.",
            image: portfolio,
            Category: "frontend",
            TechnoFront: "Tailwind et ReactJs",
            TechnoBack: "",
            LiveLink: "https://eddy99leon.github.io/EddyPortfolio/",
            CodeLink: "https://github.com/Eddy99leon/EddyPortfolio"
        },
    ],
}