import chefImage0 from "../img/cocinero/chef1.jpg"
import chefImage1 from "../img/cocinero/chef2.jpg"
import chefImage2 from "../img/cocinero/chef3.jpg"
import chefImage3 from "../img/cocinero/chef4.jpg"
import chefImage4 from "../img/cocinero/chef5.jpg"

import pasteleroImage0 from "../img/pastelero/paste1.jpeg"
import pasteleroImage1 from "../img/pastelero/paste2.jpg"

import panaderoImage0 from "../img/panadero/panadero1.jpg"
import panaderoImage1 from "../img/panadero/panadero2.jpg"
import panaderoImage2 from "../img/panadero/panadero3.jpg"
import panaderoImage3 from "../img/panadero/panadero4.jpg"
import panaderoImage4 from "../img/panadero/panadero5.jpg"





let panaderoArray = [{
    id: 0,
    backgroundImage: `url(${panaderoImage0})`,
},
{
    id: 1,
    backgroundImage: `url(${panaderoImage1})`,
},
{
    id: 2,
    backgroundImage: `url(${panaderoImage2})`,
},
{
    id: 3,
    backgroundImage: `url(${panaderoImage3})`,
},
{
    id: 4,
    backgroundImage: `url(${panaderoImage4})`,
},]

let cocineroArray = [{
    id: 0,
    backgroundImage: `url(${chefImage0})`,
},
{
    id: 1,
    backgroundImage: `url(${chefImage1})`,
},
{
    id: 2,
    backgroundImage: `url(${chefImage2})`,
},
{
    id: 3,
    backgroundImage: `url(${chefImage3})`,
},
{
    id: 4,
    backgroundImage: `url(${chefImage4})`,
},]

let pasteleroArray = [{
    id: 0,
    backgroundImage: `url(${pasteleroImage0})`,
},
{
    id: 1,
    backgroundImage: `url(${pasteleroImage1})`,
}
]


export { panaderoArray, cocineroArray,pasteleroArray}