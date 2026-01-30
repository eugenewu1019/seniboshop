/**
 * Senibo.shop Global Logic
 * Relies on `CONTENT`, `LOCATIONS`, `TRACKING_DICT`, `LANGUAGE_LABELS` from data.js
 */

// --- Global State ---
let currentLang = 'en';
let theme = localStorage.getItem('theme') || 'light';
let activeModal = null;

// --- DOM Elements Cache ---
const elements = {
    html: document.documentElement,
    app: document.getElementById('app'),
    modals: document.getElementById('modals')
};

// --- Initialization ---

function init() {
    // Apply initial theme
    applyTheme(theme);

    // Check hash for direct navigation
    if (window.location.hash === '#track') {
        const trackTabBtn = document.querySelector('[data-tab="track"]');
        if (trackTabBtn) trackTabBtn.click();
        const hero = document.getElementById('home');
        if (hero) hero.scrollIntoView();
    }

    // Set Up Event Listeners
    setupEventListeners();

    // Render Initial Content
    renderAll();

    // Start Ticker Animation
    startTicker();

    // Start Dashboard Clocks
    startClocks();
}

// --- Rendering Logic ---

function renderAll() {
    const t = CONTENT[currentLang];

    // Update simple text elements with data-i18n
    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        const value = getNestedValue(t, key);
        if (value) {
            if (el.tagName === 'INPUT' || el.tagName === 'TEXTAREA') {
                el.placeholder = value;
            } else {
                el.textContent = value;
            }
        }
    });

    // Update Language Switcher Label
    const langLabel = document.getElementById('current-lang-label');
    if (langLabel) langLabel.textContent = LANGUAGE_LABELS[currentLang][currentLang];

    // Re-render complex sections
    renderServices(t.services);
    renderAboutStats(t.about.stats);
    renderDashboard(t.dashboard);
    renderGlobalNetworkLists(t.modals.globalNetwork);
    renderFooterLinks(t.footer, t.general);

    // Update active translations in select dropdowns if they exist
    updateSelectOptions();

    // Update language switcher active state
    updateLanguageSwitcher();
}

function getNestedValue(obj, path) {
    return path.split('.').reduce((prev, curr) => prev ? prev[curr] : null, obj);
}

// --- Theme Logic ---

function toggleTheme() {
    theme = theme === 'light' ? 'dark' : 'light';
    localStorage.setItem('theme', theme);
    applyTheme(theme);
}

function applyTheme(newTheme) {
    if (newTheme === 'dark') {
        document.documentElement.classList.add('dark');
    } else {
        document.documentElement.classList.remove('dark');
    }
}

// --- Language Logic ---

function setLanguage(lang) {
    currentLang = lang;
    renderAll();
    // Close mobile menu if open
    document.getElementById('mobile-menu').classList.add('translate-x-full');
}

// --- Modal Logic ---

function openModal(modalId, contextData = null) {
    activeModal = modalId;
    document.body.classList.add('modal-open');

    // Hide all modals
    document.querySelectorAll('.modal-overlay').forEach(el => el.classList.add('hidden'));

    // Show target modal
    const target = document.getElementById(`modal-${modalId}`);
    if (target) {
        target.classList.remove('hidden');

        // Populate specific modal content if needed
        if (modalId === 'service' && contextData) {
            populateServiceModal(contextData);
        } else if (modalId === 'trackResult' && contextData) {
            populateTrackingModal(contextData);
        } else if (modalId === 'quoteResult' && contextData) {
            populateQuoteModal(contextData);
        } else if (modalId === 'trackError' && contextData) {
            document.getElementById('track-error-msg').textContent = contextData;
        }
    }
}

function closeModal() {
    activeModal = null;
    document.body.classList.remove('modal-open');
    document.querySelectorAll('.modal-overlay').forEach(el => el.classList.add('hidden'));
}

// --- Section Renderers ---

