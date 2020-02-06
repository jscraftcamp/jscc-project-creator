const queryCreators = {
    getOrgaAndRepoId: () => {
        return `
          query { 
              organization(login:"jscraftcamp") {
                   id
             },
            repository(owner:"jscraftcamp", name:"website") {
      id,
      label(name:"sponsoring") {
        id
      }
    }
  }
  `},
    createLabel: (repositoryId, labelName, color) => {
        return `
    mutation createLabel(input: { repositoryId: "${repositoryId}"}, name: "${labelName}", color: "${color}" ) {
      label {
        id
      }
    }
    `
    },
    createProject: ({ name, body, ownerId, repositoryId }) => {
        return `
    mutation {
      createProject(input: {name:"${name}", body:"${body}", ownerId:"${ownerId}", repositoryIds:["${repositoryId}"]}) {
      project {
        id
      }
    } 
  },
  `
    },
    createIssue: ({ title, body, labels, repositoryId }) => {
        return `
    mutation {
      createIssue(input:{repositoryId:"${repositoryId}", title:"${title}", body:"${body}", labelIds: [${labels}], projectIds:[]}) {
      issue {
        id
      }
    }
  }
  `
    },
    getPrevisouIssues: () => {
        return `
    mutation {
      createProject(input: 
      {name:"test", body:"a test project", ownerId:"MDEyOk9yZ2FuaXphdGlvbjE4MjExMzkw", repositoryIds:["MDEwOlJlcG9zaXRvcnkyMzg0Mzg3Mzg="]}) {
      clientMutationId
    } 
  }
`

    }
}

module.exports = queryCreators;