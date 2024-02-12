export function listing() {
    let listing = [
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
    ]
    
    let manageListContianer = document.getElementById('manage-list');
    
    listing.forEach(item =>{
        let listItem = document.createElement('div');
        listItem.classList.add('manage-list-item');
        listItem.innerHTML = `
            <div class="manage-list-item-animation">
                <img src="images/${item.image}" class="manage-list-item-img">
                <div class="manage-list-item-edits">
                    <span class="material-icons gray-span" title="View">preview</span>
                    <span class="material-icons green-span" title="Edit">done</span>
                    <span class="material-icons red-span delete-btn" title="Delete">close</span>
                </div>
            </div>
            <p class="manage-list-item-title">${item.name}</p>
            <p class="manage-list-item-paragraph">${item.description}</p>
            <hr>
            <div class="manage-list-item-bottom">
                <p>${item.currency}${item.price}/night</p>
                <div class="manage-list-item-bottom-right">
                    <span class="material-icons gray-span" title="Delete">location_on</span>
                    <p>${item.location.city}, ${item.location.country}</p>
                </div>
            </div>
        `;
    
        manageListContianer.appendChild(listItem);
    
        listItem.querySelector('.delete-btn').addEventListener('click', () => {
            manageListContianer.removeChild(listItem);
        });
    });
    }