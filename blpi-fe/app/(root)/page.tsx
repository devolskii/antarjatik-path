import { defineQuery } from "next-sanity";
import { client } from "@/sanity/client";
import PostCard from "@/components/PostCard";
import { CardType } from "@/sanity/types";

const HOME_QUERY = defineQuery(`
  *[_type == "post"]
  |order(date desc){
    _id, 
    title, 
    slug, 
    description, 
    date, 
    mainImage, 
    topic[]->{
      _id,
      name,
      slug
    }
  }
    `);

const home = async () => {
  const postCards = await client.fetch(HOME_QUERY);
  // console.log(postCards);

  return (
    <div className="fade-in">
      <ul>
        {postCards.map((card: CardType) => (
          <li key={card._id} className="mx-auto my-4 hover:shadow-xl block">
            <PostCard
              title={card.title}
              description={card.description}
              date={new Date(card.date).toLocaleDateString("bn-in", {
                month: "long",
                year: "numeric",
              })}
              mainImage={card.mainImage}
              topic={card.topic}
              slug={card.slug}
            />
          </li>
        ))}
      </ul>
    </div>
  );
};
export default home;
