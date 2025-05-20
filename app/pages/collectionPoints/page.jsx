import Breadcrumb from "@/app/components/breadcrumb";
import Banner from '@/app/img/banner.jpg';
import CollectionPointsForm from "@/app/components/collectionPointsForm";

export default function CollectionPoints() {

    return (
        <>
            <Breadcrumb
                image={Banner}
                title="Pontos de Coleta"
                page="Coleta"
            />
            <div className="w-[90%] mx-auto space-y-4">
                <h1 className="text-3xl font-bold text-center uppercase my-4">Descubra onde descartar seus resíduos</h1>
                <p className="text-lg text-justify">Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Maecenas porttitor congue massa. Fusce posuere, magna sed pulvinar ultricies, purus lectus malesuada libero, sit amet commodo magna eros quis urna. Nunc viverra imperdiet enim.</p>
                <div>
                    <CollectionPointsForm />
                </div>
                <div className="mx-auto">
                    <h2 className="text-2xl font-semibold text-center mb-4">Pontos de Coleta em Sete Lagoas</h2>
                    {/* <iframe src="https://www.google.com/maps/d/embed?mid=1dj-iG8QZga19Ix7QuVh39cPTZrhsxYo&ehbc=2E312F&noprof=1" width="100%" height="500"></iframe> */}
                    <iframe src="https://www.google.com/maps/d/embed?mid=1dj-iG8QZga19Ix7QuVh39cPTZrhsxYo&ehbc=2E312F&noprof=1" width="100%" height="500"></iframe>
                </div>
            </div>
        </>
    )
}