# SVG Logo Maker Pro

SVG Logo Maker Pro is a command-line tool to generate SVG logos with customizable text and shapes.

## Table of Contents
- [Installation](#installation)
- [Usage](#usage)
- [Folder Structure](#folder-structure)
- [Tests](#tests)
- [Walkthrough](#walkthrough)
- [License](#license)

## Installation
Clone the repository:

```bash
git clone https://github.com/your-username/SVG-Logo-Maker-Pro.git
cd SVG-Logo-Maker-Pro
```

Install dependencies:

```bash
npm install
```

## Usage
Requires Node v12+ (tested with Node v16).

1. Run `npm install` to install dependencies.
2. Run `node index.js` to start the application.
3. Follow the prompts to enter the text, text color, shape type, and shape color for your logo.
4. The generated SVG will be saved as `logo.svg` in the root directory.


## Folder Structure
The project structure is organized as follows:

```
SVG-Logo-Maker-Pro/
├── examples/
├── lib/
│   ├── shapes.js
│   ├── shapes.test.js
│   ├── svg.js
│   └── svg.test.js
├── node_modules/
│   ├── (npm modules and dependencies)
├── .gitignore
├── index.js
├── package-lock.json
├── package.json
└── README.md
```


- **lib/**: Contains JavaScript files for defining shapes (`shapes.js`), their tests (`shapes.test.js`), SVG rendering (`svg.js`), and SVG tests (`svg.test.js`).
- **examples/**: Placeholder directory for example files.
- **node_modules/**: Directory where npm modules and dependencies are installed.
- **index.js**: Main entry point that uses inquirer to prompt for user input and generate the SVG logo.
- **package-lock.json**: Detailed information about exact versions of installed npm packages.
- **package.json**: Configuration file with dependencies, scripts, and project details.
- **README.md**: This file providing an overview of the project, installation instructions, usage guidelines, folder structure, testing information, and licensing details.

## Tests
Jest is used for testing. Run tests with:

```bash
npm test
```

Tests include verifying shape rendering, SVG generation, text handling, and error conditions.

## License
This project is licensed under the MIT License.  
