import InputSection from "../inputSection";

function PersonalDetails({ onChange, email, fullName, phoneNumber, address }) {
    <form className="personal-details">
        <h2>Personal Details</h2>
        <InputSection type="text" id="full-name" labelText="Full Name" value={fullName} onChange={onChange} />
        <InputSection type="email" id="email" labelText="Email" value={email} onChange={onChange} />
        <InputSection type="tel" id="phone-number" labelText="Phone Number" value={phoneNumber} onChange={onChange} />
        <InputSection type="text" id="address" labelText="Address" value={address} onChange={onChange} />
    </form>
}

export default PersonalDetails;