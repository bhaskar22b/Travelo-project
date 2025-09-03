
const SearchBox = (props) => {
    return (
        <>
            <div className="container">

                <div className="rom-iteam">
                    <h2>Where you want to go?</h2>
                    <input type="text" placeholder="Where to go?"></input>
                    <select>
                        <option>Date</option>
                        <option>Today</option>
                        <option>Tomorrow</option>
                        <option>This Week</option>
                    </select>
                    <select>
                        <option>Travel type</option>
                        <option>Some option</option>
                        <option>Another option</option>
                    </select>
                    <button>Search</button>
                </div>

            </div>
        </>
    )
}

export default SearchBox