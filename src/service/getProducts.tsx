import { useQuery } from "@tanstack/react-query"
import { instance } from "../hooks/instance"

const getProducts = (api:string, key:string) => {
    const {data = [], isLoading, isError} = useQuery({
        queryKey: [key],
        queryFn: () => instance().get(api).then(res => res.data)
    })
    return {data, isLoading, isError}
}

export default getProducts