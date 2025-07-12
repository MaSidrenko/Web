let top_left_agle = "\u250C";
let bottom_left_agle = "\u2514";
let bottom_right_agle = "\u2518";
let top_right_agle = "\u2510"
let horizontal_line = "\u2500";
let vertical_line = "\u2502";

function GenereteChess() {

    let size = document.getElementById('size').value;
    document.body.innerHTML = '';
    document.writeln('<pre>')
    document.writeln('<div class="terminal"><div class= "prompt">dark_soulPC@MaximSidorenko:~/E:/Users/Maxim_Sidorenko/sourceVS/Web/02-JavaScript/02-chess/run GenereteChess.js</div >')
    document.writeln('</pre>')
    document.write('<pre>')
    for (let i = 0; i <= size; i++) {
        for (let j = 0; j <= size; j++) {
            if (i == 0 && j == 0)
                document.write(top_left_agle);
            else if (i == 0 && j == size)
                document.write(top_right_agle);
            else if (i == size && j == 0)
                document.write(bottom_left_agle);
            else if (i == size && j == size)
                document.write(bottom_right_agle);
            else if (i == 0 || i == size)
                document.write(horizontal_line + horizontal_line);
            else if (j == 0 || j == size)
                document.write(vertical_line);
            else
                document.write(i % 2 == j % 2 ? '\u25A0\u25A0' : '\u00A0\u00A0');
        }
        document.write('<br>');
    }
   
    document.writeln('<button onclick="Cancle()">Отменить Генерацию</button>')
    document.head.innerHTML = '<link rel="stylesheet" href="../../style.css"></link>';
    document.writeln('<br>')
    document.writeln('<br>')
    document.writeln('<button onclick="Back()">Назад</button>')
    document.writeln('<pre>')
    document.writeln('<div class="terminal"><div class="prompt">dark_soulPC@MaximSidorenko:~/E:/Users/Maxim_Sidorenko/sourceVS/Web/02-JavaScript/02-chess$<span class="cursor">_</span></div>')
    document.writeln('</pre>')

    document.write('</pre>')
}
function Cancle() {
    // document.head.innerHTML = '<link rel="stylesheet" href="style.css"></link>';
    // document.body.innerHTML = '';
    // document.writeln('<input type="number" name="size" id="size"/>');
    // document.writeln('<br></br>');
    // document.writeln('<button onclick="GenereteChess()">Сгенерировать</button>');
    // document.writeln('<br></br>');
       document.head.innerHTML = '<link rel="stylesheet" href="../../style.css"></link>';
    document.body.innerHTML = '';
    document.writeln('<pre>')
    document.writeln('<div class="terminal"><div class= "prompt"> dark_soulPC@MaximSidorenko:~/E:/Users/Maxim_Sidorenko/sourceVS/Web/02-JavaScript/02-chess/run Cancle.js</div >')
    document.writeln('</pre>')
    document.writeln('<input type="number" name="size" id="size"/>');
    document.writeln('<br>');
    document.writeln('<button onclick="GenereteChess()">Сгенерировать</button>');
    document.writeln('<br>');
    document.writeln('<br>')
    document.writeln('<br>')
    document.writeln('<button onclick="Back()">Назад</button>')
    document.writeln('<script src="main.js"></script>');
    document.writeln('<pre>')
    document.writeln('<div class="terminal"><div class="prompt">dark_soulPC@MaximSidorenko:~/E:/Users/Maxim_Sidorenko/sourceVS/Web/02-JavaScript/02-chess$<span class="cursor">_</span></div>')
    document.writeln('</pre>')
}
function Back() {
    window.close();
    window.open('..\\index.html');

}