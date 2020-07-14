const ListPosts = `
query listPosts {
  listPosts {
    items{
      id
      text
    }
  }
}
`;

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

const SubscribeToPosts = `
    subscription {
      onCreatePost {
        id
        text
      }
    }
  `;

export {
  SubscribeToPosts,
  CreatePost,
  ListPosts

};
