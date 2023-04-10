const btn = document.querySelector(".btn");

btn.addEventListener("click", async (e)=> {
    const pergunta = document.querySelector(".textarea").value
    const url = "https://api.openai.com/v1/completions"
    const OPENAI_API_KEY = "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"
    const perguntaChat = document.querySelector(".pergunta")
    const respostaChat = document.querySelector(".resposta")

    //Requisição para o chatgpt

    perguntaChat.innerHTML = pergunta
    document.querySelector(".btn").value="Pesquisando..."
    document.querySelector(".resposta").innerHTML=""
    

    await fetch(url, {

        //metodos para enviar 
        method: "POST",

        //Dados enviados no cabeçalho da informação

        headers: {
            accept: "application/json",
            "content-Type": "application/json",
            Authorization: "Bearer " + OPENAI_API_KEY,
        },

        //Enviar os dados no corpo da requisiçao

        body: JSON.stringify({
            model: "text-davinci-003",
            prompt: pergunta, // Texto da pergunta
            max_tokens: 3000, //tamnho da resposta
            temperature: 0.5 // Criatividade da resposta
        }),
    })
    // acessar o then quando obtiver uma resposta
    .then((response) => response.json())
    .then((dados) => {
        //console.log(dados)
        //console.log(dados.choices[0].text)
        
        respostaChat.innerHTML = dados.choices[0].text;
        
    })
    .catch((erro)=> {
        alert("Estamos com problemas por favor tenta mais tarde")
    })
    document.querySelector(".textarea").value = ""
    document.querySelector(".btn").value="Enviar"
});


