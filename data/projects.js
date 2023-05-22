export const PROJECT_ID = {
  defiLlama: "DefiLlama",
  llamaNodes: "LlamaNodes",
  dlNews: "DLNews",
  llamaPay: "LlamaPay",
  llamaFolio: "LlamaFolio",
  chainList: "ChainList",
};

const projects = [
  {
    id: PROJECT_ID.defiLlama,
    title: "Blizzard Finance",
    description:
      "Blizzard is fully-permissionless DEX for trading perpetual contracts with up to 100x leverage.",
    logo: {
      src: "/assets/defillama.svg",
      width: 240,
      height: 60,
    },
    href: "https://defillama.com",
  },
  {
    id: PROJECT_ID.llamaNodes,
    title: "ChainNodes",
    description:
      "ChainNodes offers fast and secure access to the blockchain. Robust, private, and open-source: ChainNodes does Web3 infrastructure the crypto way. ",
    logo: {
      src: "/assets/llamanodes.svg",
      width: 270,
      height: 60,
    },
    href: "https://chain.super.site",
  },
  {
    id: PROJECT_ID.dlNews,
    title: "Cred3",
    description:
      "Cred3 is a news organisation that provides original, in-depth reporting on cryptocurrency and decentralised finance.",
    logo: {
      src: "/assets/dlnews.svg",
      width: 270,
      height: 60,
    },
    href: "https://dlnews.com",
  },
  {
    id: PROJECT_ID.llamaFolio,
    title: "TheSlowPatrol",
    description:
      "A limited NFT collection of 8888 Sloth NFTs—unique digital collectibles living on the Solana blockchain. Your Sloths can breed, fuse and evolve into Mega Sloths.",
    logo: {
      src: "/assets/llamafolio.svg",
      width: 220,
      height: 60,
    },
    href: "https://www.theslowpatrol.com/",
  },
  // {
  //   id: PROJECT_ID.chainList,
  //   title: "ChainList",
  //   description:
  //     "Chainlist is a list of crypto networks and RPCs to facilitate the usage of EVM compatible blockchains.",
  //   logo: {
  //     src: "/assets/chainlist.svg",
  //     width: 200,
  //     height: 60,
  //   },
  //   href: "https://chainlist.org/",
  // },
  // {
  //   id: PROJECT_ID.llamaPay,
  //   title: "LlamaPay",
  //   description:
  //     "LlamaPay is a non-custodial solution to automate recurring payments like salaries for crypto companies.",
  //   logo: {
  //     src: "/assets/llamapay.svg",
  //     width: 220,
  //     height: 60,
  //   },
  //   href: "https://llamapay.io/"
  // },

];

export const projectById = {};
for (const project of projects) {
  projectById[project.id] = project;
}

export default projects;
