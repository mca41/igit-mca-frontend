const verifyFormData = (details) => {
    // check password 
    if (details.password.length < 5) {
        return {
            error: true,
            message: "Enter a valid password"
        }
    }
    //fieldOfInterest
    if (details.batch === 41 && details.regNum === ""){
        return {
            error: true,
            message: "Enter you registration number"
        }
    }
    // roll number
    if (details.rollNum === "") {
        return {
            error: true,
            message: "Enter your roll number"
        }
    }
    // fName 
    if (details.fName.length < 3) {
        if (details.fName === "") {
            return {
                error: true,
                message: "Enter first name"
            }
        }else{
            return {
                error: true,
                message: "First name must be at least 3 character"
            }
        }
    }
    // lName 
    if (details.lName === "") {
        return {
            error: true,
            message: "Enter last name"
        }
    }
    // homeDist 
    if (details.homeDist === "") {
        return {
            error: true,
            message: "Enter home district"
        }
    }
     //mobile number
     if (details.mobile === "" || details.mobile.length != 10) {
        if (details.mobile === "") {
            return {
                error: true,
                message: "Enter mobile number"
            }
        }else{
            return {
                error: true,
                message: "Invalid mobile number"
            }
        }
    }
    //fieldOfInterest
    if (details.batch === 41 && details.fieldOfInterest === ""){
        return {
            error: true,
            message: "Enter field of interest"
        }
    }
    //gradCourse
    if (details.gradCourse === "") {
        return {
            error: true,
            message: "Select your graduation course"
        }
    }
    else{
        return {
            error : false,
            message : "Everything correct"
        }
    }
}
export default verifyFormData