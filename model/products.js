import pizzaImg from '@/public/images/pizza.png'
import burgerImg from '@/public/images/burger.png'
import cocaImg from '@/public/images/coca.png'
import icecreamImg from '@/public/images/icecream.png'
import kebabImg from '@/public/images/kebab.png'
import saladImg from '@/public/images/salad.png'
import waterImg from '@/public/images/water.png'


export function getData() {
    return [
        { title: "Pizza", price: 17.99, image : pizzaImg },
        { title: "Burger", price: 15, image : burgerImg },
        { title: "Coca", price: 3.5, image : cocaImg },
        { title: "Kebab", price: 13.99, image : kebabImg },
        { title: "Salad", price: 2.5, image : saladImg },
        { title: "Bottle of water", price: 0.99, image : waterImg },
        { title: "Ice cream", price: 17.99, image : icecreamImg },
        
    ]
}