import './Texts.css';

export const H1 = (props: any) => {
  const { children } = props;

  return (
    <h1>
      {children}
    </h1>
  );
};

export const H2 = (props: any) => {
  const { children } = props;

  return (
    <h2>
      {children}
    </h2>
  );
};

export const H3 = (props: any) => {
  const { children } = props;

  return (
    <h3>
      {children}
    </h3>
  );
};

export const P = (props: any) => {
  const { children } = props;

  return (
    <p>
      {children}
    </p>
  );
};
