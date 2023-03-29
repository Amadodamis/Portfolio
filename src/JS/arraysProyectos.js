import fabaImg from "../img/fabstore.png"
import portfolioImg from "../img/portfolio.png"

let fabaStore = "Fabastore fue mi proyecto final en el curso full-stack de Digital house. Con dos compañeros, logramos crear un e-commerce de articulos de computacion. Aunque no es muy estetico, y tiene muchos errores, lograrmos superar las pruebas y resolver todos los errores que nos iban surgiendo. Utilizamos Node.js con Express para el back-end, cookies, session, SQL con DBeaver y Xampp, y EJS como template para el front-end."
let fabaLink = "https://github.com/Amadodamis/grupo_6_fabaStore"

let howMuch = "How-Much App, es mi primer proyecto front-end. La aplicacion resuelve una situacion que suele pasar seguido en una reunion entre amigos y/o familia. Resulta que cuando todos queremos gastar el mismo dinero en la cena,fiesta o reunion, nos encontramos que una persona trajo algo para tomar, otro compro la cena, otros compraron cosas puntuales y otros solo quieren dar el dinero. Todo resulta en que nadie sabe a quien le tiene que dar dinero y en el peor de los casos se hace mal la cuenta y una persona termina gastando mas que otras."
let howmuchLink = "https://github.com/Amadodamis/how-much"
let howMuchYoutube = "https://www.youtube.com/watch?v=2krTWmUsTpY"

let cookbook = "Cookbook-App es mi proyecto personal favorito, desde que soy cocinero hace años que siempre busqueda una aplicacion de almacene recetas y sea comoda para el uso diario y nunca la encontre. Con este proyecto me encontre con un sentimiento muy interesante, ya que no solo estoy programando una aplicacion, si no que tambien soy usuario de mi aplicacion, lo que me llevo a ser un proyecto muy exigente para conmigo."
let cookbookLinkFront = "https://github.com/Amadodamis/cookbookFrontEND"
let cookbookServerLink = "https://github.com/Amadodamis/serverCookbook"
let cookbookYoutubeLink = "https://www.youtube.com/watch?v=T86wJJFvtKg"

let portfolio = `Crear un portfolio personal es una de las tareas mas dificiles a mi parecer, creo que no se trata de crear una aplicacion solo estetica, 
o super funcional o compleja, si no que se trata de buscar una manera de explicar quien es uno, que me gusta, como trabajo, en que areas me, 
y que a la vez no sea aburrido para el que lo este leyendo.
Me tomo mucho tiempo decir un patron de diseño, como iba a explicar cada seccion, mis proyectos; y si hacer uno compartido con ser Chef o no.
Con la mayor de las ansias, espero que la persona que este leyendo esto, haya tenido una excelente impresion de mi. `

let portfolioLink = "https://github.com/Amadodamis/Portfolio"


let proyectosDev = [
    {
        title: "Fabastore",
        texto: fabaStore,
        linkTitle: ["Fabastore"],
        link: [fabaLink],
        youtubeLink: "",
        imgLink: fabaImg,
    },
    {
        title: "How-much",
        texto: howMuch,
        linkTitle: ["How-much"],
        link: [howmuchLink],
        youtubeLink: howMuchYoutube,
    },
    {
        title: "Cookbook-App",
        texto: cookbook,
        linkTitle: ["Cookbook-app Front-end", "Cockbook-app Back-end"],
        link: [cookbookLinkFront, cookbookServerLink],
        youtubeLink: cookbookYoutubeLink,
    },
    {
        title: "Portfolio",
        texto: portfolio,
        linkTitle: ["Portfolio"],
        link: [portfolioLink],
        youtubeLink: "",
        imgLink: portfolioImg,
    }
]


let proyectosCheff = [{
    title: "Cocinero",
    texto: "",
},
{
    title: "Panadero",
    texto: "",
},
{
    title: "Pastelero",
    texto: "",
}]



export { proyectosCheff, proyectosDev }