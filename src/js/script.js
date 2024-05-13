const url = "http://localhost:3000/cores/";

fetch(url)
  .then((response) => response.json())
  .then((data) => {
    getItems(data);
  })
  .catch((error) => console.log(error));

const elementDiv = document.querySelector("#div-objects");

async function getItems() {
  const response = await fetch(url);
  const data = await response.json();
  sendView(data);
}

function sendView(data) {
  data.map((item) => {
    const itemHTML = `
<div key="${item.id}" id="search-item" id="search-item-${item.id}" class="card box todo-list" data-toggle="modal" data-target="#exampleModal-${item.id}">
    <div>
        <div class="primary-color" style="background-color: ${item.colors.primary}">
        </div>
        <div class="card-body">
            ${item.name}
        </div>
    </div>
</div>
<div class="modal fade" id="exampleModal-${item.id}" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div class="modal-dialog" role="document">
        <div class="modal-content">
            <div class="modal-header">
                <h5 class="modal-title" id="exampleModalLabel">Bloco de cor:</h5>
                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                </button>
            </div>
            <div class="modal-body">
                <form id="my-form" class="my-form">
                    <div class="container-input">
                        <div class="container">
                            <label for="validationCustom01">Nome</label>
                            <input type="text" class="form-control" name="name" id="name-${item.id}" placeholder="Name" value="${item.name}" required />
                        </div>
                        <div class="container-colors">
                            <div>
                                <input type="color" id="primary-${item.id}" name="primary" value="${item.colors.primary}" />
                                <label for="primary">Primary</label>
                            </div>
                            <div>
                                <input type="color" id="secondary-${item.id}" name="secondary" value="${item.colors.secondary}" />
                                <label for="secondary">Secondary</label>
                            </div>
                            <div>
                                <input type="color" id="success-${item.id}" name="success" value="${item.colors.success}" />
                                <label for="success">Success</label>
                            </div>
                            <div>
                                <input type="color" id="danger-${item.id}" name="danger" value="${item.colors.danger}" />
                                <label for="danger">Danger</label>
                            </div>
                            <div>
                                <input type="color" id="warning-${item.id}" name="warning" value="${item.colors.warning}" />
                                <label for="warning">Warning</label>
                            </div>
                        </div>
                        <div>
                            <button type="submit" class="btn btn-sucess btn-lg btn-block" onclick="update(${item.id}, event)">Atualizar</button>
                        </div>
                    </div>
                </form>
            </div>
            <div class="modal-footer">
                <button type="button" class="btn btn-danger" data-dismiss="modal" onclick="deletItem(${item.id}, event)">Apagar</button>
                <button type="button" class="btn btn-sucess" id="setting" onclick="applyTheme(${item.id}, event)">Aplicar</button>
            </div>
        </div>
    </div>
</div>
`;
    elementDiv.innerHTML += itemHTML;
  });
}

async function update(id, event) {
  event.preventDefault();

  const name = document.getElementById(`name-${id}`).value;
  const primary = document.getElementById(`primary-${id}`).value;
  const secondary = document.getElementById(`secondary-${id}`).value;
  const success = document.getElementById(`success-${id}`).value;
  const danger = document.getElementById(`danger-${id}`).value;
  const warning = document.getElementById(`warning-${id}`).value;

  const object = {
    id,
    name,
    colors: {
      primary,
      secondary,
      success,
      danger,
      warning,
    },
  };

  sendData(id, object);

  function sendData(id, object) {
    fetch(`http://localhost:3000/cores/${id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(object),
    })
      .then((res) => {
        console.log("request complet", res);
      })
      .catch((err) => alert(err));
  }
}

function deletItem(id) {
  fetch(`http://localhost:3000/cores/${id}`, {
    method: "DELETE",
  })
    .then((response) => response.json())
    .then(() => console.log("User deleted"));
    
    location.reload();
}

function applyTheme(id, event) {
  event.preventDefault();

  

  const primary = document.getElementById(`primary-${id}`).value;
  const secondary = document.getElementById(`secondary-${id}`).value;
  const success = document.getElementById(`success-${id}`).value;
  const danger = document.getElementById(`danger-${id}`).value;
  const warning = document.getElementById(`warning-${id}`).value;

  localStorage.setItem('--primary', JSON.stringify(primary));
  localStorage.setItem('--secondary', JSON.stringify(secondary));
  localStorage.setItem('--success', JSON.stringify(success));
  localStorage.setItem('--danger', JSON.stringify(danger));
  localStorage.setItem('--warning', JSON.stringify(warning));

  location.reload();
}
