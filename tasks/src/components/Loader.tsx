import { FC } from 'react';

// styles
import classes from './FirstTask/firstTast.module.scss';

const Loader: FC = () => {

    return (
        <>

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
        </>
    );
}

export default Loader;