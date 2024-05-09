$(document).ready(function () {

    /*Funciones: changeColor y resetColor
        Utilidad: Cambia el color de la letra al pasar el mouse y lo reestablece
        al quitar el mouse de encima
        */
    const letters = document.getElementsByClassName("letterColor");

    var changeColor = function () {
        $(this).addClass('hover');
        console.log(this);
        console.log('hice hover');
    };
    var resetColor = function () {
        $(this).removeClass('hover');
    };
    for (var i = 0; i < letters.length; i++) {
        letters[i].addEventListener('mouseover', changeColor, false);
        letters[i].addEventListener('mouseout', resetColor, false);
    }
    /*Funciones: move y stringHandle
        Utilidad: Pone letras flotantes en un div
        */
    const skills = "HTML5 CSS3 JavaScript JQuery WordPress PHP Bootstrap WebDeveloper";

    var words = {};
    var words_attr = [];
    string_handle(skills);

    var canvas = document.getElementById('wordsSkills');
    var container = document.getElementById('wordSkillsContainer');
    var containerStyle = window.getComputedStyle(container);
    var widthString = containerStyle.width;
    var heightString = containerStyle.height;
    var regex = /(\d+)/g;
    canvas.width = widthString.match(regex)[0] -2;
    canvas.height = heightString.match(regex)[0];

    if (canvas.getContext) {

        var c = canvas.getContext('2d'),
            w = canvas.width,
            h = canvas.height;
        c.strokeStyle = '#AF50E5';
        c.fillStyle = '#AF50E5';
        c.shadowColor = 'rgba(189, 174, 189, .46)';
        c.lineWidth = 10;
        console.log(c);
        // constructor
        Word = function (key) {
            this.text = key;
            this.x = Math.random() * w;
            this.y = Math.random() * h;
            this.font = words[key] * 1.5 + 'em arial'
            this.speed = (words[key]);
        }
        for (key in words) {
            words_attr.push(new Word(key));
        }
        console.log(words_attr.length);
        function animation() {
            for (var i = 0; i < words_attr.length; i++) {
                c.font = words_attr[i].font;
                c.fillText(words_attr[i].text, words_attr[i].x, words_attr[i].y);
                words_attr[i].width = c.measureText(words_attr[i].text).width;
                c.stroke();
            }
            move();
        }

        function move() {
            for (var i = 0; i < words_attr.length; i++) {
                if (words_attr[i].x > w) {
                    words_attr[i].x = -words_attr[i].width;
                    words_attr[i].y = Math.random() * h;
                } else {
                    words_attr[i].x += words_attr[i].speed;
                }
            }
        }

        setInterval(function () {
            c.clearRect(0, 0, w, h);
            animation();
        }, 35);

    }

    function string_handle(str) {
        var split_str = str.split(" ");
        var word_array = [];
        var word_count = [];
        for (var i = 0; i < split_str.length; i++) {
            check = true;
            for (var j = 0; j <= word_array.length; j++) {
                if (split_str[i] == word_array[j]) {
                    word_count[j]++;
                    check = false;
                    break;
                }
            }
            if (check) {
                word_array.push(split_str[i]);
                word_count.push(1);
            }
        }
        for (var i = 0; i < word_array.length; i++) {
            words[word_array[i]] = word_count[i];
        }
        return words;
    }


    /*Función: animateCircles
        Utilidad: Animación que sigue al puntero en todo el sitio
        */
    /*document.onmousemove = animateCircles;
    var colors = ['#882895', '#882895', '#AF50E5']
    function animateCircles (event){
        var circle = document.createElement("div");
        circle.setAttribute("class","circle-effect");
        document.body.appendChild(circle);

        circle.style.left = event.clientX + 'px';
        circle.style.top = event.clientY + 'px';


        circle.style.transition = "all 0.5s linear 0s";

        circle.style.left = circle.offsetLeft - 5 + 'px';
        circle.style.top = circle.offsetTop - 5 + 'px';
        circle.style.width = "1em";
        circle.style.height = "1em";
        circle.style.opacity = 0;
        
        var color = colors[Math.floor(Math.random() * colors.length)];
        circle.style.borderColor = color;
    }*/
    var cMarca = document.getElementById('projectsMarca');
    var cWork = document.getElementById('textProjects');
    var cBase = document.getElementById('colAbout');
    var cStyle = window.getComputedStyle(cBase);
    var cStyle2 = window.getComputedStyle(cWork);
    var wProject = cStyle.width;
    var hProject = cStyle2.height;
    console.log('width Work: '+wProject);
    var regex2 = /(\d+)/g;
    cMarca.style.width = wProject.match(regex2)[0] + 'px';
    cMarca.style.height = hProject.match(regex2)[0] + 'px';
    cWork.style.width = wProject.match(regex2)[0] + 'px';
    console.log('width Marca: '+cMarca.style.width);
})