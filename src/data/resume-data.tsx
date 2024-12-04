import { GitHubIcon, LinkedInIcon } from "@/components/icons";

export const RESUME_DATA = {
  name: "Ayam Dobhal",
  initials: "AD",
  location: "Dehradun, India, IST",
  locationLink: "https://www.google.com/maps/place/Dehradun",
  about:
    "Passionate Software Developer focused on Full Stack and Blockchain Development.",
  summary:
    "As a Full Stack Developer/Blockchain Engineer, I excel at building reliable products on both Web2 as well as Web3. I have worked with a variety of languages, frameworks and tools over the past 4 years and am always appending to the array of those.",
  avatarUrl: "https://avatars.githubusercontent.com/u/41852971?v=4",
  personalWebsiteUrl: "https://iamdobhal.dev",
  contact: {
    email: "me@iamdobhal.dev",
    tel: "+919557855690",
    social: [
      {
        name: "GitHub",
        url: "https://github.com/ayamdobhal",
        icon: GitHubIcon,
      },
      {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/ayamdobhal/",
        icon: LinkedInIcon,
      },
    ],
  },
  education: [
    {
      school: "Graphic Era University",
      degree: "Bachelor's Degree in Computer Science and Engineering",
      start: "2020",
      end: "2024",
    },
  ],
  work: [
    {
      company: "Spectre Labs LLC",
      badges: ["Remote"],
      title: "Full Stack/Blockchain Developer",
      start: "Jun 2024",
      end: "Aug 2024",
      description:
        "Led the development of contracts on the Ethereum Chain and working with the Backend team while assisting the Frontend team to integrate those.",
    },
    {
      company: "Codemarks",
      badges: ["Remote"],
      title: "Junior Software Developer",
      start: "Aug 2022",
      end: "Nov 2023",
      description:
        "Worked on different projects involving web development and created various contracts on Ethereum/Binance/Solana chains. Led a team of interns and reviewed their commits.",
    },
    {
      company: "Whales Network",
      badges: ["Remote"],
      title: "Backend Developer",
      start: "Feb 2022",
      end: "Aug 2022",
      description:
        "Created APIs for a social media application focused on crypto investors with a team of Backend developers and helped the Frontend team with integrations.",
    },
    {
      company: "Freelancer",
      badges: ["Remote"],
      title: "Software Developer",
      start: "Jan 2020",
      end: "Jul 2022",
      description:
        "Shipped various projects including web apps, automation scripts and blockchain contracts to different clients.",
    },
  ],
  skills: [
    "JavaScript",
    "TypeScript",
    "Rust",
    "Golang",
    "Python",
    "Solidity",
    "React/Next.js",
    "Node.js",
    "GraphQL",
  ],
  achievements: [
    {
      title: "Unfold24 by CoinDCX",
      description: "Won 1st prize bounty worth US$5k for the Agoric path.",
      during: "Dec 2024",
    },
  ],
  projects: [
    {
      title: "yt-yapper",
      techStack: [
        "Personal Project",
        "Rust",
        "yt-dlp",
        "serenity-rs",
        "songbird-rs",
      ],
      description:
        "A Discord bot to play music in voice channels using yt-dlp.",
      link: {
        label: "github.com",
        href: "https://github.com/GamyingOnline/yt-yapper",
      },
    },
    {
      title: "TipFluence",
      techStack: [
        "Hackathon Project",
        "Flutter",
        "Solidity",
        "TypeScript",
        "Polygon",
      ],
      description:
        "An Android/iOS application to secure content ownership rights of social media posts running in an EVM environment.",
      link: {
        label: "github.com",
        href: "https://github.com/mehuldadlani/TipFluence",
      },
    },
    {
      title: "Reddit CLI",
      techStack: [
        "School Project",
        "Reddit API",
        "Python",
        "Linux",
        "PRAW",
        "JWT",
      ],
      description: "A CLI Client to browse reddit.",
      link: {
        label: "github.com",
        href: "https://github.com/ayamdobhal/reddit-cli",
      },
    },
    {
      title: "Khar Bot",
      techStack: [
        "Freelance Project",
        "Twitter Bot Developer",
        "Python",
        "Tweepy",
        "Twitter API",
        "ImageMagick",
      ],
      description: "A Twitter bot for image manipulation.",
      link: {
        label: "x.com",
        href: "https://x.com/khar_bot",
      },
    },
    {
      title: "CatOS",
      techStack: ["College Project", "Kernel Dev", "Rust", "x86_64", "QEMU"],
      description:
        "A customer kernel for x86_64 based chipsets with basic features + a lightweight OS.",
      link: {
        label: "github.com",
        href: "https://github.com/ayamdobhal/catos",
      },
    },
    {
      title: "Subreddit Notifier",
      techStack: ["Side Project", "Python", "Android", "Termux", "PRAW"],
      description: "Python Script to notify about new activity on a subreddit.",
      link: {
        label: "github.com",
        href: "https://github.com/ayamdobhal/subreddit-notifier",
      },
    },
    {
      title: "Emotion Based Music Recommendation",
      techStack: [
        "Side Project",
        "Machine Learning",
        "React.js",
        "Flask",
        "Last.fm API",
      ],
      description:
        "A simple website that recommends songs using the Last.fm API based on emotional analysis.",
      link: {
        label: "github.com",
        href: "https://github.com/ayamdobhal/emotion-based-song-recommendation-backend",
      },
    },
    {
      title: "Virtual Keylogger",
      techStack: [
        "Side Project",
        "Vue.js",
        "NestJS",
        "Browser Extension",
        "MongoDB",
      ],
      description:
        "A browser extension to log key events from in browser keyboards on banking sites.",
      link: {
        label: "github.com",
        href: "https://github.com/ayamdobhal/virtual-keylogger",
      },
    },
    {
      title: "File Organizer",
      techStack: ["Side Project", "Python", "Organizing Files"],
      description:
        "A Python Script to organize files inside a directory into different subcategories based on file extensions.",
      link: {
        label: "github.com",
        href: "https://github.com/ayamdobhal/file-organizer",
      },
    },
    {
      title: "NFT Deployment App",
      techStack: ["College Project", "Solidity", "Node.js", "Hardhat"],
      description:
        "A simple NFT Deployment Contract for EVM based chains written in Solidity.",
      link: {
        label: "github.com",
        href: "https://github.com/ayamdobhal/web3.0-dapp",
      },
    },
    {
      title: "FIFA WC 2022 Betting Platform",
      techStack: [
        "Freelance Project",
        "Solidity",
        "Express.js",
        "Node.js",
        "Hardhat",
      ],
      description:
        "A betting app created for betting on the outcome of FIFA World Cup 2022 matches on the Binance Smart Chain.",
    },
    {
      title: "8086-Emulator",
      techStack: ["College Project", "Python", "8086", "Assembly"],
      description: "A barebones Intel 8086 Emulator written in Python.",
      link: {
        label: "github.com",
        href: "https://github.com/ayamdobhal/8086-emulator",
      },
    },
    {
      title: "Twitter Link Prediction",
      techStack: [
        "College Project",
        "Machine Learning",
        "Python",
        "Link Prediction",
      ],
      description:
        "A Machine Learning model trained to predict links between a dataset of Twitter (now X) users.",
      link: {
        label: "github.com",
        href: "https://github.com/ayamdobhal/link-prediction-twitter",
      },
    },
  ],
} as const;
