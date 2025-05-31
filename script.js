document.addEventListener("DOMContentLoaded", () => {
  const menuToggle = document.querySelector(".menu-toggle");
  const mainNav = document.querySelector(".main-nav");
  const booksMenu = document.querySelector(".books-menu");
  const seeMoreLink = document.querySelector(".see-more-books");

  // Toggle menu with animation
  menuToggle.addEventListener("click", (e) => {
    e.stopPropagation();

    // Close books menu if open
    if (booksMenu.classList.contains("active")) {
      booksMenu.classList.remove("active");
    }

    const isHidden = mainNav.classList.contains("hidden");
    if (isHidden) {
      mainNav.classList.remove("hidden");
      setTimeout(() => {
        mainNav.style.opacity = "1";
      }, 10);
    } else {
      mainNav.style.opacity = "0";
      setTimeout(() => {
        mainNav.classList.add("hidden");
      }, 300);
    }
  });

  // Show books menu when "See More Books" is clicked
  seeMoreLink.addEventListener("click", (e) => {
    e.preventDefault();

    // Hide main nav
    mainNav.classList.add("hidden");
    mainNav.style.opacity = "0";

    // Show books menu
    booksMenu.classList.add("active");
    // booksMenu.classList.remove("hidden");
    booksMenu.style.visibility = "visible";
    booksMenu.style.opacity = "1";
  });

  // Close menus when clicking outside
  document.addEventListener("click", (e) => {
    const isClickInside =
      mainNav.contains(e.target) ||
      booksMenu.contains(e.target) ||
      menuToggle.contains(e.target) ||
      seeMoreLink.contains(e.target);

    if (!isClickInside) {
      // Hide main nav
      if (!mainNav.classList.contains("hidden")) {
        mainNav.style.opacity = "0";
        setTimeout(() => {
          mainNav.classList.add("hidden");
        }, 300);
      }

      // hide books menu if it is active
      if (booksMenu.classList.contains("active")) {
        booksMenu.style.opacity = "0";
        setTimeout(() => {
          booksMenu.classList.remove("active");
          booksMenu.style.visibility = "hidden";
        }, 300);
      }
    }
  });

  // // Optional: Close both menus if user clicks outside
  // document.addEventListener("click", (e) => {
  //   const isClickInsideMenus =
  //     mainNav.contains(e.target) ||
  //     booksMenu.contains(e.target) ||
  //     menuToggle.contains(e.target) ||
  //     seeMoreLink.contains(e.target);
  //   if (!isClickInsideMenus) {
  //     mainNav.classList.remove("active");
  //     booksMenu.classList.remove("active");
  //   }
  // });

  // Handle navigation click events
  document.querySelectorAll(".main-nav a").forEach((link) => {
    link.addEventListener("click", () => {
      mainNav.classList.add("hidden");
      mainNav.style.opacity = "0";
    });
  });

  // Close menu when clicking outside
  document.addEventListener("click", (e) => {
    if (!menuToggle.contains(e.target) && !mainNav.contains(e.target)) {
      mainNav.classList.add("hidden");
      mainNav.style.opacity = "0";
    }
  });

  // Ensure stars containers maintain consistent padding
  const starsContainers = document.querySelectorAll(".stars-container p");
  function adjustStarsAlignment() {
    starsContainers.forEach((container) => {
      container.style.paddingLeft = "5px";
    });
  }

  window.addEventListener("resize", adjustStarsAlignment);
  adjustStarsAlignment(); // Initial adjustment

  // Movie list data
  const movies = [
    "Passion of the Christ",
    "Sound of Freedom",
    "Razor's Edge",
    "Fried Green Tomatoes",
    "Children of the Corn",
    "My Own Private Idaho",
    "The Crow",
    "The Handmaid's Tale",
    "Person of Interest",
    "Simple Justice",
    "My Own Private Idaho",
    "Hellraiser III",
    "Amos & Andrew",
    "An Innocent Cry",
    "Grace Under Pressure",
    "American Heart",
    "Breaking the Silence",
    "Waiting for the Light",
    "Sandlot",
    "Brothers",
    "The Real McCoy",
    "Preying Mantis",
    "Something to Talk About",
    "Tommy & The Ghost",
    "The Cowboy Way",
    "A Boy's Dream",
    "Vice",
    "Little Heroes",
    "The Rock",
    "Ty Cobb",
    "Kingfish",
    "Power Play",
    "Ritchie Rich",
    "Wyatt Earp",
    "Andersonville",
    "Every Knee Shall Bow",
    "Shattered",
    "Ace Ventura",
    "29th Street",
    "Fall from Grace",
    "Birthright",
    "Past Midnight",
    "Columbia County",
    "In a Child's Name",
    "My Shadow",
    "A Mother's Right",
    "Class Action",
    "Blank Check",
    "Twist of Fate",
    "I Married an Ax Murderer",
    "Twist of Fate",
    "A Promise to Carolyn",
    "Super Mario Brothers",
    "The Road to Wellville",
    "Naked Gun 33",
    "Wild Hearts Can’t be Broken",
    "Body Snatchers III",
    "Death in Small Doses",
    "With Reason to Suspect",
    "G.I. Jane",
    "The Nightman",
    "Fade to Black",
    "Chasers",
    "Getting Even with Dad",
    "Wyatt Earp",
    "Taking Liberty",
    "Renaissance Man",
    "Head Cheerleader",
    "Witch Catcher",
    "Stars Fell on Henrietta",
    "Good Old Boys",
    "Getting In",
    "Sister Island",
    "Heaven’s Prisoner",
    "God is Lonely",
    "The Last Dance",
    "Getting In",
    "Pet Semetary Two",
    "Free Jack",
    "Dog Fight",
    "Sudie & Simpson",
    "The Goodnight Champion",
    "Silent Victim",
    "Rich in Love",
    "Pacific Heights I",
    "Singles",
    "The Count of Monte Cristo",
    "Terror in the Tower",
    "Sibling Rivalry",
    "Stolen Children",
    "Hot House Singles",
    "An Innocent Cry",
    "Dazed & Confused",
    "Made in America",
    "Home Wrecker",
    "Unknown",
    "Deadly Pursuits",
    "Ground Rules",
    "Substitute Wife",
    "Deja Vu",
    "Murder in the First",
    "Murder in New Hampshire",
    "Paul Apostle of Christ",
    "The Thin Red Line",
    "The Game Stands Tall",
    "Someone’s Watching",
    "I Am David",
    "Ride with the Devil",
    "The Horror Story",
    "The Dangerous",
    "Angels in the Outfield",
    "Antelope Chess Game",
    "Somebody’s Waiting",
    "Margaret Mitchell Story",
    "Brinks - The Great Rob",
    "Outlander",
    "Long Weekend",
    "The Prisoner",
    "Madison",
    "Vorlock",
    "Eddie",
    "White Squall",
    "The Silencer",
    "Katie",
    "Pay It Forward",
    "Texas Justice",
    "A Friendly Suit",
    "Texas",
    "Two by Two",
    "No Turning Back",
    "Infidel",
  ];

  // Render movie list
  function renderMovies() {
    const movieContainer = document.querySelector("#filmography .movie-grid");
    if (!movieContainer) return;

    movieContainer.innerHTML = movies
      .map(
        (movie) => `
        <p class="font-courier text-body">${movie}</p>
      `
      )
      .join("");
  }

  renderMovies();

  // Smooth scrolling for navigation links
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault();
      const targetId = this.getAttribute("href");

      // Skip if targetId is just "#"
      if (targetId === "#") return;

      const targetElement = document.querySelector(targetId);
      if (!targetElement) return;

      const headerOffset = document.querySelector("header").offsetHeight + 20;
      const elementPosition = targetElement.getBoundingClientRect().top;
      const offsetPosition =
        elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });

      // Close mobile menu after clicking
      mainNav.classList.add("hidden");
      mainNav.style.opacity = "0";
    });
  });

  // Phone number copy functionality
  const phoneNumber = document.getElementById("phoneNumber");
  if (phoneNumber) {
    phoneNumber.addEventListener("click", async () => {
      try {
        await navigator.clipboard.writeText("(323) 656-3000");

        // Optional: Show feedback
        const originalText = phoneNumber.textContent;
        phoneNumber.textContent = "Copied!";
        setTimeout(() => {
          phoneNumber.textContent = originalText;
        }, 1000);
      } catch (err) {
        console.error("Failed to copy text: ", err);
      }
    });
  }
});
