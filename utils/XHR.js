const DOMAIN = "http://192.168.1.65:8080/Stage_Philiance/philsUp/Stage_API/";

export default function XHR(pathRequest, callback) {

    let xhr = new XMLHttpRequest();
    let url = DOMAIN + pathRequest;
        
    xhr.open('GET', url, true);
    xhr.onload = () => {

        let response = xhr.response
        
        if (isJson(response)) {

            let json = JSON.parse(response);
            callback(json);
            console.log("Les données reçues de l'API sont les suivantes \n:  : " + response);

        } else {

            console.log("L'erreur reçue de l'API est la suivante : \n" + response);
        }
    }
    xhr.send();
}

function isJson(str) {

    try {

        let json = JSON.parse(str)
        return true

    } catch (e) {

        return false
    }
}