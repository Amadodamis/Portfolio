let fabaStore = "Fabastore fue mi proyecto final en el curso full-stack de Digital house. Con dos compañeros, logramos crear un e-commerce de articulos de computacion. Aunque no es muy estetico, y tiene muchos errores, lograrmos superar las pruebas y resolver todos los errores que nos iban surgiendo. Utilizamos Node.js con Express para el back-end, cookies, session, SQL con DBeaver y Xampp, y EJS como template para el front-end."
let fabaLink = "https://github.com/Amadodamis/grupo_6_fabaStore"
let howMuch = "How-Much App, es mi primer proyecto front-end. La aplicacion resuelve una situacion que suele pasar seguido en una reunion entre amigos y/o familia. Resulta que cuando todos queremos gastar el mismo dinero en la cena,fiesta o reunion, nos encontramos que una persona trajo algo para tomar, otro compro la cena, otros compraron cosas puntuales y otros solo quieren dar el dinero. Todo resulta en que nadie sabe a quien le tiene que dar dinero y en el peor de los casos se hace mal la cuenta y una persona termina gastando mas que otras."
let howmuchLink = "https://github.com/Amadodamis/how-much"
let cookbook = "Cookbook-App es mi proyecto personal favorito, desde que soy cocinero hace años que siempre busqueda una aplicacion de almacene recetas y sea comoda para el uso diario y nunca la encontre. Con este proyecto me encontre con un sentimiento muy interesante, ya que no solo estoy programando una aplicacion, si no que tambien soy usuario de mi aplicacion, lo que me llevo a ser un proyecto muy exigente para conmigo."
let cookbookLinkFront = "https://github.com/Amadodamis/cookbookFrontEND"
let cookbookServerLink = "https://github.com/Amadodamis/serverCookbook"


let proyectosDev = [
    {
        title: "Fabastore",
        texto: fabaStore,
        linkTitle: ["Fabastore"],
        link: [fabaLink],
    },
    {
        title: "How-much",
        texto: howMuch,
        linkTitle: ["How-much"],
        link: [howmuchLink],
    },
    {
        title: "Cookbook-App",
        texto: cookbook,
        linkTitle: ["Cookbook-app Front-end", "Cockbook-app Back-end"],
        link: [cookbookLinkFront, cookbookServerLink],
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