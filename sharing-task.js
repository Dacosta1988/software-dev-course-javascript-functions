/*
===========================================
🤝 Collaborative Coding Challenge: Event Helpers
===========================================

🎯 Objective:
Students will work in small teams to collaboratively design and implement
reusable functions that solve specific tasks. This activity encourages:

- Teamwork
- Critical thinking
- Knowledge sharing
*/

// ============================================
// 🎉 Scenario:
// Your bootcamp is organizing an event to showcase projects.
// Your team will write reusable JavaScript functions to help manage the event.
// Each function must:
// - Use parameters
// - Use return statements
// - Follow the single responsibility principle
// ============================================


// ============================================
// 🧩 Task 1: Generate Attendee Badge
// ============================================
// Create a function that:
// - Takes a name and a role (e.g., "Alice", "speaker")
// - Returns a string in the format: "Name: Alice, Role: Speaker"

// Steps:
// 1. Define the function with two parameters.
// 2. Format the output string properly.
// 3. Capitalize the role if needed.
// 4. Return the result.


// ============================================
// 🧩 Task 2: Calculate Event Cost
// ============================================
// Create a function that:
// - Takes number of attendees and cost per attendee.
// - Applies a 10% discount if attendees exceed 100.
// - Returns the total cost.

// Steps:
// 1. Multiply attendees by cost.
// 2. Check if attendee count is over 100.
// 3. If so, apply a 10% discount.
// 4. Return the final total.


// ============================================
// 🧩 Task 3: Validate Email
// ============================================
// Create a function that:
// - Takes an email string as input.
// - Returns true if the email contains both "@" and "." characters.
// - Returns false otherwise.

// Steps:
// 1. Check if the string includes both "@" and ".".
// 2. Return true or false accordingly.


// ============================================
// 🧠 Collaborative Steps
// ============================================

// 📌 Design Phase:
// - Brainstorm function requirements: What inputs and outputs are needed?
// - Assign roles within your team:
//   ▸ Pseudocode Writer
//   ▸ Initial Coder
//   ▸ Testers / Debuggers

// 🛠️ Implementation Phase:
// - Write and refine your three functions as a team
// - Use return statements and ensure reusability

// 🧪 Testing Phase:
// - Each member writes test cases for each function
// - Use console.log() to test different inputs and edge cases

// 🎤 Presentation Phase:
// - Share your functions with the class
// - Explain how your team approached the design and testing process

// ✅ Bonus: Can you extend any of the functions to be more flexible or reusable?


// ============================================
// Solution
// ============================================

// Task 1 pseudocode:
// 1. Receive a name and role.
// 2. Capitalize the first letter of the role.
// 3. Return the formatted badge text.
function generateBadge(name, role) {
    const formattedRole = role.charAt(0).toUpperCase() + role.slice(1).toLowerCase();
    return "Name: " + name + ", Role: " + formattedRole;
}

// Task 2 pseudocode:
// 1. Multiply the attendee count by the cost per attendee.
// 2. If there are more than 100 attendees, keep 90% of the total.
// 3. Return the final cost.
function calculateCost(numberOfAttendees, costPerAttendee) {
    let totalCost = numberOfAttendees * costPerAttendee;

    if (numberOfAttendees > 100) {
        totalCost = totalCost * 0.90;
    }

    return totalCost;
}

// Task 3 pseudocode:
// 1. Check whether the email contains both required characters.
// 2. Return the resulting true or false value.
function isValidEmail(email) {
    return email.includes("@") && email.includes(".");
}


// ============================================
// Test Cases
// ============================================

console.log("Badge tests:");
console.log(generateBadge("Alice", "speaker"));
console.log(generateBadge("Jordan", "ATTENDEE"));
console.log(generateBadge("Sam", "volunteer"));

console.log("\nCost tests:");
console.log("50 attendees at $25:", calculateCost(50, 25));       // 1250, no discount
console.log("100 attendees at $25:", calculateCost(100, 25));    // 2500, no discount
console.log("120 attendees at $25:", calculateCost(120, 25));    // 2700, 10% discount

console.log("\nEmail tests:");
console.log("student@example.com:", isValidEmail("student@example.com")); // true
console.log("studentexample.com:", isValidEmail("studentexample.com"));   // false
console.log("student@examplecom:", isValidEmail("student@examplecom"));   // false
