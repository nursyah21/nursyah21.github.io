const ALPHABET = "abcdefghijklmnopqrstuvwxyz"
const NAME = "nursyah"
const writing = document.getElementById("writing")
const lang = document.getElementById("lang")


//generated random 
function randomString(word) {
  var i = j = 0, str = "", arr = [], arr1 = []
  for (var i = 0; i < word.length; i++)arr.push(word[i])


  for (var i = 0; i < word.length; i++) {
    del = arr.splice(Math.floor(Math.random() * 10) % arr.length, 1)
    arr1.push(del)
  }

  return arr1
}

// generated password
function generatedWriting(name, combination, w) {
  var i = j = 0, str = "";

  var x = setInterval(() => {
    str += combination[i]
    w.innerText = str;

    if (name[j] != combination[i]) {
      str = str.substring(0, str.length - 1)
      i++;
    }
    else if (name[j] == combination[i]) {
      i = 0;
      j++;
    }


    if (str.length == name.length && str[str.length - 1] == name[name.length - 1]) clearInterval(x)
  }, 50)
}

function generatedWriting2(name, combination, w){
  
  for(var i=0; i <name.length;i++){
    var temp = document.createElement("div")
    temp.innerText = combination[i]
    w.appendChild(temp);
  }
  
  for(var i=0; i < name.length; i++)
    generatedWriting2Helper(w.childNodes[i], name[i], randomString(combination));
    
}

function generatedWriting2Helper(c1, c2, combination){
  var i=0;
  var x = setInterval(()=>{
    c1.innerText = combination[i];
    if(c1.innerText == c2)clearInterval(x)
    i++;
    if (i > combination.length)i=0;
  }, 100)
}

generatedWriting2(NAME, randomString(ALPHABET), writing)
