import React from 'react';
import Login from '../components/Login';
import Register from '../components/Register';
import Modal from 'react-modal';

const customStyles = {
  content: {
    top: '10%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
  },
};

function Home() {
  const [LogarModal, setIsOpenLogarModal] = React.useState(false);
  const [RegisterModal, setIsOpenRegisterModal] = React.useState(false);

  function openLoginModal() {
    setIsOpenLogarModal(true);
  }

  function closeLoginModal() {
    setIsOpenLogarModal(false);
  }

  function openRegisterModal() {
    setIsOpenRegisterModal(true);
  }

  function closeRegisterModal() {
    setIsOpenRegisterModal(false);
  }

  return (
    <div>
      <button onClick={openLoginModal}>Logar</button>
      <Modal
        isOpen={LogarModal}
        onRequestClose={closeLoginModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <Login />
      </Modal>
      <button onClick={openRegisterModal}>Registrar</button>
      <Modal
        isOpen={RegisterModal}
        onRequestClose={closeRegisterModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <Register />
      </Modal>
    </div>
  );
}

export default Home
