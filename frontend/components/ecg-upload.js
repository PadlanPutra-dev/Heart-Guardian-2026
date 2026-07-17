/**
 * ECG Upload Component
 * Handles ECG file uploads and displays prediction results
 */

export function createECGUploadComponent() {
  return `
    <div class="ecg-upload-component space-y-6">
      <!-- Upload Section -->
      <div class="rounded-2xl border-2 border-dashed border-primary bg-primary/5 p-8">
        <div class="flex flex-col items-center gap-4">
          <div class="rounded-full bg-primary/10 p-4">
            <span class="material-symbols-outlined text-3xl text-primary" style="font-variation-settings: 'FILL' 1;">upload_file</span>
          </div>
          <div class="text-center">
            <h3 class="font-headline-md text-headline-md text-on-surface">Upload ECG Files</h3>
            <p class="font-body-md text-body-md text-on-surface-variant mt-1">
              Upload .hea and .dat files for AI analysis
            </p>
          </div>
          
          <!-- File Input -->
          <div class="flex gap-4 mt-4 w-full">
            <div class="flex-1">
              <label class="block">
                <span class="sr-only">Upload .hea file</span>
                <input 
                  type="file" 
                  id="heaFile"
                  accept=".hea" 
                  class="block w-full text-sm text-on-surface
                    file:mr-4 file:py-2 file:px-4
                    file:rounded-full file:border-0
                    file:text-sm file:font-semibold
                    file:bg-primary file:text-on-primary
                    hover:file:bg-primary/90
                    cursor-pointer"
                />
              </label>
              <span class="text-xs text-on-surface-variant mt-1 block">Header file (.hea)</span>
            </div>
            <div class="flex-1">
              <label class="block">
                <span class="sr-only">Upload .dat file</span>
                <input 
                  type="file" 
                  id="datFile"
                  accept=".dat" 
                  class="block w-full text-sm text-on-surface
                    file:mr-4 file:py-2 file:px-4
                    file:rounded-full file:border-0
                    file:text-sm file:font-semibold
                    file:bg-primary file:text-on-primary
                    hover:file:bg-primary/90
                    cursor-pointer"
                />
              </label>
              <span class="text-xs text-on-surface-variant mt-1 block">Data file (.dat)</span>
            </div>
          </div>

          <!-- Sampling Rate -->
          <div class="w-full">
            <label class="block">
              <span class="font-label-sm text-label-sm text-on-surface">Sampling Rate (Hz)</span>
              <input 
                type="number" 
                id="samplingRate" 
                value="360" 
                min="1" 
                class="mt-2 w-full px-4 py-2 rounded-lg border border-outline-variant bg-surface text-on-surface"
              />
            </label>
          </div>

          <!-- Upload Button -->
          <button 
            id="uploadBtn"
            class="w-full px-6 py-3 mt-4 rounded-full bg-primary text-on-primary font-label-lg font-semibold transition-all hover:shadow-md active:scale-95">
            <span>Analyze ECG</span>
          </button>
        </div>
      </div>

      <!-- Loading State -->
      <div id="loadingState" class="hidden rounded-2xl border border-outline-variant bg-surface-container-lowest p-6">
        <div class="flex items-center gap-4">
          <div class="animate-spin">
            <span class="material-symbols-outlined text-primary" style="font-variation-settings: 'FILL' 1;">autorenew</span>
          </div>
          <div>
            <p class="font-headline-sm text-headline-sm text-on-surface">Analyzing...</p>
            <p class="font-body-sm text-body-sm text-on-surface-variant">Processing ECG signal with ML models</p>
          </div>
        </div>
      </div>

      <!-- Results Section -->
      <div id="resultsSection" class="hidden space-y-4">
        <!-- Emergency Level Badge -->
        <div id="emergencyBadge" class="rounded-2xl p-6 flex items-center justify-between">
          <div>
            <p class="font-label-lg text-label-lg uppercase tracking-wider">Status</p>
            <h3 id="statusText" class="font-headline-lg text-headline-lg mt-1">Normal</h3>
          </div>
          <div id="statusIcon" class="text-4xl">
            <span class="material-symbols-outlined" style="font-variation-settings: 'FILL' 1;">verified</span>
          </div>
        </div>

        <!-- Beats Information -->
        <div id="beatsInfo" class="grid grid-cols-2 gap-4">
          <div class="rounded-2xl border border-outline-variant bg-surface-container-lowest p-4">
            <p class="font-label-sm text-label-sm text-on-surface-variant">Beats Detected</p>
            <p id="beatsDetected" class="font-headline-lg text-headline-lg mt-1">--</p>
          </div>
          <div class="rounded-2xl border border-outline-variant bg-surface-container-lowest p-4">
            <p class="font-label-sm text-label-sm text-on-surface-variant">Arrhythmia</p>
            <p id="arrhythmiaType" class="font-headline-lg text-headline-lg mt-1">--</p>
          </div>
        </div>

        <!-- Infarction Risk -->
        <div class="rounded-2xl border border-outline-variant bg-surface-container-lowest p-4">
          <div class="flex items-center justify-between mb-3">
            <p class="font-label-lg text-label-lg text-on-surface-variant">Infarction Risk</p>
            <p id="infarctionProb" class="font-headline-md text-headline-md text-on-surface">0%</p>
          </div>
          <div class="w-full h-2 bg-surface-container-high rounded-full overflow-hidden">
            <div id="infarctionBar" class="h-full bg-primary rounded-full transition-all" style="width: 0%"></div>
          </div>
        </div>

        <!-- AI Message -->
        <div class="rounded-2xl border border-primary/20 bg-primary/5 p-4">
          <div class="flex items-start gap-3">
            <span class="material-symbols-outlined text-primary mt-1" style="font-variation-settings: 'FILL' 1;">auto_awesome</span>
            <div>
              <p class="font-label-lg text-label-lg text-primary font-semibold">AI Insights</p>
              <p id="aiMessage" class="font-body-md text-body-md text-on-surface mt-2">--</p>
            </div>
          </div>
        </div>

        <!-- Beat Details Table -->
        <div class="rounded-2xl border border-outline-variant overflow-hidden">
          <div class="bg-surface-container-low p-4 border-b border-outline-variant">
            <h4 class="font-headline-sm text-headline-sm">Beat Analysis</h4>
          </div>
          <div id="beatsList" class="divide-y divide-outline-variant max-h-96 overflow-y-auto">
            <!-- Beats will be added here -->
          </div>
        </div>

        <!-- Reset Button -->
        <button 
          id="resetBtn"
          class="w-full px-4 py-2 rounded-lg border border-outline-variant bg-surface text-on-surface font-label-lg transition-colors hover:bg-surface-container-low">
          Analyze Another ECG
        </button>
      </div>

      <!-- Error State -->
      <div id="errorState" class="hidden rounded-2xl border-l-4 border-error bg-error/5 p-6">
        <div class="flex gap-3">
          <span class="material-symbols-outlined text-error flex-shrink-0" style="font-variation-settings: 'FILL' 1;">error</span>
          <div class="flex-1 min-w-0">
            <p class="font-headline-sm text-headline-sm text-error">Error</p>
            <div class="mt-2 bg-white border border-error/20 rounded p-3 max-h-48 overflow-y-auto">
              <p id="errorMessage" class="font-body-sm text-on-surface break-words whitespace-pre-wrap font-mono text-xs">--</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  `;
}

