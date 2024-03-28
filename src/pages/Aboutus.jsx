import whale from '../assets/images/whale.png';



export default function About() {
  return (


    <div className='min-h-screen flex items-center justify-center'>
      <div className='max-w-2xl mx-auto p-3 text-center'>
        <div>

        <img src={whale} width={2000} height={2000}></img>
          
          <h1 className='text-3xl font font-semibold text-center my-7'>
            About EcoSwift
          </h1>
          <div className='text-md text-gray-500 flex flex-col gap-6'>
            <p>
            Welcome to EcoSwift, your premier partner in modern waste management solutions. 
            At EcoSwift, we are committed to revolutionizing the way communities handle their 
            garbage, with a strong focus on environmental sustainability and efficiency.

Our journey began with a simple yet profound realization: the pressing need for
 innovative solutions to tackle the global waste crisis. Faced with mounting environmental 
 challenges, we set out to develop a comprehensive garbage management system that not only 
 addresses the immediate needs of waste disposal but also prioritizes the preservation of 
 our planet for future generations.
            </p>

            <p>
            Driven by a passion for sustainability and a deep-rooted commitment to environmental 
            stewardship, our team of dedicated professionals brings together expertise 
            from diverse fields including waste management, technology, and environmental 
            science. With our collective knowledge and unwavering determination, we strive to 
            create a cleaner, greener future for all.

At EcoSwift, we believe in the power of innovation to effect positive change. 
Our cutting-edge technologies and advanced systems are designed to optimize 
every aspect of waste management, from collection and sorting to recycling and disposal. 

By leveraging the latest advancements in artificial intelligence, data analytics, and IoT 
(Internet of Things), we ensure that our solutions are not only effective but also adaptable 
to the evolving needs of modern communities.
            </p>

            <p>
              We encourage you to leave comments on our posts and engage with
              other readers. You can like other people's comments and reply to
              them as well. We believe that a community of learners can help
              each other grow and improve.
            </p>
          </div>
        </div>
      </div>
    </div>
     );
    }