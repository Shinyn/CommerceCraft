// Produkt fliken på dashboarden

import {DataTable} from "../../../../components/data-table"
import { columns } from "../../../../components/route-components/dasboard/products/columns"
import { Product } from "../../../../components/route-components/dasboard/products/products"
import axios from 'axios'

async function getData(): Promise<Product[]> {

    //Contains fetch to GET alla products from api/products



function getProducts(e:React.MouseEvent<HTMLButtonElement, MouseEvent>) {
    e.preventDefault()
    console.log('button clicked')
    axios.get('/api/products', {})
        .then(function (response) {
            console.log(response);
        })
        .catch(function (error) {
            console.log(error);
        });
}
    // Fetch data from your API here.
    return [
    //   {
    //     id: "728ed52f",
    //     title: "Milk",
    //     description: "bla bla bla",
    //     price: 100,
    //   },
      // ...
    ]
  }

export default async function Page() {

const data = await getData()

    return (
        <div className={"m-9"} >
            <div className={"flex flex-row justify-between"}>
                <h1 className=" text-5xl ">Products</h1>
                <button className="bg-blue-400 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded">
                    Add Product
                </button>
            </div>
            <div className="container mx-auto py-10">
                <DataTable columns={columns} data={data} />
            </div>
        </div>
    )
}