import { useContext } from "react"
import { ThemeContext } from "../../contexts/theme-contex"


const Button = (props) => {

    const { theme } = useContext(ThemeContext)

    const handleButtonClick = (event) => {
        event.preventDefault()
        props.addPokemons()

    }

    return(
      <div style={{backgroundColor: theme.background}}>
        <button onClick={handleButtonClick} {...props} style={{color: theme.color, backgroundColor: theme.background}} />
      </div>
    )
}

export { Button }