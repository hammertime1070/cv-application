function Buttons({ cancel, save, remove }) {
    return (
        <div className="buttons">
            <button className="delete" onClick={remove} type="button">
                Delete
            </button>
            <button className="cancel" onClick={cancel} type="button">
                Cancel
            </button>
            <button className="Save" onClick={save} type="button">
                Save
            </button>
        </div>
    )
}

export default Buttons;