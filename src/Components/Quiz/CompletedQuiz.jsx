import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import Button from '../../UI/Quiz/QuizButton';
import { useSaveScore } from '../../hooks/useSaveScore';


const CompletedQuiz = (props) => {
    const { submitScore } = useSaveScore(props);
    const [userId, setUserId] = useState('');

    useEffect(() => {
        const user = JSON.parse(localStorage.getItem('user'));
        const userId = user.user;
        setUserId(userId);
        submitScore();
    }, []);

    return (
       <div className='flex w-full gap-5 m-h-96 flex-col mt-10 px-2 items-center justify-center bg-lightBlue md:w-4/5 lg:w-2/3 h-96 text-navy rounded-2xl backdrop-blur-sm'>
            <h1 className='text-3xl font-bold lg:text-4xl'>Quiz Completed</h1>
                <div className='text-2xl flex flex-col gap-5'>
                    <h2 className="">{props.quiz.title}</h2>
                    <h2 className="">Score: {props.score} / {props.quiz.questions.length} </h2>
                </div>
            <div className='flex flex-col gap-5 items-center py-5'>
                <Link to='/quizzes'>
                    <Button>Back to Quizzes</Button>
                </Link>
                <Link to={`/`}>
                    <Button>Back to Home</Button>
                </Link>                
            </div>
        </div>
    );
};

export default CompletedQuiz;