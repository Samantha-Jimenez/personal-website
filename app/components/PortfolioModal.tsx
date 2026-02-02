import React from 'react';
 
const PortfolioModal = ({ isOpen, onClose, onConfirm }: { isOpen: boolean, onClose: () => void, onConfirm: () => void }) => {
  if (!isOpen) return null;

  return (
    <dialog className="modal modal-open" onClick={onClose}>
      <div className="modal-box bg-background-light-main dark:bg-background-modal-dark tracking-wide roboto-mine" onClick={(e) => e.stopPropagation()}>
        <form method="dialog">
          <button onClick={onClose} className="btn btn-circle btn-ghost absolute border-none right-[0.1rem] top-[0.1rem] dark:text-white text-gray-900 hover:bg-transparent hover:shadow-none hover:border-none hover:text-red-main hover:dark:text-yellow-main hover:scale-125 transition-transform duration-200">✕</button>
        </form>
        <h2 className="font-bold text-3xl text-red-main dark:text-yellow-main pb-2 text-gray-900 bodoni-moda-mine">Heads up,</h2>
        <p className="dark:text-white text-gray-900 roboto-mine !font-light tracking-wide">You are leaving this site to go to my professional portfolio. Do you want to continue?</p>
        <div className="modal-action">
          <button onClick={onConfirm} className="btn dark:bg-emerald-700 hover:bg-emerald-800 bg-emerald-900 border-none hover:scale-105 transition-transform duration-200">Yup!</button>
        </div>
      </div>
    </dialog>
  );
};

export default PortfolioModal; 