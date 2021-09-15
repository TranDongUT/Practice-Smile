var funClick = document.querySelector('.fun-btn');
var normalClick = document.querySelector('.normal-btn');
var sadClick = document.querySelector('.sad-btn');

var face = document.querySelector('.face');
var eyes = document.querySelectorAll('.eye');
var mouth = document.querySelector('.mouth');

// Normal face;
var tempFace = face.style;
var tempEyes = eyes.style;
var tempMouth = mouth.style;


funClick.onclick = function(e){
    face.style = tempFace;
    mouth.style = tempMouth;
    eyes[0].style = tempEyes;
    eyes[1].style = tempEyes;
}

normalClick.onclick = function(e){
// change face
    Object.assign(face.style,{
        backgroundColor: '#EED16B',
        border: '15px solid #DCAE54'
    });
 // change eyes
    for(var i =0 ; i<eyes.length; i++){
        eyes[i].style.backgroundColor = '#DCAE54';
    }
// change mouth
    mouth.style.backgroundColor = '#DCAE54';
    mouth.style.borderRadius = '20px';
}


sadClick.addEventListener('click',function(e){
    Object.assign(face.style,{
        backgroundColor: '#EE9295',
        border: '15px solid #E27379'
    });
});

sadClick.addEventListener('click',function(){
    for(var i =0 ; i<eyes.length; i++){
        eyes[i].style.backgroundColor = '#E27379';
    }
});

sadClick.addEventListener('click', function(e){ 
    Object.assign(mouth.style,{
        backgroundColor: '#E27379',
        borderBottomLeftRadius: '0',
        borderBottomRightRadius: '0',
        borderTopLeftRadius: '50% 100%',
        borderTopRightRadius: '50% 100%'
    });
});



