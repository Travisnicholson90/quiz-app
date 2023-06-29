import { Link } from "react-router-dom";
import Button from "../../UI/Button/Button";

const LandingPage = () => {
    return (
        <div className="flex flex-col text-xl w-4/5 mx-auto text-navy text-center gap-5 pt-20 py-10 tracking-wide leading-relaxed">
            <h1 className="text-4xl font-bold pb-5 text-navy">TechStack Quiz</h1>
            <h2>Home of Knowledge for Web Developers</h2>
            <p>TechStack Quiz provides web developers with practical short quizzes, designed to teach, improve and consolidate your existing professional knowledge</p>
            <p className="pb-5 font-bold">Quiz. Anywhere. Anytime.</p>
            <Link to='/quizzes'>
            <Button>Get Started</Button>
            </Link>
        </div>
    );
};

export default LandingPage;