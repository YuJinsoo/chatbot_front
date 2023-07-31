async function testAPI(input){
    const url = "http://127.0.0.1:8000/chatbot/test/"
    const options = {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            // "my-header": "headertest" // 서버에 해당 헤더 항목을 추가하면 읽어올 수 있습니다.
        },
        body: JSON.stringify(input),
        redirect:"follow",
    }

    const result = await fetch(url, options);
    const data = result.json();

    // console.log(result); // Response
    // console.log(data); // Promise
    if (result.ok){
        return data;
    } else{
        throw Error(data);
    }
}


async function loginAPI(formdata){
    const url = "http://127.0.0.1:8000/account/login/"
    const options = {
        method: "POST",
        headers: {
            // "Content-Type": "application/json",
            // 서버에서 'multipart/form-data; boundary=----WebKitFormBoundaryaLTPqRZtFLTVfxL9' 로 확인됩니다.
        },
        body: formdata,
        redirect:"follow",
    }
    console.log([...formdata])
    const result = await fetch(url, options);
    const data = result.json();
    
    if (result.ok){
        return data
    } else{
        return Error(data)
    }
}

function logoutAPI(){
    const url = "http://127.0.0.1:8000/account/logout/"
}

function signinAPI(){
    const url = "http://127.0.0.1:8000/account/create/"
}


export {
    testAPI,
    loginAPI,
    logoutAPI,
    signinAPI
}