var imagesName=[
    "dice1.png",
    "dice2.png",
    "dice3.png",
    "dice4.png",
    "dice5.png",
    "dice6.png"
];

var player=0;

var dom=document.querySelectorAll("#main_body")
console.log(dom);

var button=document.getElementsByClassName("btn");

button[0].addEventListener("click",main);

function generateRand(){
    var randNumber=Math.random()*10;
    randNumber=Math.floor(randNumber);
    randNumber%=6;
    return randNumber;
}

function main(){
    
    button[0].disabled=true;

    var randNum1=generateRand();
    var randNum2=generateRand();

    //creating two image elements 
    var div1=document.createElement("DIV");
    var div2=document.createElement("DIV");

    var img1=document.createElement("IMG");
    var img2=document.createElement("IMG");
    div1.setAttribute("class","col-sm-6");
    div2.setAttribute("class","col-sm-6");
    img1.setAttribute("src","images/"+imagesName[randNum1]);
    img2.setAttribute("src","images/"+imagesName[randNum2]);
    div1.appendChild(img1);
    div2.appendChild(img2);

   console.log(img1);


    //creating div element with class name row ,which will act as parent of img1 and img2
    var row=document.createElement("DIV");
    row.setAttribute("class","row");
    row.setAttribute("id","images");

    row.appendChild(div1);
    row.appendChild(div2);

   

    dom[0].insertBefore(row,dom[0].children[2]);

    var pal1=document.querySelector(".player1");
    pal1.textContent= "Player 1 Score is " + (randNum1+1);


    var pal2=document.querySelector(".player2");
    pal2.textContent= "Player 2 Score is " + (randNum2+1);

    if(randNum1>randNum2){
        document.querySelector(".player1").style.color="green";
        document.querySelector(".player2").style.color="black";
        document.querySelector(".Heading").textContent="🚩Player1 is the winner"
    }else if(randNum1<randNum2){
        document.querySelector(".player1").style.color="black";
        document.querySelector(".player2").style.color="green";


        document.querySelector(".Heading").textContent="Player2 is the winner🚩"
    }else{
        document.querySelector(".Heading").textContent="Its draw "

    }


    button[0].removeEventListener("click",main);

    button[0].setAttribute("value","Refresh Me:)");
    button[0].addEventListener("click",()=>{
        location.reload();
    });



    
    button[0].disabled=false;
}

