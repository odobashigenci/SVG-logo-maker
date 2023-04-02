const inquirer = require('inquirer');
const fs = require ('fs');
const generateSvg = require('./libs/generateSvg')
const Shape = require('./libs/shapes')

const questions = [{
    type: 'input',
    name: 'characters',
    message: 'What will your logo characters be?',
    validate: userInput => {
        return userInput.length <=3 || "You must choose a Maximum of 3"
    }
},
{
    type: 'input',
    name: 'textColor',
    message: 'What color do you want your logo to be?'
},
{
    type: 'list',
    name: 'shape',
    message: 'What shape do you want your logo to be?',
    choices: ['circle', 'triangle', 'square']
},
{
    type: 'input',
    name: 'shapeColor',
    message: 'What color do you want your shape to be?'
},
];

function writeToFile(data){
    const svgData = generateSvg(data)
    console.log(svgData)
    // Write to file using our svgData content
    fs.writeFile('logo.svg', svgData, (err) => {
        if (err) throw err;
    })
}

function init(){
    inquirer.prompt(questions).then(data => {
 
        const userShape = new Shape(data.shape, data.characters.toUpperCase(), data.shapeColor)
        userShape.setTextColor(data.textColor)
        writeToFile(userShape)
    })
}

init()