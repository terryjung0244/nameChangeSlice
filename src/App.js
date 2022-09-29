import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { nameChangeAction } from './slice/nameChangeSlice';

const App = () => {

  const dispatch = useDispatch();
  const { name } = useSelector(state => state.nameChange);
  
  const onClickNameChange = (name) => {
    dispatch(nameChangeAction(name))
  }


  return (
    <div>
      {name}
      <button onClick={()=>onClickNameChange('SJ')}>Name</button>
    </div>
  )
}

export default App
