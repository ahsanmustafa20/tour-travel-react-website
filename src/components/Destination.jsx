import "./DestinationStyles.css"
import DestinationData from "./DestinationData";
const Destination = () => {
    return (
        <>
        <div className="Destination">
            <h1>Popular Destinations</h1>
            <p>Discover our most sought-after travel destinations and create unforgettable memories.</p>

            <DestinationData 
                className="first-des"
                heading="Paris, France"
                text="Paris, France is one of the world's most iconic travel destinations, known for its rich history, stunning architecture, and romantic atmosphere. Visitors can explore famous landmarks such as the Eiffel Tower, the Louvre Museum, and Notre-Dame Cathedral while enjoying charming cafés and beautiful streets. The city offers a unique blend of culture, art, fashion, and cuisine, making it an unforgettable destination for travelers from around the globe."
                img1="https://images.unsplash.com/photo-1499856871958-5b9627545d1a?q=80&w=1120&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                img2="https://images.unsplash.com/photo-1511739001486-6bfe10ce785f?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            />

            <DestinationData 
                className="first-des-reverse"
                heading="Tokyo, Japan"
                text="Tokyo, Japan is a vibrant metropolis that seamlessly blends traditional culture with cutting-edge technology. Visitors can explore historic temples, experience the bustling energy of Shibuya Crossing, and savor world-renowned cuisine. The city offers a unique mix of relaxation and excitement, making it a top destination for travelers seeking an authentic Asian experience."
                img1="https://plus.unsplash.com/premium_photo-1661964177687-57387c2cbd14?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                img2="https://images.unsplash.com/photo-1545569341-9eb8b30979d9?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            />
        </div>
        </>
    )
}

export default Destination