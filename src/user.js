import {loginAPI, logoutAPI, signinAPI} from "./api.js"

const $form = document.querySelector('#loginForm')



$form.addEventListener("submit", (e)=>{
    e.preventDefault();

    const formdata = new FormData($form);
    // console.log(formdata);
    // console.log([...formdata]);
    // const payload = new URLSearchParams(formdata);
    // console.log(payload)
    // console.log([...payload]);

    let data;
    let result = loginAPI(formdata);
    // console.log(result) Promise
    result.then((a) => {
        data = a;
        console.log(data);
    })
});