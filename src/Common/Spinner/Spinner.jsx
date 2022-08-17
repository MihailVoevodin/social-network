import React from "react";
import { Spin } from 'antd';
import s from "./Spinner.module.css"

const Spinner = () => {
    return (
        <div className={s.spinner}>
            <Spin size="large">
                <div style={{height: 400, width: 400}} />
            </Spin>
        </div>
    )
}

export default Spinner;