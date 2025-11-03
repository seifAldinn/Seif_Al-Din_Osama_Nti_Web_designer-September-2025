

let li = document.querySelectorAll('li');
change = function() {

    li.forEach(item => {
        item.addEventListener('click', function (e) {
          
          

        
            li.forEach(i => i.classList.remove('color'));

            this.classList.add('color');
        });
    });
}



