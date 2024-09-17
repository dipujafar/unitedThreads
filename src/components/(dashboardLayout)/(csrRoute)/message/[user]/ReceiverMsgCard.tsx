
const ReceiverMsgCard = ({ message }: {message: string}) => {
    return (
      <div className="max-w-max rounded-xl border bg-[#DFE1E3] px-3 py-2">
        <p className="text-primary-black">{message}</p>
      </div>
    );
  }
  
  export default ReceiverMsgCard;