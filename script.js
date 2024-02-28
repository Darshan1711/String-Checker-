function btn(){

  let str1 =  document.getElementById("str1").value;
  let str2 = document.getElementById("str2").value;
  let str3 =  document.getElementById("str3").value;

    if (str1.startsWith(str2) && str1.endsWith(str3)){
        
        document.getElementById("s1").innerHTML = `The string starts with "${str2}" <br> &nbsp &nbsp and ends with "${str3}"!`;
    }
    else{
        document.getElementById("s1").innerHTML = `String is invalid!`;
    }

    console.log(str1,str2)
}