// Initialize flashcard sets from Local Storage or default sets
const flashcardSets = initializeFlashcardSets();

function initializeFlashcardSets() {
    const defaultSets = {
    set1: [
        { term: "Data Management", definition: "A process that focuses on data collection, storage, and retrieval; data management functions include addition, deletion, modification, and listing." },
        { term: "Stakeholder", definition: "A person or organization with an interest in a particular place or issue." },
        { term: "Project Management", definition: "A set of practices that, if executed well, will raise the likelihood that a project will succeed." },
        { term: "Evidence-Based Practice (EBP)", definition: "The integration of clinical expertise, patient values, and the best research evidence into the decision-making process for patient care." },
        { term: "Digital Library", definition: "A set of electronic resources with the related capabilities to store, organize, search, and retrieve information to meet the needs of a community of users." },
        { term: "Data Analysis", definition: "The process of examining data collected during the course of a study to identify trends and patterns of relationships." },
        { term: "LOINC", definition: "A reference terminology originally developed for lab results; this terminology is now used by a variety of disciplines." },
        { term: "NCPDP", definition: "The only standards development organization that focuses on pharmacy services and prescribing processes, establishing standards for e-prescribing." },
        { term: "NIC", definition: "Defines and assists in choosing the appropriate nursing intervention for nurses, nurse administrators, and faculty." },
        { term: "NOC", definition: "Standardizes the terminology and criteria for measurable or desirable outcomes as a result of nursing intervention." },
    ],
    set2: [
        { term: "Reference Terminology", definition: "Designed to provide a common language across a diverse landscape; examples include LOINC and SNOMED CT." },
        { term: "RxNorm", definition: "A standardized nomenclature for clinical drugs and drug delivery devices, produced by the National Library of Medicine (NLM), supporting interoperability between EHR systems." },
        { term: "SNOMED CT", definition: "Systematized Nomenclature of Medicine - Clinical Terms." },
        { term: "American National Standards Institute (ANSI)", definition: "Promotes the use of U.S. standards internationally, advocates for U.S. policy and technical positions in international and regional standards organizations, and encourages the adoption of international standards as national standards where these meet the needs of the user community." },
        { term: "Health Level 7 (HL7)", definition: "A standards development organization accredited by the American National Standards Institute (ANSI) that addresses issues at the 7th, or application, level of healthcare system interconnections." },
        { term: "ICD", definition: "International Classification of Diseases." },
        { term: "International Standards Organization (ISO)", definition: "Ensures that services have achieved a minimum level of quality." },
        { term: "North American Nursing Diagnosis Association (NANDA)", definition: "Its purpose is to define, refine, and promote a taxonomy of nursing diagnostic terminology for general use by professional nurses." },
        { term: "NMMDS", definition: "Defines the minimum set of basic data elements for nursing in a computerized patient record." },
        { term: "Omaha System", definition: "A practice and documentation standardized taxonomy designed to describe client care." },
    ],
    set3: [
        { term: "Perioperative Nursing Data Set (PNDS)", definition: "A common language for perioperative nurses." },
        { term: "Unified Medical Language System (UMLS)", definition: "A project to link various biomedical vocabularies and nomenclatures together, with the goal of enabling computers to understand medical meaning." },
        { term: "Project Management Phases", definition: "Includes initiating, planning, executing, and closing." },
        { term: "Scope Creep", definition: "One of the most frequent causes of project delay, defined as a change in the scope of the project during implementation that often necessitates other changes, resulting in additional expenses, resources, and time." },
        { term: "Clinical Decision Support (CDS)", definition: "Supports clinical decision-making by providing information to promote best practices." },
        { term: "International Classification for Nursing Practice (ICNP)", definition: "A standardized nursing terminology that comprises nursing diagnoses, nursing interventions, and nursing outcomes." },
        { term: "SDLC Phases", definition: "Includes planning, analysis, design/development, implementation, and evaluation." },
        { term: "Taxonomy", definition: "A method of classifying and grouping items to make them usable and searchable." },
        { term: "STEEEP", definition: "The principles for redesigning healthcare—Safe, Timely, Effective, Efficient, Equitable, Patient-centered." },
        { term: "Workgroup for Electronic Data Interchange (WEDI)", definition: "Supports the development of transaction standards with the goal of enhancing the quality of care." },
    ],
    set4: [
        { term: "Waterfall Model", definition: "The most predictive SDLC approach, where phases of the project flow down one after another with no overlapping; phases are carried out and completed sequentially." },
        { term: "SWOT Analysis", definition: "An acronym representing the identification of strengths, weaknesses, opportunities, and threats." },
        { term: "Agile Development", definition: "An information system development process that emphasizes flexibility and rapid responses to anticipate new and changing requirements during development." },
        { term: "ABC Codes", definition: "Covers clinical services related to nursing, behavioral health, alternative medicine, ethnic and minority care, midwifery, and spiritual care." },
        { term: "Open Systems", definition: "Systems enclosed with a semi-permeable boundary that interact with the environment." },
        { term: "Big Bang Approach", definition: "Occurs when all applications and modules are implemented at once." },
        { term: "Adaptive Approach to the SDLC", definition: "An approach that assumes the project must be flexible and adapt to changing needs as the project progresses." },
        { term: "Predictive Approach to the SDLC", definition: "An approach that assumes the project can be planned in advance." },
        { term: "Steering Committee (Oversight Committee)", definition: "Consists of clients and other key executives who have a vision of the organization's strategic direction." },
        { term: "ACE Star Model of Knowledge Transformation", definition: "Provides a framework for converting research knowledge into a form useful for clinical decision-making." },
    ],
    set5: [
        { term: "Integrated Testing", definition: "Tests the transmission of messages between all systems, such as healthcare information systems, laboratory, radiology, pharmacy, dietary, cardiology, etc." },
        { term: "Diffusion of Innovation", definition: "Developed by Everett Rogers, it explains how individuals and communities respond to new ideas." },
        { term: "Database Management System (DBMS)", definition: "A system software component that manages and controls one or more databases." },
        { term: "Common Object Request Broker Architecture (CORBA)", definition: "Produces object-oriented interoperability standards that sustain architecture and infrastructure for computer applications." },
        { term: "Clinical Data Repository (CDR)", definition: "The storage component for all instance data of patient clinical records." },
        { term: "Personal Health Record (PHR)", definition: "An electronic application for individuals to maintain and manage their health information." },
        { term: "Interoperability", definition: "The capability of two or more computer systems to share data and resources." },
        { term: "AHRQ (Agency for Healthcare Research and Quality)", definition: "An agency that provides resources focused on improving healthcare quality." },
        { term: "Change Theory", definition: "The study of change in individuals or social systems." },
        { term: "Channel", definition: "A physical element that carries a message between a sender and a receiver." },
    ],
    set6: [
        { term: "Chaos Theory", definition: "The qualitative study of unstable, aperiodic behavior in deterministic, non-linear dynamical systems." },
        { term: "Clinical Informatics", definition: "The application of informatics and information technology to deliver healthcare services." },
        { term: "Closed System", definition: "A system that encloses an impermeable boundary and does not interact with the environment." },
        { term: "Quality Improvement (QI)", definition: "A systematic approach to enhancing healthcare services by identifying quality indicators." },
        { term: "Complex Adaptive System", definition: "An entity consisting of diverse and autonomous parts that behave as a unified whole." },
        { term: "Complexity Theory", definition: "Builds on Chaos Theory using a qualitative approach to study dynamic, nonlinear social systems." },
        { term: "Computerized Provider Order Entry (CPOE)", definition: "A system that automates the process of ordering medical interventions for patients." },
        { term: "Computer Science", definition: "The systematic study of algorithmic methods for representing and transforming information." },
        { term: "Needs Assessment", definition: "An assessment of the needs of a department or organization using various methods." },
        { term: "Conceptual Framework", definition: "A description and explanation of concepts and their relationships." },
    ],
    set7: [
        { term: "Data", definition: "Uninterpreted elements, such as a person’s name, weight, or age." },
        { term: "Uninterpreted", definition: "Refers to information or data that has not yet been analyzed." },
        { term: "Data Integrity", definition: "Refers to the accuracy and consistency of stored and transmitted data." },
        { term: "Data Mining", definition: "A step in the knowledge discovery process that involves finding correlations or patterns." },
        { term: "Data Science", definition: "The scientific process of extracting knowledge or insights from data." },
        { term: "Gap Analysis", definition: "A measurement that identifies the current state of a condition." },
        { term: "Digital Literacy", definition: "The ability to operate and understand digital devices." },
        { term: "Information", definition: "Data that has been given context, meaning, and purpose." },
        { term: "Information System (IS)", definition: "The manual and/or automated components of a system used to process data." },
        { term: "Health Information Technology (HIT)", definition: "The hardware, software, and integrated technologies related to health information." },
    ],
    set8: [
        { term: "Electronic Health Record (EHR)", definition: "A computer-based data repository of information about a client’s health status." },
        { term: "Meaningful Use", definition: "An initiative under the American Recovery and Reinvestment Act of 2009." },
        { term: "Workflow", definition: "A progression of steps that constitute a work process." },
        { term: "Workflow Analysis", definition: "A critical component of clinical implementations." },
        { term: "Process Analysis", definition: "The breakdown of a work process into a sequential series of steps." },
        { term: "Process Owners", definition: "Individuals responsible for the workflow to be analyzed." },
        { term: "Information Science", definition: "A discipline focused on investigating the properties and behavior of information." },
        { term: "Informatics", definition: "The science that studies the structure and general properties of information." },
        { term: "Nursing Informatics", definition: "The integration of health data, computer science, and nursing science." },
        { term: "Barcode Medication Administration (BCMA)", definition: "A technology system that uses barcodes for medication administration." },
    ],
    set9: [
        { term: "Information Literacy", definition: "A set of abilities requiring individuals to recognize when information is needed." },
        { term: "Associative Technical System", definition: "Refers to complex systems that recognize the interaction between people and technology." },
        { term: "User Experience (UX)", definition: "The overall experience of a person interacting with a technology." },
        { term: "Human Factors", definition: "A scientific discipline focused on understanding human-system interactions." },
        { term: "Joint Cognitive System", definition: "Systems in which information is shared among humans and technology." },
        { term: "Heuristic Evaluations", definition: "The assessment of a device against usability principles." },
        { term: "Think Aloud Protocol", definition: "A usability method where users verbalize their thoughts while interacting with a product." },
        { term: "Task Analysis", definition: "A suite of usability methods designed to understand user actions." },
        { term: "Knowledge", definition: "The synthesis of multiple sources of information over time." },
    ],
    set10: [
        { term: "DIKW Framework", definition: "A hierarchical model that describes the relationship between Data, Information, Knowledge, and Wisdom." },
        { term: "Strategic Planning", definition: "The process of determining what an organization wants to achieve in the future." },
        { term: "SDLC (Systems Development Life Cycle)", definition: "A framework that identifies all activities required to maintain an information system." },
        { term: "HCIS (Healthcare Information System)", definition: "A system designed to manage healthcare data." },
        { term: "Technical Interoperability", definition: "The ability to exchange data between different systems." },
        { term: "Process Interoperability", definition: "The coordination of business processes at the organizational level." },
        { term: "Scope", definition: "Defines the types of activities and services that an organization engages in." },
    ],
};

 // Check local storage and update if data exists
    for (let setName in defaultSets) {
        const savedSet = localStorage.getItem(setName);
        if (savedSet) {
            defaultSets[setName] = JSON.parse(savedSet);
        }
    }
    return defaultSets;
}

