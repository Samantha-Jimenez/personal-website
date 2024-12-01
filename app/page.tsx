import NavBar from "./components/NavBar";
import ContactForm from "./components/ContactForm";

export default function Home() {
  return (
    <main className="flex min-h-max flex-col gap-4 justify-self-center">
      <div className="relative flex h-fit">
        <div className="absolute inset-0 bg-zinc-800 opacity-80"></div>
        <video
          className="w-screen h-[150vh] min-[301px]:h-[120vh] min-[384px]:h-screen rounded-lg object-cover object-center"
          src="https://videos.pexels.com/video-files/946146/946146-hd_1920_1080_30fps.mp4"
          autoPlay
          loop
          muted
          playsInline
        />
        <div className="absolute inset-0 flex flex-col z-10 px-6 sm:px-24 py-16">
        <p className="bungee-hairline-regular text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl max-w-max whitespace-nowrap max-[540px]:place-self-center min-[540px]:place-self-start">Samantha</p>
        <p className="bungee-hairline-regular text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl max-w-max whitespace-nowrap max-[540px]:place-self-center min-[540px]:place-self-end">Jimenez</p>
          <p className="montserrat-mine text-xl justify-center pt-16 md:pt-20 lg:pt-24 xl:pt-32">Hi, I’m Sam, a full-stack software engineer with a passion for exploring, creating, and staying active. After years of focusing on my career, I’m rediscovering the hobbies and interests that bring me joy—fitness, food, travel, and creative projects.
            <br/><br/> This website is my space to document that journey, share insights, and connect with others. From blog posts and tech projects to reflections on life and adventure, I’m excited to bring you along as I embrace my passions.
            <br/><br/> Currently, I’m building an app with a group of engineers from my time at Pursuit Coding Fellowship in 2019, and I can’t wait to share what’s next..
          </p>
        </div>
      </div>
      <div className="flex justify-center">
        <ContactForm />
      </div>
    </main>
  )
}
