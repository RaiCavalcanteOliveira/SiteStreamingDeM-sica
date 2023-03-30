fetch('https://economia.awesomeapi.com.br/json/last/USD-BRL').then(resposta => {
    return resposta.json()
}).then(economia => {
    console.log(economia)

    fetch('produtos.json')
        .then(response => response.json())
        .then(corpo => {
            // var calculavalor = corpo.item1.valoremdolar * economia.USDBRL.bid;

            document.getElementById("nomemusica").innerHTML = "<h3>" + corpo.item1.musicname + "</h3>";
            document.getElementById("imagem").innerHTML = corpo.item1.imagem;
            document.getElementById("descricao").innerHTML = "Descrição: " + corpo.item1.descricao ;
           
            // document.getElementById("preco1").innerHTML = "Valor em real: "+calculavalor;
            // document.getElementById("comprar1").innerHTML = corpo.item1.botaocomprar;


            document.getElementById("nomemusica2").innerHTML = "<h3>" + corpo.item2.musicname + "</h3>";
            document.getElementById("imagem2").innerHTML = corpo.item2.imagem;
            document.getElementById("descricao2").innerHTML = "Descrição: " +corpo.item2.descricao;
          
            // document.getElementById("valoremdolar2").innerHTML = "Valor em Dolar: "+corpo.item1.valoremdolar;
            // document.getElementById("preco2").innerHTML = "Valor em real: " +calculavalor;
            // document.getElementById("comprar2").innerHTML = corpo.item1.botaocomprar;



            document.getElementById("nomemusica3").innerHTML = "<h3>" + corpo.item3.musicname + "</h3>";
            document.getElementById("imagem3").innerHTML = corpo.item3.imagem;
            document.getElementById("descricao3").innerHTML = "Descrição: " + corpo.item3.descricao;
          
            // document.getElementById("valoremdolar3").innerHTML = "Valor em Dolar: " +corpo.item1.valoremdolar;
            // document.getElementById("preco3").innerHTML = "Valor em real: " + calculavalor;
            // document.getElementById("comprar3").innerHTML = corpo.item1.botaocomprar;




            document.getElementById("nomemusica4").innerHTML = "<h3>" + corpo.item5.musicname + "</h3>";
            document.getElementById("imagem4").innerHTML = corpo.item5.imagem;
            document.getElementById("descricao4").innerHTML = "Descrição: " + corpo.item5.descricao;
          
            // document.getElementById("valoremdolar4").innerHTML = "Valor em Dolar: " +corpo.item1.valoremdolar;
            // document.getElementById("preco4").innerHTML = "Valor em real: " + calculavalor;
            // document.getElementById("comprar4").innerHTML = corpo.item1.botaocomprar;



            document.getElementById("nomemusica5").innerHTML = "<h3>" + corpo.item6.musicname + "</h3>";
            document.getElementById("imagem5").innerHTML = corpo.item6.imagem;
            document.getElementById("descricao5").innerHTML = "Descrição: " + corpo.item6.descricao;
        
            // document.getElementById("valoremdolar5").innerHTML = "Valor em Dolar: " +corpo.item1.valoremdolar;
            // document.getElementById("preco5").innerHTML = "Valor em real: "+calculavalor;
            // document.getElementById("comprar5").innerHTML = corpo.item1.botaocomprar;



            document.getElementById("nomemusica6").innerHTML = "<h3>" + corpo.item7.musicname + "</h3>";
            document.getElementById("imagem6").innerHTML = corpo.item7.imagem;
            document.getElementById("descricao6").innerHTML = "Descrição: " + corpo.item7.descricao;
          
            // document.getElementById("valoremdolar6").innerHTML = "Valor em Dolar: "+corpo.item1.valoremdolar;
            // document.getElementById("preco6").innerHTML = "Valor em real: " +calculavalor;
            // document.getElementById("comprar6").innerHTML = corpo.item1.botaocomprar;

            document.getElementById("nomemusica7").innerHTML = "<h3>" + corpo.item4.musicname + "</h3>";
            document.getElementById("imagem7").innerHTML = corpo.item4.imagem;
            document.getElementById("descricao7").innerHTML = "Descrição: " + corpo.item4.descricao;
        

            document.getElementById("nomemusica8").innerHTML = "<h3>" + corpo.item8.musicname + "</h3>";
            document.getElementById("imagem8").innerHTML = corpo.item8.imagem;
            document.getElementById("descricao8").innerHTML = "Descrição: " + corpo.item8.descricao;
     
        });





})


