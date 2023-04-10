import { Author } from '../../../db/models';

const authorQueries = {
  authors: async (_, { params = { page: 1, pageSize: 20 } }, { loaders }) => {
    // const authors = await Author.find();

    // return loaders.author.many(authors.map(({ id }) => id));
    const { pageSize, page } = params;

    return {
      results: async () => {
        const authors = await Author.find()
          .skip(pageSize * (page - 1))
          .limit(pageSize);

        return loaders.author.many(authors.map(({ id }) => id));
      },
      info: async () => {
        const count = await Author.countDocuments();

        const pages = Math.ceil(count / pageSize);
        const prev = page > 1 ? page - 1 : null;
        const next = page < pages ? page + 1 : null;

        return {
          count,
          pages,
          prev,
          next,
        };
      },
    }
  },
  author: async (_, { id }, { loaders }) => {
    return loaders.author.one(id);
    // const author = await Author.findById(id);

    // return author;
  },
};

export default authorQueries;