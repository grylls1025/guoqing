/**
 * Created by 禹轩1025 on 2016/9/21.
 */
$(document).ready(function(){

    // $('#dpan').rotate(30);
    var t;
    $('#xpan').click(function(){

        var a=[];
        for(var j=0;j<52;j++){
            if(j<10){
                a[j]=0;             //概率10/52,定制礼品
            }
            else if(j<20){
                a[j]=1;             //概率10/52,8.5折优惠码
            }
            else if(j<30){
                a[j]=2;             //概率10/52,7天会员
            }
            else if(j<50){
                a[j]=3;              //概率20/52,不要灰心
            }
            else if(j==50){
                a[j]=4;             //概率1/52,100元红包
            }
            else if(j==51){
                a[j]=5;              //概率1/52,5折优惠码
            }
        }
        var tt=Math.floor(Math.random()*52);
        t=a[tt];
        // alert(m);
        var tang=t*60+360*3;

            // alert(Math.random()*10);
        var rotation = function (){
            $('#dpan').rotate({
                angle: 0,
                animateTo: tang,
                duration: 5000,
                callback: aler
            });
        }
        rotation();
    });
    function aler(){

        switch(t)
        {
        case 0:
            alert('恭喜！定制礼品');
            break;
        case 1:
            alert('恭喜！8.5折优惠码');
            break;
        case 2:
            alert('恭喜！7天会员');
            break;
        case 3:
            alert('不要灰心');
            break;
        case 4:
            alert('恭喜！100元红包');
            break;
        case 5:
            alert('恭喜！5折优惠码');
            break;
        default:
            alert('恭喜！定制礼品');
        }
    }
    $('#Map').click(function(){
       alert('what are you 弄啥咧！？');
    });
    $('#s').click(function(){
        alert('what are you 弄啥咧！？');
    });


});