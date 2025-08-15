var Nome, Email, Senha, ConfSenha, Idade, DataNascimento, Telefone, Estado, generoSelecionado, Genero, Interesses, Mensagem, Foto, Nivel, Cor; // criando variaveis
        
// window.alert ou alert : comando para alertar o usuário
// + ou , : comando de concatenação
// = : atribuição

function validar(){
//não permirtir que o usuário digite números ou caracteres especiais
document.getElementById("nome").addEventListener("input", function(){
    //aqui devo colocar a instrução que devo evitar
    this.value = this.value.replace(/[^a-zA-ZÀ-ÿ\s]/g, "");
});
}
function testar(){
    Nome = document.getElementById("nome").value;
    if(Nome == ""){
        alert("Campo NOME é OBRIGATÓRIO!");
        document.getElementById("nome").focus();
        document.getElementById("nome").style.borderColor = "red";
        return false;
    }
    //alert("Exibindo o que foi CAPTURADO do form: " + Nome);
    Email = document.getElementById("email").value;
    if(Email == ""){
        alert("Campo E-MAIL é OBRIGATÓRIO!");
        document.getElementById("email").focus();
        document.getElementById("email").style.borderColor = "red";
        return false;
    }
    //alert("Exibindo o que foi CAPTURADO do form: " + Email);
    Senha = document.getElementById("senha").value;
    if(Senha == ""){
        alert("Campo SENHA é OBRIGATÓRIO!");
        document.getElementById("senha").focus();
        document.getElementById("senha").style.borderColor = "red";
        return false;
    }
    //alert("Exibindo o que foi CAPTURADO do form: " + Senha);
    ConfSenha = document.getElementById("confirmar-senha").value;
    if(ConfSenha == ""){
        alert("Campo CONFIRMAR SENHA é OBRIGATÓRIO!");
        document.getElementById("confirmar-senha").focus();
        document.getElementById("confirmar-senha").style.borderColor = "red";
        return false;
    }
    //Verificar se as senhas conferem
    if(Senha != ConfSenha){
        alert("As senhas NÃO CONFEREM!");
        document.getElementById("confirmar-senha").focus();
        document.getElementById("confirmar-senha").style.borderColor = "red";
        return false;
    }
    //alert("Exibindo o que foi CAPTURADO do form: " + ConfSenha);
    Idade = document.getElementById("idade").value;
    if(Idade == ""){
        alert("Campo IDADE é OBRIGATÓRIO!");
        document.getElementById("idade").focus();
        document.getElementById("idade").style.borderColor = "red";
        return false;
    }
    //idade não pode ter números negativos
    if(Idade<0){
        alert("Idade negativa NÃO PERMITIDA");
        document.getElementById("idade").focus();
        document.getElementById("idade").style.borderColor = "red";
        return false;
    }
    //alert("Exibindo o que foi CAPTURADO do form: " + Idade);
    DataNascimento = document.getElementById("data-nascimento").value;
    if(DataNascimento == ""){
        alert("Campo DATA DE NASCIMENTO é OBRIGATÓRIO!");
        document.getElementById("data-nascimento").focus();
        document.getElementById("data-nascimento").style.borderColor = "red";
        return false
    }
    //alert("Exibindo o que foi CAPTURADO do form: " + DataNacimento);
    Telefone = document.getElementById("telefone").value;
    if(Telefone == ""){
        alert("Campo TELEFONE é OBRIGATÓRIO!");
        document.getElementById("telefone").focus();
        document.getElementById("telefone").style.borderColor = "red";
        return false;
    }
    //alert("Exibindo o que foi CAPTURADO do form: " + Telefone);
    Estado = document.getElementById("estado").value;
    if(Estado == ""){
        alert("Campo ESTADO é OBRIGATÓRIO!");
        document.getElementById("estado").focus();
        document.getElementById("estado").style.borderColor = "red";
        return false;
    }
    //alert("Exibindo o que foi CAPTURADO do form: " + Estado);
    //Genero = document.querySelector('input[name="genero"]:checked').value;
    generoSelecionado = document.querySelector('input[name="genero"]:checked');
    if(generoSelecionado){
        Genero = generoSelecionado;
    }else{
        Genero = "";
    }
    if(Genero == ""){
        alert("Campo GENERO é OBRIGATÓRIO!");
        document.getElementById("genero").focus();
        document.getElementById("genero").style.borderColor = "red";
        return false;
    }
    //alert("Exibindo o que foi CAPTURADO do form: " + Genero);
    //Interesses = [...document.querySelectorAll('input[name="interesses"]:checked')].map(marcados => marcados.value);
    if(Interesses.length === 0){
        alert("Campo INTERESSES é OBRIGATÓRIO!");
        document.getElementById("interesses").focus();
        document.getElementById("interesses").style.borderColor = "red";
        return false;
    }
    //alert("Exibindo o que foi CAPTURADO do form: " + Interesses);
    Mensagem = document.getElementById("mensagem").value;
    if(Mensagem == ""){
        alert("Campo MENSAGEM é OBRIGATÓRIO!");
        document.getElementById("mensagem").focus();
        document.getElementById("mensagem").style.borderColor = "red";
        return false;
    }
    //alert("Exibindo o que foi CAPTURADO do form: " + Mensagem);
    Foto = document.getElementById("foto").value;
    if(Foto == ""){
        alert("Campo FOTO é OBRIGATÓRIO!");
        document.getElementById("foto").focus();
        document.getElementById("foto").style.borderColor = "red";
        return false;
    }
    //alert("Exibindo o que foi CAPTURADO do form: " + Foto);
    Nivel = document.getElementById("satisfacao").value;
    //alert("Exibindo o que foi CAPTURADO do form: " + Nivel);
    Cor = document.getElementById("cor-favorita").value;
    //alert("Exibindo o que foi CAPTURADO do form: " + Cor);
    
    return false;
    }

// onsubmit: acionar a função quando o usuário enviar o form