function renderServices(servicesData) {
    const grid = document.getElementById('services-grid');
    if (!grid) return;

    grid.innerHTML = servicesData.items.map((service, index) => {
        const tag = service.tag || 'PREMIUM SERVICE';

        return `
        <div class="service-card group relative bg-white dark:bg-white/[0.02] border border-slate-200 dark:border-white/10 rounded-xl p-8 hover:border-brand-accent/50 dark:hover:border-brand-accent/50 transition-all duration-500 cursor-pointer overflow-hidden shadow-lg hover:shadow-brand-accent/10 hover:-translate-y-2 backdrop-blur-sm" onclick="openModal('service', '${service.id}')">
            <!-- Icon and Index -->
            <div class="flex justify-between items-start mb-8 relative z-10">
                <div class="relative w-16 h-16 flex items-center justify-center">
                    <div class="absolute inset-0 bg-slate-100 dark:bg-white/5 rounded-xl transform rotate-3 group-hover:rotate-12 transition-transform duration-500 border border-slate-200 dark:border-white/5"></div>
                    <div class="absolute inset-0 bg-white dark:bg-[#0F172A] border border-slate-200 dark:border-white/10 rounded-xl shadow-lg flex items-center justify-center z-10 group-hover:scale-105 transition-transform duration-500">
                        <i data-lucide="${service.iconName}" class="w-8 h-8 text-brand-accent"></i>
                    </div>
                </div>
                <div class="flex flex-col items-end">
                    <span class="text-4xl font-display font-bold text-slate-100 dark:text-white/5 group-hover:text-slate-200 dark:group-hover:text-white/10 transition-colors">0${index + 1}</span>
                    <div class="w-8 h-1 bg-slate-100 dark:bg-white/10 group-hover:bg-brand-accent transition-colors duration-500 mt-2"></div>
                </div>
            </div>
            
            <h3 class="text-2xl font-display font-bold text-slate-800 dark:text-white mb-3 group-hover:text-brand-accent transition-colors relative z-10">${service.title}</h3>
            <p class="text-slate-500 dark:text-slate-400 text-sm leading-relaxed mb-6 border-l-2 border-slate-200 dark:border-white/10 pl-4 group-hover:border-brand-accent/30 transition-colors relative z-10">${service.shortDesc}</p>
            
            <div class="relative z-10 mb-8">
               <div class="flex items-center justify-between text-[10px] uppercase font-bold text-slate-400 mb-1">
                 <span>${servicesData.efficiencyLabel}</span>
                 <span class="font-mono text-brand-accent">${service.efficiency}%</span>
               </div>
               <div class="w-full h-1 bg-slate-100 dark:bg-white/10 rounded-full overflow-hidden">
                 <div class="progress-bar-fill h-full bg-slate-300 dark:bg-slate-600 group-hover:bg-brand-accent" style="--progress-value: ${service.efficiency}%"></div>
               </div>
            </div>

            <!-- Card Footer Tag -->
            <div class="flex items-center justify-between pt-4 border-t border-slate-100 dark:border-white/5 mt-auto relative z-10">
                <span class="text-[9px] font-bold tracking-widest text-slate-400 uppercase">${tag}</span>
                <div class="w-6 h-6 rounded-full bg-slate-50 dark:bg-white/5 flex items-center justify-center group-hover:bg-brand-accent/10 transition-colors">
                    <i data-lucide="arrow-up-right" class="w-3 h-3 text-slate-400 group-hover:text-brand-accent transition-colors"></i>
                </div>
            </div>
        </div>
    `;
    }).join('');

    // Re-initialize icons
    if (window.lucide) window.lucide.createIcons();
}

