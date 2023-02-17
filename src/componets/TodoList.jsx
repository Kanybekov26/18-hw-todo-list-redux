import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { todoInputType } from "../store/todo/todoReducer";

const TodoList = ({ complatedHandler, deleteHandler }) => {
  const todo = useSelector((state) => state.todo);
  const dispatch = useDispatch();

  const [editeInputValue, setEditeINputvalue] = useState("");

  const [editTodo, setEditTodo] = useState(false);

  const secondINputChangeHandler = (e) => {
    setEditeINputvalue(e.target.value);
  };

  const sevSubmit = (elem) => {
    dispatch({
      type: todoInputType.TODO_EDITE,
      id: elem.id,
      payload: editeInputValue,
    });
    setEditTodo(false);
  };
  const editeTodoHandler = (elem) => {
    console.log(elem, "elem");
    setEditTodo(true);
    setEditeINputvalue(elem.title);
    console.log("click");
  };
  return (
    <>
      {todo.map((el) => {
        return (
          <Maincontainer>
            <Container>
              {editTodo ? (
                <>
                  <input
                    type="text"
                    value={editeInputValue}
                    onChange={secondINputChangeHandler}
                  />
                  <Button onClick={() => sevSubmit(el)}>Save</Button>
                </>
              ) : (
                <Card>
                  <p className={`${el.completed ? "dd": null}`}>{el.title}</p>

                  <div>
                  <Button onClick={() => editeTodoHandler(el)}>Edit</Button>
                  <Button onClick={() => deleteHandler(el)}>delete</Button>
                  <Button onClick={() => complatedHandler(el)}>
                    complated
                  </Button>
                  </div>

                  
                </Card>
              )}
            </Container>
          </Maincontainer>
        );
      })}
    </>
  );
};

export default TodoList;


const Card = styled.div`
  display: flex;
  justify-content: space-around;
  width: 100%;
`

const Container = styled.div`
  border: 2px solid black;
  display: flex;
  width: 700px;
  padding: 20px;
  align-items: center;
  justify-content: space-between;
  margin-top: 30px;
  background-color: #8e0c81;
  border-radius: 20px;
  p {
    color: aliceblue;
    font-size: 20px;
  }
  .dd{
    /* background-color: red; */
    text-decoration: line-through;

  }
  
`;
const Maincontainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const Button = styled.button`
  padding: 7px;
  background-color: blue;
  border-radius: 10px;
  margin-left: 20px;
  padding: 10px;
  color: aliceblue;
  cursor: pointer;
  :hover {
    background-color: blueviolet;
  }
`;
