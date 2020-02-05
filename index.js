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
        repository(owner:"jscraftcamp", name:"website") {
      
          issues(labels:["jscc20"], first:40) {
          nodes {
            title,
            body
          }
        }
          
          
        }
    }
  `

    const data = await graphQLClient.request(query);

    const issues_2020 = JSON.stringify(data.repository.issues.nodes);
    fs.writeFileSync('./input/issues.json', issues_2020);

    console.log(JSON.stringify(data, undefined, 2))
}

main().catch(error => console.error(error))