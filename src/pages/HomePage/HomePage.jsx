import Filters from "../../components/Filter/Filters"
import Banner from "./../../components/Banner/Banner"
import AllProduct from "./../../components/RenderProducts/AllProduct"

const HomePage = () => {
    return (
        <>
            <Banner />
            <Filters />
            <AllProduct />
        </>
    )
}

export default HomePage
