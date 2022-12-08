import Head from 'next/head'
import Image from "next/image";
import GitHub from "../public/icons/github-icon.svg"
import LinkedIn from "../public/icons/linkedin-icon.svg"
import CV from "../public/icons/cv-icon.svg"
import ProjectCard from '../components/ProjectCard'
import LickRunner from "../public/project-images/lick-runner-image.jpg"
import Colordrobe from "../public/project-images/colordrobe-image.jpg"
import BoulderPush from "../public/project-images/boulder-push-image.jpg"
import LookingGood from "../public/project-images/looking-good-image.jpg"
import PlinkoKing from "../public/project-images/plinko-king-image.jpg"
import LayerBreaker from "../public/project-images/layer-breaker-image.jpeg"
import ArtEvolve from "../public/project-images/art-evolve-image.jpg"
import LoopTrain from "../public/project-images/loop-train-image.jpg"
import DrawHigher from "../public/project-images/draw-higher-image.jpg"
import StockInTime from "../public/project-images/stock-in-time-image.jpg"
import HomeDevelopment from "../public/project-images/home-development-image.jpg"
import CategorizeIt from "../public/project-images/categorize-it-image.jpeg"
import BulletManina from "../public/project-images/bullet-mania-image.jpg"
import VacummSeal from "../public/project-images/vacuum-seal-image.jpg"
import HyperBuster from "../public/project-images/hyper-buster-image.jpg"
import BounceIt3D from "../public/project-images/bounce-it-3d-image.jpg"
import ClimateChanger from "../public/project-images/climate-changer-image.jpeg"


