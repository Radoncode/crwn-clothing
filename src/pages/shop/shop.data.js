const SHOP_DATA = [
    {
        id: 1,
        title: 'Hats',
        routeName: 'hats',
        items: [
          {
            id: 1,
            name: 'Brown Brim',
            imageUrl: 'https://images.unsplash.com/photo-1529958030586-3aae4ca485ff?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8aGF0c3xlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
            //imageUrl: "/images/shop-img/hats/brown-brim.png",
            price: 25
          },
          {
            id: 2,
            name: 'Blue Beanie',
            imageUrl: 'https://images.unsplash.com/photo-1572307480813-ceb0e59d8325?ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8aGF0c3xlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
            //imageUrl: "/images/shop-img/hats/blue-beanie.png",
            price: 18
          },
          {
            id: 3,
            name: 'Brown Cowboy',
            imageUrl: 'https://images.unsplash.com/photo-1585095949331-5feb1219fd9f?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8aGF0c3xlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
            //imageUrl: "/images/shop-img/hats/brown-cowboy.png",
            price: 35
          },
          {
            id: 4,
            name: 'Grey Brim',
            imageUrl: 'https://images.unsplash.com/photo-1485726696757-76885c99f0f5?ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8aGF0c3xlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
            //imageUrl: "/images/shop-img/hats/grey-brim.png",
            price: 25
          },
          {
            id: 5,
            name: 'Green Beanie',
            //imageUrl: 'https://i.ibb.co/YTjW3vF/green-beanie.png',
            imageUrl: "/images/shop-img/hats/green-beanie.png",
            price: 18
          },
          {
            id: 6,
            name: 'Palm Tree Cap',
            // imageUrl: 'https://i.ibb.co/rKBDvJX/palm-tree-cap.png',
            imageUrl: "/images/shop-img/hats/palm-tree-cap.png",
            price: 14
          },
          {
            id: 7,
            name: 'Red Beanie',
            // imageUrl: 'https://i.ibb.co/bLB646Z/red-beanie.png',
            imageUrl: "/images/shop-img/hats/red-beanie.png",
            price: 18
          },
          {
            id: 8,
            name: 'Wolf Cap',
            // imageUrl: 'https://i.ibb.co/1f2nWMM/wolf-cap.png',
            imageUrl: "/images/shop-img/hats/wolf-cap.png",
            price: 14
          },
          {
            id: 9,
            name: 'Blue Snapback',
            // imageUrl: 'https://i.ibb.co/X2VJP2W/blue-snapback.png',
            imageUrl: "/images/shop-img/hats/blue-snapback.png",
            price: 16
          }
        ]
      },
      {
        id: 2,
        title: 'Sneakers',
        routeName: 'sneakers',
        items: [
          {
            id: 10,
            name: 'Adidas NMD',
            imageUrl: 'https://i.ibb.co/0s3pdnc/adidas-nmd.png',
            //imageUrl: "/images/shop-img/sneakers/adidas-nmd.png", 
            price: 220
          },
          {
            id: 11,
            name: 'Adidas Yeezy',
            imageUrl: 'https://i.ibb.co/dJbG1cT/yeezy.png',
            //imageUrl: "/images/shop-img/sneakers/yeezy.png",
            price: 280
          },
          {
            id: 12,
            name: 'Black Converse',
            imageUrl: 'https://i.ibb.co/bPmVXyP/black-converse.png',
            //imageUrl: "/images/shop-img/sneakers/black-converse.png",
            price: 110
          },
          {
            id: 13,
            name: 'Nike White AirForce',
            imageUrl: 'https://images.unsplash.com/photo-1607522370275-f14206abe5d3?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTJ8fHNuZWFrZXJzfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
            //imageUrl: "/images/shop-img/sneakers/white-nike-high-tops.png",
            price: 160
          },
          {
            id: 14,
            name: 'Nike Red High Tops',
            imageUrl: 'https://i.ibb.co/QcvzydB/nikes-red.png',
            //imageUrl: "/images/shop-img/sneakers/nikes-red.png",
            price: 160
          },
          {
            id: 15,
            name: 'Nike Brown High Tops',
            // imageUrl: 'https://i.ibb.co/fMTV342/nike-brown.png',
            imageUrl: "/images/shop-img/sneakers/nike-brown.png",
            price: 160
          },
          {
            id: 16,
            name: 'Air Jordan Limited',
            // imageUrl: 'https://i.ibb.co/w4k6Ws9/nike-funky.png',
            imageUrl: "/images/shop-img/sneakers/nike-funky.png",
            price: 190
          },
          {
            id: 17,
            name: 'Timberlands',
            // imageUrl: 'https://i.ibb.co/Mhh6wBg/timberlands.png',
            imageUrl: "/images/shop-img/sneakers/timberlands.png",
            price: 200
          }
        ]
      },
      {
        id: 3,
        title: 'Jackets',
        routeName: 'jackets',
        items: [
          {
            id: 18,
            name: 'Black Jean Shearling',
            imageUrl: 'https://images.unsplash.com/photo-1534702718617-c141fb9f99d0?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8amFja2V0c3xlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
            //imageUrl: "/images/shop-img/jackets/black-shearling.png",
            price: 125
          },
          {
            id: 19,
            name: 'Blue Jean Jacket',
            imageUrl: 'https://images.unsplash.com/photo-1551488831-00ddcb6c6bd3?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8amFja2V0c3xlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
            //imageUrl: "/images/shop-img/jackets/blue-jean-jacket.png",
            price: 90
          },
          {
            id: 20,
            name: 'Grey Jean Jacket',
            imageUrl: 'https://images.unsplash.com/photo-1604644401890-0bd678c83788?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8amFja2V0c3xlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
            //imageUrl: "/images/shop-img/jackets/grey-jean-jacket.png",
            price: 90
          },
          {
            id: 21,
            name: 'Brown Shearling',
            imageUrl: 'https://i.ibb.co/s96FpdP/brown-shearling.png',
            //imageUrl: "/images/shop-img/jackets/brown-shearling.png",
            price: 165
          },
          {
            id: 22,
            name: 'Tan Trench',
            // imageUrl: 'https://i.ibb.co/M6hHc3F/brown-trench.png',
            imageUrl: "/images/shop-img/jackets/brown-trench.png",
            price: 185
          }
        ]
      },
      {
        id: 4,
        title: 'Womens',
        routeName: 'womens',
        items: [
          {
            id: 23,
            name: 'Blue Tanktop',
            imageUrl: 'https://images.unsplash.com/photo-1567967455389-e432b1ca1404?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjN8fGRyZXNzZXN8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
            //imageUrl: "/images/shop-img/womens/blue-tank.png",
            price: 25
          },
          {
            id: 24,
            name: 'Floral Blouse',
            imageUrl: 'https://images.unsplash.com/photo-1525507119028-ed4c629a60a3?ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8Y2xvdGhpbmd8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
            //imageUrl: "/images/shop-img/womens/floral-blouse.png",
            price: 20
          },
          {
            id: 25,
            name: 'Floral Dress',
            imageUrl: 'https://images.unsplash.com/photo-1445205170230-053b83016050?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8Y2xvdGhpbmd8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
            //imageUrl: "/images/shop-img/womens/floral-skirt.png",
            price: 80
          },
          {
            id: 26,
            name: 'Red Dots Dress',
            imageUrl: 'https://images.unsplash.com/photo-1501127122-f385ca6ddd9d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8N3x8Y2xvdGhpbmd8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60',
            //imageUrl: "/images/shop-img/womens/red-polka-dot-dress.png",
            price: 80
          },
          {
            id: 27,
            name: 'Striped Sweater',
            // imageUrl: 'https://i.ibb.co/KmSkMbH/striped-sweater.png',
            imageUrl: "/images/shop-img/womens/striped-sweater.png",
            price: 45
          },
          {
            id: 28,
            name: 'Yellow Track Suit',
            // imageUrl: 'https://i.ibb.co/v1cvwNf/yellow-track-suit.png',
            imageUrl: "/images/shop-img/womens/yellow-track-suit.png",
            price: 135
          },
          {
            id: 29,
            name: 'White Blouse',
            // imageUrl: 'https://i.ibb.co/qBcrsJg/white-vest.png',
            imageUrl: "/images/shop-img/womens/white-vest.png",
            price: 20
          }
        ]
      },
      {
        id: 5,
        title: 'Mens',
        routeName: 'mens',
        items: [
          {
            id: 30,
            name: 'Camo Down Vest',
            imageUrl: 'https://images.unsplash.com/photo-1610502778270-c5c6f4c7d575?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8dHNoaXJ0c3xlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
            //imageUrl: "/images/shop-img/mens/camo-vest.png",
            price: 325
          },
          {
            id: 31,
            name: 'Floral T-shirt',
            imageUrl: 'https://images.unsplash.com/photo-1416339698674-4f118dd3388b?ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8dHNoaXJ0c3xlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
            //imageUrl: "/images/shop-img/mens/floral-shirt.png",
            price: 20
          },
          {
            id: 32,
            name: 'Black & White Longsleeve',
            imageUrl: 'https://images.unsplash.com/photo-1524282745852-a463fa495a7f?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjB8fHRzaGlydHN8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
            //imageUrl: "/images/shop-img/mens/long-sleeve.png",
            price: 25
          },
          {
            id: 33,
            name: 'Pink T-shirt',
            imageUrl: 'https://images.unsplash.com/photo-1520923179278-ee25e25e09e4?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTY3fHx0c2hpcnRzfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
            //imageUrl: "/images/shop-img/mens/pink-shirt.png",
            price: 25
          },
          {
            id: 34,
            name: 'Jean Long Sleeve',
            // imageUrl: 'https://i.ibb.co/VpW4x5t/roll-up-jean-shirt.png',
            imageUrl: "/images/shop-img/mens/roll-up-jean-shirt.png",
            price: 40
          },
          {
            id: 35,
            name: 'Burgundy T-shirt',
            // imageUrl: 'https://i.ibb.co/mh3VM1f/polka-dot-shirt.png',
            imageUrl: "/images/shop-img/mens/polka-dot-shirt.png",
            price: 25
          }
        ]
      }
]

export default SHOP_DATA;