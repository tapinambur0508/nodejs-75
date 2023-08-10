const { program } = require("commander");

const Books = require("./books/index.js");

// Books.getAll().then(console.log).catch(console.error);
// Books.getById("u9kgwNWGi3uUUwh0b8V49").then(console.log).catch(console.error);
// Books
//   .create({ title: "Title", author: "Author" })
//   .then(console.log)
//   .catch(console.error);
// Books
//   .update("7f482b55-68b6-4dc4-a270-9ec2aa2ded7e", {
//     title: "Updated title",
//     author: "Author",
//   })
//   .then(console.log)
//   .catch(console.error);
// Books
//   .remove("7f482b55-68b6-4dc4-a270-9ec2aa2ded7e")
//   .then(console.log)
//   .catch(console.error);

async function invokeAction({ action, id, title, author }) {
  switch (action) {
    case "getAll":
      const books = await Books.getAll();
      return books;
    case "getById":
      const book = await Books.getById(id);
      return book;
    case "create":
      const newBook = await Books.create({ title, author });
      return newBook;
    case "update":
      const updatedBook = await Books.update(id, { title, author });
      return updatedBook;
    case "remove":
      const removedBook = await Books.remove(id);
      return removedBook;
    default:
      throw new Error("Invalid action");
  }
}

program
  .option("-a, --action <action>", "Action to invoke")
  .option("-i, --id <id>", "Book ID")
  .option("-t, --title <title>", "Book title")
  .option("-at, --author <author>", "Book author");

console.log(process.argv);

program.parse(process.argv);

const options = program.opts();

console.log(options);

invokeAction(options)
  .then((data) => console.log(data))
  .catch((error) => console.error(error));
