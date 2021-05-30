// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if(license !== "None") {
    return `![GitHub license badge](https://img.shields.io/badge/license-${license}-orange)`
  }
  return ''
}

// If there is no license, return an empty string
function renderLicenseLink(license) {
  if(license !== "None") {
    return `
[License](#License)`
  }
  return ''
}

// If there is no license, return an empty string
function renderLicenseSection(license) {
  if(license !== "None") {
    return `##  License

The license for this project is ${license}. For full details, refer to the license file within the repository.`
  }
  return ''
}

// Renders a list of technologies used in the project
function renderTechnologies(technologies) {
  if (technologies !== "") {
    var techArray = technologies.split(', ')

    return `* ${techArray.map(i => i).join(`
* `)}`
  }
}

// Generate markdown for README, which is created in the dist folder
function generateMarkdown(data) {
  console.log(data);
  return `# ${data.title}

## Description
${data.description}

${renderLicenseBadge(data.license)}

Table of Contents |
-------------------|
[Installation](#Installation)
[Usage](#Usage)
[Technologies](#Technologies)
[Screenshots](#Screenshots)
[Contributing](#Contributing)${renderLicenseLink(data.license)}
[Tests](#Tests)
[Author](#Author)
[Questions](#Questions)

<br />

## Installation

In order to run the project locally, ensure that dependencies are installed by running:

${data.install}

<br />

## Usage

${data.usage}

You can find the deployed link and the repository link below:

Deployed Link: [Deployed Link](https://${data.github}.github.io/${data.repoName})

Repo Link: [Repo Link](https://github.com/${data.github}/${data.repoName})

<br />

## Technologies

${renderTechnologies(data.technologies)}

<br />

## Screenshots

![IMG](./assets/images/${data.repoName}-screenshot.png)

## Contributing

${data.contribute}

<br />

${renderLicenseSection(data.license)}

## Tests

${data.test}

<br />

## Author

${data.author}: [:octocat:](https://github.com/${data.github})

<br />

## Questions

If you have any questions or issues, feel free to reach out at: ${data.contactInfo}.
You can also find more of my work on Github at [github link](https://github.com/${data.github}).
`;
}

module.exports = generateMarkdown;