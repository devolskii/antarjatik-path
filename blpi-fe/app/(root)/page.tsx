import Link from "next/link";
import { defineQuery } from "next-sanity";
import { sanityFetch } from "@/sanity/live";
import PostCard from "@/components/PostCard";
import { Card } from "@/sanity/types";

const HOME_QUERY = defineQuery(`*[
  _type == "post"
]|order(date desc){_id, title, slug, description, date, mainImage}`);

const home = async () => {
  const { data: postCards } = await sanityFetch({
    query: HOME_QUERY,
  });

  return (
    <div className="fade-in">
      <ul>
        {postCards.map((card: Card) => (
          <li key={card._id}>
            <Link
              className=" w-4/5 mx-auto my-4 hover:shadow-xl block"
              href={`/posts/${card.slug?.current}`}
            >
              <PostCard
                title={card.title}
                desc={card.description}
                date={new Date(card.date).toLocaleDateString("bn-in", {
                  month: "long",
                  year: "numeric",
                })}
                image={card.mainImage}
              />
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};
export default home;
