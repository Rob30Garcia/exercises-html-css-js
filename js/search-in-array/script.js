const booksByCategory = [
  {
      category: "Riqueza",
      books: [
          {
              title: "Os segredos da mente milionária",
              author: "T. Harv Eker",
          },
          {
              title: "O homem mais rico da Babilônia",
              author: "George S. Clason",
          },
          {
              title: "Pai rico, pai pobre",
              author: "Robert T. Kiyosaki e Sharon L. Lechter",
          },
      ],
  },
  {
      category: "Inteligência Emocional",
      books: [
          {
              title: "Você é Insubstituível",
              author: "Augusto Cury",
          },
          {
              title: "Ansiedade – Como enfrentar o mal do século",
              author: "Augusto Cury",
          },
          {
              title: "Os 7 hábitos das pessoas altamente eficazes",
              author: "Stephen R. Covey",
          },
      ],
  },
];

console.log("Número de categorias: ", booksByCategory.length);

for (const category of booksByCategory) {
  console.log("Total de livros da categoria ", category.category);
  console.log(category.books.length);
}

function countAuthors() {
  let authors = [];

  for (const caterogy of booksByCategory) {
    for (const book of caterogy.books) {
      if(authors.indexOf(book.author) == -1) {
        authors.push(book.author);
      }
    }
  }
  
  console.log(authors.length);
}

countAuthors();

function booksOfAuthor(author) {
  let books = [];

  for (const caterogy of booksByCategory) {
    for (const book of caterogy.books) {
      if(book.author === author) {
        books.push(book.title)
      }
    }
  }

  console.log("Livros do autor: ", books );
}

booksOfAuthor("Augusto Cury");
