window.jsPDF = window.jspdf.jsPDF;
// === CREDENZIALI SUPABASE ===
const SUPABASE_URL = 'https://jbouxpoqdtfslcztptjh.supabase.co';
const SUPABASE_ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Impib3V4cG9xZHRmc2xjenRwdGpoIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTc2MDkzNzUsImV4cCI6MjA3MzE4NTM3NX0.ucK_OZJVoMw5u0ryCkaAVdqpdfLaCWe8kgs4RDQVmvU';
const materiali = {
    gomma: {
        diametri: [18, 22, 28, 34, 42, 48, 60, 76, 89, 114, 140, 168],
        spessori: [19, 25, 32],
        coating: ['nudo', 'pvc', 'alluminio', 'inox']
    },
    lana: {
        diametri: [18, 22, 28, 34, 42, 48, 60, 76, 89, 114, 140, 168, 220, 273, 324],
        spessori: [20, 25, 30, 40],
        coating: ['nudo', 'pvc', 'alluminio', 'inox']
    },
    polinor: {
        diametri: [18, 22, 28, 34, 42, 48, 60, 76, 89, 114, 140, 168, 220, 273, 324],
        spessori: [20, 25, 30, 40],
        coating: ['nudo', 'pvc', 'alluminio', 'inox']
    }
};

const prezziGomma = {
    '18': {
        '19': { 'nudo': 16.80, 'pvc': 21.00, 'alluminio': 32.40, 'inox': 43.20 },
        '25': { 'nudo': 20.40, 'pvc': 24.60, 'alluminio': 37.20, 'inox': 49.60 },
        '32': { 'nudo': 21.60, 'pvc': 28.80, 'alluminio': 45.60, 'inox': 60.80 }
    },
    '22': {
        '19': { 'nudo': 16.80, 'pvc': 21.00, 'alluminio': 32.40, 'inox': 43.20 },
        '25': { 'nudo': 20.40, 'pvc': 25.20, 'alluminio': 37.20, 'inox': 49.60 },
        '32': { 'nudo': 24.00, 'pvc': 28.80, 'alluminio': 45.60, 'inox': 60.80 }
    },
    '28': {
        '19': { 'nudo': 19.20, 'pvc': 22.80, 'alluminio': 37.80, 'inox': 50.40 },
        '25': { 'nudo': 21.60, 'pvc': 25.80, 'alluminio': 41.40, 'inox': 55.20 },
        '32': { 'nudo': 25.80, 'pvc': 31.20, 'alluminio': 46.20, 'inox': 61.60 }
    },
    '34': {
        '19': { 'nudo': 20.40, 'pvc': 25.20, 'alluminio': 38.40, 'inox': 51.20 },
        '25': { 'nudo': 24.60, 'pvc': 29.40, 'alluminio': 43.20, 'inox': 57.60 },
        '32': { 'nudo': 28.20, 'pvc': 33.00, 'alluminio': 52.20, 'inox': 69.60 }
    },
    '42': {
        '19': { 'nudo': 21.60, 'pvc': 25.80, 'alluminio': 40.80, 'inox': 54.00 },
        '25': { 'nudo': 25.20, 'pvc': 30.60, 'alluminio': 44.40, 'inox': 59.20 },
        '32': { 'nudo': 29.40, 'pvc': 34.80, 'alluminio': 54.00, 'inox': 72.00 }
    },
    '48': {
        '19': { 'nudo': 23.40, 'pvc': 27.60, 'alluminio': 44.40, 'inox': 59.20 },
        '25': { 'nudo': 27.00, 'pvc': 31.80, 'alluminio': 50.40, 'inox': 67.20 },
        '32': { 'nudo': 30.00, 'pvc': 36.00, 'alluminio': 54.60, 'inox': 72.80 }
    },
    '60': {
        '19': { 'nudo': 25.20, 'pvc': 30.60, 'alluminio': 48.00, 'inox': 64.00 },
        '25': { 'nudo': 28.80, 'pvc': 33.60, 'alluminio': 50.40, 'inox': 67.20 },
        '32': { 'nudo': 31.80, 'pvc': 37.80, 'alluminio': 56.40, 'inox': 75.20 }
    },
    '76': {
        '19': { 'nudo': 29.40, 'pvc': 34.80, 'alluminio': 51.60, 'inox': 68.80 },
        '25': { 'nudo': 32.40, 'pvc': 39.00, 'alluminio': 58.80, 'inox': 78.40 },
        '32': { 'nudo': 35.40, 'pvc': 42.60, 'alluminio': 64.80, 'inox': 86.40 }
    },
    '89': {
        '19': { 'nudo': 32.40, 'pvc': 39.00, 'alluminio': 61.20, 'inox': 81.60 },
        '25': { 'nudo': 36.00, 'pvc': 42.60, 'alluminio': 64.80, 'inox': 86.40 },
        '32': { 'nudo': 39.00, 'pvc': 46.20, 'alluminio': 68.40, 'inox': 91.20 }
    },
    '114': {
        '19': { 'nudo': 39.00, 'pvc': 46.80, 'alluminio': 69.60, 'inox': 92.80 },
        '25': { 'nudo': 41.40, 'pvc': 50.40, 'alluminio': 72.60, 'inox': 96.80 },
        '32': { 'nudo': 45.60, 'pvc': 54.00, 'alluminio': 81.60, 'inox': 108.80 }
    },
    '140': {
        '19': { 'nudo': 46.20, 'pvc': 54.00, 'alluminio': 85.80, 'inox': 114.40 },
        '25': { 'nudo': 49.20, 'pvc': 58.80, 'alluminio': 88.80, 'inox': 118.40 },
        '32': { 'nudo': 52.20, 'pvc': 62.40, 'alluminio': 92.40, 'inox': 123.20 }
    },
    '168': {
        '19': { 'nudo': 53.40, 'pvc': 63.00, 'alluminio': 93.00, 'inox': 124.00 },
        '25': { 'nudo': 54.60, 'pvc': 66.00, 'alluminio': 96.00, 'inox': 128.00 },
        '32': { 'nudo': 60.00, 'pvc': 69.00, 'alluminio': 102.00, 'inox': 136.00 }
    }
};

