Colors:
rgb(0, 0, 112) azul
rgb(231, 75, 132)  rojo
rgb(75, 231, 143) verde
rgb(231, 231, 75)

rgb(72, 111, 203) celeste



el query

@media (max-width: 842px) {
 .nav_label{
  display: block;
  cursor: pointer;
 }
 
  .nav_menu{
    position: fixed;
    top: 80px;
    bottom: 0;
    background: rgb(0, 0, 112);
    width: 100%;
    left: 0;
    display: flex;
    justify-content: space-evenly;
    flex-direction: column;
    align-items: center;
    clip-path: circle(0 at center);
    transition: clip-path 1seg ease-in-out;
  } 

  .nav_input:checked + .nav_menu {
    clip-path: circle(100% at center);
  }
}