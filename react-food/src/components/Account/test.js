let img = [
  "https://firebasestorage.googleapis.com/v0/b/react-course-proje.appspot.com/o/shawarma_chicken.jpg?alt=media&token=ab5cba8f-7ee7-4d0e-8ec2-aa57f84d6d4d",
  "https://firebasestorage.googleapis.com/v0/b/react-course-proje.appspot.com/o/shawarma_lamb.jpg?alt=media&token=c69d9fa8-2aad-4fdb-972f-a04485f42336",
  "https://firebasestorage.googleapis.com/v0/b/react-course-proje.appspot.com/o/shawarma_beef.jpg?alt=media&token=c31fb29f-d38b-4209-a55b-aa98d5817e69",
  "https://firebasestorage.googleapis.com/v0/b/react-course-proje.appspot.com/o/kebab.jpg?alt=media&token=7db5cb06-1a8c-4b6b-a917-e59276296cca",
  "https://firebasestorage.googleapis.com/v0/b/react-course-proje.appspot.com/o/vegan_falafel.jpg?alt=media&token=ed7df610-6658-4fbb-af5e-553053b5e190",
];
let name = [
  "Chicken Shawarma",
  "Lamb Shawarma",
  "Beef Shawarma",
  "Chicken Kebab",
  "Vegan Falafel",
];
let ingredients = [
  ["chicken breast", "tomatoes", "pickles", "salad", "onions", "pita", "sauce"],
  ["beef", "tomatoes", "pickles", "salad", "onions", "pita", "shawarma sauce"],
  ["lamb meat", "tomatoes", "pickles", "salad", "onions", "pita", "sauce"],
  ["chicken breast", "tomatoes", "pickles", "salad", "onions", "pita", "sauce"],
  ["vegan falafels", "tomatoes", "pickles", "salad", "onions", "pita", "sauce"],
];
let weight = [350, 350, 350, 370, 370];
let price = [7.55, 8.35, 9, 8, 10];

let data = {};

name.forEach((element, index) => {
  let id = String(Math.random().toFixed(7)).slice(3);
  data[id] = {
    name: name[index],
    image: img[index],
    ingredients: ingredients[index],
    weight: weight[index],
    price: price[index],
  };
});
fetch(
  "https://react-course-proje-default-rtdb.europe-west1.firebasedatabase.app/meals.json",
  {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  }
);
