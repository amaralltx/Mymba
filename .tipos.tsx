/* 

Tipos Primitivos:
string: sequência de caracteres, ex: "texto".
number: números, inteiros ou decimais, ex: 123, 3.14.
boolean: valores lógicos true ou false.
bigint: números inteiros de precisão arbitrária.
symbol: valores únicos usados como chave.
null: representa ausência de valor.
undefined: variável declarada, mas sem valor.

Tipos Objetos:
object: representa qualquer valor que não seja primitivo.
Arrays: por exemplo, number[] (array de números), string[] (array de strings).
Tuplas (tuple): arrays com tamanho e tipos fixos, ex: [string, number].
Tipos Especiais:
any: permite qualquer tipo, deve ser evitado para manter segurança de tipos.
unknown: similar ao any, porém mais seguro pois exige verificação de tipo antes do uso.
never: indica que uma função nunca retorna (ex: lança erro ou loop infinito).
void: usado para funções que não retornam valor.

*/

let nome: string = "Lucas";
let idade: number = 24;
let isAtivo: boolean = true;
let valores: number[] = [1, 2, 3];
let tupla: [string, number] = [nome, idade];
