const createCollection = (collection) =>{
    const collectionGrid = document.getElementById('collection');

    collection.forEach (item => {
        const listItem = document.createElement('ul')

        collectionGrid.appendChild(listItem)

        // const itemFilm = document.createElement ('h2')
        // itemFilm.innerHTML = item.Film
        // listItem.appendChild(itemFilm)

        const itemImage = document.createElement ('img') 
        if (item.ObjImg) {
            itemImage.src = item.ObjImg
            listItem.appendChild(itemImage)
        }  
     

        
    });

}


fetch('collection.json')
	.then(response => response.json())
	.then(collection => {
		// And passes the data to the function, above!
		createCollection(collection) // In reverse order
})

const itemBalloon = document.createElement('balloon')
itemBalloon.src = item.itemBalloon
listItem.appendChild(itemBalloon)

