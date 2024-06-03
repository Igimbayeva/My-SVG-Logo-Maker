const inquirer = require("inquirer");
const SVG = require("./svg");
const { Circle, Triangle, Square } = require("./shapes");
const { writeFile } = require("fs/promises");

async function run() {
  try {
    const answers = await inquirer.prompt([
      {
        name: "text",
        type: "input",
        message:
          "Enter text for the logo. (Must not be more than 3 characters.)",
        validate: (text) =>
          text.length <= 3 ||
          "The message must not contain more than 3 characters",
      },
      {
        name: "textColor",
        type: "input",
        message: "Enter a text color",
      },
      {
        name: "shapeType",
        type: "list",
        message: "Select a shape for the logo",
        choices: ["circle", "square", "triangle"],
      },
      {
        name: "shapeColor",
        type: "input",
        message: "Enter a shape color",
      },
    ]);

    let shape;
    switch (answers.shapeType) {
      case "circle":
        shape = new Circle();
        break;
      case "square":
        shape = new Square();
        break;
      default:
        shape = new Triangle();
        break;
    }
    shape.setColor(answers.shapeColor);

    const svg = new SVG();
    svg.setText(answers.text, answers.textColor);
    svg.setShape(shape);

    await writeFile("logo.svg", svg.render());
    console.log("Generated logo.svg");
  } catch (error) {
    console.error("Oops! Something went wrong.", error);
  }
}

run();