/**
 * Initialize ECG upload handlers
 */
export function initECGUploadHandlers(authState) {
  const uploadBtn = document.getElementById('uploadBtn');
  const resetBtn = document.getElementById('resetBtn');
  const heaFile = document.getElementById('heaFile');
  const datFile = document.getElementById('datFile');
  const samplingRate = document.getElementById('samplingRate');

  if (!uploadBtn) return;

  uploadBtn.addEventListener('click', async () => {
    const heaFileObj = heaFile.files[0];
    const datFileObj = datFile.files[0];

    if (!heaFileObj || !datFileObj) {
      showError('Please select both .hea and .dat files');
      return;
    }

    await uploadAndPredict(heaFileObj, datFileObj, parseInt(samplingRate.value), authState);
  });

  if (resetBtn) {
    resetBtn.addEventListener('click', () => {
      heaFile.value = '';
      datFile.value = '';
      document.getElementById('resultsSection').classList.add('hidden');
      document.getElementById('errorState').classList.add('hidden');
    });
  }
}

async function uploadAndPredict(heaFileObj, datFileObj, fs, authState) {
  const loadingState = document.getElementById('loadingState');
  const resultsSection = document.getElementById('resultsSection');
  const errorState = document.getElementById('errorState');

  try {
    // Show loading
    loadingState.classList.remove('hidden');
    resultsSection.classList.add('hidden');
    errorState.classList.add('hidden');

    // Get patient ID from auth (default to 1 for testing)
    const patientId = authState?.user?.id || 1;

    // Create FormData
    const formData = new FormData();
    formData.append('heaFile', heaFileObj);
    formData.append('datFile', datFileObj);
    formData.append('fs', fs);

    // Upload to backend (no auth required for testing)
    const response = await fetch(`/api/predict-file/${patientId}`, {
      method: 'POST',
      body: formData
    });

    const data = await response.json();

    if (!response.ok) {
      const errorMsg = data?.error || data?.details || `HTTP error! status: ${response.status}`;
      throw new Error(`[${response.status}] ${errorMsg}`);
    }

    displayResults(data);

  } catch (error) {
    showError(error.message || 'Failed to analyze ECG');
  } finally {
    loadingState.classList.add('hidden');
  }
}

