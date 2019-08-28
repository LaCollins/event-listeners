const pies = [
    {
        pie: 'Lemon Maringue',
        image: './images/lemon.jpg',
        instructor: 'Callen',
        iceCream: 'Lemon Sorbet'
    },
    {
        pie: 'Keylime Pie',
        image: './images/keylime.jpg',
        instructor: 'Michael',
        iceCream: 'none'
    },
    {
        pie: 'Cherry Pie',
        image:  './images/cherry.jpg',
        instructor: 'Michael',
        iceCream: 'Chocolate'
    },
    {
        pie: 'Pecan Pie',
        image:  './images/pecan.jpg',
        instructor: 'Callen',
        iceCream: 'Vanilla'
    },
    {
        pie: 'Mississippi Mud Pie',
        image:  './images/mud.jpeg',
        instructor: 'Zoe',
        iceCream: 'Coffee'
    },
    {
        pie: 'Apple Pie',
        image:  './images/apple.jpg',
        instructor: 'Zoe',
        iceCream: 'Vanilla'
    }

]

const printToDom = (toPrint, divId) => {
    document.getElementById(divId).innerHTML += toPrint;
}

const pieBuilder = (piesArray) => {
    for (let i = 0; i < piesArray.length; i++) {
        const pieCard = piesArray[i];
        const domString = `
        <div class="card">
            <h2>${pieCard.pie}</h2>
            <img src="${pieCard.image}" alt="Image of ${pieCard.pie}" />
        </div>
        `;
        printToDom(domString, 'pie-zone');
    }
}

pieBuilder(pies);