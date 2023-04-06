const createCollection = (collection) => {
    const collectionGrid = document.getElementById('collection');
  
    collection.forEach((item) => {
      const listItem = document.createElement('ul');
  
      collectionGrid.appendChild(listItem);
  
      const itemImage = document.createElement('img');
      if (item.ObjImg) {
        itemImage.src = item.ObjImg;
        listItem.appendChild(itemImage);
      }
  
      const itemDetails = `
        <div class="description" style="display:block">
          <div class="highlight">
            <div class="exit"> 
            <p> click to hide </p> 
            </div>
            <div class="object">
              <p class="text"> Object: <span>${item.Object}<span></p>
            </div>
            <div class="image">
              <img src="${item.ObjImg}">
            </div>
            <div class="des">
              <p class="text">Film: <span>${item.Film}<span></p>
              <p class="text">Date: <span>${item.Date}<span></p>
              <p class="text">Created by/Director: <span>${item.CreatedbyDirector}<span></p>  
              <p class="text">Genre: <span>${item.Genre}<span></p>
            </div>
          </div>
        </div>
      `;
  
      listItem.insertAdjacentHTML('beforeend', itemDetails);
  
      const highlight = listItem.querySelector('.highlight');
      const image = listItem.querySelector('img');
      const title = document.querySelector('.collectiontitle');
      const challenge = document.querySelector('.challenge');
  
      image.addEventListener('click', () => {
        const allHighlights = document.querySelectorAll('.highlight');
        allHighlights.forEach((i) => {
          i.style.display = 'none';
        });
  
        highlight.style.display = 'block';
        window.location.href = '#top';
        title.style.display = 'none';
        challenge.style.display = 'none';

      });
  
      highlight.addEventListener('click', () => {
        highlight.style.display = 'none';
        title.style.display = 'block';
        challenge.style.display = 'block';

      });
    });
  };
  
  fetch('collection.json')
    .then((response) => response.json())
    .then((collection) => {
      createCollection(collection);
    });
  