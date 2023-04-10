import { Author } from "../../../db/models";

const bookFields = {
  Book: {
    author: async (book, _, { loaders }) => {
      // const author = await Author.findById(book.author);

      // return author;
      return loaders.author.one(book.author);
    },
  },
};
export default bookFields;
