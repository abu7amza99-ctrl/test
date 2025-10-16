```javascript
// Sidebar toggle functionality
function toggleSidebar() {
    const sidebar = document.getElementById('sidebar');
    sidebar.classList.toggle('open');
}

// Control Panel toggle functionality
function toggleControlPanel() {
    const controlPanel = document.getElementById('controlPanel');
    controlPanel.classList.toggle('open');
}

// Welcome Modal functionality
function closeWelcomeModal() {
    const welcomeModal = document.getElementById('welcomeModal');
    welcomeModal.style.display = 'none';
}

// Section navigation
function showSection(sectionId) {
    // Hide all sections
    document.querySelectorAll('.section').forEach(section => {
        section.style.display = 'none';
    });
    
    // Show selected section
    document.getElementById(sectionId + 'Section').style.display = 'block';
    
    // Close sidebar after navigation
    toggleSidebar();
}

// Name decoration functionality
function generateNames() {
    const nameInput = document.getElementById('nameInput').value;
    const nameResults = document.getElementById('nameResults');
    nameResults.innerHTML = '';
    
    if (!nameInput) return;
    
    const decorations = [
        `⧼${nameInput}⧽`,
        `✧${nameInput}✧`,
        `❂${nameInput}❂`,
        `༺${nameInput}༻`,
        `✿${nameInput}✿`,
        `✦${nameInput}✦`,
        `❀${nameInput}❀`,
        `♔${nameInput}♔`
    ];
    
    decorations.forEach(deco => {
        const nameBox = document.createElement('div');
        nameBox.className = 'name-box p-4 text-center rounded-lg golden-bg';
        nameBox.textContent = deco;
        nameBox.onclick = function() {
            navigator.clipboard.writeText(deco);
            alert('تم نسخ النص إلى الحافظة');
        };
        nameResults.appendChild(nameBox);
    });
}

// Professional decoration functionality
document.addEventListener('DOMContentLoaded', function() {
    // Color type toggle
    const solidBtn = document.getElementById('solidBtn');
    const gradiantBtn = document.getElementById('gradiantBtn');
    const textureBtn = document.getElementById('textureBtn');
    
    const solidColors = document.getElementById('solidColors');
    const gradiantColors = document.getElementById('gradiantColors');
    const textureOptions = document.getElementById('textureOptions');
    
    solidBtn.addEventListener('click', function() {
        solidColors.classList.remove('hidden');
        gradiantColors.classList.add('hidden');
        textureOptions.classList.add('hidden');
        this.classList.add('bg-yellow-500');
        gradiantBtn.classList.remove('bg-yellow-500');
        textureBtn.classList.remove('bg-yellow-500');
    });
    
    gradiantBtn.addEventListener('click', function() {
        solidColors.classList.add('hidden');
        gradiantColors.classList.remove('hidden');
        textureOptions.classList.add('hidden');
        this.classList.add('bg-yellow-500');
        solidBtn.classList.remove('bg-yellow-500');
        textureBtn.classList.remove('bg-yellow-500');
    });
    
    textureBtn.addEventListener('click', function() {
        solidColors.classList.add('hidden');
        gradiantColors.classList.add('hidden');
        textureOptions.classList.remove('hidden');
        this.classList.add('bg-yellow-500');
        solidBtn.classList.remove('bg-yellow-500');
        gradiantBtn.classList.remove('bg-yellow-500');
    });
    
    // Initialize feather icons
    if (feather) {
        feather.replace();
    }
    
    // Show welcome modal on first visit
    const firstVisit = localStorage.getItem('firstVisit');
    if (!firstVisit) {
        localStorage.setItem('firstVisit', 'true');
        document.getElementById('welcomeModal').style.display = 'flex';
    }
});
```
