const  swaggerAutogen  =  require ( 'swagger-autogen' ) ( ) ;

const  doc  =  { 
  info : { 
    title : 'rick and morty API' , 
    descrição : 'Projeto 04 - modulo 03' , 
  } , 
  host : 'localhost:3300' , 
  esquemas : [ 'http' ] , 
} ;

const  outputFile  =  './src/swagger/swagger-output.json' ; 
const  endpointsFiles  =  [ './index.js' ] ;



    swaggerAutogen(outputFile, endpointsFiles, doc)