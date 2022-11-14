import { toast } from 'react-toastify';

const toastAlert = item => {
  toast.error(`${item} is already in contacts!`, {
    position: 'top-center',
    autoClose: 3000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: 'colored',
  });
};

export default toastAlert;
