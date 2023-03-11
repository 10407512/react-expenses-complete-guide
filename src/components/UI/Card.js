import './Card.css'

//it is the same, this just called an arrow function, 
//if their is only one statement (no {}) the 'return' keyword can also be removed 
const Card = (props) => {
// function Card(props) {
    const classes = 'card ' + props.className
    return <div className={classes}>{props.children}</div>;
}

export default Card