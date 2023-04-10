import { Book, WorksAt } from "../../../db/models";

const bookMutations = {
  createBook: async (_, { book }, { loaders }) => {
    const newBook = new Book(book);

    const savedBook = await newBook.save();
    return loaders.book.one(savedBook.id)
  },
  updateBook: async (_, { id, book }) => {
    const updatedBook = await Book.findByIdAndUpdate(
      id,
      {
        $set: { ...book },
      },
      { new: true }
    );

    return loaders.book.one(updatedBook.id);
  },
};

export default bookMutations;
