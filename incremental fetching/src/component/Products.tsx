import React, { useEffect, useRef, useState } from 'react'


type ProductProps = {

    url: string
    limit: number
    skip: number
}
type Product = {
    id: number;
    title: string;
    description: string;
    category: string;
    price: number;
    discountPercentage: number;
    rating: number;
    stock: number;
    tags: string[];
    brand: string;
    sku: string;
    weight: number;
    dimensions: {
        width: number;
        height: number;
        depth: number;
    };
    warrantyInformation: string;
    shippingInformation: string;
    availabilityStatus: string;
    reviews: {
        rating: number;
        comment: string;
        date: string;
        reviewerName: string;
        reviewerEmail: string;
    }[];
    returnPolicy: string;
    minimumOrderQuantity: number;
    meta: {
        createdAt: string;
        updatedAt: string;
        barcode: string;
        qrCode: string;
    };
    images: string[];
    thumbnail: string;
};

type ProductResponse = {
    products: Product[]
    total: number,
    skip: number,
    limit: number
}

const Products: React.FC<ProductProps> = ({ url, limit, skip }: ProductProps) => {


    const [data, setData] = useState<ProductResponse | null>(null)
    const [isLoadingProducts, setIsLoadingProducts] = useState<boolean>(true)
    const [skipCounter, setSkipCounter] = useState<number>(0)
    const hasFetched = useRef(false)
    const [disableBtn, setDisableBtn] = useState<boolean>(false)
    useEffect(() => {
        const totalSkipped = skipCounter * 8;
        console.log('skip counter inside useEffect', skipCounter)
        const fetchProducts = async () => {
            try {
                console.log('skip counter', skipCounter)
                const res = await fetch(`${url}?limit=${limit}&skip=${skipCounter * 8}`)
                const data: ProductResponse = await res.json()
                setData(prev => {
                    if (prev == undefined) {
                        return data
                    }
                    else {
                        return {
                            products: [...prev.products, ...data.products],
                            limit: limit,
                            skip: totalSkipped,
                            total: 194,
                        }
                    }
                })
                setIsLoadingProducts(false)
            }
            catch (e) {
                console.log(e)
                setIsLoadingProducts(false)

            }

        }
        if (!hasFetched.current) {
            fetchProducts()
            hasFetched.current = true
        }
    }, [skipCounter, limit, url])
    hasFetched.current = false
    useEffect(() => {
        if (data != undefined && data?.products.length == 56) {
            setDisableBtn(true);
        }
    }, [data]);

    console.log('Currently fetched data', data)

    // window.addEventListener('scroll', function () {
    //     if (window.scrollY > 250) {
    //         console.log("reached")
    //     }
    // })
    return (
        <div className='w-screen'>
            {isLoadingProducts ? 'Product is loading...' : (
                <div className='grid grid-cols-3 grid-rows-2 gap-3 w-[80%] m-auto '>

                    {
                        data?.products.map((ele: Product) => (
                            <div key={ele.id} className='border-2 border-white p-4'>
                                <img src={ele.thumbnail} alt="" height={250} width={250} />
                                <h3 className='text-xl '>{ele.title}</h3>
                            </div>
                        ))

                    }
                </div>
            )}


            {disableBtn ? <div className='text-red-400 text-center text-2xl font-medium my-4'> ******End of the product***** </div> : null}
            <div className='flex justify-center my-4'>
                <button disabled={disableBtn} className='border-2  border-white rounded-md px-8 py-4' onClick={() => setSkipCounter((prev) => prev + 1)}>Load more content</button>

            </div>
        </div>
    )
}

export default Products