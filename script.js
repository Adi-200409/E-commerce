const wrapper = document.querySelector(".sliderwrapper")
const menuItems = document.querySelectorAll(".menuItem")

const products = [
    {
        id: 1,
        title: "Air Force",
        price: "Rs 9,950",
        desc:"Nike Air Force is a range of athletic shoes made by Nike. It was created by designer Bruce Kilgore and was the first basketball shoe to use Nike's Air technology. The shoe is offered in low-, mid- and high-top styles.",
        colors: [
            {
                code: "black",
                img: "./img/air.png",
            },
            {
                code: "darkblue",
                img: "./img/air2.png",
            },
        ],
    },
    {
        id: 2,
        title: "Air Jordan",
        price: "Rs 12,459",
        desc:"Social and cultural impact. Air Jordans have become a status symbol in sneaker culture and are worn all around the world today. The impact of Air Jordans has expanded from basketball and into fashion, pop culture, and hip-hop.",
        colors: [
            {
                code: "lightgray",
                img: "./img/jordan.png",
            },
            {
                code: "green",
                img: "./img/jordan2.png",
            },
        ],
    },
    {
        id: 3,
        title: "Blazer",
        price: "Rs 8,100",
        desc:"The Blazer quickly gained popularity among professional basketball players, including the likes of Earl Monroe, Walt Frazier, and even Julius Erving. As these legendary players donned the shoes during games, their fans took notice of the sleek design, comfortable fit, and exceptional performance.",        colors: [
            {
                code: "lightgray",
                img: "./img/blazer.png",
            },
            {
                code: "green",
                img: "./img/blazer2.png",
            },
        ],
    },
    {
        id: 4,
        title: "Crater",
        price: "Rs 10,788",
        desc:"TAt Nike, a journey towards a more sustainable future means transforming trash into shoes that tread a little lighter and take a little less. Crater Impact is a step on that journey. Built on our recycling ethos, Crater Impact uses waste covertly, threading in recycled content and lower-impact materials inconspicuously. Our design team meticulously weighed scraps and used plastic bottles, foams and grinds to create a shoe that's at least 25% recycled material by weight for a big impact in style and less impact on Earth.",
        colors: [
            {
                code: "black",
                img: "./img/crater.png",
            },
            {
                code: "lightgray",
                img: "./img/crater2.png",
            },
        ],
    },
    {
        id: 5,
        title: "Hippie",
        price: "Rs 8,279",
        desc:"Air Max shoes are identified by their midsoles incorporating flexible urethane pouches filled with pressurized gas, visible from the exterior of the shoe and intended to provide cushioning to the underfoot.",
        colors: [
            {
                code: "gray",
                img: "./img/hippie.png",
            },
            {
                code: "black",
                img: "./img/hippie2.png",
            },
        ],
    },
];

let choosenProduct = products[0]

const currentProductIMG = document.querySelector(".productImg");
const currentproductitle = document.querySelector(".productitle");
const currentproductPrice = document.querySelector(".producPrice");
const currentProductColors = document.querySelectorAll(".color");
const currentproductSizes = document.querySelectorAll(".size");
const currentProductDes = document.querySelector(".productDesc")

menuItems.forEach((item, index) => {
    item.addEventListener("click", () => {
        // change the current slide
        wrapper.style.transform = `translateX(${-100 * index}vw)`

        // chanhge the choosen product
        choosenProduct = products[index]

        //change the text of currentProduct
        currentproductitle.textContent = choosenProduct.title;
        currentproductPrice.textContent = choosenProduct.price;
        currentProductDes.textContent = choosenProduct.desc;
        currentProductIMG.src = choosenProduct.colors[0].img;

        // assining colors
        currentProductColors.forEach((color, index) => {
            color.style.backgroundColor = choosenProduct.colors[index].code;
        })
    })
})

currentProductColors.forEach((color, index) => {
    color.addEventListener("click", () => {
        currentProductIMG.src = choosenProduct.colors[index].img;
    })
})

currentproductSizes.forEach((size, index) => {
    size.addEventListener("click", () => {
        currentproductSizes.forEach((size) => {
            size.style.backgroundColor = "white";
            size.style.color = "black";
        })
        size.style.backgroundColor = "black";
        size.style.color = "white";
    })
})


const productButton = document.querySelector(".productbutton");
const payment = document.querySelector(".payment");
const close = document.querySelector(".close");

productButton.addEventListener("click",()=>
{
    payment.style.display="flex"
})

close.addEventListener("click",()=>
{
    payment.style.display="none"
})

