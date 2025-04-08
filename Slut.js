let selectedOption = ""; 


function markAsSelected(element) {
    selectedOption = element.innerText;

   
    let listItems = document.querySelectorAll('.lista li');
    listItems.forEach(function(item) {
        item.classList.remove('selected'); 
    });

    
    element.classList.add('selected'); 

    
    document.getElementById('scroll-ruta').style.display = "none";

  
    const valRuta = document.getElementById('val-ruta');
    valRuta.style.display = "block"; 
    document.getElementById('val-text').innerText = "Du har valt: " + selectedOption; 
}


function showListAgain() {
    document.getElementById('scroll-ruta').style.display = "block";
    document.getElementById('val-ruta').style.display = "none";
}
