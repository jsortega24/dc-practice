function addnumbers(a,b){
    let c = a + b;  
    console.log(c);
}

function simplecalculator(a,b,o){
    if(o =='+'){
        let c = a+b;
        console.log(c);
    }else if(o == '-'){
        let c = a - b;
        console.log(c);
    }else if (o == "*"){
        let c = a*b;
        console.log(c);
    }else if (o == '/'){
        let c = a/b;
        console.log(c);
    }else {
        console.log("Dont know what you are doing");
    }
}

//addnumbers (45,25);
//addnumbers (10,15);

simplecalculator(4,5,"+");
simplecalculator(4,5,'-');
simplecalculator(4,5,'*');
simplecalculator(4,5,'/');
simplecalculator(4,5,'$');