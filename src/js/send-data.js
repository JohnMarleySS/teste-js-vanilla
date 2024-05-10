let form = document.getElementById("my-form");

form.addEventListener("submit", onFormSubmit);

function onFormSubmit(event) {
  event.preventDefault();

  const data = new FormData(event.target);

  const name = data.get("name");

  const primary = data.get("primary");
  const secondary = data.get("secondary");
  const success = data.get("success");
  const danger = data.get("danger");
  const warning = data.get("warning");

  const object = {
    name,
    colors: {
      primary,
      secondary,
      success,
      danger,
      warning,
    },
  };
  sendData(object);
}

function sendData(object) {
  fetch("http://localhost:3000/cores/", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(object),
  }).then((res) => {
    console.log("request complet", res);
  });
}
