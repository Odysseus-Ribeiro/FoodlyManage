export async function getFoods() {
    await new Promise(resolve => setTimeout(resolve, 1000));
    return foods;
}

const foods = [
    // BURGERS
    {
        id: 1, 
        type: 'hot-foods',
        category: 'burgers',
        name: "Bacon Burger",
        price: 10.99,
        description: "A delicious burger with bacon, cheese, beef steak and a side of fries",
        image: "bacon.svg",
        ingredients: ["bread", "bacon", "cheese", "beef steak", "lettuce", "tomato"],
        isVegetarian: false,
        stock: 10
    },
    {
        id: 2,
        type: 'hot-foods',
        category: 'burgers',
        name: "Cheese Burger",
        price: 7.99,
        description: "A delicious burger with cheese with fresh vegetables and a side of fries",
        image: "cheese.svg",
        ingredients: ["bread", "cheese", "lettuce", "tomato", "beef steak"],
        isVegetarian: false,
        stock: 6
    },
    {
        id: 3,
        type: 'hot-foods',
        category: 'burgers',
        name: "Chicken Burger",
        price: 8.99,
        description: "Grilled chicken breast with fresh vegetables and a side of fries",
        image: "chicken.svg",
        ingredients: ["bread", "chicken breast", "lettuce", "tomato"],
        isVegetarian: false,
        stock: 8
    },
    {
        id: 4,
        type: 'hot-foods',
        category: 'burgers',
        name: "Double Cheese Burger",
        price: 12.99,
        description: "Double beef patty with double cheese, with fresh vegetables and a side of fries",
        image: "double-cheese.svg",
        ingredients: ["bread", "beef steak", "cheese", "lettuce"],
        isVegetarian: false,
        stock: 5
    },
    {
        id: 5,
        type: 'hot-foods',
        category: 'burgers',
        name: "Double Burger",
        price: 11.99,
        description: "Double beef patty with fresh vegetables and a side of fries",
        image: "double.svg",
        ingredients: ["bread", "beef steak", "lettuce", "tomato"],
        isVegetarian: false,
        stock: 7
    },
    {
        id: 6,
        type: 'hot-foods',
        category: 'burgers',
        name: "Egg Burger",
        price: 11.99,
        description: "Classic burger with fried egg, cheese and fresh vegetables with a side of fries",
        image: "egg.svg",
        ingredients: ["bread", "egg", "cheese", "lettuce"],
        isVegetarian: false,
        stock: 9
    },
    {
        id: 7,
        type: 'hot-foods',
        category: 'burgers',
        name: "Fish Burger",
        price: 9.99,
        description: "Crispy fish fillet with fresh vegetables and a side of fries",
        image: "fish.svg",
        ingredients: ["bread", "fish fillet", "lettuce"],
        isVegetarian: false,
        stock: 4
    },
    {
        id: 8,
        type: 'hot-foods',
        category: 'burgers',
        name: "Simple Burger",
        price: 5.99,
        description: "Classic beef burger with fresh vegetables and a side of fries",
        image: "simple.svg",
        ingredients: ["bread", "beef steak", "lettuce", "tomato", "onion"],
        isVegetarian: false,
        stock: 12
    },
    {
        id: 9,
        type: 'hot-foods',
        category: 'burgers',
        name: "Veggie Burger",
        price: 8.49,
        description: "Plant-based patty with fresh vegetables and a side of fries",
        image: "veggie.svg",
        ingredients: ["bread", "veggie patty", "lettuce", "tomato"],
        isVegetarian: true,
        stock: 6
    },

    // PASTAS
    {
        id: 10,
        type: 'hot-foods',
        category: 'pastas',
        name: "Arrabiata Pasta",
        price: 13.99,
        description: "Spicy tomato sauce with garlic, chili and fresh basil",
        image: "arrabiata.svg",
        ingredients: ["spaghetti", "tomato sauce", "garlic", "chili", "basil"],
        isVegetarian: true,
        stock: 8
    },
    {
        id: 11,
        type: 'hot-foods',
        category: 'pastas',
        name: "Bolognese Pasta",
        price: 15.99,
        description: "Classic meat sauce with ground beef, tomatoes and herbs",
        image: "bolognese.svg",
        ingredients: ["spaghetti", "ground beef", "tomato sauce", "onion", "herbs"],
        isVegetarian: false,
        stock: 7
    },
    {
        id: 12,
        type: 'hot-foods',
        category: 'pastas',
        name: "Carbonara Pasta",
        price: 16.99,
        description: "Creamy sauce with cheese, bacon, cream sauce",
        image: "carbonara.svg",
        ingredients: ["spaghetti", "pecorino cheese", "bacon", "cream sauce"],
        isVegetarian: false,
        stock: 6
    },
    {
        id: 13,
        type: 'hot-foods',
        category: 'pastas',
        name: "Lasagna",
        price: 18.99,
        description: "Layered pasta with meat sauce, béchamel and melted cheese",
        image: "lasagna.svg",
        ingredients: ["lasagna sheets", "ground beef", "tomato sauce", "béchamel", "cheese"],
        isVegetarian: false,
        stock: 5
    },
    {
        id: 14,
        type: 'hot-foods',
        category: 'pastas',
        name: "Marinara Pasta",
        price: 12.99,
        description: "Simple tomato sauce with garlic, oregano and fresh basil",
        image: "marinara.svg",
        ingredients: ["spaghetti", "tomato sauce", "garlic", "oregano", "basil"],
        isVegetarian: true,
        stock: 9
    },
    {
        id: 15,
        type: 'hot-foods',
        category: 'pastas',
        name: "Pesto Pasta",
        price: 14.99,
        description: "Fresh basil pesto with pine nuts, parmesan and olive oil",
        image: "pesto.svg",
        ingredients: ["spaghetti", "basil pesto", "pine nuts", "parmesan", "olive oil"],
        isVegetarian: true,
        stock: 7
    },
    {
        id: 16,
        type: 'hot-foods',
        category: 'pastas',
        name: "Primavera Pasta",
        price: 13.99,
        description: "Spring vegetables with light cream sauce and fresh herbs",
        image: "primavera.svg",
        ingredients: ["spaghetti", "spring vegetables", "cream sauce", "herbs", "parmesan"],
        isVegetarian: true,
        stock: 8
    },

    // PIZZAS
    {
        id: 17,
        type: 'hot-foods',
        category: 'pizzas',
        name: "Barbecue Pizza",
        price: 19.99,
        description: "BBQ sauce base with chicken, bacon and red onions",
        image: "barbecue.svg",
        ingredients: ["pizza dough", "BBQ sauce", "chicken", "bacon", "red onions"],
        isVegetarian: false,
        stock: 6
    },
    {
        id: 18,
        type: 'hot-foods',
        category: 'pizzas',
        name: "Four Cheese Pizza",
        price: 17.99,
        description: "Four different cheeses with tomato sauce",
        image: "four-cheese.svg",
        ingredients: ["pizza dough", "tomato sauce", "mozzarella", "gorgonzola", "parmesan", "ricotta"],
        isVegetarian: true,
        stock: 8
    },
    {
        id: 19,
        type: 'hot-foods',
        category: 'pizzas',
        name: "Hawaiian Pizza",
        price: 18.99,
        description: "Classic ham and pineapple with tomato sauce",
        image: "hawaiian.svg",
        ingredients: ["pizza dough", "tomato sauce", "ham", "pineapple"],
        isVegetarian: false,
        stock: 5
    },
    {
        id: 20,
        type: 'hot-foods',
        category: 'pizzas',
        name: "Mushroom Pizza",
        price: 16.99,
        description: "Assorted mushrooms with garlic, herbs and grilled tomatoes",
        image: "mushrooms.svg",
        ingredients: ["pizza dough", "tomato sauce", "mushrooms", "garlic", "herbs", "grilled tomatoes"],
        isVegetarian: true,
        stock: 7
    },
    {
        id: 21,
        type: 'hot-foods',
        category: 'pizzas',
        name: "Pepperoni Pizza",
        price: 19.99,
        description: "Spicy pepperoni with tomato sauce, melted mozzarella and olives",
        image: "pepperoni.svg",
        ingredients: ["pizza dough", "tomato sauce", "pepperoni", "mozzarella", "olives"],
        isVegetarian: false,
        stock: 9
    },
    {
        id: 22,
        type: 'hot-foods',
        category: 'pizzas',
        name: "Seafood Pizza",
        price: 22.99,
        description: "Mixed seafood with garlic and herbs",
        image: "seafood.svg",
        ingredients: ["pizza dough", "mixed seafood", "garlic", "herbs"],
        isVegetarian: false,
        stock: 4
    }
]

export type Food = typeof foods[number];