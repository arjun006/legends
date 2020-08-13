//const { doc } = require('prettier');

/* Add any JavaScript you need to this file. */
var products = [
  {
    name: '2003 Lebron James Cleveland Caveliers',
    image: 'images/lbj.jpg',
    category: 'basketball',
    description:
      'Authentic, signed Lebron James jersey from his rookie year with the Cleavland Cavaliers',
    price: 4099.99,
    qty: 0,
    featured: false
  },
  {
    name: '2010 Lionel Messi FC Barcelone ',
    image: 'images/messi.jpg',
    category: 'soccer',
    description: 'Authentic Messi jersey from Barcelon UEFA Championship.',
    price: 799.99,
    qty: 0,
    featured: true
  },
  {
    name: '1996 Michael Jordan Chicago Bulls',
    image: 'images/jordon.jpg',
    category: 'basketball',
    description: 'Game worn Michael Jordon jersey from the Bulls 1996-97 NBA finals.',
    price: 18499.99,
    qty: 0,
    featured: true
  },
  {
    name: '2015 Didier Drogba Chelsea',
    image: 'images/drogba.jpeg',
    category: 'soccer',
    description: "Jersey from Drogba's final season with Chelsea.",
    price: 459.99,
    qty: 0,
    featured: false
  },
  {
    name: '2017 Neymar Jr. Paris St. Germain',
    image: 'images/neymar.jpg',
    category: 'soccer',
    description: 'Neymar game worn jersey from his first game with PSG.',
    price: 1000.99,
    qty: 0,
    featured: false
  },
  {
    name: '2004 Kobe Bryant #8 Los Angeles Lakers',
    image: 'images/kobe_8.jpg',
    category: 'basketball',
    description: "Kobe Bryant's final year wearing n0. 8 for the Lakers.",
    price: 699.99,
    qty: 0,
    featured: true
  },
  {
    name: '2004 Alexander Ovechkin \n Washinton Capitals',
    image: 'images/ovechkin.jpeg',
    category: 'hockey',
    description: 'Ovi jersey from rookie year with Washing Capitals.',
    price: 779.99,
    qty: 0,
    featured: false
  },
  {
    name: '2009 Kobe Bryant #24 Los Angeles Lakers',
    image: 'images/kobe_24.jpg',
    category: 'basketball',
    description: 'Kobe Bryant #24 jersey from the LA Lakers champiship run in the 2009-10 season.',
    price: 889.99,
    qty: 0,
    featured: false
  },
  {
    name: '2003 David Beckham Manchester United',
    image: 'images/beckham.jpg',
    category: 'soccer',
    description: "Authentic jersey from David Beckham's final game with Man U.",
    price: 999.99,
    qty: 0,
    featured: false
  },
  {
    name: '2019 Kawhi Leonard Raptors',
    image: 'images/leonard.jpg',
    category: 'basketball',
    description:
      'Kawhi Leonard jersey from Game 6 of the Eastern Conference Finals vs the Milwuakee Bucks.',
    price: 625.99,
    qty: 0,
    featured: false
  },
  {
    name: '2003 Ray Allen Seattle SuperSonics',
    image: 'images/allen.jpeg',
    category: 'basketball',
    description: 'Ray Allen jersey from his time with the Seattle SuperSonics.',
    price: 2055.99,
    qty: 0,
    featured: false
  },
  {
    name: '1984 Wayne Gretzky Edmonton Oilers',
    image: 'images/gretzky.jpg',
    category: 'hockey',
    description: 'Signed authentic Wayne Gretzky jeresey from the Edmonton Oilers Stanley Cup win.',
    price: 9999.99,
    qty: 0,
    featured: false
  },
  {
    name: '1989 Teamu Selanne Winnipeg Jets',
    image: 'images/selanne.jpeg',
    category: 'hockey',
    description: "Teamu Selanne's rookie jersey with the Winnipeg Jets.",
    price: 700.99,
    qty: 0,
    featured: false
  },
  {
    name: '2019 Cristiano Ronaldo Juventus',
    image: 'images/ronaldo.jpg',
    category: 'soccer',
    description: 'Signed Ronaldo jersey from his first season at Juventus.',
    price: 8577.99,
    qty: 0,
    featured: false
  },

  {
    name: '2004 Mats Sundin Toronto Maple Leafs',
    image: 'images/sundin.jpg',
    category: 'b',
    description: '#13 Mats Sundin jersey from the Leafs Playoff run in 2004.',
    price: 819.99,
    qty: 0,
    featured: false
  },
  {
    name: '2002 Ronaldinho Brazil',
    image: 'images/ronaldhino.jpg',
    category: 'soccer',
    description: 'Game worn Ronald Ronaldinho jersey from 2002 FIFA world cup win.',
    price: 10099.99,
    qty: 0,
    featured: false
  },
  {
    name: '1986 Diego Maradona Argentina',
    image: 'images/maradona.jpg',
    category: 'soccer',
    description: 'Maradona jersey worn during the hand of god game.',
    price: 6099.99,
    qty: 0,
    featured: false
  },
  {
    name: '1992 Mario Lemieux Pittsburgh Penguins',
    image: 'images/lemieux.jpg',
    category: 'hockey',
    description: "Signed Lemieux jersey from his first Stanley Cup win in '92",
    price: 329.99,
    qty: 0,
    featured: false
  },
  {
    name: '1962 Pele Brazil',
    image: 'images/pele.jpg',
    category: 'soccer',
    description: 'Pele game jersey from 1962 FIFA championship.',
    price: 1962.99,
    qty: 0,
    featured: false
  },

  {
    name: '2009 Sidney Crosby Pittsburgh Penguins Jersey',
    image: 'images/crosby.jpg',
    category: 'hockey',
    description: 'Sid the kid jersey from his first Stanley Cup win.',
    price: 299.99,
    qty: 0,
    featured: true
  }
];
function banner(name) {
  var banner_container = document.querySelector('#banner');
  var banner = document.createElement('div');
  banner.className = 'banner';
  banner.innerHTML = name;
  banner_container.appendChild(banner);
}
function createCard(i) {
  var id = document.querySelector('#card-container');
  var card = document.createElement('div');
  card.className = 'card';
  var imgDiv = document.createElement('div');
  imgDiv.className = 'img-container';
  var img = document.createElement('img');
  imgDiv.appendChild(img);
  var p = document.createElement('p');
  var h4 = document.createElement('h3');
  var btn = document.createElement('BUTTON');
  btn.className = 'add';
  btn.innerHTML = 'Add to Cart';

  id.appendChild(card);
  img.src = products[i].image;

  img.className = 'product-image';
  card.appendChild(imgDiv);
  var name = document.createTextNode(products[i].name);
  h4.appendChild(name);
  card.appendChild(h4);
  p.className = 'price';
  var price = document.createTextNode('$' + products[i].price + ' CAD');
  p.appendChild(price);
  card.appendChild(p);
  var desc = document.createTextNode(products[i].description);
  card.appendChild(p);
  card.appendChild(desc);
  card.appendChild(btn);
}
window.onload = function() {
  var home = document.querySelector('#home');
  home.addEventListener('click', function() {
    document.querySelector('#home').href = 'index.html';
    document.querySelector('#home').href = '#';
    document.getElementById('banner').innerHTML = '';
    banner('Featured');
    document.getElementById('card-container').innerHTML = '';
    for (var i = 0; i < products.length; i++) {
      if (products[i].featured === true) {
        createCard(i);
      }
    }
  });
  var nba = document.querySelector('#nba');
  nba.addEventListener('click', function() {
    document.getElementById('banner').innerHTML = '';
    banner('NBA Legends');
    document.getElementById('card-container').innerHTML = '';
    for (var i = 0; i < products.length; i++) {
      if (products[i].category === 'basketball') {
        createCard(i);
      }
    }
  });
  var soccer = document.querySelector('#soccer');
  soccer.addEventListener('click', function() {
    document.getElementById('banner').innerHTML = '';
    banner('Soccer Greats');
    document.getElementById('card-container').innerHTML = '';
    for (var i = 0; i < products.length; i++) {
      if (products[i].category === 'soccer') {
        createCard(i);
      }
    }
  });

  var nhl = document.querySelector('#nhl');
  nhl.addEventListener('click', function() {
    document.getElementById('banner').innerHTML = '';
    banner('NHL Legends');
    document.getElementById('card-container').innerHTML = '';
    for (var i = 0; i < products.length; i++) {
      if (products[i].category === 'hockey') {
        createCard(i);
      }
    }
  });
  var all = document.querySelector('#all');
  all.addEventListener('click', function() {
    document.getElementById('banner').innerHTML = '';
    banner('All Legends');
    document.getElementById('card-container').innerHTML = '';
    for (var i = 0; i < products.length; i++) {
      createCard(i);
    }
  });
  banner('Featured');
  for (var i = 0; i < products.length; i++) {
    if (products[i].featured === true) {
      createCard(i);
    }
  }
};
