// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if(license !== "none") {
    return ``
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if(license !== "none") {
    return ``
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if(license !== "none") {
    return ``
  }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

  //Title
  // Description of project
  // Table of Contents, which will include:

  // Installation
  // Usage - include website link
  // license: MIT, Apache 2.0, GPL 3.0 BSD3, none
  // Contributing
  // Tests
  // Questions - include contact information and github link
`;
}

module.exports = generateMarkdown;