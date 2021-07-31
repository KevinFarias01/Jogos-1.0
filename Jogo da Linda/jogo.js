const jog1= 'Linda'
const jog2= 'Nego'
var vez= jog1;
var gameover= false;

atualizaMostrador();
inicializarEspacos();


function atualizaMostrador(){
    if (gameover) {return;}

    if (vez==jog1) {
        var jogador= document.querySelectorAll ("div#mostrador img") [0];
        jogador.setAttribute("src", "img/2.png");
    } else{
        var jogador= document.querySelectorAll ("div#mostrador img") [0];
        jogador.setAttribute("src", "img/1.png");
    }
}

function inicializarEspacos(){
    var espacos= document.getElementsByClassName("espaco");

    for (var i=0; i< espacos.length; i++){
        espacos[i].addEventListener ("click", function(){
            if (gameover) {return;}

            if (this.getElementsByTagName('img').length==0){
                if (vez==jog1){
                    
                    this.innerHTML="<img src='img/2.png'>";
                    this.setAttribute ("jogada", jog1);
                    vez=jog2;
                }else{ this.innerHTML="<img src='img/1.png'>";
                this.setAttribute ("jogada", jog2);
                    vez=jog1;
                }
                atualizaMostrador();
                verificarVencedor();
            }
        }
        
        
        );
    }
}

async function verificarVencedor(){
    var a1= document.getElementById ("a1").getAttribute("jogada");
    var a2= document.getElementById ("a2").getAttribute("jogada");
    var a3= document.getElementById ("a3").getAttribute("jogada");

    var b1= document.getElementById ("b1").getAttribute("jogada");
    var b2= document.getElementById ("b2").getAttribute("jogada");
    var b3= document.getElementById ("b3").getAttribute("jogada");

    var c1= document.getElementById ("c1").getAttribute("jogada");
    var c2= document.getElementById ("c2").getAttribute("jogada");
    var c3= document.getElementById ("c3").getAttribute("jogada");


    var vencedor="";


    if ((a1==b1 && a1==c1 && a1!="")|| (a1==a2 && a1==a3 && a1!="") || (a1==b2 && a1==c3 && a1!="" )){
        vencedor=a1;
    } else if ((b2==b1 && b2==b3 && b2!="") || (b2==a2 && b2==c2 && b2!="") || (b2==a3 && b2==c1 && b2!="" ) ){
        vencedor=b2;
    } else if  ( ((c3==c2 &&c3==c1) || (c3==a3 && c3==b3))  && c3!="") //opção para colocar todos !="" juntos
        {vencedor=c3;
        }
    if (vencedor!= "") {
        gameover = true;


        await sleep(70);

        alert ("O ganhador foi '"+vencedor+'"');
    } 
    
    if (a1&&a2&&a3&&b1&&b2&&b3&&c1&&c2&&c3!="")
        {   
            await sleep(70);
            alert ("Deu Velha!")}

    //if (gameover=true)
}

function sleep(ms){
    return new Promise (resolve=> setTimeout (resolve,ms));       
}