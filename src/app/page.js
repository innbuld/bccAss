import Image from "next/image";
import next from "next";

export default function Home() {
  return (
    <div className="">
      <div className="flex items-center justify-center pt-12 ">
        <div className=" text-center">
          <p className=" font-roboto text-white font-normal text-6xl">
            {" "}
            Easy send and Request
          </p>
          <p className="font-roboto text-white font-normal text-6xl">Crypto</p>
        </div>
      </div>

      <div className="flex items-center justify-center pt-10">
        <div className="text-center">
          <p className=" font-roboto text-white text-lg
          "> Bring blockchain to the people. Solana supports experiences </p>
          <p className="font-roboto text-white text-lg"> for power users, new consumers, and everyone in between.</p>

        </div>

      </div>
    </div>
  );
}
