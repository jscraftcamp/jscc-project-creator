const GraphQLClient = require('graphql-request');
const fs = require('fs');
const util = require('util');

const readFile = util.promisify(fs.readFile);

async function main() {
  const endpoint = 'https://api.github.com/graphql'
  const token = await readFile('./.github_token');

  const graphQLClient = new GraphQLClient.GraphQLClient(endpoint, {
    headers: {
      Authorization: `bearer ${token}`,
    },
  })

  const query = `{
        viewer {
            login
            name
        }
    }
  `

  const data = await graphQLClient.request(query)
  console.log(JSON.stringify(data, undefined, 2))
}

main().catch(error => console.error(error))