function passaaqui() {
    let novoElemento = document.createElement('div');
    novoElemento.innerHTML = "  <img src='imagens/botao-play (1).png' alt='' width='50px' onclick='playmusica()' id='playmusicaa'>"

    let meuElemento = document.getElementById('column1');
    meuElemento.appendChild(novoElemento);
    let elementoFilho = document.getElementById('column1').children

    if (elementoFilho.length > 7) {
        meuElemento.removeChild(novoElemento);
    }

    meuElemento.addEventListener('mouseleave', function (event) {
        // verifica se o elemento que acionou o evento é a div column1
        if (event.target === meuElemento) {
            // remove a imagem
            meuElemento.removeChild(novoElemento);
        } else {
            meuElemento.appendChild(novoElemento)
        }
    });


}



function playmusica() {
    fetch('produtos.json')
        .then(response => response.json())
        .then(corpo => {
            let novoElemento2 = document.createElement('div');
            novoElemento2.innerHTML = "<div class='container-fluid' id='enblobasobrepoe'><div class='row' id='sobrepoe' ></div></div>"
            // novoElemento2.innerHTML = "<audio src='media/Lady_Gaga_-_Judas_(ColdMP3.com).mp3' type=' audio/mp3'  autoplay='autoplay' controls></audio>";
            // let meuElemento2 = document.getElementById('column1');
            let meuElemento2 = document.getElementById('meio')//n mexer no elemento2
            meuElemento2.appendChild(novoElemento2);
            let corpoo = document.getElementById('corpo');
            let cabeca = document.getElementById('cabeca');

            let col1 = document.getElementById('linha1')
            let col2 = document.getElementById('linha2')
            let footer = document.getElementById('footer')
            let musicas = document.getElementById('musicas')
            let musicasmaistocadas=document.getElementById('musicasmaistocadas')

            musicas.style.opacity = '0.5';
            footer.style.opacity = '0.5';
            col1.style.opacity = '0.5';
            col2.style.opacity = '0.5';
            cabeca.style.opacity = '0.5'
            corpoo.style.backgroundColor = 'rgba(0,0,0,0.9)';
            meuElemento2.style.backgroundColor = 'rgba(54,19,71,0.9)';
            musicasmaistocadas.style.opacity='0.5'
            //ponterEvents none faz com que o elemento que recebeu essa propriedade não seja palpável
            musicas.style.pointerEvents = "none"
            footer.style.pointerEvents = "none"
            col1.style.pointerEvents = "none"
            col2.style.pointerEvents = "none"
            cabeca.style.pointerEvents = "none"

            let meuElemento3 = document.getElementById('sobrepoe');

            let errado = document.createElement('div');
            errado.innerHTML = "<img src='imagens/errado.png' alt='' width='50px' id='errado' >"
            meuElemento3.appendChild(errado);

            let fotocantor = document.createElement("div")
            fotocantor.innerHTML = corpo.item1.imagem2;
            meuElemento3.appendChild(fotocantor);

            let musicname = document.createElement('div')
            musicname.innerHTML = corpo.item1.musicname;
            meuElemento3.appendChild(musicname)

            let nomecantor = document.createElement('div')
            nomecantor.innerHTML = corpo.item1.cantor;
            meuElemento3.appendChild(nomecantor)

            let novoElemento3 = document.createElement('div');
            novoElemento3.innerHTML = "<audio  src='media/Lady_Gaga_-_Judas_(ColdMP3.com).mp3' class='audioo' type=' audio/mp3'  autoplay='autoplay' controls ></audio>";
            meuElemento3.appendChild(novoElemento3);


            errado.addEventListener('click', function (event) {
                if (event.target === errado) {
                    document.write("Banana");
                } else {
                    meuElemento2.removeChild(novoElemento2);

                    corpoo.style.backgroundColor = 'rgba(0,0,0,1)';
                    musicas.style.opacity = '1.0';
                    footer.style.opacity = '1.0';
                    col1.style.opacity = '1.0';
                    col2.style.opacity = '1.0';
                    cabeca.style.opacity = "1.0";
                    musicasmaistocadas.style.opacity="1.0"

                    musicas.style.pointerEvents = "auto"
                    footer.style.pointerEvents = "auto"
                    col1.style.pointerEvents = "auto"
                    col2.style.pointerEvents = "auto"
                    cabeca.style.pointerEvents = "auto"

                }

            });

        });



}



