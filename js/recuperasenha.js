let cadastros =  [ 

    {nome:"Diego",sobrenome:"Goes",email:"diegogoessg@gmail.com",senha:"papel123",Rg:"1",cep:27253123,bairro:"Monte Castelo",rua:"Ghandi",cidade:"Volta Redonda",estado:"RJ",perguntaDeSegurança:"rex"},
    {nome:"Isac",sobrenome:"silva",email:"isac@gmail.com",senha:"isac123",Rg:"16054986708",cep:27253123,bairro:"Monte Castelo",rua:"Ghandi",cidade:"Volta Redonda",estado:"RJ", perguntaDeSegurança:"rex"},
    {nome:"Camila",sobrenome:"Trizoto",email:"camilag@gmail.com",senha:"camila123",Rg:"16054986708",cep:27253123,bairro:"Monte Castelo",rua:"Ghandi",cidade:"Volta Redonda",estado:"RJ",perguntaDeSegurança:"rex"},
    {nome:"Kituxi",sobrenome:"carvalho",email:"kituxi@gmail.com",senha:"kituxi123",Rg:"16054986708",cep:27253123,bairro:"Monte Castelo",rua:"Ghandi",cidade:"Volta Redonda",estado:"RJ",perguntaDeSegurança:"rex"},
    {nome:"Verginia",sobrenome:"nascimento",email:"verginia@gmail.com",senha:"verginia123",Rg:"16054986708",cep:27253123,bairro:"Monte Castelo",rua:"Ghandi",cidade:"Volta Redonda",estado:"RJ",perguntaDeSegurança:"rex"},
  ] 
 
let codigos = [ 'J4N40','NKN5A','W70WU','SMAH5','OEQDG','IO35D','9F8N9','Y1JCX','KZTAK','FTXF2','RT69Y','DHC6D','G6IEJ','H3AR6','Y3UI4','5NNRT','GAEC9',
'2FH4B','LB8TG','H29IK','56EQE','8LRM4','CS4GU','481B3','3M517','B80AG','B6CFM','HEZ0Q','S29N8','UH7MJ','0FXU6','TX5KX','BMTER','7LXWB','DF3DS','2Z1ZB','APGXB',
'DHY8S','LA56F','N3RAP','SEWMH','EF765','86KFT','MI1BH','KMIFJ',
]



$('#botao').click(()=>{

    let email = $('#email').val();
    let rg = $('#rg').val();
    let bairro = $('#bairro').val();
    let pergunta = $('#seguranca').val();
    let verifica = [];
    let conta = [];

    console.log(email);
    console.log(bairro);
    console.log(rg);

    cadastros.forEach((item,indice)=>{
        if(item.email === email && item.Rg === rg && item.bairro === bairro && item.perguntaDeSegurança === pergunta){
            let ok = 1;
            verifica.push(ok);
            conta.push(indice);
        }
        else{
            let nok= 0;
            verifica.push(nok);
        }
    })

    let verficacao = verifica.reduce((x,y)=>{
        return x+y;
    })
    console.log(verficacao);
    console.log(conta);

  

    if(verficacao > 0){ 
        let codigo = codigos[Math.floor(Math.random() * (codigos.length))]

        
            $('.recuperacao').html("<label>Nova Senha:<input name= Nova Senha type= text id= novasenha size= 10  maxlength= 9  /></label><br /> <label>Confirma Nova Senha: <input name= Confirma Nova Senha type= text id= confirmasenha size= 10 maxlength= 9  /></label><br />    <label>Código De Validação :<input name= codigo type=text id= codigovalida size=40 /></label><br /> " )

            $('.areamodal').html("<input name= botao type = button id = botaomodal value=Código /></label><br/> <div id=myModal class=modal><div class=modal-content><div class=modal-header><span class=close>&times;</span><h2>"+codigo+"</h2></div><div class=modal-body><p>código para recuperar sua senha</p></div><div class=modal-footer></div></div></div> <input name= Mudar Senha type= button id = btnsenha value=Mudar_Senha  /></label><br />")

            $('.close').click(()=>{
                $('#myModal').removeClass('modal')
                $('#myModal').addClass('modaln')
            })


            $('#botaomodal').click(()=>{
                $('#myModal').removeClass('modaln')
                $('#myModal').addClass('modal')
        })

        $('#btnsenha').click(()=>{

            if($('#codigovalida').val() !== codigo){
                alert("código inválido");
            }

            else if($('#novasenha').val() === $('#confirmasenha').val()){
                alert("senha alterada com Sucesso");

                let senhamudada = $('#novasenha').val()

                alert(`sua nova senha é: ${senhamudada}`)

             
                window.location.href = "../html/pagina2login.html"

            }
           
            else{
               alert ("as senhas não são iguais");
            }
        })
    }
    
    else{
        alert("Dados Inválidos");
    }

})


   
  
  

