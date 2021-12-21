import { SearchIcon } from '@heroicons/react/solid'

export default function HomeSearchBar() {
  return (

    <form className="flex self-start w-full h-full text-lg text-black"
    method="post" action="/summoner/overview">
      <div className='relative w-full'>
        <input
          type="text"
          className="relative h-14 w-72 md:w-96 lg:w-112 xl:w-144 pr-8 pl-5 rounded-md opacity-50 z-0 focus:opacity-100 focus:shadow focus:outline-none"
          placeholder="Search summoner">    
        </input>
        <button className="absolute top-3.5 right-1.5 w-8">
          <SearchIcon className='text-gray-500'/>
        </button>
      </div>
    </form>
    
  );
}
