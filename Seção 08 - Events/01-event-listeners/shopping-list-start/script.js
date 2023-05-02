const clearBtn = document.querySelector('#clear');

function onClear() {
    const ul = document.querySelector('ul');
    ul.querySelectorAll('li').forEach(item => {
        item.remove();
    });

    // Outra forma interessante de fazer isso
    // while (ul.firstChild) {
    //     ul.removeChild(ul.firstChild);
    // }
};

// JavaScript Event Listener
// clearBtn.onclick = function () {
//     alert('Clear Items');
// };

// addEventListener
// clearBtn.addEventListener('click',  () =>
//     alert('Clear Items')
// );
clearBtn.addEventListener('click', onClear);

// setTimeout(() => clearBtn.removeEventListener('click', onClear), 5000);

// setTimeout(() => clearBtn.click(), 5000);