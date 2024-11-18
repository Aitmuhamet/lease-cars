export default {
  namespaced: true,
  state: () => ({
    images: [
      "header-bg-1.jpg",
      "header-bg-2.jpg",
      "header-bg-3.jpg",
      "header-bg-4.jpg",
    ],
    reasons: [
      {
        title: "Top Dealers",
        iconSrc: "reasons-1.svg",
        description:
          "TrueCar Certified Dealers compete for your business by providing discounted pricing on in-stock inventory.",
      },
      {
        title: "Discounted Pricing",
        iconSrc: "reasons-2.svg",
        description:
          "View local inventory from the comfort of home and get access to guaranteed savings on the car of your choice.",
      },
      {
        title: "Lower Payments",
        iconSrc: "reasons-3.svg",
        description:
          "Get discounted pricing when you shop for a car or truck using TrueCar and save on your lease payment.",
      },
      {
        title: "Easy Upgrade",
        iconSrc: "reasons-4.svg",
        description:
          "Easy to upgrade to the newest vehicle model every few years if you would like to be modern and comfortable",
      },
    ],
    leasingInfo: {
      title: "How Does Leasing Work?",
      description:
        "Leasing a vehicle is essentially entering into a long term rental agreement for that vehicle. Unlike a traditional car purchase, you don’t actually own the vehicle. Instead, a leasing company purchases the vehicle from the dealer on your behalf and then you make monthly payments to the leasing company for the duration of your lease. Some leases however, do provide the option to purchase the vehicle at the end of the lease.",
      headingH3:
        "Similar to a short term car rental, there are rules that define:",
      rules: [
        "How much you can drive, stated as annual miles (excess miles are charged at a specified rate)",
        "Types of damage that you may be liable for at the end of your lease",
        "The procedures and costs when you return the vehicle at the end of your lease",
      ],
      note: "Lease contracts are a commitment and ending them early can be difficult and expensive so it is important to consider your circumstances carefully before you decide.",
    },
    welcomeVideo: {
      title: "WELCOME TO D&M LEASING",
      subtitle: "Find out how easy it is to lease from D&M",
    },
    factors: {
      title: "Important Things to Consider",
      subtitle:
        "Depending on your circumstances and what is important to you, a lease could be a great option for your next vehicle. Below are some important factors that may influence your decision.",
      list: [
        {
          imgSrc: "important-things-1.jpg",
          description:
            "Monthly payments on leases are generally 20% - 30% cheaper than loans",
        },
        {
          imgSrc: "important-things-2.jpg",
          description:
            "You may be eligible for a tax break if you use the leased vehicle for business purposes",
        },
        {
          imgSrc: "important-things-3.jpg",
          description:
            "Easy to upgrade to the newest vehicle model every few years",
        },
        {
          imgSrc: "important-things-4.jpg",
          description:
            "There are often fees charged if you drive more than your lease's mileage allowance",
        },
      ],
    },
  }),
  getters: {
    getImages: (state) => state.images,
    getReasons: (state) => state.reasons,
    getLeasingInfo: (state) => state.leasingInfo,
    getWelcomeVideo: (state) => state.welcomeVideo,
    getFactors: (state) => state.factors,
  }
};
