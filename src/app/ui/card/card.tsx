import Header from "./header";
import Content from "./content";

export default function Card() {
    return (
        <div className="w-full md:w-[600px] bg-white rounded-[5px] drop-shadow-card">
            <Header />
            <Content />
        </div>
    );
}
