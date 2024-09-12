import { Grid, GridItem } from "@chakra-ui/react"
import NavBar from "./components/NavBar"
import HeroView from "./components/HeroView"
import ShowCaseView from "./components/ShowCaseView"
import BooksView from "./components/BooksView"


function App() {

    return (
        <>
            <Grid templateAreas={`'nav' 'main '`}>
                <GridItem area={`nav`}>
                    <NavBar />
                </GridItem>
                <GridItem area={`main`}>
                    <HeroView />
                    <ShowCaseView />
                    <BooksView />
                </GridItem>
            </Grid>
        </>
    )
}

export default App
