# jscc-project-creator
A little tool to boilerplate a whole new JSCC for every year - creating projects and corresponding issues with one click using the **Github GraphQL API**.

## Prequesites
### Personal Access Token
You will need a personal access token in order to use this repository. [Follow these instructions](https://help.github.com/en/github/authenticating-to-github/creating-a-personal-access-token-for-the-command-line) to create one. You will need to add the **scope** _repo:public_repo_.

Once you have the token, paste it  into a file with the name **.github_token** at the root directory of this repo. (Don't worry - this file is on .gitignore, so you won't commit it). Make sure the file does not contain a new line in the end.

**CAREFULL**: Never make the personal access token public in any way. Never commit it