<script type="text/javascript">
        var opc = parseInt(prompt("Escolha:\n1 - para PVP\n2 - para PVE", "Digite o número aqui"))
                if(opc == 1){
            cont = 0        
        function checar(){ 
        var chute = 50
        var adivinhe = document.getElementById('adivinhe').value
            cont++     

                if(adivinhe == chute){
                    alert(`Parabéns, você acertou em ${cont} tentativas`)
                    document.write("<h3>GOOD BYE - YOU ARE THE CHAMPIONS - DIVIRTA-SE MAIS UM POUCO - ATUALIZE A PÁGINA E JOGUE NOVAMENTE!<h3>")
                }            
                else if (adivinhe < chute)
                {
                    alert("ERROU! Digite um número MAIOR!")
                }
                else if (adivinhe > chute)
                {
                    alert("ERROU! Digite um número MENOR!")
                }            
            }
        }

                if(opc == 2){
            var modalidade
            var limite
            modalidade = parseInt(prompt("Escolha a opção:\n1 - Para FÁCIL\n2 - Para MÉDIO\n3 - Para DIFÍCIL", "Digite o número aqui"))
                if(modalidade=1){
                    limite = 10
                }
                if(modalidade=2){
                    limite = 50
                }
                if(modalidade=3){
                    limite = 100
                }
                if(modalidade !=1 && modalidade !=2 && modalidade !=3){
                    alert("Escolha errada!\nTente novamente!")
                }
            var tente = Math.ceil(Math.random()*limite);
            cont = 0  
            function checar()      
        {
        
            var adivinhe = document.getElementById('adivinhe').value
            cont++        
                if(adivinhe == tente){
                    alert(`Parabéns, você acertou em ${cont} tentativas`)
                    document.write("<h3>DIVIRTA-SE MAIS UM POUCO - ATUALIZE A PÁGINA E JOGUE NOVAMENTE!<h3>")
                }            
                else if (adivinhe < tente)
                {
                    alert("ERROU! Digite um número MAIOR!")
                }
                else if (adivinhe > tente)
                {
                    alert("ERROU! Digite um número MENOR!")
                    }
                }
            }
                if(opc != 1 && opc !=2)
                    alert("Escolha somente os número 1 ou 2.")
    </script>
