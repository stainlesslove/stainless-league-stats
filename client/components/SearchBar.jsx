export default function SearchBar(){
    return (
        <>
            <input type="text" className="h-14 w-96 pr-8 pl-5 rounded-md opacity-50 z-0 focus:opacity-100 focus:shadow focus:outline-none" placeholder="Search summoner"></input>
            <div className="absolute top-4 right-3"> <i className="fa fa-search text-gray-400 z-20 hover:text-gray-500"></i></div>
        </>
    )
}