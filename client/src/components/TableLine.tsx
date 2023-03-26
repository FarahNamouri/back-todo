import {FC} from "react";
import Button from 'react-bootstrap/esm/Button';
import {AiFillDelete, AiFillEdit} from 'react-icons/ai';

const TableLine: FC = () => {
    return (
        <tr>
        <td>2</td>
        <td>Code</td>
        <td>CRUD</td>
        <td className='flex g-1'>
            <Button>
                <AiFillEdit />
            </Button>
            <Button className='mx-2 bg-danger '>
                <AiFillDelete />
            </Button>
        </td>
    </tr>

    );


} 

export default TableLine;