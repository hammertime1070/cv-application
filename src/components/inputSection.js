function InputSection({ id, type, label, onChange, value }) {
    return (
        <div className="input-section">
            <label htmlFor={id}>
                <span className="label">{label}</span>
            </label>
            {type === "textarea" ? (
                <textarea id={id} onChange={onChange} value={value}></textarea>
            ) : (
                <input type={type} id={id} onChange={onChange} value={value} />
            )}
        </div>
    )
}

export default InputSection;