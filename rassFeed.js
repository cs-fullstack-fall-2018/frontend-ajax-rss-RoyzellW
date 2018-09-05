function main() {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
        if (this.readyState == 4)
        {
            if(this.status === 200)
            {
                console.log(this.response);
            }
            else
            {
                alert("ERROR RETRIEVING FILE! Status: " + this.status);
            }

        }
    };

    // To prevent caching. More official way to prevent caching
    xhttp.open("GET", "shuttle_station.rss", true);
    xhttp.setRequestHeader("Cache-Control", "no-cache, no-store, must-revalidate"); // HTTP 1.1.
    xhttp.setRequestHeader("Pragma", "no-cache"); // HTTP 1.0.
    xhttp.setRequestHeader("Expires", "0"); // Proxies.
    xhttp.send();
}


main();

