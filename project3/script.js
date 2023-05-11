// const createCollection = (collection) => {
//     const collectionGrid = document.getElementById('fullCollection');
  
//     collection.forEach((item) => {
//       const listItem = document.createElement('ul');
  
//       collectionGrid.appendChild(listItem);

//       const itemDetails = `
//         <div class="name">
//             <p><span>${item.name}<span><p>
//         <div>
//       `;
                                        
//       listItem.insertAdjacentHTML('beforeend', itemDetails);


//     });
//   };




  
//   fetch('eateries.json')
//     .then((response) => response.json())
//     .then((collection) => {
//       createCollection(collection);
//     })
//     console.log("hello");
  


window.addEventListener('DOMContentLoaded', function() {
  const screenHeight = window.innerHeight;
  const container = document.getElementById('container');
  const containerHeight = container.clientHeight;
  const scrollToMiddle = (containerHeight - screenHeight) / 2;
  window.scrollTo(0, scrollToMiddle);
});

const whatisthis = document.querySelector('.whatisthis');
const descriptions = document.querySelectorAll('.description');


whatisthis.addEventListener('click', () => {
  descriptions.forEach(description => {
    if (description.style.display === "none") {
      whatisthis.style.backgroundColor='#3A752D';
      whatisthis.style.color='white';
      description.style.display = "block";
    } else {
      whatisthis.removeAttribute('style');
      description.style.display = "none";
    }
  });
});
