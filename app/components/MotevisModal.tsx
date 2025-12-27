import React from 'react';

interface MotevisModalProps {
  isOpen: boolean;
  onClose: () => void;
  onConfirm: () => void;
}

const MotevisModal: React.FC<MotevisModalProps> = ({ isOpen, onClose, onConfirm }) => {
  if (!isOpen) return null;

  return (
    <dialog className="modal modal-open" onClick={onClose}>
      <div className="modal-box bg-[#F4F0E9] dark:bg-[#333333] tracking-wide roboto-mine" onClick={(e) => e.stopPropagation()}>
        <form method="dialog">
          <button onClick={onClose} className="btn btn-circle btn-ghost absolute border-none right-[0.1rem] top-[0.1rem] dark:text-white text-gray-900 hover:bg-transparent hover:shadow-none hover:border-none hover:text-[#CC1E00] hover:dark:text-[#F1CC00] hover:scale-125 transition-transform duration-200">✕</button>
        </form>
        <h2 className="font-bold text-lg dark:text-white pb-2 text-gray-900">Heads up,</h2>
        <p className="dark:text-white text-gray-900">You are leaving this site to go to <strong>Motevis</strong> — a fitness web app I&apos;m currently building. It&apos;s designed to help users find local run clubs, weekly runs, and races in New York City. <br/> Do you want to continue?</p>
        <div className="modal-action">
          <button onClick={onConfirm} className="btn dark:bg-emerald-700 hover:bg-emerald-800 bg-emerald-900 border-none hover:scale-105 transition-transform duration-200">Yup!</button>
        </div>
      </div>
    </dialog>
  );
};

export default MotevisModal; 