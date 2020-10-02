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
} from "@chakra-ui/core";
import React from "react";

const InfoModal = ({ isOpen, onClose }) => {
  return (
    <Modal
      blockScrollOnMount={false}
      isOpen={isOpen}
      onClose={onClose}
    >
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Der Schwurbel-Generator</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <Text fontWeight="bold" mb="1rem">
            GitHub Link
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
