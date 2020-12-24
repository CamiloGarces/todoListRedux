import React, { useState, useCallback } from 'react'
import { useDispatch } from 'react-redux'
//import { add_item } from '../../features/todoListSlice'
import { connect } from 'react-redux'

 const TodoInput = ({ addItem }) => {
    const [value, setValue] = useState('')
    //const dispatch = useDispatch()

    const onSubmit = useCallback(
        (e) => {
            e.preventDefault() 

            //dispatch(add_item(value))

            addItem(value)
            setValue('')
        },
        [setValue, addItem, value],
    )    

    return (
        <form onSubmit={onSubmit}>
            <input value={value} onChange={e => setValue(e.target.value)} />
            <button>Agregar item</button>
        </form>
    )
}

const matchDispatchToProps = dispatch => {
    return ({
        addItem: (value) => {
            dispatch({ type: 'ADD_ITEM', payload: {item: value}})
        }
    })
}

export default connect(null, matchDispatchToProps)(TodoInput)