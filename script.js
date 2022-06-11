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
  }, 150)
}


generatedWriting(NAME, randomString(ALPHABET), writing)


function change() {
  const aboutme = document.getElementById("aboutme")
  const footer = document.getElementById("footer")

  const en = {
    aboutme: "about me<br>\
  hello, nice to meet you i'm nursyah a software engineering student from indonesia. i like learning something\
  new, i write code with js, java, cpp, python, and more. do you want to know what i have build check my\
  projects in below, or visit my github. my hobby is <i class=\"fa-solid fa-music\"></i> listen music and <i\
      class=\"fa-solid fa-code\"></i>\
  write code.",
    footer: "build with <i class=\"fa-solid fa-heart\"></i>"
  }
  const id = {
    aboutme: "tentang ku<br>\
    halo, senang bertemu denganmu, perkenalkan namaku nursyah, aku seorang mahasiswa rekayasa perangkat lunak asal indonesia. aku senang mempelajari hal baru, aku menulis kode dengan js, java, cpp, python, dan lebih banyak lagi. ingin tau apa yang sudah kubuat, cek dibawah untuk melihat projectku atau kunjungi githubku. hobby ku adalah <i class=\"fa-solid fa-music\"></i> mendengarkan musik dan <i\
        class=\"fa-solid fa-code\"></i> menulis kode.",
    footer: "dibuat dengan <i class=\"fa-solid fa-heart\"></i>"
  }

  if(lang.innerText == "en"){
    lang.innerHTML = "id"
    aboutme.innerHTML = id["aboutme"]
    footer.innerHTML = id["footer"]
  }else{
    lang.innerHTML = "en"
    aboutme.innerHTML = en["aboutme"]
    footer.innerHTML = en["footer"]
  }
}

