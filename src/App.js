import React, {useReducer} from 'react';
import reducer, {initialState} from './reducers';

import './App.css';

import TotalDisplay from './components/TotalDisplay';
import CalcButton from './components/CalcButton';

import { addOne, applyNumber, changeOperation, clearDisplay, memoryPlus, mr, mc } from './actions/index';


function App() {

  const [ state, dispatch ] = useReducer(reducer, initialState);

  // const handleAddButton = (value)=> {
  //   dispatch(addOne(value));
  // }

  const handleApplyButton = (value)=> {
    dispatch(applyNumber(value));
  }

  const handleOperationChange = (operator) => {
    dispatch(changeOperation(operator));
  }

  const clearDisplayHandler = () => {
    dispatch(clearDisplay());
  }

  const memoryPlusHandler = () => {
    dispatch(memoryPlus());
  }

  const mrHandler = () => {
    dispatch(mr());
  }

  const mcHandler = () => {
    dispatch(mc());
  }

  return (
    <div className="App">
      <nav className="navbar navbar-dark bg-dark">
        <a className="navbar-brand" href="#"><img width="40px" src="./Lambda-Logo-Red.png"/> Lambda Reducer Challenge</a>
      </nav>

      <div className = "container row mt-5">
        <div className="col-md-12 d-flex justify-content-center">
          <form name="Cal">
            
            <TotalDisplay value={state.total}/>
            <div className="row details">
              <span id="operation"><b>Operation:</b> {state.operation}</span>
              <span id="memory"><b>Memory:</b> {state.memory}</span>
            </div>
            
            <div className="row">
              <CalcButton value={"M+"} onClick={() => {memoryPlusHandler()}}/>
              <CalcButton value={"MR"} onClick={() => {mrHandler()}}/>
              <CalcButton value={"MC"} onClick={() => {mcHandler()}}/>
            </div>

            <div className="row">
              <CalcButton value={1} onClick={() => {handleApplyButton(1)}} />
              <CalcButton value={2} onClick={() => {handleApplyButton(2)}}/>
              <CalcButton value={3} onClick={() => {handleApplyButton(3)}}/>
            </div>

            <div className="row">
              <CalcButton value={4} onClick={() => {handleApplyButton(4)}}/>
              <CalcButton value={5} onClick={() => {handleApplyButton(5)}}/>
              <CalcButton value={6} onClick={() => {handleApplyButton(6)}}/>
            </div>

            <div className="row">
              <CalcButton value={7} onClick={() => {handleApplyButton(7)}}/>
              <CalcButton value={8} onClick={() => {handleApplyButton(8)}}/>
              <CalcButton value={9} onClick={() => {handleApplyButton(9)}}/>
            </div>

            <div className="row">
              <CalcButton value={"+"} onClick={() => {handleOperationChange("+")}}/>
              <CalcButton value={"*"} onClick={() => {handleOperationChange("*")}}/>
              <CalcButton value={"-"} onClick={() => {handleOperationChange("-")}}/>
            </div>

            <div className="row ce_button">
              <CalcButton value={"CE"} onClick={() => {clearDisplayHandler()}}/>
            </div>

          </form>
        </div>
      </div>
    </div>
  );
}

export default App;