const prezziLanaPolinor = {
    '18': {
        '20': { 'nudo': 12.60, 'pvc': 16.20, 'alluminio': 34.20, 'inox': 45.60 },
        '25': { 'nudo': 13.20, 'pvc': 16.50, 'alluminio': 35.40, 'inox': 47.20 },
        '30': { 'nudo': 13.80, 'pvc': 16.50, 'alluminio': 35.40, 'inox': 47.20 },
        '40': { 'nudo': 14.40, 'pvc': 17.10, 'alluminio': 36.00, 'inox': 48.00 }
    },
    '22': {
        '20': { 'nudo': 13.20, 'pvc': 16.50, 'alluminio': 35.40, 'inox': 47.20 },
        '25': { 'nudo': 13.80, 'pvc': 17.40, 'alluminio': 37.20, 'inox': 49.60 },
        '30': { 'nudo': 14.40, 'pvc': 17.10, 'alluminio': 36.00, 'inox': 48.00 },
        '40': { 'nudo': 15.00, 'pvc': 17.70, 'alluminio': 39.00, 'inox': 52.00 }
    },
    '28': {
        '20': { 'nudo': 13.80, 'pvc': 17.40, 'alluminio': 37.20, 'inox': 49.60 },
        '25': { 'nudo': 14.40, 'pvc': 18.30, 'alluminio': 40.20, 'inox': 53.60 },
        '30': { 'nudo': 15.00, 'pvc': 17.70, 'alluminio': 39.00, 'inox': 52.00 },
        '40': { 'nudo': 15.60, 'pvc': 18.90, 'alluminio': 41.40, 'inox': 55.20 }
    },
    '34': {
        '20': { 'nudo': 14.40, 'pvc': 18.30, 'alluminio': 40.20, 'inox': 53.60 },
        '25': { 'nudo': 15.00, 'pvc': 19.50, 'alluminio': 41.70, 'inox': 55.60 },
        '30': { 'nudo': 15.60, 'pvc': 18.90, 'alluminio': 41.40, 'inox': 55.20 },
        '40': { 'nudo': 16.20, 'pvc': 19.98, 'alluminio': 43.80, 'inox': 58.40 }
    },
    '42': {
        '20': { 'nudo': 15.00, 'pvc': 19.50, 'alluminio': 41.70, 'inox': 55.60 },
        '25': { 'nudo': 15.60, 'pvc': 20.76, 'alluminio': 45.60, 'inox': 60.80 },
        '30': { 'nudo': 16.20, 'pvc': 19.98, 'alluminio': 43.80, 'inox': 58.40 },
        '40': { 'nudo': 16.80, 'pvc': 21.24, 'alluminio': 48.00, 'inox': 64.00 }
    },
    '48': {
        '20': { 'nudo': 15.60, 'pvc': 20.76, 'alluminio': 45.60, 'inox': 60.80 },
        '25': { 'nudo': 16.20, 'pvc': 21.24, 'alluminio': 48.00, 'inox': 64.00 },
        '30': { 'nudo': 16.80, 'pvc': 21.24, 'alluminio': 48.00, 'inox': 64.00 },
        '40': { 'nudo': 19.80, 'pvc': 25.80, 'alluminio': 55.20, 'inox': 73.60 }
    },
    '60': {
        '20': { 'nudo': 19.80, 'pvc': 25.80, 'alluminio': 55.20, 'inox': 73.60 },
        '25': { 'nudo': 19.80, 'pvc': 25.80, 'alluminio': 55.20, 'inox': 73.60 },
        '30': { 'nudo': 19.80, 'pvc': 25.80, 'alluminio': 55.20, 'inox': 73.60 },
        '40': { 'nudo': 27.36, 'pvc': 29.40, 'alluminio': 63.00, 'inox': 84.00 }
    },
    '76': {
        '20': { 'nudo': 27.36, 'pvc': 29.40, 'alluminio': 63.00, 'inox': 84.00 },
        '25': { 'nudo': 27.36, 'pvc': 29.40, 'alluminio': 63.00, 'inox': 84.00 },
        '30': { 'nudo': 27.36, 'pvc': 29.40, 'alluminio': 63.00, 'inox': 84.00 },
        '40': { 'nudo': 29.52, 'pvc': 32.64, 'alluminio': 68.16, 'inox': 90.88 }
    },
    '89': {
        '20': { 'nudo': 29.52, 'pvc': 32.64, 'alluminio': 68.16, 'inox': 90.88 },
        '25': { 'nudo': 29.52, 'pvc': 32.64, 'alluminio': 68.16, 'inox': 90.88 },
        '30': { 'nudo': 29.52, 'pvc': 32.64, 'alluminio': 68.16, 'inox': 90.88 },
        '40': { 'nudo': 37.73, 'pvc': 41.16, 'alluminio': 82.56, 'inox': 110.08 }
    },
    '114': {
        '20': { 'nudo': 37.73, 'pvc': 41.16, 'alluminio': 82.56, 'inox': 110.08 },
        '25': { 'nudo': 37.73, 'pvc': 41.16, 'alluminio': 82.56, 'inox': 110.08 },
        '30': { 'nudo': 37.73, 'pvc': 41.16, 'alluminio': 82.56, 'inox': 110.08 },
        '40': { 'nudo': 39.17, 'pvc': 42.24, 'alluminio': 84.96, 'inox': 113.28 }
    },
    '140': {
        '20': { 'nudo': 39.17, 'pvc': 42.24, 'alluminio': 84.96, 'inox': 113.28 },
        '25': { 'nudo': 39.17, 'pvc': 42.24, 'alluminio': 84.96, 'inox': 113.28 },
        '30': { 'nudo': 39.17, 'pvc': 42.24, 'alluminio': 84.96, 'inox': 113.28 },
        '40': { 'nudo': 40.80, 'pvc': 47.52, 'alluminio': 96.60, 'inox': 128.80 }
    },
    '168': {
        '20': { 'nudo': 40.80, 'pvc': 47.52, 'alluminio': 96.60, 'inox': 128.80 },
        '25': { 'nudo': 40.80, 'pvc': 47.52, 'alluminio': 96.60, 'inox': 128.80 },
        '30': { 'nudo': 40.80, 'pvc': 47.52, 'alluminio': 96.60, 'inox': 128.80 },
        '40': { 'nudo': 43.92, 'pvc': 53.76, 'alluminio': 109.80, 'inox': 146.40 }
    },
    '220': {
        '40': { 'nudo': 45.00, 'pvc': 56.28, 'alluminio': 117.36, 'inox': 156.48 }
    },
    '273': {
        '40': { 'nudo': 49.56, 'pvc': 63.00, 'alluminio': 129.36, 'inox': 172.48 }
    },
    '324': {
        '40': { 'nudo': 57.12, 'pvc': 70.56, 'alluminio': 144.96, 'inox': 193.28 }
    }
};