function renderAboutStats(stats) {
    const list = document.getElementById('about-stats');
    if (!list) return;

    list.innerHTML = stats.map(stat => `
        <div class="relative group p-6 bg-slate-50 dark:bg-white/5 border border-slate-200 dark:border-white/10 rounded-xl overflow-hidden hover:bg-slate-100 dark:hover:bg-white/10 transition-colors duration-500">
             <div class="text-3xl md:text-4xl font-display font-bold text-transparent bg-clip-text bg-gradient-to-r from-brand-accent to-brand-glow mb-2">
                ${stat.value}
             </div>
             <div class="text-[10px] md:text-xs text-slate-500 dark:text-slate-400 font-bold uppercase tracking-widest border-t border-slate-200 dark:border-white/10 pt-2 inline-block">
                ${stat.label}
             </div>
        </div>
    `).join('');
}
function renderDashboard(data) {
    // Clocks are rendered statically in HTML structural placeholders, updated by JS
    // We just need to update titles
    document.getElementById('clock-asia-label').textContent = data.clockLocations.asiaLabel;
    document.getElementById('clock-eu-label').textContent = data.clockLocations.europeLabel;
    document.getElementById('clock-na-label').textContent = data.clockLocations.americasLabel;
    document.getElementById('clock-me-label').textContent = data.clockLocations.meLabel;

    document.getElementById('clock-asia-city').textContent = data.clockLocations.singapore;
    document.getElementById('clock-eu-city').textContent = data.clockLocations.london;
    document.getElementById('clock-na-city').textContent = data.clockLocations.newYork;
    document.getElementById('clock-me-city').textContent = data.clockLocations.dubai;
}

function renderGlobalNetworkLists(data) {
    // Populate the modal lists
    ['asia', 'europe', 'na', 'me'].forEach(region => {
        const listContainer = document.getElementById(`network-list-${region}`);
        const titleContainer = document.getElementById(`network-title-${region}`);
        if (listContainer && data.lists[region]) {
            listContainer.innerHTML = data.lists[region].map(city => `<li>${city}</li>`).join('');
        }
        if (titleContainer && data.regions[region]) {
            titleContainer.textContent = data.regions[region];
        }
    });
}


function renderFooterLinks(footerData, generalData) {
    // Footer specific updates if logic requires complex HTML needed
    // Mostly handled by data-i18n
}

// --- Specific Modal Populations ---

function populateServiceModal(serviceId) {
    const service = CONTENT[currentLang].services.items.find(s => s.id === serviceId);
    if (!service) return;

    document.getElementById('modal-service-title').textContent = service.title;
    document.getElementById('modal-service-desc').textContent = service.fullDesc;

    const featureList = document.getElementById('modal-service-features');
    featureList.innerHTML = service.features.map(f => `
        <li class="flex items-center gap-3 text-slate-600 dark:text-slate-300">
             <i data-lucide="check-circle-2" class="w-4 h-4 text-brand-accent shrink-0"></i>
             <span class="text-sm font-medium">${f}</span>
        </li>
    `).join('');

    if (window.lucide) window.lucide.createIcons();
}

function populateTrackingModal(data) {
    document.getElementById('track-id-display').textContent = data.id;
    document.getElementById('track-current-status').textContent = data.events[0].status;

    const timeline = document.getElementById('track-timeline');
    timeline.innerHTML = data.events.map((event, index) => {
        const isLatest = index === 0;
        const isCompleted = event.completed;

        // Dot Color Logic:
        // - Latest: Brand Accent with Glow
        // - Completed: Light Grey (bg-slate-200) in light mode, Brand Dark in dark mode
        // - Pending / In Transit: Very Light Grey
        const dotColorClass = isLatest ? 'bg-brand-accent border-brand-accent shadow-[0_0_15px_rgba(245,158,11,0.5)]' :
            isCompleted ? 'bg-slate-200 dark:bg-brand-dark/80 border-brand-accent/50' :
                'bg-slate-100 dark:bg-brand-dark/30 border-slate-200 dark:border-slate-700';

        const textColorClass = isLatest ? 'text-slate-900 dark:text-white' : 'text-slate-500 dark:text-slate-400';

        return `
        <div class="relative flex gap-8 group/item animate-in fade-in slide-in-from-bottom-4 duration-700" style="animation-delay: ${index * 100}ms">
            <!-- Timeline Line Connector -->
            ${index !== data.events.length - 1 ? '<div class="absolute left-[5px] top-[24px] bottom-0 w-[2px] bg-gradient-to-b from-brand-accent/20 to-transparent dark:from-brand-accent/10"></div>' : ''}
            
            <div class="relative z-10 w-3 h-3 mt-2 rounded-full border-2 transition-all duration-500 group-hover/item:scale-125 ${dotColorClass}"></div>
            
            <div class="flex-1 pb-10">
                 <div class="flex flex-col sm:flex-row sm:justify-between sm:items-baseline mb-2">
                    <span class="text-base font-bold tracking-tight ${textColorClass}">${event.status}</span>
                    <span class="text-[10px] font-mono font-medium text-slate-400 dark:text-slate-500 bg-slate-100 dark:bg-white/5 px-2 py-0.5 rounded-full">${event.date} ${event.time}</span>
                 </div>
                 
                 <div class="flex flex-col gap-2">
                     <div class="flex items-center gap-2 text-xs font-semibold text-brand-accent/80">
                        <i data-lucide="map-pin" class="w-3 h-3"></i> 
                        <span>${event.location}</span>
                     </div>
                     <p class="text-sm text-slate-600 dark:text-slate-400 font-normal leading-relaxed max-w-lg">${event.description}</p>
                 </div>
            </div>
        </div>
    `;
    }).join('');
    if (window.lucide) window.lucide.createIcons();
}

