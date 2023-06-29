import { useState, useEffect, useCallback } from 'react';
import { useParams } from 'react-router-dom';
import Menu from '../../Components/Dashboard/Menu';
import Account from '../../Components/Dashboard/Account';
import HighScores from '../../Components/Dashboard/Highscores';

const Dashboard = () => {
const { id } = useParams();
const [user, setUser] = useState('');
const [selectedMenuItem, setSelectedMenuItem] = useState('account');
const [quizIDs, setQuizIDs] = useState([]);
const baseUrl = `https://quiz-app-api-c66z.onrender.com`;

const getUser = async () => {
    try {
        const response = await fetch(`${baseUrl}/api/user/${id}`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            },
        });
       
        const result = await response.json();
        setUser(result);
        console.log(user);
        } catch (error) {
            console.log('Error:', error);
        }
};

const getUserQuizzes = async () => {
  try {
    const response = await fetch(`${baseUrl}/api/user/${id}/quizzes`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    });

    const result = await response.json();
    setQuizIDs(result);
    console.log(quizIDs)
  } catch (error) {
    console.log('Error:', error);
  }
};



useEffect(() => {
    getUser();
    getUserQuizzes();
}, []);

const handleMenuItemClick = useCallback((item) => {
    setSelectedMenuItem(item);
  }, []);

  useEffect(() => {
    console.log('dashboard', selectedMenuItem);
  }, [selectedMenuItem]);


  let content = null;

  switch (selectedMenuItem) {
    case 'account':
      content = <Account user={user} email={user.email} />;
      break;
    case 'scores':
      content = <HighScores user={user} quizIDs={quizIDs} />;
      break;
    default:
      content = null;
  }


    return (
    <div className='flex flex-col w-full'>
        <div className='flex w-full py-5 flex-col px-2 pt-5 items-center bg-lightBlue rounded-2xl backdrop-blur-md text-navy'>
                <div className='flex items-start justify-between w-full px-5 lg:px-10'>
                    <h1 className='flex text-3xl lg:text-4xl font-bold py-3'>Dashboard</h1>
                  <Menu handleMenuItemClick={handleMenuItemClick}/>
            </div>
        </div>
        <div className='flex w-full md:w-4/5 lg:w-2/3 mx-auto py-5 flex-col px-5 my-10 items-start  bg-lightBlue rounded-2xl backdrop-blur-md text-navy'>
            {content}

        </div> 
    </div>
    )
};

export default Dashboard;