let quoteItems = [];

const materialSelect = document.getElementById('material');
const coatingSelect = document.getElementById('coating');
const diameterSelect = document.getElementById('diameter');
const thicknessSelect = document.getElementById('thickness');
const metersInput = document.getElementById('meters');
const curvesInput = document.getElementById('curves');
const addItemBtn = document.getElementById('add-item-btn');
const quoteBody = document.getElementById('quote-body');
const subtotalSpan = document.getElementById('subtotal');
const discountInput = document.getElementById('discount');
const discountAmountSpan = document.getElementById('discount-amount');
const totalSpan = document.getElementById('total');
const downloadPdfBtn = document.getElementById('download-pdf-btn');
const saveQuoteBtn = document.getElementById('save-quote-btn');
const historyBody = document.getElementById('history-body');

const clientNameInput = document.getElementById('client-name');
const clientCompanyInput = document.getElementById('client-company');
const clientEmailInput = document.getElementById('client-email');
const clientPhoneInput = document.getElementById('client-phone');

const curveConversionFactors = {
    '22': 0.29, '28': 0.31, '35': 0.33, '43': 0.35, '48': 0.37, '60': 0.65,
    '76': 0.69, '89': 0.73, '114': 1.06, '140': 1.13, '168': 1.21, '220': 1.81
};

