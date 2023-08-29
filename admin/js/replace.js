function replaceData(){
    const data = document.getElementById('hello').value;
    const pass = document.getElementById('pass').value;
    const xhr = new XMLHttpRequest();
    xhr.open("POST", "https://sub.drscripter32.workers.dev/api/v1/replace");
    xhr.setRequestHeader("Content-Type", "text/sos-sher");
    const body = pass+","+data;
    xhr.onload = () => {
        if (xhr.readyState == 4 && xhr.status == 201) {
        console.log(xhr.responseText);
        document.getElementById('hello').value = '';
        document.getElementById('pass').value = '';
    } else {
        console.log(`Error: ${xhr.status}`);
    }
    };
    xhr.send(body);


}
