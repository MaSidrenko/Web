function GenereteTrianglePascale() {
    let size = document.getElementById('size').value;
    console.log(size);
    document.body.innerHTML = '';
    document.writeln('<pre>')
    document.writeln('<div class="terminal"><div class= "prompt">dark_soulPC@MaximSidorenko:~/E:/Users/Maxim_Sidorenko/sourceVS/Web/02-JavaScript/04-triangle-of-pascale/run GenereteTrianglePascale</div >')
    document.writeln('</pre>')
    const triangle = new Array(size);
    for (let i = 0; i < size; i++) {
        triangle[i] = new Array(i + 1);
        
        triangle[i][0] = 1;
        triangle[i][i] = 1;
        for (let j = 1; j < i; j++) {
            triangle[i][j] = triangle[i - 1][j - 1] + triangle[i - 1][j];
        }
        
    }
    
    if(size >= 25) {
        document.body.style.setProperty('font-size', '10px', 'important');
    }
    document.writeln('<pre>')
    for (let i = 0; i < size; i++) {
        document.write(' '.repeat((size - i - 1) * 4));
       for (let j = 0; j <= i; j++) {
           document.write(triangle[i][j] + "  ".repeat(4));
        }
        document.write('<br>')
    }
    document.writeln('</pre>')


    document.writeln('<button onclick="Cancle()">Отменить Генерацию</button>')
    document.head.innerHTML = '<link rel="stylesheet" href="../style.css"></link>';
    document.writeln('<br>')
    document.writeln('<br>')
    document.writeln('<button onclick="Back()">Назад</button>')
    document.writeln('<pre>')
    document.writeln('<div class="terminal"><div class="prompt">dark_soulPC@MaximSidorenko:~/E:/Users/Maxim_Sidorenko/sourceVS/Web/02-JavaScript/04-triangle-of-pascale$<span class="cursor">_</span></div>')
    document.writeln('</pre>')
}

function Cancle() {
     document.body.style.fontSize = '32px';
    document.head.innerHTML = '<link rel="stylesheet" href="../style.css"></link>';
    document.body.innerHTML = '';
    document.writeln('<pre>')
    document.writeln('<div class="terminal"><div class= "prompt"> dark_soulPC@MaximSidorenko:~/E:/Users/Maxim_Sidorenko/sourceVS/Web/02-JavaScript/04-triangle-of-pascale/run Cancle.js</div >')
    document.writeln('</pre>')
    document.writeln('<input type="number" name="size" id="size"/>');
    document.writeln('<br>');
    document.writeln('<button onclick="GenereteTrianglePascale()">Сгенерировать</button>');
    document.writeln('<br>');
    document.writeln('<br>')
    document.writeln('<br>')
    document.writeln('<button onclick="Back()">Назад</button>')
    document.writeln('<script src="main.js"></script>');
    document.writeln('<pre>')
    document.writeln('<div class="terminal"><div class="prompt">dark_soulPC@MaximSidorenko:~/E:/Users/Maxim_Sidorenko/sourceVS/Web/02-JavaScript/04-triangle-of-pascale$<span class="cursor">_</span></div>')
    document.writeln('</pre>')
}

function Back() {
    window.open('..\\index.html');
}