const createCollection = (collection) => {
    const collectionGrid = document.getElementById('collection');
  
    collection.forEach((item) => {
      const listItem = document.createElement('ul');
  
      collectionGrid.appendChild(listItem);
  
      const itemImage = document.createElement('img');
      itemImage.classList.add("cutout");
      itemImage.style.display = 'none';
      if (item.ObjImg) {
        itemImage.src = item.ObjImg;
        listItem.appendChild(itemImage);
      }

      const itemBlack = document.createElement('img');
      itemBlack.classList.add("blackout");
      itemBlack.style.display = 'block';
      if (item.imgBlack) {
        itemBlack.src = item.imgBlack;
        listItem.appendChild(itemBlack);
      }
  
      const itemDetails = `
        <input type ="Guess" placeholder = "enter guess" class="input">
        <div class="description" style="display:block">
          <div class="highlight">
            <div class="exit"> 
            <p> click to hide </p> 
            </div>
            <div class="object">
              <p class="text"> Object: <span>${item.Object}<span></p>
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
  
    //   <div class="image">
    //   <img src="${item.ObjImg}">
    // </div>      

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
        // window.location.href = '#top';
        title.style.display = 'none';
        challenge.style.display = 'none';

      });
  
      highlight.addEventListener('click', () => {
        highlight.style.display = 'none';
        title.style.display = 'block';
        challenge.style.display = 'block';

      });
      const easy = document.querySelector('.easy');
      const hard = document.querySelector('.hard');
      const cutout = document.querySelectorAll('.cutout');
      const blackout = document.querySelectorAll('.blackout');

      easy.addEventListener('click', () => {
        if (hard.style.backgroundColor = "#F5D9D") {
          hard.removeAttribute('style');
          easy.style.backgroundColor='#FB7F7F';
        } else {
          easy.style.backgroundColor = "#F5D9D"
        }
        cutout.forEach((element) => {
          element.style.display = 'block';
        });
        blackout.forEach((element) => {
          element.style.display = 'none';
        });
      });

      hard.addEventListener('click', () => {
        if (easy.style.backgroundColor = "#FB7F7F") {
          easy.removeAttribute('style');
          hard.style.backgroundColor='#FB7F7F';
        } else {
          easy.style.backgroundColor = "#F5D9D"
        }
        blackout.forEach((element) => {
          element.style.display = 'block';
        });
        cutout.forEach((element) => {
          element.style.display = 'none';
        });
      });
      
      const correct = item.Film;
      const check = document.querySelector('.check');
      const input = document.querySelectorAll('.input');
      // input.style.borderColor = "#97662E";

      const result = document.createElement('div');
      listItem.appendChild(result);

      check.addEventListener('click', () => {
        const inputVal = listItem.querySelector('.input').value.trim().toLowerCase();
        if (inputVal === correct.toLowerCase()) {
          result.textContent = 'Correct!';
          result.style.color = 'green'
          // input.style.borderColor = '#65D30E';
        } else {
          result.textContent = 'Incorrect!';
          result.style.color = 'red'
          // Perform actions for an incorrect guess
        }
      });

      // check.addEventListener('click', () => {
      //   const inputval = input.value.trim(); // Trim whitespace from the input value
      //   input.forEach((element) => {
      //     if (inputval.toLowerCase() === correct.toLowerCase()) {
      //       result.textContent = 'Correct!';
      //       // Perform actions for a correct entry
      //     } else {
      //       result.textContent = 'Incorrect!';
      //       // Perform actions for an incorrect entry
      //     }
      //   });
        
      // });

    });
  };
  
  fetch('collection.json')
    .then((response) => response.json())
    .then((collection) => {
      createCollection(collection);
    });
  