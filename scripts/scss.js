const childProcess = require('child_process');

const config = require('../config.json')
const compressed = config.comressCSS ? '--output-style compressed': '' 

const chalk = require('chalk')

console.log(chalk.blue(`Компиляция стилей из ${config.pathSCSS} в ${config.pathCSS}...`))

childProcess.exec(`node-sass ${config.pathSCSS}/ -o ${config.pathCSS}/ ${compressed}`, 
    (error, stdout, stderr) => {
        if (error) {
            console.log(chalk.red('Не удалось скомпилировать'))
            console.log(`error: ${error.message}`)
            return;
        }
        if (stderr) {
            console.log(chalk.red('stderror'))
            console.log(`stderr: ${stderr}`)
            return;
        }
        console.log(chalk.green('Компиляция завершена'))
    })