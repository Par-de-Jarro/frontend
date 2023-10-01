import React, { ReactNode } from 'react'
import { MdOutlineKeyboardArrowRight } from 'react-icons/md'
import { Container, IconLabelContainer } from './styles'

interface NavCardProps {
  redicted_to: string
  label: string
  children: ReactNode
}


const NavCard: React.FC<NavCardProps> = ( { label, redicted_to, children }: NavCardProps) => {  
  return (
    <Container to={redicted_to}>
      <IconLabelContainer>
        { children }
        { label }
      </IconLabelContainer>
      <MdOutlineKeyboardArrowRight/>
    </Container>
  )
}

export default NavCard