function populateQuoteModal(data) {
    document.getElementById('quote-origin-code').textContent = data.origin.split(',')[0].substring(0, 3).toUpperCase();
    document.getElementById('quote-origin-full').textContent = data.origin;
    document.getElementById('quote-dest-code').textContent = data.destination.split(',')[0].substring(0, 3).toUpperCase();
    document.getElementById('quote-dest-full').textContent = data.destination;

    document.getElementById('quote-mode').textContent = data.transportMode;
    document.getElementById('quote-days').textContent = `${data.estimatedDays} ${CONTENT[currentLang].modals.quoteResult.days}`;

    document.getElementById('quote-cost-freight').textContent = `${data.currency} ${data.freightCost.toLocaleString()}`;
    document.getElementById('quote-cost-fuel').textContent = `${data.currency} ${data.fuelSurcharge.toLocaleString()}`;
    document.getElementById('quote-cost-insurance').textContent = `${data.currency} ${data.insurance.toLocaleString()}`;
    document.getElementById('quote-cost-total').textContent = `${data.currency} ${data.total.toLocaleString()}`;
    document.getElementById('quote-valid-until').textContent = data.validUntil;

    const disclaimer = document.querySelector('[data-i18n="modals.quoteResult.disclaimer"]');
    if (disclaimer) disclaimer.textContent = CONTENT[currentLang].modals.quoteResult.disclaimer;

    // Update Icon
    const container = document.getElementById('quote-icon-container');
    const iconMap = { 'Sea': 'ship', 'Land': 'truck', 'Air': 'plane' };
    const iconName = iconMap[data.transportMode] || 'plane';
    container.innerHTML = `<i data-lucide="${iconName}" class="w-4 h-4 text-brand-accent rotate-90"></i>`;
    if (window.lucide) window.lucide.createIcons();
}

// --- Interactive Logic ---

// 1. Ticker
function startTicker() {
    // CSS handle infinite loop, no JS needed
}

// 2. Clocks & Metrics Simulation
let startTime = Date.now();

function startClocks() {
    setInterval(() => {
        updateClock('clock-asia-time', 8);
        updateClock('clock-eu-time', 0);
        updateClock('clock-na-time', -5);
        updateClock('clock-me-time', 4);
        updateMetrics();
    }, 1000);

    // Start Log Generation
    startLogGenerator();
}

function updateClock(elementId, offset) {
    const el = document.getElementById(elementId);
    if (!el) return;
    const d = new Date();
    const utc = d.getTime() + (d.getTimezoneOffset() * 60000);
    const nd = new Date(utc + (3600000 * offset));

    // Format: HH:MM:SS AM/PM
    const options = {
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: true
    };
    el.textContent = nd.toLocaleTimeString('en-US', options);
}

