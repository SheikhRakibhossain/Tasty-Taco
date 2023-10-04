
const SectionTitle = ({title, subtitle}) => {
    return (
        <>
            <div className="text-center py-4 bg-zinc-200">
               <p>----------<span className="text-slate-800 text-4xl font-bold uppercase "> {title} </span>----------</p> 
                <h2 className="text-xl font-semibold italic">{subtitle}</h2>
            </div>
        </>
    );
};

export default SectionTitle;