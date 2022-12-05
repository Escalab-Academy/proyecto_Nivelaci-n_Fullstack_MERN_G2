const perifericos = [
    {
        grid: 'item1',
        name: 'teclado mecanico',
        price: '50',
        img: 'teclado-mecanico.png'
    },
    {
        grid: 'item2',
        name: 'Silla gaming',
        price: '200',
        img: 'silla-gaming.jpg'
    },
    {
        grid: 'item3',
        name: 'Microfono',
        price: '75',
        img: 'microfono.jpg'
    },
    {
        grid: 'item4',
        name: 'Monitor',
        price: '250',
        img: 'monitor-gaming.jpg'
    },
    {
        grid: 'item5',
        name: 'Mouse gaming',
        price: '25',
        img: 'mouse-gaming.jpg'
    },
    {
        grid: 'item6',
        name: 'Luces RGB',
        price: '20',
        img: 'luces-rgb.jpg'
    }
];

const pc = [
    {
        grid: 'item1',
        name: 'Pc started',
        price: '300',
        img: 'pc-started.jpg'
    },
    {
        grid: 'item2',
        name: 'Mac Mini',
        price: '1000',
        img: 'mac-mini.jpg'
    },
    {
        grid: 'item3',
        name: 'Pc monster gaming',
        price: '750',
        img: 'pc-monster-gaming.png'
    },
    {
        grid: 'item4',
        name: 'Pc big weigths',
        price: '1200',
        img: 'pc-big-weigths.jpg'
    },
    {
        grid: 'item5',
        name: 'Pc all in one',
        price: '250',
        img: 'pc-all-in-one.jpg'
    },
    {
        grid: 'item6',
        name: 'Portatil ligth',
        price: '500',
        img: 'portatil-ligth.jpg'
    }
];

const propsSections = [
    {
        title: 'Perifericos',
        products: perifericos,
        target: 'periferic'
    },
    {
        title: 'Computadoras',
        products: pc,
        target: 'pc'
    }
];

export { propsSections };
