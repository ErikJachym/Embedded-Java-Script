//declare samecolor() here
function samecolor(){
  const doc= document;
  let divs= doc.querySelectorAll("#samecolor div")
for(var i=0;i<divs.length;i++){
  div[i].style.backgroundColor= "ff0000"
  let temp =Math.random();
  div[i].style.backgroundColor= temp
}
}
//declare diffcolor() here
function diffcolor(){
  const doc= document;
  let divs= doc.querySelectorAll("#diffcolor > div")
for(var i=0;i<divs.length;i++){
  if (i % 2 == 0){
    divs[i].backgroundColor = "#ff0000"
  }
  else {
  divs[i].backgroundColor = "#00ffff"
}

  }
}
