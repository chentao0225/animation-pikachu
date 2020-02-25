!function(){
    var time=50;

    $('.tiaosu').on('click','button',function(e){
        let $btn=$(e.currentTarget)
        let speed=$btn.attr('date-speed')
        console.log(speed)
        $btn.addClass('active')
        .siblings('.active').removeClass('active')
        switch(speed){
            case 'mansu':
                time=100
                break
            case 'zhongsu':
                time=50
                break
            case 'kuaisu':
                time=10
                break    
        }
    })
    function writeCode(prefix,code,fn){
        let con=document.querySelector('#code')
        let sty=document.querySelector('#styleTag')
        let n=0;
        setTimeout(function run(){
            n+=1;
            con.innerHTML=code.slice(0,n)
            sty.innerHTML=code.slice(0,n)
            con.scrollTop=con.scrollHeight
            if(n<code.length){
                setTimeout(run,time)
            }else{
                fn && fn.call()
            }
        },time)
    }
    let code=`
/*首先，准备皮卡丘的肤色*/
.preview{
    height: 100%;
    display: flex;
    justify-content:center;
    align-items: center;
    background: #FFE600;
}
.content{
    width: 100%;
    height:235px;
    position: relative;
    }
/*接下来，画皮卡丘的鼻子*/
.nose{
    border-style:solid;
    border-color: black transparent transparent;
    border-width: 12px 12px;
    border-radius:50%;
    position: absolute;
    left:50%;
    top:46px;
    margin-left: -12px;
}
/*然后画皮卡丘的眼睛*/
.eve{
    width: 64px;
    height: 64px;
    background: #2E2E2E;
    border: 3px solid black;
    border-radius: 50%;
    position: absolute;
    top:6px;
}
/*画皮卡丘的眼睛里面的珠子*/
.eve::before{
    width: 30px;
    height:30px;
    content: '';
    display: block;
    background: white;
    border-radius: 50%;
    position: absolute;
    left:6px;
    border: 2px solid black;
}
/*画皮卡丘的左眼*/
.eve.left{
    right: 50%;
    margin-right:80px; 
}
/*画皮卡丘的右眼*/
.eve.right{
    left: 50%;
    margin-left:80px; 
}
/*然后画皮卡丘的脸*/
.blush{
    width:80px;
    height:80px;
    background: #FF0000;
    border-radius:50%;
    border: 3px solid black;
    position: absolute; 
    top:100px;
    margin-left:-40px; 
}
/*把皮卡丘的脸放到正确位置*/
.blush.left{
    right: 50%;
    margin-right:100px;
}
.blush.right{
    left: 50%;
    margin-left: 100px;
}
/*然后画皮卡丘的上嘴唇*/
.upperLip{
    width: 70px;
    height: 24px;
    border: 3px solid black;
    position: absolute;
    top:70px;
    background: #FFE600;
}
/*放到正确的位置*/
.upperLip.left{
    right: 50%;
    border-bottom-left-radius: 36px 24px;
    border-top: none;
    border-right: none;
    transform: rotate(-16deg);
}
.upperLip.right{
    left:50%;
    border-bottom-right-radius: 36px 24px;
    border-top: none;
    border-left: none;
    transform: rotate(16deg);
}
/*然后画皮卡丘的下嘴唇*/
.lowerLip-wrapper{
    width: 200px;
    height: 156px;
    position: absolute;
    bottom: 0;
    left: 50%;
    margin-left:-100px;
    overflow: hidden;
}
.lowerLip{
    width: 200px;
    height:2000px;
    background: #9B000A;
    border: 3px solid black;
    border-radius: 200px/2000px; 
    position: absolute;
    bottom: 0;
    overflow: hidden;
}
/*最后画皮卡丘的舌头*/
.lowerLip::before{
    content: "";
    width:120px;
    height: 120px;
    background: #FF485F;
    border-radius:50%; 
    position: absolute;
    bottom: -5px;
    left: 50%;
    margin-left:-60px;
}
/*好了，画完了*/
    `
    writeCode('',code)
}.call()