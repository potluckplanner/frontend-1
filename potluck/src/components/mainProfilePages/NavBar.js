import React, {Component} from 'react';
import PropTypes from 'prop-types'
import { Menu } from 'semantic-ui-react'




const colors = [
  "orange",
]
 
class ExampleMenu extends Component {
  static propTypes = {
    color: PropTypes.string,
  }

  state = { activeItem: 'home' }

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  render() {
    const { color } = this.props
    const { activeItem } = this.state

    return (
      <div>
        
        <Menu color={color} inverted widths={3}>
            
        
        <Menu.Item
          className="text"
          name='All Events'
          active={activeItem === 'All Events'}
          onClick={this.handleItemClick}
        />
            
        
        <Menu.Item
          name='My Events'
          active={activeItem === 'My Events'}
          onClick={this.handleItemClick}
        />
       <Menu.Item
          name='New Event'
          active={activeItem === 'New Event'}
          onClick={this.handleItemClick}
        />
        
      </Menu>

      
      </div>
    )
  }
}

const NavBar = () => {
  const menus = colors.map((color) => <ExampleMenu color={color} key={color} />)

  return <div>{menus}</div>
}


export default NavBar
