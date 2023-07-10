import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Button from '../../UI/Quiz/QuizButton';
import Loader from '../../Components/Spinner/Spinner';

const QuizPage = () => {
  const [quiz, setQuiz] = useState(null);
  const baseUrl = `https://quiz-app-api-c66z.onrender.com`;

  const getQuiz = async () => {
    try {
      const response = await fetch(`${baseUrl}/api/quiz`, {
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

  //set loading state
  if (!quiz) {
    return (
      <div className='flex items-center justify-center text-3xl lg:text-5xl text-purple-500 pt-20 gap-4'>
        <Loader />
        <h2>Loading...</h2>
      </div>
      );
  }


  return (
<div className='flex flex-col px-2 py-10'>
    <h1 className='text-4xl font-bold py-3 pb-10'>Quiz Page</h1>
    <div className='grid grid-cols-1 w-full h-96 gap-5'>
        {quiz && quiz.map((quiz) => {
        return (
            <div className='bg-lightBlue rounded-2xl backdrop-blur-md py-5 px-2' key={quiz.id}>
                <div className='grid grid-cols-2 items-center'>
                <h2 className='text-2xl font-bold '>{quiz.title}</h2>
                <div className='ml-auto'>
                    <Link to={`/quiz/${quiz._id}`}>
                    <Button>Start Quiz</Button>
                    </Link>
                </div>
                </div>
            </div>
            )
        })}
    </div>
</div>
  );
};

export default QuizPage;
