const player=document.getElementById('player');
const ground=document.getElementById('ground');

let dx=0;
let dy=10;   
let accelaration=0;
let index=0;

    const draw=()=>{
        if(dx>0 || dx<0){
            player.style.backgroundImage=`url('../img/Walk (${index++}).png')`;
            if(index>9) index=0;
        }else{
            player.style.backgroundImage=`url('../img/Idle (${index++}).png')`;
            if(index>9) index=0;
        }
        if(dy>0 || dy<0){
            player.style.backgroundImage=`url('../img/Jump (${index++}).png')`;
            if(index>9) index=0;
        }
        requestAnimationFrame(draw);
    }
    const animate=()=>{    
        if((player.offsetLeft+player.offsetWidth)>innerWidth){
            dx=0;
            player.style.left=`${innerWidth-player.offsetWidth}px`;
        }else if(player.offsetLeft<0){
            dx=0;
            player.style.left=`0`;
        }
        dy +=accelaration;
        // console.log(dy);
        if((player.offsetTop+player.offsetHeight) > ground.offsetTop){
            dy=0;
            player.style.top=`${ground.offsetTop-player.offsetHeight}px`;
            accelaration=0;
        }
        
        player.style.top=`${player.offsetTop+dy}px`;
        player.style.left=`${player.offsetLeft+dx}px`;
        requestAnimationFrame(animate);
    }

addEventListener('keydown',(eventData)=>{
    if(eventData.key==='ArrowRight'){
        index=0;
        player.classList.remove('turn');
        dx=10;
    }else if(eventData.key==='ArrowLeft'){
        index=0;
        player.classList.add('turn');
        dx=-10;
    }
})
addEventListener('keyup',(eventData)=>{
    if(eventData.key==='ArrowRight'){

        dx=0;
    }else if(eventData.key==='ArrowLeft'){
        dx=0;
    }
})
addEventListener('keydown',(eventData)=>{
    if(eventData.key==='ArrowUp'){
        index=0;
        dy=-8;
        accelaration=0.1;
    }
});
requestAnimationFrame(draw);
requestAnimationFrame(animate);

// let j=0;
// let t1=0;
// let interval=2;
// function repaint(timestamp){//this indicate the time between starting and the time when executing the code
//     if(!t1) t1=timestamp;
//     let diff=timestamp-t1;
//     if(diff>=(interval* 1000)){
//         t1=timestamp;
//         console.log('painted')
//     }
//     requestAnimationFrame(repaint);
  
// }
// requestAnimationFrame(repaint);