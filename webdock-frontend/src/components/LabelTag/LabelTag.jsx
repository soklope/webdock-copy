import'./LabelTag.scss'

export default function LabelTag({LabelStatus,LabelColor}) {

    return (
        <>
          <p className={`label ${LabelColor}`}>{LabelStatus}</p>
        </>
      );
    }
