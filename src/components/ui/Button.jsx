export const Button = ({type, design, children, onClick}) => {
  const customType = type === undefined ? 'button' : type;
  const styles = `
    p-2 capitalize font-semibold text-inherit text-4xl
    ${(design === 'primary') ? 'bg-neutral-900 text-purple-900' : 
      'text-red-900 underline'}
  `;
  
  return (
    <button 
      type={customType} 
      className={styles}
      onClick={onClick}
    >
      {children}
    </button>
  )
}
