console.log('funziono')

// // MACRO OBJECTIVE: far si che AL CLICK della chevron, la classe active(ovvero quella che rende block immagine)
// // si sposti sull' immagine seguente in modo tale da poter cambiare immagine a mio piacimento,
// // ovviamente dovro' far la cosa inversa sulla chevron che va all'indietro


// // 1 creare un array delle immagini, in modo tale da potermi muovere tra questi elementi

// const slides = [
//   "./img/image1.0.jpg",
//   "./img/image2.0.jpg",
//   "./img/image3.0.jpg",
//   "./img/image4.0.jpg",
//   "./img/image5.0.jpg",
// ]
// console.log(slides)

// //definisco il punto di partenza tra le slides, ovvero la 0, quindi la prima dove si trova la classe ACTIVE

// let currentIndex = 0

// //2 occorre prendere dal DOM gli elementi che dovranno interagire, quindi le varie slides con immagini
// //e prendere le due chevron, su queste ultime dovro' dargli un event listener, che al click mi faranno
// //compiere un'azione.

// for (i = 0; i < slides.length; i++ ) { //CREO IL CICLO E CREO ELEMENTI --PRIMA-------------------------
//                                       //   DELLA DICHIARAZIONE SLIDEELEMENTS
//                                       // perche' ovviamente slideelements non puo'
//                                       // dichiarare se non creo prima tutto nel ciclo.
  
//   const divAdd = document.createElement('div');


//   divAdd.className = 'slide';
  
  
//   document.getElementById('carousel').appendChild(divAdd)
  
//   const img = document.createElement("img");
//   img.src = slides[i];
//   divAdd.appendChild(img);
  
// }

//QUI SOPRA PARTE VECCHIA COMMENTATA DI CREAZIONE DELLE IMMAGINI


//CREARE ARRAY DI OGGETTI CHE CONTENGONO 1. IMMAGINE 2. TITOLO 3. DESCRIZIONE

slideArrObjects = [
  {
    sourceImg: './img/image1.0.jpg',
    title: 'Fiume Vietnamita',
    description: 'Una bellissima alba sul fiume Mekong'
  },
  {
    sourceImg: './img/image2.0.jpg',
    title: 'Spiaggia Rocce Noosa',
    description: 'Il tramonto Australiano'
  },
  {
    sourceImg: './img/image3.0.jpg',
    title: 'Montagne Canadesi',
    description: 'La glaciale solitudine della montagna'
  },
  {
    sourceImg: './img/image4.0.jpg',
    title: 'Tramonto sulle Ande',
    description: 'Il sole tramonta sulle impervie montagne'
  },
  {
    sourceImg: './img/image5.0.jpg',
    title: 'Notte nella Savana',
    description: 'Gli astri danzano nella notte Africana'
  }
]



for (let i = 0; i < slideArrObjects.length; i++) {
  let currentSlide = slideArrObjects[i]
  console.log(currentSlide)
  
  // for (let key in currentSlide) {
  //   let value = currentSlide[key]
  //   console.log( key , '=', value)
  // }

  //PRENDO UN OGGETTO DESTRUTTURANDOLO E CREANDO VARIE VARIABILI IN UN COLPO SOLO!

  const { sourceImg, title, description} = currentSlide
  console.log( sourceImg, title, description )
  //

  //RIMANENDO NEL CICLO FOR SOPRA SCRITTO, CREO (per 5 volte) grazie al mix di createElement e template literal, gli elementi
  //che dovremmo visualizzare nel DOM.

  const carouselElement = document.getElementById('carousel')

  carouselElement.innerHTML = `
    <div class="slide">
      <img src="${sourceImg}" alt="">
      <h2 class="main-title">${title}</h2>
      <p class="pic-description">${description}</p>
    </div>
  `

}









//LOGICA DA NON TOCCARE, CREARE DINAMICAMENTE OGGETTI CON CLASSI ECC TRAMITE I FOR IN E GLI ARRAY DI OBJECTS

const slideElements = document.getElementsByClassName('slide') //prendo tutti gli elementi con classe slide.
slideElements[0].classList.add('active')


const leftBtnElement = document.getElementById('arrow-left')

const rightBtnElement = document.getElementById('arrow-right')

console.log(slideElements)
console.log(leftBtnElement, rightBtnElement)

// FUNZIONALITA' AL CLICK DEL BOTTONE DESTRO (PER ANDARE AVANTI)

rightBtnElement.addEventListener('click', function() {
  console.log('slide next', currentIndex)
//USO CONDIZIONE IF ovvero appena arriva al click 6 lei smettera' di andare avanti evitando di dare errore

    //CONDIZIONE IF lunghezza dell'array -1 in modo tale da non dare erroe se vado oltre la sua LUNGHEZZA
  if (currentIndex < slideElements.length-1){

    //nascondere la slide attiva togliendo la classe 'active'
    let currentSlide = slideElements[currentIndex]
    currentSlide.classList.remove('active')

    //incrementare l'indice
    currentIndex += 1

    //spostare classe 'active' e mostrare la slide successiva
    let nextSlide = slideElements[currentIndex]
    nextSlide.classList.add('active')
  }

})


leftBtnElement.addEventListener('click', function() { //la slide attiva deve essere >= a 1 della slide attiva
  console.log('slide back', currentIndex)
  
  if (currentIndex > 0){

    let currentSlide = slideElements[currentIndex]
    currentSlide.classList.remove('active')

    currentIndex -= 1

    let nextSlide = slideElements[currentIndex]
    nextSlide.classList.add('active')
  }

})
