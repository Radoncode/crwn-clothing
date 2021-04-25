import React from 'react';
import MenuItem from '../menu-item/menu-item.component';

import './directory.styles.scss';

class Directory extends React.Component {
    constructor() {
        super();

        this.state = {
            sections: [
                {
                    title: 'hats',
                    imageUrl: 'https://i.ibb.co/cvpntL1/hats.png',
                    id: 1,
                    linkUrl: 'shop/hats'
                  },
                  {
                    title: 'jackets',
                    imageUrl: 'https://i.ibb.co/px2tCc3/jackets.png',
                    id: 2,
                    linkUrl: 'shop/jackets'
                  },
                  {
                    title: 'sneakers',
                    imageUrl: 'https://i.ibb.co/0jqHpnp/sneakers.png',
                    id: 3,
                    linkUrl: 'shop/sneakers'
                  },
                  {
                    title: 'womens',
                    imageUrl: 'https://images.unsplash.com/photo-1567958451986-2de427a4a0be?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1350&q=80',
                    size: 'large',
                    id: 4,
                    linkUrl: 'shop/womens'
                  },
                  {
                    title: 'mens',
                    imageUrl: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
                    size: 'large',
                    id: 5,
                    linkUrl: 'shop/mens'
                  }
            ]
        }
    }

    render() {
        return (
          
            <div className="directory-menu">
                {
                    this.state.sections.map(({title, imageUrl, id, size}) => (
                       <MenuItem title={title} imageUrl={imageUrl} key={id} size={size}/>
                    ))
                }
            </div>
        );
    }
}

export default Directory;