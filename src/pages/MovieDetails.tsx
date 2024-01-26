import { useLoaderData } from "react-router-dom"
import {
    VStack, Image, Heading,
    Accordion, AccordionItem, AccordionButton,
    AccordionPanel, Grid, GridItem,
    TableContainer, Table, Tbody,
    Tr, Td, Text,
    UnorderedList, ListItem
} from "@chakra-ui/react"
import Header from "../components/Header"
import getDetailMovie from "../api/getDetailMovie"
import { MovieDetail } from "../types"

export async function loader({ params }: any) {
    const movie: MovieDetail = await getDetailMovie(params.movieId)
    return { movie }
}

const MovieDetails = () => {
    const { movie }: any = useLoaderData()
    return (
        <>
            <Header />
            <VStack align={'center'} p={3}>
                <Grid gap={3}
                gridTemplateRows={'repeat(2, 1fr)'}
                gridTemplateColumns={'repeat(6, 1fr)'}
                w={'90%'}>
                    <GridItem rowSpan={6} colSpan={2}>
                        <Image src={movie.Poster}/>
                    </GridItem>
                    <GridItem colSpan={4} >
                            <Heading>{movie.Title}</Heading>
                            <Text>{movie.Plot}</Text>
                    </GridItem>
                    <GridItem colSpan={4}>
                    <TableContainer>
                        <Table>
                            <Tbody>
                                <Tr><Td>Year</Td><Td>{movie.Released ? movie.Released: movie.Year}</Td></Tr>
                                <Tr><Td>Country</Td><Td>{movie.Country}</Td></Tr>
                                <Tr><Td>Director</Td><Td>{movie.Director}</Td></Tr>
                                <Tr><Td>Language</Td><Td>{movie.Language}</Td></Tr>
                            </Tbody>
                        </Table>
                    </TableContainer>
                    </GridItem>
                </Grid>
                <Accordion>
                    <AccordionItem>
                        <AccordionButton>
                            More Info
                        </AccordionButton>
                        <AccordionPanel>
                            <Table>
                                <Tbody>
                                    <Tr><Td>Year</Td><Td>{movie.Released ? movie.Released: movie.Year}</Td></Tr>
                                    <Tr><Td>Country</Td><Td>{movie.Country}</Td></Tr>
                                    <Tr><Td>Director</Td><Td>{movie.Director}</Td></Tr>
                                    <Tr><Td>Language</Td><Td>{movie.Language}</Td></Tr>
                                    <Tr><Td>Actors</Td><Td>{movie.Actors}</Td></Tr>
                                    <Tr><Td>Awards</Td><Td>{movie.Awards}</Td></Tr>
                                    <Tr><Td>Ratings</Td><Td>
                                        <UnorderedList>
                                            {
                                                movie.Ratings.map((el: any) => {
                                                    return (
                                                        <ListItem>{el.Value} -- {el.Source}</ListItem>
                                                    )
                                                })
                                            }
                                        </UnorderedList>
                                    </Td></Tr>
                                </Tbody>
                            </Table>
                        </AccordionPanel>
                    </AccordionItem>
                </Accordion>
            </VStack>
        </>
    )
}

export default MovieDetails