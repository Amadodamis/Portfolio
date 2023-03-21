let linkCvDes = "https://drive.google.com/file/d/14a5Duaq8BFCXHzjRf88C6tfEAyaGdIni/view?usp=sharing"

let linkCvDev = "https://drive.google.com/file/d/1XSxHOP81Fys0F373Svj722YCylvE1u_1/view?usp=sharing"

let linkCvCheff = "https://docs.google.com/document/d/1t1y5hQZPdFFbIUKGZY_lhobcZyhNfnzPUegwa1p4PC4/edit?usp=sharing"

let linkCvCheffEng = "https://docs.google.com/document/d/1CfaCnM_4KZ-0vE4R7kBt7pLdLUPL-KXQc0zU0Oy-N6c/edit?usp=sharing"


let developer = [
    {
        title: "Developer",
        leng: "ESP",
        link: linkCvDes,
    },
    {
        title: "Developer",
        leng: "ENG",
        link: linkCvDev,
    },
]

let cheff = [
    {
        title: "Profesional gastronómico",
        leng: "ESP",
        link: linkCvCheff,
    },
    {
        title: "Gastronomic professional",
        leng: "ENG",
        link: linkCvCheffEng,
    },
]



export default function getCvs(profesion) {
    let cvs = []

    if (profesion === "developer") {
        cvs = [...developer]
        return cvs
    } else {
        cvs = [...cheff]
        return cvs
    }

}


