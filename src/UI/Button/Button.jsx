
const Button = (props) => {
    return <button 
    role="button"
    type="submit" 
    className="bg-purple-500 w-3/5 mx-auto hover:bg-purple-700 hover:cursor-pointer text-white font-bold py-2 px-4 rounded-3xl tracking-widest"
    >
        {props.children}
    </button>;
    }

export default Button;