import './Content.css';
import RowData from '../../constants/URLS';
import Row from '../row/Row';

export default function Content() {
  return (
    <div className='content-wrapper'>

      {RowData.map((el) => {
        return <Row title={el.title} url={el.url} />;
      })}

      
    </div>
  );
}



//API Key - d8a34a8d227acb223337274a5961e673