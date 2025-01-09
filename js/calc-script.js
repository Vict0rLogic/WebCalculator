    function insert(num){
      var number=document.getElementById('calculator_visor').innerHTML;
      document.getElementById('calculator_visor').innerHTML=number + num;
    }
    function clean(){
      document.getElementById('calculator_visor').innerHTML= "";
    }
    function remove(){
        var calculator_visor =document.getElementById('calculator_visor').innerHTML;
        document.getElementById('calculator_visor').innerHTML=calculator_visor.substring(0,calculator_visor.length -1);
    }
    function calcule(){
      var calculator_visor =document.getElementById('calculator_visor').innerHTML;
      if(calculator_visor)
      {
        document.getElementById('calculator_visor').innerHTML=eval(calculator_visor)
      }
    }