function updateMetrics() {
    // 1. Uptime
    const diff = Math.floor((Date.now() - startTime) / 1000);
    const days = Math.floor(diff / 86400);
    const hours = Math.floor((diff % 86400) / 3600);
    const mins = Math.floor((diff % 3600) / 60);
    const secs = diff % 60;
    const uptimeEl = document.getElementById('metric-uptime');
    if (uptimeEl) uptimeEl.textContent = `${days}d ${hours}h ${mins}m ${secs}s`;

    // 2. Random Fluctuations
    const latencyEl = document.getElementById('metric-latency');
    if (latencyEl && Math.random() > 0.7) {
        latencyEl.textContent = Math.floor(35 + Math.random() * 20);
    }

    const loadEl = document.getElementById('metric-load');
    if (loadEl && Math.random() > 0.8) {
        loadEl.textContent = (0.4 + Math.random() * 0.3).toFixed(2);
    }

    const dataEl = document.getElementById('metric-data');
    if (dataEl && Math.random() > 0.9) {
        const val = parseFloat(dataEl.textContent);
        dataEl.textContent = (val + 0.01).toFixed(1);
    }

    const routesEl = document.getElementById('metric-routes');
    if (routesEl && Math.random() > 0.95) {
        const val = parseInt(routesEl.textContent.replace(',', ''));
        routesEl.textContent = (val + 1).toLocaleString();
    }
}

function startLogGenerator() {
    const terminal = document.getElementById('terminal-logs');
    if (!terminal) return;

    const logTypes = ['INFO', 'REQ', 'AUTH', 'SYNC'];
    const nodes = ['SG-HQ-01', 'HK-EDGE-04', 'US-WEST-02', 'EU-CENT-01'];
    const actions = [
        'Route calculation optimized for Vessel SEN-429',
        'Authentication token verified for clearing agent',
        'Database synchronization completed with Tokyo Hub',
        'New tracking request processed for ID:SEN-8274102',
        'Customs API handshake successful - HK Customs',
        'Encrypted tunnel established: SG -> NY',
        'Load balancer redistribution: Origin Asia hub'
    ];

    setInterval(() => {
        const time = new Date().toLocaleTimeString('en-US', { hour12: false, hour: '2-digit', minute: '2-digit', second: '2-digit' });
        const type = logTypes[Math.floor(Math.random() * logTypes.length)];
        const node = nodes[Math.floor(Math.random() * nodes.length)];
        const action = actions[Math.floor(Math.random() * actions.length)];

        // Category mapping for simulation
        const categories = ['[SYS]', '[NET]', '[DB]', '[API]'];
        const cat = categories[Math.floor(Math.random() * categories.length)];

        // Colors optimized for both light and dark terminal backgrounds
        const colorClass = type === 'INFO' ? 'text-slate-400 dark:text-slate-500' :
            type === 'REQ' ? 'text-brand-accent' :
                type === 'AUTH' ? 'text-emerald-600 dark:text-emerald-400' :
                    'text-blue-600 dark:text-blue-400';

        const entry = document.createElement('div');
        entry.className = 'animate-in fade-in slide-in-from-left-2 duration-500 flex items-start gap-2 py-0.5 border-b border-slate-100/50 dark:border-white/5 last:border-0';
        entry.innerHTML = `
            <span class="text-slate-400 font-mono shrink-0 scale-90 origin-left">${time}</span> 
            <span class="text-slate-400 font-bold shrink-0 w-8 text-[8px] opacity-70">${cat}</span> 
            <span class="${colorClass} font-bold shrink-0 mr-1">${type}</span> 
            <span class="text-slate-600 dark:text-slate-300 font-mono flex-grow truncate">${action}</span>
        `;

        terminal.appendChild(entry);
        terminal.scrollTop = terminal.scrollHeight;

        // Keep last 40 entries
        if (terminal.children.length > 40) {
            terminal.removeChild(terminal.firstChild);
        }
    }, 2000 + Math.random() * 2000);
}

// 3. Tracking & Quote Generators (Ported from React)

