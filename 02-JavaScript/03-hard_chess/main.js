function GenereteHardChess() {
    let size = document.getElementById('size').value;
    document.body.innerHTML = '';
    document.writeln('<pre>')
    document.writeln('<div class="terminal"><div class= "prompt">dark_soulPC@MaximSidorenko:~/E:/Users/Maxim_Sidorenko/sourceVS/Web/02-JavaScript/03-hard_chess/run GenereteHardChess.js</div >')
    document.writeln('</pre>')

    document.writeln('<pre>')
    for (let i = 0; i < size; i++) {
        for (let j = 0; j < size; j++) {
            for (let k = 0; k < size; k++) {
                for (let l = 0; l < size; l++) {
                    document.write((i + k) % 2 == 0 ? "* " : "\u00A0\u00A0");
                }
            }
            document.write('<br>')
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
    document.writeln('<div class="terminal"><div class="prompt">dark_soulPC@MaximSidorenko:~/E:/Users/Maxim_Sidorenko/sourceVS/Web/02-JavaScript/03-hard_chessa$<span class="cursor">_</span></div>')
    document.writeln('</pre>')
}

function Cancle() {

    document.head.innerHTML = '<link rel="stylesheet" href="../style.css"></link>';
    document.body.innerHTML = '';
    document.writeln('<pre>')
    document.writeln('<div class="terminal"><div class= "prompt"> dark_soulPC@MaximSidorenko:~/E:/Users/Maxim_Sidorenko/sourceVS/Web/02-JavaScript/03-hard_chess/run Cancle.js</div >')
    document.writeln('</pre>')
    document.writeln('<input type="number" name="size" id="size"/>');
    document.writeln('<br>');
    document.writeln('<button onclick="GenereteHardChess()">Сгенерировать</button>');
    document.writeln('<br>');
    document.writeln('<br>')
    document.writeln('<br>')
    document.writeln('<button onclick="Back()">Назад</button>')
    document.writeln('<script src="main.js"></script>');
    document.writeln('<pre>')
    document.writeln('<div class="terminal"><div class="prompt">dark_soulPC@MaximSidorenko:~/E:/Users/Maxim_Sidorenko/sourceVS/Web/02-JavaScript/03-hard_chess$<span class="cursor">_</span></div>')
    document.writeln('</pre>')
}
function Back() {
    window.open('..\\index.html');
}