let string = ""
let buttons = document.querySelectorAll('.button');
Array.from(buttons).forEach((button)=>{
  button.addEventListener('click', function(ele){
    if(ele.target.innerHTML === "="){
      string = eval(string);
      document.querySelector('input').value = string;
    }else if(ele.target.innerHTML == 'RESET'){
      string = "";
      document.querySelector('input').value = string;
    }else{
      console.log(ele.target.innerHTML);
      string = string+ele.target.innerHTML;
      document.querySelector('input').value = string;
    }
  })
})