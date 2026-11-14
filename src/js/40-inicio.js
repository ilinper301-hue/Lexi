/* Pantalla de inicio (esqueleto): mascota animada + título */
function mascotaHTML() {
  return '<div class="lexi-mascota" role="img" aria-label="Lexi, la mascota">'
    + '<span class="sombra" style="left:15.777%;top:88.977%;width:67.194%;height:10.229%"></span>'
    + '<div class="flota"><img class="brazo" src="img/mascota/brazo.png" alt="">'
    + '<img src="img/mascota/cuerpo.png" alt="">'
    + '<i class="lid" style="left:26.877%;top:24.603%;width:19.236%;height:25.750%"></i>'
    + '<i class="lid" style="left:52.306%;top:18.871%;width:19.631%;height:26.279%"></i></div></div>';
}
function pintarInicio() {
  $('#app').innerHTML = '<button class="tema" id="bt-tema" aria-label="Cambiar tema">◐</button>'
    + '<main class="inicio infantil">' + mascotaHTML() + '<h1>Lexi</h1><p>Palabras nuevas para toda la clase</p></main>';
  $('#bt-tema').onclick = () => TEMA.alternar();
}
