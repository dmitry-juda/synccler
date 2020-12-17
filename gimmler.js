const childProcess = require('child_process');

const chalk = require('chalk')

console.log(chalk.blue(`gimmler hAs beemm.....`))

childProcess.exec(`npm-run-all --parallel \"scripts/scss\" \"scripts/sync\"`, 
    (error, stdout, stderr) => {
        if (error) {
            console.log(chalk.red('Не удалось запустить сессию'))
            console.log(`error: ${error.message}`)
            return;
        }
        if (stderr) {
            console.log(chalk.red('stderror'))
            console.log(`stderr: ${stderr}`)
            return;
        }
        console.log(chalk.green('Сессия завершена'))
        if (config.showOuts) {
            console.log(stdout)
        }
    })