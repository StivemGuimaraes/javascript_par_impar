exibirTipo(5);
function exibirTipo(limite) {
    for (let i = 0; i <= limite; i++) {
        if (i % 2 == 0) {
            console.log(i,"par");
        }
        else if (i % 2 == 1){
            console.log(i,"impar");
        }
    }
}