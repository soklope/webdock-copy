import './CreatePostBtn.scss'
import useModalStore from '../../stores/modalStore';

export default function CreatePostBtn() {
  const user = localStorage.getItem('user');
  const { toggleModal } = useModalStore();
  
  const userIsNotLoggedIn = () => {
    const userConfirmed = window.confirm("You need to login to create a post, go to login page?");

      if (userConfirmed) {
        // Redirect to a specific route using React Router
        window.location.href = `/login`;
      } 
  }

  return (
    <button className="create-post-btn" onClick={user ? toggleModal : userIsNotLoggedIn}>
      <span className='create-post-btn__icon' />
      <p>CREATE POST</p>
    </button>
  );
}