function generateMarkdown(answers) {
    let markdown = "";

    // Title
    if (answers.title) {
        markdown += `# <strong>${answers.title}\n\n`;
    }

    // Table of Contents
    markdown += "## Table Of Contents\n\n";
    if (answers.description) {
        markdown += `- [Description](#description)\n`;
    }

    if (answers.screenshot) {
        markdown += `- [Screenshot](#screenshot)\n\n`;
    }

    
    if (answers.installation) {
        markdown += `- [Installation](#installation)\n`;
    }
    
    if (answers.usage) {
        markdown += `- [Usage](#usage)\n`;
    }
    
    if (answers.contribution) {
        markdown += `- [Contributing](#contribution)\n`;
    }
    
    if (answers.tests) {
        markdown += `- [Tests](#tests)\n`;
    }

    if(answers.website) {
        markdown += `- [Portfolio](#portfolio)\n`;
    }
    
    if (answers.contact) {
        markdown += `- [Contact](#contact)\n`;
    }
    
    if (answers.repoTitle) {
        markdown += `- [License](#license)\n\n`;
    }

    // Shields
    if (answers.repoTitle) {
        markdown += `<img src="https://img.shields.io/github/repo-size/${answers.githubUser}/${answers.repoTitle}?style=plastic" alt="GitHub repo size"><br>\n`;
        markdown += `<img src="https://img.shields.io/github/languages/top/${answers.githubUser}/${answers.repoTitle}?style=plastic" alt="GitHub top language"></p>\n\n`;
    }

    // Description
    if (answers.description) {
        markdown += `## Description\n\n${answers.description}\n\n`;
        markdown += `<a href="#table-of-contents">Back to Table of Contents</a>\n`;
    }

    if (answers.motivation) {
        markdown += `### Motivation\n\n${answers.motivation}\n\n`;
        markdown += `<a href="#table-of-contents">Back to Table of Contents</a>\n`;
    }

    if (answers.whyBuilt) {
        markdown += `### Why I Built This\n\n${answers.whyBuilt}\n\n`;
        markdown += `<a href="#table-of-contents">Back to Table of Contents</a>\n`;
    }

    if (answers.problemSolved) {
        markdown += `### Problem Solved\n\n${answers.problemSolved}\n\n`;
        markdown += `<a href="#table-of-contents">Back to Table of Contents</a>\n`;
    }

    if (answers.whatLearned) {
        markdown += `### What I Learned\n\n${answers.whatLearned}\n\n`;
        markdown += `<a href="#table-of-contents">Back to Table of Contents</a>\n`;
    }

    // Screenshot
    if (answers.screenshot) {
        markdown += `## Screenshot\n\n`;
        markdown += `<p align="center">\n`;
        markdown += `  <img alt="${answers.imgAlt}" src="${answers.screenshot}" width="400px"><br>\n`;
        markdown += `  ${answers.screenshotSubtitle}\n`;
        markdown += `</p>\n\n`;
        markdown += `<a href="#table-of-contents">Back to Table of Contents</a>\n`
    }

    // Installation
    if (answers.installation) {
        markdown += `## Installation\n\n${answers.installation}\n\n`;
        markdown += `<a href="#table-of-contents">Back to Table of Contents</a>\n`;
    }

    // Usage
    if (answers.usage) {
        markdown += `## Usage\n\n${answers.usage}\n\n`;
        markdown += `<a href="#table-of-contents">Back to Table of Contents</a>\n`;
    }

    // Contributing
    if (answers.contribution) {
        markdown += `## Contribution\n\n${answers.contribution}\n\n`;
        markdown += `<a href="#table-of-contents">Back to Table of Contents</a>\n`;
    }

    // Tests
    if (answers.tests) {
        markdown += `## Tests\n\n${answers.tests}\n\n`;
        markdown += `<a href="#table-of-contents">Back to Table of Contents</a>\n`;
    }

    // Website
    if (answers.website) {
        markdown += `## Portfolio\n\nVisit my portfolio:\n[${answers.websitePlaceholder}](${answers.website})\n\n`;
        markdown += `<a href="#table-of-contents">Back to Table of Contents</a>\n`;
    }

    // Contact
    if (answers.contact) {
        markdown += `## Contact\n\nFeel free to reach out to me on my email:\n${answers.contact}\n\n`;
        markdown += `<a href="#table-of-contents">Back to Table of Contents</a>\n`;
    }

    // License
    if (answers.repoTitle) {
        markdown += `## License\n\nThis application is covered under the following licence:\n`;
        markdown += `<p><img src="https://img.shields.io/static/v1?label=License&message=${answers.license}&color=blue" alt="License"></p>\n\n`;
        `<a href="#table-of-contents">Back to Table of Contents</a>\n`
    }

    return markdown;
}

module.exports = generateMarkdown;