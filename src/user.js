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
    result.then((res) => {
        console.log(res);
        console.log(res.Token);

        localStorage.setItem('token', res.Token);
    })
});

// const $logoutForm = document.querySelector('#logoutForm')
const $logoutBtn = document.querySelector('#logoutbtn');

$logoutBtn.addEventListener("click", (e)=>{
    e.preventDefault();
    // let csrftoken = getCookie('csrftoken');
    
    let result = logoutAPI();
    // console.log(result) Promise
    result.then((res) => {
        console.log(res);
        console.log('hhhh')
        localStorage.removeItem('token');
    })
});




