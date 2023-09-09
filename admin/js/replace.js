function replaceData(){
    const data = document.getElementById('hello').value;
    const pass = document.getElementById('pass').value;
    document.getElementById('status').value = 'updating...';
    const xhr = new XMLHttpRequest();
    xhr.open("POST", "https://sub.drscripter32.workers.dev/api/v1/replace");
    xhr.setRequestHeader("Content-Type", "text/sos-sher");
    const body = pass+","+btoa(data);
    xhr.onload = () => {
        if (xhr.readyState == 4 && xhr.status == 200) {
        console.log(xhr.responseText);
        document.getElementById('status').value = 'OK : '+xhr.responseText;
        document.getElementById('hello').value = '';
        document.getElementById('pass').value = '';
    } else {
        document.getElementById('status').value = 'ERR : '+xhr.responseText+' code : '+xhr.status;
        console.log(`Error: ${xhr.status}`);
    }
    };
    xhr.send(body);


}
