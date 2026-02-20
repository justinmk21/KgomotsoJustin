import Drums from './assets/Drums.jpg'
import Cosmetic from './assets/promo2.jpg'

export const technicalExpertise = [
    {
        technology: "JavaScript",
        description: "ES6+, React, Node",
        icon: "JS",
    },
    {
        technology: "Python",
        description: "Django, Pandas, ML",
        icon: "PY",
    },
    {
        technology: "Deployment",
        description: "Vercel, GCP, CI/CD",
        icon: "cloud_done",
    },
    {
        technology: "LLM Intergration",
        description: "OpenAI, Google Studio, Hugging Face",
        icon: "psychology_alt",
    },
    {
        technology: "Bootstrap",
        description: "Styling, Responsive",
        icon: "BS",
    },
    {
        technology: "Tailwind CSS",
        description: "Styling, Responsive",
        icon: "TW",
    },
    {
        technology: "React",
        description: "Hooks, Context API",
        icon: "R",
    },
    {
        technology: "HTML5",
        description: "Semantic Tags",
        icon: "H5",
    },
    {
        technology: "Git",
        description: "Workflow, Branching",
        icon: "source",
    },
]

export const projects = [
    {
        id: 1,
        title: "Justin 'n Beats",
        type: "Web App",
        niche: "E-commerce",
        description: "An e-commerce platform for music lovers to buy and sell premium equipment with real-time beat previewing.",
        image: Drums,
        link: "https://justinn-beats.vercel.app/",
        github: "https://github.com/justinmk21/JustinnBeats",
        overview: "The Justin N Beats app was built to give music fans a smooth and clean way to find and buy beats online.\
         The goal was to create a fast and simple shop where users can browse beats, view details, and add items to a cart \
         with ease. The app uses a clear layout so each beat stands out and users can focus on sound, price, and key info \
         without stress.",
        outcome: "After launch, users were able to find and buy beats with less time and less effort. The clear flow from \
            browse to cart to check out made the shop easy to use, even for first time users. The app handled data well and \
            kept page load time low, which helped keep users on the site.",
        technologies: ["React", "Django", "MySQL", "Tailwind CSS", "GCP"],
        projectStatus: "Completed"
    },
    {
        id: 2,
        title: "Cosmetic Store",
        type: "Web App",
        niche: "E-commerce",
        description: "An online luxury skincare shop featuring personalized routine generators and AR makeup try-on features.",
        image: Cosmetic,
        link: "http://34.71.229.132/Lenature",
        github: "https://github.com/justinmk21/Lenature",
        overview: "The Lenature cosmetic store was built to give users a calm and clean space to shop for skin and beauty care.\
            The goal was to create a smooth online store where users can view items, read key details, and add products to a cart \
            with ease. The design uses soft tones and clear layout so each product stands out and users can focus on price, use, \
            and skin type without stress.",
        outcome: "After launch, users were able to browse and shop with less time and less effort. The clear path from home \
            page to cart made the store easy to use, even for new users. Page load time stayed low, which helped keep users on \
            the site and ready to buy.",
        technologies: ["React", "Django", "MySQL", "Chakra UI", "Render"],
        projectStatus: "Completed"
    },
]

export const socialLinks = [
    {
        label: "Email",
        url: "mailto:kgomotsomkhawane2001@gmail.com",
    },
    {
        label: "GitHub",
        url: "https://github.com/justinmk21",
    },
    {
        label: "LinkedIn",
        url: "https://www.linkedin.com/in/kgomotso-mkhawane-4769bb219",
    },
    
]