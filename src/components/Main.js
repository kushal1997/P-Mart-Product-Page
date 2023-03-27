import ProductImg from "../assets/product.jpg"
export const Main = () => {
  return (
    <main>
        <section className="text-center my-20">
            <h1 className="max-sm:text-3xl text-4xl">Lorem, ipsum dolor.</h1>
            <p className="max-sm:text-lg text-xl mt-2 mb-7">Lorem ipsum dolor sit amet consectetur adipisicing.</p>
            <button type="button" class="text-white bg-gradient-to-r from-cyan-500 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2">Know More</button>
            <button className="text-lg border p-3 rounded-lg bg-logo-700 text-slate-50 hover:bg-logo-800">Know More</button>
        </section>
        <section >
            <div className="flex justify-center flex-wrap">
                <div className=" hover:cursor-pointer max-w-xs border rounded-md p-3 m-4">
                    <img className="rounded " src={ProductImg} alt="Product Image" />
                    <h1 className="text-2xl my-5 ">Bata Orginal</h1>
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Reiciendis, ut.</p>
                </div>
                <div className=" hover:cursor-pointer max-w-xs border rounded-md p-3 m-4">
                    <img className="rounded " src={ProductImg} alt="Product Image" />
                    <h1 className="text-2xl my-5 ">Bata Orginal</h1>
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Reiciendis, ut.</p>
                </div>
                <div className=" hover:cursor-pointer max-w-xs border rounded-md p-3 m-4">
                    <img className="rounded " src={ProductImg} alt="Product Image" />
                    <h1 className="text-2xl my-5 ">Bata Orginal</h1>
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Reiciendis, ut.</p>
                </div>
                <div className=" hover:cursor-pointer max-w-xs border rounded-md p-3 m-4">
                    <img className="rounded " src={ProductImg} alt="Product Image" />
                    <h1 className="text-2xl my-5 ">Bata Orginal</h1>
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Reiciendis, ut.</p>
                </div>
                <div className=" hover:cursor-pointer max-w-xs border rounded-md p-3 m-4">
                    <img className="rounded " src={ProductImg} alt="Product Image" />
                    <h1 className="text-2xl my-5 ">Bata Orginal</h1>
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Reiciendis, ut.</p>
                </div>
                <div className=" hover:cursor-pointer max-w-xs border rounded-md p-3 m-4">
                    <img className="rounded " src={ProductImg} alt="Product Image" />
                    <h1 className="text-2xl my-5 ">Bata Orginal</h1>
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Reiciendis, ut.</p>
                </div>
            </div>
        </section>
    </main>
  )
}
