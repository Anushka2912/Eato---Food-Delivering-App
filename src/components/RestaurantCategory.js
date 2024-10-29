
const RestaurantCategory = ({data}) => {
    return (
        <div className="w-9/12 m-auto categoryContainer">
            <div className="bg-slate-200 shadow-lg p-4 my-4 accordionHeader">
                <p className="font-bold">{data.title} ({data.itemCards.length})</p>
            </div>
            <div className="accordionBody">
                <p>body</p>
            </div>
        </div>
    )
}

export default RestaurantCategory;