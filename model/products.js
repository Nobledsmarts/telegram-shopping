import pizzaImg from '@/public/images/pizza.png'
import burgerImg from '@/public/images/burger.png'
import cocaImg from '@/public/images/coca.png'
import icecreamImg from '@/public/images/icecream.png'
import kebabImg from '@/public/images/kebab.png'
import saladImg from '@/public/images/salad.png'
import waterImg from '@/public/images/water.png'


export function getData() {
    return [
        { title: "Pizza", price: 17.99, image : pizzaImg, id : 1 },
        { title: "Burger", price: 15, image : burgerImg, id : 2 },
        { title: "Coca", price: 3.5, image : cocaImg, id : 3 },
        { title: "Kebab", price: 13.99, image : kebabImg, id : 4 },
        { title: "Salad", price: 2.5, image : saladImg, id : 5 },
        { title: "Bottle of water", price: 0.99, image : waterImg, id : 6 },
        { title: "Ice cream", price: 17.99, image : icecreamImg, id : 7 },
        
    ]
}