import React from "react";
import {
  ModalLargeContainer,
  ModalContainer,
  ModalContent,
  ModalButtonClose,
  ModalHeader,
} from "./style";

interface ModalProps {
  modalTitle: string;
  className?: string;
  onClose: () => void;
  children: React.ReactNode;
}

const Modal = ({
  children,
  onClose = () => {},
  modalTitle,
  className,
}: ModalProps) => {
  const handleOutsideClick = (e: React.MouseEvent) => {
    if ((e.target as Element).id === "Modal") {
      onClose();
    }
  };
  return (
    <ModalLargeContainer id="Modal" onClick={handleOutsideClick}>
      <ModalContainer>
        <ModalHeader className={className}>
          <h3>{modalTitle}</h3>
          <ModalButtonClose onClick={onClose} />
        </ModalHeader>
        <ModalContent>{children}</ModalContent>
      </ModalContainer>
    </ModalLargeContainer>
  );
};

export default Modal;
