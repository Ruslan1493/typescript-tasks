import { FC, useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../store/index';

// styles
import classes from './firstTast.module.scss';

// Services
import { getUser } from '../../services/userService';

// Actions
import { setMainTextAC } from '../../store/first_task_reducer/firstTaskReducer';

// Types
import { User } from './types';
import TableData from '../TableData/TableData';

const FirstTask: FC = () => {
    const [tableData, setTableData] = useState<Array<User>>([]);
    const mainText = useSelector((state: RootState) => state.firstTask.mainText);
    const [isLoaded, setIsLoaded] = useState<boolean>(false);
    const dispatch = useDispatch();

    useEffect(() => {
        getUser(20)
            .then((res: any) => {
                setTableData(res.data);
                setIsLoaded(true);
            });
    }, [])

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const newText = e.target.value;
        dispatch(setMainTextAC(newText));
    }

    return (
        <div className={classes.wireframe}>
            <button><Link to={'/secondTask'}>to Second Task</Link></button>
            <div className="firstTask">
                <p>Redux Text: {mainText}</p>
                <input type='text' name='mainText' value={mainText} onChange={handleChange} />
            </div>
            {
                !isLoaded
                    ?
                    <table className={classes.tableWireframe}>
                        <thead className={classes.tableHeader}>
                            <th>id</th>
                            <th>Username</th>
                            <th>Email</th>
                            <th>Phone</th>
                            <th>Date of birth</th>
                        </thead>
                        <tbody>
                            {[...Array(10)].map((x, i) =>
                                <tr key={i}>
                                    <td>-</td>
                                    <td>-</td>
                                    <td>-</td>
                                    <td>-</td>
                                    <td>-</td>
                                </tr>
                            )}

                        </tbody>
                    </table>
                    :
                    <TableData tableData={tableData} />
            }
        </div>
    );
}

export default FirstTask;