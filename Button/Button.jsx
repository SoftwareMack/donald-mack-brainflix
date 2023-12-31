import upload from '../../assets/icons/upload.svg';
import './Button.scss';

function Button  (props)  {
    const { buttonLabel } = props;
    const { buttonImage } = props;

    return (
        <div className='button__container'>

            <button><img src={buttonImage} />{buttonLabel}</button>
        </div>
  )};

export default Button;
