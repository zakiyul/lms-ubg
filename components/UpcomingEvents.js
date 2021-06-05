import Link from "next/link";
import { MdAssignment } from "react-icons/md";

const Card = () => {
  return (
    <div className="flex flex-col border border-gray-300 rounded p-2 mb-2">
      <Link href="/">
        <a className="text-blue-700 hover:text-blue-900 hover:underline">
          TSKK340121-Metode Numerik 20/21 Genap A
        </a>
      </Link>
      <span className="text-sm">
        <Link href="/">
          <a className="text-blue-700 hover:text-blue-900 hover:underline">
            Today
          </a>
        </Link>
        , 5:15 PM
      </span>
      <Link href="/">
        <a className="flex items-center bg-red-400 hover:bg-red-500 p-1 text-sm rounded w-48 mb-2 text-white">
          <MdAssignment />
          Upload Jawaban Latihan
        </a>
      </Link>
    </div>
  );
};

const UpcomingEvents = () => {
  return (
    <div className="">
      <div className="bg-gray-200 p-3 rounded">
        <h3 className="uppercase text-gray-500 text-base font-semibold mb-3">
          upcoming events
        </h3>
        {[1, 2, 3, 4, 5].map((item) => (
          <Card key={item} />
        ))}
      </div>
    </div>
  );
};

export default UpcomingEvents;
