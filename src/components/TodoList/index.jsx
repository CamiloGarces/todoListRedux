import React, { useCallback } from 'react'
import TodoItem from '../TodoItem'
import { useSelector, useDispatch, connect } from 'react-redux'
//import { selectItems, remove_item } from './../../features/todoListSlice'
const TodoList = ({ list, removeItem }) => {
    //const dispatch = useDispatch()
    
    const onClickRemove = useCallback((item) => {
       removeItem(item)
    }, [])
    
    return (
        <div>
            {list && list.map(i => <TodoItem key={i.item} {...i} onClickRemove={onClickRemove}></TodoItem>)}
        </div>
    )
}

const mapStateToProps = state => {
    return {
        list: state.items
    }
}

const matchDispatchToProps = dispatch => {
    return {
        removeItem: value => {
            dispatch({type: 'REMOVE_ITEM', payload: value })
        }
    }
}

export default connect(mapStateToProps, matchDispatchToProps)(TodoList)
