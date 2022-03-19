%{
//codigo js
const inicio = require('../indexControllers');
const nativo = require('./expresiones/Nativo');
const Tipo = require('./simbolo/Tipo');
const impresion = require('./instrucciones/Imprimir');
%}
//definicion lexica
%lex 


%options case-insensitive 
//inicio analisis lexico
%%
"imprimir"      return 'RESPRINT';
";"             return 'PTCOMA';
"("             return 'PARABRE';
")"             return 'PARCIERRA';
"+"             return 'MAS';
"-"             return 'MENOS';
"/"             return 'DIVI';
"*"             return 'POR';
[ \r\t]+ { }
\n {}
\"[^\"]*\"             { yytext=yytext.substr(1,yyleng-2); return 'CADENA'; }
[0-9]+\b                return 'ENTERO';
<<EOF>>                 return 'EOF';
.                       return 'INVALID'

/*
imprimir ( "t123!@#3345exto" ) ;
imprimir(34);
imprimir(3.5);
*/

/lex
//Precedencia
%left 'POR' 'DIVI'
%left 'MAS' 'MENOS'


%start INIT
//Inicio
//Definicion de gramatica
%%

INIT: INSTRUCCIONES EOF     {return $1;}
;

INSTRUCCIONES : INSTRUCCIONES INSTRUCCION {$1.push($2); $$=$1;}
              | INSTRUCCION               {$$=[$1];}
;

INSTRUCCION : IMPRIMIR              {$$=$1;}
            | INVALID               {inicio.listaErrores.push(new errores.default('ERROR LEXICO',$1,@1.first_line,@1.first_column));}
            | error  PTCOMA         {inicio.listaErrores.push(new errores.default('ERROR SINTACTICO',"Se esperaba token",@1.first_line,@1.first_column));}
;

IMPRIMIR : RESPRINT PARABRE EXPRESION PARCIERRA PTCOMA {$$=new impresion.default($3,@1.first_line,@1.first_column)}
;

EXPRESION : EXPRESION MAS EXPRESION {}
          | EXPRESION MENOS EXPRESION {}
          | ENTERO {$$= new nativo.default((new Tipo.default(Tipo.tipoDato.ENTERO),$1, @1.first_line,@1.first_column));}
          | CADENA {$$= new nativo.default(new Tipo.default(Tipo.tipoDato.CADENA),$1,@1.first_line,@1.first_column);}
;