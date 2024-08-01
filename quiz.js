const quizData = [
    {
        question: 'Who is Duck\'s girlfriend?',
        answers: ['Mia', 'Piglet', 'Ksenia', 'nobody'],
        correct: 'Mia'
    },
	{
        question: 'Who is Moomin\'s girlfriend?',
        answers: ['Mia', 'Piglet', 'Ksenia', 'nobody'],
        correct: 'Ksenia'
    },
	{
        question: 'Who is Buddy\'s girlfriend?',
        answers: ['Mia', 'Piglet', 'Ksenia', 'nobody'],
        correct: 'nobody'
    },
	{
        question: 'Who is Krtek\'s girlfriend?',
        answers: ['Mia', 'Piglet', 'Ksenia', 'nobody'],
        correct: 'Piglet'
    },	
    {
        question: 'Who is Ksenia\'s boyfriend?',
        answers: ['Buddy', 'Duck', 'Krtek', 'Moomin', 'Simon'],
        correct: 'Moomin'
    },
    {
        question: 'Who is Mia\'s boyfriend?',
        answers: ['Buddy', 'Duck', 'Krtek', 'Moomin', 'Simon'],
        correct: 'Duck'
    },
	{
        question: 'Who is Piglet\'s boyfriend?',
        answers: ['Buddy', 'Duck', 'Krtek', 'Moomin', 'Simon'],
        correct: 'Krtek'
    },	
	{
        question: 'Who is Mr Cat\'s best friend?',
        answers: ['Buddy', 'Duck', 'Krtek', 'Moomin', 'Simon'],
        correct: 'Buddy'
    },
	{
        question: 'Who is Buddy\'s best friend?',
        question: 'Who is Buddy\'s best friend?',
        answers: ['Mr Cat', 'Duck', 'Krtek', 'Moomin', 'Simon'],
        correct: 'Mr Cat'
    },
	{
        question: 'What is Frodge\'s first name?',
        answers: ['Buddy', 'Duck', 'Krtek', 'Moomin', 'Simon'],
        correct: 'Simon'
    },
	{
        question: 'What is Buddy\'s last name?',
        answers: ['Nedvěd', 'Medvedev', 'Bear'],
        correct: 'Nedvěd'
    },
	{
        question: 'What is an appropriate greeting?',
        answers: ['Good moomin!', 'Good Simon!', 'Bye!'],
        correct: 'Good moomin!'
    },
	{
        question: 'Calling a moomin fat is ...',
        answers: ['absolutely okay', 'slightly impolite', 'a crime against moominity'],
        correct: 'a crime against moominity'
    },
	{
        question: 'Who is the best?',
        answers: ['Buddy', 'Duck', 'Krtek', 'Moomin', 'Simon'],
        correct: 'Duck'
    },
	{
        question: 'Who of these is S-Tier in everything?',
        answers: ['Buddy', 'Duck', 'Krtek', 'Moomin', 'Simon'],
        correct: 'Duck'
    },
	{
        question: 'Who of these is an AAA-Tier moomin?',
        answers: ['Buddy', 'Duck', 'Krtek', 'Moomin', 'Simon'],
        correct: 'Moomin'
    },
	{
        question: 'What kind of pictures does everyone love?',
        answers: ['dick pics', 'duck pics', 'Simon\'s selfies'],
        correct: 'duck pics'
    },
	{
        question: 'What is a dangerous, fatal disease?',
        answers: ['catness', 'moominity', 'changeable weather'],
        correct: 'catness'
    },	
	{
        question: 'What do sincere people deny?',
        answers: ['sloth', 'moominity', 'changeable weather'],
        correct: 'sloth'
    },	
	{
        question: 'What do sincere people praise?',
        answers: ['sloth', 'the moomins', 'changeable weather'],
        correct: 'the moomins'
    },
	{
        question: 'What is Duck\'s hockey nickname?',
        answers: ['Connor McDuckvid', 'Duckish Dash', 'The Duck'],
        correct: 'Connor McDuckvid'
    },	
	{
        question: 'What is Duck\'s favourite NHL team?',
        answers: ['Anaheim', 'Dallas', 'Khimki', 'New York'],
        correct: 'Anaheim'
    },
	{
        question: 'What is a polite phrase?',
        answers: ['How are you moomin?', 'I do not want his replies.', 'Duck should suck.', 'I will not play with you'],
        correct: 'How are you moomin?'
    },
	{
        question: 'Why is Buddy single?',
        answers: ['Nobody likes him.', 'He has to work all the time.', 'He is not handsome.', 'He is not succesful.'],
        correct: 'He has to work all the time.'
    },
	{
        question: 'What does Ksenia have to say to Moomin after he came in her mouth?',
        answers: ['Thank you, sir!', 'What?', 'Moomin is a lucky bastard.', 'Oh no.'],
        correct: 'Thank you, sir!'
    },
	{
        question: 'What does Simon like to cook?',
        answers: ['smashed potatoes', 'zucchini', 'kohlrabi ', 'fish'],
        correct: 'smashed potatoes'
    },
	{
        question: 'What is Simon?',
        answers: ['old', 'handsome', 'a AAA-Tier moomin'],
        correct: 'old'
    },	
	{
        question: 'What is the master species?',
        answers: ['humans', 'cats', 'bears', 'moomins'],
        correct: 'moomins'
    },
	{
        question: 'Who is the best referee?',
        answers: ['Krtek', 'someone from Khimki', 'a British skinhead'],
        correct: 'Krtek'
    },
];

let currentQuestionIndex = 0;
let score = 0;
let questions = shuffleArray(quizData, 10)
let answered = false;

function shuffleArray(array, max) {
    for (let i = 0; i < max; i++) {
        const j = i + Math.floor(Math.random() * (array.length - i));
        [array[i], array[j]] = [array[j], array[i]];
    }
    
	return array.slice(0, max);
}

function loadQuestion() {
    answered = false;
	const questionData = questions[currentQuestionIndex];
    document.getElementById('question').textContent = questionData.question;
    const answersContainer = document.getElementById('answers');
    answersContainer.innerHTML = '';
	const answers = shuffleArray(questionData.answers, questionData.answers.length)
	
    answers.forEach((answer, index) => {
        const answerButton = document.createElement('button');
        answerButton.textContent = answer;
        answerButton.className = 'answer';
        answerButton.onclick = () => checkAnswer(answer, answers);
        answersContainer.appendChild(answerButton);
    });
}

function checkAnswer(selectedAnswer, answers) {
    if (answered) {
		return;
	}
	
    answered = true;

	const questionData = questions[currentQuestionIndex];
    const answersContainer = document.getElementById('answers').children;

	answers.forEach((answer, index) => {
	    if (answer === questionData.correct) {
            answersContainer[index].classList.add('correct'); 
        } else if (selectedAnswer === answer) {
            answersContainer[index].classList.add('wrong');
        }
	});
    
	if (selectedAnswer === questionData.correct) {
        score++;
    }
    
    document.querySelector('button[onclick="nextQuestion()"]').disabled = false;
}

function nextQuestion() {
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
        loadQuestion();
    } else {
        showResult();
    }
}

function showResult() {
	let token = btoa(`Your score is ${score}.`);

    document.getElementById('quiz-container').innerHTML = `
        <h2>Your score is ${score} out of ${questions.length}.</h2> 
		<p>Send your score to Simon together with the verification token: ${token}</p>
    `;
}

loadQuestion();