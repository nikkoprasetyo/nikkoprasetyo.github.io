//Pilih salah satu warna
let colors = [ 'red', 'blue', 'green', 'orange', 'purple', 'black', 'yellow'];


//Mengubah warna kotak background saat tombol ditekan
let button = document.getElementById('button');

button.addEventListener('click', function(){
    
    //Memilih secara random dari 0 sampai 6
    let index = parseInt((Math.random()*colors.length));

    //Mengambil kotak background
    let canvas = document.getElementById('kotak');

    canvas.style.background = `${colors[index]}`
})