function updateOptions() {
    const selectedMaterial = materialSelect.value;
    const currentMaterial = materiali[selectedMaterial];

    diameterSelect.innerHTML = '';
    currentMaterial.diametri.forEach(d => {
        const option = document.createElement('option');
        option.value = d;
        option.textContent = d;
        diameterSelect.appendChild(option);
    });

    updateThicknessOptions();
}

function updateThicknessOptions() {
    const selectedMaterial = materialSelect.value;
    const currentMaterial = materiali[selectedMaterial];
    
    thicknessSelect.innerHTML = '';
    currentMaterial.spessori.forEach(s => {
        const option = document.createElement('option');
        option.value = s;
        option.textContent = `${s}mm`;
        thicknessSelect.appendChild(option);
    });
}

function getPrice(material, diameter, thickness, coating) {
    let prices;
    if (material === 'gomma') {
        prices = prezziGomma;
    } else {
        prices = prezziLanaPolinor;
    }

    const diam = diameter.toString();
    const spess = thickness.toString();

    if (prices[diam] && prices[diam][spess] && prices[diam][spess][coating]) {
        return prices[diam][spess][coating];
    }
    return 0;
}

function calcolaPrezzoCurva(diameter, thickness, pricePerMeter) {
    const diametroNorma = {
        '18': 22, '22': 22, '28': 28, '34': 35, '42': 43, '48': 48,
        '60': 60, '76': 76, '89': 89, '114': 114, '140': 140, '168': 168,
        '220': 220, '273': 220, '324': 220
    };

    const diametroPerTabella = diametroNorma[diameter.toString()] || 0;
    const fattoreConversione = curveConversionFactors[diametroPerTabella.toString()] || 0;

    return pricePerMeter * fattoreConversione;
}

