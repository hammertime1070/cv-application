import InputSection from "../inputSection";

function PersonalDetails({ onChange, email, fullName, phoneNumber, address }) {
    return (
    <form className="personal-details">
        <h2>Personal Details</h2>
        <InputSection type="text" id="fullName" label="Full Name" value={fullName} onChange={onChange} />
        <InputSection type="email" id="email" label="Email" value={email} onChange={onChange} />
        <InputSection type="tel" id="phoneNumber" label="Phone Number" value={phoneNumber} onChange={onChange} />
        <InputSection type="text" id="address" label="Address" value={address} onChange={onChange} />
    </form>
    )
}

export default PersonalDetails;