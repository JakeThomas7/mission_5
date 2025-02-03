$(document).ready(function() {
    // When the calculate button is clicked
    $('#calculate-btn').click(function() {
        // Get the input values
        var hours = $('#hours').val();
        var rate = 30; // Fixed rate per hour
        var total = 0;

        // Validate the input
        if (hours > 0) {
            // Calculate the total charge
            total = hours * rate;
            // Show the total in the output box
            $('#total').val('$' + total.toFixed(2));
        } else {
            // If hours are not valid, alert the user
            alert('Please enter a valid number of hours!');
        }
    });
});