import { useRef } from 'react';
import { FiCheckSquare } from 'react-icons/fi';

import { Form } from './styles';
import Modal from '../Modal';
import Input from '../Input';
import { FormHandles } from '@unform/core';

interface iFood{ 
  id: number;
  name: string;
  description: string;
  price: number;
  available: boolean;
  image: string;
}

interface updateFood {
  image: string;
  name: string;
  price: string;
  description: string;
}

interface ModalEditFoodProps {
  setIsOpen: () => void;
  isOpen: boolean;
  editingFood: iFood;
  handleUpdateFood: (data:updateFood) => void;
}

export function ModalEditFood({setIsOpen, isOpen, editingFood, handleUpdateFood }:ModalEditFoodProps) {
  const formRef = useRef<FormHandles>(null)

  const handleSubmit = async (data:updateFood) => {
    handleUpdateFood(data);
    setIsOpen();
  };

  return (
    <Modal isOpen={isOpen} setIsOpen={setIsOpen}>
      <Form ref={formRef} onSubmit={handleSubmit} initialData={editingFood}>
        <h1>Editar Prato</h1>
        <Input name="image" placeholder="Cole o link aqui" />

        <Input name="name" placeholder="Ex: Moda Italiana" />
        <Input name="price" placeholder="Ex: 19.90" />

        <Input name="description" placeholder="Descrição" />

        <button type="submit" data-testid="edit-food-button">
          <div className="text">Editar Prato</div>
          <div className="icon">
            <FiCheckSquare size={24} />
          </div>
        </button>
      </Form>
    </Modal>
  );

}


    

export default ModalEditFood;
