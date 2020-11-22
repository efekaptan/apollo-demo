import data from './data';

const resolver = {
    Query: {
        feed: () => {
            return data.filter((post) => post.published)
        },
        post: (parent, args) => {
            return data.find((post) => post.id === Number(args.id))
        },
    },
    Mutation: {
        createDraft: (parent, args) => {
            data.push({
                id: data.length + 1,
                title: args.title,
                content: args.content,
                published: false,
            })
            return data[data.length - 1]
        },
        publish: (parent, args) => {
            const postToPublish = data.find((post) => post.id === Number(args.id))
            postToPublish.published = true
            return postToPublish
        },
    },
    Post: {
        content: (parent) => parent.content,
        id: (parent) => parent.id,
        published: (parent) => parent.published,
        title: (parent) => parent.title,
    },
}

export default resolver;