
async function testAPI(input){
    const url = "http://127.0.0.1:8000/chatbot/test/"
    const options = {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(input),
        redirect:"follow",
    }

    const result = await fetch(url, options);
    const data = result.json();

    console.log(result); // Response
    console.log(data); // Promise
    if (result.ok){
        return data;
    } else{
        throw Error(data);
    }
}

export {
    testAPI,
}