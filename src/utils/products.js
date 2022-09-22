import  DarkSouls1  from '../Assets/DarkSouls1.jpg';
import  DarkSouls1Remastered  from '../Assets/DarkSouls1Remastered.jpg';
import  DarkSouls2  from '../Assets/DarkSouls2.jpg';
import  DarkSouls3  from '../Assets/DarkSouls3.jpg';
import  EldenRings  from '../Assets/EldenRings.jpg';





export const products = [
    {
        id : 1,
        image: DarkSouls1,
        product: "Dark Souls 1",
        category: "juegos",
        description: "Primer juego de la saga Souls.",
        price: 600,
        stock: 50,
        initial: 1,
        config: {
            consola: ['PC, ', 'PlayStation, ', 'XBox']
        }
    },

    {
        id : 2,
        image: DarkSouls1Remastered,
        product: "Dark Souls 1 remastered",
        category: "juegos",
        description: "Primer juego remasterizado",
        price: 800,
        stock: 50,
        initial: 1,
        config: {
            consola: ['PC', 'PlayStation', 'XBox']
        }
    },

    {
        id : 3,
        image: DarkSouls2,
        product: "Dark Souls 2",
        category: "juegos",
        description: "Segundo juego",
        price: 1000,
        stock: 50,
        initial: 1,
        config: {
            consola: ['PC', 'PlayStation', 'XBox']
        }
    },

    {
        id : 4,
        image: DarkSouls3,
        product: "Dark Souls 1",
        category: "juegos",
        description: "Tercer juego",
        price: 1200,
        stock: 50,
        initial: 1,
        config: {
            consola: ['PC', 'PlayStation', 'XBox']
        }
    },

    {
        id : 5,
        image: EldenRings,
        product: "Dark Souls 1",
        category: "juegos",
        description: "Cuarto juego",
        price: 1400,
        stock: 50,
        initial: 1,
        config: {
            consola: ['PC', 'PlayStation', 'XBox']
        }
    }


]