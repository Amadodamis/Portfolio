import fabaImg from "../img/fabstore.png"
import portfolioImg from "../img/portfolio.png"


/****************************************************FABASTORE*********************************************** */

let fabaStore = `Fabastore fue mi proyecto final en el curso full-stack de Digital house. Con dos compañeros, 
logramos crear un e-commerce de articulos de computacion. Aunque no es muy estetico, y tiene muchos errores, 
lograrmos superar las pruebas y resolver todos los problemas que nos iban surgiendo. Utilizamos Node.js con Express para el back-end,
 cookies, session, SQL con DBeaver y Xampp, y EJS como template para el front-end.`

let fabaEng = `Fabastore was my final project in the full-stack course at Digital House. With two classmates, 
we managed to create an e-commerce website. Although it is not very aesthetic and has many errors,
 we passed the tests and solved the errors that arose. We used Node.js with express for the back-end , cookies, session, Sql with Dbeaver Xampp, 
 and EJS as a template for the front-end.`

let fabaLink = "https://github.com/Amadodamis/grupo_6_fabaStore"

/****************************************************HOW MUCH*********************************************** */

let howMuch = `How-Much App, es mi primer proyecto front-end. La aplicacion resuelve una situacion que suele pasar seguido en una reunion entre amigos y/o familia. 
Resulta que cuando todos queremos gastar el mismo dinero en la cena,fiesta o reunion, nos encontramos con que una persona trajo algo para tomar, 
otro compro la cena, otros compraron cosas puntuales y otros solo quieren pagar el dinero que le corresponde. 
Todo resulta en que nadie sabe a quien le tiene que dar dinero y en el peor de los casos se hace mal la cuenta 
y una persona termina gastando mas que otras.`

let howMuchEng = `How-much App is an application that solves a situation that often happens in a meeting between friends or family.
 It turns out that when we all want to spend the same amount of money on dinner/party/meeting, we find that one person brought something to drink, 
 another bought dinner or a specific thing, and others only pretend to pay their part.
 Everything results in nobody knowing who to give money to and in the worst case or almost always someone ends up paying more than everyone else. `

let howmuchLink = "https://github.com/Amadodamis/how-much"
let howMuchYoutube = "https://www.youtube.com/watch?v=2krTWmUsTpY"

/****************************************************COOK BOOK APP*********************************************** */
let cookbook = `Cookbook-App es mi proyecto personal favorito, desde que soy cocinero; siempre estuve en la busqueda de una aplicacion que almacene recetas 
y sea comoda para el uso diario y nunca la encontre. Con este proyecto me encontre con un sentimiento muy interesante,
 ya que no solo estoy programando una aplicacion, si no que tambien soy usuario de mi aplicacion, 
 lo que me llevo a ser un proyecto muy exigente para conmigo.`

let cookbookEng = `Personally, and being a lifelong cheff, Cookbook was the project I enjoyed doing the most, 
since I not only found myself in the dynamic of being the programmer, 
but also took on the role of “I am a user, and I definitely want something comfortable and fast to use.`

let cookbookLinkFront = "https://github.com/Amadodamis/cookbookFrontEND"
let cookbookServerLink = "https://github.com/Amadodamis/serverCookbook"
let cookbookYoutubeLink = "https://www.youtube.com/watch?v=T86wJJFvtKg"

/****************************************************PORTFOLIOO*********************************************** */

let portfolio = `Crear un portfolio personal es una de las tareas mas dificiles a mi parecer, creo que no se trata de crear una aplicacion solo estetica, 
o super funcional o compleja, si no que se trata de buscar una manera de explicar quien es uno, que me gusta, como trabajo, en que areas me especializo, 
y que a la vez no sea aburrido para el que lo este leyendo.
Me tomo mucho tiempo crear un patron de diseño, como iba a explicar cada seccion, mis proyectos; y si hacer uno compartido con ser Chef o no.
Con la mayor de las ansias, espero que la persona que este leyendo esto, haya tenido una excelente impresion de mi. `

let portfolioEng = `Creating a personal portfolio is one of the most difficult tasks in my opinion, I believe that it is not about creating an application that is only aesthetic, 
super functional, or complex, but rather about finding a way to explain who you are. , what I like, how I work, what areas I am in, and at the same time, 
that it is not boring for whoever reads it.
It took me a long time to create a design pattern, how I was going to explain each section, my projects; and whether to make one shared with being a Chef or not.
With the greatest of wishes, I hope that the person reading this has taken away an excellent impression of me.`

let portfolioLink = "https://github.com/Amadodamis/Portfolio"


/****************************************************ARRAY PROYECTOS DEV*********************************************** */

let proyectosDev = [
    {
        title: "Fabastore",
        texto: fabaStore,
        text: fabaEng,
        linkTitle: ["Fabastore"],
        link: [fabaLink],
        youtubeLink: "",
        imgLink: fabaImg,
    },
    {
        title: "How-much",
        texto: howMuch,
        text: howMuchEng,
        linkTitle: ["How-much"],
        link: [howmuchLink],
        youtubeLink: howMuchYoutube,
    },
    {
        title: "Cookbook-App",
        texto: cookbook,
        text: cookbookEng,
        linkTitle: ["Cookbook-app Front-end", "Cockbook-app Back-end"],
        link: [cookbookLinkFront, cookbookServerLink],
        youtubeLink: cookbookYoutubeLink,
    },
    {
        title: "Portfolio",
        texto: portfolio,
        text: portfolioEng,
        linkTitle: ["Portfolio"],
        link: [portfolioLink],
        youtubeLink: "",
        imgLink: portfolioImg,
    }
]

/****************************************************ARRAY PROYECTOS CHEF*********************************************** */

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