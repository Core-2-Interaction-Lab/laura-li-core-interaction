const createCollection = (collection) => {
    const collectionGrid = document.getElementById('fullCollection');
  
    collection.forEach((item) => {
      const listItem = document.createElement('ul');
  
      collectionGrid.appendChild(listItem);

      const itemDetails = `
        <div class="name">
            <p><span>${item.name}<span><p>
        <div>
      `;
                                        
      listItem.insertAdjacentHTML('beforeend', itemDetails);


    });
  };

  // const 
  
  fetch('eateries.json')
    .then((response) => response.json())
    .then((collection) => {
      createCollection(collection);
    })
    console.log("hello");
  