function displayResults(data) {
  const resultsSection = document.getElementById('resultsSection');
  const emergencyBadge = document.getElementById('emergencyBadge');
  const statusText = document.getElementById('statusText');
  const statusIcon = document.getElementById('statusIcon');
  const beatsDetected = document.getElementById('beatsDetected');
  const arrhythmiaType = document.getElementById('arrhythmiaType');
  const infarctionProb = document.getElementById('infarctionProb');
  const infarctionBar = document.getElementById('infarctionBar');
  const aiMessage = document.getElementById('aiMessage');
  const beatsList = document.getElementById('beatsList');

  const { prediction, mlData } = data;
  const emergencyLevel = prediction.emergency_level || 0;

  // Update emergency status
  const statusConfig = getStatusConfig(emergencyLevel);
  emergencyBadge.className = `rounded-2xl p-6 flex items-center justify-between ${statusConfig.bg}`;
  statusText.textContent = statusConfig.label;
  statusText.className = `font-headline-lg text-headline-lg mt-1 ${statusConfig.textColor}`;
  statusIcon.innerHTML = `<span class="material-symbols-outlined text-4xl ${statusConfig.iconColor}" style="font-variation-settings: 'FILL' 1;">${statusConfig.icon}</span>`;

  // Update beats
  beatsDetected.textContent = prediction.beats_detected || 0;
  arrhythmiaType.textContent = prediction.arrhythmia_class || 'UNKNOWN';

  // Update infarction risk
  const infProb = Math.round((prediction.infarction_prob || 0) * 100);
  infarctionProb.textContent = `${infProb}%`;
  infarctionBar.style.width = `${infProb}%`;

  // Update AI message
  aiMessage.textContent = prediction.message || 'Analysis complete';

  // Display beats
  if (mlData.beats && mlData.beats.length > 0) {
    beatsList.innerHTML = mlData.beats.map((beat, idx) => `
      <div class="p-4 flex items-center justify-between hover:bg-surface-container-low transition-colors">
        <div>
          <p class="font-label-lg text-on-surface">Beat ${idx + 1}</p>
          <p class="font-label-sm text-on-surface-variant">Position: ${beat.position}</p>
        </div>
        <div class="text-right">
          <p class="font-label-lg text-on-surface">${beat.arrhythmia_class}</p>
          <p class="font-label-sm text-on-surface-variant">Risk: ${Math.round(beat.infarction_prob * 100)}%</p>
        </div>
      </div>
    `).join('');
  }

  resultsSection.classList.remove('hidden');
}

function getStatusConfig(emergencyLevel) {
  const configs = {
    0: {
      label: 'Normal',
      bg: 'bg-secondary-container/20 border border-secondary-container',
      textColor: 'text-secondary-fixed-dim',
      iconColor: 'text-secondary-fixed-dim',
      icon: 'verified'
    },
    1: {
      label: 'Warning',
      bg: 'bg-tertiary/20 border border-tertiary',
      textColor: 'text-tertiary',
      iconColor: 'text-tertiary',
      icon: 'warning'
    },
    2: {
      label: 'Danger',
      bg: 'bg-error/20 border border-error',
      textColor: 'text-error',
      iconColor: 'text-error',
      icon: 'error'
    },
    3: {
      label: 'Critical',
      bg: 'bg-error/30 border border-error',
      textColor: 'text-error',
      iconColor: 'text-error',
      icon: 'emergency'
    }
  };
  return configs[emergencyLevel] || configs[0];
}

function showError(message) {
  const errorState = document.getElementById('errorState');
  const errorMessage = document.getElementById('errorMessage');
  const resultsSection = document.getElementById('resultsSection');

  errorMessage.textContent = message;
  errorState.classList.remove('hidden');
  resultsSection.classList.add('hidden');
}
