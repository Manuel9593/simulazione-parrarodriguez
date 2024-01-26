import { Card, CardBody, CardHeader, Heading, Image, Text, VStack } from "@chakra-ui/react";
import { Movie } from "../types";

type MovieCardProps = {
    movie: Movie;
};

const MovieCard = ({ movie }: MovieCardProps) => {
    return (
        <Card>
        <Image src={movie.Poster} />
        <VStack>
            <CardHeader><Heading as={'h2'} size={'md'}>{movie.Title}</Heading></CardHeader>
            <CardBody>
                <Text>{movie.Year} - {movie.Type}</Text>
            </CardBody>
        </VStack>
        </Card>
    );
};

export default MovieCard