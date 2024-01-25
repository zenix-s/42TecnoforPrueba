interface ActionProps {
  children: React.ReactNode;
  onClick?: () => void;
}

const Action = ({ children: child, onClick }: ActionProps) => {
  return (
    <button onClick={onClick} className="action-button">
      {child}
    </button>
  );
};

export default Action;
