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

// Variables for the current set and term index
let currentSet = [];
let currentTermIndex = 0;

// Add the timeout variable here
let quizTimeout = null;

// Select a flashcard set and update visibility for flashcard mode
function selectSet(setName) {
    currentSet = flashcardSets[setName];
    currentTermIndex = 0;
    displayTerm();
    updateNavigationButtons(); // Ensure navigation buttons are set correctly

    // Clear the definition display when a set is selected
    document.getElementById('definitionDisplay').innerText = ''; 

    // Show the shuffle button only when a set is selected and there are terms available
    if (currentSet.length > 0) {
        document.getElementById('shuffleButton').style.display = 'inline-block';
    } else {
        document.getElementById('shuffleButton').style.display = 'none';
    }

    // Show flashcard-specific elements and hide quiz-specific elements
    showFlashcardButtons();
    document.querySelectorAll('.top-controls button').forEach(button => button.style.display = 'inline-block');
    document.getElementById('startQuizButton').style.display = 'inline-block';
    document.getElementById('questionCounter').style.display = 'none';
    document.getElementById('scoreTracker').style.display = 'none';
    document.getElementById('optionsContainer').style.display = 'none';
    document.getElementById('backToFlashcards').style.display = 'none';
}

// Display the current term based on the index
function displayTerm() {
    if (currentSet.length > 0) {
        document.getElementById('termDisplay').innerText = currentSet[currentTermIndex].term;
        document.getElementById('definitionDisplay').innerText = ''; // Clear the definition display
        document.getElementById('showDefinitionButton').style.display = 'inline-block';
        document.getElementById('nextButton').style.display = 'inline-block';
        document.getElementById('prevButton').style.display = 'inline-block';
    } else {
        document.getElementById('termDisplay').innerText = 'No terms available.';
    }
}

// Update navigation buttons based on current index
function updateNavigationButtons() {
    const prevButton = document.getElementById('prevButton');
    const nextButton = document.getElementById('nextButton');

    // Keep buttons visible but add a class to indicate they're inactive
    if (currentTermIndex === 0) {
        prevButton.classList.add('inactive');
    } else {
        prevButton.classList.remove('inactive');
    }

    if (currentTermIndex === currentSet.length - 1) {
        nextButton.classList.add('inactive');
    } else {
        nextButton.classList.remove('inactive');
    }
}

// Navigate to the next card
function nextCard() {
    if (currentSet.length > 0 && currentTermIndex < currentSet.length - 1) {
        currentTermIndex++;
        displayTerm();
        updateNavigationButtons();
    }
}

// Navigate to the previous card
function previousCard() {
    if (currentSet.length > 0 && currentTermIndex > 0) {
        currentTermIndex--;
        displayTerm();
        updateNavigationButtons();
    }
}

// Show the definition of the current term
function showDefinition() {
    if (currentSet.length > 0) {
        const definition = currentSet[currentTermIndex].definition;
        document.getElementById('definitionDisplay').innerText = definition;
        document.getElementById('definitionDisplay').style.display = 'block'; // Ensure the element is shown
    }
}

// Shuffle the current set of flashcards
function shuffleSet() {
    if (currentSet.length > 0) {
        currentSet = currentSet.sort(() => Math.random() - 0.5);
        currentTermIndex = 0; // Reset to the first term after shuffle
        displayTerm();
        updateNavigationButtons();
    }
}

// Quiz mode functions
let quizSet = [];
let quizIndex = 0;
let score = 0;

function startQuiz() {
    quizSet = buildQuizSet();
    quizIndex = 0;
    score = 0;
    displayQuizQuestion();

    // Show quiz-specific elements and hide flashcard elements
    hideFlashcardButtons(); // Hide flashcard buttons when quiz starts
    document.getElementById('shuffleButton').style.display = 'none'; // Hide shuffle button in quiz mode
    document.querySelectorAll('.top-controls button').forEach(button => button.style.display = 'none');
    document.getElementById('questionCounter').style.display = 'inline-block';
    document.getElementById('scoreTracker').style.display = 'inline-block';
    document.getElementById('startQuizButton').style.display = 'none';
    document.getElementById('optionsContainer').style.display = 'block';
    document.getElementById('backToFlashcards').style.display = 'inline-block';

    // Hide the definition display during the quiz
    document.getElementById('definitionDisplay').style.display = 'none';
}

