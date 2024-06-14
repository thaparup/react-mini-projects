import React, { Children, useEffect, useState } from "react";
import { BsArrowLeftCircleFill, BsArrowRightCircleFill } from "react-icons/bs";
type ImageSliderProps = {
    limit: number;
    url: string;
};

type ImageData = {
    id: string;
    author: string;
    width: number;
    height: number;
    url: string;
    download_url: string;
};

const ImageSlider: React.FC<ImageSliderProps> = ({
    limit,
    url,
}: ImageSliderProps) => {
    const [images, setImages] = useState<ImageData[]>([]);
    const [loading, setLoading] = useState<boolean>(false)
    const [errorMsg, setErrorMsg] = useState<string | null>(null);
    const [currentSlideIndex, setCurrentSlideIndex] = useState<number>(0)
    useEffect(() => {
        const fetchImagesFromApi = async () => {
            try {
                setLoading(true)
                const res = await fetch(`${url}${limit}`);
                if (!res.ok) {
                    throw new Error(`HTTP error! Status: ${res.status}`);
                }

                const data = await res.json();
                setImages(data);

                setLoading(false)
            } catch (e) {
                console.log(e);
                if (e instanceof Error) {

                    setErrorMsg(e.message);
                }
                else {
                    setErrorMsg(`An unknown error occured`)
                }
                setLoading(false)
            }
        };
        fetchImagesFromApi()
    }, [])

    if (loading) {
        return <div>
            Data Fetching Please Wait...
        </div>
    }

    const handleNextSlide = () => {

        setCurrentSlideIndex(currentSlideIndex < limit - 1 ? currentSlideIndex + 1 : 0)
    }
    const handlePreviousSlide = () => {

        setCurrentSlideIndex((prev) => currentSlideIndex != 0 ? prev - 1 : 0)
    }



    return (
        <div className="flex justify-center items-center relative w-[800px] h-auto ">
            <BsArrowLeftCircleFill size={32} className="absolute left-6 z-10" onClick={() => handlePreviousSlide()} />
            {images?.map((img, index) => (
                <div key={img.id}>
                    {images.length ? (
                        <img src={img.download_url} alt={img.download_url} key={img.id} className={`${index === currentSlideIndex ? 'w-[800px] h-auto drop-shadow-custom rounded-md' : 'hidden'}`} />
                    ) : null}
                </div>
            ))}

            <BsArrowRightCircleFill size={32} className="absolute right-6 drop-shadow-custom" onClick={() => handleNextSlide()} />

            <div className="absolute bottom-4 flex gap-1">
                {images.map((image, index) => (
                    <li className={`w-3 h-3 rounded-full list-none ${index === currentSlideIndex ? 'bg-gray-400' : 'bg-white'} `} onClick={() => { setCurrentSlideIndex(index) }} >

                    </li>
                ))}
            </div>


        </div>
    );
};

export default ImageSlider;
