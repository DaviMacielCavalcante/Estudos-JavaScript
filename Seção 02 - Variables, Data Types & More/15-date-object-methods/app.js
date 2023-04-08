let x;
let d = new Date();

x = d.toString();

x = d.getTime();
x = d.valueOf();

x = d.getFullYear();

// A contagem começa em zero
x = d.getMonth() +1;

x = d.getDate();

// A contagem começa em zero
x = d.getDay() + 1;

x = d.getHours();

x = d.getMinutes();

x = d.getSeconds();

x = d.getMilliseconds();

x = `${d.getFullYear()}-${d.getMonth() + 1}-${d.getDate()}`;

x = Intl.DateTimeFormat('pt-BR').format(d);

x = Intl.DateTimeFormat('default', { month: 'long'}).format(d);

x = d.toLocaleString();

x = d.toLocaleString('default', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    minute: 'numeric',
    second: 'numeric'
});

x = d.toLocaleString('default', {
    weekday: 'long',
    year: 'numeric',
    month: 'numeric',
    day: 'numeric',
    hour: 'numeric',
    minute: 'numeric',
    second: 'numeric'
});


console.log(x);