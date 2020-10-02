import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalCloseButton,
  Text,
  ModalFooter,
  Button,
  Icon,
} from "@chakra-ui/core";
import React from "react";

const InfoModal = ({ isOpen, onClose }) => {
  return (
    <Modal blockScrollOnMount={false} isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Der Schwurbel-Generator</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <Text fontWeight="bold" mb="1rem">
            <a
              href="https://github.com/Andyyyyyy/schwurbel-generator"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span role="img" aria-label="laptop">
                💻
              </span>{" "}
              Sourcecode auf GitHub
            </a>
            </Text>
                
            <Text fontWeight="bold" mb="1rem">
            <a
              href="https://twitter.com/awieandy"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Icon name="at-sign" color="blue.300" mr={1}/>
              awieandy
            </a>
          </Text>
        </ModalBody>

        <ModalFooter>
          <Button variantColor="blue" mr={3} onClick={onClose} variant="ghost">
            Schließen
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};
export default InfoModal;
