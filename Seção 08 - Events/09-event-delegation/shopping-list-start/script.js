const listItem = document.querySelectorAll('li');
const list = document.querySelector('ul');

// listItem.forEach(item => {
//     item.addEventListener('click', e => {
//         e.target.remove();
//     });
// });

list.addEventListener('click', (e) => {
    if (e.target.tagName === 'LI') {
        e.target.remove();
    }
});

list.addEventListener('mouseover', (e) => {
    if (e.target.tagName === 'LI') {
        e.target.style.color = 'red';
    }
});