function passaaqui2() {
    let novoElemento = document.createElement('div');
    novoElemento.innerHTML = "  <img src='imagens/botao-play (1).png' alt='' width='50px' onclick='playmusica2()' id='playmusicaa'>"

    let meuElemento = document.getElementById('column2');
    meuElemento.appendChild(novoElemento);
    let elementoFilho = document.getElementById('column2').children

    if (elementoFilho.length > 7) {
        meuElemento.removeChild(novoElemento);
    }

    meuElemento.addEventListener('mouseleave', function (event) {
        // verifica se o elemento que acionou o evento é a div column1
        if (event.target === meuElemento) {
            // remove a imagem
            meuElemento.removeChild(novoElemento);
        } else {
            meuElemento.appendChild(novoElemento)
        }
    });


}



function playmusica2() {


    fetch('https://economia.awesomeapi.com.br/json/last/USD-BRL').then(resposta => {
        return resposta.json()
    }).then(economia => {
        console.log(economia)

        fetch('produtos.json')
            .then(response => response.json())
            .then(corpo => {
                let novoElemento2 = document.createElement('div');
                novoElemento2.innerHTML = "<div class='container-fluid' id='enblobasobrepoe'><div class='row' id='sobrepoe' ></div></div>"
                // novoElemento2.innerHTML = "<audio src='media/Lady_Gaga_-_Judas_(ColdMP3.com).mp3' type=' audio/mp3'  autoplay='autoplay' controls></audio>";
                // let meuElemento2 = document.getElementById('column1');
                let meuElemento2 = document.getElementById('meio')//n mexer no elemento2
                meuElemento2.appendChild(novoElemento2);
                let corpoo = document.getElementById('corpo');
                let cabeca = document.getElementById('cabeca');

                let col1 = document.getElementById('linha1')
                let col2 = document.getElementById('linha2')
                let footer = document.getElementById('footer')
                let musicas = document.getElementById('musicas')
                let musicasmaistocadas=document.getElementById('musicasmaistocadas')

                footer.style.opacity = '0.5';
                col1.style.opacity = '0.5';
                col2.style.opacity = '0.5';
                cabeca.style.opacity = '0.5'
                corpoo.style.backgroundColor = 'rgba(0,0,0,0.9)';
                meuElemento2.style.backgroundColor = 'rgba(54,19,71,0.9)';
                musicasmaistocadas.style.opacity='0.5'
 
                //ponterEvents none faz com que o elemento que recebeu essa propriedade não seja palpável
                musicas.style.pointerEvents = "none"
                footer.style.pointerEvents = "none"
                col1.style.pointerEvents = "none"
                col2.style.pointerEvents = "none"
                cabeca.style.pointerEvents = "none"



                let meuElemento3 = document.getElementById('sobrepoe');

                let errado = document.createElement('div');
                errado.innerHTML = "<img src='imagens/errado.png' alt='' width='50px' id='errado' >"
                meuElemento3.appendChild(errado);

                let fotocantor = document.createElement("div")
                fotocantor.innerHTML = corpo.item2.imagem2;
                meuElemento3.appendChild(fotocantor);

                let musicname = document.createElement('div')
                musicname.innerHTML = corpo.item2.musicname;
                meuElemento3.appendChild(musicname)

                let nomecantor = document.createElement('div')
                nomecantor.innerHTML = corpo.item2.cantor;
                meuElemento3.appendChild(nomecantor)

                let novoElemento3 = document.createElement('div');
                novoElemento3.innerHTML = corpo.item2.audio;
                meuElemento3.appendChild(novoElemento3);

            
                errado.addEventListener('click', function (event) {
                    if (event.target === errado) {
                        document.write("Banana");
                    } else {
                        meuElemento2.removeChild(novoElemento2);

                        corpoo.style.backgroundColor = 'rgba(0,0,0,1)';
                        musicas.style.opacity = '1.0';
                        footer.style.opacity = '1.0';
                        col1.style.opacity = '1.0';
                        col2.style.opacity = '1.0';
                        cabeca.style.opacity = "1.0";
                        musicasmaistocadas.style.opacity="1.0"


                        musicas.style.pointerEvents = "auto"
                        footer.style.pointerEvents = "auto"
                        col1.style.pointerEvents = "auto"
                        col2.style.pointerEvents = "auto"
                        cabeca.style.pointerEvents = "auto"


                    }

                });

            });





    })






}

