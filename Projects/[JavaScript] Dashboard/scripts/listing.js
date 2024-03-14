export function list() {
    let defaultListings = [
        {
            id: 1,
            image:'card-1.jpeg',
            name: 'Cozy 5 Stars Apartment',
            description: 'A short description',
            price: 899,
            currency: '$',
            location: {
                city: 'Barcelona',
                country: 'Spain'
            }
        },
        {
            id: 2,
            image:'card-2.jpeg',
            name: 'Office Studio',
            description: 'A short description',
            price: 1119,
            currency: '$',
            location: {
                city: 'London',
                country: 'UK'
            }
        },
        {
            id: 3,
            image:'card-3.jpeg',
            name: 'Beautiful Castle',
            description: 'A short description',
            price: 459,
            currency: '$',
            location: {
                city: 'Milan',
                country: 'Italy'
            }
        },
    ];

    let listing;

    if (localStorage.getItem('listings')) {
        listing = JSON.parse(localStorage.getItem('listings'));
        if (listing.length === 0)
            listing = defaultListings;
    } else {
        listing = defaultListings;
        localStorage.setItem('listings', JSON.stringify(listing));
    }

    let manageListContainer = document.getElementById('manage-list');

    listing.forEach(item =>{
        let listItem = document.createElement('div');
        listItem.classList.add('manage-list-item');
        listItem.innerHTML = `
            <div class="manage-list-item-animation">
                <img src="images/${item.image}" class="manage-list-item-img">
                <div class="manage-list-item-edits">
                    <span class="material-icons gray-span" title="View">preview</span>
                    <span class="material-icons green-span edit-btn" title="Edit">done</span>
                    <span class="material-icons red-span delete-btn" title="Delete">close</span>
                </div>
            </div>
            <p class="manage-list-item-title" contenteditable="false">${item.name}</p>
            <p class="manage-list-item-paragraph" contenteditable="false">${item.description}</p>
            <hr>
            <div class="manage-list-item-bottom">
                <p class="manage-list-item-price" contenteditable="false">${item.currency}${item.price}/night</p>
                <div class="manage-list-item-bottom-right">
                    <span class="material-icons gray-span" title="Delete">location_on</span>
                    <p class="manage-list-item-location" contenteditable="false">${item.location.city}, ${item.location.country}</p>
                </div>
            </div>
        `;

        manageListContainer.appendChild(listItem);

        let editBtn = listItem.querySelector('.edit-btn');
        editBtn.addEventListener('click', () => {

            if(editBtn.textContent == 'save'){

                editBtn.textContent = 'done';
                editBtn.classList.add='red-span';

            }
            else{

                editBtn.textContent = 'save';
                editBtn.classList.add='green-span';
                
            }

            listItem.querySelectorAll('[contenteditable="false"]').forEach(element => {
                element.contentEditable = true;
            });
            
            listItem.querySelectorAll('[contenteditable="false"]').forEach(element => {
                element.addEventListener('blur', () => {
                    if(element.classList.contains('manage-list-item-title')) {
                        item.name = element.innerText;
                    } else if(element.classList.contains('manage-list-item-paragraph')) {
                        item.description = element.innerText;
                    } else if(element.classList.contains('manage-list-item-price')) {
                        let priceText = element.innerText;
                        item.price = parseInt(priceText.substring(1, priceText.indexOf('/')));
                    } else if(element.classList.contains('manage-list-item-location')) {
                        let locationText = element.innerText.split(', ');
                        item.location.city = locationText[0];
                        item.location.country = locationText[1];
                    }
                    updateLocalStorage(listing);
                });
            });
        });

        listItem.querySelector('.delete-btn').addEventListener('click', () => {
            let itemId = item.id;
            removeItemFromLocalStorage(itemId);
            manageListContainer.removeChild(listItem);
            listing = listing.filter(listingItem => listingItem.id !== itemId);
            updateLocalStorage(listing);
        });
    });
}

function removeItemFromLocalStorage(id) {
    let storedListing = JSON.parse(localStorage.getItem('listings'));
    let updatedListing = storedListing.filter(item => item.id !== id);
    localStorage.setItem('listings', JSON.stringify(updatedListing));
}

function updateLocalStorage(listing) {
    localStorage.setItem('listings', JSON.stringify(listing));
}
