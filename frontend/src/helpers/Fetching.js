
export const Fetching = async (url, method, saveData = "") => {


    let loading = true;


    loading = true;
    let options = {
        method: "GET"
    }
    if (method === 'GET' || method == 'DELETE') {
        options = {
            method: method
        }
    }

    if (method === 'POST' || method == 'PUT') {
        options = {
            method: method,
            body: JSON.stringify(saveData),
            headers: {
                "Content-Type": "application/json"
            }
        }
    }
    const response = await fetch(url, options);

    const data = await response.json();
    loading = false;


    return {
        data,
        loading
    }

}