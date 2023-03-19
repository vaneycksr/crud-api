# crud-api
Creating API with nodejs

## criar o package.json
/backend$ npm init -y

## instalando dependências

/backend$ npm install express (framework que lida com requisições http)
/backend$ npm install mysql2
/backend$ npm install nodemon -D (util para não ficar tendo que parar o servidor sempre)
/backend$ npm install dotenv (facilita pegar informações do .env)

## manter código limpo e o mesmo estilo de código

/backend$ npx eslint --init

## executando servidor

/backend$ npm start (configurado no package.json o script start)

## executando servidor sem precisar ficar reiniciando

/backend$ npm run dev

## conectando-se com o MYSQL

1. baixar a imagem e executar em background

-- docker run --name mysql -e MYSQL_ROOT_PASSWORD=root -p 3306:3306 -d mysql

2. necessário criar o banco e a tabela no mysql na primeira vez

3. para não ter que criar o banco sempre, melhor fazer o dump de um já populado e criar uma imagem docker

> entrar no container do mysql ja populado
    # docker exec -it mysql bash
> dentro do container, realizar o dump
    # mysqldump -u <nome-usuario> -p <nome-do-banco> > dump.sql
> sair do container
> extrair o dump do container para uma pasta local
    $ docker cp nome_do_container:/caminho/do/arquivo/dump.sql /caminho/do/diretorio/local
> ter o Dockerfile o .env e o dump no mesmo diretorio e gerar a imagem:
    $ docker build -t <nome_da_imagem> .
> executando a nova imagem
    $ docker run -p 3306:3306 --name meu_mysql -e MYSQL_ROOT_PASSWORD=<senha> -e MYSQL_DATABASE=<banco_de_dados> -d nome_da_imagem


obs.: primeiro faz camada do model, depois o controller, por último cria a rota. Lembrete apenas para saber por onde começar a desenvolver