// Initialize variables for the current set and term index
let currentSet = [];
let currentTermIndex = 0;

// Load selected flashcard set
function loadSet() {
    const selectElement = document.getElementById('setSelect');
    const selectedSet = selectElement.value;

    if (selectedSet) {
        currentSet = flashcardSets[selectedSet];
        currentTermIndex = 0;
        displayTerm();
        document.getElementById('definitionDisplay').innerText = ''; // Clear definition when changing sets
    } else {
        document.getElementById('termDisplay').innerText = 'Select a flashcard set.';
        document.getElementById('definitionDisplay').innerText = '';
    }

    updateNavigationButtons(); // Update button visibility for new set
}

// Display the current term based on the index
function displayTerm() {
    if (currentSet.length > 0) {
        document.getElementById('termDisplay').innerText = currentSet[currentTermIndex].term;
    } else {
        document.getElementById('termDisplay').innerText = 'No terms available.';
    }
}

// Show the definition of the current term
function showDefinition() {
    if (currentSet.length > 0) {
        const definition = currentSet[currentTermIndex].definition;
        document.getElementById('definitionDisplay').innerText = definition;
    }
}

// Navigate to the next flashcard
function nextCard() {
    if (currentTermIndex < currentSet.length - 1) {
        currentTermIndex++;
        displayTerm();
        document.getElementById('definitionDisplay').innerText = ''; // Clear previous definition
        updateNavigationButtons();
    }
}

