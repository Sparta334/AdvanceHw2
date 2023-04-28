import { useQuery } from "@tanstack/react-query";
import { getDB} from "../firebase/firebaseApi";


export const useImage = () =>{

    const { data , isLoading} = useQuery([]   ,  getDB);

    return { data ,  isLoading}


}