document.addEventListener("DOMContentLoaded", () => {
    
    // --- 1. SÉLECTION DES ÉLÉMENTS DU DOM ---
    const seasonSelector = document.getElementById('season-selector');
    const meteoSelector = document.getElementById('meteo-selector');
    const eventSelector = document.getElementById('event-selector');
    const generateBtn = document.getElementById('generate-btn');
    
    const emptyState = document.getElementById('empty-state');
    const loader = document.getElementById('loader');
    const allOutfits = document.getElementById('all-outfits');
    const beautyTip = document.getElementById('beauty-tip');
    
    const rainBurstContainer = document.getElementById('rain-drops-burst');
    const allGridItems = document.querySelectorAll('.grid-item');
    const editorialView = document.querySelector('.editorial-view');

    // --- 2. GESTION DES THÈMES ET DE LA PLUIE ---
    function triggerRainBurst() {
        rainBurstContainer.classList.remove('hidden', 'animate-burst');
        void rainBurstContainer.offsetWidth; 
        rainBurstContainer.classList.add('animate-burst');
        setTimeout(() => {
            rainBurstContainer.classList.add('hidden');
            rainBurstContainer.classList.remove('animate-burst');
        }, 2000);
    }

    function updateThemes() {
        const season = seasonSelector.value;
        const weather = meteoSelector.value;
        document.body.className = '';
        document.body.classList.add(`theme-${season}`);
        document.body.classList.add(`weather-${weather}`);
    }

    seasonSelector.addEventListener('change', updateThemes);
    meteoSelector.addEventListener('change', () => {
        updateThemes();
        if (meteoSelector.value === 'pluvieux') triggerRainBurst();
    });
    
    updateThemes();

    // ==========================================
    // 👗 TON DRESSING VIP 
    // ==========================================

    const wardrobe = {

        ete: {
            shopping: {
                soleil: {
                    epure: { piece1: "etesectenue2.jpeg", piece2: "etesecsac2.jpeg", shoes: "etesecchauss2.jpeg", acc: "etesecbij2.jpeg" },
                    elegance: { piece1: "etesectenue3.jpeg", piece2: "etesecsac3.jpeg", shoes: "etesecchauss3.jpeg", acc: "etesecbij3.jpeg" },
                    couture: { piece1: "etesectenue1.jpeg", piece2: "etesecsac1.jpeg", shoes: "etesecchauss1.jpeg", acc: "etesecbij1.jpeg" },
                    makeup: { color: "#F99175", name: "Corail Doux Solaire" }
                },
                pluvieux: {
                    epure: { piece1: "etepluietenue1.jpeg", piece2: "etesecbij2.jpeg", shoes: "etepluiechauss1.jpeg", acc: "etepluiepara1.jpeg" },
                    elegance: { piece1: "etepluietenue2.jpeg", piece2: "etepluiebij1.jpeg", shoes: "etepluiechauss2.jpeg", acc: "etepluiepara1.jpeg" },
                    couture: { piece1: "etepluietenue3.jpeg", piece2: "etesecbij3.jpeg", shoes: "etepluiechauss1.jpeg", acc: "etepluiepara3.jpeg" },
                    makeup: { color: "#F99175", name: "Nude Corail Satiné" }
                }
            },
            // 🔥 AJOUT DU DÎNER ROMANTIQUE ICI (Uniquement Soleil)
            date_restaurant: {
                soleil: {
                    epure: { piece1: "eteromtenue1.jpeg", piece2: "eteromsac1.jpeg", shoes: "eteromchauss1.jpeg", acc: "etcc.jpeg" },
                    elegance: { piece1: "eteromtenue2.jpeg", piece2: "eteromsac2.jpeg", shoes: "eteromchauss2.jpeg", acc: "etesecbij3.jpeg" },
                    couture: { piece1: "eteromtenue3.jpeg", piece2: "eteromsac3.jpeg", shoes: "eteromchauss3.jpeg", acc: "etesecbij1.jpeg" },
                    makeup: { color: "#D4AF37", name: "Or Doré Romantique" }
                }
            }
        },

        automne: {
            shopping: {
                soleil: {
                    epure: { piece1: "automnetenue1.jpeg", piece2: "automnesac1.jpeg", shoes: "automnechauss1.jpeg", acc: "automnebijoux1.jpeg" },
                    elegance: { piece1: "automnetenue2.jpeg", piece2: "automnesac2.jpeg", shoes: "automnechauss2.jpeg", acc: "automnebijoux2.jpeg" },
                    couture: { piece1: "automnetenue3.jpeg", piece2: "automnesac3.jpeg", shoes: "automnechauss3.jpeg", acc: "automnebijoux2.jpeg" },
                    makeup: { color: "#8F5B46", name: "Nude Caramel Chaud" }
                },
                pluvieux: {
                    epure: { piece1: "automnetenue1.jpeg", piece2: "automneparabeige.jpeg", shoes: "automnechauss1.jpeg", acc: "automnebijoux1.jpeg" },
                    elegance: { piece1: "automnetenue2.jpeg", piece2: "automneparamarron.jpeg", shoes: "automnechauss2.jpeg", acc: "automnebijoux2.jpeg" },
                    couture: { piece1: "automnetenue3.jpeg", piece2: "automneparabeige.jpeg", shoes: "automnechauss3.jpeg", acc: "automnebijoux2.jpeg" },
                    makeup: { color: "#8F5B46", name: "Nude Caramel Chaud" }
                }
            }
        },

        hiver: {
            shopping: {
                soleil: {
                    epure: { piece1: "URL_GROS_PULL", piece2: "URL_JEAN", shoes: "URL_BOTTINES", acc: "URL_BONNET" },
                    elegance: { piece1: "URL_COL_ROULE", piece2: "URL_PANTALON_LAINE", shoes: "URL_BOTTINES_TALON", acc: "URL_MANTEAU_LAINE" },
                    couture: { piece1: "URL_ROBE_PULL", piece2: "URL_MANTEAU_CACHEMIRE", shoes: "URL_CUISSARDES", acc: "URL_SAC_CUIR" },
                    makeup: { color: "#C07E78", name: "Vieux Rose Mat Froid" }
                },
                pluvieux: {
                    epure: { piece1: "URL_PULL_CHAUD", piece2: "URL_JEAN", shoes: "URL_BOTTES_PLUIE", acc: "URL_DOUDOUNE" },
                    elegance: { piece1: "URL_COL_ROULE", piece2: "URL_PANTALON", shoes: "URL_BOTTINES_IMPERMEABLES", acc: "URL_MANTEAU_CAPUCHE" },
                    couture: { piece1: "URL_ROBE_CHAUDE", piece2: "URL_TRENCH_DOUBLE", shoes: "URL_BOTTES_CUIR", acc: "URL_PARAPLUIE_LUXE" },
                    makeup: { color: "#C07E78", name: "Vieux Rose Mat Froid" }
                }
            }
        }
    };

    // --- Fonction pour injecter les images dans les grilles ---
    function populateGrid(gridId, levelData) {
        const grid = document.getElementById(gridId);
        const images = grid.querySelectorAll('img');
        
        // Sécurité : si l'URL n'est pas remplacée, on met un fond transparent
        images[0].src = levelData.piece1.startsWith("URL_") ? "data:image/gif;base64,R0lGODlhAQABAIAAAMLCwgAAACH5BAAAAAAALAAAAAABAAEAAAICRAEAOw==" : levelData.piece1;
        images[1].src = levelData.piece2.startsWith("URL_") ? "data:image/gif;base64,R0lGODlhAQABAIAAAMLCwgAAACH5BAAAAAAALAAAAAABAAEAAAICRAEAOw==" : levelData.piece2;
        images[2].src = levelData.shoes.startsWith("URL_") ? "data:image/gif;base64,R0lGODlhAQABAIAAAMLCwgAAACH5BAAAAAAALAAAAAABAAEAAAICRAEAOw==" : levelData.shoes;
        images[3].src = levelData.acc.startsWith("URL_") ? "data:image/gif;base64,R0lGODlhAQABAIAAAMLCwgAAACH5BAAAAAAALAAAAAABAAEAAAICRAEAOw==" : levelData.acc;
    }

    // --- AU CLIC SUR LE BOUTON ---
    generateBtn.addEventListener('click', () => {
        const selectedSeason = seasonSelector.value;
        const selectedEvent = eventSelector.value;
        const selectedWeather = meteoSelector.value;
        
        // 1. Vérification par défaut
        if (selectedEvent === 'default') {
            alert("Veuillez sélectionner un programme dans l'agenda. 👗");
            return;
        }

        // 2. Notre Easter Egg Cocooning 🧸
        if (selectedEvent === 'cocooning') {
            alert("Oups ! 🙈 Notre styliste s'est endormie sous un plaid tout doux en préparant cette tenue... Choisissez un autre programme le temps qu'elle se réveille ! ☕🧸✨");
            return; 
        }

        // 3. Les événements "En cours de création"
        // On autorise TOUJOURS le shopping. 
        // On autorise le date_restaurant UNIQUEMENT si c'est l'Été ET qu'il fait Soleil.
        const isShopping = selectedEvent === 'shopping';
        const isSummerDate = selectedEvent === 'date_restaurant' && selectedSeason === 'ete' && selectedWeather === 'soleil';

        if (!isShopping && !isSummerDate) {
            alert("✨ L'Édito pour cet événement est actuellement en cours de création dans nos ateliers. Découvrez nos sélections disponibles en attendant ! 🪡");
            return;
        }

        // Si tout est bon, on lance l'animation !
        editorialView.scrollTo(0, 0);
        emptyState.classList.add('hidden');
        allOutfits.classList.add('hidden');
        beautyTip.classList.add('hidden');
        loader.classList.remove('hidden');

        allGridItems.forEach(item => {
            item.classList.remove('reveal', 'delay-1', 'delay-2', 'delay-3');
            item.style.opacity = '0'; 
        });

        setTimeout(() => {
            
            // 🔥 On a modifié cette ligne pour qu'elle pioche le bon événement (shopping OU date_restaurant)
            const eventData = wardrobe[selectedSeason][selectedEvent][selectedWeather];
            
            // On injecte les images
            populateGrid('grid-epure', eventData.epure);
            populateGrid('grid-elegance', eventData.elegance);
            populateGrid('grid-couture', eventData.couture);

            // On met à jour le maquillage
            document.getElementById('lip-swatch').style.backgroundColor = eventData.makeup.color;
            document.getElementById('lip-name').textContent = eventData.makeup.name;

            // On affiche le tout
            loader.classList.add('hidden');
            allOutfits.classList.remove('hidden');
            beautyTip.classList.remove('hidden');

            // Animation d'apparition
            allGridItems.forEach((item, index) => {
                const delayIndex = index % 4; 
                if (delayIndex === 0) item.classList.add('reveal');
                if (delayIndex === 1) item.classList.add('reveal', 'delay-1');
                if (delayIndex === 2) item.classList.add('reveal', 'delay-2');
                if (delayIndex === 3) item.classList.add('reveal', 'delay-3');
            });

        }, 1000); 
    });
});