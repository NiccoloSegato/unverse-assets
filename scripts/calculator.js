function submitCalculation() {
    let dateInput = document.getElementById("date").value;
    let timeInput = document.getElementById("time").value;

    // Convert date and time to a Date object
    let dateTime = new Date(dateInput + 'T' + timeInput);
    if (isNaN(dateTime.getTime())) {
        alert("Please enter a valid date and time.");
        return;
    }
    // Get the moon phase, tide and earth rotation
    let moonPhase = DDC_getLiteralMoonValue(dateTime) + " (" + DDC_getMoonValue(dateTime) + ")";
    let tide = DDC_getLiteralTideValue(dateTime) + " (" + DDC_getTideValue(dateTime) + ")";
    let earthRotation = DDC_getLiteralEarthValue(dateTime) + " (" + DDC_getEarthValue(dateTime) + ")";
    // Display the result
    document.getElementById("earth-result").innerHTML = earthRotation;
    document.getElementById("moon-result").innerHTML = moonPhase;
    document.getElementById("tide-result").innerHTML = tide;
    document.getElementById("result").scrollIntoView({ behavior: 'smooth' });
}

function resetForm() {
    document.getElementById("date").value = "";
    document.getElementById("time").value = "";
    document.getElementById("earth-result").innerHTML = "- (-)";
    document.getElementById("moon-result").innerHTML = "- (-)";
    document.getElementById("tide-result").innerHTML = "- (-)";
}