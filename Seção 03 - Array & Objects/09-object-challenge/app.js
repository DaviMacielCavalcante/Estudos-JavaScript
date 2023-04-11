const library = [
    {
        title: 'Call of Cthulhu',
        author: 'HP Lovecraft',
        status: {
            own: true,
            reading: false,
            read: false
        }
    },
    {
        title: 'Frankstein',
        author: 'Mary Shelley',
        status: {
            own: true,
            reading: false,
            read: false
        }
    },
    {
        title: 'Clean Code',
        author: 'Someone',
        status: {
            own: true,
            reading: false,
            read: false
        }
    }
];

for (let i = 0; i < library.length; i++) {
    library[i].status.read = true;
};

const {title: firstBook, author, status} = library[0];

const strJSONLibrary = JSON.stringify(library);

console.log(strJSONLibrary);