
const ChatBotPage = () => {
    return (
        <div className="max-w-md mx-auto my-10 shadow-md rounded-xl bg-[#C7EFF8]">
            <div className='bg-gradient-to-r from-[#3054D9] to-[#50ADF2] p-5 mb-2 rounded-t-xl drop-shadow-lg'>
                <h1 className="text-center text-white text-[32px] font-extrabold pb-1">Hi there! </h1>
            </div>

            <div className="px-6 pt-2 pb-8">
                <div className="w-auto h-9 px-[21px] py-[9px] bg-gray-400 bg-opacity-50 rounded-[20px] shadow border border-stone-600 border-opacity-20 justify-center items-center gap-2.5 inline-flex mb-2">
                    <p className="text-stone-950 text-opacity-70 text-[15px] font-semibold ">Hi, I'm DOC ChatBot</p>
                </div>

                <div className="w-auto h-9 px-[21px] py-[9px] bg-gray-400 bg-opacity-50 rounded-[20px] shadow border border-stone-600 border-opacity-20 justify-center items-center gap-2.5 inline-flex mb-2">
                    <p className="text-stone-950 text-opacity-70 text-[15px] font-semibold ">How can I help you today?</p>
                </div>

                <div className="w-auto h-[68px] px-[21px] py-[9px] bg-gray-400 bg-opacity-50 rounded-[20px] shadow border border-stone-600 border-opacity-20 justify-center items-center gap-2.5 inline-flex mb-4">
                    <p className="text-stone-950 text-opacity-70 text-[15px] font-semibold leading-[25px]">Please choose one of the topics. <br />What would you like to explore?</p>
                </div>

                <div className="w-auto h-auto gap-[18px] flex flex-wrap px-2">
                    <div className="outline-dashed outline-2 outline-offset-0 rounded-lg bg-[#9ACAF6] opacity-58 text-blue-600 text-opacity-90 text-md font-semibold font-['Inter'] leading-[25px] px-4 py-1 mb-2 mx-1">issue 01</div>
                    <div  className="outline-dashed outline-2 outline-offset-0 rounded-lg bg-[#9ACAF6] opacity-58 text-blue-600 text-opacity-90 text-md font-semibold font-['Inter'] leading-[25px] px-4 py-1 mb-2 mx-1">issue 02</div>
                    <div  className="outline-dashed outline-2 outline-offset-0 rounded-lg bg-[#9ACAF6] opacity-58 text-blue-600 text-opacity-90 text-md font-semibold font-['Inter'] leading-[25px] px-4 py-1 mb-2 mx-1">issue 03</div>
                    <div  className="outline-dashed outline-2 outline-offset-0 rounded-lg bg-[#9ACAF6] opacity-58 text-blue-600 text-opacity-90 text-md font-semibold font-['Inter'] leading-[25px] px-4 py-1 mb-2 mx-1">issue 04</div>
                    <div  className="outline-dashed outline-2 outline-offset-0 rounded-lg bg-[#9ACAF6] opacity-58 text-blue-600 text-opacity-90 text-md font-semibold font-['Inter'] leading-[25px] px-4 py-1 mb-2 mx-1">issue 05</div>
                </div>

                <div>
                    
                </div>

                <div>
                    <p>For complex issues,<br />please use our Support Form. <br /> We'll respond promptly.</p>
                </div>

                <div>
                    <p>support form</p>
                </div>
            </div>
            
        </div>
    );
};

export default ChatBotPage;