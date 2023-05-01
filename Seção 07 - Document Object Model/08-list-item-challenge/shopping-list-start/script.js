const newItem = document.createElement('li');
const newText = document.createTextNode('Gatos');
newItem.appendChild(newText);

const newItemButton = document.createElement('button');

newItemButton.className = 'remove-item btn-link text-red';

const newI = document.createElement('i');

newI.className = 'fa-solid fa-xmark';

newItemButton.appendChild(newI);

newItem.appendChild(newItemButton);

document.querySelector('ul').appendChild(newItem);