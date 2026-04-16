import { ArrowRightIcon, PlayIcon } from "@phosphor-icons/react";

export const Button = ({type, design, children, onClick}) => {
  const customType = type === undefined ? 'button' : type;
  const styles = `
    p-2 capitalize font-semibold text-inherit text-4xl rounded-full
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
      {design === 'primary' && <PlayIcon color="#fff" size={30} weight='fill' />}
    </button>
  )
}
