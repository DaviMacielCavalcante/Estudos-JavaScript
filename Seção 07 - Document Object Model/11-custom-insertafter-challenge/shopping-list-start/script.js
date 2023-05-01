const li = document.createElement('li');
li.textContent = 'Insert Me After!';

const firstItem = document.querySelector('li:first-child');

function insertAfter(newItem, parentItem) {
    parentItem.insertAdjacentElement('afterend', newItem);
};

insertAfter(li, firstItem);