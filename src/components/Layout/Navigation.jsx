import React from "react"
import Link from 'gatsby-link'
import styled from 'styled-components'
import UserLinks from '../UserLinks'

const NavContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  background: ${props => props.theme.brand};
  
  .nav-link {
    font-size: 1.6rem;
    margin-right: 10px;
    font-weight: 200;
    color: black;
  }
`

class Navigation extends React.Component {

  render() {
    return (
      <NavContainer>
        <section>
          <Link className='nav-link' to='/' >صفحة البداية</Link>
          <Link className='nav-link' to='/lesson-one' > الدروس</Link>
          <Link className='nav-link' to='/about' >شكون ؟</Link>
        </section>
        <UserLinks />
      </NavContainer>
    )
  }
}

export default Navigation