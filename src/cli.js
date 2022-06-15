#!/usr/bin/env node
const mdlinks = require('./index.js');
const chalk = require('chalk');
const {
  uniqueLinks,
  brokenLinks,
  totalLinks
} = require('./mdLinks.js')

const argument = process.argv.slice(2) 
    if (argument.length === 1) { 
      mdlinks(argument[0], { validate: false })
      .then(resolve => {
        resolve.map((objeto) => {
        console.log(` ${chalk.yellow(objeto.href)} | ${chalk.cyan(objeto.text)} | ${chalk.green(objeto.ruta)}`); 
        })
      })
      .catch(reject => console.log(reject));
    }
  
    if (argument.length === 2) { 
      switch (argument[1]) { 
      case '--validate':
        mdlinks(argument[0], { validate: true })
        .then(resolve => {
          resolve.map((objeto) => {
          console.log(`${chalk.green(objeto.ruta)} | ${chalk.yellow(objeto.href)} | ${chalk.blue(objeto.menssage)} | ${chalk.magenta(objeto.status)} | ${chalk.cyan(objeto.text)}`);
          })
        })
        .catch(reject => console.log(reject));
        break;
    
      case '--stats':
        mdlinks(argument[0], { validate: true })
          .then(resolve => 
          console.log(`${chalk.cyan(totalLinks(resolve))} ${chalk.magenta(uniqueLinks(resolve))}`)
          )
          .catch(reject => console.log(reject));
        break;
    
      case '--help':
        console.log(`${chalk.red('\nIntente  después de la ruta: --stats, --validate\n')}`)
        //(`Intente  después de la ruta: --stats, --validate `);
        break;
  
      default: console.log(`${chalk.red('\nComando no válido. Si necesita ayuda ingrese --help\n')}`) 
      //('Comando no válido. Si necesita ayuda ingrese --help');
        break;
      }
    }
  
    if (argument.length === 3) { 
      if ((argument[1] === "--stats" && argument[2] === "--validate") || (argument[1] === "--validate" && argument[2] === "--stats")) {
        mdlinks(argument[0], { validate: true })
          .then(resolve => 
          console.log(`${chalk.cyan(totalLinks(resolve))} ${chalk.magenta(uniqueLinks(resolve))} ${chalk.yellow(brokenLinks(resolve))}`)
          )
          .catch(reject => console.log(reject));
      } else {
        console.log(`${chalk.red('\nComando no válido. Si necesita ayuda ingrese --help\n')}`)
        //('Comando no válido. Necesita ayuda ingrese --help.');
      }
    }
  


