import React from 'react';

interface MvmntModalProps {
  isOpen: boolean;
  onClose: () => void;
  onConfirm: () => void;
}

const MvmntModal: React.FC<MvmntModalProps> = ({ isOpen, onClose, onConfirm }) => {
  if (!isOpen) return null;

  return (
    <dialog className="modal modal-open" onClick={onClose}>
      <div className="modal-box" onClick={(e) => e.stopPropagation()}>
        <form method="dialog">
          <button onClick={onClose} className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2 text-white">✕</button>
        </form>
        <h2 className="font-bold text-lg text-white">Heads up,</h2>
        <p className="text-white">You are leaving this site to go to Mvmnt Collectives -- A fitness related web app I&apos;m currently building. <br/> Do you want to continue?</p>
        <div className="modal-action">
          <button onClick={onConfirm} className="btn">Yup!</button>
        </div>
      </div>
    </dialog>
  );
};

export default MvmntModal; 