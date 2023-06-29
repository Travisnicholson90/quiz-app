import { useForm } from 'react-hook-form';
import Button from '../UI/Button/Button';
import { useAuthContext } from '../hooks/useAuthContext';

const Signup = () => {
    const form = useForm();
    const { register, handleSubmit, formState } = form;
    const { errors } = formState;
    const baseUrl = `https://quiz-app-api-c66z.onrender.com`;

    // get the dispatch function from the auth context
    const { dispatch } = useAuthContext();

    const formSubmit = async (data) => {
        console.log(data);
      
        try {
          const response = await fetch(`${baseUrl}/api/signup`, {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify(data),
          });

          const result = await response.json();
            console.log(result);
      
          if (response.ok) {
            console.log('Success');
            //save the user to local storage
            localStorage.setItem('user', JSON.stringify(result));
            // update the auth context
            dispatch({ type: 'LOGIN', payload: result });
            window.location.href = '/';
          } else {
            console.log('Unable to Sign Up');
          }
        } catch (error) {
          console.log('Error:', error);
        }
      };


    return (
        <div className='py-10 w-full '>
            <form onSubmit={handleSubmit(formSubmit)} className='flex flex-col mx-auto text-navy bg-lightBlue w-4/5 rounded-xl px-3 py-8 gap-8'>
            <h1 className='text-4xl font-bold py-3'>Sign Up</h1>
            <div className='flex flex-col text-2xl gap-5'>
                <label className='font-bold' htmlFor="email">Email</label>
                <input className='rounded-xl ps-3 outline-none text-lg lg:text-xl' type='email' name='email' id='email' 
                {...register('email', {
                    required: 'Email is required',
                    pattern: {
                        value: /\S+@\S+\.\S+/,
                        message: 'Entered value does not match email format'
                    }})}
                />
                {errors.email && <p className='text-purple-500 text-lg'>{errors.email.message}</p>} 
            </div>

            <div className='flex flex-col text-2xl gap-5'>
                <label className='font-bold' htmlFor="email">Password</label>
                <input className='rounded-xl ps-3 outline-none text-lg lg:text-xl' type='password' name='password' id='password' 
                {...register('password', {
                    required: 'Password is required',
                    minLength: {
                        value: 8,
                        message: 'Password must be at least 8 characters'
                    }})}
                    />
                    {errors.password && <p className='text-purple-500 text-lg'>{errors.password.message}</p>} 
            </div>
            <Button>Sign Up</Button>
            </form>
        </div>
    )
};

export default Signup;