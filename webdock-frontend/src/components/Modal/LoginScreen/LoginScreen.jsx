import './LoginScreen.scss';
// import userStore from '../../../stores/loginStore';
import { redirectToWebdock } from '../../../services/ssoService';

export default function LoginScreen() {

  return (
    <div className='login-page wrap'>
      <div className='login-page__container'>
        <span className='login-page__logo'></span>
        <button onClick={redirectToWebdock} className='login-page__google-button'>Sign in with Webdock</button>
        <p>Don't have an account yet?</p>
        <p className='login-page__link-text'>sign up here!</p>
      </div>

      <div className='login-page__splash-art'>
        <div className='login-page__splash-art__blur' />
        <p className='login-page__splash-art__headline'>Skip the email hassle <br></br> join Webdock's swift forum!</p>
        <p className='login-page__splash-art__subline'>Where communication meets simplicity in the cloud</p>


      </div>
    </div>
  );
}