const HighScores = (props) => {
    if (!props.user || !props.quizIDs) {
      // Data is not yet available, show loading or placeholder content
      return (
        <div className='flex items-center justify-center text-3xl lg:text-5xl text-purple-500 pt-20'>
          <h2>Loading...</h2>
        </div>
      )
    }
  
    return (
        <div className="w-full text-navy">
            <div>
                <h1 className="text-2xl lg:text-3xl font-bold">High Scores</h1>
                <p className='text-xl py-3'>{props.user.email}</p>
            </div>
          <div>
              <h2 className="text-navy text-2xl lg:text-3xl mx-auto font-bold py-3">Quizzes</h2>
            {props.quizIDs.quizzes.map((quiz) => (
                <div className="flex p-2 lg:w-2/3 mx-auto pt-5 even:bg-slate-50 rounded-md" key={quiz._id}>
                    <div className="grid w-full grid-cols-2 gap-10 items-center">
                        <p className="font-bold">{quiz.quiz.title}</p>
                        <p className="items-start ml-auto">Score: {quiz.score}</p>
                    </div>
              </div>
            ))}
 
          </div>
        </div>
      );
    };
        
  
  export default HighScores;
  