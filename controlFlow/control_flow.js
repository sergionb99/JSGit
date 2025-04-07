let userRole = "admin";
let accessLevel;
if (userRole == "admin"){
    accessLevel = "Full access granted";
}
else if(userRole == "manager"){
    accessLevel = "Limited access granted";
}
else{
    accessLevel = "No access granted"
}
console.log("Access level: ", accessLevel);

let isLoggedIn = true;
let userMessage;

if (isLoggedIn == true){
    if (userRole == "admin"){
        userMessage = "Welcome, Admin!";
    }
    else {
        userMessage = "Welcome, User!";
    }
} else {
    userMessage = "Please log in to access the system.";
}
console.log(userMessage);

let userType = "subscriber";
let userCategory;

switch(userType){
    case "admin":
        userCategory = "Administrator";
        break;
    case "manager":
        userCategory = "Manager";
        break;
    case  "subscriber":
        userCategory = "Subscriber";
        break;
    default:
        userCategory = "Unknown";
}
console.log("User Category: ", userCategory);

let isAuthenticated = true;
let authenticationStatus = isAuthenticated ? "Authenticated" : "Not Authenticated";
console.log("Authentication Status: ", authenticationStatus);

//Extra
let employeeRole = "Employee";
let employeeDiet;
if (employeeRole == "Employee") {
    employeeDiet = "Dietary Services";
}
else if (employeeRole == "Enrolled Member") {
    employeeDiet = "Enrolled Member and one-on-one";
}
else if (employeeRole == "Subscriber") {
    employeeDiet = "Partial Dietary Services";
}
else {
    employeeDiet = "Nothing, you need to enroll or at least subscribe first to avail this facility";
}
console.log("You have access to: ", employeeDiet);