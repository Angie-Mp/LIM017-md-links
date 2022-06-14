const chalk = require('chalk');
const {
  absoluteRoute,
  existingRoute,
  findMdFiles,
  readLinksMd,
  validateWithAxios,
} = require( './mdLinks.js');

//funcion mdlinks
const mdlinks = (ruta, option) => {
return new Promise( (resolve, reject) => {
  if(existingRoute(ruta)){
    const rutaAbsoluta = absoluteRoute(ruta); // ruta relativa a absoluta
    const buscaArchivos = findMdFiles(rutaAbsoluta); // array de archivos .md
    
    if(buscaArchivos.length > 0){ // si hay archivos .md
      const leeLinks = readLinksMd(rutaAbsoluta); // href, text y ruta
      if(leeLinks.length > 0){
        if(option.validate === true){
          const buscaCadaArchivoLinks = leeLinks.map((objeto) => {
            const estadosLinks = validateWithAxios(objeto);
            return estadosLinks;
          });
          resolve(Promise.all(buscaCadaArchivoLinks)); // consume una promesa con promise.all
        }else{
          resolve(leeLinks);
        }
      }else{
        reject(`${chalk.cyan('\nNo hay links\n')}`)      }
    } else {
      reject(`${chalk.cyan('\nNo hay ningun archibo .md\n')}`)
    }
  }else{
   reject(
    `${chalk.red('\nLa ruta no es valida\n')}`
   );
  }
});
};
module.exports = mdlinks;

