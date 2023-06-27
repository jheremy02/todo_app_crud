import Modal from "react-modal";

function ModalEditTask(props) {
  

  function openModal() {
    props.setState(true);
  }

  function afterOpenModal() {
   
  }

  function closeModal() {

    props.setState(false);
    
  }

  Modal.setAppElement("#root");
  return <div>
    
  <Modal
  isOpen={props.state}
  onAfterOpen={afterOpenModal}
  onRequestClose={closeModal}
  contentLabel="Example Modal"
>
  <h2 ref={(_subtitle) => (subtitle = _subtitle)}>Hello</h2>
  <button onClick={closeModal}>close</button>
  <div>I am a modal</div>
  <form>
    <input />
    <button>tab navigation</button>
    <button>stays</button>
    <button>inside</button>
    <button>the modal</button>
  </form>
</Modal>
  </div>
}

export default ModalEditTask;
