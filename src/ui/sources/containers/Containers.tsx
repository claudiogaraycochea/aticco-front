import './Container.css';

export const Container = (props: any) => {
  const { container, children } = props;
  const propContainer = (container) ? container : 'container';

  return (
    <div
      className={propContainer}
    >
      {children}
    </div>
  );
};

export const Section = (props: any) => {
    const {
      className,
      children,
    } = props;
    return (
      <div
        className={`section ${className}`}
        >
        {children}
      </div>
    );
  };
  
  export const Row = (props: any) => {
    const { children } = props;
    return (
      <div
        className='row'
      >
        {children}
      </div>
    );
  };
  
  export const Col = (props: any) => {
    const {
      size,
      children,
    } = props;
    const propSize = (size) ? `w-${size}` : '';
    
    return (
      <div
        className={`col ${propSize}`}
      >
        {children}
      </div>
    );
  };
  
  export const Box = (props: any) => {
    const {
      className,
      children,
    } = props;
    return (
      <div
        className={`box ${className}`}
      >
        {children}
      </div>
    );
};