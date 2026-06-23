import "./TripStyles.css";
import TripData from "./TripData";

function Trip() {
    return (
        <div className="trip">
            <h1>Recent Trips</h1>
            <p>Check out our latest travel adventures and get inspired for your next getaway.</p>
            <div className="tripcard">
                <TripData 
                    image="https://images.unsplash.com/photo-1524675053444-52c3ca294ad2?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    heading="Trip to Indonesia"
                    text="Indonesia, a stunning archipelago in Southeast Asia, is made up of more than 17,000 islands and is known for its rich cultural heritage, tropical beaches, and breathtaking natural beauty. From the lush rice terraces of Bali to the ancient temples of Java and the vibrant marine life of Raja Ampat, the country offers countless unforgettable experiences for travelers.
                        Home to hundreds of ethnic groups and languages, Indonesia showcases a unique blend of traditions, cuisines, and customs. Visitors can explore bustling cities, hike active volcanoes, relax on pristine beaches, or immerse themselves in local culture. With its warm hospitality and diverse attractions, Indonesia remains one of the world's most captivating travel destinations."
                />

                <TripData 
                    image="https://images.unsplash.com/photo-1573843981267-be1999ff37cd?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    heading="Trip to Maldives"
                    text="Maldives, a tropical paradise in the Indian Ocean, is renowned for its crystal-clear turquoise waters, white sandy beaches, and vibrant marine life. Comprising over 1,000 coral islands, the Maldives offers a luxurious escape for travelers seeking tranquility and natural beauty. Visitors can indulge in world-class resorts, snorkel or dive among colorful coral reefs, and experience breathtaking sunsets. With its idyllic setting and warm hospitality, the Maldives is a dream destination for honeymooners, beach lovers, and anyone looking to unwind in a serene environment."
                />

                <TripData 
                    image="https://images.unsplash.com/photo-1590309284223-3946577eb10e?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    heading="Trip to Switzerland"
                    text="Switzerland, a picturesque country in the heart of Europe, is renowned for its stunning landscapes, pristine lakes, and majestic mountains. From the snow-capped peaks of the Swiss Alps to the serene beauty of Lake Geneva, Switzerland offers a diverse range of natural wonders. Visitors can explore charming cities like Zurich and Lucerne, indulge in world-class chocolate and cheese, and enjoy outdoor activities such as skiing, hiking, and boating. With its efficient public transportation and welcoming culture, Switzerland is a top destination for travelers seeking both adventure and relaxation."
                />
            </div>
        </div>
        
    )
} 

export default Trip;