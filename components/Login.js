import Image from "next/image";
import { useMoralis } from "react-moralis";

function Login() {
  const { authenticate } = useMoralis();
  return (
    <div className="bg-black relative text-white">
      <h1> I am the login screen</h1>
      <div className="flex flex-col absolute z-50 h-4/6 w-full items-center justify-center space-y-4">
        {/* logo */}
        <Image
          className="object-cover animate-spin rounded-full"
          src="https://static.wikia.nocookie.net/alldimensions/images/2/21/Metaverse.png/revision/latest?cb=20150705211851"
          width={200}
          height={200}
        />

        {/* title */}
        <h1 className="text-[50px] leading-9 font-bold ">
          Welcome to Metaverse
        </h1>
        <p className="text-[18px] leading-8 font-lg">
          Create and explore the virtual world owned by its users.
        </p>
        <p>Be part of the future with Metaverse!</p>

        {/* login button */}
        <button
          onClick={authenticate}
          className="bg-gradient-to-r from-blue-800 to-blue-500 rounded-lg p-5 font-bold animate-pulse"
        >
          Join the Metaverse
        </button>
        {/* no wallet */}
        <p>...</p>
      </div>
      <div className="w-full h-screen">
        <Image
          src="https://i.imgur.com/cItYtHi.jpeg"
          layout="fill"
          objectFit="cover"
        />
        {/* login form */}
      </div>
    </div>
  );
}

export default Login;
