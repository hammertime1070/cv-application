import EducationEntry from "./EducationEntry";

function EducationSection({ educationList, onEducationChange, onAddEducation }) {
    return (
        <div className="education-section">
            <h2>Education</h2>
            {educationList.map((education, index) => (
                <EducationEntry key={index} id={index} education={education} onChange={onEducationChange} />
            ))}
            <button onClick={onAddEducation}>Add Education</button>
        </div>
    )
}

export default EducationSection;