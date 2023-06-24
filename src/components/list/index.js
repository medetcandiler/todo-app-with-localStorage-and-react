import ListItems from "../list-items";
import { useState } from 'react';


function List({ list, setList, filtered }) {

  function toggleHandler() {
    setList(list.map(el => {
      const completed = list.some(item => item.completed === true)
      return completed === false ? { ...el, completed: true } : { ...el, completed: false }
    }))
  }

  return (
    <section className='main'>
      
      <input
        className="toggle-all"
        type="checkbox"
      />
      <label htmlFor="toggle-all" onClick={toggleHandler}>
        Mark all as complete
      </label>

      <ul className="todo-list">
        {
          filtered.map((item, i) =>
            <ListItems
              key={i}
              item={item}
              list={list}
              setList={setList}
            />
          )}
      </ul>
    </section>
  );
}
export default List;