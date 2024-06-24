const shapeSelect = document.getElementById('shapeSelect');
const infoBox = document.getElementById('infoBox');
const shapeInfo = document.getElementById('shapeInfo');
const rowsInput = document.getElementById('rowsInput');
const columnsInput = document.getElementById('columnsInput');
const columnsLabel = document.getElementById('columnsLabel');
const generateBtn = document.getElementById('generateBtn');
const hint = document.getElementById('hint');
const myShape = document.getElementById('myShape');

const shapeDetails = {
    square: {
        info: "A square is a shape with four equal sides. The number of rows should equal the number of columns (1-10).",
        rowsMin: 1,
        rowsMax: 10,
        colsMin: 1,
        colsMax: 10,
        hint: "Rows and columns should be equal for a square."
    },
    rectangle: {
        info: "A rectangle has opposite sides that are equal. You can set different values for rows (1-10) and columns (1-20) to form a rectangle.",
        rowsMin: 1,
        rowsMax: 10,
        colsMin: 1,
        colsMax: 20,
        hint: "Rows and columns can be different values."
    },
    triangle: {
        info: "A triangle is a shape with three sides. The number of columns should be equal to the number of rows (1-10).",
        rowsMin: 1,
        rowsMax: 10,
        colsMin: 1,
        colsMax: 10,
        hint: "Rows and columns should be equal for a triangle."
    }
};

shapeSelect.onchange = function() {
    const shape = shapeSelect.value;
    const details = shapeDetails[shape];

    if (!shape) {
        infoBox.style.display = 'none';
        return;
    }

    shapeInfo.textContent = details.info;
    rowsInput.min = details.rowsMin;
    rowsInput.max = details.rowsMax;
    columnsInput.min = details.colsMin;
    columnsInput.max = details.colsMax;
    hint.textContent = details.hint;
    columnsInput.disabled = shape === 'triangle'; // Disable columns input for triangle

    // Clear previous inputs
    rowsInput.value = '';
    columnsInput.value = '';
    if (shape === 'triangle') {
        columnsLabel.style.display = 'none';
        columnsInput.style.display = 'none';
    } else {
        columnsLabel.style.display = 'inline';
        columnsInput.style.display = 'inline';
    }

    infoBox.style.display = 'block';
};

rowsInput.oninput = function() {
    const shape = shapeSelect.value;
    const rows = parseInt(rowsInput.value);

    if (shape === 'square' || shape === 'triangle') {
        columnsInput.value = rows;
        columnsInput.disabled = true;
    }
};

columnsInput.oninput = function() {
    const shape = shapeSelect.value;
    const columns = parseInt(columnsInput.value);

    if (shape === 'square') {
        rowsInput.value = columns;
    }
};

generateBtn.onclick = function() {
    const shape = shapeSelect.value;
    const rows = parseInt(rowsInput.value);
    const columns = parseInt(columnsInput.value);

    if (isNaN(rows) || rows < rowsInput.min || rows > rowsInput.max || (shape !== 'triangle' && (isNaN(columns) || columns < columnsInput.min || columns > columnsInput.max))) {
        alert('Please enter valid numbers for rows and columns within the specified range.');
        return;
    }

    if (shape === 'triangle' && rows !== columns) {
        alert('For a triangle, rows and columns should be equal.');
        return;
    }

    myShape.innerHTML = ''; // Clear previous shape

    for (let i = 1; i <= rows; i++) {
        const rowDiv = document.createElement('div');
        rowDiv.className = 'row';
        for (let j = 1; j <= (shape === 'triangle' ? i : columns); j++) {
            const element = document.createElement('div');
            element.className = `shape ${shape}`;
            element.textContent = j; // Display numbers

            // Random color
            const randomColor = '#' + Math.floor(Math.random() * 16777215).toString(16);
            element.style.backgroundColor = randomColor;

            rowDiv.appendChild(element);
        }
        myShape.appendChild(rowDiv);
    }
};