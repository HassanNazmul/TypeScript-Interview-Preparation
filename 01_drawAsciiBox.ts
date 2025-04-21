// Draw a box using special characters: "-", "|", and "+"
function drawAsciiBox(width: number, height: number): void {

    // Validate the inputs
    if (width < 2 || height < 2) {
        console.log("Width and Height must be greater than 2");
        return;
    }

    // Construct the top and bottom borders
    const topAndBottom = "+" + "-".repeat(width - 2) + "+";

    // Construct the middle rows
    const middle = "|" + " ".repeat(width - 2) + "|";

    // Print the top border
    console.log(topAndBottom);

    // Print the middle section
    for (let i = 0; i < height - 2; i++) {
        console.log(middle);
    }

    // Print the bottom border
    console.log(topAndBottom);
}

// Test the function
drawAsciiBox(10, 5);
