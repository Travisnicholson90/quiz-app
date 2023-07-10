import classes from './Spinner.module.css';

const Loader = () => {
    return (
    <div className={classes['lds-ring']}>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
    </div>
    )
};

export default Loader;