import React, {Component} from 'react';
import '../../src/App.css';
import Header from './Header';
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
            <Header />
      
          
      <Menu className="backg" color={color} inverted widths={2}>
            
        
        <Menu.Item
          name='Events'
          active={activeItem === 'Events'}
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

const MenuExampleColoredInvertedMenus = () => {
  const menus = colors.map((color) => <ExampleMenu color={color} key={color} />)

  return <div>{menus}</div>
}

export default MenuExampleColoredInvertedMenus
