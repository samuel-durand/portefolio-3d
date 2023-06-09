
import {
    mobile,
    backend,
    creator,
    web,
    javascript,
    typescript,
    html,
    css,
    reactjs,
    redux,
    tailwind,
    nodejs,
    mongodb,
    git,
    php,
    figma,
    docker,
    meta,
    starbucks,
    tesla,
    shopify,
    threejs,
    clicker,
    livree,
    autocompletion,
    meteo,
    oclock,
    todo,
    cine,
    async,
  } from "../assets";
  
  export const navLinks = [
    {
      id: "about",
      title: "About",
    },
    {
      id: "work",
      title: "Work",
    },
    {
      id: "contact",
      title: "Contact",
    },
  ];
  
  const services = [
    {
      title: "Web Developer",
      icon: web,
    },
    {
      title: "React Native Developer",
      icon: mobile,
    },
    {
      title: "Backend Developer",
      icon: backend,
    },
    {
      title: "Content Creator",
      icon: creator,
    },
  ];
  
  const technologies = [
    {
      name: "HTML 5",
      icon: html,
    },
    {
      name: "CSS 3",
      icon: css,
    },
    {
      name: "JavaScript",
      icon: javascript,
    },
    {
      name: "React JS",
      icon: reactjs,
    },
    {
      name: "Tailwind CSS",
      icon: tailwind,
    },
    {
      name: "Three JS",
      icon: threejs,
    },
    {
      name: "git",
      icon: git,
    },
    {
      name: "figma",
      icon: figma,
    },

  ];
  
  const experiences = [
    {
      title: "php",
      company_name: "Laplateforme",
      icon: php,
      iconBg: "#383E56",
      date: "september 2022 - August 2023",
      points: [
        " I have a strong command of PHP, a versatile scripting language used for web development. With my expertise in PHP, I can create dynamic and interactive web applications, handle form data, connect to databases, and implement server-side functionality. I am experienced in writing clean and efficient PHP code, adhering to best practices and industry standards"
      ],
    },
    {
      title: "React Native Developer",
      company_name: "Laplateforme",
      icon: reactjs,
      iconBg: "#E6DEDD",
      points: [
        "Using React, I have crafted a seamless user interface that enhances navigation and provides an intuitive browsing experience. Leveraging the capabilities of Three.js, I have incorporated stunning 3D elements and visual effects, bringing a new level of depth and immersion to the portfolio"
      ],
    },
    {
      title: "Javavscript",
      company_name: "Laplateforme",
      icon: javascript,
      iconBg: "#383E56",
      points: [
        "Experienced in JavaScript, including async programming and functions. Let's create dynamic web experiences together"
      ],
    },
    {
      title: "css",
      company_name: "Laplateforme",
      name: "CSS 3",
      icon: css,
      iconBg: "#E6DEDD",
      points: [
        "I specialize in creating visually stunning and responsive web designs using CSS. With expertise in responsive design techniques and flexbox layouts, I ensure that your website looks great on any device and adapts seamlessly to different screen sizes"
      ],
    },
  ];
  
  const testimonials = [
    {
      testimonial:
        "lLorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse viverra tempus quam a commodo. Mauris et rhoncus risus. Mauris fermentum malesuada sem at consequat. Mauris vestibulum, metus at dignissim dapibus, nisl libero fermentum tellus, eget tempus elit urna eget odio. Phasellus rutrum libero nec mi porttitor, non venenatis arcu dapibus. Duis turpis nulla, convallis fringilla porta vitae, vehicula sit amet arcu. Aliquam sollicitudin nibh eu nunc bibendum pharetra. Nam ullamcorper tellus in ultrices tristique. Nullam eget turpis quis neque fringilla aliquet. Phasellus pharetra vulputate mauris nec porta. Suspendisse potenti. Donec porta mauris non mauris maximus, sed cursus eros molestie. Suspendisse porta at mauris eget congue.",
      name: "Sara Lee",
      designation: "CFO",
      company: "Acme Co",
      image: "https://randomuser.me/api/portraits/women/4.jpg",
    },
    {
      testimonial:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse viverra tempus quam a commodo. Mauris et rhoncus risus. Mauris fermentum malesuada sem at consequat. Mauris vestibulum, metus at dignissim dapibus, nisl libero fermentum tellus, eget tempus elit urna eget odio. Phasellus rutrum libero nec mi porttitor, non venenatis arcu dapibus. Duis turpis nulla, convallis fringilla porta vitae, vehicula sit amet arcu. Aliquam sollicitudin nibh eu nunc bibendum pharetra. Nam ullamcorper tellus in ultrices tristique. Nullam eget turpis quis neque fringilla aliquet. Phasellus pharetra vulputate mauris nec porta. Suspendisse potenti. Donec porta mauris non mauris maximus, sed cursus eros molestie. Suspendisse porta at mauris eget congue.",
      name: "Chris Brown",
      designation: "COO",
      company: "DEF Corp",
      image: "https://randomuser.me/api/portraits/men/5.jpg",
    },
    {
      testimonial:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse viverra tempus quam a commodo. Mauris et rhoncus risus. Mauris fermentum malesuada sem at consequat. Mauris vestibulum, metus at dignissim dapibus, nisl libero fermentum tellus, eget tempus elit urna eget odio. Phasellus rutrum libero nec mi porttitor, non venenatis arcu dapibus. Duis turpis nulla, convallis fringilla porta vitae, vehicula sit amet arcu. Aliquam sollicitudin nibh eu nunc bibendum pharetra. Nam ullamcorper tellus in ultrices tristique. Nullam eget turpis quis neque fringilla aliquet. Phasellus pharetra vulputate mauris nec porta. Suspendisse potenti. Donec porta mauris non mauris maximus, sed cursus eros molestie. Suspendisse porta at mauris eget congue.!",
      name: "Lisa Wang",
      designation: "CTO",
      company: "456 Enterprises",
      image: "https://randomuser.me/api/portraits/women/6.jpg",
    },
  ];
  
  const projects = [


    {
      name: "Clicker Game",
      description:
        "Discover our ultimate clicker game! Sign up, log in, and click endlessly to accumulate points. Use them in our shop to purchase additional clicks and unlock an auto clicker. Take on the challenge now and show off your clicking power!",
      tags: [
        {
          name: "html",
          color: "blue-text-gradient",
        },
        {
          name: "js",
          color: "green-text-gradient",
        },
        {
          name: "css",
          color: "pink-text-gradient",
        },
        {
          name: "php",
          color: "yellow-text-gradient",
        },
      ],
      image: clicker,
      source_code_link: "https://github.com/samuel-durand/clicker",
    },
    {
      name: "Livre d'or async",
      description:
        "Experience our remarkable interactive guestbook! Register, log in, and engage in synchronous commenting. Share your thoughts, explore other users' opinions, and connect with a vibrant community. Join our dynamic guestbook now and make your voice heard in meaningful discussions. Don't miss the opportunity to be part of this collective adventure",
      tags: [
        {
          name: "html",
          color: "blue-text-gradient",
        },
        {
          name: "js",
          color: "green-text-gradient",
        },
        {
          name: "css",
          color: "pink-text-gradient",
        },
        {
          name: "php",
          color: "yellow-text-gradient",
        },
      ],
      image: livree,
      source_code_link: "https://github.com/",
    },

    {
      name: "Auto Completion",
      description:
        "auto completion for search data in database directly by input search",
      tags: [
        {
          name: "html",
          color: "blue-text-gradient",
        },
        {
          name: "js",
          color: "green-text-gradient",
        },
        {
          name: "css",
          color: "pink-text-gradient",
        },
        {
          name: "php",
          color: "yellow-text-gradient",
        },
      ],
      image: autocompletion,
      source_code_link: "https://github.com/samuel-durand/Autocompletion",
    },

    {
      name: "Meteo Api",
      description:
        "I explore the capabilities and potential of weather APIs. My goal is to demonstrate the functionality and versatility of weather APIs, allowing you to gain firsthand experience and discover the wide range of possibilities they offer",
      tags: [
        {
          name: "html",
          color: "blue-text-gradient",
        },
        {
          name: "js",
          color: "green-text-gradient",
        },
        {
          name: "css",
          color: "pink-text-gradient",
        },

      ],
      image: meteo,
      source_code_link: "https://github.com/samuel-durand/meteo",
    },

    
    {
      name: "O'CLOCK",
      description:
        "An HTML, CSS, and JavaScript clock that displays the time, date, alarm, timer, and stopwatch.",
      tags: [
        {
          name: "html",
          color: "blue-text-gradient",
        },
        {
          name: "js",
          color: "green-text-gradient",
        },
        {
          name: "css",
          color: "pink-text-gradient",
        },

      ],
      image: oclock,
      source_code_link: "https://github.com/samuel-durand/oclock",
    },

    {
      name: "Todo List",
      description:
        "A web app that allows asynchronous registration and login, enabling users to post a to-do list, view ongoing tasks, mark them as completed with a button, display a table of all completed tasks, and provide a button to delete tasks",
      tags: [
        {
          name: "html",
          color: "blue-text-gradient",
        },
        {
          name: "js",
          color: "green-text-gradient",
        },
        {
          name: "css",
          color: "pink-text-gradient",
        },
        {
          name: "php",
          color: "yellow-text-gradient",
        },

      ],
      image: todo,
      source_code_link: "https://github.com/samuel-durand/to-do-list-js",
    },
    {
      name: "Module de Connexion Async",
      description:
        "A module for asynchronous registration and login, along with a home page displaying the name of the logged-in user",
      tags: [
        {
          name: "html",
          color: "blue-text-gradient",
        },
        {
          name: "js",
          color: "green-text-gradient",
        },
        {
          name: "css",
          color: "pink-text-gradient",
        },
        {
          name: "php",
          color: "yellow-text-gradient",
        },

      ],
      image: async,
      source_code_link: "https://github.com/samuel-durand/Projet",
    },
    {
      name: "Cinetech",
      description:
        "un projet qui à pour but de tester l'api de TMbd",
      tags: [
        {
          name: "html",
          color: "blue-text-gradient",
        },
        {
          name: "js",
          color: "green-text-gradient",
        },
        {
          name: "css",
          color: "pink-text-gradient",
        },
        {
          name: "php",
          color: "yellow-text-gradient",
        },

      ],
      image: cine,
      source_code_link: "https://github.com/samuel-durand/Cinetech",
    },




  ];
  
  export { services, technologies, experiences,  projects };