function addItem() {
    const material = materialSelect.value;
    const coating = coatingSelect.value;
    const diameter = diameterSelect.value;
    const thickness = thicknessSelect.value;
    const meters = parseFloat(metersInput.value) || 0;
    const curves = parseInt(curvesInput.value) || 0;

    if (meters === 0 && curves === 0) {
        alert("Inserisci almeno un valore per metri o curve.");
        return;
    }

    const pricePerMeter = getPrice(material, diameter, thickness, coating);
    const pricePerCurve = calcolaPrezzoCurva(diameter, thickness, pricePerMeter);

    const totalPrice = (meters * pricePerMeter) + (curves * pricePerCurve);

    const newItem = {
        material: material.charAt(0).toUpperCase() + material.slice(1),
        coating: coating.charAt(0).toUpperCase() + coating.slice(1),
        diameter: diameter,
        thickness: thickness,
        meters: meters,
        curves: curves,
        pricePerMeter: pricePerMeter,
        pricePerCurve: pricePerCurve,
        total: totalPrice
    };

    quoteItems.push(newItem);
    renderTable();
    updateTotals();
    clearInputs();
}

function removeItem(index) {
    quoteItems.splice(index, 1);
    renderTable();
    updateTotals();
}

function renderTable() {
    quoteBody.innerHTML = '';
    quoteItems.forEach((item, index) => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td data-label="Materiale">${item.material}</td>
            <td data-label="Rivestimento">${item.coating}</td>
            <td data-label="DxS">DN ${item.diameter} / ${item.thickness}mm</td>
            <td data-label="Metri">${item.meters} mt</td>
            <td data-label="Curve">${item.curves} u.</td>
            <td data-label="Prezzo/ml">${item.pricePerMeter.toFixed(2)} €/ml</td>
            <td data-label="Totale">${item.total.toFixed(2)} €</td>
            <td data-label="Azione"><button class="delete-btn" onclick="removeItem(${index})">Elimina</button></td>
        `;
        quoteBody.appendChild(row);
    });
}

function updateTotals() {
    let subtotal = quoteItems.reduce((sum, item) => sum + item.total, 0);
    const discount = parseFloat(discountInput.value) || 0;
    
    const discountAmount = subtotal * (discount / 100);
    const total = subtotal - discountAmount;

    subtotalSpan.textContent = subtotal.toFixed(2) + ' €';
    discountAmountSpan.textContent = '-' + discountAmount.toFixed(2) + ' €';
    totalSpan.textContent = total.toFixed(2) + ' €';
}

function clearInputs() {
    metersInput.value = 0;
    curvesInput.value = 0;
}

function clearQuote() {
    quoteItems = [];
    renderTable();
    updateTotals();
    clientNameInput.value = '';
    clientCompanyInput.value = '';
    clientEmailInput.value = '';
    clientPhoneInput.value = '';
}

function generatePDF() {
    const doc = new window.jsPDF();

    // Colori e stili
    const primaryColor = '#004d40';
    const accentColor = '#ffb300';
    const textColor = '#263238';
    const darkGrey = '#555555';

    // Intestazione
    doc.setFont('Helvetica', 'bold');
    doc.setTextColor(primaryColor);
    doc.setFontSize(26);
    doc.text('ISOLDEM SRLS', 105, 25, null, null, 'center');
    
    doc.setFont('Helvetica', 'normal');
    doc.setTextColor(darkGrey);
    doc.setFontSize(14);
    doc.text('Preventivo Commerciale', 105, 35, null, null, 'center');

    // Dati Cliente
    const clientName = clientNameInput.value.trim();
    const clientCompany = clientCompanyInput.value.trim();
    const clientEmail = clientEmailInput.value.trim();

    let y = 50;
    if (clientName || clientCompany) {
        doc.setFontSize(12);
        doc.setFont('Helvetica', 'bold');
        doc.setTextColor(primaryColor);
        doc.text('Dati Cliente:', 15, y);
        y += 7;
        doc.setFont('Helvetica', 'normal');
        doc.setTextColor(textColor);
        if (clientName) {
            doc.text(`Nome: ${clientName}`, 15, y);
            y += 6;
        }
        if (clientCompany) {
            doc.text(`Azienda: ${clientCompany}`, 15, y);
            y += 6;
        }
        if (clientEmail) {
            doc.text(`Email: ${clientEmail}`, 15, y);
            y += 6;
        }
        y += 5;
    }

    // Tabella
    const tableHeaders = [
        ['Materiale', 'Riv.', 'Diametro', 'Spessore', 'Metri', 'Curve', 'Totale']
    ];
    
    const tableRows = quoteItems.map(item => [
        item.material,
        item.coating,
        `DN ${item.diameter}`,
        `${item.thickness}mm`,
        `${item.meters}mt`,
        `${item.curves} u.`,
        `${item.total.toFixed(2)} €`
    ]);

    doc.autoTable({
        head: tableHeaders,
        body: tableRows,
        startY: y,
        theme: 'striped',
        styles: {
            font: 'Helvetica',
            fontSize: 10,
            cellPadding: 3,
            valign: 'middle',
            halign: 'left'
        },
        headStyles: {
            fillColor: primaryColor,
            textColor: 255,
            fontStyle: 'bold'
        },
        columnStyles: {
            0: { cellWidth: 25 },
            1: { cellWidth: 15 },
            2: { cellWidth: 20 },
            3: { cellWidth: 20 },
            4: { cellWidth: 20 },
            5: { cellWidth: 20 },
            6: { cellWidth: 25, halign: 'right' }
        },
        alternateRowStyles: {
            fillColor: [245, 245, 245]
        }
    });

    // Ottenere la posizione finale della tabella
    let finalY = doc.autoTable.previous.finalY;

    // Riepilogo Totale gestito da autoTable per evitare distorsioni
    const subtotal = quoteItems.reduce((sum, item) => sum + item.total, 0);
    const discount = parseFloat(discountInput.value) || 0;
    const discountAmount = subtotal * (discount / 100);
    const total = subtotal - discountAmount;
    
    doc.setFontSize(14);
    doc.setFont('Helvetica', 'bold');
    doc.setTextColor(textColor);
    doc.text('Riepilogo', 15, finalY + 15);
    
    const summaryData = [
        ['Subtotale:', `${subtotal.toFixed(2)} €`],
        [`Sconto (${discount}%):`, `-${discountAmount.toFixed(2)} €`],
        [{ content: 'TOTALE:', styles: { fontStyle: 'bold', fontSize: 16, textColor: primaryColor } }, { content: `${total.toFixed(2)} €`, styles: { fontStyle: 'bold', fontSize: 16, textColor: primaryColor } }]
    ];
    
    doc.autoTable({
        body: summaryData,
        startY: finalY + 20,
        theme: 'plain',
        styles: {
            font: 'Helvetica',
            fontSize: 12,
            cellPadding: 2,
            halign: 'right'
        },
        columnStyles: {
            0: { halign: 'left', fontStyle: 'normal' },
            1: { halign: 'right' }
        },
        tableWidth: 80, // Larghezza fissa per la tabella del riepilogo
        margin: { left: 125 } // Allinea a destra
    });

    doc.save('preventivo_isoldem.pdf');
}

// === NUOVE FUNZIONI PER SUPABASE ===

// Funzione per salvare un preventivo nel database
async function saveQuote() {
    if (quoteItems.length === 0) {
        alert('Non puoi salvare un preventivo vuoto!');
        return;
    }

    const newQuote = {
        cliente: clientNameInput.value || clientCompanyInput.value || 'Cliente Generico',
        items: quoteItems,
        sconto: parseFloat(discountInput.value) || 0,
        totale: parseFloat(totalSpan.textContent.replace(' €', ''))
    };

    const { data, error } = await supabase
        .from('preventivi')
        .insert([newQuote]);

    if (error) {
        console.error('Errore nel salvataggio:', error);
        alert('Si è verificato un errore nel salvataggio. Controlla la console per i dettagli.');
    } else {
        alert('Preventivo salvato con successo!');
        clearQuote();
    }
}

// Funzione per caricare i preventivi dal database e mostrarli
async function renderQuoteHistory() {
    const { data, error } = await supabase
        .from('preventivi')
        .select('*')
        .order('data', { ascending: false }); // Ordina dal più recente al meno recente

    if (error) {
        console.error('Errore nel caricamento dei preventivi:', error);
        return;
    }

    historyBody.innerHTML = '';
    if (data.length === 0) {
        const row = document.createElement('tr');
        row.innerHTML = `<td colspan="5" style="text-align:center;">Nessun preventivo salvato.</td>`;
        historyBody.appendChild(row);
        return;
    }

    data.forEach(quote => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td data-label="ID">${quote.id.substring(0, 8)}...</td>
            <td data-label="Data">${new Date(quote.data).toLocaleDateString('it-IT')}</td>
            <td data-label="Cliente">${quote.cliente}</td>
            <td data-label="Totale">${quote.totale.toFixed(2)} €</td>
            <td data-label="Azioni">
                <button class="action-btn" onclick="loadQuote('${quote.id}')">Carica</button>
                <button class="delete-btn" onclick="deleteQuote('${quote.id}')">Elimina</button>
            </td>
        `;
        historyBody.appendChild(row);
    });
}

