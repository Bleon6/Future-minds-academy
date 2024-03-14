export function notification() {

let notificationBox = document.getElementById('notification-box');
let notificationNum = document.getElementById('notificationNum');

let notification = ['hello', 'hello1', 'hello2'];

let storedNotification = localStorage.getItem('notification');
    if (storedNotification) {
        notification = JSON.parse(storedNotification);
    } else {
        localStorage.setItem('notification', JSON.stringify(notification));
    }

let count = 0;

notification.forEach(item =>{
    count++;
    let li = document.createElement('li');
    let p = document.createElement('p');

    p.textContent=item;
    notificationNum.textContent = count;

    notificationBox.appendChild(li);
    li.appendChild(p);
});

document.getElementById('notification').addEventListener('click', ()=>{
    notificationBox.classList.toggle('remove');

})
}