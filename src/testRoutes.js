 //links para hacer pruebas en el proceso 
 const routeAbsolute = '/Users/mac/Documents/LIM017-md-links/documentProof/textInformation.txt'
 const routeRelative = 'documentProof/textLink.md'
 const routeDirectory = '/Users/mac/Documents/LIM017-md-links/documentProof/'

 const linkFail = {
  href: 'https://www.instagram.com/p/asd2/',
  text: 'soy link 2',
  ruta: '/Users/mac/Documents/LIM017-md-links/documentProof/linksFail.md'
};
 const arrayLinks = [
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
module.exports ={
  routeAbsolute,
  routeRelative,
  routeDirectory,
  linkFail,
  arrayLinks
}