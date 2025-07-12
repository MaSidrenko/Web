// console.log(size);


function GenereteFigure() {
    let size = document.getElementById('size').value;
    document.body.innerHTML = '';
    document.writeln('<pre>')
    document.writeln('<div class="terminal"><div class= "prompt">dark_soulPC@MaximSidorenko:~/E:/Users/Maxim_Sidorenko/sourceVS/Web/02-JavaScript/01-geometria/run GenereteFigure.js</div >')
    document.writeln('</pre>')
    document.writeln('<pre>')
    for (var i = 0; i < size; i++) {
        for (var j = 0; j < size; j++) {
            document.write('* ');
        }
        document.write('<br>');
    }
    
    document.write('<br>');
    
    for (let i = 0; i < size; i++) {
        for (let j = 0; j <= i; j++) {
            document.write('* ');
        }
        document.write('<br>');
    }
    
    document.write('<br>');
    
    for (var i = 0; i < size; i++) {
        for (var j = 0; j < size - i; j++) {
            document.write('* ');
        }
        document.write('<br>');
    }
    
    document.write('<br>');
    // document.writeln('<pre>')
    for (var i = 0; i < size; i++) {
        for (var j = 0; j < size; j++) {
            if (i > j) {
                document.write("&nbsp;&nbsp;");
            }
            else {
                document.write('* ');
            }
        }
        document.write('<br>');
    }
    
    document.write('<br>');
    
    for (var i = 0; i < size; i++) {
        for (var j = size - 1; j >= 0; j--) {
            if (j <= i) {
                document.write('* ');
            } else {
                document.write("&nbsp;&nbsp;");
            }
        }
        document.write('<br>');
    }
    
    document.write('<br>');
    
    for (var i = 0; i < size; i++) {
        for (var j = size; j >= 0; j--) {
            if (i == j) {
                document.write("/");
            }
            else {
                document.write("&nbsp");
            }
        }
        for (var j = 0; j < size; j++) {
            if (i == j) {
                document.write("\\");
            } else {
                document.write("&nbsp");
            }
        }
        document.write('<br>');
    }
    for (var i = 0; i < size; i++) {
        for (var j = 0; j < size; j++) {
            if (i == j) {
                document.write("\\");
            }
            else {
                document.write("&nbsp");
            }
        }
        for (var j = size; j >= 0; j--) {
            if (i == j) {
                document.write("/");
            }
            else {
                document.write("&nbsp");
            }
        }
        document.write("<br>");
    }
    
    document.write('<br>');
    
    for (var i = 0; i < size; i++) {
        for (var j = 0; j < size; j++) {
            if ((i + j) % 2 == 0) {
                document.write('+ ');
            } else {
                document.write('- ');
            }
        }
        document.write('<br>');
    }
    document.writeln('</pre>')
    document.writeln('<button onclick="Cancle()">Отменить Генерацию</button>')
    document.head.innerHTML = '<link rel="stylesheet" href="../../style.css"></link>';
    document.writeln('<br>')
    document.writeln('<br>')
    document.writeln('<button onclick="Back()">Назад</button>')
    document.writeln('<pre>')
    document.writeln('<div class="terminal"><div class="prompt">dark_soulPC@MaximSidorenko:~/E:/Users/Maxim_Sidorenko/sourceVS/Web/02-JavaScript/01-geometria$<span class="cursor">_</span></div>')
    document.writeln('</pre>')
    
}

function Cancle() {
    document.head.innerHTML = '<link rel="stylesheet" href="../../style.css"></link>';
    // document.writeln(' ');
    document.body.innerHTML = '';
    document.writeln('<pre>')
    document.writeln('<div class="terminal"><div class= "prompt"> dark_soulPC@MaximSidorenko:~/E:/Users/Maxim_Sidorenko/sourceVS/Web/02-JavaScript/01-geometria/run Cancle.js</div >')
    document.writeln('</pre>')
    document.writeln('<input type="number" name="size" id="size"/>');
    document.writeln('<br>');
    document.writeln('<button onclick="GenereteFigure()">Сгенерировать</button>');
    document.writeln('<br>');
    document.writeln('<br>')
    document.writeln('<br>')
    document.writeln('<button onclick="Back()">Назад</button>')
    document.writeln('<script src="main.js"></script>');
    document.writeln('<pre>')
    document.writeln('<div class="terminal"><div class="prompt">dark_soulPC@MaximSidorenko:~/E:/Users/Maxim_Sidorenko/sourceVS/Web/02-JavaScript/01-geometria$<span class="cursor">_</span></div>')
    document.writeln('</pre>')
}

function Back() {
    window.close();
    window.open('..\\index.html');
}