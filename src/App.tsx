import { Grid, GridItem } from "@chakra-ui/react"
import HeroView from "./components/HeroView"
import NavBar from "./components/NavBar"
import ShowCaseView from "./components/ShowCaseView"


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
                </GridItem>
            </Grid>
        </>
    )
}

export default App
