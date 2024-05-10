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
  data.forEach((item) => {
    const itemHTML = `
<div key="${item.id}" id="search-item" class="card box" item-toggle="modal" item-target="#exampleModal">
    <div>
        <div class="primary-color" style="background-color: ${item.colors.primary}"></div>
        <div class="card-body">
            ${item.name}
        </div>
        <div>
        <button type="button" class="btn btn-secondary" data-dismiss="modal" onclick="edit(${item})">Close</button>
        <button type="button" class="btn btn-primary">Save changes</button>
        </div>
    </div>
</div>`;
    elementDiv.innerHTML += itemHTML;
  });
}

async function edit(item){
  console.log(item);
}


// function getItems(data) {
//   const htmlList = data
//     .map(
//       (item) => `
// {
//   /* <div key=${item.id} id="search-item" class="card box" data-toggle="modal" data-target="#exampleModal">
//       <div>
//           <div class="primary-color" style="background-color: ${item.colors.primary}"></div>
//           <div class="card-body">
//               ${item.name}
//           </div>
//       </div>
//   </div> */
// }
//   <div class="modal fade" id={${item.id}}} tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel"
//       aria-hidden="true">
//       <div class="modal-dialog" role="document">
//           <div class="modal-content">
//               <div class="modal-header">
//                   <h5 class="modal-title" id="exampleModalLabel">Cores do tema</h5>
//                   <button type="button" class="close" data-dismiss="modal" aria-label="Close">
//                       <span aria-hidden="true">&times;</span>
//                   </button>
//               </div>
//               <div class="modal-body">
//               <form id="my-form">
//               <div class="container-input">
//                   <div class="container">
//                       <label for="validationCustom01">Nome</label>
//                       <input type="text" class="form-control" name="name" placeholder="First name" value="" required>
//                   </div>
//                   <div class="container-colors">
//                       <div>
//                           <input type="color" id="primary" name="primary" value="#ffffff" />
//                           <label for="primary">Primary</label>
//                       </div>
//                       <div>
//                           <input type="color" id="secondary" name="secondary" value="#ffffff" />
//                           <label for="secondary">Secondary</label>
//                       </div>
//                       <div>
//                           <input type="color" id="success" name="success" value="#ffffff" />
//                           <label for="success">Success</label>
//                       </div>
//                       <div>
//                           <input type="color" id="danger" name="danger" value="#ffffff" />
//                           <label for="danger">Danger</label>
//                       </div>
//                       <div>
//                           <input type="color" id="warning" name="warning" value="#ffffff" />
//                           <label for="warning">Warning</label>
//                       </div>
//                   </div>
//                   <div>
//                       <button type="submit" class="btn btn-primary btn-lg btn-block">Submit</button>
//                   </div>
//               </div>
//           </form>
//               </div>
//               <div class="modal-footer">
//                   <button type="button" class="btn btn-secondary" onclick="$('#id-prod').text(${item.id});">Editar</button>
//                   <button type="button" class="btn btn-primary">Ativar</button>
//               </div>
//           </div>
//       </div>
//     </div>
//   `
//     )
//     .join(" ");
//   document.getElementById("div-objects").innerHTML = htmlList;
// }

// function delet(id) {
//   fetch(`http://localhost:3000/cores/${id}`, {
//     method: "DELETE",
//     headers: {
//       "Content-Type": "application/json",
//     },
//   })
//     .then((res) => res.json())
//     .then((json) => displayData(json));
// }
