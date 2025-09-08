document.addEventListener('DOMContentLoaded', function () {
    const quoteItems = [];
    let uploadedImage = null;

    const prices = {
        'Lana di roccia': {
            'Acciaio': {
                '20': { 'tubo': 10.50, 'curva': 15.00 },
                '25': { 'tubo': 11.00, 'curva': 16.00 },
                '30': { 'tubo': 12.00, 'curva': 17.50 },
                '40': { 'tubo': 14.00, 'curva': 20.00 },
                '50': { 'tubo': 16.50, 'curva': 23.00 },
                '60': { 'tubo': 18.00, 'curva': 25.00 }
            },
            'Alluminio': {
                '20': { 'tubo': 9.50, 'curva': 13.00 },
                '25': { 'tubo': 10.00, 'curva': 14.00 },
                '30': { 'tubo': 11.00, 'curva': 15.50 },
                '40': { 'tubo': 13.00, 'curva': 18.00 },
                '50': { 'tubo': 15.50, 'curva': 21.00 },
                '60': { 'tubo': 17.00, 'curva': 23.00 }
            },
            'PVC ALU': {
                '20': { 'tubo': 8.50, 'curva': 12.00 },
                '25': { 'tubo': 9.00, 'curva': 13.00 },
                '30': { 'tubo': 10.00, 'curva': 14.50 },
                '40': { 'tubo': 12.00, 'curva': 17.00 },
                '50': { 'tubo': 14.50, 'curva': 20.00 },
                '60': { 'tubo': 16.00, 'curva': 22.00 }
            },
            'PVC normale': {
                '20': { 'tubo': 7.50, 'curva': 11.00 },
                '25': { 'tubo': 8.00, 'curva': 12.00 },
                '30': { 'tubo': 9.00, 'curva': 13.50 },
                '40': { 'tubo': 11.00, 'curva': 16.00 },
                '50': { 'tubo': 13.50, 'curva': 19.00 },
                '60': { 'tubo': 15.00, 'curva': 21.00 }
            }
        },
        'Polinor': {
            'Acciaio': {
                '20': { 'tubo': 9.00, 'curva': 13.00 },
                '25': { 'tubo': 9.50, 'curva': 14.00 },
                '30': { 'tubo': 10.50, 'curva': 15.50 },
                '40': { 'tubo': 12.50, 'curva': 18.00 },
                '50': { 'tubo': 14.50, 'curva': 21.00 },
                '60': { 'tubo': 16.00, 'curva': 23.00 }
            },
            'Alluminio': {
                '20': { 'tubo': 8.00, 'curva': 11.00 },
                '25': { 'tubo': 8.50, 'curva': 12.00 },
                '30': { 'tubo': 9.50, 'curva': 13.50 },
                '40': { 'tubo': 11.50, 'curva': 16.00 },
                '50': { 'tubo': 13.50, 'curva': 19.00 },
                '60': { 'tubo': 15.00, 'curva': 21.00 }
            },
            'PVC ALU': {
                '20': { 'tubo': 7.00, 'curva': 10.00 },
                '25': { 'tubo': 7.50, 'curva': 11.00 },
                '30': { 'tubo': 8.50, 'curva': 12.50 },
                '40': { 'tubo': 10.50, 'curva': 15.00 },
                '50': { 'tubo': 12.50, 'curva': 18.00 },
                '60': { 'tubo': 14.00, 'curva': 20.00 }
            },
            'PVC normale': {
                '20': { 'tubo': 6.00, 'curva': 9.00 },
                '25': { 'tubo': 6.50, 'curva': 10.00 },
                '30': { 'tubo': 7.50, 'curva': 11.50 },
                '40': { 'tubo': 9.50, 'curva': 14.00 },
                '50': { 'tubo': 11.50, 'curva': 17.00 },
                '60': { 'tubo': 13.00, 'curva': 19.00 }
            }
        },
        'Gomma': {
            'Acciaio': {
                '19': { 'tubo': 8.50, 'curva': 12.00 },
                '25': { 'tubo': 9.00, 'curva': 13.00 },
                '32': { 'tubo': 10.00, 'curva': 14.50 },
                '40': { 'tubo': 12.00, 'curva': 17.00 },
                '50': { 'tubo': 14.00, 'curva': 20.00 }
            },
            'Alluminio': {
                '19': { 'tubo': 7.50, 'curva': 10.00 },
                '25': { 'tubo': 8.00, 'curva': 11.00 },
                '32': { 'tubo': 9.00, 'curva': 12.50 },
                '40': { 'tubo': 11.00, 'curva': 15.00 },
                '50': { 'tubo': 13.00, 'curva': 18.00 }
            },
             'PVC ALU': {
                '19': { 'tubo': 6.50, 'curva': 9.00 },
                '25': { 'tubo': 7.00, 'curva': 10.00 },
                '32': { 'tubo': 8.00, 'curva': 11.50 },
                '40': { 'tubo': 10.00, 'curva': 14.00 },
                '50': { 'tubo': 12.00, 'curva': 17.00 }
            },
            'PVC normale': {
                '19': { 'tubo': 5.50, 'curva': 8.00 },
                '25': { 'tubo': 6.00, 'curva': 9.00 },
                '32': { 'tubo': 7.00, 'curva': 10.50 },
                '40': { 'tubo': 9.00, 'curva': 13.00 },
                '50': { 'tubo': 11.00, 'curva': 16.00 }
            }
        }
    };

    const diameters = {
        'Lana di roccia': [18, 22, 28, 35, 42, 48, 54, 60, 64, 76, 89, 108, 114, 133, 140, 168, 219],
        'Polinor': [18, 22, 28, 35, 42, 48, 54, 60, 64, 76, 89],
        'Gomma': [18, 22, 28, 35, 42, 48, 54, 60, 64, 76, 89]
    };

    const thicknesses = {
        'Lana di roccia': [20, 25, 30, 40, 50, 60],
        'Polinor': [20, 25, 30, 40, 50, 60],
        'Gomma': [19, 25, 32, 40, 50]
    };

    const materialSelect = document.getElementById('material-type');
    const diameterSelect = document.getElementById('diameter');
    const thicknessSelect = document.getElementById('thickness');
    const addItemBtn = document.getElementById('add-item-btn');
    const quoteSummary = document.getElementById('quote-summary');
    const totalCostEl = document.getElementById('total-cost');
    const discountInput = document.getElementById('discount');
    const tabPreventivo = document.getElementById('tab-preventivo');
    const tabChat = document.getElementById('tab-chat');
    const preventivoSection = document.getElementById('preventivo-section');
    const chatSection = document.getElementById('chat-section');
    const chatInput = document.getElementById('chat-input');
    const sendBtn = document.getElementById('send-btn');
    const chatHistory = document.getElementById('chat-history');
    const notificationBox = document.getElementById('notification-box');
    const downloadPdfBtn = document.getElementById('download-pdf-btn');
    const cantiereInput = document.getElementById('cantiere');
    const logoImg = document.getElementById('logo-img');
    
    let logoBase64 = logoImg.src;

    function updateOptions() {
        const selectedMaterial = materialSelect.value;
        
        diameterSelect.innerHTML = '';
        diameters[selectedMaterial].forEach(d => {
            const option = document.createElement('option');
            option.value = d;
            option.textContent = d;
            diameterSelect.appendChild(option);
        });

        thicknessSelect.innerHTML = '';
        thicknesses[selectedMaterial].forEach(t => {
            const option = document.createElement('option');
            option.value = t;
            option.textContent = t;
            thicknessSelect.appendChild(option);
        });
    }

    function showNotification(message, isError = false) {
        notificationBox.textContent = message;
        notificationBox.className = 'show fixed top-5 right-5 p-4 rounded-lg shadow-lg text-white';
        notificationBox.classList.add(isError ? 'bg-red-500' : 'bg-blue-500');
        setTimeout(() => {
            notificationBox.classList.remove('show');
        }, 3000);
    }
    
    function renderQuote() {
        quoteSummary.innerHTML = '';
        let total = 0;
        const groupedItems = {};

        quoteItems.forEach(item => {
            const key = `${item.material} + ${item.coating}`;
            if (!groupedItems[key]) {
                groupedItems[key] = [];
            }
            groupedItems[key].push(item);
        });

        for (const group in groupedItems) {
            const groupContainer = document.createElement('div');
            groupContainer.className = 'line-item p-4 mb-4 border rounded-lg';
            
            let groupTotal = 0;
            let groupHtml = `<div class="flex justify-between items-center font-bold mb-2">
                                <span>${group}</span>
                                <span class="group-total"></span>
                             </div>`;
            
            groupedItems[group].forEach((item, index) => {
                const itemTotal = (item.length * item.pricePerMeter) + (item.curves * item.pricePerCurve);
                groupTotal += itemTotal;
                
                const itemHtml = `
                    <div class="flex justify-between items-center py-1" data-index="${quoteItems.indexOf(item)}">
                        <div>
                            <p class="font-medium">${item.diameter}/${item.thickness} ML ${item.length.toFixed(2)} + Curve PZ ${item.curves}</p>
                            <p class="text-sm text-gray-500">Tubo: €${item.pricePerMeter.toFixed(2)}/m, Curva: €${item.pricePerCurve.toFixed(2)}/pz</p>
                        </div>
                        <div class="flex items-center">
                            <span class="mr-4 font-semibold text-gray-800">€${itemTotal.toFixed(2)}</span>
                            <button class="btn-remove text-red-500 hover:text-red-700" data-index="${quoteItems.indexOf(item)}">
                                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                  <path fill-rule="evenodd" d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm4 0a1 1 0 012 0v6a1 1 0 11-2 0V8z" clip-rule="evenodd" />
                                </svg>
                            </button>
                        </div>
                    </div>
                `;
                groupHtml += itemHtml;
            });

            groupContainer.innerHTML = groupHtml;
            groupContainer.querySelector('.group-total').textContent = `Totale: €${groupTotal.toFixed(2)}`;
            quoteSummary.appendChild(groupContainer);

            total += groupTotal;
        }
        
        const discount = parseFloat(discountInput.value) || 0;
        const discountedTotal = total * (1 - discount / 100);
        totalCostEl.textContent = `€${discountedTotal.toFixed(2)}`;

        document.querySelectorAll('.btn-remove').forEach(button => {
            button.addEventListener('click', (event) => {
                const index = parseInt(event.currentTarget.dataset.index);
                quoteItems.splice(index, 1);
                renderQuote();
            });
        });
    }

    materialSelect.addEventListener('change', updateOptions);
    discountInput.addEventListener('input', renderQuote);

    addItemBtn.addEventListener('click', () => {
        const material = materialSelect.value;
        const coating = document.getElementById('coating-type').value;
        const diameter = diameterSelect.value;
        const thickness = thicknessSelect.value;
        const length = parseFloat(document.getElementById('length').value) || 0;
        const curves = parseInt(document.getElementById('curves').value) || 0;

        if (length === 0 && curves === 0) {
            showNotification("Inserire una lunghezza o un numero di curve.", true);
            return;
        }

        const priceData = prices[material]?.[coating]?.[thickness];
        if (!priceData) {
            showNotification(`Prezzo non disponibile per ${material} con spessore ${thickness} e rivestimento ${coating}.`, true);
            return;
        }
        
        const pricePerMeter = priceData.tubo || 0;
        const pricePerCurve = priceData.curva || 0;

        quoteItems.push({ material, coating, diameter, thickness, length, curves, pricePerMeter, pricePerCurve });
        renderQuote();

        document.getElementById('length').value = '';
        document.getElementById('curves').value = '';
    });

    tabPreventivo.addEventListener('click', () => {
        preventivoSection.style.display = 'block';
        chatSection.style.display = 'none';
        tabPreventivo.classList.add('active');
        tabChat.classList.remove('active');
    });

    tabChat.addEventListener('click', () => {
        preventivoSection.style.display = 'none';
        chatSection.style.display = 'block';
        tabChat.classList.add('active');
        tabPreventivo.classList.remove('active');
        chatHistory.scrollTop = chatHistory.scrollHeight;
    });
    
    downloadPdfBtn.addEventListener('click', () => {
        if (quoteItems.length === 0) {
            showNotification("Aggiungi almeno un articolo al preventivo prima di scaricare.", true);
            return;
        }

        try {
            const { jsPDF } = window.jspdf;
            const doc = new jsPDF();
            
            const cantiere = cantiereInput.value || 'N/A';
            const date = new Date().toLocaleDateString('it-IT');
            let y = 20;

            if (logoBase64) {
                doc.addImage(logoBase64, 'PNG', 14, 15, 20, 20);
            }
            doc.setFontSize(22);
            doc.setFont("helvetica", "bold");
            doc.text("ISOLDEM SRLS", 38, 25);
            
            doc.setFontSize(12);
            doc.setFont("helvetica", "normal");
            doc.text(`Preventivo per: ${cantiere}`, 14, 45);
            doc.text(`Data: ${date}`, 14, 52);

            y = 65;
            
            const groupedItems = {};
            quoteItems.forEach(item => {
                const key = `${item.material} + ${item.coating}`;
                if (!groupedItems[key]) groupedItems[key] = [];
                groupedItems[key].push(item);
            });

            const tableData = [];
            for (const group in groupedItems) {
                tableData.push([{ content: group, colSpan: 4, styles: { fontStyle: 'bold', fillColor: [220, 220, 220] } }]);
                groupedItems[group].forEach(item => {
                    const itemTotal = (item.length * item.pricePerMeter) + (item.curves * item.pricePerCurve);
                    tableData.push([
                        `Diam. ${item.diameter}/${item.thickness}mm`,
                        `Tubi: ${item.length} ML`,
                        `Curve: ${item.curves} PZ`,
                        `€${itemTotal.toFixed(2)}`
                    ]);
                });
            }
            
            doc.autoTable({
                startY: y,
                head: [['Descrizione', 'Lunghezza', 'Curve', 'Subtotale']],
                body: tableData,
                theme: 'striped',
                headStyles: { fillColor: [79, 70, 229] }
            });

            y = doc.autoTable.previous.finalY + 10;
            
            const total = quoteItems.reduce((sum, item) => sum + (item.length * item.pricePerMeter) + (item.curves * item.pricePerCurve), 0);
            const discount = parseFloat(discountInput.value) || 0;
            const discountedTotal = total * (1 - discount / 100);

            doc.setFontSize(12);
            doc.setFont("helvetica", "bold");
            doc.text(`Subtotale:`, 140, y, { align: 'right' });
            doc.text(`€${total.toFixed(2)}`, 200, y, { align: 'right' });
            
            y += 7;
            doc.text(`Sconto (${discount}%):`, 140, y, { align: 'right' });
            doc.text(`-€${(total - discountedTotal).toFixed(2)}`, 200, y, { align: 'right' });
            
            y += 10;
            doc.setFontSize(14);
            doc.text(`TOTALE:`, 140, y, { align: 'right' });
            doc.text(`€${discountedTotal.toFixed(2)}`, 200, y, { align: 'right' });
            
            doc.save(`Preventivo_${cantiere.replace(/\s/g, '_')}.pdf`);

        } catch (error) {
            console.error("Errore durante la generazione del PDF:", error);
            showNotification("Si è verificato un errore critico durante la generazione del PDF. Controlla la console per i dettagli.", true);
        }
    });

    updateOptions();
});

