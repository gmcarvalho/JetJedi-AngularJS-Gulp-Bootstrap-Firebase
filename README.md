# Projeto-AngularJS-usando-Gulp

Instalar o node

git clone https://github.com/gmcarvalho/JetJedi-AngularJS-Gulp-Bootstrap-Firebase.git

npm i

npm run dev

Observações sobre o projeto, apenas a nível de conhecimento.

No package.json criado coloquei as dependências fixas:

"devDependencies": {

    "admin-lte": "2.3.11",
    "angular": "1.6.6",
    "angular-animate": "1.6.6",
    "angular-toastr": "2.1.1",
    "angular-ui-router": "1.0.3",
    "babel-core": "6.26.0",
    "babel-preset-env": "1.6.0",
    "font-awesome": "4.7.0",
    "gulp": "3.9.1",
    "gulp-babel": "7.0.0",
    "gulp-concat": "2.6.1",
    "gulp-htmlmin": "3.0.0",
    "gulp-uglify": "3.0.0",
    "gulp-uglifycss": "1.0.8",
    "gulp-util": "3.0.8",
    "gulp-watch": "4.3.11",
    "gulp-webserver": "0.9.1",
    "run-sequence": "2.2.0"
	
 }
 
 Desse modo, quando rodar o npm i isso baixará todas as dependência para seu node_modules. Não se preocupe que isso é automárico, assim que der o npm install todas as dependências serão instaladas para você.
 
 Nos scripts acrescentei o dev e production:
 
 "scripts": {
 
    "test": "echo \"Error: no test specified\" && exit 1",
    "dev": "gulp",
    "production": "gulp --production"
    
  }
  
  A diferenca entre os dois modos de rodar é apenas o server, o production ignora o server, e roda apenas a aplicação com suas dependências.
  
  
  
  
  Após fazer todo o mapeamento do Gulp, é só rodar o projeto usando o 'npm run dev'
