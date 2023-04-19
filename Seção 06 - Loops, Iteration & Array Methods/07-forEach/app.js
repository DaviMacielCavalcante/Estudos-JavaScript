const socials = ['Twitter', 'Facebook', 'LinkedIn', 'Instagram'];

// socials.forEach(function (item) {
//     console.log(item);
// });

// socials.forEach((item) => {
//     console.log(item);
// });

socials.forEach((item, index, arr) => {
    console.log(`${index} - ${item}`, arr);
});

function logSocials(social) {
    console.log(social);
};

socials.forEach(logSocials);

const socialObjs = [
    {name: 'Twitter', url: 'http://twitter.com'},
    {name: 'Facebook', url: 'http://facebook.com'},
    {name: 'Linkedin', url: 'http://linkedin.com'},
    {name: 'Instagram', url: 'http://instagram.com'},
];

socialObjs.forEach((item) => console.log(item.url));