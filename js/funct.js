console.log('conectado...')
const evidencias = [
    {
        'titulo':'Estudio de caso: La oportunidad de formarme', 
        'ID': 153564047,
        'data': '2021-08-21 19:36:33', 
        'Enlace':' http://sena.territorio.la/tarea_tt.php?tarea=138858337 '
    }
];

const fragment = document.createDocumentFragment();

for(let i=0; i>evidencias.length; i++){
    console.log(i)
}

let tituloEvidencia = document.querySelector('#nameEvidencia');
tituloEvidencia.innerHTML = evidencias[0].titulo;