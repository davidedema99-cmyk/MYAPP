// === LIBRERIE E INIZIALIZZAZIONE ===
window.jsPDF = window.jspdf.jsPDF;
window.html2canvas = html2canvas;

// === CREDENZIALI SUPABASE E CREAZIONE DEL CLIENT ===
const SUPABASE_URL = 'https://jbouxpoqdtfslcztptjh.supabase.co';
const SUPABASE_ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Impib3V4cG9xZHRmc2xjenRwdGpoIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTc2MDkzNzUsImV4cCI6MjA3MzE4NTM3NX0.ucK_OZJVoMw5u0ryCkaAVdqpdfLaCWe8kgs4RDQVmvU';

const supabase = supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY);


// === DATI PRODOTTO E PREZZI ===
const materiali = {
    gomma: {
        diametri: [18, 22, 28, 34, 42, 48, 60, 76, 89, 114, 140, 168],
        spessori: [19, 25, 32],
        coating: ['nudo', 'pvc', 'alluminio', 'inox']
    },
    lana: {
        diametri: [18, 22, 28, 34, 42, 48, 60, 76, 89, 114, 140, 168, 219, 273, 324],
        spessori: [50, 75, 100],
        coating: ['nudo', 'pvc', 'alluminio', 'inox']
    },
    polinor: {
        diametri: [18, 22, 28, 34, 42, 48, 60, 76, 89, 114, 140, 168, 219, 273, 324, 350],
        spessori: [20, 25, 30],
        coating: ['nudo', 'alluminio', 'inox']
    }
};

