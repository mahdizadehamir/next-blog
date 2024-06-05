import Spinner from "@/components/Spinner/Spinner";

function loading() {
  return (
    <div className="flex items-center justify-center">
      <Spinner />
    </div>
  );
}

export default loading;
