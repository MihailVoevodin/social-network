import React from "react";
import { Pagination } from 'antd';
import 'antd/dist/antd.css';
import s from './Pagination.module.css'

const PaginationComponent = (props) => {

    const onChange = (page) => {
      props.onPageChange(page);
    };


    return (
        <div className={s.pagination}>
            <Pagination current={props.currentPage} 
                        total={props.totalUsersCount} 
                        onChange={onChange}
                        showSizeChanger={false}/>
        </div>
    )
}

export default PaginationComponent;