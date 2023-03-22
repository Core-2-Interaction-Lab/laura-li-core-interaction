// const wikiData = [
//     {
//         'title': 'Hazel dormouse', 
//         'url': 'https://en.wikipedia.org/wiki/Hazel_dormouse',
//         'date': '26 February 2023'
//     }
// ];

const createCollection = (collection) =>{
    const collectionGrid = document.getElementById('collection');

    collection.forEach (item => {
        const listItem = document.createElement('li')

        const itemFilm = document.createElement ('h2')
        itemFilm.innerHTML = item.Film
        listItem.appendChild(itemFilm)

        const itemImage = document.createElement ('img')   
        itemImage.src = item.objImg
        listItem.appendChild(itemImage)

        
    });

}


fetch('collection.json')
	.then(response => response.json())
	.then(collection => {
		// And passes the data to the function, above!
		createCollection(collection) // In reverse order
})