const prezzi = {
    "18": {
        "19": {
            "nudo": 15.00,
            "pvc": 18.00,
            "alluminio": 25.00,
            "inox": 30.00
        },
        "20": {
            "nudo": 15.00,
            "alluminio": 25.00,
            "inox": 30.00
        },
        "25": {
            "nudo": 18.00,
            "pvc": 22.00,
            "alluminio": 28.00,
            "inox": 33.00
        },
        "30": {
            "nudo": 20.00,
            "alluminio": 28.00,
            "inox": 33.00
        },
        "32": {
            "nudo": 25.00,
            "pvc": 30.00,
            "alluminio": 35.00,
            "inox": 40.00
        }
    },
    "22": {
        "19": {
            "nudo": 18.00,
            "pvc": 21.00,
            "alluminio": 28.00,
            "inox": 33.00
        },
        "20": {
            "nudo": 18.00,
            "alluminio": 28.00,
            "inox": 33.00
        },
        "25": {
            "nudo": 21.00,
            "pvc": 25.00,
            "alluminio": 31.00,
            "inox": 36.00
        },
        "30": {
            "nudo": 23.00,
            "alluminio": 31.00,
            "inox": 36.00
        },
        "32": {
            "nudo": 28.00,
            "pvc": 33.00,
            "alluminio": 38.00,
            "inox": 43.00
        }
    },
    "28": {
        "19": {
            "nudo": 21.00,
            "pvc": 24.00,
            "alluminio": 31.00,
            "inox": 36.00
        },
        "20": {
            "nudo": 21.00,
            "alluminio": 31.00,
            "inox": 36.00
        },
        "25": {
            "nudo": 24.00,
            "pvc": 28.00,
            "alluminio": 34.00,
            "inox": 39.00
        },
        "30": {
            "nudo": 26.00,
            "alluminio": 34.00,
            "inox": 39.00
        },
        "32": {
            "nudo": 31.00,
            "pvc": 36.00,
            "alluminio": 41.00,
            "inox": 46.00
        }
    },
    "34": {
        "19": {
            "nudo": 24.00,
            "pvc": 27.00,
            "alluminio": 34.00,
            "inox": 39.00
        },
        "20": {
            "nudo": 24.00,
            "alluminio": 34.00,
            "inox": 39.00
        },
        "25": {
            "nudo": 27.00,
            "pvc": 31.00,
            "alluminio": 37.00,
            "inox": 42.00
        },
        "30": {
            "nudo": 29.00,
            "alluminio": 37.00,
            "inox": 42.00
        },
        "32": {
            "nudo": 34.00,
            "pvc": 39.00,
            "alluminio": 44.00,
            "inox": 49.00
        }
    },
    "42": {
        "19": {
            "nudo": 27.00,
            "pvc": 30.00,
            "alluminio": 37.00,
            "inox": 42.00
        },
        "20": {
            "nudo": 27.00,
            "alluminio": 37.00,
            "inox": 42.00
        },
        "25": {
            "nudo": 30.00,
            "pvc": 34.00,
            "alluminio": 40.00,
            "inox": 45.00
        },
        "30": {
            "nudo": 32.00,
            "alluminio": 40.00,
            "inox": 45.00
        },
        "32": {
            "nudo": 37.00,
            "pvc": 42.00,
            "alluminio": 47.00,
            "inox": 52.00
        }
    },
    "48": {
        "19": {
            "nudo": 30.00,
            "pvc": 33.00,
            "alluminio": 40.00,
            "inox": 45.00
        },
        "20": {
            "nudo": 30.00,
            "alluminio": 40.00,
            "inox": 45.00
        },
        "25": {
            "nudo": 33.00,
            "pvc": 37.00,
            "alluminio": 43.00,
            "inox": 48.00
        },
        "30": {
            "nudo": 35.00,
            "alluminio": 43.00,
            "inox": 48.00
        },
        "32": {
            "nudo": 40.00,
            "pvc": 45.00,
            "alluminio": 50.00,
            "inox": 55.00
        }
    },
    "50": {
        "50": {
            "nudo": 35.00,
            "alluminio": 45.00,
            "inox": 50.00
        },
        "75": {
            "nudo": 45.00,
            "alluminio": 55.00,
            "inox": 60.00
        },
        "100": {
            "nudo": 60.00,
            "alluminio": 70.00,
            "inox": 75.00
        }
    },
    "60": {
        "19": {
            "nudo": 33.00,
            "pvc": 36.00,
            "alluminio": 43.00,
            "inox": 48.00
        },
        "20": {
            "nudo": 33.00,
            "alluminio": 43.00,
            "inox": 48.00
        },
        "25": {
            "nudo": 36.00,
            "pvc": 40.00,
            "alluminio": 46.00,
            "inox": 51.00
        },
        "30": {
            "nudo": 38.00,
            "alluminio": 46.00,
            "inox": 51.00
        },
        "32": {
            "nudo": 43.00,
            "pvc": 48.00,
            "alluminio": 53.00,
            "inox": 58.00
        },
        "50": {
            "nudo": 40.00,
            "alluminio": 50.00,
            "inox": 55.00
        },
        "75": {
            "nudo": 50.00,
            "alluminio": 60.00,
            "inox": 65.00
        },
        "100": {
            "nudo": 65.00,
            "alluminio": 75.00,
            "inox": 80.00
        }
    },
    "65": {
        "50": {
            "nudo": 45.00,
            "alluminio": 55.00,
            "inox": 60.00
        },
        "75": {
            "nudo": 55.00,
            "alluminio": 65.00,
            "inox": 70.00
        },
        "100": {
            "nudo": 70.00,
            "alluminio": 80.00,
            "inox": 85.00
        }
    },
    "76": {
        "19": {
            "nudo": 36.00,
            "pvc": 39.00,
            "alluminio": 46.00,
            "inox": 51.00
        },
        "20": {
            "nudo": 36.00,
            "alluminio": 46.00,
            "inox": 51.00
        },
        "25": {
            "nudo": 39.00,
            "pvc": 43.00,
            "alluminio": 49.00,
            "inox": 54.00
        },
        "30": {
            "nudo": 41.00,
            "alluminio": 49.00,
            "inox": 54.00
        },
        "32": {
            "nudo": 46.00,
            "pvc": 51.00,
            "alluminio": 56.00,
            "inox": 61.00
        },
        "50": {
            "nudo": 45.00,
            "alluminio": 55.00,
            "inox": 60.00
        },
        "75": {
            "nudo": 55.00,
            "alluminio": 65.00,
            "inox": 70.00
        },
        "100": {
            "nudo": 70.00,
            "alluminio": 80.00,
            "inox": 85.00
        }
    },
    "80": {
        "50": {
            "nudo": 50.00,
            "alluminio": 60.00,
            "inox": 65.00
        },
        "75": {
            "nudo": 60.00,
            "alluminio": 70.00,
            "inox": 75.00
        },
        "100": {
            "nudo": 75.00,
            "alluminio": 85.00,
            "inox": 90.00
        }
    },
    "89": {
        "19": {
            "nudo": 39.00,
            "pvc": 42.00,
            "alluminio": 49.00,
            "inox": 54.00
        },
        "20": {
            "nudo": 39.00,
            "alluminio": 49.00,
            "inox": 54.00
        },
        "25": {
            "nudo": 42.00,
            "pvc": 46.00,
            "alluminio": 52.00,
            "inox": 57.00
        },
        "30": {
            "nudo": 44.00,
            "alluminio": 52.00,
            "inox": 57.00
        },
        "32": {
            "nudo": 49.00,
            "pvc": 54.00,
            "alluminio": 59.00,
            "inox": 64.00
        },
        "50": {
            "nudo": 50.00,
            "alluminio": 60.00,
            "inox": 65.00
        },
        "75": {
            "nudo": 60.00,
            "alluminio": 70.00,
            "inox": 75.00
        },
        "100": {
            "nudo": 75.00,
            "alluminio": 85.00,
            "inox": 90.00
        }
    },
    "100": {
        "50": {
            "nudo": 55.00,
            "alluminio": 65.00,
            "inox": 70.00
        },
        "75": {
            "nudo": 65.00,
            "alluminio": 75.00,
            "inox": 80.00
        },
        "100": {
            "nudo": 80.00,
            "alluminio": 90.00,
            "inox": 95.00
        }
    },
    "114": {
        "19": {
            "nudo": 42.00,
            "pvc": 45.00,
            "alluminio": 52.00,
            "inox": 57.00
        },
        "20": {
            "nudo": 42.00,
            "alluminio": 52.00,
            "inox": 57.00
        },
        "25": {
            "nudo": 45.00,
            "pvc": 49.00,
            "alluminio": 55.00,
            "inox": 60.00
        },
        "30": {
            "nudo": 47.00,
            "alluminio": 55.00,
            "inox": 60.00
        },
        "32": {
            "nudo": 52.00,
            "pvc": 57.00,
            "alluminio": 62.00,
            "inox": 67.00
        },
        "50": {
            "nudo": 60.00,
            "alluminio": 70.00,
            "inox": 75.00
        },
        "75": {
            "nudo": 70.00,
            "alluminio": 80.00,
            "inox": 85.00
        },
        "100": {
            "nudo": 85.00,
            "alluminio": 95.00,
            "inox": 100.00
        }
    },
    "125": {
        "50": {
            "nudo": 65.00,
            "alluminio": 75.00,
            "inox": 80.00
        },
        "75": {
            "nudo": 75.00,
            "alluminio": 85.00,
            "inox": 90.00
        },
        "100": {
            "nudo": 90.00,
            "alluminio": 100.00,
            "inox": 105.00
        }
    },
    "140": {
        "19": {
            "nudo": 45.00,
            "pvc": 48.00,
            "alluminio": 55.00,
            "inox": 60.00
        },
        "20": {
            "nudo": 45.00,
            "alluminio": 55.00,
            "inox": 60.00
        },
        "25": {
            "nudo": 48.00,
            "pvc": 52.00,
            "alluminio": 58.00,
            "inox": 63.00
        },
        "30": {
            "nudo": 50.00,
            "alluminio": 58.00,
            "inox": 63.00
        },
        "32": {
            "nudo": 55.00,
            "pvc": 60.00,
            "alluminio": 65.00,
            "inox": 70.00
        },
        "50": {
            "nudo": 70.00,
            "alluminio": 80.00,
            "inox": 85.00
        },
        "75": {
            "nudo": 80.00,
            "alluminio": 90.00,
            "inox": 95.00
        },
        "100": {
            "nudo": 95.00,
            "alluminio": 105.00,
            "inox": 110.00
        }
    },
    "150": {
        "50": {
            "nudo": 75.00,
            "alluminio": 85.00,
            "inox": 90.00
        },
        "75": {
            "nudo": 85.00,
            "alluminio": 95.00,
            "inox": 100.00
        },
        "100": {
            "nudo": 100.00,
            "alluminio": 110.00,
            "inox": 115.00
        }
    },
    "168": {
        "19": {
            "nudo": 48.00,
            "pvc": 51.00,
            "alluminio": 58.00,
            "inox": 63.00
        },
        "20": {
            "nudo": 48.00,
            "alluminio": 58.00,
            "inox": 63.00
        },
        "25": {
            "nudo": 51.00,
            "pvc": 55.00,
            "alluminio": 61.00,
            "inox": 66.00
        },
        "30": {
            "nudo": 53.00,
            "alluminio": 61.00,
            "inox": 66.00
        },
        "32": {
            "nudo": 58.00,
            "pvc": 63.00,
            "alluminio": 68.00,
            "inox": 73.00
        },
        "50": {
            "nudo": 75.00,
            "alluminio": 85.00,
            "inox": 90.00
        },
        "75": {
            "nudo": 85.00,
            "alluminio": 95.00,
            "inox": 100.00
        },
        "100": {
            "nudo": 100.00,
            "alluminio": 110.00,
            "inox": 115.00
        }
    },
    "200": {
        "50": {
            "nudo": 80.00,
            "alluminio": 90.00,
            "inox": 95.00
        },
        "75": {
            "nudo": 90.00,
            "alluminio": 100.00,
            "inox": 105.00
        },
        "100": {
            "nudo": 105.00,
            "alluminio": 115.00,
            "inox": 120.00
        }
    },
    "219": {
        "50": {
            "nudo": 80.00,
            "alluminio": 90.00,
            "inox": 95.00
        },
        "75": {
            "nudo": 90.00,
            "alluminio": 100.00,
            "inox": 105.00
        },
        "100": {
            "nudo": 105.00,
            "alluminio": 115.00,
            "inox": 120.00
        }
    },
    "273": {
        "50": {
            "nudo": 85.00,
            "alluminio": 95.00,
            "inox": 100.00
        },
        "75": {
            "nudo": 95.00,
            "alluminio": 105.00,
            "inox": 110.00
        },
        "100": {
            "nudo": 110.00,
            "alluminio": 120.00,
            "inox": 125.00
        }
    },
    "324": {
        "50": {
            "nudo": 90.00,
            "alluminio": 100.00,
            "inox": 105.00
        },
        "75": {
            "nudo": 100.00,
            "alluminio": 110.00,
            "inox": 115.00
        },
        "100": {
            "nudo": 115.00,
            "alluminio": 125.00,
            "inox": 130.00
        }
    },
    "350": {
        "20": {
            "nudo": 70.00,
            "alluminio": 80.00,
            "inox": 85.00
        },
        "25": {
            "nudo": 75.00,
            "alluminio": 85.00,
            "inox": 90.00
        },
        "30": {
            "nudo": 80.00,
            "alluminio": 90.00,
            "inox": 95.00
        }
    }
};

