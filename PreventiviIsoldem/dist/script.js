// Dati e prezzi per i materiali e i rivestimenti
const datiIsolazione = {
    lana_di_roccia: {
        label: 'Lana di Roccia',
        diametri: [18, 21, 27, 34, 42, 48, 60, 76, 89, 114, 140, 168, 220],
        spessori: [20, 25, 30, 40, 50, 60],
        prezzo_base_metri: 5.50
    },
    polinor: {
        label: 'Polinor',
        diametri: [18, 21, 27, 34, 42, 48, 60, 76, 89],
        spessori: [20, 25, 30, 40],
        prezzo_base_metri: 6.20
    },
    gomma: {
        label: 'Gomma',
        diametri: [18, 21, 27, 34, 42, 48, 60, 76, 89, 114],
        spessori: [19, 25, 32, 40],
        prezzo_base_metri: 4.80
    }
};

const datiRivestimenti = {
    acciaio: { label: 'Acciaio', prezzo_base: 8.00 },
    alluminio: { label: 'Alluminio', prezzo_base: 7.50 },
    pvc: { label: 'PVC', prezzo_base: 4.00 },
    pvc_alu: { label: 'PVC ALU', prezzo_base: 9.50 }
};

const costoCurvaBase = 15.00;

let preventivoVoci = [];

// Selezioniamo gli elementi del DOM
const cantiereInput = document.getElementById('cantiere-input');
const materialeSelect = document.getElementById('materiale-select');
const rivestimentoSelect = document.getElementById('rivestimento-select');
const diametroSelect = document.getElementById('diametro-select');
const spessoreSelect = document.getElementById('spessore-select');
const metriInput = document.getElementById('metri-input');
const curveInput = document.getElementById('curve-input');
const scontoInput = document.getElementById('sconto-input');
const addItemBtn = document.getElementById('add-item-btn');
const finalPriceSpan = document.getElementById('final-price');
const downloadBtn = document.getElementById('download-btn');
const itemsContainer = document.getElementById('items-container');

// Aggiungi un ascoltatore per l'evento 'change' sul menu a tendina del materiale
materialeSelect.addEventListener('change', aggiornaMenu);

// CHIAMATA FONDAMENTALE per popolare i menu a tendina all'avvio della pagina
aggiornaMenu();

// Funzione per aggiornare i menu a tendina in base al materiale
function aggiornaMenu() {
    const materialeSelezionato = materialeSelect.value;
    
    // Svuota i menu a tendina
    diametroSelect.innerHTML = '<option value="">Seleziona un diametro</option>';
    spessoreSelect.innerHTML = '<option value="">Seleziona uno spessore</option>';

    if (materialeSelezionato && datiIsolazione[materialeSelezionato]) {
        const dati = datiIsolazione[materialeSelezionato];

        // Popola il menu dei diametri
        dati.diametri.forEach(diametro => {
            const option = document.createElement('option');
            option.value = diametro;
            option.textContent = diametro + ' DN';
            diametroSelect.appendChild(option);
        });

        // Popola il menu degli spessori
        dati.spessori.forEach(spessore => {
            const option = document.createElement('option');
            option.value = spessore;
            option.textContent = spessore + 'mm';
            spessoreSelect.appendChild(option);
        });
    }
}

// Funzione per calcolare il totale di una singola voce
function calcolaCostoVoce(voce) {
    const costoBaseMetriIsolamento = datiIsolazione[voce.materiale].prezzo_base_metri;
    const costoBaseMetriRivestimento = voce.rivestimento ? datiRivestimenti[voce.rivestimento].prezzo_base : 0;
    
    const costoMetri = voce.metri * (costoBaseMetriIsolamento + costoBaseMetriRivestimento);
    const costoCurve = voce.curve * costoCurvaBase;

    return costoMetri + costoCurve;
}

// Funzione per aggiungere una nuova voce al preventivo
function aggiungiVoce() {
    const materiale = materialeSelect.value;
    const rivestimento = rivestimentoSelect.value;
    const metri = parseFloat(metriInput.value) || 0;
    const curve = parseFloat(curveInput.value) || 0;
    const spessore = parseFloat(spessoreSelect.value) || 0;
    const diametro = parseFloat(diametroSelect.value) || 0;

    if (!materiale || metri <= 0 || spessore <= 0 || diametro <= 0) {
        alert("Per favore, compila tutti i campi obbligatori per la voce.");
        return;
    }

    const nuovaVoce = {
        materiale: materiale,
        rivestimento: rivestimento,
        diametro: diametro,
        spessore: spessore,
        metri: metri,
        curve: curve
    };
    nuovaVoce.totaleVoce = calcolaCostoVoce(nuovaVoce);

    preventivoVoci.push(nuovaVoce);
    
    // Resetta i valori del form
    materialeSelect.value = '';
    rivestimentoSelect.value = '';
    metriInput.value = 1;
    curveInput.value = 0;
    aggiornaMenu();
    
    renderItems();
}

