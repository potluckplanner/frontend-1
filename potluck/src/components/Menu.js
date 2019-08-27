import React, {Component} from 'react';
import '../../src/App.css';
import Header from './Header';
import PropTypes from 'prop-types'
import { Menu, MenuItem } from 'semantic-ui-react'
import EventForm from './EventForm'


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
      
          
      <Menu  className="backg" color={color} inverted widths={3}>
            
        
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
      <EventForm />

      
      </div>
    )
  }
}

const Menu1 = () => {
  const menus = colors.map((color) => <ExampleMenu color={color} key={color} />)

  return <div>{menus}</div>
}

export default Menu1

