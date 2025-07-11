
export interface Review {
  name: string;
  location: string;
  date: string;
  description: string;
  image: string;
}

const ReviewCard = ({ name, location, date, description, image }: Review) => {
  return (
    <section
      className=" bg-white shadow-xl w-90 p-2 rounded-2xl h-auto hover:transition-transform hover:scale-105 duration-300 ease-in-out"
    >
      <img src={image} alt={name} className=" w-full h-55 object-cover p-1 rounded-2xl" />
      <div className="p-2">
        <h1 >{name}</h1>
        <h2 className="font-semibold bg-amber-200 w-fit p-1 rounded-2xl">
          📍{location} on 📆{date}
        </h2>
        <p className="text-green-800 mt-2">{description}</p>
      </div>
    </section>
  );
};

export default ReviewCard;
