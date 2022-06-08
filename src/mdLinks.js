import path from 'path';
import fs from 'fs';
import  { marked }  from 'marked';
import axios from 'axios';

// Ruta relativa a absoluta (ruta absoluta)
export const absoluteRoute = (ruta) => path.isAbsolute(ruta) ? ruta : path.resolve(ruta);

// Si la ruta existe es TRUE y si no FALSE (rutaExiste)
export const existingRoute = (ruta) => fs.existsSync(ruta);

// Si la ruta es un archivo es TRUE y si no FALSE (esArchivo)
//export const fileRoute = (ruta) => fs.lstatSync(ruta).isFile();
//console.log('La ruta es un archivo: ---> ', fileRoute(rutaAbsolutaEjemplo));

// Si es un directorio TRUE y si FALSE (esDirectorio)
export const directoryRoute = (ruta) => fs.lstatSync(ruta).isDirectory();

// Si es un archivo MD (esArchivoMd)
export const fileMd = (ruta) => path.extname(ruta) === '.md';

// Muestra lo que hay dentro de la carpeta (leeDirectorio)
export const readDirectory= (ruta) => fs.readdirSync(ruta);

// Muestra el contenido de un archivo (leeArchivo)
export const readFile = (ruta) => fs.readFileSync(ruta, 'utf-8');

// Muestra todos los archivos md que hay dentro de la ruta
export const findMdFiles= (ruta) => {
  let arrayFiles = [];
    if(directoryRoute(ruta)) {
    const fileDirectory = readDirectory(ruta);
    fileDirectory.forEach((element) => {
        const routeElement = element;
        const newRoute = path.join(ruta, routeElement);
        const newMdFileArrays = findMdFiles(newRoute);
        arrayFiles = arrayFiles.concat(newMdFileArrays);
        });
    }else if(fileMd(ruta)){ // aqui se usa recursividad
      arrayFiles.push(ruta);
    };
    return arrayFiles;
};

//Lee los links que hay dentro de md (lee nelaces md)
export const readLinksMd= (archivo) => {
  const newMdFileArrays = [];
  const fileMd = findMdFiles(archivo);
  fileMd.forEach((ruta) => {
      const readFileMd = readFile(ruta);
      const renderer = new marked.Renderer();
      renderer.link = (url, texto, urlText) => {
        newMdFileArrays.push(
            {
                href: url,
                text: urlText.substring(0,20),
                ruta: ruta
              }
          );
      };
      marked(readFileMd, {renderer});
  });
  return newMdFileArrays;
};

//Validar enlaces del archivo md (validar con axios)
export const validateWithAxios = (objeto) => {
  return axios(objeto.href)
      .then((data) => {
        if (data.status >= 200 && data.status < 400) {
          return {
            ...objeto, 
            status: data.status,
            menssage: 'OK'
          };
        }      
      })
      .catch((error) => {
        return ({
          ...objeto,
          status: error.response.status,
          menssage: 'Fail'
        })
      });
};

// se importa a cli
// Enlaces total (totalEnlaces)
export const totalLinks = (objeto) => {
  const total = objeto.map(link => link.href); // array de enlaces
  const totalLinks = `\nTotal: ${total.length}`;
  return totalLinks;
};

//Muestra los links unicos que ahi (enlacesUnicos)
export const uniqueLinks = (objeto) => {
  const unique = new Set(objeto.map(element => element.href)); // array
  const uniqueLinks = `\nUnique: ${unique.size}\n`;
  return uniqueLinks;
};

// Enlaces rotos
export const brokenLinks = (objeto) => { 
  const broken = objeto.filter((element) => element.status >= 400) // array de objetos, nuevo array
  const brokenLinks =`\nBroken: ${broken.length}\n`;
  return brokenLinks;
};

/*export default {
  absoluteRoute,
  existingRoute,
  //fileRoute,
  directoryRoute,
  fileMd,
  readDirectory,
  readFile,

  readLinksMd,
  validateWithAxios,

  brokenLinks,
  totalLinks,
  findMdFiles,


}*/


