import { DocumentPlusIcon } from "@heroicons/react/24/outline";

type Props = {
  handleClick: () => void;
};

export default function NoSelectedCity({ handleClick }: Props) {
  return (
    <button
      type="button"
      onClick={() => handleClick()}
      className="relative  flex h-full w-full flex-col items-center justify-center rounded-lg border-2 border-dashed border-slate-200 p-12 text-center text-slate-400 hover:border-slate-600 "
    >
      <DocumentPlusIcon className="h-20 w-20" />
      <span className="mt-2 block text-sm font-medium">Add a new city</span>
    </button>
  );
}
