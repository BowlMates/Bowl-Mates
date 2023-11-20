import {restaurant} from "../data-types/restaurants";
import {useEffect, useState} from "react";

// Probably bad but i don't know how else to do this
const apiKey = "AIzaSyBQ_hQeijI05VaIoVXCStdM9ff-yc9T3jA"

interface useGetPhotosResult {
    photos: string[];
    photosLoading: boolean;
    photosError: Error | null;
}

const useGetPhotos = (restaurants: restaurant[]): useGetPhotosResult => {
    const [photos, setPhotos] = useState<string[]>([])
    const [photosLoading, setPhotosLoading] = useState(true);
    const [photosError, setPhotosError] = useState<Error | null>(null);

    useEffect(() => {
        const fetchPhotos = async () => {
            try{
                const sequentialFetch = async () => {
                    const tempPhotos: string[] = [];

                    for(const restaurant of restaurants){
                        const response = await fetch(
                            `https://places.googleapis.com/v1/${restaurant.reference}/media?maxHeightPx=650&maxWidthPx=650&key=${apiKey}`
                        );
                        tempPhotos.push(response.url);
                    }

                    setPhotos(tempPhotos);
                    setPhotosLoading(false);
                };

                sequentialFetch();
            } catch(error: any){
                setPhotosError(error as Error);
                setPhotosLoading(false)
            }
        }

        fetchPhotos()
    }, [restaurants]);

    return {photos, photosLoading, photosError};
};
export default useGetPhotos;