var myList = [];
var userlist = [];
let count = 0;

let btn1 = document.getElementById("btn1");
let btn2 = document.getElementById("btn2");
let btn3 = document.getElementById("btn3");
let btn4 = document.getElementById("btn4");
let gamerestart=document.getElementById("gamerestart");
let level=document.getElementById("level");
btn1.addEventListener("click", userclick);
btn2.addEventListener("click", userclick);
btn3.addEventListener("click", userclick);
btn4.addEventListener("click", userclick);

gamerestart.addEventListener("click",function(event){
    restartgame();
    main();

});

function userclick(event) {

    if (count <= myList.length) {
        count++;
        let btn_clicked = event.target;
        console.log(btn_clicked.innerText);
        userlist.push(btn_clicked.innerText);
        if (comparisonlist() == 1) 
        {
            if (count == myList.length) 
            {
                main();

            }

        }
        else{
            restartgame();

        }


    }



}
function restartgame()
{
    alert("Game Ended Janab")
    console.log("Game Ended:::::");
    myList.splice(0);
}
function comparisonlist() {
    for (let i = 0; i < userlist.length; i++) {
        if (userlist[i] != myList[i]) {
            return 0;
        }
    }
    return 1;

}

function random_generate() {
    let random = Math.floor((Math.random() * 4) + 1);
    console.log("New Number:" + random);
    return random;
}

function glownextButton(btn) {
    if(btn==1)
    {
        btn1.classList.add("btngame2");
        
        setTimeout(function() {
            btn1.classList.remove("btngame2");
          }, 1000);
    }
    else if(btn==2)
    {
        btn2.classList.add("btngame2");
        
        setTimeout(function() {
            btn2.classList.remove("btngame2");
          }, 1000);
    }
    else if(btn==3)
    {
        btn3.classList.add("btngame2");
        
        setTimeout(function() {
            btn3.classList.remove("btngame2");
          }, 1000);
    }
    else if(btn==4)
    {
        btn4.classList.add("btngame2");
        
        setTimeout(function() {
            btn4.classList.remove("btngame2");
          }, 1000);
    }
    

}

function main() {
    console.log("Level Up t0::"+myList.length);
    
    level.innerText="Level Up to::"+myList.length;
    userlist.splice(0);
    count = 0;
    let random = random_generate();
    glownextButton(random);
    myList.push(random);

}
main();