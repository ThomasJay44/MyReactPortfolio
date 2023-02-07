import {
    notetakerapp, employeedbgif, ecomss, smokingapp, colcomp,
} from './images';

// import notetakerapp from "./images/notetakerapp.JPG"
// import employeedbgif from "./images/employeedbgif.gif"
// import ecomss from "./images/ecomss.JPG"
// import smokingapp from "./images/smokingapp.png"
// import colcomp from "./images/colcomp.JPG"

const projects = [
    {
        name : "Quit Smoking App",
        description: "A web-based app to help you track your day to day smoking and scale down to kicking the habit in 90days",
        tech: "Chart.js, Express, HandleBars, MySQL2, Sequelize, BCrypt",
        repoLink: "https://github.com/jsedlak146/group7-project2",
        ss: smokingapp ,
        altsrc: "This is a screenshot of my groups app to quit smoking"
    },
    {
        name : "College & Football Comparison Site",
        description: "This site uses two api's to create a side by side comparison for someone looking to choose what school to go on based on student population and football program data",
        tech: "Javascript, Two Web Apis, CSS",
        repoLink: "https://github.com/NickJ13/Project-07",
        ss: colcomp ,
        altsrc: "This is a screenshot of our college and football comparison site"
    },
    {
        name: "Note Taker App",
        description: "This application will help you create, read, and delete notes.",
        tech: "Express",
        repoLink: "https://github.com/ThomasJay44/Note-taker-11-bravo",
        ss: notetakerapp,
        altsrc : "This is a screenshot of my note taker app" 
    },
    {
        name : "Employee Database",
        description: " This is an employee tracker that can view, or add, departments, roles, and employees and insert them into mysql tables. ",
        tech: " Inquirer, MySQL2, Console.table ",
        repoLink: "https://github.com/ThomasJay44/Employee-Tracker",
        ss: employeedbgif,
        altsrc: "This is a screenshot of command line mySQL employee database tracker"
    },
    {
        name : "E-Commerce Back End",
        description: "A back end application to create, delete, update, and view products, categories, and tags.",
        tech: "Express, MySQL2, Sequilize, DotEnv",
        repoLink: "https://github.com/ThomasJay44/Ecom-Backend-13",
        ss: ecomss,
        altsrc: "This is a screenshot of......"
    },
    {
        name : "E-Commerce Back End",
        description: "A back end application to create, delete, update, and view products, categories, and tags.",
        tech: "Express, MySQL2, Sequilize, DotEnv",
        repoLink: "https://github.com/ThomasJay44/Ecom-Backend-13",
        ss: ecomss,
        altsrc: "This is a screenshot of......"
    }
    // {
    //     name : " ",
    //     description: " ",
    //     tech: " ",
    //     repoLink: " ",
    //     src: "" ,
    //     altsrc: "This is a screenshot of......"
    // },
]

export {projects}