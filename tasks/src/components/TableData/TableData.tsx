import React, { FC, useState, useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../store/index';

// styles
import classes from '../FirstTask/firstTast.module.scss';

// Actions
import { setMainTextAC } from '../../store/first_task_reducer/firstTaskReducer';

// Types
import { TableDataType } from './types';
import { User } from '../FirstTask/types';

interface ITableData {
    tableData: Array<User>
}

const TableData: FC<ITableData> = React.memo(({ tableData }) => {

    return (
        <>
            {console.log('render child')}
            <div className={classes.tableWrapper}>
                <h3>Generated table</h3>
                {
                    tableData.length &&
                    <table className={classes.table}>
                        <thead className={classes.tableHeader}>
                            <th>id</th>
                            <th>Username</th>
                            <th>Email</th>
                            <th>Phone</th>
                            <th>Date of birth</th>
                        </thead>
                        <tbody>
                            {
                                tableData.map((item: User) => {
                                    return <tr key={item.id}>
                                        <td>{item.id}</td>
                                        <td>{item.username}</td>
                                        <td>{item.email}</td>
                                        <td>{item.phone_number}</td>
                                        <td>{item.date_of_birth}</td>
                                    </tr>
                                })
                            }
                        </tbody>
                    </table>
                }
            </div>
        </>

    );
});

export default TableData;