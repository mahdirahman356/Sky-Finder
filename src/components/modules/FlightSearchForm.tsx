import { Controller, useForm, type FieldValues, type SubmitHandler } from "react-hook-form";
import BannerImage from "../../assets/images/header-image.png"
import { Form, FormControl, FormItem, FormMessage } from "../ui/form";
import { Button } from "../ui/button";
import FromAndTo from "../ui/FromAndTo";
import { TbSearch } from "react-icons/tb";
import Depart from "../ui/Depart";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import Passengers from "../ui/Passengers";
import getAccessToken from "@/utils/getAccessToken";
import getIATACode from "@/utils/getIATACode";
import type { ISearchData } from "@/types";
import { TfiHandPointDown } from "react-icons/tfi";
import LoadingButton from "../ui/LoadingButton";

type FlightSearchFormProps = {
    loading: boolean;
    onSearch: (formData: ISearchData) => Promise<void>;
};

const FlightSearchForm = ({ loading, onSearch }: FlightSearchFormProps) => {

    const form = useForm()

    const onSubmit: SubmitHandler<FieldValues> = async (data) => {
        const token = await getAccessToken();
        console.log(token)
        const { from, to, date, passengers } = data
        const originCode = await getIATACode(from, token)
        const destinationCode = await getIATACode(to, token)

        if (!originCode || !destinationCode) {
            alert("Country, city or airport not found. Please try a different name.");
            return;
        }

        const { year, month, day } = date
        const formattedDate = `${year}-${String(month).padStart(2, "0")}-${String(day).padStart(2, "0")}`;

        const searchData = {
            from: originCode,
            to: destinationCode,
            date: formattedDate,
            passengers: passengers ? passengers : 1
        }

        onSearch(searchData)
    }


    return (
        <div>
            <section>
                <div className="pt-3 text-center">
                    <div className="max-w-lg mx-auto">
                        <h1 className="text-3xl font-semibold lg:text-4xl">Find the perfect flights tailored to your travel needs</h1>
                        <p className="mt-6 text-gray-500">
                            Easily compare hundreds of flights in real-time from airlines worldwide. Get the best prices, convenient schedules, and flexible options tailored to your travel plans. Start your journey with confidence today!
                        </p>
                        <p className="mt-3 text-sm text-gray-500 flex justify-center items-center gap-2">Find flights in here <TfiHandPointDown /></p>
                    </div>

                    <div
                        className="flex justify-center mt-10">
                        <div
                            style={{ backgroundImage: `url(${BannerImage})` }}
                            className="relative  flex justify-center items-center bg-cover bg-center w-full h-80 rounded-xl">
                            <div className="absolute inset-0 bg-black/30 rounded-xl"></div>
                            <Form {...form}>
                                <form id="search-flight" onSubmit={form.handleSubmit(onSubmit)} className="relative z-10 ">
                                    <div className="w-fit flex flex-col md:flex-row justify-center gap-3 md:gap-0 shadow-2xl">
                                        {/* From And To field */}
                                        <FormItem className="bg-white rounded-l-lg rounded-r-lg md:rounded-r-none">
                                            <FormControl>
                                                <FromAndTo control={form.control} />
                                            </FormControl>
                                            <FormMessage />
                                        </FormItem>
                                        <div className="flex">
                                            {/* Date Field  */}
                                            <FormItem>
                                                <FormControl>
                                                    <Controller
                                                        name="date"
                                                        control={form.control}
                                                        render={({ field }) => (
                                                            <Depart {...field} />
                                                        )}
                                                    />
                                                </FormControl>
                                                <FormMessage />
                                            </FormItem>
                                            {/* Passengers Field */}
                                            <DropdownMenu >
                                                <DropdownMenuTrigger className="h-14 w-[140px] bg-white rounded-r-lg rounded-l-none lg:border-r-2 border-r-gray-300 text-gray-400 text-sm">Passengers</DropdownMenuTrigger>
                                                <DropdownMenuContent>
                                                    <FormItem>
                                                        <FormControl>
                                                            <Controller
                                                                name="passengers"
                                                                control={form.control}
                                                                render={({ field }) => (
                                                                    <Passengers {...field} />
                                                                )}
                                                            />
                                                        </FormControl>
                                                        <FormMessage />
                                                    </FormItem>
                                                </DropdownMenuContent>
                                            </DropdownMenu>
                                        </div>
                                    </div>
                                    {loading 
                                    ? (<LoadingButton />)
                                    : ( <Button type="submit" className="h-14 mt-3">
                                        <TbSearch />
                                        Explore
                                    </Button>) }
                                   
                                </form>
                            </Form>
                        </div>
                        <div>

                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default FlightSearchForm;