function buildQuizSet() {
    const allTerms = [];
    for (let setName in flashcardSets) {
        allTerms.push(...flashcardSets[setName]);
    }
    return allTerms.sort(() => 0.5 - Math.random()).slice(0, 20);
}

function displayQuizQuestion() {
    const termDisplay = document.getElementById('termDisplay');
    const buttonsContainer = document.getElementById('optionsContainer');
    
    buttonsContainer.innerHTML = ''; // Clear previous options

    const correctTerm = quizSet[quizIndex];
    termDisplay.innerText = `Definition: ${correctTerm.definition}`;

    let options = [correctTerm];
    while (options.length < 4) {
        const randomTerm = quizSet[Math.floor(Math.random() * quizSet.length)];
        if (!options.includes(randomTerm)) options.push(randomTerm);
    }

    options = options.sort(() => Math.random() - 0.5);
    options.forEach(option => {
        const button = document.createElement('button');
        button.className = 'quiz-option';
        button.innerText = option.term;
        button.onclick = () => checkAnswer(option, correctTerm);
        buttonsContainer.appendChild(button);
    });

    // Ensure question tracker is updated for the new question
    updateQuizInfo();
}

function checkAnswer(selectedTerm, correctTerm) {
    const buttons = document.querySelectorAll('.quiz-option');
    buttons.forEach(button => {
        if (button.innerText === correctTerm.term) {
            button.style.backgroundColor = '#4caf50'; // Green for correct
        } else if (button.innerText === selectedTerm.term) {
            button.style.backgroundColor = '#e74c3c'; // Red for incorrect
        }
    });

    if (selectedTerm.term === correctTerm.term) {
        score++;
    }

    updateQuizInfo(); // Update the score and question number

    // Store the timeout ID for question transition
    quizTimeout = setTimeout(() => {
        quizIndex++;
        if (quizIndex < quizSet.length) {
            displayQuizQuestion(); // Display the next question
        } else {
            endQuizMode(); // End quiz if all questions are answered
        }
    }, 1000);
}

function updateQuizInfo() {
    document.getElementById('questionCounter').innerText = `Question ${quizIndex + 1}/20`;
    document.getElementById('scoreTracker').innerText = `Score: ${score}`;
}

function endQuizMode() {
    // Clear any pending timeouts
    if (quizTimeout) {
        clearTimeout(quizTimeout);
        quizTimeout = null;
    }

    // Display final score
    document.getElementById('termDisplay').innerText = `Quiz Complete! You scored ${score} out of 20.`;
    
    // Hide all quiz-related elements immediately
    document.getElementById('optionsContainer').style.display = 'none';
    document.getElementById('backToFlashcards').style.display = 'none';
    document.getElementById('questionCounter').style.display = 'none';
    document.getElementById('scoreTracker').style.display = 'none';

    // Hide or clear the definition display
    document.getElementById('definitionDisplay').innerText = ''; 
    document.getElementById('definitionDisplay').style.display = 'none';

    // Delay before returning to flashcard mode
    setTimeout(() => {
        // Reset the display text
        document.getElementById('termDisplay').innerText = 'Select a flashcard set to begin.';
        document.getElementById('definitionDisplay').innerText = '';
        document.getElementById('definitionDisplay').style.display = 'none';

        // Show the set selection buttons and start quiz button
        document.querySelectorAll('.top-controls button').forEach(button => 
            button.style.display = 'inline-block'
        );
        document.getElementById('startQuizButton').style.display = 'inline-block';

        // Ensure all quiz-related elements remain hidden
        document.getElementById('questionCounter').style.display = 'none';
        document.getElementById('scoreTracker').style.display = 'none';
        document.getElementById('backToFlashcards').style.display = 'none';
        document.getElementById('optionsContainer').style.display = 'none';

        // Hide flashcard-specific buttons
        hideFlashcardButtons();
        
        // Hide the shuffle button
        document.getElementById('shuffleButton').style.display = 'none';
    }, 2000); // 2-second delay
}

function showFlashcardButtons() {
    document.getElementById('prevButton').style.display = 'inline-block';
    document.getElementById('showDefinitionButton').style.display = 'inline-block';
    document.getElementById('nextButton').style.display = 'inline-block';
}

function hideFlashcardButtons() {
    document.getElementById('prevButton').style.display = 'none';
    document.getElementById('showDefinitionButton').style.display = 'none';
    document.getElementById('nextButton').style.display = 'none';
}

// Hide the shuffle button when the page first loads
window.onload = function() {
    document.getElementById('shuffleButton').style.display = 'none';
};
