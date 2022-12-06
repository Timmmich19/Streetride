import IconButton from "./IconButton";

function Search() {
    return (
        <div className="header__search">
            <IconButton value="/icons/zoom-out.svg" />
            <input className="header__input" type={"text"} />
        </div>
    )
}

export default Search;