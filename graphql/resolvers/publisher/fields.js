import { Author, WorksAt } from "../../../db/models";

const publisherFields = {
  Publisher: {
    authors: async (publisher, _, { loaders }) => {
      const worksAt = await WorksAt.find({ publisher: publisher.id });

      // const authors = await Author.find({
      //   _id: { $in: worksAt.map(({ author }) => author) },
      // });

      return loaders.author.many(worksAt.map(({ author }) => author));
    },
  },
};
export default publisherFields;
