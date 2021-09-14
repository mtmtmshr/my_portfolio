import React from 'react'

interface ListCompornentProps<T> {
    list_data: Array<T>
}

const ListCompornent = <T,>(props:ListCompornentProps<T>) => {
    const {list_data} = props;
    return (
        <div>
            <ul>
                {list_data.map((item, index) => {
                    return <li key={index} className="list-disc break-all ml-12 mr-8 md, lg, xl:mr-0 md, lg, xl:ml-6 pt-2">{item}</li>
                })}
            </ul>
        </div>
    )
}

export default ListCompornent