// Navigate to the previous flashcard
function previousCard() {
    if (currentTermIndex > 0) {
        currentTermIndex--;
        displayTerm();
        document.getElementById('definitionDisplay').innerText = ''; // Clear previous definition
        updateNavigationButtons();
    }
}

// Update visibility of navigation buttons
function updateNavigationButtons() {
    const nextButton = document.getElementById('nextButton');
    const prevButton = document.getElementById('prevButton');

    nextButton.style.visibility = currentTermIndex < currentSet.length - 1 ? 'visible' : 'hidden';
    prevButton.style.visibility = currentTermIndex > 0 ? 'visible' : 'hidden';
}

// Shuffle the current set of flashcards
function shuffleSet() {
    if (currentSet.length > 0) {
        for (let i = currentSet.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [currentSet[i], currentSet[j]] = [currentSet[j], currentSet[i]];
        }
        currentTermIndex = 0;
        displayTerm();
        document.getElementById('definitionDisplay').innerText = ''; // Clear definition
        updateNavigationButtons();
    }
}

// Quiz mode functionality
let quizSet = [];
let quizIndex = 0;
let score = 0;

// Build a 20-term randomized quiz set across all sets without duplication
function buildQuizSet() {
    const allTerms = [];
    for (let setName in flashcardSets) {
        allTerms.push(...flashcardSets[setName]);
    }

    const selectedTerms = [];
    while (selectedTerms.length < 20 && allTerms.length > 0) {
        const randomIndex = Math.floor(Math.random() * allTerms.length);
        selectedTerms.push(allTerms.splice(randomIndex, 1)[0]);
    }

    return selectedTerms;
}

