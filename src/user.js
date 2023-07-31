import {loginAPI, logoutAPI, registerAPI} from "./api.js"

const $loginForm = document.querySelector('#loginForm')

$loginForm.addEventListener("submit", (e)=>{
    e.preventDefault();
    // let csrftoken = getCookie('csrftoken');
    const formdata = new FormData($loginForm);
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

const $logoutForm = document.querySelector('#logoutForm')

$logoutForm.addEventListener("submit", (e)=>{
    e.preventDefault();
    // let csrftoken = getCookie('csrftoken');
    const formdata = new FormData($logoutForm);
    // console.log(formdata);
    // console.log([...formdata]);
    // const payload = new URLSearchParams(formdata);
    // console.log(payload)
    // console.log([...payload]);

    let data;
    let result = logoutAPI(formdata);
    // console.log(result) Promise
    result.then((a) => {
        data = a;
        console.log(data);
    })
});


const $registerform = document.querySelector('#registerForm')

$registerform.addEventListener("submit", (e)=>{
    e.preventDefault();
    const formdata = new FormData($registerform);
    // console.log(formdata);
    // console.log([...formdata]);
    // const payload = new URLSearchParams(formdata);
    // console.log(payload)
    // console.log([...payload]);

    let data;
    let result = registerAPI(formdata);

    result.then((a) => {
        data = a;
        console.log(data);
    })
});


