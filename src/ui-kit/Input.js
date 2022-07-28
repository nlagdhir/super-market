import clsx from 'clsx'
import './Input.css';

export default function Input(props) {
    const {className, type, ...rest} = props;
    const classes = clsx({
        'input' : true,
    },className);

    return <>
        <input type={type ?? 'text'} className={classes} {...rest}  />
    </>
}