import { ReactNode } from "react"
import { CloseIcon, ModalContainer, ModalContentContainer, ModalWrapper, Title, TitleContainer } from './styles'

interface ModalProps {
  onClose: () => void
  children: ReactNode
  title?: string

}

const Modal: React.FC<ModalProps> = ({ onClose, children, title }) => {
  return (
    <ModalWrapper>
      <ModalContainer>
        <TitleContainer>
          <CloseIcon onClick={onClose}/>
          <Title>{title}</Title>
        </TitleContainer>
        <ModalContentContainer>
          {children}
        </ModalContentContainer>
      </ModalContainer>
    </ModalWrapper>
  )
}

export default Modal