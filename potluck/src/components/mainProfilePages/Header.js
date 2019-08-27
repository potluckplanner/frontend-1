import React from 'react';
// import { Button } from 'semantic-ui-react'
import ButtonExampleNegative from './LogoutButton';


const Header = () => {
      return (
            <div className="header">
                  <div className="icon"><i class="fas fa-utensils"></i><h1 className="heading">Potluck Planner</h1></div>
                  <ButtonExampleNegative />
            </div>
      )
}

export default Header 