import { useNavigate } from 'react-router-dom'
import '../assets/styles/components/backBtn.scss'

const BackBtn = () => {
    const navigate = useNavigate()
    return ( 
        <button className='back-btn' onClick={() => navigate(-1)}>
            <span className='icon icon-keyboard_backspace'></span> Back
        </button>
     );
}
 
export default BackBtn;