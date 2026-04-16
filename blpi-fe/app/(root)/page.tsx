import { defineQuery } from "next-sanity";
import { client } from "@/sanity/client";
import PostCard from "@/components/PostCard";
import { CardType } from "@/sanity/types";
import Hero from "@/components/Hero";
import RecentPosts from "@/components/RecentPosts";

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

const HERO_QUERY = defineQuery(`
  *[_type == "hero"][0]{
  ...heroPost -> {
    title,
    slug, 
    description,
    mainImage,
    date
  }
}
`);

const home = async () => {
  const postCards = await client.fetch(HOME_QUERY);
  // console.log(postCards);
  const hero = await client.fetch(HERO_QUERY);
  //console.log("here's hero", hero);
  return (
    <div className="fade-in ">
      <Hero
        title={hero.title}
        description={hero.description}
        date={new Date(hero.date).toLocaleDateString("bn-in", {
          month: "long",
          year: "numeric",
        })}
        mainImage={hero.mainImage}
        slug={hero.slug}
      />
      <RecentPosts />
      <ul>
        {postCards.map((card: CardType) => (
          <li key={card._id} className="mx-auto hover:shadow-xl block">
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
