import "../styles/Field.css";

type User = {
  char: string;
  places: number[];
};

type FieldProps = {
  user: User;
  checkWinningCondition: (tempFields: string[], user: User) => boolean;
  toggleUser: () => void;
  id: number;
  field: string;
  click: (id: number) => void;
};

const Field = ({ id, field, click }: FieldProps) => {
  return (
    <button onClick={() => click(id)} className="field" id={`${id}`}>
      {field}
    </button>
  );
};

export default Field;