const quoteItems = [];

// === ELEMENTI HTML ===
const clientNameInput = document.getElementById('client-name');
const clientCompanyInput = document.getElementById('client-company');
const clientEmailInput = document.getElementById('client-email');
const clientPhoneInput = document.getElementById('client-phone');
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
const saveQuoteBtn = document.getElementById('save-quote-btn');
const downloadPdfBtn = document.getElementById('download-pdf-btn');
const historyBody = document.getElementById('history-body');

// === EVENT LISTENERS E FUNZIONI ===
document.addEventListener('DOMContentLoaded', () => {
    // Chiamata iniziale per popolare tutti i menu a tendina
    updateSelectOptions();
    loadQuoteHistory();
});

materialSelect.addEventListener('change', updateSelectOptions);
diameterSelect.addEventListener('change', updateThicknessOptions);
addItemBtn.addEventListener('click', addItem);
discountInput.addEventListener('input', updateTotals);
saveQuoteBtn.addEventListener('click', saveQuote);
downloadPdfBtn.addEventListener('click', generatePDF);


function updateSelectOptions() {
    updateDiameterOptions();
    updateThicknessOptions();
    updateCoatingOptions();
}

function updateDiameterOptions() {
    const selectedMaterial = materialSelect.value;
    diameterSelect.innerHTML = '';
    const diameters = materiali[selectedMaterial].diametri;
    diameters.forEach(diameter => {
        const option = document.createElement('option');
        option.value = diameter;
        option.textContent = diameter;
        diameterSelect.appendChild(option);
    });
}

