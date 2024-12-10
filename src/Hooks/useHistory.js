import { useState } from 'react';

const useHistory = (initialState) => {
  const [undoStack, setUndoStack] = useState([]);
  const [redoStack, setRedoStack] = useState([]);
  const [state, setState] = useState(initialState);

  const pushToHistory = () => {
    setUndoStack(prev => [state, ...prev]);
    setRedoStack([]);
  };

  const undo = () => {
    const lastState = undoStack[0];
    if (lastState) {
      setState(lastState);
      setRedoStack([state, ...redoStack]);
      setUndoStack(undoStack.slice(1));
    }
  };

  const redo = () => {
    const lastUndoneState = redoStack[0];
    if (lastUndoneState) {
      setState(lastUndoneState);
      setUndoStack([lastUndoneState, ...undoStack]);
      setRedoStack(redoStack.slice(1));
    }
  };

  return {
    state,
    pushToHistory,
    undo,
    redo
  };
};

export default useHistory;
