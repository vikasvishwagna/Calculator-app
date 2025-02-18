let string = ""
let buttons = document.querySelectorAll('.button');
Array.from(buttons).forEach((button)=>{
  button.addEventListener('click', function(ele){
    if(ele.target.innerHTML === "="){
      try{
        string = eval(string);
        document.querySelector('input').value = string;
      }catch(error){
        document.querySelector('input').value = 'wrong input';
        string="";
      }
      
    }else if(ele.target.innerHTML == 'RESET'){
      string = "";
      document.querySelector('input').value = string;
    }else if(ele.target.innerHTML == 'DEL'){
      string = string.slice(0,-1);
      document.querySelector('input').value = string;
    }
    else{
      console.log(ele.target.innerHTML);
      string = string+ele.target.innerHTML;
      document.querySelector('input').value = string;
    }
  })
})