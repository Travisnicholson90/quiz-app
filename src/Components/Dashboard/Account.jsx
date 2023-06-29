import { useState } from 'react';
import { useForm } from 'react-hook-form';
import edit from '../../assets/images/edit.svg';
import Button from '../../UI/Quiz/QuizButton';
import classes from './styles.module.css';

const Account = (props) => {
const [showForm, setShowForm] = useState(false);
const form = useForm();
const { register, handleSubmit, formState } = form;
const { errors } = formState;
const baseUrl = `https://quiz-app-api-c66z.onrender.com`;

const showFormHandler = () => {
    setShowForm(prev => !prev);
}

    return (
        <div className='flex flex-col w-full'>
            <h1 className="text-2xl lg:text-3xl font-bold my-5">Account</h1>
            <div className="flex items-center w-full text-navy">
            <p className='text-lg'>{props.email} </p>
            <img onClick={showFormHandler} className='w-5 ml-auto hover:cursor-pointer' src={edit} alt="edit-icon" />
            </div>
            {showForm && (
            <div className={`${classes['form-container']} ${showForm ? `${classes.show}` : `${classes.hide}`}`}>
            <form onSubmit={handleSubmit} className='flex flex-col mx-auto gap-8 my-10'>
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
            <Button>Modify</Button>
            </form>
            </div>
            )}
        </div>
    );
};

export default Account;