const d = document;

export default function contactFormValidations(){ //export function
   const $form = d.querySelector(".contact-form")// const with the place we work
   let $inputs = d.querySelectorAll(".contact-form [required]");

   //console.log($inputs); //los cuatro inputs a rellenar

   $inputs.forEach((input) => {
    const $span = d.createElement("span");
    $span.id = input.name;//atributo id el valor en input propiedad name
    $span.textContent = input.title;// en texcontent poner lo que hay en title del input
    $span.classList.add("contact-form-error","none"); //    Aplicacion de la clase en css
    input.insertAdjacentElement("afterend", $span);
       })
       d.addEventListener("keyup", (e) =>{
if(e.target.matches(".contact-form [required]")){ //delegacion evento a los required
let $t = e.target;

//nota patern funciona solamente en inputs y no en text area,  si ponemos una etiqueta "data-pattern" en el html ahi si funciona en text area
let pattern = $t.pattern || $t.dataset.pattern; //Validacion aceptara los patrones declarados en el html.
//console.log($t, pattern);
if(pattern && $t.value !== ""){
       //console.log("Tienen patern");
       let regex = new RegExp(pattern); //Exprecion regular en el patron
       return !regex.exec($t.value) //Si no valida la exprecion en la variable  regex  
       ? d.getElementById($t.name).classList.add("is-active")
       : d.getElementById($t.name).classList.remove("is-active");
}
if(!pattern){
      return !$t.value === ""
       ? d.getElementById($t.name).classList.add("is-active")
       : d.getElementById($t.name).classList.remove("is-active");
}
}
       })

d.addEventListener("submit", (e) =>{
       //e.preventDefault();
       alert("Enviando Formulario");

       const $loader = d.querySelector(".contact-form-loader");
       const $response = d.querySelector(".contact-form-response")

       $loader.classList.remove("none");

       setTimeout(() =>{
              $loader.classList.add("none");
              $response.classList.remove("none");
              $form.reset();

              setTimeout(()=> $response.classList.add("none"),3000)
       },3000)
})

}