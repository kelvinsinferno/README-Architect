
// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license === 'Apache License 2.0') {
    return `This project is licensed under the Apache License 2.0 license. \n https://choosealicense.com/licenses/apache-2.0/`;
  } else if (license === 'GNU General Public License v3.0') {
    return `This project is licensed under the GNU General Public License v3.0 license. \n https://choosealicense.com/licenses/gpl-3.0/`;
  } else if (license === 'MIT License') {
    return `This project is licensed under the MIT License license. \n https://choosealicense.com/licenses/mit/`;
  } else if (license === 'BSD 2-Clause "Simplified" License') {
    return `This project is licensed under the BSD 2-Clause "Simplified" License license. \n https://choosealicense.com/licenses/bsd-2-clause/`;
  } else if (license === 'BSD 3-Clause "New" or "Revised" License') {
    return `This project is licensed under the BSD 3-Clause "New" or "Revised" License license. \n https://choosealicense.com/licenses/bsd-3-clause/`;
  } else if (license === 'Boost Software License 1.0') {
    return `This project is licensed under the Boost Software License 1.0 license. \n https://choosealicense.com/licenses/bsl-1.0/`;
  } else if (license === 'Creative Commons Zero v1.0 Universal') {
    return `This project is licensed under the Creative Commons Zero v1.0 Universal license. \n https://choosealicense.com/licenses/cc0-1.0/`;
  } else if (license === 'Eclipse Public License 2.0') {
    return `This project is licensed under the Eclipse Public License 2.0 license. \n https://choosealicense.com/licenses/epl-2.0/`;
  } else if (license === 'GNU Affero General Public License v3.0') {
    return `This project is licensed under the GNU Affero General Public License v3.0 license.  \n https://choosealicense.com/licenses/agpl-3.0/`;
  } else if (license === 'GNU General Public License v2.0') {
    return `This project is licensed under the GNU General Public License v2.0 license. \n https://choosealicense.com/licenses/gpl-2.0/`;
  } else if (license === 'GNU Lesser General Public License v2.1') {
    return `This project is licensed under the GNU Lesser General Public License v2.1 license. \n https://choosealicense.com/licenses/lgpl-2.1/`;
  } else if (license === 'Mozilla Public License 2.0') {
    return `This project is licensed under the Mozilla Public License 2.0 license. \n https://choosealicense.com/licenses/mpl-2.0/`;
  } else if (license === 'The Unlicense') {
    return `This project is licensed under the The Unlicense license. \n https://choosealicense.com/licenses/unlicense/`;
  } else {
    return '';
  }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `
  ## ${data.title}

  ## Description
  ${data.description}
  
  ## Table of Contents
  * [Installation](#installation)
  * [Usage](#usage)
  * [Tests](#tests)
  * [License](#license)
  * [Github](#github)
  * [Email](#email)
  * [How to Contribute](#how-to-contribute)


## Installation
${data.installation}

## Usage
${data.usage}

## Tests
${data.test}

## License
${renderLicenseSection(data.license)}

## Github
${data.github}

## Email
${data.email}

## How to Contribute
${data.contribute}

`;
}

module.exports = generateMarkdown;
