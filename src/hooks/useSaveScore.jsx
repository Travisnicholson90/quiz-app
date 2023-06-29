import { useParams } from 'react-router-dom';

export const useSaveScore = (props) => {
const { id } = useParams();

const baseUrl = `https://quiz-app-api-c66z.onrender.com`;

// store user id in a variable so i can use it in the fetch request
const score = props.score;
// get the user id from local storage
const user = JSON.parse(localStorage.getItem('user'));
const userId = user.user;
console.log(userId);
const quizId = id;

 const submitScore = async () => {
    try {
        const response = await fetch(`${baseUrl}/api/quiz/score/${quizId}/${userId}`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ score: score }),
        });
        const result = await response.json();
        console.log(result);

        if(response.ok) {
            console.log('Score submitted successfully');
        }

    } catch (error) {
        console.log('Error:', error);

    }   
};

    return { submitScore };
};