// Funzione per caricare un preventivo specifico
async function loadQuote(id) {
    const { data, error } = await supabase
        .from('preventivi')
        .select('*')
        .eq('id', id);

    if (error) {
        console.error('Errore nel caricamento del preventivo:', error);
        return;
    }

    if (data && data.length > 0) {
        const quoteToLoad = data[0];
        quoteItems = quoteToLoad.items;
        clientNameInput.value = quoteToLoad.cliente;
        discountInput.value = quoteToLoad.sconto;
        
        renderTable();
        updateTotals();
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }
}

// Funzione per eliminare un preventivo
async function deleteQuote(id) {
    if (confirm('Sei sicuro di voler eliminare questo preventivo?')) {
        const { error } = await supabase
            .from('preventivi')
            .delete()
            .eq('id', id);
        
        if (error) {
            console.error('Errore nell\'eliminazione:', error);
            alert('Si è verificato un errore nell\'eliminazione. Riprova.');
        } else {
            alert('Preventivo eliminato con successo!');
            renderQuoteHistory(); // Aggiorna la tabella dopo l'eliminazione
        }
    }
}

// Event Listeners
materialSelect.addEventListener('change', updateOptions);
addItemBtn.addEventListener('click', addItem);
discountInput.addEventListener('input', updateTotals);
downloadPdfBtn.addEventListener('click', generatePDF);
saveQuoteBtn.addEventListener('click', saveQuote);

// Inizializza le opzioni e carica lo storico dal database
window.onload = () => {
    updateOptions();
    updateThicknessOptions();
    updateTotals();
    renderQuoteHistory();
};
