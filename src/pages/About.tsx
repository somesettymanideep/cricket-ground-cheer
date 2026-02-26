import PageBanner from "@/components/PageBanner";
import bannerLegal from "@/assets/banner-legal.jpg";
import ScrollReveal from "@/components/ScrollReveal";

const About = () => {
  return (
    <>
      <PageBanner title="About Us" subtitle="The story behind Ballebaaz" image={bannerLegal} />
      <div className="container py-16 md:py-24 max-w-3xl">
        <ScrollReveal>
          <h2 className="text-2xl md:text-3xl font-display font-bold text-foreground">Founders &amp; Story</h2>
          <div className="mt-6 space-y-5 text-sm text-muted-foreground leading-relaxed">
            <p>
              Cleveronics Technologies Private Limited was founded by Aditya, Pranay, and Sharath, a trio of passionate individuals with a shared vision to transform scorekeeping in sports. Their journey began with a simple yet powerful idea: to create LED scoreboards that would not only provide accurate and real-time score updates but also enhance the overall sports experience for players and spectators alike. Drawing from their diverse backgrounds in technology, engineering, and sports, the founders embarked on a mission to turn their vision into reality.
            </p>
            <p>
              The founders' deep-rooted passion for sports, particularly cricket, served as the driving force behind Cleveronics' inception. As active participants in local cricket leagues, they experienced firsthand the frustrations of outdated and inaccurate scorekeeping systems. Determined to address this challenge, they pooled their expertise and resources to develop innovative LED scoreboards that would revolutionize the way sports are played and enjoyed.
            </p>
            <p>
              Today, Cleveronics stands as a testament to the founders' unwavering commitment to innovation and excellence. Their relentless pursuit of quality craftsmanship, coupled with a customer-centric approach, has earned Cleveronics a reputation for reliability and innovation in the sports technology market. As the company continues to grow and expand its reach, the founders remain dedicated to pushing the boundaries of what's possible in sports technology and delivering unmatched solutions to customers around the globe.
            </p>
          </div>
        </ScrollReveal>

        <ScrollReveal>
          <div className="mt-16 border-t border-border pt-10">
            <h2 className="text-xl font-display font-bold text-foreground">About Cleveronics Technologies Private Limited</h2>
            <p className="mt-3 text-sm text-muted-foreground leading-relaxed">
              Cleveronics Technologies Private Limited is a dynamic player in the sports technology industry, dedicated to revolutionizing the sports experience through cutting-edge LED scoreboard solutions. With a relentless focus on innovation, quality, and customer satisfaction, Cleveronics is committed to pushing the boundaries of sports technology and delivering unparalleled solutions to sports venues and organizations worldwide.
            </p>
          </div>
        </ScrollReveal>
      </div>
    </>
  );
};

export default About;
