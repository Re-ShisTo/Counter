const Button = ({ handleClick, children }) => {
  console.log(`Rendering ${children}`);

  return (
    <p>
      <button type="button" onClick={handleClick}>
        {children}
      </button>
    </p>
  );
};

export default Button;
