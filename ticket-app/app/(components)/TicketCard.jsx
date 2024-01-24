import StatusDisplay from "./StatusDisplay";
import DeleteBlock from "./DeleteBlock";
import PriorityDisplay from "./PriorityDisplay";
import ProgressDisplay from "./ProgressDisplay";
// import Link from "next/link";

const TicketCard = () => {
  return (
    <div className="flex flex-col hover:bg-card-hover bg-card rounded-md shadow-lg p-3 m-2">
      <div className="flex mb-3">
        <PriorityDisplay />
        <div className="ml-auto">
          <DeleteBlock />
        </div>
      </div>
      {/* <Link href={`/TicketPage/${ticket._id}`} style={{ display: "contents" }}> */}
      <h4 className="mb-1">Ticket title</h4>
      <hr className="h-px  border-0 bg-page mb-2 "></hr>
      <p className="whitespace-pre-wrap">ticket description</p>

      <div className="flex-grow"></div>
      <div className="flex mt-2">
        <div className="flex flex-col">
          <p className="text-xs  my-1">08/31/23 10:43PM</p>
          <ProgressDisplay />
        </div>
        <div className="ml-auto  flex items-end">
          <StatusDisplay />
        </div>
      </div>
      {/* </Link> */}
    </div>
  );
};

export default TicketCard;
