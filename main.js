const pies = [
    {
        pie: 'Lemon Maringue',
        image: './images/lemon.jpg',
        instructor: 'Callan',
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
        instructor: 'Callan',
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
    document.getElementById(divId).innerHTML = toPrint;
}

const pieBuilder = (piesArray) => {
    let domString = '';
    for (let i = 0; i < piesArray.length; i++) {
        const pieCard = piesArray[i];
        domString += `
        <div class="card">
            <h2>${pieCard.pie}</h2>
            <img src="${pieCard.image}" alt="Image of ${pieCard.pie}" />
        </div>
        `;

    }
    printToDom(domString, 'pie-zone');
}

document.getElementById('Zoe').addEventListener('click', (e) => {
    const instructor = e.target.id;
    const selectedPies = [];
    for (let i = 0; i < pies.length; i++) {
        const newPie = pies[i];
        if (newPie.instructor === instructor) {
            selectedPies.push(newPie);
        }
    }

    pieBuilder(selectedPies);
})

document.getElementById('Michael').addEventListener('click', (e) => {
    const instructor = e.target.id;
    const selectedPies = [];
    for (let i = 0; i < pies.length; i++) {
        const newPie = pies[i];
        if (newPie.instructor === instructor) {
            selectedPies.push(newPie);
        }
    }

    pieBuilder(selectedPies);
})

document.getElementById('Callan').addEventListener('click', (e) => {
    const instructor = e.target.id;
    const selectedPies = [];
    for (let i = 0; i < pies.length; i++) {
        const newPie = pies[i];
        if (newPie.instructor === instructor) {
            selectedPies.push(newPie);
        }
    }

    pieBuilder(selectedPies);
})

document.getElementById('Greg').addEventListener('click', (e) => {
    const instructor = e.target.id;
    const selectedPies = [];
    for (let i = 0; i < pies.length; i++) {
        const newPie = pies[i];
        if (newPie.instructor === instructor) {
            selectedPies.push(newPie);
        }
    }

    pieBuilder(selectedPies);
})

document.getElementById('All').addEventListener('click', (e) => {
    const instructor = e.target.id;
        if (instructor === 'All') {
            pieBuilder(pies);
        }
})

// pieBuilder(pies);

//Buttonclick event example

const buttonClick = (e) => {
    const instructor = e.target.id;
    const selectedPies = [];
    for (let i = 0; i < pies.length; i++) {
        const newPie = pies[i];
        if (newPie.instructor === instructor) {
            selectedPies.push(newPie);
        }
    }

    pieBuilder(selectedPies);
}

document.getElementById('All').addEventListener('click', buttonClick);