function handleTrackSubmit(idInput) {
    const id = idInput.trim();
    if (!id || id.length !== 7) {
        openModal('trackError', CONTENT[currentLang].hero.trackTab.errorEmpty);
        return;
    }

    // logic...
    // 1. Random Error Trigger (20% chance of failure to simulate realism)
    const isForcedError = id.endsWith('00');
    const isRandomError = Math.random() < 0.2;
    const t = TRACKING_DICT;
    const lang = currentLang;

    if (isForcedError || isRandomError) {
        const errorType = lang === 'zh' ? "运营商网络中未找到货物信息。" : lang === 'jp' ? "キャリアネットワークに貨物が見つかりません。" : "Shipment not found in carrier network.";
        openModal('trackError', errorType);
        return;
    }

    // 2. Dynamic Date Generation
    const now = new Date();
    const isDelivered = Math.random() > 0.4;
    const events = [];
    let cursorDate = new Date(now);

    const formatDate = (date) => date.toISOString().split('T')[0];
    const formatTime = (date) => date.toTimeString().substring(0, 5);
    const subtractTime = (date, days, hours) => {
        const newDate = new Date(date);
        newDate.setDate(newDate.getDate() - days);
        newDate.setHours(newDate.getHours() - hours);
        return newDate;
    };

    if (isDelivered) {
        events.push({
            date: formatDate(cursorDate),
            time: formatTime(cursorDate),
            location: t.delivered.loc[lang],
            status: t.delivered.status[lang],
            description: t.delivered.desc[lang],
            completed: true
        });
        cursorDate = subtractTime(cursorDate, 0, 4 + Math.random() * 4);

        events.push({
            date: formatDate(cursorDate),
            time: formatTime(cursorDate),
            location: t.outForDelivery.loc[lang],
            status: t.outForDelivery.status[lang],
            description: t.outForDelivery.desc[lang],
            completed: true
        });
        cursorDate = subtractTime(cursorDate, 1, Math.random() * 5);
    }

    events.push({
        date: formatDate(cursorDate),
        time: formatTime(cursorDate),
        location: t.customsCleared.loc[lang],
        status: isDelivered ? t.customsCleared.status[lang] : t.customsProgress.status[lang],
        description: isDelivered ? t.customsCleared.desc[lang] : t.customsProgress.desc[lang],
        completed: isDelivered
    });

    const transitDays = 2 + Math.floor(Math.random() * 10);
    cursorDate = subtractTime(cursorDate, transitDays, 0);

    events.push({
        date: formatDate(cursorDate),
        time: formatTime(cursorDate),
        location: t.departed.loc[lang],
        status: t.departed.status[lang],
        description: t.departed.desc[lang],
        completed: true
    });

    cursorDate = subtractTime(cursorDate, 1, Math.random() * 10);

    events.push({
        date: formatDate(cursorDate),
        time: formatTime(cursorDate),
        location: t.received.loc[lang],
        status: t.received.status[lang],
        description: t.received.desc[lang],
        completed: true
    });

    cursorDate = subtractTime(cursorDate, 1, 0);

    events.push({
        date: formatDate(cursorDate),
        time: formatTime(cursorDate),
        location: t.confirmed.loc[lang],
        status: t.confirmed.status[lang],
        description: t.confirmed.desc[lang],
        completed: true
    });

    const fullId = `SEN-${id}`;
    populateTrackingModal({ id: fullId, events });
    openModal('trackResult');
}

