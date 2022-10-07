export default defineEventHandler(async(event) => {
    //console.log(event.context.data);
    const query = useQuery(event)
    const datos = await useBody(event)

    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    var raw = JSON.stringify({
        "data": datos
    });

    var requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: raw,
        redirect: 'follow'
    };

    fetch("https://webhook.site/yourcode", requestOptions)
        .then(response => response.text())
        .then(result => console.log(result))
        .catch(error => console.log('error', error));


    return {
        api: "work",
        name: query.name,
        fullname: datos.fullname
    }
})