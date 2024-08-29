function calcularIdade() {
            var anoNascimento = document.getElementById("anoNascimento").value;
            var anoAtual = new Date().getFullYear();
            var idade = anoAtual - anoNascimento;
            var resultado = document.getElementById("resultado");

            if (idade >= 18) {
                resultado.innerText = "Você tem " + idade + " anos. Você é maior de idade.";
            } else if (idade > 0) {
                resultado.innerText = "Você tem " + idade + " anos. Você é menor de idade.";
            } else {
                resultado.innerText = "Por favor, insira um ano de nascimento válido.";
            }
        }