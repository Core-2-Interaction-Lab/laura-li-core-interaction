const createCollection = (collection) => {
    const collectionGrid = document.getElementById('collection');
  
    collection.forEach((item) => {
      const listItem = document.createElement('ul');
      collectionGrid.appendChild(listItem);

  
      const itemDetails = `
        <div class="description">
        <div">Added by: ${item.addedBy}</div>
        <div">Page URL: ${item.pageURL}</div>
        <br>
        <img src="${item.Image}" class="img">
        <br>
        <div">Image Caption: ${item.imgCaption}</div>
        </div>
        
      `;
      listItem.insertAdjacentHTML('beforeend', itemDetails);


    });
  };
  
  fetch('wiki.json')
    .then((response) => response.json())
    .then((collection) => {
      createCollection(collection);
    });
  