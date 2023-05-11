const createNames = (names) => {
    const nameList = document.getElementById('allnames');

    names.forEach((item) => {
        if (item.type_name.includes('Restaurant')) {
            const nameEntry = document.createElement('ul');
            nameList.appendChild(nameEntry);

            const details = `
                <div class="nameentry" style="display:none;"> <!-- Added class name "nameentry" -->
                    <li><span>${item.name}</span></li>
                </div>
            `;

            nameEntry.insertAdjacentHTML('beforeend', details);
        }
    });
};

const createData = (data) => {
    const dataViz = document.getElementsByClassName('commonnames')[0]; // Use [0] to access the first element of the collection

    data.forEach((item) => {
        const topThree = document.createElement('div');
        topThree.className = 'bluesection'; // Add a class name to the created element
        topThree.innerHTML = '<h1></h1>'; // Set the content of the created element

        dataViz.appendChild(topThree);
    });
};

fetch('../../eateries.json')
    .then((response) => response.json())
    .then((names) => {
        createNames(names);
    });

console.log("hello");

const showAll = document.querySelector('.tab1');
const tabsection = document.querySelector('.tabsection')

showAll.addEventListener('click', () => {
    const names = document.querySelectorAll('.nameentry'); // Select elements with class name "nameentry"

    names.forEach(name => {
        if (name.style.display == "none") {
            name.style.display = "block";
            tabsection.scrollIntoView({block: 'start'});
            showAll.style.color='#E0BC00';
        } else {
            name.style.display = "none";
            showAll.removeAttribute('style');
        }
    });
});

const about = document.querySelector('.tab3');

about.addEventListener('click', () => {
    const names = document.querySelectorAll('.about');

    names.forEach(name => {
        if (name.style.display === "none") {
            name.style.display = "block";
        } else {
            name.style.display = "none";
        }
    });
});
