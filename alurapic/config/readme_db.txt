Em windows, após instalar o MongoDB, executar a linha abaixo para adicioná-lo como serviço:
D:\mongodb\bin>mongod --dbpath=D:\mongodb --logpath=D:\mongodb\log.txt --install


Muito bem, precisamos trocar de banco. Vamos fazer isso logo para não corrermos o risco de estarmos gravando em outro banco:
use alurapic
Agora, vamos declarar nosso objeto:

var foto = { titulo: 'Leão', url : ''};
Queremos gravar esse objeto como documento aonde? No banco de dados alurapic. Ok, já estamos nele, tanto é verdade que se imprimirmos a variável implícita db, será impresso no console alurapic.

db // imprime no console o nome alurapic
Agora, para acessarmos qualquer coleção existente ou não (se não existir, ela é criada) usamos a variável db.NomeDaColecao e encadeamos uma chamada à função insert, que receberá como parâmetro o objeto que desejamos salvar:

db.fotos.insert(foto);
WriteResult({ "nInserted" : 1 })
Se tudo correr bem, o próprio mongo client lhe informará que um elemento foi incluído.


Lembre-se que toda a API do MongoDB para consulta ou alteração deve ser feita a partir de uma collection. É por iso que não funcionará se fizermos:
db.find();
O correto é:

db.fotos.find()
A função find retornará todos os documentos daquela collection. Mas e se quisermos retornar apenas o primeiro que ele encontrar? O mongo client possui uma outra API, a findOne:

db.fotos.findOne()
DICA: se quisermos fazer com que os documentos retornados pela função find sejam impressos formatadinhos, isto é, bonitinhos. Basta fazermos:

db.fotos.find().pretty()
Muito mais legível, não?



Neste treinamento, interagiremos com o MongoDB através do Mongoose e focaremos apenas naquelas consultas realizadas pelo projeto Alurapic. O MongoDB suporta a diferentes formas de consulta, tanto isso é verdade que merece um treinamento só para ele. Contudo, se você está empolgado com este treinamento não custa nada eu ensinar mais uns truques, certo?
Este é um exercício que você pode praticar com o seu mongo client, aliás, vou partir do pressuposto que você já está com ele aberto.

1 - Vamos criar duas fotos, mas como objetos ainda:

var foto1 = { titulo: 'Leão 1', url : ''}; 
var foto2 = { titulo: 'Leão 2', url : ''};
2 - Agora, vamos adicionar essas duas fotos na collection fotos:

db.fotos.insert(foto1);
db.fotos.insert(foto2);
3 - Já sabemos como buscar todas as fotos:

db.fotos.find();
4 - E se quisermos procurar o documento que contenha como título Leão 1? Usamos a mesma função findOne, porém passamos um critério:

db.fotos.findOne( {titulo: 'Leão 1'} );
Veja que o critério também é um objeto Javascript, que contém a propriedade que desejamos buscar e seu valor. Só buscaremos os documentos que tenham titulo exatamente igual a Leão 1.

5 - E se quisermos apagar um documento? Mesmo processo, só que usamos a função remove:

db.fotos.remove( { titulo: 'Leão 1' } )
6 - E se quisermos atualizar aquela foto que possui como título Leão 2, por exemplo, adicionar sua URL que está faltando? Primeiro, buscamos o documento que desejamos para em seguida guardá-lo em uma variável:

var fotoEncontrada = db.fotos.find( { titulo: 'Leão 2'} );
Podemos alterar agora a propriedade do documento, assim como alteramos propriedades de objetos Javascript:

fotoEncontrada.url = 'http://algum.endereco.que.nao.sei.com.br'
Porém, isso não é suficiente, precisamos substituir o documento no banco pelo novo documento:

db.fotos.update( { titulo: 'Leão 2' }, fotoEncontrada)
A função update recebe o critério de busca do documento e os dados do documento que desejamos atualizar.

Quando Neil Armstrong pisou na lua pela primeira vez ele disse: "Um pequeno passo para um homem, um gigantesco salto para a humanidade". Com esses primeiros passos no MongoDB temos chance de chegar longe, mas tudo tem um começo, certo?