export default function CreateListing() {
  return (
    <main className="p-3 max-w-4xl mx-auto">
        <h1 className="text-3xl font-semibold text-center my-7">Create Listing</h1>
        <form className="flex flex-col sm:flex-row gap-4">
            <div className="flex flex-col gap-4 flex-1">
                <input type="text" placeholder="Name" className="border p-3 rounded-lg" id="name" maxLength={62} minLength={10} required></input>
                <textarea type="text" placeholder="Description" className="border p-3 rounded-lg" id="description" required></textarea>
                <input type="text" placeholder="Address" className="border p-3 rounded-lg" id="address" required></input>
                <div className="flex gap-6 flex-wrap">
                    <div className="flex gap-2">
                        <input type="checkbox" id="sale" className="w-5" />
                        <span>Sell</span>
                    </div>
                    <div className="flex gap-2">
                        <input type="checkbox" id="rent" className="w-5" />
                        <span>Rent</span>
                    </div>
                    <div className="flex gap-2">
                        <input type="checkbox" id="parking-spot" className="w-5" />
                        <span>Paking spot</span>
                    </div>
                    <div className="flex gap-2">
                        <input type="checkbox" id="furnished" className="w-5" />
                        <span>Furnished</span>
                    </div>
                    <div className="flex gap-2">
                        <input type="checkbox" id="offer" className="w-5" />
                        <span>Offer</span>
                    </div>
                </div>
                <div className="flex flex-wrap gap-6">
                    <div className="flex items-center gap-2">
                        <input type="number" id="bedrooms" min='1' max='10' className="p-3 border border-gray-300 rounded-lg" required />
                        <p>Beds</p>
                    </div>
                    <div className="flex items-center gap-2">
                        <input type="number" id="bathrooms" min='1' max='10' className="p-3 border border-gray-300 rounded-lg" required />
                        <p>Baths</p>
                    </div>
                    <div className="flex items-center gap-2">
                        <input type="number" id="regular-price" min='1' max='10' className="p-3 border border-gray-300 rounded-lg" required />
                        <div className="flex flex-col items-center">
                            <p>Regular price</p>
                            <span className="text-sm"> ($ per month) </span>
                        </div>
                    </div>
                    <div className="flex items-center gap-2">
                        <input type="number" id="discount-price" min='1' max='10' className="p-3 border border-gray-300 rounded-lg" required />
                        <div className="flex flex-col items-center">
                            <p>Discounted price</p>
                            <span className="text-sm"> ($ per month) </span>
                        </div>
                    </div>
                </div>
            </div>
            <div className="flex flex-col flex-1">
                <p className="font-semibold">Images:</p>
                <span className="font-normal text-gray-600 ml-2">The first image will be the cover (max 6) </span>
                <div className="flex gap-4">
                    <input className="p-3 border border-gray-300 rounded w-full" type="file" accept="image/*" multiple id="images" required />
                    <button className="p-3 border-green-700 text-green-700  border uppercase hover:shadow-lg disabled:opacity-80">upload</button>
                </div>
                <button className="p-3 mt-4 bg-slate-700 text-white uppercase rounded-lg hover:opacity-95 disabled:opacity-80">Create Listing</button>
            </div>
        </form>
    </main>
  )
}
