import classes from './Footer.module.css'

export default function Footer ({children}) {
    return (
        <footer className={classes.footer}>
            <p>&copy; 2024 Pet Breed Explorer. All rights reserved.</p>
        </footer>
    )
}