function updateThicknessOptions() {
    const selectedMaterial = materialSelect.value;
    const selectedDiameter = diameterSelect.value;
    thicknessSelect.innerHTML = '';

    if (selectedDiameter) {
        const spessori = materiali[selectedMaterial].spessori;
        spessori.forEach(spessore => {
            if (prezzi[selectedDiameter] && prezzi[selectedDiameter][spessore]) {
                const option = document.createElement('option');
                option.value = spessore;
                option.textContent = spessore;
                thicknessSelect.appendChild(option);
            }
        });
    }
}

function updateCoatingOptions() {
    const selectedMaterial = materialSelect.value;
    coatingSelect.innerHTML = '';
    const coatings = materiali[selectedMaterial].coating;
    coatings.forEach(coating => {
        const option = document.createElement('option');
        option.value = coating;
        option.textContent = coating.charAt(0).toUpperCase() + coating.slice(1);
        coatingSelect.appendChild(option);
    });
}

function addItem() {
    const selectedMaterial = materialSelect.value;
    const selectedCoating = coatingSelect.value;
    const selectedDiameter = diameterSelect.value;
    const selectedThickness = thicknessSelect.value;
    const meters = parseFloat(metersInput.value) || 0;
    const curves = parseInt(curvesInput.value) || 0;

    let price = 0;
    if (prezzi[selectedDiameter] && prezzi[selectedDiameter][selectedThickness] && prezzi[selectedDiameter][selectedThickness][selectedCoating]) {
        price = prezzi[selectedDiameter][selectedThickness][selectedCoating];
    }

    const total = (meters * price) + (curves * 10); // Curva fissata a 10 euro
    
    if (meters > 0 || curves > 0) {
        const newItem = {
            material: selectedMaterial,
            coating: selectedCoating,
            diameter: selectedDiameter,
            thickness: selectedThickness,
            meters: meters,
            curves: curves,
            price: price,
            total: total
        };

        quoteItems.push(newItem);
        renderQuoteTable();
        updateTotals();
        clearInputs();
    }
}

