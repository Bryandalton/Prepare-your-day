let request = new XMLHttpRequest();
request.open("GET", "http://www.7timer.info/bin/api.pl?lon=113.17&lat=23.09&product=astro&output=xml");
request.send();
request.onload = () => {
    console.log(request);
    if (request.status === 200) {
        console.log(JSON.parse(request.response));
    } else {
        console.log(`error ${request.status} ${request.statusText}`)
    }
}