// Start the quiz with a 20-term randomized set
function startQuiz() {
    quizSet = buildQuizSet();
    quizIndex = 0;
    score = 0;

    // Show quiz interface and hide flashcard elements
    document.getElementById('optionsContainer').style.display = 'block';
    document.getElementById('backToFlashcards').style.display = 'inline-block';
    document.getElementById('questionCounter').style.display = 'inline-block'; // Show question counter
    document.getElementById('scoreTracker').style.display = 'inline-block';    // Show score tracker
    document.querySelectorAll('.controls button').forEach(button => button.style.display = 'none');
    document.getElementById('setSelect').style.display = 'none'; // Hide set dropdown
    document.getElementById('shuffleButton').style.display = 'none'; // Hide shuffle button
    document.querySelector(".quiz-section button").style.display = 'none'; // Hide Start Quiz button

    document.getElementById('definitionDisplay').innerText = ''; // Clear definition display
    updateQuizInfo();
    displayQuizQuestion(); // Display the first question
}

// Update question counter and score
function updateQuizInfo() {
    document.getElementById('questionCounter').innerText = `Question ${quizIndex + 1}/20`;
    document.getElementById('scoreTracker').innerText = `Score: ${score}`;
}

// Display the current quiz question with more relevant multiple-choice options
function displayQuizQuestion() {
    const termDisplay = document.getElementById('termDisplay');
    const buttonsContainer = document.getElementById('optionsContainer');
    
    // Clear previous options
    buttonsContainer.innerHTML = '';

    // Get the current quiz term and display its definition as the question
    const correctTerm = quizSet[quizIndex];
    termDisplay.innerText = `Definition: ${correctTerm.definition}`;

    // Extract keywords from the correct term's definition
    const keywords = extractKeywords(correctTerm.definition);

    // Generate options with closer relevance
    let options = [correctTerm];
    const similarOptions = findSimilarOptions(correctTerm, keywords);

    while (options.length < 4 && similarOptions.length > 0) {
        options.push(similarOptions.pop());
    }

    // Fill remaining spots with random terms if needed
    while (options.length < 4) {
        const randomIndex = Math.floor(Math.random() * quizSet.length);
        const randomTerm = quizSet[randomIndex];
        if (!options.includes(randomTerm)) {
            options.push(randomTerm);
        }
    }

    // Shuffle and display the options
    options = options.sort(() => Math.random() - 0.5);
    options.forEach(option => {
        const button = document.createElement('button');
        button.className = 'quiz-option';
        button.innerText = option.term;
        button.onclick = () => checkAnswer(option, correctTerm);
        buttonsContainer.appendChild(button);
    });
}