function renderQuoteTable() {
    quoteBody.innerHTML = '';
    quoteItems.forEach((item, index) => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${item.material.charAt(0).toUpperCase() + item.material.slice(1)}</td>
            <td>${item.coating.charAt(0).toUpperCase() + item.coating.slice(1)}</td>
            <td>DN ${item.diameter}/${item.thickness}mm</td>
            <td>${item.meters} ml</td>
            <td>${item.curves} u.</td>
            <td>${item.price.toFixed(2)} €</td>
            <td>${item.total.toFixed(2)} €</td>
            <td><button class="remove-btn" data-index="${index}">Rimuovi</button></td>
        `;
        quoteBody.appendChild(row);
    });
    document.querySelectorAll('.remove-btn').forEach(button => {
        button.addEventListener('click', removeItem);
    });
}

function removeItem(event) {
    const index = event.target.dataset.index;
    quoteItems.splice(index, 1);
    renderQuoteTable();
    updateTotals();
}

function updateTotals() {
    const subtotal = quoteItems.reduce((sum, item) => sum + item.total, 0);
    const discount = parseFloat(discountInput.value) || 0;
    const discountAmount = subtotal * (discount / 100);
    const total = subtotal - discountAmount;

    subtotalSpan.textContent = `${subtotal.toFixed(2)} €`;
    discountAmountSpan.textContent = `-${discountAmount.toFixed(2)} €`;
    totalSpan.textContent = `${total.toFixed(2)} €`;
}

function clearInputs() {
    metersInput.value = 0;
    curvesInput.value = 0;
}

// === FUNZIONI PER INTERAZIONE CON SUPABASE ===
async function saveQuote() {
    const clientData = {
        name: clientNameInput.value,
        company: clientCompanyInput.value,
        email: clientEmailInput.value,
        phone: clientPhoneInput.value
    };

    const quoteSummary = {
        subtotal: parseFloat(subtotalSpan.textContent),
        discount: parseFloat(discountInput.value),
        total: parseFloat(totalSpan.textContent)
    };

    const quoteData = {
        client_data: clientData,
        items: quoteItems,
        summary: quoteSummary,
        created_at: new Date().toISOString()
    };
    
    // Inserisce i dati nella tabella 'preventivi'
    const { data, error } = await supabase
      .from('preventivi')
      .insert([quoteData]);
    
    if (error) {
        console.error('Errore nel salvataggio del preventivo:', error);
        alert('Errore nel salvataggio del preventivo. Controlla la console per i dettagli.');
    } else {
        alert('Preventivo salvato con successo!');
        loadQuoteHistory();
        quoteItems.length = 0; // Svuota l'array per un nuovo preventivo
        renderQuoteTable();
        updateTotals();
    }
}

async function loadQuoteHistory() {
    const { data, error } = await supabase
      .from('preventivi')
      .select('*')
      .order('created_at', { ascending: false });

    if (error) {
        console.error('Errore nel caricamento dello storico:', error);
        return;
    }

    historyBody.innerHTML = '';
    data.forEach(quote => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${quote.id}</td>
            <td>${new Date(quote.created_at).toLocaleDateString()}</td>
            <td>${quote.client_data.name || ''}</td>
            <td>${quote.summary.total.toFixed(2)} €</td>
            <td><button class="view-btn" data-id="${quote.id}">Visualizza</button></td>
        `;
        historyBody.appendChild(row);
    });
}