export default function Home() {

  const projects = [
    { title: "LICK RUNNER", color: "green", description: "Lick your way through the feast but be careful, you need to roll your tongue back at the right moment because some of the stuff on the table is definitely not for human consumption...", image: LickRunner, side: "left", appStoreLink: "https://apps.apple.com/tr/app/lick-runner/id1557687589?l=tr", googlePlayLink: "", youtubeLink: "https://www.youtube.com/watch?v=dZ6hErFt5E0", link: "" },
    { title: "COLORDROBE", color: "dark-blue", description: "Time to organize your wardrobe! Drag and drop the clothes in the right order to create a beautiful gradient. Make sure everything is in its right place to complete the levels. Organize the entire house!", image: Colordrobe, side: "right", appStoreLink: "https://apps.apple.com/tr/app/colordrobe/id1636867151?l=tr", googlePlayLink: "", youtubeLink: "https://youtube.com/shorts/1LuBL_Y1iAw?feature=share", link: "" },
    { title: "BOULDER PUSH", color: "orange", description: "Push your boulder all the way up the mountain. Tap and hold to push but be careful, if you stress yourself too hard you have to start over. Earn money by pushing the boulder and spend it on upgrades to push it further and faster. A sisyphean task awaits, can you reach the peak?", image: BoulderPush, side: "left", appStoreLink: "https://apps.apple.com/tr/app/boulder-push/id1617632458?l=tr", googlePlayLink: "", youtubeLink: "https://www.youtube.com/watch?v=-qe8Kct6_Hg&ab_channel=TapOkGaming", link: "" },
    { title: "LOOKING GOOD", color: "light-blue", description: "Choose your own face. Avoid obstacles and collect face features of your preference. You can change your hair, grow a beard or get a tattoo on your face.Lets have the face of your dreams!", image: LookingGood, side: "right", appStoreLink: "https://apps.apple.com/tr/app/looking-good/id1598730944?l=tr", googlePlayLink: "", youtubeLink: "https://drive.google.com/file/d/1FyuUZa5QB6B0nK62Y90dzKhlogLCqe5V/view?usp=sharing", link: "" },
    { title: "PLINKO KING", color: "pink", description: "Pick your board and make some money! Move the board left and right to make as much money as possible. You'll need to consider your board's layout to get the maximum amount of balls and cash. Can you become a millionaire?", image: PlinkoKing, side: "left", appStoreLink: "https://apps.apple.com/tr/app/plinko-king/id1606399922?l=tr", googlePlayLink: "", youtubeLink: "https://drive.google.com/file/d/1ochPbqTaQMBBjIuYI0FVg4cQ4uI76Ljq/view?usp=sharing", link: "" },
    { title: "LAYER BREAKER", color: "lilac", description: "Tap on the layers to break them piece by piece. Upgrade to break them even faster. Place new fingers to do the breaking for you. Can you reach the bottom?", image: LayerBreaker, side: "right", appStoreLink: "https://apps.apple.com/tr/app/layer-breaker/id1640032160?l=tr", googlePlayLink: "", youtubeLink: "https://drive.google.com/file/d/16pofS7VgOApOoeNglkGKsfW78mOXRyfH/view?usp=sharing", link: "" },
    { title: "ART EVOLVE", color: "brown", description: "Become an art collector and make some money! Move left and right to evolve your art and sell it at the right point to make lots of money! Can you get to 2099?", image: ArtEvolve, side: "left", appStoreLink: "https://apps.apple.com/tr/app/art-evolve/id1612038981?l=tr", googlePlayLink: "", youtubeLink: "https://www.youtube.com/watch?v=_vCdhjG-oms", link: "" },
    { title: "LOOP TRAIN", color: "red", description: "The train is going round and round, until you tell it not to. Go around the loops and carry passengers and cargo to their destinations to earn money. Unlock new track to explore the world and upgrade your train with cash. Can you unlock everything?", image: LoopTrain, side: "right", appStoreLink: "https://apps.apple.com/tr/app/loop-train/id1631846923?l=tr", googlePlayLink: "", youtubeLink: "https://www.youtube.com/watch?v=VklVvjRdsig&ab_channel=HyperDailyGames", link: "" },
    { title: "DRAW HIGHER", color: "brown", description: "Can you build the highest tower? Draw your piece and drop them from above to build the highest tower. Upgrade your ink to draw more elaborate pieces and pass checkpoints to save your progress. Reach the top!", image: DrawHigher, side: "left", appStoreLink: "https://apps.apple.com/tr/app/draw-higher/id1637614306?l=tr", googlePlayLink: "", youtubeLink: "https://drive.google.com/file/d/1U17MEGl-609XCzD10rTSkuBMTU3Ur16o/view?usp=sharing", link: "" },
    { title: "STOCK IN TIME", color: "cool-blue", description: "Ever wished you can travel through time and become rich? Buy stocks at various companies and travel through time to sell them at their peak. Become a self made millionaire with your time machine!", image: StockInTime, side: "right", appStoreLink: "https://apps.apple.com/tr/app/stock-in-time/id1615403249?l=tr", googlePlayLink: "", youtubeLink: "https://drive.google.com/file/d/1S3wA32m8cUhWrpQk0l0ldwPFM5b6jE4Y/view?usp=sharing", link: "" },
    { title: "HOME DEVELOPMENT", color: "lilac", description: "Time to start your own real estate empire! Collect cash and develop houses on the way. Make sure to place the houses in the right spots to maximize your profits. Can you become a billionaire?", image: HomeDevelopment, side: "left", appStoreLink: "https://apps.apple.com/tr/app/home-development/id1612456299?l=tr", googlePlayLink: "", youtubeLink: "https://www.youtube.com/watch?v=ktFdb5oyBIs&ab_channel=HyperDailyGames", link: "" },
    { title: "CATEGORIZE IT", color: "red", description: "You need to categorize all the objects. Look at the category above and draw a circle around the objects that fit in that category. Watch out for curveballs!", image: CategorizeIt, side: "right", appStoreLink: "https://apps.apple.com/tr/app/categorize-it/id1630385869?l=tr", googlePlayLink: "", youtubeLink: "https://drive.google.com/file/d/13ZbPGtS3hOc96jGS5S43kD5PpJDpZ_7n/view?usp=sharing", link: "" },
    { title: "BULLET MANIA", color: "black", description: "Upgrade your way to victory. Move left and right to pick the right upgrades for the situation an defeat all enemies to win.", image: BulletManina, side: "left", appStoreLink: "https://apps.apple.com/tr/app/bullet-mania/id1608196205?l=tr", googlePlayLink: "", youtubeLink: "", link: "" },
    { title: "VACUUM SEAL", color: "red", description: "It's time to save some space! Put the items in the bag and vacuum seal it to reduce its size. Be careful though, you might rip the bag and have to start over if you vacuum it too much.", image: VacummSeal, side: "right", appStoreLink: "https://apps.apple.com/tr/app/vacuum-seal/id1552002468?l=tr", googlePlayLink: "", youtubeLink: "", link: "" },
    { title: "HYPER BUSTER", color: "red", description: "Make movie recommendations to customers according to their likes and interests, Burn new DVD's to stay up to date on latest releases, Clean up and polish returned discs. If you're good at your job, the line will extend all the way down the block!", image: HyperBuster, side: "left", appStoreLink: "https://apps.apple.com/tr/app/hyper-buster/id1543359910?l=tr", googlePlayLink: "", youtubeLink: "", link: "" },
    { title: "BOUNCE IT 3D", color: "purple", description: "Easy to learn but hard to master! Can you reach Level 42?", image: BounceIt3D, side: "right", appStoreLink: "https://apps.apple.com/tr/app/bounce-it-3d/id1530921584?l=tr", googlePlayLink: "", youtubeLink: "https://drive.google.com/file/d/17J74mMwsBlRpvgKTa_BGDudl-SFAFpIj/view?usp=sharing", link: "" },
    { title: "CLIMATE CHANGER", color: "red", description: "Will you save the environment or let it burn? Choose between planting trees or cutting them down, riding a bike or riding a monster truck and shape the world as you desire. Simply move your character left or right to make your choices and get to the end to see your results. Have fun!", image: ClimateChanger, side: "left", appStoreLink: "https://apps.apple.com/tr/app/climate-changer/id1576882149?l=tr", googlePlayLink: "", youtubeLink: "https://youtube.com/shorts/8N0JrebT8lY?feature=share", link: "" },
{ title: "NEW NORMAL", color: "green", description: "Our subconscious has a New Normal! We held on to dear life in ways of the New Normal. Now, the time has come to harvest those blossoming products which grew upon the earth that we called quarantine. We created this microsite as if it was the subconsciousness of this pandemic to leave a mark in eternity. New Normal is an immortal and virus-free place that we have created together.", image: NewNormal, side: "left", appStoreLink: "", googlePlayLink: "", youtubeLink: "", link: "https://afterwork.house/newnormal/" },

{ title: "SAVIOR", color: "green", description: "It is an advanture game which took place in an ancient world. You have to save the Koi fish and carry him to The Pool of Life.", image: Savior, side: "left", appStoreLink: "", googlePlayLink: "", youtubeLink: "", link: "https://ekinohutcu.itch.io/savior" },

{ title: "TAKE ME UP!", color: "green", description: "Ludum Dare 43 Game Jam Project
rabbit wants to go up, only you can save it. you need to grab it by holding the 'space' button and carry with arrows. but be careful, you are not that strong!", image: TakeMeUp, side: "left", appStoreLink: "", googlePlayLink: "", youtubeLink: "", link: "https://ekinohutcu.itch.io/take-me-up" },

  { title: "POOR PIGGY", color: "green", description: "The game for LudumDare45. A Piggy Bank who wants to be a real Pig.
Looking to the Pig Farm. But he needs money!! Help Mr. Piggy Bank to Collect enough money to quit to house for Pig Farm. He is just a Poor Piggy. ", image: PoorPiggy, side: "left", appStoreLink: "", googlePlayLink: "", youtubeLink: "", link: "https://ekinohutcu.itch.io/poor-piggy" },

      { title: "GELIN VS KAYNANA", color: "green", description: "This game was made in  ITU FROST JAM. It is a 2D simple fighter game made for PC. ", image: GelinvsKaynana, side: "left", appStoreLink: "", googlePlayLink: "", youtubeLink: "", link: "https://ekinohutcu.itch.io/gelin-vs-kaynana" },

 { title: "UNFINISHED", color: "green", description: "THIS PROJECT IS ALSO AN UNFINISHED PROJECT. unfinished project is an exhibition which contains unfinished projects of artists. thank you to all artists who sent me their unfinished works without hesitation. now your works have their world on the internet that they can rest forever", image: Unfinished, side: "left", appStoreLink: "", googlePlayLink: "", youtubeLink: "", link: "https://ekinohutcu.itch.io/unfinished" },

 { title: "SILLY LEGS", color: "green", description: "Ever wondered what would happen if your legs turned into ropes and you had to walk across the street?
Good news is you can see how that would look like:
- Tap and drag to launch your feet one by one
- Avoid cars and other obstacles
- Make your way across town! ", image: SillyLegs, side: "left", appStoreLink: "", googlePlayLink: "", youtubeLink: "", link: "" },

 { title: "SWITCH MINER", color: "green", description: "
Mine your way down and break through whatever obstacle you face. You need to pick the right tool for the job or others will claim your treasure! ", image: SwitchMiner, side: "left", appStoreLink: "", googlePlayLink: "", youtubeLink: "", link: "" },

 { title: "PARK MY CAR", color: "green", description: "Ready to run your very own parking lot? Simply tap where you want the cars to go and the elevator will take them there. Seems simple right? Well, sometimes other cars will be in the way and you'll have to move them.", image: ParkMyCar, side: "left", appStoreLink: "", googlePlayLink: "", youtubeLink: "", link: "" },

 { title: "SPIRAL RUNNER", color: "green", description: "Climb to the top of the spiral before everyone else and claim the throne!

- Collect wooden legs on your way up
- Use them to create a shortcut to the next tier of the spiral
- Enjoy life on the top", image: SpiralRunner, side: "left", appStoreLink: "", googlePlayLink: "", youtubeLink: "", link: "" },

 { title: "MATH HEAD", color: "green", description: "Are you good at math?
- Get the biggest number
- Compete with two other players
- Get to the finish line", image: MathHead, side: "left", appStoreLink: "", googlePlayLink: "", youtubeLink: "", link: "" },

 { title: "POUR IT UP!", color: "green", description: "It's time to make some fresh drinks!

Tap and hold to pour the liquid from the bottle.

Fill glasses to the indicated point to win.", image: PourItUp, side: "left", appStoreLink: "", googlePlayLink: "", youtubeLink: "", link: "" },

 { title: "BLOW SHOOT", color: "green", description: "It's time to take them down. Shoot the enemy hideout and blow up the enemies and buildings. Simply aim around to shoot and hide to avoid the enemy bullets.", image: BlowShoot, side: "left", appStoreLink: "", googlePlayLink: "", youtubeLink: "", link: "" },]

  return (
    <div >
      <Head>
        <title>Ekin Nohutçu Portfolio</title>
        <meta name="description" content="Ekin Nohutçu Portfolio Web Site" />
        <link rel="icon" href="/meta-logo.png" />
      </Head>
      <div className='main-wrapper'>
        <div className='main-title'>
          EKIN NOHUTCU PORTFOLIO
          <div className='account-links'>
            <a href=""> <Image src={GitHub} className="img" /> </a>
            <a href=""> CV </a>
            <a href=""> <Image src={LinkedIn} className="img" /> </a>
          </div>
        </div>
        {projects.map((project, index) => (
          <ProjectCard title={project.title} color={project.color} description={project.description} image={project.image} side={project.side} appStoreLink={project.appStoreLink} googlePlayLink={project.googlePlayLink} youtubeLink={project.youtubeLink} link={project.link} />
        ))}
      </div>

    </div>
  )
}