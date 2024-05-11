import { createContext, Dispatch, SetStateAction } from "react";


type ThemeContextType = {
    darkTheme: boolean,
    setDarkTheme: Dispatch<SetStateAction<boolean>>;
}
const ThemeContext = createContext<ThemeContextType>({
    darkTheme:true,
    setDarkTheme: () => null,

});


export default ThemeContext;