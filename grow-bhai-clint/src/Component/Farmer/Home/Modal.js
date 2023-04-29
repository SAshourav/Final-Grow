import React from 'react';

const Modal = () => {
    return (
        <div>
           {/* The button to open modal */}
            <label htmlFor="my-modal" className="btn btn-outline">Update ?</label>

            {/* Put this part before </body> tag */}
            <input type="checkbox" id="my-modal" className="modal-toggle" />
            <div className="modal">
            <div className="modal-box">
            <form className=' gap-4 grid grid-cols-3'>
                    <div className='flex flex-col mx-auto'>
                        <label className='text-xl mb-2' htmlFor="">Quantity</label>
                        <input type="text" placeholder="Type here" className="input input-bordered input-warning w-full max-w-xs"/>
                    </div>
                    <div className='flex flex-col mx-auto'>
                        <label className='text-xl mb-2' htmlFor="">Unit Price</label>
                        <input type="text" placeholder="Type here" className="input input-bordered input-warning w-full max-w-xs"/>
                    </div>
                </form>
                <div className="modal-action">
                <label htmlFor="my-modal" className="btn">Submit</label>
                </div>
            </div>
            </div> 
        </div>
    );
};

export default Modal;