function handleQuoteSubmit() {
    const origin = document.getElementById('quote-origin-input').value;
    const dest = document.getElementById('quote-dest-input').value;
    const mode = document.querySelector('.mode-btn.active')?.getAttribute('data-mode') || 'Sea';

    if (!origin || !dest) {
        alert(currentLang === 'en' ? 'Please select origin and destination' :
            currentLang === 'zh' ? '请选择始发和目的地' : '始発地と目的地を選択してください');
        return;
    }

    // Generator Logic
    const originLoc = LOCATIONS.find(l => l.code === origin);
    const destLoc = LOCATIONS.find(l => l.code === dest);

    const originName = originLoc ? `${originLoc.city[currentLang]}, ${originLoc.country[currentLang]}` : origin;
    const destName = destLoc ? `${destLoc.city[currentLang]}, ${destLoc.country[currentLang]}` : dest;
    const modeName = MODE_TRANSLATIONS[mode]?.[currentLang] || mode;

    const isSameRegion = originLoc?.region === destLoc?.region;
    const distanceMultiplier = isSameRegion ? 1 : 2.5;

    let basePrice = 1000;
    let baseDays = 10;
    switch (mode) {
        case 'Air': basePrice = 3500; baseDays = 2; break;
        case 'Sea': basePrice = 800; baseDays = 25; break;
        case 'Land': basePrice = 1800; baseDays = 8; break;
    }

    const finalPrice = Math.floor((basePrice * distanceMultiplier) + (Math.random() * 200));
    const finalDays = Math.ceil((baseDays * distanceMultiplier) + (mode === 'Sea' ? (Math.random() * 5) : 0));

    const fuel = Math.floor(finalPrice * 0.12);
    const insurance = Math.floor(finalPrice * 0.04);

    // Dynamic Date Calculation (15 days from now)
    const now = new Date();
    const expiry = new Date(now.setDate(now.getDate() + 15));
    const year = expiry.getFullYear();
    const month = String(expiry.getMonth() + 1).padStart(2, '0');
    const day = String(expiry.getDate()).padStart(2, '0');

    let formattedDate = `${year}-${month}-${day}`;
    if (currentLang === 'zh' || currentLang === 'jp') {
        formattedDate = `${year}年${month}月${day}日`;
    }

    const result = {
        origin: originName,
        destination: destName,
        transportMode: modeName,
        freightCost: finalPrice,
        fuelSurcharge: fuel,
        insurance: insurance,
        total: finalPrice + fuel + insurance,
        currency: "USD",
        validUntil: formattedDate,
        estimatedDays: finalDays
    };

    openModal('quoteResult', result);
}

// --- Setup Helper ---

function setupEventListeners() {
    // Theme Toggle
    document.querySelectorAll('.theme-toggle').forEach(btn => {
        btn.addEventListener('click', toggleTheme);
    });

    // Language Switcher
    document.querySelectorAll('[data-lang]').forEach(btn => {
        btn.addEventListener('click', (e) => setLanguage(e.target.getAttribute('data-lang')));
    });

    // Tab Switching (Hero)
    document.querySelectorAll('.tab-btn').forEach(btn => {
        btn.addEventListener('click', (e) => {
            const tab = e.currentTarget.getAttribute('data-tab');
            document.querySelectorAll('.tab-btn').forEach(b => {
                b.classList.remove('active', 'text-brand-accent', 'bg-brand-accent/10', 'shadow-sm');
                b.classList.add('text-slate-600', 'dark:text-slate-400');
            });
            e.currentTarget.classList.add('active', 'text-brand-accent', 'bg-brand-accent/10', 'shadow-sm');
            e.currentTarget.classList.remove('text-slate-600', 'dark:text-slate-400');

            document.querySelectorAll('.tab-content').forEach(c => c.classList.add('hidden'));
            document.getElementById(`tab-${tab}`).classList.remove('hidden');
        });
    });

    // Quote Mode Switching
    document.querySelectorAll('.mode-btn').forEach(btn => {
        btn.addEventListener('click', (e) => {
            document.querySelectorAll('.mode-btn').forEach(b => {
                b.classList.remove('active', 'bg-brand-accent', 'text-slate-900', 'border-brand-accent', 'shadow-lg', 'shadow-brand-accent/20');
                b.classList.add('text-slate-600', 'dark:text-slate-400');
            });
            e.currentTarget.classList.add('active', 'bg-brand-accent', 'text-slate-900', 'border-brand-accent', 'shadow-lg', 'shadow-brand-accent/20');
            e.currentTarget.classList.remove('text-slate-600', 'dark:text-slate-400');
        });
    });

    // Mobile Menu
    document.getElementById('mobile-menu-btn').addEventListener('click', () => {
        document.getElementById('mobile-menu').classList.remove('translate-x-full');
    });
    document.getElementById('mobile-menu-close').addEventListener('click', () => {
        document.getElementById('mobile-menu').classList.add('translate-x-full');
    });

    // Track Button
    document.getElementById('track-submit-btn').addEventListener('click', () => {
        const input = document.getElementById('track-input');
        input.value = input.value.replace(/\D/g, '');
        handleTrackSubmit(input.value);
    });

    // Quote Button
    document.getElementById('quote-submit-btn').addEventListener('click', handleQuoteSubmit);

    // Close dropdowns on outside click
    document.addEventListener('click', (e) => {
        if (!e.target.closest('.custom-select')) {
            document.querySelectorAll('[id$="-options"]').forEach(el => el.classList.add('hidden'));
        }
    });
}

