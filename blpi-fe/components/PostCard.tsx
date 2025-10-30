import { MainImage, Topic } from "@/sanity/types";
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
import Link from "next/link";
import { Button } from "./ui/button";

const PostCard = ({
  title,
  desc,
  date,
  image,
  topics,
}: {
  title: string;
  desc: string;
  date: string;
  image: MainImage;
  topics: Topic[];
}) => {
  const imageUrl = image
    ? urlFor(image).height(310).width(550).quality(80).auto("format").url()
    : "https://placehold.co/550x310/png";
  console.log(topics);

  return (
    <div>
      <Card className="font-sans">
        <CardHeader>
          <CardTitle className="font-sans text-xl xl:text-2xl">
            {title}
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex gap-3">
            <div className="hidden md:block md:w-4/5">
              <p>{desc}</p>
            </div>
            <div className="">
              <Image
                src={imageUrl}
                alt={title}
                className="mx-auto aspect-video overflow-hidden object-cover object-center "
                height="200"
                width="350"
              />
            </div>
          </div>
        </CardContent>
        <CardFooter>
          <p className="">{date}</p>

          {topics.map((topic: Topic) => (
            <li key={topic._key}>
              <Button variant="outline" className="ml-4">
                <Link href={`/topic/${topic._ref}`} className="">
                  {topic.name}
                </Link>
              </Button>
            </li>
          ))}
        </CardFooter>
      </Card>
    </div>
  );
};
export default PostCard;
