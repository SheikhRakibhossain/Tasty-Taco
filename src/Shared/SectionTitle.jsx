
const SectionTitle = ({title, subtitle}) => {
    return (
        <>
            <div className="pt-20 pb-10 bg-zinc-200 flex justify-center items-center text-center">
                <div>
                    
               <p>----------<span className="text-slate-800 text-4xl font-bold uppercase "> {title} </span>----------</p> 
               <div className="divider "></div> 
                <h2 className="text-xl font-semibold italic">{subtitle}</h2>
                <div className="divider "></div> 
                </div>

            </div>
        </>
    );
};

export default SectionTitle;