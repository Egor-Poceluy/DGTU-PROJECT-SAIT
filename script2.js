        var div1 = document.getElementById('card1');
        var div2 = document.getElementById('card2');
        var div3 = document.getElementById('card3');
        var div4 = document.getElementById('card4');
        var div5 = document.getElementById('del1');
        var div6 = document.getElementById('del2');
        var div7 = document.getElementById('del3');
        var div8 = document.getElementById('del4');
        
        div5.addEventListener('click', function() {
            div1.style.display = 'none';
        });
        div6.addEventListener('click', function() {
            div2.style.display = 'none';
        });
        div7.addEventListener('click', function() {
            div3.style.display = 'none';
        });
        div8.addEventListener('click', function() {
            div4.style.display = 'none';
        });