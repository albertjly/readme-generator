// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  const url = encodeURI(`https://img.shields.io/badge/license-${license}-green.svg`);
  return `![${license}](${url})`
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  const licenseLinkObj = {
    ['MIT License']: 'https://choosealicense.com/licenses/mit/',
    ['GNU AGPLv3']: 'https://choosealicense.com/licenses/agpl-3.0/',
    ['GNU GPLv3']: 'https://choosealicense.com/licenses/gpl-3.0/',
    ['GNU LGPLv3']: 'https://choosealicense.com/licenses/lgpl-3.0/',
    ['Mozilla Public License 2.0']: 'https://choosealicense.com/licenses/mpl-2.0/',
    ['Apache License 2.0']: 'https://choosealicense.com/licenses/apache-2.0/',
    ['Boost Software License 1.0']: 'https://choosealicense.com/licenses/bsl-1.0/',
    ['The Unlicense']: ''
  };

  const links = licenseLinkObj[license];

  return links;
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  const licenseSectionObj = {
    ['MIT License']: `Copyright (c) [year] [fullname]`,
    ['GNU AGPLv3']: `Copyright (C) 2007 Free Software Foundation, Inc. <https://fsf.org/>
    Everyone is permitted to copy and distribute verbatim copies
    of this license document, but changing it is not allowed.`,
    ['GNU GPLv3']: `Copyright (C) 2007 Free Software Foundation, Inc. <https://fsf.org/>
    Everyone is permitted to copy and distribute verbatim copies
    of this license document, but changing it is not allowed.`,
    ['GNU LGPLv3']: `Copyright (C) 2007 Free Software Foundation, Inc. <https://fsf.org/>
    Everyone is permitted to copy and distribute verbatim copies
    of this license document, but changing it is not allowed.`,
    ['Mozilla Public License 2.0']: `This License is not intended to limit any rights You have under
    applicable copyright doctrines of fair use, fair dealing, or other
    equivalents.`,
    ['Apache License 2.0']: `Copyright [yyyy] [name of copyright owner]`,
    ['Boost Software License 1.0']: `The copyright notices in the Software and this entire statement, including
    the above license grant, this restriction and the following disclaimer,
    must be included in all copies of the Software, in whole or in part, and
    all derivative works of the Software, unless such copies or derivative
    works are solely in the form of machine-executable object code generated by
    a source language processor.`,
    ['The Unlicense']: ''
  };

  const section = licenseSectionObj[license];
  return section;
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# **${data.title}**\n
>## **_Description_**\n
${data.description}\n
---
### **_Table of Contents_**\n
* [Installation](#installation)
* [Usage](#usage)
* [Credits](#credits)
* [Features](#features)
* [Contribution](#contribution)
* [License](#license)

>## **_Installation_**\n
\`\`\`
${data.installation}
\`\`\`\n


>## **_Usage_**\n
${data.usage}\n
Provide instructions and examples for use.\n
**Wider Screen**\n
![screenshot](./assets/images/screenshot.png)\n
**Mobile Screen**\n
![screenshot](./assets/images/mobile-screenshot.png)\n

>## **_Credits_**\n
${data.credits}\n

>## **_Features_**\n
${data.features}\n

>## **_Contributing_**\n
If you created an application or package and would like other developers to contribute it, you will want to add guidelines for how to do so. The [Contributor Covenant](https://www.contributor-covenant.org/) is an industry standard, but you can always write your own.\n
❤️\n
${data.contribution}\n

>## **_License_**\n
${renderLicenseBadge(data.license)}\n
${renderLicenseSection(data.license)}\n
${renderLicenseLink(data.license)}\n
`;
}

module.exports = generateMarkdown;
