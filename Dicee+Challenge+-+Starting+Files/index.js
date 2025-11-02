var randomNumber1 =Math.ceil(Math.random()*6);
document.firstElementChild.children[1].children[0].children[1].children[1].setAttribute("src","./images/dice"+randomNumber1+".png");
var randomNumber2 =Math.ceil(Math.random()*6);
document.firstElementChild.children[1].children[0].children[2].children[1].setAttribute("src","./images/dice"+randomNumber2+".png");
if (randomNumber1>randomNumber2) {
    document.firstElementChild.children[1].children[0].children[0].textContent = "Player1 wins";    
} else if (randomNumber1< randomNumber2) {
    document.firstElementChild.children[1].children[0].children[0].textContent = "Player2 wins";
} else {
    document.firstElementChild.children[1].children[0].children[0].textContent = "Its Draw";
}
