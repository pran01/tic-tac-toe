import React from "react";
import "../styles/Box.css";
import Field from "./Field";

type User = {
  char: string;
  places: number[];
};

type BoxProps = {
  user: User;
  toggleUser: () => void;
  checkWinningCondition: (tempFields: string[], user: User) => boolean;
  fields: string[];
  setFields: React.Dispatch<React.SetStateAction<string[]>>;
  won: boolean;
  setWon: React.Dispatch<React.SetStateAction<boolean>>;
  setWonStatus: React.Dispatch<React.SetStateAction<boolean>>;
};

const Box = ({
  user,
  toggleUser,
  checkWinningCondition,
  fields,
  setFields,
  won,
  setWon,
  setWonStatus,
}: BoxProps) => {
  const click = (id: number) => {
    let tempFields = [...fields];
    if (tempFields[id] === "" && won === false) {
      tempFields[id] = user.char;
      setFields(tempFields);
      if (checkWinningCondition(tempFields, user)) {
        setWonStatus(true);
        setWon(true);
      } else toggleUser();
    }
  };
  return (
    <div className="box">
      {fields.map((field, id) => (
        <Field
          user={user}
          key={id}
          checkWinningCondition={checkWinningCondition}
          toggleUser={toggleUser}
          id={id}
          field={field}
          click={click}
        />
      ))}
    </div>
  );
};

export default Box;