// Funzione per renderizzare le voci nella pagina
function renderItems() {
    itemsContainer.innerHTML = '';
    preventivoVoci.forEach((voce, index) => {
        const itemCard = document.createElement('div');
        itemCard.className = 'item-card';
        itemCard.innerHTML = `
            <p><strong>Materiale:</strong> ${datiIsolazione[voce.materiale].label}</p>
            <p><strong>Rivestimento:</strong> ${voce.rivestimento ? datiRivestimenti[voce.rivestimento].label : 'Nessuno'}</p>
            <p><strong>Diametro:</strong> ${voce.diametro} DN</p>
            <p><strong>Spessore:</strong> ${voce.spessore}mm</p>
            <p><strong>Metri:</strong> ${voce.metri} m</p>
            <p><strong>Curve:</strong> ${voce.curve}</p>
            <p><strong>Totale Voce:</strong> ${voce.totaleVoce.toLocaleString('it-IT', { style: 'currency', currency: 'EUR' })}</p>
            <button onclick="rimuoviVoce(${index})">X</button>
        `;
        itemsContainer.appendChild(itemCard);
    });
    calcolaTotale();
}

// Funzione per rimuovere una voce
function rimuoviVoce(index) {
    preventivoVoci.splice(index, 1);
    renderItems();
}

// Funzione per calcolare il totale generale
function calcolaTotale() {
    let subTotale = preventivoVoci.reduce((sum, voce) => sum + voce.totaleVoce, 0);
    const sconto = parseFloat(scontoInput.value) || 0;

    if (sconto > 0 && sconto <= 100) {
        subTotale -= subTotale * (sconto / 100);
    }
    
    finalPriceSpan.textContent = subTotale.toLocaleString('it-IT', { style: 'currency', currency: 'EUR' });
    downloadBtn.style.display = preventivoVoci.length > 0 ? 'block' : 'none';
}

// Funzione per generare il PDF
function generaPDF() {
    const { jsPDF } = window.jspdf;
    const doc = new jsPDF();
    const cantiere = cantiereInput.value || "Non specificato";
    let subTotale = preventivoVoci.reduce((sum, voce) => sum + voce.totaleVoce, 0);
    const sconto = parseFloat(scontoInput.value) || 0;
    const totaleConSconto = subTotale - (subTotale * (sconto / 100));

    // Dati per la tabella
    const columns = [
        "Materiale", "Rivestimento", "Diametro", "Spessore", "Metri", "Curve", "Totale"
    ];
    const rows = preventivoVoci.map(voce => [
        datiIsolazione[voce.materiale].label,
        voce.rivestimento ? datiRivestimenti[voce.rivestimento].label : 'Nessuno',
        voce.diametro + ' DN',
        voce.spessore + 'mm',
        voce.metri + ' m',
        voce.curve,
        voce.totaleVoce.toFixed(2) + ' €'
    ]);

    // Titolo e informazioni
    doc.setFontSize(22);
    doc.text("Preventivo Isolamento ISOLDEM", 10, 20);
    doc.setFontSize(12);
    doc.text(`Cantiere: ${cantiere}`, 10, 30);
    doc.text(`Data: ${new Date().toLocaleDateString()}`, 10, 37);

    // Tabella delle voci
    doc.autoTable({
        startY: 45,
        head: [columns],
        body: rows,
        theme: 'striped',
        headStyles: { fillColor: [52, 152, 219] },
        styles: { fontSize: 10, cellPadding: 3 }
    });

    // Totale e Sconto
    const finalY = doc.autoTable.previous.finalY + 10;
    doc.setFontSize(12);
    doc.text(`Subtotale: ${subTotale.toLocaleString('it-IT', { style: 'currency', currency: 'EUR' })}`, 10, finalY);
    doc.text(`Sconto: ${sconto}%`, 10, finalY + 7);
    doc.text(`Totale Finale: ${totaleConSconto.toLocaleString('it-IT', { style: 'currency', currency: 'EUR' })}`, 10, finalY + 14);

    doc.save(`preventivo_${cantiere.replace(/\s/g, '_')}.pdf`);
}


// Aggiungi gli eventi ai bottoni e agli input
addItemBtn.addEventListener('click', aggiungiVoce);
scontoInput.addEventListener('input', calcolaTotale);
downloadBtn.addEventListener('click', generaPDF);