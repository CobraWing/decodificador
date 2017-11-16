Decodificador Cobra Wing
================

O [Canonn Decryptor] é uma ferramenta para descriptografar os mistérios do universo [Elite: Dangerous] Atualmente, os
seguintes conversores são suportados:

* [Atbash cipher]
* [Caesar cipher] (Com quebra de rotação automática)
* [Keyword cipher] (Com quebra por palavras-chave automáticas)
* [Morse code]
* [Number-to-ASCII]
* Reverse text
* [Roman numerals]
* [Vigenère cipher]


Montando
-----

Após a clonagem, o repositório execute `npm install` para baixar as dependências e compilar o projeto.
Obviamente [Node.js] é necessário para isso.


Desenvolvimento
-----------

É recomendado editar o projeto com [Visual Studio Code]. Depois de executar a `npm install` uma vez que você pode abrir
a raiz do projeto no IDE e, em seguida, pressione `Ctrl-Shift-B` para compilar o projeto e ativar compilar-em-salvar. Desde então
nas alterações do arquivo TypeScript são compiladas automaticamente para JavaScript.

Se você já possui um servidor web local que pode servir os arquivos do projeto, basta abrir o arquivo `index.html`
no seu navegador. Este arquivo de índice deve ser usado durante o desenvolvimento. Carga todos os arquivos JavaScript por meio de
[SystemJS] então nenhuma embalagem é necessária.

Se você não possui um servidor web local, execute `npm start` para atender o projeto em `http://localhost:8080/`


Testando
-------

Execute o `npm test` para verificar os arquivos TypeScript e CSS e para executar os testes de unidade.

No Visual Studio Code, você pode pressionar `F5` para executar os testes de unidade no depurador.


Desenvolvimento
----------

Para implantação, execute o pacote `npm run package` para agrupar todos os arquivos JavaScript em um único arquivo e copiar todos os arquivos
necessário para a implantação no diretório `dist`. Implante o conteúdo deste diretório para sua web
servidor.


Links
-----

* [Canonn Research Group](http://canonn.science/)


[Canonn Decryptor]: https://kayahr.github.io/canonn-decryptor/
[Elite: Dangerous]: https://www.elitedangerous.com/
[Atbash cipher]: https://en.wikipedia.org/wiki/Atbash
[Caesar cipher]: https://en.wikipedia.org/wiki/Caesar_cipher
[Keyword cipher]: https://en.wikipedia.org/wiki/Keyword_cipher
[Morse code]: https://en.wikipedia.org/wiki/Morse_code
[Number-to-ASCII]: https://en.wikipedia.org/wiki/ASCII
[Roman numerals]: https://en.wikipedia.org/wiki/Roman_numerals
[Vigenère cipher]: https://en.wikipedia.org/wiki/Vigenère_cipher
[Node.js]: https://nodejs.org/
[SystemJS]: https://github.com/systemjs/systemjs
[Visual Studio Code]: https://code.visualstudio.com/
