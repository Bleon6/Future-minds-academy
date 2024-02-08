// save 5 notifications to local storage
console.log('I am notification.js');
let defaultNotifications=[
    "New message from John Doe",
    "Someone viewed your profile",
    "John Doe sent a message",
    "John Doe wants to connect",
    "hello",
    "hello"

    

];

localStorage.setItem("notifications", JSON.stringify(defaultNotifications));
//i lexojme prej local storage notificatoions
let notifications =JSON.parse(localStorage.getItem('notifications'));

//i vendosim ne html
let listElement=document.getElementById('notifications');
notifications.forEach((notification)=> {
    let el =document.createElement('a');
    el.href = '#';
    el.textContent=notification;
    listElement.appendChild(el);

    
})

//e ndreqim numrin  e notifications
listElement.parentElement.setAttribute('data-notifications', notifications.length);

    

let dropdownElement = document.getElementById('notificationDropdown');
    dropdownElement.addEventListener('click', function () {
    
    listElement.style.display = (listElement.style.display === 'block') ? 'none' : 'block';
});