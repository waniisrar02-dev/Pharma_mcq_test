// ============================================
// PHARMACOLOGY MCQ TEST - FULLY FUNCTIONAL
// ============================================

const questionBank = [
    { question: "Propranolol is a blocker of:", options: ["Beta-1 adrenoreceptor", "Beta-2 adrenoreceptor", "Alpha-1 adrenoreceptor", "Alpha-2 adrenoreceptor", "M-cholinoreceptor", "N-cholinoreceptor", "Dopamine receptor", "Serotonin receptor", "Histamine receptor", "GABA receptor"], answer: 0 },
    { question: "Call the pharmacological group of heparin:", options: ["Anticoagulants", "Antiplatelets", "Thrombolytics", "Antifibrinolytics", "NSAIDs", "Corticosteroids", "Antihypertensives", "Diuretics", "Lipid lowering drugs", "Antiarrhythmics"], answer: 0 },
    { question: "Call the pharmacological group of Nitroglycerin:", options: ["Antianginal", "Antihypertensive", "Antiarrhythmic", "Diuretic", "Anticoagulant", "Lipid lowering", "Cardiac glycoside", "Beta blocker", "Calcium channel blocker", "ACE inhibitor"], answer: 0 },
    { question: "Methyldopa is agonist of:", options: ["Alpha-2 adrenoreceptor", "Alpha-1 adrenoreceptor", "Beta-1 adrenoreceptor", "Beta-2 adrenoreceptor", "Dopamine receptor", "M-cholinoreceptor", "N-cholinoreceptor", "Serotonin receptor", "GABA receptor", "Opioid receptor"], answer: 0 },
    { question: "Call the pharmacological group of Ondansetron:", options: ["Drugs for vomiting", "Proton pump inhibitors", "H2 blockers", "Antacids", "Prokinetics", "Laxatives", "Antidiarrheals", "Antispasmodics", "Antihistamines", "Corticosteroids"], answer: 0 },
    { question: "Call the pharmacological group of Lamotrigine:", options: ["Antiepileptic", "Antipsychotic", "Antidepressant", "Anxiolytic", "Antiparkinsonian", "Sedative-hypnotic", "Muscle relaxant", "Mood stabilizer", "CNS stimulant", "NMDA antagonist"], answer: 0 },
    { question: "Tropicamide is an antagonist of:", options: ["M-cholinoreceptor", "N-cholinoreceptor", "Alpha-1 adrenoreceptor", "Alpha-2 adrenoreceptor", "Beta-1 adrenoreceptor", "Beta-2 adrenoreceptor", "Dopamine receptor", "Serotonin receptor", "Histamine receptor", "GABA receptor"], answer: 0 },
    { question: "Call the pharmacological group of Exemestane:", options: ["Aromatase Inhibitor", "SERM", "Antiandrogen", "Progestin", "Estrogen", "GnRH agonist", "GnRH antagonist", "Corticosteroid", "Thyroid hormone", "Bisphosphonate"], answer: 0 },
    { question: "Call the pharmacological group of Moxonidine:", options: ["Hypotensive/Antihypertensive", "Diuretic", "Beta blocker", "Calcium channel blocker", "ACE inhibitor", "ARB", "Alpha blocker", "Vasodilator", "Cardiac glycoside", "Antiarrhythmic"], answer: 0 },
    { question: "Oxybutynin is an antagonist of:", options: ["M-cholinoreceptor", "N-cholinoreceptor", "Alpha-1 adrenoreceptor", "Beta-1 adrenoreceptor", "Dopamine receptor", "Serotonin receptor", "Histamine receptor", "GABA receptor", "Opioid receptor", "Calcium channel"], answer: 0 },
    { question: "Call the pharmacological group of ferrous sulphate:", options: ["Antianemic", "Vitamin supplement", "Electrolyte", "Anticoagulant", "Hemostatic", "Antiplatelet", "Erythropoietin", "Iron chelator", "Mineral supplement", "Blood product"], answer: 0 },
    { question: "Call the pharmacological group of Bisacodyl:", options: ["Drugs for constipation", "Antidiarrheal", "Prokinetic", "Antispasmodic", "Antiemetic", "Proton pump inhibitor", "H2 blocker", "Antacid", "Osmotic laxative", "Stool softener"], answer: 0 },
    { question: "Nor-epinephrine is an agonist of:", options: ["Alpha-1, alpha-2, beta-1, beta-3", "Alpha-1 only", "Beta-1 only", "Alpha-1 and beta-1", "Beta-1 and beta-2", "Alpha-2 only", "Dopamine receptor", "Serotonin receptor", "M-cholinoreceptor", "All adrenoreceptors"], answer: 0 },
    { question: "Xylometazoline is agonist of:", options: ["Alpha-1, alpha-2 adrenoreceptor", "Alpha-1 only", "Alpha-2 only", "Beta-1 adrenoreceptor", "Beta-2 adrenoreceptor", "M-cholinoreceptor", "Dopamine receptor", "Serotonin receptor", "Histamine receptor", "Imidazoline receptor"], answer: 0 },
    { question: "Call the pharmacological group of Fenofibrate:", options: ["Lipid lowering drug", "Antihypertensive", "Antidiabetic", "Antianginal", "Anticoagulant", "Antiplatelet", "Diuretic", "Statin", "Bile acid sequestrant", "PCSK9 inhibitor"], answer: 0 },
    { question: "Call the pharmacological group of Fludrocortisone:", options: ["Mineralocorticoid", "Glucocorticoid", "Sex hormone", "Anabolic steroid", "Aldosterone antagonist", "ADH analogue", "Thyroid hormone", "Vitamin D", "GnRH analogue", "Somatostatin analogue"], answer: 0 },
    { question: "Carvidilol is blocker of:", options: ["Beta-1, beta-2 and alpha-1", "Beta-1 only", "Beta-1 and beta-2", "Alpha-1 only", "Non-selective beta", "Alpha-2 selective", "Calcium channel", "Angiotensin receptor", "Potassium channel", "Sodium channel"], answer: 0 },
    { question: "Call the pharmacological group of caffeine:", options: ["Psychostimulants", "Anxiolytics", "Antidepressants", "Antipsychotics", "Sedatives", "Hypnotics", "Nootropics", "Mood stabilizers", "CNS depressants", "Adenosine antagonist"], answer: 0 },
    { question: "Call the pharmacological group of Medazepam:", options: ["Tranquilizers", "Antidepressants", "Antipsychotics", "Sedative-hypnotics", "Antiepileptics", "Muscle relaxants", "CNS stimulants", "Nootropics", "Mood stabilizers", "Barbiturates"], answer: 0 },
    { question: "Call the pharmacological group of Gosereline:", options: ["Hypophyseal Hormones analogues", "GnRH antagonist", "Somatostatin analogue", "Dopamine agonist", "Prolactin inhibitor", "Growth hormone", "ACTH analogue", "TSH analogue", "Oxytocin analogue", "Vasopressin analogue"], answer: 0 },
    { question: "Tiotropium bromide is an antagonist of:", options: ["M-cholinoreceptors", "N-cholinoreceptors", "Beta-2 adrenoreceptors", "Alpha-1 adrenoreceptors", "Histamine receptors", "Leukotriene receptors", "Serotonin receptors", "Dopamine receptors", "GABA receptors", "Opioid receptors"], answer: 0 },
    { question: "Call the pharmacological group of Bicalutamide:", options: ["Antiandrogenic drugs", "Estrogen antagonist", "Aromatase inhibitor", "GnRH agonist", "GnRH antagonist", "5-alpha reductase inhibitor", "Progesterone antagonist", "SERM", "Corticosteroid", "Anabolic steroid"], answer: 0 },
    { question: "Call the pharmacological group of Warfarin:", options: ["Anticoagulants", "Antiplatelets", "Thrombolytics", "Vitamin K antagonist", "Direct thrombin inhibitor", "Factor Xa inhibitor", "Heparin", "LMWH", "Hemostatic", "NSAID"], answer: 0 },
    { question: "Call the pharmacological group of Isosorbide dinitrate:", options: ["Antianginal", "Antihypertensive", "Antiarrhythmic", "Diuretic", "Nitrate", "Vasodilator", "Calcium channel blocker", "Beta blocker", "ACE inhibitor", "ARB"], answer: 0 },
    { question: "Call the pharmacological group of Famotidine:", options: ["Drugs for lowering gastric acidity", "Proton pump inhibitor", "Antacid", "Mucosal protectant", "Prokinetic", "Antiemetic", "Laxative", "Antidiarrheal", "Antibiotic", "Antispasmodic"], answer: 0 },
    { question: "Call the pharmacological group of Phenytoin:", options: ["Antiepileptic drugs", "Antipsychotic", "Antidepressant", "Anxiolytic", "Sedative-hypnotic", "Muscle relaxant", "Antiarrhythmic", "Sodium channel blocker", "GABA agonist", "NMDA antagonist"], answer: 0 },
    { question: "Call the pharmacological group of Risperidone:", options: ["Antipsychotics drugs", "Antidepressants", "Anxiolytics", "Mood stabilizers", "Antiepileptics", "Sedative-hypnotics", "CNS stimulants", "Typical antipsychotic", "Atypical antipsychotic", "Tranquilizer"], answer: 0 },
    { question: "Atropine is an antagonist of:", options: ["M-cholinoreceptors", "N-cholinoreceptors", "Alpha-1 adrenoreceptors", "Beta-1 adrenoreceptors", "Dopamine receptors", "Serotonin receptors", "Histamine receptors", "GABA receptors", "Opioid receptors", "NMDA receptors"], answer: 0 },
    { question: "Rivastigmine is agonist of:", options: ["M-cholinoreceptor", "N-cholinoreceptor", "Dopamine receptor", "Serotonin receptor", "GABA receptor", "Glutamate receptor", "Acetylcholinesterase inhibitor", "Butyrylcholinesterase inhibitor", "Alpha adrenoreceptor", "Beta adrenoreceptor"], answer: 0 },
    { question: "Call the pharmacological group of Dipyridamole:", options: ["Antiplatelet", "Anticoagulant", "Thrombolytic", "Antifibrinolytic", "Vasodilator", "Phosphodiesterase inhibitor", "Adenosine reuptake inhibitor", "Antiarrhythmic", "Antianginal", "NSAID"], answer: 0 },
    { question: "Call the pharmacological group of Ibuprofen:", options: ["NSAID", "Opioid analgesic", "Corticosteroid", "Acetaminophen", "COX-2 inhibitor", "Salicylate", "DMARD", "Muscle relaxant", "Local anesthetic", "Antihistamine"], answer: 0 },
    { question: "Salmeterol is an agonist of:", options: ["Beta-2 adrenoreceptor", "Beta-1 adrenoreceptor", "Alpha-1 adrenoreceptor", "Alpha-2 adrenoreceptor", "M-cholinoreceptor", "Dopamine receptor", "Histamine receptor", "Leukotriene receptor", "Glucocorticoid receptor", "Muscarinic receptor"], answer: 0 },
    { question: "Call the pharmacological group of Losartan:", options: ["Hypotensive drugs", "Diuretic", "Beta blocker", "Calcium channel blocker", "ACE inhibitor", "ARB", "Alpha blocker", "Vasodilator", "Cardiac glycoside", "Antiarrhythmic"], answer: 0 },
    { question: "Call the pharmacological group of Omeprazole:", options: ["Drugs for lowering gastric acidity", "H2 blocker", "Antacid", "Mucosal protectant", "Prokinetic", "Antiemetic", "Antibiotic", "Antispasmodic", "Laxative", "Antidiarrheal"], answer: 0 },
    { question: "Dobutamine is agonist of:", options: ["Beta-1 adrenoreceptor", "Beta-2 adrenoreceptor", "Alpha-1 adrenoreceptor", "Alpha-2 adrenoreceptor", "Dopamine receptor", "M-cholinoreceptor", "Serotonin receptor", "Histamine receptor", "Opioid receptor", "All adrenoreceptors"], answer: 0 },
    { question: "Call the pharmacological group of Morphine:", options: ["Narcotic analgesic", "NSAID", "Corticosteroid", "Local anesthetic", "Antidepressant", "Antiepileptic", "Sedative", "Muscle relaxant", "Antipyretic", "Anti-inflammatory"], answer: 0 },
    { question: "Atenolol is a blocker of:", options: ["Beta-1 adrenoreceptor", "Beta-2 adrenoreceptor", "Alpha-1 adrenoreceptor", "Alpha-2 adrenoreceptor", "M-cholinoreceptor", "Dopamine receptor", "Serotonin receptor", "Calcium channel", "Potassium channel", "Sodium channel"], answer: 0 },
    { question: "Call the pharmacological group of Clopidogrel:", options: ["Antiplatelet", "Anticoagulant", "Thrombolytic", "NSAID", "P2Y12 inhibitor", "GP IIb/IIIa inhibitor", "COX inhibitor", "Vitamin K antagonist", "Direct thrombin inhibitor", "Factor Xa inhibitor"], answer: 0 },
    { question: "Call the pharmacological group of Haloperidol:", options: ["Antipsychotic drugs", "Antidepressants", "Anxiolytics", "Mood stabilizers", "Typical antipsychotic", "Atypical antipsychotic", "Antiepileptic", "Sedative", "CNS stimulant", "Antiparkinsonian"], answer: 0 },
    { question: "Prazosin is a blocker of:", options: ["Alpha-1 adrenoreceptors", "Alpha-2 adrenoreceptors", "Beta-1 adrenoreceptors", "Beta-2 adrenoreceptors", "M-cholinoreceptors", "Dopamine receptors", "Serotonin receptors", "Calcium channels", "Angiotensin receptors", "Potassium channels"], answer: 0 },
    { question: "Call the pharmacological group of Rosuvastatin:", options: ["Lipid lowering drugs", "Fibrate", "Bile acid sequestrant", "Cholesterol absorption inhibitor", "PCSK9 inhibitor", "Niacin", "Omega-3", "Antihypertensive", "Antidiabetic", "Antianginal"], answer: 0 },
    { question: "Call the pharmacological group of Diclofenac:", options: ["NSAID", "Opioid", "Corticosteroid", "COX-2 inhibitor", "Salicylate", "Acetaminophen", "Local anesthetic", "Muscle relaxant", "Antihistamine", "Disease-modifying drug"], answer: 0 },
    { question: "Call the pharmacological group of Lidocaine:", options: ["Local anesthetics", "General anesthetics", "NSAID", "Opioid", "Antiarrhythmic", "Antiepileptic", "Sodium channel blocker", "Calcium channel blocker", "Beta blocker", "Corticosteroid"], answer: 0 },
    { question: "Phentolamine is blocker of:", options: ["Alpha-1, alpha-2 adrenoreceptors", "Alpha-1 only", "Alpha-2 only", "Beta-1 adrenoreceptor", "Beta-2 adrenoreceptor", "M-cholinoreceptor", "Dopamine receptor", "Serotonin receptor", "Histamine receptor", "Non-selective alpha"], answer: 0 },
    { question: "Call the pharmacological group of Chlorpromazine:", options: ["Antipsychotic drugs", "Antidepressant", "Anxiolytic", "Typical antipsychotic", "Atypical antipsychotic", "Antiemetic", "Antihistamine", "Sedative", "Antiparkinsonian", "Mood stabilizer"], answer: 0 },
    { question: "Dopamine is agonist of:", options: ["Alpha-1, beta-1 adrenoreceptor", "Dopamine only", "Beta-1 only", "Alpha-1 only", "All adrenoreceptors", "Dopamine and beta", "Dopamine and alpha", "Beta-1 and beta-2", "Alpha-1 and alpha-2", "Non-selective"], answer: 0 },
    { question: "Call the pharmacological group of Atorvastatin:", options: ["Lipid-lowering drugs", "Fibrate", "Bile acid sequestrant", "Cholesterol absorption inhibitor", "PCSK9 inhibitor", "Niacin", "Antihypertensive", "Antidiabetic", "Antianginal", "Antiarrhythmic"], answer: 0 },
    { question: "Call the pharmacological group of Gabapentin:", options: ["Antiepileptic drugs", "Antipsychotic", "Antidepressant", "Anxiolytic", "Neuropathic pain", "Calcium channel modulator", "GABA analogue", "Sedative", "Muscle relaxant", "Mood stabilizer"], answer: 0 },
    { question: "Call the pharmacological group of Digoxin:", options: ["Cardiac glycosides", "Antiarrhythmic", "Beta blocker", "Calcium channel blocker", "ACE inhibitor", "Diuretic", "Vasodilator", "Antianginal", "Antihypertensive", "Inotrope"], answer: 0 }
];

