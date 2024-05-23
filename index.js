function calculate() {
    // Get matrix elements
    const a11 = parseFloat(document.getElementById('a11').value);
    const a12 = parseFloat(document.getElementById('a12').value);
    const a21 = parseFloat(document.getElementById('a21').value);
    const a22 = parseFloat(document.getElementById('a22').value);

    if (isNaN(a11) || isNaN(a12) || isNaN(a21) || isNaN(a22)) {
        alert("Please enter valid numbers for all matrix elements.");
        return;
    }

    // Calculate the characteristic polynomial coefficients
    const trace = a11 + a22;
    const determinant = a11 * a22 - a12 * a21;

    const charPoly = `Characteristic Polynomial: λ² - (${trace})λ + (${determinant})`;

    // Verify the Cayley-Hamilton Theorem
    const A = [
        [a11, a12],
        [a21, a22]
    ];
    const I = [
        [1, 0],
        [0, 1]
    ];

    // Calculate A^2
    const A2 = [
        [A[0][0] * A[0][0] + A[0][1] * A[1][0], A[0][0] * A[0][1] + A[0][1] * A[1][1]],
        [A[1][0] * A[0][0] + A[1][1] * A[1][0], A[1][0] * A[0][1] + A[1][1] * A[1][1]]
    ];

    // Calculate p(A) = A^2 - trace(A) * A + det(A) * I
    const pA = [
        [A2[0][0] - trace * A[0][0] + determinant * I[0][0], A2[0][1] - trace * A[0][1] + determinant * I[0][1]],
        [A2[1][0] - trace * A[1][0] + determinant * I[1][0], A2[1][1] - trace * A[1][1] + determinant * I[1][1]]
    ];

    const verification = `Verification of Cayley-Hamilton Theorem: 
    [${pA[0][0]}, ${pA[0][1]}]
    [${pA[1][0]}, ${pA[1][1]}]`;

    document.getElementById('charPoly').innerText = charPoly;
    document.getElementById('verification').innerText = verification;
}
