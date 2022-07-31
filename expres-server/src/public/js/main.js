const form = document.querySelector("#form-upload");
const app = document.querySelector(".app");
const btn = document.querySelector("#upload");

btn?.addEventListener("click", (e) => {
  e.preventDefault();

  const data = new FormData(form);

  fetch("http://localhost:4000/upload", {
    method: "POST",
    body: data,
  })
    .then((res) => res.json())
    .then((file) => {
      console.log(file);

      form.innerHTML = `
        <h1>¡Subido con exito!</h1>
        <a href="${file.data.path}" target="_blank">Click aquí para ver</a>
      `;
    })
    .catch((err) => {
      console.error(err);
      alert(err.message);
    });
});