fetch('https://economia.awesomeapi.com.br/json/last/USD-BRL').then(resposta => {
    return resposta.json()
}).then(economia => {
    console.log(economia)

    fetch('produtos.json')
        .then(response => response.json())
        .then(corpo => {
            var linha1plano1 = document.getElementById('linha1plano1')
            linha1plano1.innerHTML = "Valor em dolar: " + "<span id='dolar'>" + corpo.plano1.valoremdolar + "</span>";
            var linha2plano1 = document.getElementById('linha2plano1')
            linha2plano1.innerHTML = "Descrição: " + corpo.plano1.descricao;
            var linha3plano1 = document.getElementById('linha3plano1')
            linha3plano1.innerHTML = "Duração: " + corpo.plano1.duracao;
            var botao1 = document.getElementById("botao1")
            botao1.innerHTML = corpo.plano1.botao;
            var linha4plano1 = document.getElementById('linha4plano1')
            linha4plano1.innerHTML = corpo.plano1.imagem;

            var calculop1 = corpo.plano1.valoremdolar * economia.USDBRL.bid;
            var exibecalculop1 = document.getElementById('exibecalculop1')
            exibecalculop1.innerHTML = "Valor em dólar: " + "<span id='real'>" + calculop1.toFixed(2) + "</span>";

            //plano 2 logo abaixo
            var linha1plano2 = document.getElementById('linha1plano2')
            linha1plano2.innerHTML = "Valor em dolar: " + "<span id='dolar'>" + corpo.plano2.valoremdolar + "</span>";
            var linha2plano2 = document.getElementById('linha2plano2')
            linha2plano2.innerHTML = "Descrição: " + corpo.plano2.descricao;
            var linha3plano2 = document.getElementById('linha3plano2')
            linha3plano2.innerHTML = "Duração: " + corpo.plano2.duracao;
            var linha4plano2 = document.getElementById('linha4plano2')
            linha4plano2.innerHTML = corpo.plano2.imagem;
            var botao2 = document.getElementById("botao2")
            botao2.innerHTML = corpo.plano2.botao;

            var calculop2 = corpo.plano2.valoremdolar * economia.USDBRL.bid;
            var exibecalculop2 = document.getElementById('exibecalculop2')
            exibecalculop2.innerHTML = "Valor em dólar: " + "<span id='real'>" + calculop2.toFixed(2) + "</span>";

            //plano3 logo abaixo
            var linha1plano3 = document.getElementById('linha1plano3')
            linha1plano3.innerHTML = "Valor em dolar: " + "<span id='dolar'>" + corpo.plano3.valoremdolar + "</span>";
            var linha2plano3 = document.getElementById('linha2plano3')
            linha2plano3.innerHTML = "Descrição: " + corpo.plano3.descricao;
            var linha3plano3 = document.getElementById('linha3plano3')
            linha3plano3.innerHTML = "Duração: " + corpo.plano3.duracao;
            var linha4plano3 = document.getElementById('linha4plano3')
            linha4plano3.innerHTML = corpo.plano3.imagem;
            var botao3 = document.getElementById("botao3")
            botao3.innerHTML = corpo.plano3.botao;


            var calculop3 = corpo.plano3.valoremdolar * economia.USDBRL.bid;
            var exibecalculop3 = document.getElementById('exibecalculop3')
            exibecalculop3.innerHTML = "Valor em dólar: " + "<span id='real'>" + calculop3.toFixed(2) + "</span>";






        });





})


