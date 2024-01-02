import './Statusfilters.scss'
import usePostArrayStore from '../../stores/postArrayStore';

export default function Statusfilter({ indicationColor, title, borderColor, backgroundColor, isSelected, onSelect }) {

  const { filterAllPosts } = usePostArrayStore()

  const handleButtonClick = () => {
    onSelect(title);
    filterAllPosts()
  }

  return (
    <button className={`Statusfilters-btn-mypost-text ${borderColor} ${isSelected && backgroundColor}`} onClick={handleButtonClick}>
      <p>{title}</p>
      <div className={`Statusfilters-btn-mypost-text__indicator ${indicationColor}`}></div>
    </button>
  );
}
