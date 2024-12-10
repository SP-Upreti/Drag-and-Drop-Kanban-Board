const useHistory = (initialState) => {
  const [undoStack, setUndoStack] = useState([]);
  const [redoStack, setRedoStack] = useState([]);
  const [state, setState] = useState(initialState);

  const pushToHistory = (currentState) => {
    setUndoStack((prev) => [currentState, ...prev]);
    setRedoStack([]); // Clear redo stack after new action
  };

  const undo = () => {
    if (undoStack.length > 0) {
      const lastState = undoStack[0];
      setRedoStack((prev) => [state, ...prev]); // Save current state to redo stack
      setState(lastState);
      setUndoStack((prev) => prev.slice(1)); // Remove last state from undo stack
    }
  };

  const redo = () => {
    if (redoStack.length > 0) {
      const lastUndoneState = redoStack[0];
      setUndoStack((prev) => [state, ...prev]); // Save current state to undo stack
      setState(lastUndoneState);
      setRedoStack((prev) => prev.slice(1)); // Remove last undone state from redo stack
    }
  };

  return {
    state,
    setState,
    pushToHistory,
    undo,
    redo,
  };
};
