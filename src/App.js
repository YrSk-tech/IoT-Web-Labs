import './App.css';
import Navbar from './components/Navbar/Navbar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './components/pages/Home';
import Catalog from './components/pages/Catalog';
import Cart from './components/pages/Cart';
import Footer from './components/Footer/Footer';
import ItemDetails from './components/pages/ItemDetails/ItemDetails';

function App() {
    return ( <
        >
        <
        Router >
        <
        Navbar / >
        <
        Switch >
        <
        Route path = '/'
        exact component = { Home }
        /> <
        Route path = '/catalog' >
        <
        Catalog list = { items }
        /> <
        /Route> <
        Route path = '/item/:id' >
        <
        ItemDetails list = { items }
        /> <
        /Route> <
        Route path = '/cart'
        exact component = { Cart }
        /> <
        /Switch> <
        Footer / >
        <
        /Router> <
        />
    );
}

export default App;

const items = [{
        id: 1,
        type: 'pencil',
        condition: 'New',
        header: 'SINGLE BARREL 106',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium accusantium doloremque porro quibusdam sapiente, animi consectetur impedit molestiae aperiam iste quisquam dignissimos optio recusandae consequatur velit architecto deleniti. Adipisci, fuga.',
        price: 1.39,
        alt: 'pencil',
        img: 'https://cdn.shopify.com/s/files/1/0027/1089/6705/products/SingleBarrelAngle_1024x1024@2x.jpg?v=1573499020'
    },
    {
        id: 2,
        type: 'pen',
        condition: 'Used',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium accusantium doloremque porro quibusdam sapiente, animi consectetur impedit molestiae aperiam iste quisquam dignissimos optio recusandae consequatur velit architecto deleniti. Adipisci, fuga.',
        header: 'YAKIHAKU Portable Ballpoint Pen',
        price: 159.99,
        alt: 'pen',
        img: 'https://cdn.shopify.com/s/files/1/0265/1930/6298/products/E9_87_91_E7_AE_94_E7_99_BD_E8_83_8C_900x.jpg?v=1589897798'
    },
    {
        id: 3,
        type: 'pen',
        condition: 'Used',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium accusantium doloremque porro quibusdam sapiente, animi consectetur impedit molestiae aperiam iste quisquam dignissimos optio recusandae consequatur velit architecto deleniti. Adipisci, fuga.',
        header: 'Rollerball Pen',
        price: 59.99,
        alt: 'pen',
        img: 'https://cdn.shopify.com/s/files/1/0265/1930/6298/products/CLASSIC_STAT-02_ROLLERBALL_PEN_A_900x.jpg?v=1589897850'
    },
    {
        id: 4,
        type: 'pen',
        condition: 'New',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium accusantium doloremque porro quibusdam sapiente, animi consectetur impedit molestiae aperiam iste quisquam dignissimos optio recusandae consequatur velit architecto deleniti. Adipisci, fuga.',
        header: 'Schmidt 5888F Rollerball Refill',
        price: 5,
        alt: 'pen',
        img: 'https://cdn.shopify.com/s/files/1/0265/1930/6298/products/6830238_900x.jpg?v=1589897956'
    },
    {
        id: 5,
        type: 'paper clip',
        condition: 'Used',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium accusantium doloremque porro quibusdam sapiente, animi consectetur impedit molestiae aperiam iste quisquam dignissimos optio recusandae consequatur velit architecto deleniti. Adipisci, fuga.',
        header: 'Paper Clip 28mm Steel Box 100',
        price: 1.44,
        alt: 'paper clip',
        img: 'https://image.nxp.nz/pi/a8/50a118401b853cbca8302d4111625f7ec019d3-61860/large.jpg'
    },
    {
        id: 6,
        type: 'eraser',
        condition: 'New',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium accusantium doloremque porro quibusdam sapiente, animi consectetur impedit molestiae aperiam iste quisquam dignissimos optio recusandae consequatur velit architecto deleniti. Adipisci, fuga.',
        header: 'Universal Runner Double/Eraser',
        price: 2.06,
        alt: 'eraser',
        img: 'https://images-na.ssl-images-amazon.com/images/I/81ug8IEIWIL._AC_SL1500_.jpg'
    },
    {
        id: 7,
        type: 'glue',
        condition: 'New',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium accusantium doloremque porro quibusdam sapiente, animi consectetur impedit molestiae aperiam iste quisquam dignissimos optio recusandae consequatur velit architecto deleniti. Adipisci, fuga.',
        header: 'Cabela\'s Prodigy Ice Spinning Combo',
        price: 9.99,
        alt: 'glue',
        img: 'https://img.joomcdn.net/97197c3302319e2acca1c4107f767fe77683eb5d_original.jpeg'
    },
    {
        id: 8,
        type: 'glue',
        condition: 'New',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium accusantium doloremque porro quibusdam sapiente, animi consectetur impedit molestiae aperiam iste quisquam dignissimos optio recusandae consequatur velit architecto deleniti. Adipisci, fuga.',
        header: 'Forpus white office glue 120 ml',
        price: 0.81,
        alt: 'glue',
        img: 'https://www.officeday.lv/images/1/200-01948/forpus-white-office-glue-120-ml.jpg'
    }
];