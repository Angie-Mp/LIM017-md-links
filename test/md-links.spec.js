const {
  absoluteRoute,
  existingRoute,
  findMdFiles,
  readLinksMd,

  validateWithAxios,
  totalLinks,
  uniqueLinks,
  brokenLinks
} = require ('../src/mdLinks.js');
const rutaDirectorioEjemplo = '/Users/mac/Documents/LIM017-md-links/documentProof/'
const rutaFalsa = '/Users/mac/Documents/LIM017-md-lin/';
const rutaDirectorioFailMd = '/Users/mac/Documents/LIM017-md-links/documentProof/linksFail.md'


describe('Ruta relativa a absoluta', () => {
  it('convierte la ruta a absoluta',() => {
      expect(absoluteRoute(rutaDirectorioEjemplo)).toBe('/Users/mac/Documents/LIM017-md-links/documentProof/')
  })
} );

describe('La ruta del directorio existe?', () => {
  it('Verifica si existe o no',() => {
      expect(existingRoute(rutaDirectorioEjemplo)).toEqual(true);
      expect(existingRoute(rutaFalsa)).toEqual(false);
  })
});

describe('Muestra los archivos md ', () => {
  it('muestra todos los archivos md dentro del escritorio',() => {
      const fileMd = [
        '/Users/mac/Documents/LIM017-md-links/documentProof/linksFail.md',
        '/Users/mac/Documents/LIM017-md-links/documentProof/text.md',
        '/Users/mac/Documents/LIM017-md-links/documentProof/textLink.md'
        ]
      expect(findMdFiles(rutaDirectorioEjemplo)).toEqual(fileMd)
  })
} );

describe('Muestra los links md', () => {
  it('muestra todos los links dentro de los archivos md',() => {
      const linksMd = [
        {
           "href": "https://www.instagram.com/p/asd1/",
           "ruta": "/Users/mac/Documents/LIM017-md-links/documentProof/linksFail.md",
           "text": "soy link 1",
        },
        {
           "href": "https://www.instagram.com/p/asd2/",
           "ruta": "/Users/mac/Documents/LIM017-md-links/documentProof/linksFail.md",
           "text": "soy link 2",
        },  
      ]
      expect(readLinksMd(rutaDirectorioFailMd)).toEqual(linksMd)
  })
} );

