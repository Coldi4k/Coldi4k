        var pantryURL = "https://getpantry.cloud/apiv1/pantry/0c253289-17e1-49e3-a419-3473789d01ea/basket/Game Base";

        fetch(pantryURL)
            .then(response => response.json())
            .then(data => {
                var url = data[id];

                if (url) {
                    document.getElementById("loadGame").onclick = function() {
                        var gameContainer = document.getElementById("gameContainer");
                        gameContainer.innerHTML = ''; // Clear any existing iframes
                        var iframe = document.createElement("iframe");
                        iframe.style.border = "none";
                        iframe.style.width = "100%";
                        iframe.style.height = "100%";
                        iframe.src = url;
                        gameContainer.appendChild(iframe);
                    };
                }
            })
            .catch(error => console.error('Error fetching data:', error));
