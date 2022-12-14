function NavButton(props) {
    return (
        <div onClick={props.onClick} className={props.className}>{props.children}</div >
    )
}
export default NavButton;