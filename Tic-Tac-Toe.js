
 let counter=0;
let Xdata=[];
let Odata=[];
let win_combo={1:"012",2:"345",3:"678",4:"036",5:"147",6:"258",7:"048",8:"246"};
$(document).ready(function(){
    $("#game").click(function(event){
      let target=event.target.innerHTML;
      let id=event.target.id;
      if(counter%2==0 && target.length==0 ){
        counter++;
        event.target.innerHTML="X";
        Xdata.push(id);
        if(Xdata.length==3){
          if(winner(Xdata)){
            setTimeout(function(){
              $("#win_msg").text("X WON THE GAME");
            },1000);
          }
        }else if(Xdata.length>3){

          let win=check_winner(sub_array(Xdata.sort()));

          if(win){
            setTimeout(function(){
              $("#win_msg").text("X WON THE GAME :)");
          },1000)
          }

        }


      }else if(counter%2!==0 && target.length==0){
        counter++;
        event.target.innerHTML="O";
        Odata.push(id);
        if(Odata.length==3){
          if(winner(Odata)){
            setTimeout(function(){
              $("#win_msg").text("O WON THE GAME :)");
            },1000)
          }

        }
        else if(Odata.length>3){

          let win=check_winner(sub_array(Odata.sort()));

          if(win){
            setTimeout(function(){
              $("#win_msg").text("O WON THE GAME ");
            },1000)
          }

        }
      }

    })
    function winner(arr){
     let data=arr.sort().join('');
    for(let prop in win_combo){

      if(win_combo[prop]==data){
        return true;
      }
    }
    }
    function sub_array(arr){
      let slice_Arr=[];
      slice_Arr.unshift(
        arr.slice(0,3),arr.slice(1),
        arr.slice(0,1).concat(arr.slice(2)),
        arr.slice(0,2).concat(arr.slice(3)));
      return slice_Arr;
    }
    function check_winner(arr){
      for(let i=0;i<arr.length;i++){
        for(var prop in win_combo){
          if(arr[i].join('')===win_combo[prop]){
            return true;
          }
        }

      }

    }

    $("#ask").click(function(){
      window.location.reload(true);
    })
    

  })
  

