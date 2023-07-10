import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import Button from '../../UI/Quiz/QuizButton';
import CompletedQuiz from '../../Components/Quiz/CompletedQuiz';
import classes from './Quiz.module.css'

const Quiz = () => {
    const { id } = useParams();
    const [quiz, setQuiz] = useState([]);
    const [score, setScore] = useState(0);
    const [index, setIndex] = useState(0);
    // const [currentQuestion, setCurrentQuestion] = useState(null);
    const [selectedAnswer, setSelectedAnswer] = useState(null);
    const [completedQuiz, setCompletedQuiz] = useState(false);
    const [answerDisabled, setAnswerDisabled] = useState({});

    const baseUrl = `https://quiz-app-api-c66z.onrender.com`;
    
const getQuiz = async () => {
    try {
        const response = await fetch(`${baseUrl}/api/quiz/${id}`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            },
        });
        const result = await response.json();
        setQuiz(result);
    } catch (error) {
        console.log('Error:', error);
    }
};

useEffect(() => {
    getQuiz();
}, []);

const handleScore = (e) => {
    const isCorrect = e.target.value;
    if (isCorrect === 'true') {
      //if this is true then add 1 to the score
        setScore(prevScore => prevScore + 1);
    }
  };

  useEffect(() => {
    console.log(score);
  }, [score]);
  
  //get current question index
//   const getCurrentQuestion = () => {
//     if(quiz.questions && quiz.questions.length > 0) {
//         const currentQuestion = quiz.questions[index] + 1;
//         setCurrentQuestion(currentQuestion);
//         console.log(currentQuestion);
//   }
// }

// create function to increment index when the next button is clicked
const incrementQuestion = () => {
    if (index < quiz.questions.length - 1) {
        setIndex(index + 1);
    } else {
        setCompletedQuiz(true);
    }
}

// create function to select the answer and disable the other answers
const selectAnswer = (e) => {
    // Store the ID of the selected answer
    const clicked = e.target.parentNode.dataset.key; 
    setSelectedAnswer(clicked); // set the selected answer to the state
    console.log(clicked);
    setAnswerDisabled((prevDisabled) => ({ // set the answerDisabled state to the previous state
        // spread the previous state
      ...prevDisabled, 
      // set the index to true 
      [index]: true, 
    }));
  }

 

return (
    <div className='flex w-full m-h-96 flex-col px-2 pt-5 items-center'>
        {completedQuiz ? (
            <CompletedQuiz score={score} quiz={quiz} />
            ) : ( 
                <>
                {quiz && (
                    <h1 className='text-3xl lg:text4xl py-5 text-navy font-bold'>{quiz.title}</h1>
                    )}
                {quiz && (
                    <div className='flex backdrop-blur-md bg-lightBlue rounded-2xl py-5 px-2 w-full md:w-4/5 lg:w-3/5 text-navy'>
                    {quiz.questions && quiz.questions.length > 0 && (
                    <div className='flex flex-col w-full'>
                        <div className={`${classes.header} text-navy text-xl pb-3 items-center`}>
                            <h2 className='font-bold'>{quiz.questions[index].question}</h2>
                            <p className='ml-auto text-lg text-white bg-purple-500 rounded-2xl px-2'>{index + 1} / {quiz.questions.length}</p>
                        </div>
                    <ul className='grid gap-5 grid-rows-4'>
                        {quiz.questions[index].answers.map((answer) => (
                            <li 
                            onClick={selectAnswer} 
                            data-key={answer._id} 
                            key={answer._id} >
                                <button className={`flex w-full flex-wrap rounded-2xl text-white text-lg my-3  p-3 ${selectedAnswer === answer._id ? 'bg-purple-500' : 'bg-blueQuiz'}
                                `} 
                                onClick={handleScore} 
                                value={answer.correct}  
                                disabled={answerDisabled[index]}>
                                    {answer.answer}
                                </button>
                            </li>
                            ))}
                    </ul>
                    <div className='flex items-end justify-end mt-5'>
                    <div onClick={incrementQuestion}>
                        <Button>Next</Button>
                    </div>
                    </div>
                </div>
                )}
                </div>
            )}
            <div>
            </div>
            </>
            )}
    </div>
    )
};


export default Quiz;