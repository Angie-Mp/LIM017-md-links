export const rutaAbsolutaEjemplo = '/Users/mac/Documents/LIM017-md-links/documentProof/textInformation.txt'
export const rutaRelativaEjemplo = 'documentProof/textLink.md'
export const rutaDirectorioEjemplo = '/Users/mac/Documents/LIM017-md-links/documentProof/'

export const objetoTresEstadosFail = {
  href: 'https://www.instagram.com/p/asd2/',
  text: 'soy link 2',
  ruta: '/Users/mac/Documents/LIM017-md-links/documentProof/linksFail.md'
};
export const arrayEnlaces = [
  {
    href: 'https://www.instagram.com/laboratoriala/',
    text: 'link-LAB',
    ruta: '/Users/mac/Documents/LIM017-md-links/documentProof/textLink.md',
    status: 200,
    menssage: 'OK'
  },
  {
    href: 'https://www.instagram.com/bts.bighJK/',
    text: 'link-BTS',
    ruta: '/Users/mac/Documents/LIM017-md-links/documentProof/textLink.md',
    status: 404,
    menssage: 'FAIL'
  },
];
//
export default {
  rutaAbsolutaEjemplo,
  rutaDirectorioEjemplo,
  rutaRelativaEjemplo,
  objetoTresEstadosFail,
  arrayEnlaces
}