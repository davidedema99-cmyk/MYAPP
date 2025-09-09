window.onload = function () {
    const quoteItems = [];
    let uploadedImage = null;
   
    // Oggetto prezzi corretto in base ai listini forniti
    const prices = {
        'Lana di roccia': {
            'Senza Rivestimento': {
                '20': { 'tubo': 12.60, 'curva': 38.18 }, '25': { 'tubo': 13.20, 'curva': 40.00 },
                '30': { 'tubo': 14.40, 'curva': 43.64 }, '40': { 'tubo': 15.00, 'curva': 44.12 },
                '50': { 'tubo': 15.60, 'curva': 44.57 }, '60': { 'tubo': 16.20, 'curva': 45.00 }
            },
            'PVC': {
                '20': { 'tubo': 16.20, 'curva': 49.09 }, '25': { 'tubo': 16.50, 'curva': 50.00 },
                '30': { 'tubo': 17.10, 'curva': 51.82 }, '40': { 'tubo': 17.70, 'curva': 52.06 },
                '50': { 'tubo': 18.30, 'curva': 52.29 }, '60': { 'tubo': 19.50, 'curva': 54.17 }
            },
            'PVC ALU': {
                '20': { 'tubo': 18.90, 'curva': 54.00 }
            },
            'Acciaio': {
                 '20': { 'tubo': 34.20, 'curva': 103.64 }, '25': { 'tubo': 35.40, 'curva': 107.27 },
                '30': { 'tubo': 36.00, 'curva': 109.09 }, '40': { 'tubo': 37.80, 'curva': 111.18 },
                '50': { 'tubo': 39.00, 'curva': 114.71 }, '60': { 'tubo': 41.70, 'curva': 115.83 }
            },
            'Alluminio': {
                '20': { 'tubo': 34.20, 'curva': 103.64 }, '25': { 'tubo': 35.40, 'curva': 107.27 },
                '30': { 'tubo': 36.00, 'curva': 109.09 }, '40': { 'tubo': 37.80, 'curva': 111.18 },
                '50': { 'tubo': 39.00, 'curva': 114.71 }, '60': { 'tubo': 41.70, 'curva': 115.83 }
            },
            'Inox': {
                '20': { 'tubo': 45.60, 'curva': 138.18 }, '25': { 'tubo': 47.20, 'curva': 143.03 },
                '30': { 'tubo': 48.00, 'curva': 145.45 }, '40': { 'tubo': 50.40, 'curva': 148.24 },
                '50': { 'tubo': 52.00, 'curva': 152.94 }, '60': { 'tubo': 55.60, 'curva': 154.44 }
            }
        },
        'Polinor': {
            'Senza Rivestimento': {
                '20': { 'tubo': 12.60, 'curva': 38.18 }, '25': { 'tubo': 13.20, 'curva': 40.00 },
                '30': { 'tubo': 14.40, 'curva': 43.64 }, '40': { 'tubo': 15.00, 'curva': 44.12 },
                '50': { 'tubo': 15.60, 'curva': 44.57 }, '60': { 'tubo': 16.20, 'curva': 45.00 }
            },
            'PVC': {
                '20': { 'tubo': 16.20, 'curva': 49.09 }, '25': { 'tubo': 16.50, 'curva': 50.00 },
                '30': { 'tubo': 17.10, 'curva': 51.82 }, '40': { 'tubo': 17.70, 'curva': 52.06 },
                '50': { 'tubo': 18.30, 'curva': 52.29 }, '60': { 'tubo': 19.50, 'curva': 54.17 }
            },
            'PVC ALU': {
                '20': { 'tubo': 18.90, 'curva': 54.00 }
            },
            'Acciaio': {
                 '20': { 'tubo': 34.20, 'curva': 103.64 }, '25': { 'tubo': 35.40, 'curva': 107.27 },
                '30': { 'tubo': 36.00, 'curva': 109.09 }, '40': { 'tubo': 37.80, 'curva': 111.18 },
                '50': { 'tubo': 39.00, 'curva': 114.71 }, '60': { 'tubo': 41.70, 'curva': 115.83 }
            },
            'Alluminio': {
                '20': { 'tubo': 34.20, 'curva': 103.64 }, '25': { 'tubo': 35.40, 'curva': 107.27 },
                '30': { 'tubo': 36.00, 'curva': 109.09 }, '40': { 'tubo': 37.80, 'curva': 111.18 },
                '50': { 'tubo': 39.00, 'curva': 114.71 }, '60': { 'tubo': 41.70, 'curva': 115.83 }
            },
            'Inox': {
                '20': { 'tubo': 45.60, 'curva': 138.18 }, '25': { 'tubo': 47.20, 'curva': 143.03 },
                '30': { 'tubo': 48.00, 'curva': 145.45 }, '40': { 'tubo': 50.40, 'curva': 148.24 },
                '50': { 'tubo': 52.00, 'curva': 152.94 }, '60': { 'tubo': 55.60, 'curva': 154.44 }
            }
        },
        'Gomma': {
            'Senza Rivestimento': {
                '18': { 'tubo': 16.80, 'curva': 50.91 }, '19': { 'tubo': 16.80, 'curva': 50.91 },
                '22': { 'tubo': 20.40, 'curva': 61.82 }, '25': { 'tubo': 21.60, 'curva': 65.45 },
                '28': { 'tubo': 19.20, 'curva': 56.47 }, '32': { 'tubo': 21.60, 'curva': 63.53 },
                '34': { 'tubo': 24.60, 'curva': 70.29 }, '42': { 'tubo': 28.20, 'curva': 80.57 },
                '48': { 'tubo': 23.40, 'curva': 67.40 }, '60': { 'tubo': 30.00, 'curva': 81.08 },
                '76': { 'tubo': 31.80, 'curva': 75.71 }, '89': { 'tubo': 35.40, 'curva': 72.24 },
                '114': { 'tubo': 39.00, 'curva': 76.47 }, '140': { 'tubo': 46.20, 'curva': 63.29 },
                '168': { 'tubo': 53.40, 'curva': 65.12 }, '168/25': { 'tubo': 54.60, 'curva': 66.59 }
            },
            'PVC': {
                '18': { 'tubo': 21.00, 'curva': 63.64 }, '19': { 'tubo': 21.00, 'curva': 63.64 },
                '22': { 'tubo': 24.60, 'curva': 74.55 }, '25': { 'tubo': 28.80, 'curva': 87.27 },
                '28': { 'tubo': 22.80, 'curva': 67.06 }, '32': { 'tubo': 25.80, 'curva': 75.88 },
                '34': { 'tubo': 31.20, 'curva': 91.76 }, '42': { 'tubo': 29.40, 'curva': 84.00 },
                '48': { 'tubo': 27.60, 'curva': 74.59 }, '60': { 'tubo': 31.80, 'curva': 85.95 },
                '76': { 'tubo': 34.80, 'curva': 96.67 }, '89': { 'tubo': 39.00, 'curva': 79.59 },
                '114': { 'tubo': 46.40, 'curva': 98.82 }, '140': { 'tubo': 54.00, 'curva': 73.97 },
                '168': { 'tubo': 63.00, 'curva': 76.83 }, '168/25': { 'tubo': 66.00, 'curva': 80.49 }
            },
            'Acciaio': {
                 '18': { 'tubo': 37.20, 'curva': 112.73 }, '19': { 'tubo': 37.20, 'curva': 112.73 },
                '22': { 'tubo': 40.20, 'curva': 121.82 }, '25': { 'tubo': 45.60, 'curva': 138.18 },
                '28': { 'tubo': 37.80, 'curva': 111.18 }, '32': { 'tubo': 41.40, 'curva': 121.76 },
                '34': { 'tubo': 46.20, 'curva': 135.88 }, '42': { 'tubo': 44.40, 'curva': 126.86 },
                '48': { 'tubo': 40.80, 'curva': 113.33 }, '60': { 'tubo': 44.40, 'curva': 123.33 },
                '76': { 'tubo': 51.60, 'curva': 105.31 }, '89': { 'tubo': 58.80, 'curva': 120.00 },
                '114': { 'tubo': 69.60, 'curva': 142.35 }, '140': { 'tubo': 81.60, 'curva': 111.52 },
                '168': { 'tubo': 93.00, 'curva': 113.41 }, '168/25': { 'tubo': 96.00, 'curva': 123.66 }
            },
            'Alluminio': {
                '18': { 'tubo': 37.20, 'curva': 112.73 }, '19': { 'tubo': 37.20, 'curva': 112.73 },
                '22': { 'tubo': 40.20, 'curva': 121.82 }, '25': { 'tubo': 45.60, 'curva': 138.18 },
                '28': { 'tubo': 37.80, 'curva': 111.18 }, '32': { 'tubo': 41.40, 'curva': 121.76 },
                '34': { 'tubo': 46.20, 'curva': 135.88 }, '42': { 'tubo': 44.40, 'curva': 126.86 },
                '48': { 'tubo': 40.80, 'curva': 113.33 }, '60': { 'tubo': 44.40, 'curva': 123.33 },
                '76': { 'tubo': 51.60, 'curva': 105.31 }, '89': { 'tubo': 58.80, 'curva': 120.00 },
                '114': { 'tubo': 69.60, 'curva': 142.35 }, '140': { 'tubo': 81.60, 'curva': 111.52 },
                '168': { 'tubo': 93.00, 'curva': 113.41 }, '168/25': { 'tubo': 96.00, 'curva': 123.66 }
            },
            'Inox': {
                '18': { 'tubo': 49.60, 'curva': 150.30 }, '19': { 'tubo': 49.60, 'curva': 150.30 },
                '22': { 'tubo': 53.60, 'curva': 162.42 }, '25': { 'tubo': 60.80, 'curva': 184.24 },
                '28': { 'tubo': 50.40, 'curva': 148.24 }, '32': { 'tubo': 55.20, 'curva': 162.35 },
                '34': { 'tubo': 61.60, 'curva': 181.18 }, '42': { 'tubo': 57.60, 'curva': 164.57 },
                '48': { 'tubo': 69.60, 'curva': 198.86 }, '60': { 'tubo': 74.40, 'curva': 214.35 },
                '76': { 'tubo': 72.00, 'curva': 200.00 }, '89': { 'tubo': 78.40, 'curva': 160.00 },
                '114': { 'tubo': 92.80, 'curva': 189.80 }, '140': { 'tubo': 108.80, 'curva': 213.33 },
                '168': { 'tubo': 124.00, 'curva': 151.22 }, '168/25': { 'tubo': 128.00, 'curva': 156.10 }
            }
        }
    };

    // Diametri e spessori in base al materiale
    const materialOptions = {
        'Lana di roccia': {
            'Senza Rivestimento': {
                diameters: [18, 22, 28, 34, 42, 48, 60, 76, 89, 114, 140, 168, 219, 273, 324],
                thicknesses: [20, 25, 30, 40, 50, 60]
            },
            'PVC': {
                diameters: [18, 22, 28, 34, 42, 48, 60, 76, 89, 114, 140, 168, 219, 273, 324],
                thicknesses: [20, 25, 30, 40, 50, 60]
            },
            'PVC ALU': {
                diameters: [18, 22, 28, 34, 42, 48, 60, 76, 89, 114, 140, 168, 219, 273, 324],
                thicknesses: [20, 25, 30, 40, 50, 60]
            },
            'Acciaio': {
                diameters: [18, 22, 28, 34, 42, 48, 60, 76, 89, 114, 140, 168, 219, 273, 324],
                thicknesses: [20, 25, 30, 40, 50, 60]
            },
            'Alluminio': {
                diameters: [18, 22, 28, 34, 42, 48, 60, 76, 89, 114, 140, 168, 219, 273, 324],
                thicknesses: [20, 25, 30, 40, 50, 60]
            },
            'Inox': {
                diameters: [18, 22, 28, 34, 42, 48, 60, 76, 89, 114, 140, 168, 219, 273, 324],
                thicknesses: [20, 25, 30, 40, 50, 60]
            }
        },
        'Polinor': {
            'Senza Rivestimento': {
                diameters: [18, 22, 28, 34, 42, 48, 60, 76, 89],
                thicknesses: [20, 25, 30, 40, 50, 60]
            },
            'PVC': {
                diameters: [18, 22, 28, 34, 42, 48, 60, 76, 89],
                thicknesses: [20, 25, 30, 40, 50, 60]
            },
            'PVC ALU': {
                diameters: [18, 22, 28, 34, 42, 48, 60, 76, 89],
                thicknesses: [20, 25, 30, 40, 50, 60]
            },
            'Acciaio': {
                diameters: [18, 22, 28, 34, 42, 48, 60, 76, 89],
                thicknesses: [20, 25, 30, 40, 50, 60]
            },
            'Alluminio': {
                diameters: [18, 22, 28, 34, 42, 48, 60, 76, 89],
                thicknesses: [20, 25, 30, 40, 50, 60]
            },
            'Inox': {
                diameters: [18, 22, 28, 34, 42, 48, 60, 76, 89],
                thicknesses: [20, 25, 30, 40, 50, 60]
            }
        },
        'Gomma': {
            'Senza Rivestimento': {
                diameters: [18, 19, 22, 25, 28, 32, 34, 42, 48, 60, 76, 89, 114, 140, 168, '168/25'],
                thicknesses: [18, 19, 22, 25, 28, 32, 34, 42, 48, 60, 76]
            },
            'PVC': {
                diameters: [18, 19, 22, 25, 28, 32, 34, 42, 48, 60, 76, 89, 114, 140, 168, '168/25'],
                thicknesses: [18, 19, 22, 25, 28, 32, 34, 42, 48, 60, 76]
            },
            'Acciaio': {
                diameters: [18, 19, 22, 25, 28, 32, 34, 42, 48, 60, 76, 89, 114, 140, 168, '168/25'],
                thicknesses: [18, 19, 22, 25, 28, 32, 34, 42, 48, 60, 76]
            },
            'Alluminio': {
                diameters: [18, 19, 22, 25, 28, 32, 34, 42, 48, 60, 76, 89, 114, 140, 168, '168/25'],
                thicknesses: [18, 19, 22, 25, 28, 32, 34, 42, 48, 60, 76]
            },
            'Inox': {
                diameters: [18, 19, 22, 25, 28, 32, 34, 42, 48, 60, 76, 89, 114, 140, 168, '168/25'],
                thicknesses: [18, 19, 22, 25, 28, 32, 34, 42, 48, 60, 76]
            }
        }
    };


    // Riferimenti agli elementi DOM
    const materialSelect = document.getElementById('material-type');
    const coatingSelect = document.getElementById('coating-type');
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
    const uploadBtn = document.getElementById('upload-btn');
    const imageUpload = document.getElementById('image-upload');
    const imagePreviewContainer = document.getElementById('image-preview-container');

    let uploadedBase64Image = null;

    // Funzione per mostrare le notifiche
    function showNotification(message, isError = false) {
        notificationBox.textContent = message;
        notificationBox.className = 'show fixed top-5 right-5 p-4 rounded-lg shadow-lg text-white';
        notificationBox.classList.add(isError ? 'bg-red-500' : 'bg-blue-500');
        setTimeout(() => {
            notificationBox.classList.remove('show');
        }, 3000);
    }
   
    // Funzione per aggiornare le opzioni dei menu a tendina
    function updateOptions() {
        const selectedMaterial = materialSelect.value;
        const selectedCoating = coatingSelect.value;

        // Aggiorna opzioni di diametro
        diameterSelect.innerHTML = '';
        const diameters = materialOptions[selectedMaterial]?.[selectedCoating]?.diameters || [];
        diameters.forEach(d => {
            const option = document.createElement('option');
            option.value = d;
            option.textContent = d;
            diameterSelect.appendChild(option);
        });
       
        // Aggiorna opzioni di spessore
        thicknessSelect.innerHTML = '';
        const thicknesses = materialOptions[selectedMaterial]?.[selectedCoating]?.thicknesses || [];
        thicknesses.forEach(t => {
            const option = document.createElement('option');
            option.value = t;
            option.textContent = t;
            thicknessSelect.appendChild(option);
        });
    }

    // Funzione per renderizzare il riepilogo del preventivo
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
                            <p class="font-medium">Diametro ${item.diameter}/${item.thickness}mm | Tubi: ${item.length.toFixed(2)} ML | Curve: ${item.curves} PZ</p>
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

    // Gestione degli eventi
    materialSelect.addEventListener('change', updateOptions);
    coatingSelect.addEventListener('change', updateOptions);
    discountInput.addEventListener('input', renderQuote);
   
    addItemBtn.addEventListener('click', () => {
        const material = materialSelect.value;
        const coating = coatingSelect.value;
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

    // Funzione per mostrare un messaggio di chat
    function showChatMessage(message, sender) {
        const messageEl = document.createElement('div');
        messageEl.className = `flex ${sender === 'user' ? 'justify-end' : 'justify-start'}`;
        messageEl.innerHTML = `<div class="chat-message p-3 rounded-xl shadow-md ${sender === 'user' ? 'user-message' : 'bot-message'}">${message}</div>`;
        chatHistory.appendChild(messageEl);
        chatHistory.scrollTop = chatHistory.scrollHeight;
    }

    // Logica per l'invio del messaggio e la gestione della risposta
    sendBtn.addEventListener('click', async () => {
        const userMessage = chatInput.value.trim();
        if (userMessage === '' && !uploadedBase64Image) return;

        showChatMessage(userMessage, 'user');
        chatInput.value = '';
        imagePreviewContainer.innerHTML = '';
       
        const apiKey = "";
        const apiUrl = `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash-preview-05-20:generateContent?key=${apiKey}`;

        const payload = {
            contents: [
                {
                    role: "user",
                    parts: [
                        { text: userMessage }
                    ]
                }
            ],
            tools: [{ "google_search": {} }],
            systemInstruction: {
                parts: [{ text: "Act as a specialized AI for ISOLDEM SRLS, a company in the thermohydraulic insulation sector. Provide helpful and concise answers related to insulation, materials, and project timelines. Respond in Italian. Keep the tone professional but friendly and helpful." }]
            },
        };

        if (uploadedBase64Image) {
            payload.contents[0].parts.push({
                inlineData: {
                    mimeType: "image/jpeg",
                    data: uploadedBase64Image
                }
            });
            uploadedBase64Image = null;
        }
       
        const loadingMessageEl = document.createElement('div');
        loadingMessageEl.className = 'flex justify-start';
        loadingMessageEl.innerHTML = `<div class="chat-message bot p-3 rounded-xl shadow-md bot-message">...</div>`;
        chatHistory.appendChild(loadingMessageEl);
        chatHistory.scrollTop = chatHistory.scrollHeight;

        try {
            const response = await fetch(apiUrl, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(payload)
            });
           
            const result = await response.json();
            const botResponseText = result.candidates?.[0]?.content?.parts?.[0]?.text;
           
            loadingMessageEl.remove();
            if (botResponseText) {
                showChatMessage(botResponseText, 'bot');
            } else {
                showChatMessage("Mi dispiace, non sono riuscito a generare una risposta. Riprova più tardi.", 'bot');
            }

        } catch (error) {
            console.error('API Error:', error);
            loadingMessageEl.remove();
            showChatMessage("Si è verificato un errore di comunicazione. Riprova più tardi.", 'bot');
        }
    });

    chatInput.addEventListener('keypress', (event) => {
        if (event.key === 'Enter') {
            sendBtn.click();
        }
    });

    // Gestione dell'upload immagine
    uploadBtn.addEventListener('click', () => imageUpload.click());
   
    imageUpload.addEventListener('change', (event) => {
        const file = event.target.files[0];
        if (!file) return;

        const reader = new FileReader();
        reader.onload = (e) => {
            const base64Image = e.target.result.split(',')[1];
            uploadedBase64Image = base64Image;
           
            const imgPreview = document.createElement('img');
            imgPreview.src = e.target.result;
            imgPreview.className = 'w-24 h-24 rounded-lg object-cover mr-2';
            imagePreviewContainer.innerHTML = '';
            imagePreviewContainer.appendChild(imgPreview);
        };
        reader.readAsDataURL(file);
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

            doc.setFontSize(22);
            doc.setFont("helvetica", "bold");
            doc.text("ISOLDEM SRLS", 14, y);
           
            y += 10;
            doc.setFontSize(12);
            doc.setFont("helvetica", "normal");
            doc.text(`Preventivo per: ${cantiere}`, 14, y);
            y += 7;
            doc.text(`Data: ${date}`, 14, y);

            y += 10;
           
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

    // Inizializza i menu a tendina con i valori corretti
    updateOptions();
};
