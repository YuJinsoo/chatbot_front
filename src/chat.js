import { testAPI, chatAPI } from "./api.js";

const $chatBtn = document.querySelector("#chatBtn")

let input = [
    {
      role: "system",
      content: "assistant is a good gamer.",
    },
    {
      role: "user",
      content:
        "나는 1:1 끝말잇기를 너랑 하고싶은데 내가 규칙을 알려주면 학습할 수 있니?",
    }
]

$chatBtn.addEventListener("click", (e)=>{
    e.preventDefault();
    const promptInput = document.querySelector('#promptInput');
    // console.log(promptInput.value);

    let data;
    let input = {
        "prompt": `${promptInput.value}`
      }

    const cl = document.querySelector("#chatlist");
    let p = document.createElement("li");
    p.innerText = `Me : ${promptInput.value}`;
    cl.append(p);

    let result = chatAPI(input);
    // console.log(result) Promise
    result.then((res) => {
        console.log(res);
        console.log(res.prompt);
        console.log(res.response);
        
        let a = document.createElement("li");
        a.innerText = `AI : ${res.response}`;
        cl.append(a);

    })
});