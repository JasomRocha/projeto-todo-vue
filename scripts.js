//Inicio a aplicação criando uma variavel
const todosApp = {
    //o atributo data retorna dados mas incia com um atributo todos vazio
    data(){
        return {
            todos: [],
            //objeto new todo recebe os dados enviados pelo html
            newTodo: {
                done: false //o atributo done quando modificado irá riscar a tarefa (ou remover o risco)
            }
        }
    },
    //os métodos são referentes a inserir uma nova tarefa (todo) na lista 
    methods: { 
        addTodo: function(){
            if(this.newTodo.text){
            this.todos.push(this.newTodo); //utilizo o metodo push para inserir um novo elemento no array, o novo elemento é um objeto 
            this.newTodo = {
                done: false //as novas tarefas começam sem o risco
                };
                localStorage.setItem("todos", JSON.stringify(this.todos)); // armazeno as informações no local storage
            }else{
                alert("Campo tarefa precisa ser preenchido"); // envio um alert se usuário tentar inserir uma tarefa em branco
            }
        }
    },
    created(){
        this.todos = localStorage.getItem("todos") ? JSON.parse(localStorage.getItem("todos")) : this.todos; //verifica se há algo no local storage
    },
    updated(){
        localStorage.setItem("todos", JSON.stringify(this.todos)); //atualiza o localstorage
    }
    
};

Vue.createApp(todosApp).mount('#app'); //cria a aplicação 