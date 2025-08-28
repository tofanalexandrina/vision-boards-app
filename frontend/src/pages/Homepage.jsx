import React from 'react';
import Modal from '../components/Modal';

const Homepage = () => {
    const [open, setOpen]=React.useState(false);
    
    const handleClose=()=>{
        setOpen(false);
    }

    const handleOpen=()=>{
        setOpen(true);
    }

    return (
        <div className='homepage' style={{textAlign: "center", margin: "auto", width: "50%", padding: "10px"}}>
            <button style={{margin: "auto", width: "50px", height: "50px", backgroundColor: "white", borderRadius: "50%", cursor: "pointer", position: "fixed", bottom:"30px", left:"50%", transform:"translateX(-50%)"}} onClick={handleOpen}><img src="https://www.iconpacks.net/icons/2/free-plus-icon-3107-thumb.png" style={{width: "70%", height: "60%"}}/></button>
            <Modal isOpen={open} onClose={handleClose}>
                <>
                    <p>This is my modal </p>
                </>
            </Modal>
        </div>
    )
}

export default Homepage;
