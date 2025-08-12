import { TbSearch } from "react-icons/tb";
import HeroSectionImage from "../../assets/images/Hero-section-image.png"
import { Button } from "../ui/button";
const HeroSection = () => {
    return (
        <div>
            <header className="mb-16">
                <div className="container px-6 lg:px-0 mx-auto">
                    <div className="items-center lg:flex">
                        <div className="w-full lg:w-1/2">
                            <div className="lg:max-w-lg">
                                <h1 className="text-3xl font-semibold lg:text-4xl">Fly Smarter, Travel Further <br /> Your Journey Starts Here</h1>

                                <p className="mt-3 text-gray-600">Discover the best flights at unbeatable prices, tailored just for you. With our easy search, fast booking, and reliable service, your dream destination is just a click away. Wherever you go, we’ll get you there in comfort and style</p>

                                <Button type="submit" form="search-flight" className="h-14 mt-3">
                                    <TbSearch />
                                    Explore
                                </Button>                            </div>
                        </div>

                        <div className="flex items-center justify-center w-full mt-6 lg:mt-0 lg:w-1/2">
                            <img className="w-full h-full lg:max-w-3xl" src={HeroSectionImage} alt="Catalogue-pana.svg" />
                        </div>
                    </div>
                </div>
            </header>
        </div>
    );
};

export default HeroSection;