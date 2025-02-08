var pantryURL = "https://getpantry.cloud/apiv1/pantry/0c253289-17e1-49e3-a419-3473789d01ea/basket/Game Base";

fetch(pantryURL)
    .then(response => response.json())
    .then(data => {
        var url = data[id];

        if (url) {
            var win;

            document.querySelector("button").onclick = function() {
                if (win) {
                    win.focus();
                } else {
                    win = window.open();
                    win.document.body.style.margin = "0";
                    win.document.body.style.height = "100vh";
                    var iframe = win.document.createElement("iframe");
                    iframe.style.border = "none";
                    iframe.style.width = "100%";
                    iframe.style.height = "100%";
                    iframe.style.margin = "0";
                    iframe.src = url;
                    win.document.body.appendChild(iframe);

                    var interval = setInterval(function() {
                        if (win.closed) {
                            clearInterval(interval);
                            win = undefined;
                        }
                    }, 500);
                }
            };
        }
    })
    .catch(error => console.error('Error fetching data:', error));
