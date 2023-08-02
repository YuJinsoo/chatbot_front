import {loginAPI, logoutAPI} from "./api.js"

const $loginForm = document.querySelector('#loginForm')
// let key

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
        // key = data;
    })
});

const $logoutForm = document.querySelector('#logoutForm')

$logoutForm.addEventListener("submit", (e)=>{
    e.preventDefault();
    // let csrftoken = getCookie('csrftoken');
    const formdata = new FormData($logoutForm);
    formdata.append('Authorization', 'Key 91fc224b804dcb7dcc919efb68db07b1fa419386');
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




