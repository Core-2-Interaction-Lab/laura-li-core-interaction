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
  // const container = document.querySelector('.container');
  // const screenHeight = window.innerHeight;
  // const containerHeight = container.clientHeight;

  // const scrollToMiddle = (screenHeight - containerHeight) / 2;
  window.scrollTo(0, 3600);
});