// ============================================
// DO NOT EDIT BELOW THIS LINE - SHUFFLE LOGIC
// ============================================

let currentQuestions = [];
let userAnswers = {};

// Fisher-Yates Shuffle Algorithm
function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

// Initialize Test
function initTest() {
    // 1. Shuffle the question bank order
    const shuffledBank = shuffleArray([...questionBank]);
    
    // 2. For each question, shuffle the options and track the new correct index
    currentQuestions = shuffledBank.map(q => {
        // Create pairs of [option, originalIndex]
        const optionPairs = q.options.map((opt, idx) => ({ opt, idx }));
        // Shuffle the pairs
        shuffleArray(optionPairs);
        // Find where the correct answer (original index 0) moved to
        const newCorrectIndex = optionPairs.findIndex(pair => pair.idx === q.answer);
        
        return {
            question: q.question,
            options: optionPairs.map(p => p.opt),
            answer: newCorrectIndex
        };
    });
    
    // Reset answers
    userAnswers = {};
    renderTest();
}

// Render Test HTML
function renderTest() {
    const container = document.getElementById('testContainer');
    const totalSpan = document.getElementById('totalQuestions');
    
    if (!container) return;
    
    totalSpan.textContent = currentQuestions.length;
    
    let html = '';
    currentQuestions.forEach((q, qIndex) => {
        html += `<div class="question-card">`;
        html += `<div class="question-text">${qIndex + 1}. ${q.question}</div>`;
        html += `<div class="options">`;
        
        q.options.forEach((opt, optIndex) => {
            const isChecked = userAnswers[qIndex] === optIndex ? 'checked' : '';
            html += `<div class="option">`;
            html += `<input type="radio" name="q${qIndex}" value="${optIndex}" id="q${qIndex}_${optIndex}" ${isChecked} onchange="saveAnswer(${qIndex}, ${optIndex})">`;
            html += `<label for="q${qIndex}_${optIndex}">${opt}</label>`;
            html += `</div>`;
        });
        
        html += `</div></div>`;
    });
    
    container.innerHTML = html;
    updateProgress();
}

