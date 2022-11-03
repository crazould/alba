import { IReview } from "./review-list";

export default function ReviewCard({ review }: { review: IReview }) {
  const { title, desc, avatar, userName, userRole } = review;

  if (!avatar)
    return (
      <li className="max-w-[450px] my-6 hidden lg:block">
        <div className="font-bold">{title}</div>
        <div className="">{desc}</div>
        <div className="flex mt-4">
          <div>
            <div className="text-xs ">{userName}</div>
            <div className="text-xs text-zinc-400">{userRole}</div>
          </div>
        </div>
      </li>
    );

  return (
    <li className="max-w-[450px] my-6">
      <div className="font-bold text-3xl">{title}</div>
      <div className="text-xl">{desc}</div>
      <div className="flex mt-4">
        <img src={avatar} alt={`${userName} avatar`} className="mr-4" />
        <div>
          <div className="text-sm ">{userName}</div>
          <div className="text-sm text-zinc-400">{userRole}</div>
        </div>
      </div>
    </li>
  );
}
