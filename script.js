<!DOCTYPE html>
<html lang="it">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Calcolo Preventivo Isolamento</title>
    <script src="https://cdn.tailwindcss.com"></script>
    <style>
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap');
        body {
            font-family: 'Inter', sans-serif;
            background-color: #f3f4f6;
        }
        .container {
            max-width: 800px;
        }
        .form-section {
            background-color: #ffffff;
            border-radius: 12px;
            box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
            padding: 24px;
        }
        .result-section {
            background-color: #d1fae5;
            border-radius: 12px;
            box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
            padding: 24px;
        }
        .input-group select, .input-group input {
            border: 1px solid #d1d5db;
            border-radius: 8px;
            padding: 10px;
            width: 100%;
        }
        .button {
            transition: background-color 0.3s, transform 0.1s;
        }
        .button:hover {
            transform: translateY(-2px);
        }
        .button:active {
            transform: translateY(0);
        }
    </style>
</head>
<body class="bg-gray-100 flex items-center justify-center min-h-screen p-4">

    <div class="container mx-auto space-y-8">
        <div class="form-section">
            <h1 class="text-2xl font-bold text-gray-800 mb-6 text-center">Calcolo Preventivo Isolamento</h1>

            <div class="space-y-4">
                <div class="input-group">
                    <label for="materiale" class="block text-gray-700 font-medium mb-1">Materiale:</label>
                    <select id="materiale" class="focus:outline-none focus:ring-2 focus:ring-blue-500" onchange="updateOptions()">
                        <option value="lana_di_roccia">Lana di roccia</option>
                        <option value="polinor">Polinor</option>
                        <option value="gomma">Gomma</option>
                    </select>
                </div>

                <div class="input-group">
                    <label for="tipo" class="block text-gray-700 font-medium mb-1">Tipo:</label>
                    <select id="tipo" class="focus:outline-none focus:ring-2 focus:ring-blue-500">
                        <option value="curva">Curve</option>
                        <option value="nudo">Nudo</option>
                        <option value="pvc">PVC</option>
                        <option value="alluminio">Alluminio</option>
                        <option value="inox">Inox</option>
                        <option value="senza_rivestimento">SENZA RIVESTIMENTO</option>
                    </select>
                </div>

                <div class="input-group">
                    <label for="spessore" class="block text-gray-700 font-medium mb-1">Spessore (mm):</label>
                    <select id="spessore" class="focus:outline-none focus:ring-2 focus:ring-blue-500">
                        <!-- Opzioni generate da JavaScript -->
                    </select>
                </div>

                <div class="input-group">
                    <label for="diametro" class="block text-gray-700 font-medium mb-1">Diametro (mm):</label>
                    <select id="diametro" class="focus:outline-none focus:ring-2 focus:ring-blue-500">
                        <!-- Opzioni generate da JavaScript -->
                    </select>
                </div>

                <div class="input-group">
                    <label for="quantita" class="block text-gray-700 font-medium mb-1">Quantità (metri):</label>
                    <input type="number" id="quantita" class="focus:outline-none focus:ring-2 focus:ring-blue-500" value="1" min="1">
                </div>
            </div>

            <button onclick="calculatePrice()" class="button mt-6 w-full bg-blue-600 text-white font-bold py-3 rounded-lg hover:bg-blue-700">
                Calcola Prezzo
            </button>
        </div>

        <div class="result-section hidden" id="result-container">
            <h2 class="text-xl font-bold text-green-700 mb-4">Risultato</h2>
            <p id="prezzoUnitario" class="text-green-800 text-lg mb-2">Prezzo unitario: €0.00</p>
            <p id="prezzoTotale" class="text-green-800 text-lg">Prezzo totale: €0.00</p>
        </div>

        <!-- Messaggio di errore -->
        <div id="error-message" class="hidden bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative" role="alert">
            <strong class="font-bold">Errore!</strong>
            <span class="block sm:inline" id="error-text"></span>
        </div>

    </div>

    <script>
        const materials = {
            lana_di_roccia: {
                curva: {
                    spessori: [10, 20],
                    diametri: {
                        10: [18, 22, 28, 34, 40, 48, 60],
                        20: [18, 22, 28, 34, 40, 48, 60]
                    },
                    prezzi: {
                        10: {
                            18: 12.60, 22: 13.80, 28: 14.40, 34: 15.60, 40: 15.60, 48: 16.80, 60: 18.00
                        },
                        20: {
                            18: 16.50, 22: 16.90, 28: 17.10, 34: 17.70, 40: 18.90, 48: 19.50, 60: 20.70
                        }
                    }
                },
                nudo: {
                    spessori: [10, 20],
                    diametri: {
                        10: [18, 22, 28, 34, 40, 48, 60],
                        20: [18, 22, 28, 34, 40, 48, 60]
                    },
                    prezzi: {
                        10: {
                            18: 12.60, 22: 13.80, 28: 14.40, 34: 15.60, 40: 15.60, 48: 16.80, 60: 18.00
                        },
                        20: {
                            18: 16.50, 22: 16.90, 28: 17.10, 34: 17.70, 40: 18.90, 48: 19.50, 60: 20.70
                        }
                    }
                },
                pvc: {
                    spessori: [10, 20],
                    diametri: {
                        10: [18, 22, 28, 34, 40, 48, 60],
                        20: [18, 22, 28, 34, 40, 48, 60]
                    },
                    prezzi: {
                        10: {
                            18: 16.20, 22: 18.50, 28: 19.20, 34: 20.40, 40: 21.60, 48: 24.00, 60: 27.60
                        },
                        20: {
                            18: 16.50, 22: 16.90, 28: 17.10, 34: 17.70, 40: 18.90, 48: 19.50, 60: 20.70
                        }
                    }
                },
                alluminio: {
                    spessori: [10, 20],
                    diametri: {
                        10: [18, 22, 28, 34, 40, 48, 60],
                        20: [18, 22, 28, 34, 40, 48, 60]
                    },
                    prezzi: {
                        10: {
                            18: 38.18, 22: 41.82, 28: 43.64, 34: 46.59, 40: 48.41, 48: 54.17, 60: 58.64
                        },
                        20: {
                            18: 35.40, 22: 36.60, 28: 37.20, 34: 38.40, 40: 39.00, 48: 41.40, 60: 44.40
                        }
                    }
                },
                inox: {
                    spessori: [10, 20],
                    diametri: {
                        10: [18, 22, 28, 34, 40, 48, 60],
                        20: [18, 22, 28, 34, 40, 48, 60]
                    },
                    prezzi: {
                        10: {
                            18: 62.40, 22: 63.90, 28: 64.90, 34: 67.50, 40: 71.60, 48: 74.40, 60: 76.80
                        },
                        20: {
                            18: 47.20, 22: 47.60, 28: 48.00, 34: 49.60, 40: 52.00, 48: 55.20, 60: 58.40
                        }
                    }
                },
                 senza_rivestimento: {
                    spessori: [10, 20],
                    diametri: {
                        10: [18, 22, 28, 34, 40, 48, 60],
                        20: [18, 22, 28, 34, 40, 48, 60]
                    },
                    prezzi: {
                        10: {
                            18: 12.60, 22: 13.80, 28: 14.40, 34: 15.60, 40: 15.60, 48: 16.80, 60: 18.00
                        },
                        20: {
                            18: 16.50, 22: 16.90, 28: 17.10, 34: 17.70, 40: 18.90, 48: 19.50, 60: 20.70
                        }
                    }
                }
            },
            polinor: {
                 curva: {
                    spessori: [10, 20],
                    diametri: {
                        10: [18, 22, 28, 34, 40, 48, 60],
                        20: [18, 22, 28, 34, 40, 48, 60]
                    },
                    prezzi: {
                        10: {
                            18: 12.60, 22: 13.80, 28: 14.40, 34: 15.60, 40: 15.60, 48: 16.80, 60: 18.00
                        },
                        20: {
                            18: 16.50, 22: 16.90, 28: 17.10, 34: 17.70, 40: 18.90, 48: 19.50, 60: 20.70
                        }
                    }
                },
                nudo: {
                    spessori: [10, 20],
                    diametri: {
                        10: [18, 22, 28, 34, 40, 48, 60],
                        20: [18, 22, 28, 34, 40, 48, 60]
                    },
                    prezzi: {
                        10: {
                            18: 12.60, 22: 13.80, 28: 14.40, 34: 15.60, 40: 15.60, 48: 16.80, 60: 18.00
                        },
                        20: {
                            18: 16.50, 22: 16.90, 28: 17.10, 34: 17.70, 40: 18.90, 48: 19.50, 60: 20.70
                        }
                    }
                },
                pvc: {
                    spessori: [10, 20],
                    diametri: {
                        10: [18, 22, 28, 34, 40, 48, 60],
                        20: [18, 22, 28, 34, 40, 48, 60]
                    },
                    prezzi: {
                        10: {
                            18: 16.20, 22: 18.50, 28: 19.20, 34: 20.40, 40: 21.60, 48: 24.00, 60: 27.60
                        },
                        20: {
                            18: 16.50, 22: 16.90, 28: 17.10, 34: 17.70, 40: 18.90, 48: 19.50, 60: 20.70
                        }
                    }
                },
                alluminio: {
                    spessori: [10, 20],
                    diametri: {
                        10: [18, 22, 28, 34, 40, 48, 60],
                        20: [18, 22, 28, 34, 40, 48, 60]
                    },
                    prezzi: {
                        10: {
                            18: 38.18, 22: 41.82, 28: 43.64, 34: 46.59, 40: 48.41, 48: 54.17, 60: 58.64
                        },
                        20: {
                            18: 35.40, 22: 36.60, 28: 37.20, 34: 38.40, 40: 39.00, 48: 41.40, 60: 44.40
                        }
                    }
                },
                inox: {
                    spessori: [10, 20],
                    diametri: {
                        10: [18, 22, 28, 34, 40, 48, 60],
                        20: [18, 22, 28, 34, 40, 48, 60]
                    },
                    prezzi: {
                        10: {
                            18: 62.40, 22: 63.90, 28: 64.90, 34: 67.50, 40: 71.60, 48: 74.40, 60: 76.80
                        },
                        20: {
                            18: 47.20, 22: 47.60, 28: 48.00, 34: 49.60, 40: 52.00, 48: 55.20, 60: 58.40
                        }
                    }
                },
                 senza_rivestimento: {
                    spessori: [10, 20],
                    diametri: {
                        10: [18, 22, 28, 34, 40, 48, 60],
                        20: [18, 22, 28, 34, 40, 48, 60]
                    },
                    prezzi: {
                        10: {
                            18: 12.60, 22: 13.80, 28: 14.40, 34: 15.60, 40: 15.60, 48: 16.80, 60: 18.00
                        },
                        20: {
                            18: 16.50, 22: 16.90, 28: 17.10, 34: 17.70, 40: 18.90, 48: 19.50, 60: 20.70
                        }
                    }
                }
            },
            gomma: {
                nudo: {
                    spessori: [6, 9],
                    diametri: {
                        6: [18, 22, 28, 34, 40, 48, 60],
                        9: [18, 22, 28, 34, 40, 48, 60]
                    },
                    prezzi: {
                        6: {
                            18: 12.60, 22: 13.80, 28: 14.40, 34: 15.60, 40: 15.60, 48: 16.80, 60: 18.00
                        },
                        9: {
                            18: 16.20, 22: 18.50, 28: 19.20, 34: 20.40, 40: 21.60, 48: 24.00, 60: 27.60
                        }
                    }
                },
                 senza_rivestimento: {
                    spessori: [6, 9],
                    diametri: {
                        6: [18, 22, 28, 34, 40, 48, 60],
                        9: [18, 22, 28, 34, 40, 48, 60]
                    },
                    prezzi: {
                        6: {
                            18: 12.60, 22: 13.80, 28: 14.40, 34: 15.60, 40: 15.60, 48: 16.80, 60: 18.00
                        },
                        9: {
                            18: 16.20, 22: 18.50, 28: 19.20, 34: 20.40, 40: 21.60, 48: 24.00, 60: 27.60
                        }
                    }
                }
            }
        };

        function updateOptions() {
            const materiale = document.getElementById('materiale').value;
            const tipo = document.getElementById('tipo').value;
            const spessoreSelect = document.getElementById('spessore');
            const diametroSelect = document.getElementById('diametro');

            spessoreSelect.innerHTML = '';
            diametroSelect.innerHTML = '';
            
            // Gestisce le opzioni di rivestimento in base al materiale
            const tipoSelect = document.getElementById('tipo');
            const tipoOptions = tipoSelect.options;

            // Rimuovi tutte le opzioni tranne "SENZA RIVESTIMENTO"
            for (let i = tipoOptions.length - 1; i >= 0; i--) {
                if (tipoOptions[i].value !== "senza_rivestimento" && tipoOptions[i].value !== "curva") {
                    tipoSelect.remove(i);
                }
            }
            
            // Aggiungi le opzioni di tipo in base al materiale
            if (materiale === 'lana_di_roccia' || materiale === 'polinor') {
                const types = ["nudo", "pvc", "alluminio", "inox"];
                types.forEach(type => {
                    const option = document.createElement('option');
                    option.value = type;
                    option.text = type.charAt(0).toUpperCase() + type.slice(1);
                    tipoSelect.appendChild(option);
                });
            } else if (materiale === 'gomma') {
                 const types = ["nudo"];
                 types.forEach(type => {
                    const option = document.createElement('option');
                    option.value = type;
                    option.text = type.charAt(0).toUpperCase() + type.slice(1);
                    tipoSelect.appendChild(option);
                });
            }

            // Imposta il tipo di default e aggiorna le opzioni di spessore e diametro
            tipoSelect.value = tipo;
            updateSpessoreAndDiametro();
        }

        function updateSpessoreAndDiametro() {
             const materiale = document.getElementById('materiale').value;
             const tipo = document.getElementById('tipo').value;
             const spessoreSelect = document.getElementById('spessore');
             const diametroSelect = document.getElementById('diametro');

             spessoreSelect.innerHTML = '';
             diametroSelect.innerHTML = '';
             
             // Ottieni le opzioni di spessore e diametro
             const selectedMaterial = materials[materiale];
             const selectedType = selectedMaterial[tipo];
             if (selectedType) {
                 selectedType.spessori.forEach(spessore => {
                     const option = document.createElement('option');
                     option.value = spessore;
                     option.text = spessore + " mm";
                     spessoreSelect.appendChild(option);
                 });

                 const selectedSpessore = spessoreSelect.value;
                 const diametri = selectedType.diametri[selectedSpessore];
                 if (diametri) {
                     diametri.forEach(diametro => {
                         const option = document.createElement('option');
                         option.value = diametro;
                         option.text = diametro + " mm";
                         diametroSelect.appendChild(option);
                     });
                 }
             }
        }

        function calculatePrice() {
            const materiale = document.getElementById('materiale').value;
            const tipo = document.getElementById('tipo').value;
            const spessore = document.getElementById('spessore').value;
            const diametro = document.getElementById('diametro').value;
            const quantita = document.getElementById('quantita').value;
            const resultContainer = document.getElementById('result-container');
            const errorElement = document.getElementById('error-message');
            const errorTextElement = document.getElementById('error-text');

            if (!materiale || !tipo || !spessore || !diametro || !quantita || quantita <= 0) {
                errorTextElement.textContent = "Assicurati di aver selezionato tutte le opzioni e inserito una quantità valida.";
                errorElement.classList.remove('hidden');
                resultContainer.classList.add('hidden');
                return;
            }

            const spessoreInt = parseInt(spessore);
            const diametroInt = parseInt(diametro);
            const quantitaFloat = parseFloat(quantita);

            const selectedMaterial = materials[materiale];
            const selectedType = selectedMaterial[tipo];
            
            if (selectedType && selectedType.prezzi[spessoreInt] && selectedType.prezzi[spessoreInt][diametroInt]) {
                const prezzoUnitario = selectedType.prezzi[spessoreInt][diametroInt];
                const prezzoTotale = prezzoUnitario * quantitaFloat;

                document.getElementById('prezzoUnitario').textContent = `Prezzo unitario: €${prezzoUnitario.toFixed(2)}`;
                document.getElementById('prezzoTotale').textContent = `Prezzo totale: €${prezzoTotale.toFixed(2)}`;

                resultContainer.classList.remove('hidden');
                errorElement.classList.add('hidden');
            } else {
                errorTextElement.textContent = "Nessun prezzo trovato per le opzioni selezionate.";
                errorElement.classList.remove('hidden');
                resultContainer.classList.add('hidden');
            }
        }

        document.getElementById('spessore').addEventListener('change', updateSpessoreAndDiametro);

        // Chiamata iniziale per popolare le opzioni
        window.onload = function() {
            updateOptions();
        }
    </script>
</body>
</html>

