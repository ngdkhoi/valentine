import '../styles/button.css'

type  ButtonProps = {
  context: string;
  size?: number | null;
  color: string;
  onClick: () => void;
};

export const Button = ({
  context,
  size,
  color,
  onClick
}: ButtonProps) => {
  const style = {
    backgroundColor: color,
    height: size ? size * 2 : undefined,
    width: size ? size * 4 : undefined,
  };
  return (
    <button
      onClick={onClick}
      style={style}
    >
      {context}
    </button>
  );
}