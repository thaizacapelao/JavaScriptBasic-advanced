let nome = "Thaiza";

for(let i = 0; i < 10; i = i + 1) {

    if(i == 3){
        nome = "Thaiza";     
    }
    if(i == 5 && nome == "Thaiza"){
        console.log("O nome é Thaiza, pode parar");
        break;
    }
    console.log(i);
}