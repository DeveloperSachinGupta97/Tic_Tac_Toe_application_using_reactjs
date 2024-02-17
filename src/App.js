import {useState} from 'react';
import './App.css';
function App(){

    const [board,setBoard]=useState(Array(9).fill(''));
    const [move,setMove]=useState(true);
    
    const click=(index)=>{
        
        const copyState=[...board];
        if(copyState[index]!==""){
           return;
           }
        copyState[index]=move ? "X" :"0";
        setBoard(copyState);
        setMove(!move);
        
        const isWinner=checkWin(copyState);
        
        if(isWinner){
             alert("Player:"+isWinner+"is winner");
             copyState.fill('');
             setBoard(copyState);
           }
        
         if(checkDraw(copyState)){
             alert("Match draw");
             copyState.fill('');
             setBoard(copyState);
           }
        
    }
    
    const checkWin=(board)=>{
        
        const conditions=[
            [0,1,2] ,
            [3,4,5] , 
            [6,7,8] , 
            [0,3,6] , 
            [1,4,7] , 
            [2,5,8] , 
            [0,4,8] , 
            [2,4,6]  
            
        ];
        
        for(let logic of conditions){
            
            const [a,b,c]=logic;
            
            if(board[a]!=="" && board[a]===board[b] && board[a]===board[c]){
                
                return board[a];
               
               }
            
        }
        return false;
    }
    
    const checkDraw=(board)=>{
        let count=0;
        board.forEach(element=>{
           
            if(element!==''){
               count++;
               }
           
        })
        
        if(count>=9){
            
            return true;
           
           }
        else{
            return false;
        }
        
        
    }
    
    
  return (
    <div>
    <h1 align="center">TIC TOE TAC</h1>
      <h2 align="center">Player: {move ? "X":"0"}</h2>
      <table align="center">
      <tbody>
      <tr>
      <td onClick={()=>click(0)}>{board[0]}</td>
     <td onClick={()=>click(1)}>{board[1]}</td>
     <td onClick={()=>click(2)}>{board[2]}</td>
      </tr>
      <tr>
      <td onClick={()=>click(3)}>{board[3]}</td>
      <td onClick={()=>click(4)}>{board[4]}</td>
      <td onClick={()=>click(5)}>{board[5]}</td>
      </tr>
      <tr>
      <td onClick={()=>click(6)}>{board[6]}</td>
     <td onClick={()=>click(7)}>{board[7]}</td>
      <td onClick={()=>click(8)}>{board[8]}</td>
      </tr>
      </tbody>
      </table>
    </div>
    
  )
}
export default App;

