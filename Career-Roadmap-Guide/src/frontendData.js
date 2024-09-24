import i1 from "./img/internet.jpg";
import i2 from "./img/what-is-html.jpg";
import i3 from "./img/css.png";
import i4 from "./img/js.png";
import i5 from "./img/git.png";
import i6 from "./img/npm.png";
import i7 from "./img/sass.png";
import i8 from "./img/jsfw.jpeg";
import i9 from "./img/ssr.jpg";
import i10 from "./img/graphql.png";
import i11 from "./img/lcp.png";

const data = [
    {
        title: "INTERNET",
        cardTitle: "Learn how the internet works",
        media: {
            name: "dunkirk beach",
            source: {
                url: i1,
            },
            type: "IMAGE",
        },
        cardSubtitle: `Basic understanding of HTTP, DNS, browser and hosting is important.`,
        cardDetailedText: `The Internet is the backbone of the Web, the technical infrastructure that makes the Web possible. At its most basic, the Internet is a large network of computers which communicate all together. HTTP is a protocol for fetching resources such as HTML documents. It is the foundation of any data exchange on the Web and it is a client-server protocol, which means requests are initiated by the recipient, usually the Web browser. The Domain Name System (DNS) is the phonebook of the Internet. Humans access information online through domain names, like nytimes.com or espn.com. Web browsers interact through Internet Protocol (IP) addresses.`,
    },
    {
        title: "HTML",
        cardTitle: "HTML: The first step of your journey",
        media: {
            name: "Battle of britain",
            source: {
                url: i2,
            },
            type: "IMAGE",
        },
        cardSubtitle: `Learn the basic HTML and create your first webpage`,
        cardDetailedText: `HTML (HyperText Markup Language) is the most basic building block of the Web. It defines the meaning and structure of web content. Other technologies besides HTML are generally used to describe a web page's appearance/presentation (CSS) or functionality/behavior (JavaScript). An HTML element is set off from other text in a document by "tags", which consist of the element name surrounded by "<" and ">". The name of an element inside a tag is case insensitive. That is, it can be written in uppercase, lowercase, or a mixture. For example, the <title> tag can be written as <Title>, <TITLE>, or in any other way. However, the convention and recommended practice is to write tags in lowercase.`,
    },
    {
        title: "CSS",
        cardTitle: "Make your webpage attractive with CSS",
        media: {
            name: "Operation Barbarossa",
            source: {
                url: i3,
            },
            type: "IMAGE",
        },
        cardSubtitle: `CSS is used for describing the presentation of a document written in HTML.`,
        cardDetailedText: `Cascading Style Sheets (CSS) is a stylesheet language used to describe the presentation of a document written in HTML or XML (including XML dialects such as SVG, MathML or XHTML). CSS describes how elements should be rendered on screen, on paper, in speech, or on other media.

      CSS is among the core languages of the open web and is standardized across Web browsers according to W3C specifications. Previously, development of various parts of CSS specification was done synchronously, which allowed versioning of the latest recommendations. You might have heard about CSS1, CSS2.1, CSS3. However, CSS4 has never become an official version.`,
    },
    {
        title: "JAVASCRIPT",
        cardTitle: "Make your site interactive with Javascript",
        cardSubtitle: `Javascript, you will be able to build a fully functional web application`,
        media: {
            source: {
                url: i4,
            },
            type: "IMAGE",
            name: "Pearl Harbor",
        },
        cardDetailedText: `JavaScript is a powerful programming language that can add interactivity to a website. It was invented by Brendan Eich (co-founder of the Mozilla project, the Mozilla Foundation, and the Mozilla Corporation).

      JavaScript is versatile and beginner-friendly. With more experience, you'll be able to create games, animated 2D and 3D graphics, comprehensive database-driven apps, and much more!
      
      JavaScript itself is relatively compact, yet very flexible. Developers have written a variety of tools on top of the core JavaScript language, unlocking a vast amount of functionality with minimum effort.`,
    },
    {
        title: "GIT",
        cardTitle: "Git: version control system",
        media: {
            type: "IMAGE",
            source: {
                url: i5,
            },
            name: "Fall of singapore",
        },
        cardSubtitle: `Share your work with world with Git`,
        cardDetailedText: `Git is software for tracking changes in any set of files, usually used for coordinating work among programmers collaboratively developing source code during software development. Its goals include speed, data integrity, and support for distributed, non-linear workflows (thousands of parallel branches running on different systems).`,
    },
    {
        title: "PACKAGE MANAGERS",
        cardTitle: "Automate your project with Package managers",
        media: {
            type: "IMAGE",
            source: {
                url: i6,
            },
        },
        cardSubtitle: `Package managers automates the process of installing, upgrading, configuring, and removing computer programs`,
        cardDetailedText: `A package manager deals with packages, distributions of software and data in archive files. Packages contain metadata, such as the software's name, description of its purpose, version number, vendor, checksum (preferably a cryptographic hash function), and a list of dependencies necessary for the software to run properly. Upon installation, metadata is stored in a local package database. Package managers typically maintain a database of software dependencies and version information to prevent software mismatches and missing prerequisites. They work closely with software repositories, binary repository managers, and app stores. Currently NPM and YARN are popular managers.`,
    },
    {
        title: "CSS PREPROCESSOR",
        cardTitle: "Learn about advance CSS",
        cardSubtitle: `modern frameworks push more towards the CSS-in-JS so this can be helpful to you. `,
        media: {
            type: "IMAGE",
            source: {
                url: i7,
            },
        },
        cardDetailedText: `A CSS preprocessor is a program that lets you generate CSS from the preprocessor's own unique syntax. There are many CSS preprocessors to choose from, however most CSS preprocessors will add some features that don't exist in pure CSS, such as mixin, nesting selector, inheritance selector, and so on. These features make the CSS structure more readable and easier to maintain.`,
    },
    {
        title: "FRAMEWORKS",
        cardTitle: "Add more functionality with frameworks",
        cardSubtitle: `Frameworks and packages having pre-written, standardized code in folders and files. `,
        media: {
            type: "IMAGE",
            source: {
                url: i8,
            },
        },
        cardDetailedText: `Front-end Framework is a platform/tool to build the front end of your website. Some of the tasks one can perform using a Front-end Framework are – the management of AJAX requests, associating data with The Document object Model (DOM) elements, defining a file structure, and styling of components on the website or application. With the growing popularity of the digital world, more and more new developers are emerging each passing day. Today, people believe in learning skills that are easy to learn and can help them earn a good living. Therefore, newly emerging front-end developers prefer learning the frameworks that are easy to learn and use and have all the features needed. For example – Reactjs, Vuejs, and Backbonejs are some of the simplest and easiest frameworks to learn than the complex frameworks like angular.`,
    },
    {
        title: "SSR",
        cardTitle: "Server Side Rendering",
        cardSubtitle: `Display your site on the server`,
        media: {
            type: "IMAGE",
            source: {
                url: i9,
            },
        },
        cardDetailedText: `Server-side rendering (SSR), is the ability of an application to contribute by displaying the web-page on the server instead of rendering it in the browser. Server-side sends a fully rendered page to the client; the client's JavaScript bundle takes over and allows the SPA framework to operate.`,
    },
    {
        title: "GRAPHQL",
        cardTitle: "A complete description of the data with GraphQL ",
        cardSubtitle: `Learn to improve your site`,
        media: {
            type: "IMAGE",
            source: {
                url: i10,
            },
        },
        cardDetailedText: `It provides an approach to developing web APIs and has been compared and contrasted with REST and other web service architectures. It allows clients to define the structure of the data required, and the same structure of the data is returned from the server, therefore preventing excessively large amounts of data from being returned. But this has implications for how effective web caching of query results can be. The flexibility and richness of the query language also adds complexity that may not be worthwhile for simple APIs.`,
    },
    {
        title: "REMEMBER",
        cardTitle: "This is not the end!",
        cardSubtitle: `Learning is a process, so there is no end`,
        media: {
            type: "IMAGE",
            source: {
                url: i11,
            },
        },
        cardDetailedText: `After all this skills you will able to get a job. Learn new skills and improve your front end web development skills. `,
    },
];

export default data;
