const jobs = [
    {
      title: "Renewable Energy Engineer",
      image: "images/cog-solid-60.png",
      details:
        "Responsible for designing, developing and maintaining renewable energy systems such as solar, wind, or hydroelectric power.",
      openPositions: "2",
      link: "#",
    },
  
    {
      title: "Environmental Scientist",
      image: "images/data-solid-60.png",
      details:
        "Research and analyze environmental issues, including the impact of climate change, and propose sustainable solutions.",
      openPositions: "3",
      link: "#",
    },
  
    {
      title: "Sustainable Agriculture Specialist",
      image: "images/specialist.png",
      details:
        "Work on promoting sustainable farming practices, optimizing crop yield, and minimizing environmental impact.",
      openPositions: "1",
      link: "#",
    },
  
    {
      title: "Climate Change Analyst",
      image: "images/analyst.png",
      details:
        "Assess and model the effects of climate change, analyze data, and develop strategies for mitigation and adaptation.",
      openPositions: "1",
      link: "#",
    },
  
    {
      title: "Energy Efficiency Consultant",
      image: "images/energy.png",
      details:
        "Advise businesses and organizations on how to improve energy efficiency and reduce their carbon footprint. ",
      openPositions: "4",
      link: "#",
    },
  
    {
      title: "Renewable Energy Project Manager",
      image: "images/manager.png",
      details:
        "Oversee the planning and implementation of renewable energy projects, ensuring they meet environmental standards",
      openPositions: "1",
      link: "#",
    },
    {
      title: "Water Resource Engineer",
      image: "images/water.png",
      details:
        "Develop sustainable water management solutions, considering the impact of climate change on water resources.",
      openPositions: "1",
      link: "#",
    },
    {
      title: "Carbon Offset Analyst",
      image: "images/analyst.png",
      details:
        "Assess and analyze carbon emissions, and develop strategies for companies to offset their carbon footprint.",
      openPositions: "1",
      link: "#",
    },
    // {
    //   title: "Organic Farm Manager",
    //   image: "images/manager.png",
    //   details:
    //     "Manage and operate organic farms, implementing sustainable and environmentally friendly farming practices.",
    //   openPositions: "1",
    //   link: "#",
    // },
  ];
  
  const jobsHeading = document.querySelector(".jobs-list-container h2");
  let jobsContainer = document.querySelector(".jobs-list-container .jobs");
  const jobSearch = document.querySelector(".jobs-list-container .job-search");
  
  let searchTerm = "";
  
  if (jobs.length == 1) {
    jobsHeading.innerHTML = `${jobs.length} Job`;
  } else {
    jobsHeading.innerHTML = `${jobs.length} Jobs`;
  }
  
  const createJobListingCards = () => {
    jobsContainer.innerHTML = "";
  
    jobs.forEach((job) => {
      if (job.title.toLowerCase().includes(searchTerm.toLowerCase())) {
        let jobCard = document.createElement("div");
        jobCard.classList.add("job");
  
        let image = document.createElement("img");
        image.src = job.image;
  
        let title = document.createElement("h3");
        title.innerHTML = job.title;
        title.classList.add("job-title");
  
        let details = document.createElement("div");
        details.innerHTML = job.details;
        details.classList.add("details");
  
        let detailsBtn = document.createElement("a");
        detailsBtn.href = job.link;
        detailsBtn.innerHTML = "More Details";
        detailsBtn.classList.add("details-btn");
  
        let openPositions = document.createElement("span");
        openPositions.classList.add("open-positions");
  
        if (job.openPositions == 1) {
          openPositions.innerHTML = `${job.openPositions} open position`;
        } else {
          openPositions.innerHTML = `${job.openPositions} open positions`;
        }
  
        jobCard.appendChild(image);
        jobCard.appendChild(title);
        jobCard.appendChild(details);
        jobCard.appendChild(detailsBtn);
        jobCard.appendChild(openPositions);
  
        jobsContainer.appendChild(jobCard);
      }
    });
  };
  
  createJobListingCards();
  
  jobSearch.addEventListener("input", (e) => {
    searchTerm = e.target.value;
  
    createJobListingCards();
  });
  



 
