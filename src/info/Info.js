import self from "../img/self.png"
import mock1 from "../img/mock1.png"
import mock2 from "../img/mock2.png"
import mock3 from "../img/mock3.png"
import mock4 from "../img/mock4.png"
import mock5 from "../img/mock5.png"



export let colors = ["rgb(33, 118, 192)", "rgb(153, 255, 165)"]; //rgb(166,104,255)




export const info = {
    firstName: "Hakan",
    lastName: "Ozcan",
    initials: "hkn", 
    position: "a Software Developer",
    selfPortrait: self, 
    gradient: `-webkit-linear-gradient(135deg, ${colors})`,
    gradientName:`linear-gradient(to right, rgb(33, 118, 192), rgb(153, 221, 255))`, 
    baseColor: colors[0],
    miniBio: [
        {
            emoji: '💻',
            text: 'lifelong learner'
        },
        {
            emoji: '🌎',
            text: 'based in Turkey'
        },
        {
            emoji: "🏀",
            text: "basketball lover"
        },
        {
            emoji: "📧",
            text: "hakanozcan20@hotmail.com.tr"
        }
    ],
    socials: [

        {
            link: "https://linkedin.com/in/hakanozc",
            icon: "fa fa-linkedin",
            label: 'linkedin'
        },
        {
            link: "https://github.com/hakanozcan",
            icon: "fa fa-github",
            label: 'github'
        },                
        {
            link: "https://instagram.com/hakan.jsx",
            icon: 'fa fa-instagram',
            label: 'instagram'
        }
       


    ],
    bio: "Hello! I'm Hakan. I'm a software developer who trying to be fullstack. I studied Computer Engineering at Pamukkale University. I'm a basketball fan and also referee / video operator. You can contact me via contact links on the homepage.",
    skills:
        {
            proficientWith: ['C#', 'ABAP', 'React', 'JavaScript', '.NET', 'SQL', 'Git', 'Github'],
            exposedTo: ['NodeJS', 'Java', 'Angular', 'Go']
        }
    ,
    hobbies: [
        {
            label: 'basketball',
            emoji: '🏀'
        },
        {
            label: 'formula 1',
            emoji: '🏎️'
        },
        {
            label: 'urban art',
            emoji: '🖌️'
        },        
        {
            label: 'chess',
            emoji: '♟️'
        }

    ],
    portfolio: [ 
        {
            title: "Movie Review Site",
            live: "https://hakanozcan.me/hakanflix", 
            source: "https://github.com/hakanozcan/hakanflix", 
            image: mock1
        },
        {
            title: "Blog Site",
            live: "https://blog-hakanozcan.vercel.app",
            source: "https://github.com/hakanozcan/blog",
            image: mock2
        },
        {
            title: "Music Player",
            live: "https://hakanozcan.me/hakanify/",
            source: "https://github.com/hakanozcan/hakanify",
            image: mock3
        },
        {
            title: "Weather App",
            live: "https://hakanozcan.me/weatherapp",
            source: "https://github.com/hakanozcan/weatherapp",
            image: mock4
        },
        {
            title: "Linktree with Notion CMS",
            live: "https://linktree-with-notion.vercel.app",
            source: "https://github.com/hakanozcan/linktree-with-notion",
            image: mock5
        }
    ]
}