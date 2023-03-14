import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

export const ToastElement = () => <ToastContainer />
export const toast = ({ text, config }) => toast(text, config)