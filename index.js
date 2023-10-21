// Defining a function to log colored text to the console
function logColoredText(text, colorCode) {
    console.log(`\x1b[${colorCode}m%s\x1b[0m`, text);
}

// Logging "README Wizard" in cyan color using the logColoredText function
logColoredText('README Wizard\n', 36);

// Logging the README.md file generator message with usage instructions
console.log(
    "Welcome to the README.md file generator.\n" +
    "To create your custom README.md file, kindly provide your responses to the questions below.\n\n" +
    "To input your answers, follow these steps:\n" +
    "1. Hit 'Enter'\n" +
    "2. Press 'i'\n" +
    "3. Use Ctrl + V (Windows) or Command + V (Mac OS) to paste your text, or directly start typing in the editor.\n" +
    "4. Exit 'Insert' mode by pressing 'Escape'\n" +
    "5. Enter a colon ':'\n" +
    "6. Type 'wq' and hit 'Enter\n\n" +
    "Let's get started!"
);

// Importing node.js modules 
const fs = require("fs");
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown.js");
const { error } = require("console");

// User prompts section
inquirer
    .prompt(
        [
            {
                type: "input",
                name: "title",
                message: "What is the title of your project?\n",
            },
            {
                type: "input",
                name: "repoTitle",
                message: "What is the title of your repository?\n",
            },
            {
                type: "editor",
                name: "description",
                message:
                    "\nPlease enter a description of your project: \nWhat was your motivation?\nWhy did you build this project?\nWhat problem did it solve?\nWhat did you learn?",
            },
            {
                type: "input",
                name: "deployedSite",
                message: "Please enter deployed website URL:\n",
            },
            {
                type: "input",
                name: "imgAlt",
                message: "Please enter your screenshot Alt:\n",
            },
            {
                type: "input",
                name: "screenshot",
                message: "Please enter relative path to screenshot:\n",
            },
            {
                type: "input",
                name: "screenshotSubtitle",
                message: "Please enter your screenshot subtitle:\n",
            },
            {
                type: "editor",
                name: "installation",
                message: "Please enter installation instructions for your project:\n",
            },
            {
                type: "input",
                name: "librariesAndTools",
                message:
                    "Please enter libraries and tools used for your project. Write them in a list like this: \n<li>First item</li> <li>Second item</li> <li>Third item</li>:\n",
            },
            {
                type: "editor",
                name: "usage",
                message: "Please provide details on how your project is used:\n",
            },
            {
                type: "list",
                name: "license",
                message:
                    "\n Please choose a license for your project\n (Visit https://choosealicense.com/ if you are unsure, which license to choose):",
                choices: [
                    "MIT",
                    "GPL-3-0",
                    "apache-2-0",
                    "BSD-3-clause",
                    "ISC",
                    "0bsd",
                    "GNU General Public License (GPL)",
                    "Apache License 2.0",
                    "Mozilla Public License 2.0",
                    "Creative Commons Attribution 4.0 International License",
                    "Eclipse Public License 2.0",
                    "The Unlicense (Unlicense)",
                    "Do What The F*ck You Want To Public License (WTFPL)"
                ],
            },
            {
                type: "editor",
                name: "contribution",
                message: "\nPlease enter contribution guidelines for your project:\n",
            },
            {
                type: "editor",
                name: "tests",
                message: "Please enter test instructions for your project:\n",
            },
            {
                type: "input",
                name: "githubUser",
                message: "What is your GitHub username?\n",
            },
            {
                type: "input",
                name: "website",
                message: "What is your website URL?\n",
            },
            {
                type: "input",
                name: "websitePlaceholder",
                message: "What is the placeholder for the website URL?\n",
            },
            {
                type: "input",
                name: "email",
                message: "What is your email address?\n",
            },
        ]
    )


    // After the user answers the prompts, their responses are available in the 'answers' object.
    .then((answers) => {
        console.log(answers); // Log the user's responses to the console for review.

        // Generate the README content using the 'generateMarkdown' function with the user's answers.
        // Write the generated content to a file named 'exREADME.md'.
        fs.writeFile(`exREADME.md`, generateMarkdown(answers), (error) =>
            error
                ? console.error(error) // If there is an error, log it to the console.
                : console.log(`Success! You have now created your professional README.md `) // If successful, log a success message.
        );
    });