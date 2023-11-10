import InputSection from "../inputSection";

function EducationEntry({ id, onChange, education }) {
    return (
        <div className="education-entry">
            <InputSection type="text" name="schoolName" id={`school-name-${id}`} label="School Name" value={education.schoolName} onChange={(e) => onChange(e, id)}/>
            <InputSection type="text" name="degree" id={`degree-${id}`} label="Degree" value={education.degree} onChange={(e) => onChange(e, id)}/>
            <InputSection type="text" name="date" id={`date-${id}`} label="Date" value={education.date} onChange={(e) => onChange(e, id)}/>
        </div>
    )
}

export default EducationEntry;