    const randomcolor=function(){
        const hex="0123456789ABCDEF";
        let color="#";

        for(let i=0;i<6;i++){
            color+=hex[Math.floor(Math.random()*16)];
        }
        return color;
    }

    let intervalID=null;

    document.querySelector('.start').addEventListener('click',function(){
        if(!intervalID){
        intervalID=setInterval(function(){
            const body=document.querySelector('body')
            let color=randomcolor()
            body.style.backgroundColor=color;
        
        },1000)
    }
    })
    document.querySelector('.stop').addEventListener('click',function(){
        clearInterval(intervalID)
        intervalID=null;
    })
