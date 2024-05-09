const url = "http://localhost:3000/cores/";

fetch(url)
  .then((response) => response.json())
  .then((data) => {
    getItems(data);
  })
  .catch((error) => console.log(error));

function getItems(data) {
  console.log(data);
  const htmlList = data
    .map(
      (item) => `
  <div class="card box" data-toggle="modal" data-target="#exampleModal" key="${item.id}">
    <div>
        </div>
        <div class="primary-color" style="background-color: ${item.colors.primary}"></div>
        <div class="card-body">
            ${item.name}
        </div>
    </div>
</div>
<div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
<div class="modal-dialog" role="document">
  <div class="modal-content">
    <div class="modal-header">
      <h5 class="modal-title" id="exampleModalLabel">Modal title</h5>
      <button type="button" class="close" data-dismiss="modal" aria-label="Close">
        <span aria-hidden="true">&times;</span>
      </button>
    </div>
    <div class="modal-body">
      ${item.name}
    </div>
    <div class="modal-footer">
      <button type="button" class="btn btn-secondary" id="edit-button" data-item-id={${item.id}} data-item-name={${item.name}} data-item-colors={${item.colors}}>Editar</button>
      <button type="button" class="btn btn-primary">Ativar</button>
    </div>
  </div>
</div>
</div>`
    )
    .join(" ");
  document.getElementById("div-objects").innerHTML = htmlList;
}


