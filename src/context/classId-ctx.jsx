import { createContext, useState } from "react";

const studentsClassCtx = createContext({
  students: [],
  studentsHandler: () => {},
});

export const studentsClassCtxProvider = (props) => {
  const [students, setStudents] = useState();

  const studentsHandler = (param) => {
    setStudents(param);
  };

  return (
    <studentsClassCtx.Provider
      value={{
        students: students,
        studentsHandler: studentsHandler,
      }}
    >
      {props.children}
    </studentsClassCtx.Provider>
  );
};

export default studentsClassCtx