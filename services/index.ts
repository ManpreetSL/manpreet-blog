import { request, gql } from 'graphql-request';

const graphQlApi = process.env.NEXT_PUBLIC_HYGRAPH_ENDPOINT;

export const getPosts = async () => {
  if (!graphQlApi) return [];

  const query = gql`
    query MyQuery {
      postsConnection {
        edges {
          node {
            authors {
              bio
              id
              name
              photo {
                url
              }
            }
            createdAt
            slug
            title
            excerpt
            categories {
              name
              slug
            }
            featuredImage {
              url
            }
          }
        }
      }
    }
  `;

  const result = await request(graphQlApi, query);

  return result.postsConnection.edges;
};