// --- Custom Select Logic ---
window.toggleDropdown = function (type) {
    const el = document.getElementById(`quote-${type}-options`);
    const otherType = type === 'origin' ? 'dest' : 'origin';
    const otherEl = document.getElementById(`quote-${otherType}-options`);
    if (otherEl) otherEl.classList.add('hidden');
    if (el) el.classList.toggle('hidden');
}

window.selectOption = function (value, type, label) {
    const input = document.getElementById(`quote-${type}-input`);
    const labelEl = document.getElementById(`quote-${type}-label`);
    if (input) input.value = value;
    if (labelEl) {
        labelEl.textContent = label;
        labelEl.removeAttribute('data-i18n');
    }

    const options = document.getElementById(`quote-${type}-options`);
    if (options) {
        options.classList.add('hidden');
        // Highlight selected
        options.querySelectorAll('.custom-select-option').forEach(opt => {
            opt.classList.remove('selected');
            if (opt.getAttribute('data-value') === value) opt.classList.add('selected');
        });
    }
}

// Update Language Switcher Active State
function updateLanguageSwitcher() {
    // Get all language buttons
    const langButtons = document.querySelectorAll('[data-lang]');

    langButtons.forEach(btn => {
        const lang = btn.getAttribute('data-lang');

        if (lang === currentLang) {
            // Add active class to current language
            btn.classList.add('lang-active');
        } else {
            // Remove active class from other languages
            btn.classList.remove('lang-active');
        }
    });
}

function updateSelectOptions() {
    const originOptions = document.getElementById('quote-origin-options');
    const destOptions = document.getElementById('quote-dest-options');
    if (!originOptions || !destOptions) return;

    // keep selected value
    const currentOrigin = document.getElementById('quote-origin-input').value;
    const currentDest = document.getElementById('quote-dest-input').value;

    const renderOptions = (type, currentVal) => {
        return LOCATIONS.map(l => {
            const label = `${l.city[currentLang]}, ${l.country[currentLang]}`;
            const isSelected = l.code === currentVal;
            return `
                <div class="custom-select-option ${isSelected ? 'selected' : ''}" 
                     onclick="selectOption('${l.code}', '${type}', '${label}')" 
                     data-value="${l.code}">
                    ${label}
                </div>
            `;
        }).join('');
    };

    originOptions.innerHTML = renderOptions('origin', currentOrigin);
    destOptions.innerHTML = renderOptions('dest', currentDest);

    // Update labels if already selected
    if (currentOrigin) {
        const loc = LOCATIONS.find(l => l.code === currentOrigin);
        if (loc) {
            document.getElementById('quote-origin-label').textContent = `${loc.city[currentLang]}, ${loc.country[currentLang]}`;
            document.getElementById('quote-origin-label').removeAttribute('data-i18n');
        }
    }
    if (currentDest) {
        const loc = LOCATIONS.find(l => l.code === currentDest);
        if (loc) {
            document.getElementById('quote-dest-label').textContent = `${loc.city[currentLang]}, ${loc.country[currentLang]}`;
            document.getElementById('quote-dest-label').removeAttribute('data-i18n');
        }
    }
}

// --- BOOT ---
window.addEventListener('DOMContentLoaded', init);
window.lucide.createIcons();
