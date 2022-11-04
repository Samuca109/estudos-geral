import './App.css';
/**
 * Aqui em cima serve apenas para importar coisas
 * {} dentro de chaves se faz funçoes diretas de javascript e todas as estrutras tambem diretas
 * pode criar funçoes 
 * Sempre se altera o jsx dentro do app() dentro da funçao
 * Aqui eu altero o meu JSX e a div com className app é uma das minha conexoes
 * Usar muito o return 
 * No jsx se chama as situaçoes e nao se cria dentro delas,ou seja,cria em outros lugares e depois so as chama dentro do jsx
 */
function App() {

  const name = 'samuel'
  const novoNome = name.toUpperCase()

  function soma(a, b){
    return a + b
  }


  return (
    <div className="App">
     <h1>Primeiro projeto </h1>
     <p>Seja bem vindo {novoNome}</p>
     <p>Multiplicação: {2*12}</p>
     <p>Soma: {soma(10,20)}</p>
    </div>
  );
}

export default App;