// Helper function to extract significant keywords from a definition
function extractKeywords(definition) {
    return definition.split(' ')
        .filter(word => word.length > 3) // Filter out short, common words
        .map(word => word.toLowerCase());
}

// Find similar options based on keyword overlap
function findSimilarOptions(correctTerm, keywords) {
    return quizSet.filter(term => {
        if (term === correctTerm) return false;
        const termKeywords = extractKeywords(term.definition);
        const commonKeywords = termKeywords.filter(word => keywords.includes(word));
        return commonKeywords.length > 0;
    }).sort(() => Math.random() - 0.5).slice(0, 3); // Limit to top 3 matches
}

// Check the quiz answer and provide feedback
function checkAnswer(selectedTerm, correctTerm) {
    const buttons = document.querySelectorAll('.quiz-option');

    // Provide visual feedback
    buttons.forEach(button => {
        if (button.innerText === correctTerm.term) {
            button.style.backgroundColor = '#4caf50'; // Green for correct
        } else if (button.innerText === selectedTerm.term) {
            button.style.backgroundColor = '#e74c3c'; // Red for incorrect
        }
    });

    // Update score if correct
    if (selectedTerm.term === correctTerm.term) {
        score++;
    }

    updateQuizInfo(); // Update score display

    // Delay before moving to the next question
    setTimeout(() => {
        quizIndex++;
        if (quizIndex < 20) {
            displayQuizQuestion();
        } else {
            endQuiz();
        }
    }, 1000); // 1-second delay for feedback
}

// End the quiz and display the final score
function endQuiz() {
    // Hide quiz elements and show final score
    document.getElementById('termDisplay').innerText = `Quiz Complete! You scored ${score} out of 20.`;
    document.getElementById('optionsContainer').style.display = 'none';
    document.getElementById('backToFlashcards').style.display = 'none';

    const restartButton = document.createElement('button');
    restartButton.innerText = 'Restart Quiz';
    restartButton.onclick = startQuiz;
    restartButton.className = 'quiz-option';
    
    const exitButton = document.createElement('button');
    exitButton.innerText = 'Exit Quiz Mode';
    exitButton.onclick = endQuizMode;
    exitButton.className = 'quiz-option';

    const buttonsContainer = document.getElementById('optionsContainer');
    buttonsContainer.innerHTML = ''; // Clear options
    buttonsContainer.style.display = 'block'; // Show container for buttons
    buttonsContainer.appendChild(restartButton);
    buttonsContainer.appendChild(exitButton);
}

// Return to flashcard mode from quiz
function endQuizMode() {
    document.getElementById('termDisplay').innerText = 'Select a flashcard set to begin.';
    document.getElementById('definitionDisplay').innerText = 'Definition will appear here.';
    document.getElementById('optionsContainer').style.display = 'none';
    document.getElementById('backToFlashcards').style.display = 'none';
    document.getElementById('questionCounter').style.display = 'none'; // Hide question counter
    document.getElementById('scoreTracker').style.display = 'none';    // Hide score tracker
    document.querySelectorAll('.controls button').forEach(button => button.style.display = 'inline-block');
    document.getElementById('setSelect').style.display = 'inline-block';
    document.getElementById('shuffleButton').style.display = 'inline-block';
    document.querySelector(".quiz-section button").style.display = 'inline-block'; // Show Start Quiz button
}

if ("serviceWorker" in navigator) {
    window.addEventListener("load", () => {
        navigator.serviceWorker.register("/service-worker.js")
            .then((registration) => console.log("Service Worker registered with scope:", registration.scope))
            .catch((err) => console.log("Service Worker registration failed:", err));
    });
}

