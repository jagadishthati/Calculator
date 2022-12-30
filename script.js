   
    function insert(num){
        document.querySelector(".textview").value +=num
}
function equals(){
  let result = document.querySelector(".textview");
  let resultE1 = result.value;
  let y = eval(resultE1);
  document.querySelector(".textview").value =y
   
}
function clean(){
    document.querySelector(".textview").value=""
}
function back(){
    let result = document.querySelector(".textview");
    result.value = result.value.slice(0,-1);
}