function redirecionaparapaginacep() {
    window.location.href = "cep.html"
}





fetch('produtos.json')
    .then(response => response.json())
    .then(corpo => {
        const pesquisa = document.getElementById('pesquisa');
        const albumladygaga = [[corpo.item1.imagem, corpo.item1.cantor, corpo.item1.musicname], [corpo.ladygagajustdance.imagem, corpo.ladygagajustdance.cantor, corpo.ladygagajustdance.musicname], [corpo.ladygagaaplause.imagem, corpo.ladygagaaplause.cantor, corpo.ladygagaaplause.musicname], [corpo.ladygagastupidlove.imagem, corpo.ladygagastupidlove.cantor, corpo.ladygagastupidlove.musicname], [corpo.ladygagapokerface.imagem, corpo.ladygagapokerface.cantor, corpo.ladygagapokerface.musicname], [corpo.ladygagabadromance.imagem, corpo.ladygagabadromance.cantor, corpo.ladygagabadromance.musicname], [corpo.ladygagashallownow.imagem, corpo.ladygagashallownow.cantor, corpo.ladygagashallownow.musicname], [corpo.ladygagapokerface.imagem, corpo.ladygagapokerface.cantor, corpo.ladygagapokerface.musicname]];

        pesquisa.addEventListener('keypress', function (event) {
            if (event.key == "Enter") {
                var main = document.getElementById('meio')
                var valorpesquisa = document.getElementById('pesquisa').value;
                var temcantor = false;
                var temmusica = false;
                var linha1z = document.createElement('div')
                var div3 = document.createElement("div");
                var linha1 = document.getElementById('linha1')
                var linha2 = document.getElementById('linha2')
                var musicasmaistocadas = document.getElementById('musicasmaistocadas')
                var musicasmaistocadas2 = document.getElementById('musicasmaistocadas2')
                musicasmaistocadas.style.display = "none"
                musicasmaistocadas.style.display = "none"
                // main.removeChild(musicasmaistocadas)
                // main.removeChild(musicasmaistocadas2)
                linha1z.classList.add("row");
                linha1z.classList.add("linha1z");
                div3.classList.add("row");
                div3.classList.add("linhainicial");


                main.replaceChild(div3, linha1)
                main.replaceChild(linha1z, linha2)


                for (let x = 0; x < albumladygaga.length; x++) {
                    var guardaalbum = albumladygaga[x];
                     
                    if (valorpesquisa === guardaalbum[1]) {
                        temcantor = true;
                    } else if (valorpesquisa == guardaalbum[2]) {
                        temmusica = true;
                    }

                    if (temcantor == true) {
                        var classes = ["col-sm", "configuracaixa"];

                        const informacoesgaga = [corpo.ladygaga.imagem, corpo.ladygaga.cantor, corpo.ladygaga.profissao, corpo.ladygaga.idade];

                        for (let x = 0; x < informacoesgaga.length; x++) {
                            div3.innerHTML = "<div>" + informacoesgaga[0] + "</div>";
                            div3.innerHTML += "<div>" + "Nome: " + informacoesgaga[1] + "</div>";
                            div3.innerHTML += "<div>" + "Profissão: " + informacoesgaga[2] + "</div>";
                            div3.innerHTML += "<div>" + "Idade: " + informacoesgaga[3] + "</div>";

                          
                        }
                        div3.className = "div3"

                        var div = document.createElement("div");
                        linha1z.appendChild(div)

                        for (var j = 0; j < classes.length; j++) {
                            div.className += " " + classes[j];
                        }
                        div.innerHTML += "<div>" + guardaalbum[0] + "</div>";
                        div.innerHTML += "<div>" + "<h5>" + "<strong>" + guardaalbum[1] + "</strong>" + "</h5>" + "</div>";
                        div.innerHTML += "<div>" + "<h5>" + "<strong>" + guardaalbum[2] + "</strong>" + "</h5>" + "</div>";



                    } else if (temmusica == true) {
                        document.write("Tem")
                       
                    } else {
                        document.write("KKKKK")
                    }

                }

            }


        })

    });

    function tabela(){
        window.location.href = "tabela.html"
    }

