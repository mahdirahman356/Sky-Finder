import Logo from "@/assets/logo/logo";

const Navbar = () => {
    return (
        <div className="flex gap-1 items-center my-4">
         <Logo />
         <h2 className="text-2xl font-semibold">SkyFinder</h2>
       </div>
    );
};

export default Navbar;