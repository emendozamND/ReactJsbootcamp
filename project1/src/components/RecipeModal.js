import React from "react";
import { Modal, ModalHeader, ModalBody, ModalFooter, Button } from 'reactstrap';
const RecipeModal = ({ selectedRecipe, toggle, modal }) => {


    return (
        <>
            <Modal isOpen={Modal} toggle={toggle}>
                <ModalHeader>{selectedRecipe.title}</ModalHeader>
                <ModalBody>{selectedRecipe.description}</ModalBody>
                <ModalFooter>
                    <Button onClick={toggle} color="primary">Close</Button>
                </ModalFooter>
            </Modal>
        </>
    )


}
export default RecipeModal;