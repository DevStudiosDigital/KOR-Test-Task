export default function LoginAlert() {
    return (
    <div className="min-h-1/3 bg-[#152e5e] shadow-xl">
        <div className="flex-row items-center justify-center px-6 pb-5">
                <div className="flex justify-end py-4">
                    <button className="text-gray-400 hover:text-white ">
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    </button>
                </div>
                <div className="flex flex-col space-y-4 mb-4 pr-8">
                    <h1 className="text-sm font-bold text-white">
                        Create your first song on ENKOR
                    </h1>
                    <p className="text-gray-400 text-xs mb-6">
                    Explore our interactive music platform and join a community of music lovers, artists and fans.
                    </p>
                </div>
                
               
                <div className="space-x-3 flex">
                    <button className="w-full py-2.5 px-4 rounded-sm text-xs text-white border border-secondary bg-[#2a5cbc1a]">
                        Sign Up
                    </button>
                    <button className="w-full py-2.5 px-4 rounded-md text-xs bg-secondary text-white ">
                        Log in
                    </button>
                </div>
        </div>
    </div>
    )
}