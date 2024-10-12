function play() {
    var tn1 = window.document.getElementById('txtn1');
    var res = window.document.getElementById('res');
    if(tn1.value == 'off'){
        res.innerHTML ='<a href="https://youtu.be/6NGayWHlG6o?si=JmwxiA7wPoYwEqkc" target="_blank" class="boxi">play</a>'
        res.style.background='blue'
    }else{
        res.innerHTML ='errado'
        res.style.background='red'
    }
}