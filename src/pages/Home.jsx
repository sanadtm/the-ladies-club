import snowboard from "../assets/snowboard2.jpg";


export default function Home() {
  return (
    <div>
      <div className="p-6 text-2xl">Welcome to the Home Page</div>
      <div className="flex justify-center">
        <img
          height={600}
          width={1200}
          src={snowboard} 
          alt="The Ladies Club"
          className="object-cover rounded-lg shadow-lg transition-transform duration-300 transform hover:scale-105"
        />
      </div>
    </div>
  );
}
