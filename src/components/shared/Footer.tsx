import Logo from "@/assets/logo/logo";

const Footer = () => {
    return (
        <footer className="bg-gray-50 dark:bg-gray-900">
  <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 lg:px-8">
    <div className="sm:flex sm:items-center sm:justify-between">
      <div className="flex justify-center sm:justify-start">
       <div className="flex gap-1 items-center">
         <Logo />
         <h2 className="text-2xl font-semibold">SkyFinder</h2>
       </div>
      </div>
      <p className="mt-4 text-center text-sm text-gray-500 lg:mt-0 lg:text-right dark:text-gray-400">
        Copyright &copy; 2022. All rights reserved.
      </p>
    </div>
  </div>
</footer>
    );
};

export default Footer;