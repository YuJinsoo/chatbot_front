async function testAPI(input){
    const key = localStorage.getItem('token')
    const url = "http://127.0.0.1:8000/api/chatbot/test/"
    const options = {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Authorization": `Token ${key}`,
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

async function chatAPI(input){
    const key = localStorage.getItem('token')
    const url = "http://127.0.0.1:8000/api/chatbot/answer/"

    const options = {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Authorization": `Token ${key}`,
            // "my-header": "headertest" // 서버에 해당 헤더 항목을 추가하면 읽어올 수 있습니다.
        },
        // body: JSON.stringify({
            // prompt: "world",
        // }),
        body: JSON.stringify(input),
        redirect:"follow",
    }
    console.log(JSON.stringify(input))

    const result = await fetch(url, options);
    const data = result.json();

    // console.log(result); // Response
    console.log(data); // Promise
    if (result.ok){
        return data;
    } else{
        return Error(data);
    }
}


async function loginAPI(formdata){
    const url = "http://127.0.0.1:8000/api/accounts/login/"
    const options = {
        method: "POST",
        headers: {
            // "Content-Type": "application/json",
            // 서버에서 'multipart/form-data; boundary=----WebKitFormBoundaryaLTPqRZtFLTVfxL9' 로 확인됩니다.
        },
        body: formdata,
        redirect:"follow",
    }
    // console.log([...formdata])
    const result = await fetch(url, options);
    const data = result.json();
    
    if (result.ok){
        return data
    } else{
        return Error(data)
    }
}

async function logoutAPI(){
    const key = localStorage.getItem('token')
    const url = "http://127.0.0.1:8000/api/accounts/logout/"
    const options = {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Authorization": `Token ${key}`,
        },
        redirect:"follow",
    }
    const result = await fetch(url, options);
    const data = result.json();

    if (result.ok){
        return data
    } else{
        return Error(data)
    }
}

async function registerAPI(formdata){
    const url = "http://127.0.0.1:8000/api/accounts/register/"
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


export {
    testAPI,
    loginAPI,
    logoutAPI,
    registerAPI,
    chatAPI
}