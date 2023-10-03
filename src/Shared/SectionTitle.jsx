
const SectionTitle = ({title, subtitle}) => {
    return (
        <>
            <div className="text-center py-4 bg-zinc-200">
                <p className="text-slate-800 text-4xl font-bold uppercase ">--------- {title} ---------</p>
                <h2>{subtitle}</h2>
            </div>
        </>
    );
};

export default SectionTitle;