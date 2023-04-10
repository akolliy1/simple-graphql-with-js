import { Author, WorksAt } from '../../../db/models';

const authorMutations = {
  createAuthor: async (_, { author }, { loaders }) => {
    const newAuthor = new Author(author);

    const savedAuthor = await newAuthor.save();
    return loaders.author.one(savedAuthor.id);
  },
  updateAuthor: async (_, { id, author }, { loaders }) => {
    const updatedAuthor = await Author.findByIdAndUpdate(
      id,
      {
        $set: { ...author },
      },
      { new: true }
    );

    // const  updatedAuthor;
    return loaders.author.one(updatedAuthor.id);
  },
  addAuthorToPublisher: async (_, { id, publisher }, { loaders }) => {
    const author = await Author.findById(id);

    if (author) {
      const newWorksAt = new WorksAt({ publisher, author: id });
      await newWorksAt.save();
    }

    return loaders.author.one(id)
    // return author;
  },
};

export default authorMutations;