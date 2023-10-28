import {useParams, useSearchParams} from 'react-router-dom'
import { sampleData } from './data';
const Inventories = ()=>{
    const {id} = useParams();
    console.log(sampleData.filter(x=>x.projectId==id)[0]);
    return (<div>
        {
            sampleData.filter(x=>x.projectId==id)[0].inventories.map((i)=> {
                return <p>{i.inventoryName}</p>
            })
        }
    </div>)
}
export default Inventories;