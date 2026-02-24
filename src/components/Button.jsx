export default function Button({styles, children, onClick}) {
    return (
        <button className={styles} onClick={onClick}>
            {children}
        </button>
    )
}