// === FUNZIONI PER GENERAZIONE PDF ===
function generatePDF() {
    const { jsPDF } = window.jspdf;
    const doc = new jsPDF();

    // Funzione per centrare il testo
    const centerText = (text, y) => {
        const textWidth = doc.getStringUnitWidth(text) * doc.internal.getFontSize() / doc.internal.scaleFactor;
        const textOffset = (doc.internal.pageSize.width - textWidth) / 2;
        doc.text(text, textOffset, y);
    };

    // Intestazione
    doc.setFontSize(22);
    centerText("ISOLDEM SRLS", 20);
    doc.setFontSize(16);
    centerText("Preventivo Commerciale", 30);
    doc.line(70, 32, 140, 32);

    // Dati Cliente
    doc.setFontSize(12);
    doc.text("Dati Cliente:", 15, 45);
    doc.setFontSize(10);
    doc.text(`Nome: ${clientNameInput.value}`, 15, 55);
    doc.text(`Azienda: ${clientCompanyInput.value}`, 15, 60);
    doc.text(`Email: ${clientEmailInput.value}`, 15, 65);
    doc.text(`Telefono: ${clientPhoneInput.value}`, 15, 70);

    // Dettagli del preventivo - Tabella
    const tableHeaders = [
        "Materiale",
        "Riv.",
        "Diametro",
        "Spessore",
        "Metri",
        "Curve",
        "Totale"
    ];
    const tableData = quoteItems.map(item => [
        item.material.charAt(0).toUpperCase() + item.material.slice(1),
        item.coating.charAt(0).toUpperCase() + item.coating.slice(1),
        `DN ${item.diameter}`,
        `${item.thickness}mm`,
        `${item.meters} ml`,
        `${item.curves} u.`,
        `${item.total.toFixed(2)} €`
    ]);

    doc.autoTable({
        startY: 80,
        head: [tableHeaders],
        body: tableData,
        theme: 'striped',
        styles: {
            fontSize: 8,
            cellPadding: 2,
            overflow: 'linebreak'
        },
        columnStyles: {
            0: { cellWidth: 20 },
            1: { cellWidth: 15 },
            2: { cellWidth: 20 },
            3: { cellWidth: 20 },
            4: { cellWidth: 20 },
            5: { cellWidth: 20 },
            6: { cellWidth: 20 },
        },
        headStyles: {
            fillColor: [40, 48, 49],
            textColor: [255, 255, 255]
        }
    });

    const finalY = doc.autoTable.previous.finalY;

    // Riepilogo
    doc.setFontSize(12);
    doc.text("Riepilogo", 15, finalY + 15);
    doc.setFontSize(10);

    const subtotal = quoteItems.reduce((sum, item) => sum + item.total, 0);
    const discount = parseFloat(discountInput.value) || 0;
    const discountAmount = subtotal * (discount / 100);
    const total = subtotal - discountAmount;

    doc.text(`Subtotale: ${subtotal.toFixed(2)} €`, doc.internal.pageSize.width - 50, finalY + 15, { align: 'right' });
    doc.text(`Sconto (${discount}%): -${discountAmount.toFixed(2)} €`, doc.internal.pageSize.width - 50, finalY + 20, { align: 'right' });
    doc.setFontSize(14);
    doc.setFont(undefined, 'bold');
    doc.text(`TOTALE: ${total.toFixed(2)} €`, doc.internal.pageSize.width - 50, finalY + 30, { align: 'right' });

    doc.save('preventivo.pdf');
}
