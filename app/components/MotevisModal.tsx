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
      <div className="modal-box" onClick={(e) => e.stopPropagation()}>
        <form method="dialog">
          <button onClick={onClose} className="btn btn-circle btn-ghost absolute right-[0.1rem] top-[0.1rem] text-white">✕</button>
        </form>
        <h2 className="font-bold text-lg text-white pb-2">Heads up,</h2>
        <p className="text-white">You are leaving this site to go to <strong>Motevis</strong> — a fitness web app I&apos;m currently building. It&apos;s designed to help users find local run clubs, weekly runs, and races in New York City. <br/> Do you want to continue?</p>
        <div className="modal-action">
          <button onClick={onConfirm} className="btn">Yup!</button>
        </div>
      </div>
    </dialog>
  );
};

export default MotevisModal; 