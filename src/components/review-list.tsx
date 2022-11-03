import avatar from "../assets/avatar.png";
import ReviewCard from "./review-card";

export interface IReview {
  title: string;
  desc: string;
  avatar: string | null;
  userName: string;
  userRole: string;
}

const reviews: IReview[] = [
  {
    title: "Amazing people",
    desc: `"They are people who are not only following the tasks, but can work as a team. Together."`,
    avatar: avatar,
    userName: "Matthijs Piëst",
    userRole: "COO at WieBetaaltWat",
  },
  {
    title: "Amazing people",
    desc: `"They are people who are not only following the tasks, but can work as a team. Together."`,
    avatar: null,
    userName: "Matthijs Piëst",
    userRole: "COO at WieBetaaltWat",
  },
  {
    title: "Amazing people",
    desc: `"They are people who are not only following the tasks, but can work as a team. Together."`,
    avatar: null,
    userName: "Matthijs Piëst",
    userRole: "COO at WieBetaaltWat",
  },
  {
    title: "Amazing people",
    desc: `"They are people who are not only following the tasks, but can work as a team. Together."`,
    avatar: null,
    userName: "Matthijs Piëst",
    userRole: "COO at WieBetaaltWat",
  },
  {
    title: "Partnership approach",
    desc: `“We felt like we had a true partner throughout the process. They were clearly interested on our long-term success.”`,
    avatar: avatar,
    userName: "Matthijs Piëst",
    userRole: "COO at WieBetaaltWat",
  },
];

export default function ReviewList() {
  return (
    <ul className="flex flex-wrap justify-around content-around">
      {reviews.map((review: IReview, key) => (
        <ReviewCard key={key} review={review} />
      ))}
    </ul>
  );
}
