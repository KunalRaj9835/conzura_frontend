import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-[#0e355d] text-gray-200 pt-16 pb-8 px-6 text-sm">
      <div className="max-w-7xl mx-auto">

        <hr className="border-gray-600 mb-8" />

        {/* Footer main grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">

          {/* Logo */}
          <div>
            <img 
              src="/clogo.png"
              alt="conzura"
              className="w-40 h-auto"
            />
          </div>

          {/* Office */}
          <div>
            <h3 className="font-semibold text-base mb-2">Hyderabad , India</h3>
            <p className="leading-relaxed">
              767, 2nd floor, Tngos colony,
              Gachibowli, Hyderabad
              <br />
              Email: info@conzuragroups.com
              <br />
              Ph : +91 91779 51075
            </p>
          </div>

        </div>

        {/* Disclaimer */}
        <div className="mt-12 text-xs text-gray-300 leading-relaxed">
          <span className="font-semibold">Disclaimer:</span> conzura does not charge
          any money from job seekers. Report suspicious activities to info@conzuragroups.com.
        </div>


<div className="flex flex-col sm:flex-row gap-2 sm:gap-8 lg:gap-22 justify-center items-center mt-6">
  <p className="text-xs">
    © 2025 Developed by{" "}
    <Link
      href="https://www.conzuragroups.com/"
      className="underline hover:text-red-600 transition"
      target="_blank"
      rel="noopener noreferrer"
    >
      Conzura Soft Solutions
    </Link>
  </p>

  <p className="text-xs">
    © {new Date().getFullYear()} conzura Analytics Space. All Rights Reserved.
  </p>
</div>




      </div>
    </footer>
  );
}
