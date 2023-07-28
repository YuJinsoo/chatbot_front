import { testAPI } from "./api.js";

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
    let data;
    let result = testAPI(input);
    // console.log(result) Promise
    result.then( (a) => {
        data = a;
        console.log(data);
    })

});