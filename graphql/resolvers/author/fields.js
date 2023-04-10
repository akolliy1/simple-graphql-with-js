import { Publisher, WorksAt } from "../../../db/models";

const authorFields = {
  Author: {
    publishers: async (author, _, { loaders }) => {
      const worksAt = await WorksAt.find({ author: author.id });

    //   const publishers = await Publisher.find({
    //     _id: { $in: worksAt.map(({ publisher }) => publisher) },
    //   });

      return loaders.publisher.many(worksAt.map(({ publisher }) => publisher))
    //   return publishers;
    },
  },
};

export default authorFields;
