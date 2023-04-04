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

        // const itemButton = document.createElement ('button')
        //     itemButton.innerHTML = item.Film
        //     listItem.appendChild(itemButton)

        
            const itemDetails =
			`
            <div class="description">
				<div class="highlight">
                    <div class="object">
                        <p class="text"> Object: <span>${item.Object}<span></p>
                    </div>
					<div class="des">
                        <p class="text">Film: <span>${item.Film}<span></p>
                        <p class="text">Date: <span>${item.Date}<span></p>
                        <p class="text">Created by/ Director: <span>${item.CreatedbyDirector}<span></p>  
                    </div>
					
				</div>
            <div>
				
			`
		listItem.insertAdjacentHTML('beforeend', itemDetails) // Which can we then insert
    });
    // const createDescription = document.createElement ('description')
    let button = document.button;

    function log(){
        console.log("hello")
    }
    
    button.addEventListener ("click", log)

}
// var objectname = document.querySelector('.objectname');
// // var img = document.querySelector('ObjImg');
// let ul = document.ul;

// function log(){
//     console.timeLog
// }

// ul.addEventListener("click", log);

// function toggle() {
//     if (objectname)

// }


// objectname.addEventListener ("click", toggle);

// addEventListener(click.createDescription)




fetch('collection.json')
	.then(response => response.json())
	.then(collection => {
		// And passes the data to the function, above!
		createCollection(collection) // In reverse order
})
