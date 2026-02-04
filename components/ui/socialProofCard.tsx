type siteData = {
    stars: string;
    text: string;
    name: string;
    age: number;
}

type SocialProofCardProps = {
    items: siteData[];
}

export default function SocialProofCard({items}: SocialProofCardProps) {
    return(
        <div className=" max-w-sm lg:grid lg:grid-cols-2 lg:gap-x-5 lg:max-w-2xl">
            {items.map((item,idx) => (
                <div key={idx} className={`flex flex-col bg-white/10 border border-white/20 rounded-lg p-5 mb-4 max-w-md lg:max-w-4xl shadow-lg ${idx === items.length - 1 ? "lg:col-span-2 p-6" : ""}`}>
                    <div className="mb-2 lg:mb-1">
                        <span className="text-yellow-400 text-sm">{item.stars}</span>
                    </div>

                    <p className="italic">{item.text}</p>
                    <div className="text-sm text-gray-300">
                        - {item.name}, {item.age}
                    </div>
                </div>
            ))}
        </div>
    )
}