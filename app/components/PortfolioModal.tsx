import React from 'react';
 
const PortfolioModal = ({ isOpen, onClose, onConfirm }: { isOpen: boolean, onClose: () => void, onConfirm: () => void }) => {
  if (!isOpen) return null;

  return (
    <dialog className="modal modal-open" onClick={onClose}>
      <div className="modal-box" onClick={(e) => e.stopPropagation()}>
        <form method="dialog">
          <button onClick={onClose} className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2 text-white">✕</button>
        </form>
        <h2 className="font-bold text-lg text-white">Heads up,</h2>
        <p className="text-white">You are leaving this site to go to my portfolio. Do you want to continue?</p>
        <div className="modal-action">
          <button onClick={onConfirm} className="btn">Yup!</button>
        </div>
      </div>
    </dialog>
  );
};

export default PortfolioModal; 