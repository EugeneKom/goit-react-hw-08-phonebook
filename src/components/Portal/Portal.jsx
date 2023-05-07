const { useEffect } = require('react');
const { createPortal } = require('react-dom');

export const Portal = ({ children }) => {
  const modalRoot = document.getElementById('modal-root');
  const element = document.createElement('div');

  useEffect(() => {
    modalRoot.appendChild(element);
    return () => {
      modalRoot.removeChild(element);
    };
  });

  return createPortal(children, element);
};
