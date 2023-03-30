'use strict';

// 1.1

  const bookTitles = [
    "twilight",
    "secret_garden",
    "frankenstein",
    "little_women",
    "matilda",
    "alice",
    "dorian_gray",
    "petit_prince",
    "inferno",
    "great_gatsby"
  ];

  
// 1.2

  // console.log(bookTitles);


// 1.3

/*
  function createList() {
    const ul = document.createElement("ul");

    for (let i = 0; i < bookTitles.length; i++) {
      const item = bookTitles[i];
      const li = document.createElement("li");
      ul.appendChild(li);
      li.innerHTML += `${item}`; 
    }

    return ul;
  }

  document.body.append(createList());
*/

// 1.4

const bookData = {
  
  twilight: {
    title: "Twilight",
    language: "English",
    author: "Stephenie Meyer",
  },

  secret_garden: {
    title: "The Secret Garden",
    language: "English",
    author: "Frances Hodgson Burnett",
  },

  frankenstein: {
    title: "Frankenstein",
    language: "English",
    author: "Mary Shelley",
  },

  little_women: {
    title: "Little Women",
    language: "English",
    author: "Louisa May Alcott",
  },

  matilda: {
    title: "Matilda",
    language: "English",
    author: "Roald Dahl",
  },

  alice: {
    title: "Alice in Wonderland",
    language: "English",
    author: "Lewis Carroll",
  },

  dorian_gray: {
    title: "The Picture of Dorian Gray",
    language: "English",
    author: "Oscar Wilde",
  },

  petit_prince: {
    title: "Le Petit Prince",
    language: "French",
    author: "Antoine de Saint-Exupéry",
  },

  inferno: {
    title: "Inferno",
    language: "Italian",
    author: "Dante Alighieri",
  },

  great_gatsby: {
    title: "The Great Gatsby",
    language: "English",
    author: "Francis Scott Key Fitzgerald",
  }
}

  // 1.7

  const bookCovers = {
    twilight: "./img/twilight.jpeg",
    secret_garden: "./img/secret_garden.jpeg",
    frankenstein: "./img/frankenstein.jpeg",
    little_women: "./img/little_women.jpeg",
    matilda: "./img/matilda.jpeg",
    alice: "./img/alice.jpeg",
    dorian_gray: "./img/dorian_gray.jpeg",
    petit_prince: "./img/petit_prince.jpeg",
    inferno: "./img/inferno.jpeg",
    great_gatsby: "./img/great_gatsby.jpeg"
  }

// 1.5, 1.8

const header = document.querySelector("header");
const h1 = document.createElement("h1");
h1.innerHTML = "Dana's Bookshelf";
header.appendChild(h1);

function createList() {
  const container = document.querySelector(".container");
  const ul = document.createElement("ul");
  container.appendChild(ul);

  for (let key in bookData) {
    if (bookData.hasOwnProperty(key)) {
      console.log(key, bookData[key]);
      const item = bookData[key];

      const li = document.createElement("li");
      ul.appendChild(li);
      
      const h2 = document.createElement("h2");
      li.appendChild(h2);
      h2.innerHTML = `"${item.title}"`;

      const h3 = document.createElement("h4");
      li.appendChild(h3);
      h3.innerHTML = `Author: ${item.author}`;
      
      const h4 = document.createElement("h4");
      li.appendChild(h4);
      h4.innerHTML = `Language: ${item.language}`;
  
      displayCover(li, bookCovers[key])
    }    
  }
};

createList();

function displayCover(book, id) {
  const img = document.createElement("img");
  book.appendChild(img);
  img.src = id;
}
  
