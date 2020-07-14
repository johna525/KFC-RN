const CreatePost = `
    mutation CreatePost($text: String!) {
      createPost(input: {
        text: $text

      })
      {
        id
        text

      }
    }
  `;

const ListPosts = `
query listPosts {
  listPosts {
    items{
      id
      
        createdAt
  postMessage
  postMediaType
  postMediaValue
    }
  }
}
`;

export {
  CreatePost,
  ListPosts
};
