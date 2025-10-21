import { MainImage } from "@/sanity/types";
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./ui/card";

import Image from "next/image";
import { urlFor } from "@/sanity/image";

const PostCard = ({
  title,
  desc,
  date,
  image,
}: {
  title: string;
  desc: string;
  date: string;
  image: MainImage;
}) => {
  const imageUrl = image
    ? urlFor(image).height(310).width(550).quality(80).auto("format").url()
    : "https://placehold.co/550x310/png";
  return (
    <div>
      <Card className="font-sans">
        <CardHeader>
          <CardTitle className="font-sans text-2xl">{title}</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex gap-3">
            <div className="w-4/5">
              <p>{desc}</p>
            </div>
            <div className="">
              <Image
                src={imageUrl}
                alt={title}
                className="mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center "
                height="200"
                width="200"
              />
            </div>
          </div>
        </CardContent>
        <CardFooter>
          <p className="">{date}</p>
        </CardFooter>
      </Card>
    </div>
  );
};
export default PostCard;