// Save Answer and Update Progress
function saveAnswer(qIndex, optIndex) {
    userAnswers[qIndex] = optIndex;
    updateProgress();
}

// Update Progress Bar
function updateProgress() {
    const answered = Object.keys(userAnswers).length;
    const total = currentQuestions.length;
    const percent = (answered / total) * 100;
    
    const progressFill = document.getElementById('progressFill');
    if (progressFill) {
        progressFill.style.width = percent + '%';
    }
}

// Submit Test and Show Results
function submitTest() {
    let score = 0;
    let resultsHtml = '';
    
    currentQuestions.forEach((q, qIndex) => {
        const userAnswer = userAnswers[qIndex];
        const isCorrect = (userAnswer !== undefined && userAnswer === q.answer);
        if (isCorrect) score++;
        
        const userAnswerText = (userAnswer !== undefined) ? q.options[userAnswer] : 'Not answered';
        const correctAnswerText = q.options[q.answer];
        const statusClass = isCorrect ? 'correct' : (userAnswer === undefined ? 'not-answered' : 'incorrect');
        
        resultsHtml += `<div class="result-item">`;
        resultsHtml += `<div class="result-question">${qIndex + 1}. ${q.question}</div>`;
        resultsHtml += `<div>Your answer: <span class="${statusClass}">${userAnswerText}</span></div>`;
        resultsHtml += `<div>Correct answer: <span class="correct">${correctAnswerText}</span></div>`;
        resultsHtml += `</div>`;
    });
    
    const total = currentQuestions.length;
    const percentage = ((score / total) * 100).toFixed(1);
    
    document.getElementById('score').textContent = score;
    document.getElementById('total').textContent = total;
    document.getElementById('percentage').textContent = percentage + '%';
    document.getElementById('resultDetails').innerHTML = resultsHtml;
    document.getElementById('resultModal').style.display = 'block';
}

// Event Listeners and Initialization
document.addEventListener('DOMContentLoaded', () => {
    initTest();
    
    const submitBtn = document.getElementById('submitBtn');
    if (submitBtn) {
        submitBtn.addEventListener('click', submitTest);
    }
    
    const closeModal = document.getElementById('closeModal');
    if (closeModal) {
        closeModal.addEventListener('click', () => {
            document.getElementById('resultModal').style.display = 'none';
        });
    }
    
    const retakeBtn = document.getElementById('retakeBtn');
    if (retakeBtn) {
        retakeBtn.addEventListener('click', () => {
            document.getElementById('resultModal').style.display = 'none';
            initTest();
        });
    }
    
    // Close modal when clicking outside
    window.addEventListener('click', (event) => {
        const modal = document.getElementById('resultModal');
        if (event.target === modal) {
            modal.style.display = 'none';
        }
    });
});

// Expose functions to global scope for HTML onclick
window.saveAnswer = saveAnswer;
window.submitTest = submitTest;
window.initTest = initTest;
