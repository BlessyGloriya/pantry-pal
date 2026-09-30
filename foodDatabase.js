/* =========================================================
   PANTRYPAL — FOOD DATABASE
   ---------------------------------------------------------
   This database contains typical storage-life estimates for
   fresh foods under appropriate home-storage conditions.

   IMPORTANT:
   These are NOT guaranteed expiry dates.

   room:
       Typical fresh-life at suitable room/counter conditions.

   refrigerator:
       Typical fresh-life at <= 4°C / 40°F.

   freezer:
       Typical quality/storage window when continuously frozen
       at <= -18°C / 0°F.

   null = room/freezer storage is not recommended or a useful
          general value is not assigned.

   The application uses these values to ESTIMATE a freshness
   window when the user does not know an actual expiry date.
========================================================= */


const foodDatabase = [

    /* =====================================================
       DAIRY
    ===================================================== */

    {
        id: "milk",
        name: "Milk",
        emoji: "🥛",
        category: "dairy",
        defaultUnit: "liters",

        lifespan: {
            room: null,
            refrigerator: 7,
            freezer: 30
        },

        note:
            "Fresh milk should be refrigerated promptly. Once opened, use the package guidance and check for spoilage."
    },


    {
        id: "buttermilk",
        name: "Buttermilk",
        emoji: "🥛",
        category: "dairy",
        defaultUnit: "liters",

        lifespan: {
            room: null,
            refrigerator: 7,
            freezer: 30
        },

        note:
            "Keep refrigerated. Quality and usable life depend on whether it is homemade or commercially prepared."
    },


    {
        id: "curd",
        name: "Curd",
        emoji: "🥣",
        category: "dairy",
        defaultUnit: "grams",

        lifespan: {
            room: null,
            refrigerator: 7,
            freezer: null
        },

        note:
            "Keep curd refrigerated. Homemade curd can vary significantly depending on preparation and hygiene."
    },


    {
        id: "yogurt",
        name: "Yogurt",
        emoji: "🥣",
        category: "dairy",
        defaultUnit: "grams",

        lifespan: {
            room: null,
            refrigerator: 7,
            freezer: 30
        },

        note:
            "Keep refrigerated and follow the package date for commercial yogurt."
    },


    {
        id: "paneer",
        name: "Paneer",
        emoji: "🧀",
        category: "dairy",
        defaultUnit: "grams",

        lifespan: {
            room: null,
            refrigerator: 3,
            freezer: 60
        },

        note:
            "Fresh paneer is highly perishable. Keep refrigerated and use quickly."
    },


    {
        id: "cottage-cheese",
        name: "Cottage Cheese",
        emoji: "🧀",
        category: "dairy",
        defaultUnit: "grams",

        lifespan: {
            room: null,
            refrigerator: 7,
            freezer: 30
        },

        note:
            "Keep refrigerated. Follow the package date for commercially packed products."
    },


    {
        id: "cream",
        name: "Fresh Cream",
        emoji: "🥛",
        category: "dairy",
        defaultUnit: "ml",

        lifespan: {
            room: null,
            refrigerator: 5,
            freezer: 30
        },

        note:
            "Once opened, keep refrigerated and use according to the package instructions."
    },


    {
        id: "whipping-cream",
        name: "Whipping Cream",
        emoji: "🥛",
        category: "dairy",
        defaultUnit: "ml",

        lifespan: {
            room: null,
            refrigerator: 5,
            freezer: 30
        },

        note:
            "Keep cold. Product-specific instructions should take priority."
    },


    {
        id: "butter",
        name: "Butter",
        emoji: "🧈",
        category: "dairy",
        defaultUnit: "grams",

        lifespan: {
            room: 2,
            refrigerator: 60,
            freezer: 180
        },

        note:
            "Butter can tolerate short periods at cool room temperature, but refrigeration extends quality."
    },


    {
        id: "cheddar-cheese",
        name: "Cheddar Cheese",
        emoji: "🧀",
        category: "dairy",
        defaultUnit: "grams",

        lifespan: {
            room: 2,
            refrigerator: 28,
            freezer: 180
        },

        note:
            "Hard cheese generally stores longer than fresh cheese. Keep covered and refrigerated for best quality."
    },


    {
        id: "mozzarella",
        name: "Mozzarella",
        emoji: "🧀",
        category: "dairy",
        defaultUnit: "grams",

        lifespan: {
            room: null,
            refrigerator: 7,
            freezer: 60
        },

        note:
            "Fresh mozzarella is more perishable than hard cheese."
    },


    {
        id: "ghee",
        name: "Ghee",
        emoji: "🧈",
        category: "dairy",
        defaultUnit: "grams",

        lifespan: {
            room: 90,
            refrigerator: 180,
            freezer: null
        },

        note:
            "Store tightly covered in a cool, dry place. Quality depends strongly on moisture and contamination."
    },


    /* =====================================================
       EGGS
    ===================================================== */

    {
        id: "eggs",
        name: "Eggs",
        emoji: "🥚",
        category: "eggs",
        defaultUnit: "pieces",

        lifespan: {
            room: null,
            refrigerator: 35,
            freezer: null
        },

        note:
            "Raw shell eggs are commonly refrigerated for 3–5 weeks. Keep them refrigerated."
    },


    {
        id: "boiled-eggs",
        name: "Boiled Eggs",
        emoji: "🥚",
        category: "eggs",
        defaultUnit: "pieces",

        lifespan: {
            room: null,
            refrigerator: 7,
            freezer: null
        },

        note:
            "Hard-cooked eggs can be refrigerated for up to about 7 days."
    },


    {
        id: "egg-whites",
        name: "Raw Egg Whites",
        emoji: "🥚",
        category: "eggs",
        defaultUnit: "pieces",

        lifespan: {
            room: null,
            refrigerator: 4,
            freezer: 90
        },

        note:
            "Separate raw egg whites are highly perishable and should remain refrigerated."
    },


    {
        id: "egg-yolks",
        name: "Raw Egg Yolks",
        emoji: "🥚",
        category: "eggs",
        defaultUnit: "pieces",

        lifespan: {
            room: null,
            refrigerator: 4,
            freezer: 90
        },

        note:
            "Raw yolks should be refrigerated and used promptly."
    },


    /* =====================================================
       MEAT
    ===================================================== */

    {
        id: "chicken",
        name: "Chicken",
        emoji: "🍗",
        category: "meat",
        defaultUnit: "kg",

        lifespan: {
            room: null,
            refrigerator: 2,
            freezer: 365
        },

        note:
            "Raw chicken should be refrigerated or frozen within 1–2 days."
    },


    {
        id: "chicken-breast",
        name: "Chicken Breast",
        emoji: "🍗",
        category: "meat",
        defaultUnit: "kg",

        lifespan: {
            room: null,
            refrigerator: 2,
            freezer: 270
        },

        note:
            "Raw poultry is generally a 1–2 day refrigerator item."
    },


    {
        id: "chicken-thigh",
        name: "Chicken Thigh",
        emoji: "🍗",
        category: "meat",
        defaultUnit: "kg",

        lifespan: {
            room: null,
            refrigerator: 2,
            freezer: 270
        },

        note:
            "Keep raw poultry refrigerated and use or freeze promptly."
    },


    {
        id: "chicken-wings",
        name: "Chicken Wings",
        emoji: "🍗",
        category: "meat",
        defaultUnit: "kg",

        lifespan: {
            room: null,
            refrigerator: 2,
            freezer: 270
        },

        note:
            "Raw chicken wings should be used or frozen within about 1–2 days."
    },


    {
        id: "mutton",
        name: "Mutton",
        emoji: "🥩",
        category: "meat",
        defaultUnit: "kg",

        lifespan: {
            room: null,
            refrigerator: 3,
            freezer: 270
        },

        note:
            "Fresh lamb/mutton cuts generally have a short refrigerated storage window."
    },


    {
        id: "lamb",
        name: "Lamb",
        emoji: "🥩",
        category: "meat",
        defaultUnit: "kg",

        lifespan: {
            room: null,
            refrigerator: 3,
            freezer: 270
        },

        note:
            "Fresh lamb steaks, chops and roasts are generally refrigerated for 3–5 days."
    },


    {
        id: "beef",
        name: "Beef",
        emoji: "🥩",
        category: "meat",
        defaultUnit: "kg",

        lifespan: {
            room: null,
            refrigerator: 3,
            freezer: 365
        },

        note:
            "Fresh beef cuts generally keep about 3–5 days refrigerated."
    },


    {
        id: "beef-steak",
        name: "Beef Steak",
        emoji: "🥩",
        category: "meat",
        defaultUnit: "kg",

        lifespan: {
            room: null,
            refrigerator: 3,
            freezer: 365
        },

        note:
            "Fresh beef steaks generally have a 3–5 day refrigerator window."
    },


    {
        id: "ground-beef",
        name: "Ground Beef",
        emoji: "🥩",
        category: "meat",
        defaultUnit: "kg",

        lifespan: {
            room: null,
            refrigerator: 2,
            freezer: 120
        },

        note:
            "Ground meat should generally be used or frozen within 1–2 days."
    },


    {
        id: "pork",
        name: "Pork",
        emoji: "🥩",
        category: "meat",
        defaultUnit: "kg",

        lifespan: {
            room: null,
            refrigerator: 3,
            freezer: 365
        },

        note:
            "Fresh pork steaks, chops and roasts generally keep 3–5 days refrigerated."
    },


    {
        id: "pork-chop",
        name: "Pork Chops",
        emoji: "🥩",
        category: "meat",
        defaultUnit: "kg",

        lifespan: {
            room: null,
            refrigerator: 3,
            freezer: 365
        },

        note:
            "Fresh pork chops generally have a 3–5 day refrigerator window."
    },


    {
        id: "goat-meat",
        name: "Goat Meat",
        emoji: "🥩",
        category: "meat",
        defaultUnit: "kg",

        lifespan: {
            room: null,
            refrigerator: 3,
            freezer: 270
        },

        note:
            "Fresh goat meat is highly perishable and should remain refrigerated."
    },


    {
        id: "turkey",
        name: "Turkey",
        emoji: "🦃",
        category: "meat",
        defaultUnit: "kg",

        lifespan: {
            room: null,
            refrigerator: 2,
            freezer: 365
        },

        note:
            "Raw poultry generally has a 1–2 day refrigerator window."
    },


    {
        id: "sausage",
        name: "Raw Sausage",
        emoji: "🌭",
        category: "meat",
        defaultUnit: "kg",

        lifespan: {
            room: null,
            refrigerator: 2,
            freezer: 60
        },

        note:
            "Raw sausage generally should be used or frozen within 1–2 days."
    },


    {
        id: "bacon",
        name: "Bacon",
        emoji: "🥓",
        category: "meat",
        defaultUnit: "grams",

        lifespan: {
            room: null,
            refrigerator: 7,
            freezer: 30
        },

        note:
            "Refrigerated bacon has a short storage window; follow the package instructions."
    },


    /* =====================================================
       SEAFOOD
    ===================================================== */

    {
        id: "salmon",
        name: "Salmon",
        emoji: "🐟",
        category: "seafood",
        defaultUnit: "kg",

        lifespan: {
            room: null,
            refrigerator: 2,
            freezer: 90
        },

        note:
            "Fresh fish is highly perishable. Keep cold and use quickly."
    },


    {
        id: "tuna-fresh",
        name: "Fresh Tuna",
        emoji: "🐟",
        category: "seafood",
        defaultUnit: "kg",

        lifespan: {
            room: null,
            refrigerator: 2,
            freezer: 90
        },

        note:
            "Fresh fish should generally be refrigerated for only a short period."
    },


    {
        id: "sardines",
        name: "Sardines",
        emoji: "🐟",
        category: "seafood",
        defaultUnit: "kg",

        lifespan: {
            room: null,
            refrigerator: 2,
            freezer: 90
        },

        note:
            "Fresh sardines are highly perishable."
    },


    {
        id: "mackerel",
        name: "Mackerel",
        emoji: "🐟",
        category: "seafood",
        defaultUnit: "kg",

        lifespan: {
            room: null,
            refrigerator: 2,
            freezer: 90
        },

        note:
            "Fresh oily fish should be kept very cold and used promptly."
    },


    {
        id: "rohu-fish",
        name: "Rohu Fish",
        emoji: "🐟",
        category: "seafood",
        defaultUnit: "kg",

        lifespan: {
            room: null,
            refrigerator: 2,
            freezer: 90
        },

        note:
            "Fresh fish should remain refrigerated or frozen."
    },


    {
        id: "pomfret",
        name: "Pomfret",
        emoji: "🐟",
        category: "seafood",
        defaultUnit: "kg",

        lifespan: {
            room: null,
            refrigerator: 2,
            freezer: 90
        },

        note:
            "Fresh fish is highly perishable and should be stored cold."
    },


    {
        id: "prawns",
        name: "Prawns",
        emoji: "🍤",
        category: "seafood",
        defaultUnit: "kg",

        lifespan: {
            room: null,
            refrigerator: 3,
            freezer: 180
        },

        note:
            "Fresh shrimp/prawns generally have a short refrigerated life."
    },


    {
        id: "shrimp",
        name: "Shrimp",
        emoji: "🍤",
        category: "seafood",
        defaultUnit: "kg",

        lifespan: {
            room: null,
            refrigerator: 3,
            freezer: 180
        },

        note:
            "Fresh shrimp should be kept refrigerated and used promptly."
    },


    {
        id: "crab",
        name: "Crab",
        emoji: "🦀",
        category: "seafood",
        defaultUnit: "kg",

        lifespan: {
            room: null,
            refrigerator: 2,
            freezer: 90
        },

        note:
            "Fresh crab meat is highly perishable."
    },


    {
        id: "squid",
        name: "Squid",
        emoji: "🦑",
        category: "seafood",
        defaultUnit: "kg",

        lifespan: {
            room: null,
            refrigerator: 2,
            freezer: 180
        },

        note:
            "Fresh squid should be kept refrigerated and used quickly."
    },


    /* =====================================================
       VEGETABLES
    ===================================================== */

    {
        id: "tomato",
        name: "Tomato",
        emoji: "🍅",
        category: "vegetables",
        defaultUnit: "kg",

        lifespan: {
            room: 5,
            refrigerator: 7,
            freezer: 60
        },

        note:
            "Whole tomatoes are generally best kept at cool room temperature until ripe; refrigeration can reduce quality."
    },


    {
        id: "onion",
        name: "Onion",
        emoji: "🧅",
        category: "vegetables",
        defaultUnit: "kg",

        lifespan: {
            room: 30,
            refrigerator: 30,
            freezer: 90
        },

        note:
            "Store whole dry onions in a cool, dry, ventilated place."
    },


    {
        id: "potato",
        name: "Potato",
        emoji: "🥔",
        category: "vegetables",
        defaultUnit: "kg",

        lifespan: {
            room: 30,
            refrigerator: 14,
            freezer: 90
        },

        note:
            "Whole potatoes are better stored in a cool, dark, dry place rather than a typical refrigerator."
    },


    {
        id: "sweet-potato",
        name: "Sweet Potato",
        emoji: "🍠",
        category: "vegetables",
        defaultUnit: "kg",

        lifespan: {
            room: 30,
            refrigerator: 14,
            freezer: 90
        },

        note:
            "Store whole sweet potatoes in a cool, dry place."
    },


    {
        id: "carrot",
        name: "Carrot",
        emoji: "🥕",
        category: "vegetables",
        defaultUnit: "kg",

        lifespan: {
            room: 3,
            refrigerator: 21,
            freezer: 90
        },

        note:
            "Refrigeration significantly extends the freshness of whole carrots."
    },


    {
        id: "beetroot",
        name: "Beetroot",
        emoji: "🫜",
        category: "vegetables",
        defaultUnit: "kg",

        lifespan: {
            room: 3,
            refrigerator: 21,
            freezer: 90
        },

        note:
            "Store beets refrigerated for better freshness."
    },


    {
        id: "spinach",
        name: "Spinach",
        emoji: "🥬",
        category: "vegetables",
        defaultUnit: "grams",

        lifespan: {
            room: null,
            refrigerator: 7,
            freezer: 90
        },

        note:
            "Fresh spinach is best refrigerated and used within about a week for good quality."
    },


    {
        id: "lettuce",
        name: "Lettuce",
        emoji: "🥬",
        category: "vegetables",
        defaultUnit: "pieces",

        lifespan: {
            room: null,
            refrigerator: 7,
            freezer: null
        },

        note:
            "Keep leafy greens refrigerated and dry."
    },


    {
        id: "cabbage",
        name: "Cabbage",
        emoji: "🥬",
        category: "vegetables",
        defaultUnit: "pieces",

        lifespan: {
            room: 3,
            refrigerator: 30,
            freezer: 90
        },

        note:
            "Whole cabbage lasts substantially longer refrigerated than at room temperature."
    },


    {
        id: "cauliflower",
        name: "Cauliflower",
        emoji: "🥦",
        category: "vegetables",
        defaultUnit: "pieces",

        lifespan: {
            room: 2,
            refrigerator: 7,
            freezer: 90
        },

        note:
            "Keep cauliflower refrigerated for best quality."
    },


    {
        id: "broccoli",
        name: "Broccoli",
        emoji: "🥦",
        category: "vegetables",
        defaultUnit: "pieces",

        lifespan: {
            room: null,
            refrigerator: 7,
            freezer: 90
        },

        note:
            "Fresh broccoli should be refrigerated."
    },


    {
        id: "green-beans",
        name: "Green Beans",
        emoji: "🫛",
        category: "vegetables",
        defaultUnit: "grams",

        lifespan: {
            room: 2,
            refrigerator: 7,
            freezer: 90
        },

        note:
            "Green beans keep better under cool, humid conditions."
    },


    {
        id: "peas",
        name: "Green Peas",
        emoji: "🫛",
        category: "vegetables",
        defaultUnit: "grams",

        lifespan: {
            room: null,
            refrigerator: 7,
            freezer: 90
        },

        note:
            "Fresh peas are highly perishable and should be chilled promptly."
    },


    {
        id: "capsicum",
        name: "Capsicum",
        emoji: "🫑",
        category: "vegetables",
        defaultUnit: "kg",

        lifespan: {
            room: 3,
            refrigerator: 14,
            freezer: 90
        },

        note:
            "Bell peppers are best kept cool and refrigerated for longer storage."
    },


    {
        id: "green-chilli",
        name: "Green Chilli",
        emoji: "🌶️",
        category: "vegetables",
        defaultUnit: "grams",

        lifespan: {
            room: 3,
            refrigerator: 10,
            freezer: 90
        },

        note:
            "Refrigerate fresh chillies to extend freshness."
    },


    {
        id: "ginger",
        name: "Ginger",
        emoji: "🫚",
        category: "vegetables",
        defaultUnit: "grams",

        lifespan: {
            room: 7,
            refrigerator: 21,
            freezer: 180
        },

        note:
            "Whole ginger keeps longer refrigerated and can also be frozen."
    },


    {
        id: "garlic",
        name: "Garlic",
        emoji: "🧄",
        category: "vegetables",
        defaultUnit: "pieces",

        lifespan: {
            room: 60,
            refrigerator: 30,
            freezer: 90
        },

        note:
            "Whole garlic bulbs prefer a cool, dry, ventilated place."
    },


    {
        id: "cucumber",
        name: "Cucumber",
        emoji: "🥒",
        category: "vegetables",
        defaultUnit: "pieces",

        lifespan: {
            room: 3,
            refrigerator: 7,
            freezer: null
        },

        note:
            "Cucumbers prefer cool conditions but can suffer chilling injury if stored too cold for long."
    },


    {
        id: "brinjal",
        name: "Brinjal",
        emoji: "🍆",
        category: "vegetables",
        defaultUnit: "kg",

        lifespan: {
            room: 3,
            refrigerator: 7,
            freezer: null
        },

        note:
            "Eggplant prefers cool rather than very cold storage."
    },


    {
        id: "okra",
        name: "Okra",
        emoji: "🌱",
        category: "vegetables",
        defaultUnit: "grams",

        lifespan: {
            room: 2,
            refrigerator: 7,
            freezer: 90
        },

        note:
            "Fresh okra should be refrigerated for better quality."
    },


    {
        id: "drumstick",
        name: "Drumstick",
        emoji: "🌿",
        category: "vegetables",
        defaultUnit: "pieces",

        lifespan: {
            room: 2,
            refrigerator: 7,
            freezer: 90
        },

        note:
            "Fresh moringa pods are best refrigerated."
    },


    {
        id: "bitter-gourd",
        name: "Bitter Gourd",
        emoji: "🥒",
        category: "vegetables",
        defaultUnit: "kg",

        lifespan: {
            room: 2,
            refrigerator: 7,
            freezer: 60
        },

        note:
            "Refrigerate fresh bitter gourd."
    },


    {
        id: "bottle-gourd",
        name: "Bottle Gourd",
        emoji: "🥒",
        category: "vegetables",
        defaultUnit: "pieces",

        lifespan: {
            room: 3,
            refrigerator: 7,
            freezer: 60
        },

        note:
            "Keep fresh bottle gourd cool and use promptly after cutting."
    },


    {
        id: "ridge-gourd",
        name: "Ridge Gourd",
        emoji: "🥒",
        category: "vegetables",
        defaultUnit: "pieces",

        lifespan: {
            room: 3,
            refrigerator: 7,
            freezer: 60
        },

        note:
            "Refrigerate for longer freshness."
    },


    {
        id: "pumpkin",
        name: "Pumpkin",
        emoji: "🎃",
        category: "vegetables",
        defaultUnit: "kg",

        lifespan: {
            room: 60,
            refrigerator: 7,
            freezer: 180
        },

        note:
            "Whole winter pumpkin can last much longer in a cool, dry place. Cut pumpkin is highly perishable."
    },


    {
        id: "corn",
        name: "Sweet Corn",
        emoji: "🌽",
        category: "vegetables",
        defaultUnit: "pieces",

        lifespan: {
            room: 1,
            refrigerator: 7,
            freezer: 180
        },

        note:
            "Fresh corn loses sweetness quickly and should be refrigerated."
    },


    {
        id: "mushroom",
        name: "Mushroom",
        emoji: "🍄",
        category: "vegetables",
        defaultUnit: "grams",

        lifespan: {
            room: 1,
            refrigerator: 7,
            freezer: null
        },

        note:
            "Fresh mushrooms are best refrigerated in suitable packaging."
    },


    {
        id: "celery",
        name: "Celery",
        emoji: "🌿",
        category: "vegetables",
        defaultUnit: "bunches",

        lifespan: {
            room: 1,
            refrigerator: 14,
            freezer: 90
        },

        note:
            "Celery keeps better refrigerated under humid conditions."
    },


    {
        id: "radish",
        name: "Radish",
        emoji: "🫜",
        category: "vegetables",
        defaultUnit: "grams",

        lifespan: {
            room: 2,
            refrigerator: 14,
            freezer: 90
        },

        note:
            "Remove greens if present and refrigerate for longer storage."
    },


    {
        id: "spring-onion",
        name: "Spring Onion",
        emoji: "🌱",
        category: "vegetables",
        defaultUnit: "bunches",

        lifespan: {
            room: 1,
            refrigerator: 7,
            freezer: 60
        },

        note:
            "Fresh green onions are best refrigerated."
    },


    {
        id: "coriander",
        name: "Coriander",
        emoji: "🌿",
        category: "vegetables",
        defaultUnit: "bunches",

        lifespan: {
            room: 1,
            refrigerator: 7,
            freezer: 30
        },

        note:
            "Fresh coriander wilts quickly at room temperature."
    },


    {
        id: "mint",
        name: "Mint",
        emoji: "🌿",
        category: "vegetables",
        defaultUnit: "bunches",

        lifespan: {
            room: 1,
            refrigerator: 7,
            freezer: 30
        },

        note:
            "Fresh mint should be kept cool and hydrated appropriately."
    },


    /* =====================================================
       FRUITS
    ===================================================== */

    {
        id: "apple",
        name: "Apple",
        emoji: "🍎",
        category: "fruits",
        defaultUnit: "kg",

        lifespan: {
            room: 7,
            refrigerator: 30,
            freezer: 180
        },

        note:
            "Apples can remain at room temperature for several days and last much longer refrigerated."
    },


    {
        id: "banana",
        name: "Banana",
        emoji: "🍌",
        category: "fruits",
        defaultUnit: "kg",

        lifespan: {
            room: 5,
            refrigerator: 7,
            freezer: 90
        },

        note:
            "Bananas ripen quickly at room temperature. Refrigeration slows ripening but darkens the peel."
    },


    {
        id: "orange",
        name: "Orange",
        emoji: "🍊",
        category: "fruits",
        defaultUnit: "kg",

        lifespan: {
            room: 10,
            refrigerator: 21,
            freezer: 90
        },

        note:
            "Whole citrus fruits generally keep longer when refrigerated."
    },


    {
        id: "sweet-lime",
        name: "Sweet Lime",
        emoji: "🍋",
        category: "fruits",
        defaultUnit: "kg",

        lifespan: {
            room: 7,
            refrigerator: 21,
            freezer: 90
        },

        note:
            "Refrigeration can extend the freshness of whole sweet lime."
    },


    {
        id: "lemon",
        name: "Lemon",
        emoji: "🍋",
        category: "fruits",
        defaultUnit: "kg",

        lifespan: {
            room: 7,
            refrigerator: 21,
            freezer: 90
        },

        note:
            "Whole lemons last longer refrigerated than on the counter."
    },


    {
        id: "lime",
        name: "Lime",
        emoji: "🍋",
        category: "fruits",
        defaultUnit: "kg",

        lifespan: {
            room: 7,
            refrigerator: 21,
            freezer: 90
        },

        note:
            "Whole limes keep longer refrigerated."
    },


    {
        id: "grapes",
        name: "Grapes",
        emoji: "🍇",
        category: "fruits",
        defaultUnit: "grams",

        lifespan: {
            room: 2,
            refrigerator: 10,
            freezer: 90
        },

        note:
            "Fresh grapes should be refrigerated for best quality."
    },


    {
        id: "strawberry",
        name: "Strawberry",
        emoji: "🍓",
        category: "fruits",
        defaultUnit: "grams",

        lifespan: {
            room: 1,
            refrigerator: 5,
            freezer: 180
        },

        note:
            "Fresh strawberries are highly perishable."
    },


    {
        id: "blueberry",
        name: "Blueberry",
        emoji: "🫐",
        category: "fruits",
        defaultUnit: "grams",

        lifespan: {
            room: 1,
            refrigerator: 7,
            freezer: 180
        },

        note:
            "Fresh blueberries should be refrigerated."
    },


    {
        id: "raspberry",
        name: "Raspberry",
        emoji: "🫐",
        category: "fruits",
        defaultUnit: "grams",

        lifespan: {
            room: null,
            refrigerator: 3,
            freezer: 180
        },

        note:
            "Raspberries are very delicate and highly perishable."
    },


    {
        id: "blackberry",
        name: "Blackberry",
        emoji: "🫐",
        category: "fruits",
        defaultUnit: "grams",

        lifespan: {
            room: null,
            refrigerator: 3,
            freezer: 180
        },

        note:
            "Blackberries are highly perishable and should remain refrigerated."
    },


    {
        id: "mango",
        name: "Mango",
        emoji: "🥭",
        category: "fruits",
        defaultUnit: "kg",

        lifespan: {
            room: 5,
            refrigerator: 7,
            freezer: 180
        },

        note:
            "Unripe mangoes can ripen at room temperature; refrigerate ripe mangoes."
    },


    {
        id: "papaya",
        name: "Papaya",
        emoji: "🥭",
        category: "fruits",
        defaultUnit: "kg",

        lifespan: {
            room: 5,
            refrigerator: 7,
            freezer: 180
        },

        note:
            "Ripe papaya should be refrigerated."
    },


    {
        id: "guava",
        name: "Guava",
        emoji: "🍐",
        category: "fruits",
        defaultUnit: "kg",

        lifespan: {
            room: 3,
            refrigerator: 7,
            freezer: 180
        },

        note:
            "Ripe guava is perishable and benefits from refrigeration."
    },


    {
        id: "pineapple",
        name: "Pineapple",
        emoji: "🍍",
        category: "fruits",
        defaultUnit: "pieces",

        lifespan: {
            room: 3,
            refrigerator: 5,
            freezer: 180
        },

        note:
            "Whole pineapple has limited room-temperature life once ripe. Cut pineapple should be refrigerated."
    },


    {
        id: "watermelon",
        name: "Watermelon",
        emoji: "🍉",
        category: "fruits",
        defaultUnit: "pieces",

        lifespan: {
            room: 7,
            refrigerator: 14,
            freezer: 30
        },

        note:
            "Whole watermelon can be stored cool; cut watermelon must be refrigerated."
    },


    {
        id: "muskmelon",
        name: "Muskmelon",
        emoji: "🍈",
        category: "fruits",
        defaultUnit: "pieces",

        lifespan: {
            room: 3,
            refrigerator: 7,
            freezer: 30
        },

        note:
            "Refrigerate ripe or cut melon."
    },


    {
        id: "pomegranate",
        name: "Pomegranate",
        emoji: "🍎",
        category: "fruits",
        defaultUnit: "pieces",

        lifespan: {
            room: 7,
            refrigerator: 30,
            freezer: 180
        },

        note:
            "Whole pomegranates generally keep considerably longer refrigerated."
    },


    {
        id: "pear",
        name: "Pear",
        emoji: "🍐",
        category: "fruits",
        defaultUnit: "kg",

        lifespan: {
            room: 5,
            refrigerator: 14,
            freezer: 180
        },

        note:
            "Allow pears to ripen at room temperature, then refrigerate."
    },


    {
        id: "peach",
        name: "Peach",
        emoji: "🍑",
        category: "fruits",
        defaultUnit: "kg",

        lifespan: {
            room: 3,
            refrigerator: 5,
            freezer: 180
        },

        note:
            "Allow to ripen at room temperature, then refrigerate."
    },


    {
        id: "plum",
        name: "Plum",
        emoji: "🫐",
        category: "fruits",
        defaultUnit: "kg",

        lifespan: {
            room: 3,
            refrigerator: 7,
            freezer: 180
        },

        note:
            "Ripen at room temperature and refrigerate when ripe."
    },


    {
        id: "kiwi",
        name: "Kiwi",
        emoji: "🥝",
        category: "fruits",
        defaultUnit: "kg",

        lifespan: {
            room: 5,
            refrigerator: 21,
            freezer: 180
        },

        note:
            "Kiwi can ripen at room temperature and then be refrigerated."
    },


    {
        id: "avocado",
        name: "Avocado",
        emoji: "🥑",
        category: "fruits",
        defaultUnit: "pieces",

        lifespan: {
            room: 5,
            refrigerator: 5,
            freezer: 90
        },

        note:
            "Whole unripe avocado can ripen at room temperature; refrigerate once ripe."
    },


    {
        id: "dragon-fruit",
        name: "Dragon Fruit",
        emoji: "🐉",
        category: "fruits",
        defaultUnit: "pieces",

        lifespan: {
            room: 3,
            refrigerator: 7,
            freezer: 90
        },

        note:
            "Ripe dragon fruit is best refrigerated."
    },


    {
        id: "custard-apple",
        name: "Custard Apple",
        emoji: "🍈",
        category: "fruits",
        defaultUnit: "kg",

        lifespan: {
            room: 3,
            refrigerator: 5,
            freezer: 60
        },

        note:
            "Custard apple ripens quickly and becomes soft rapidly."
    },


    {
        id: "chikoo",
        name: "Chikoo",
        emoji: "🥝",
        category: "fruits",
        defaultUnit: "kg",

        lifespan: {
            room: 4,
            refrigerator: 7,
            freezer: 60
        },

        note:
            "Ripe chikoo is soft and perishable."
    },


    {
        id: "jackfruit",
        name: "Jackfruit",
        emoji: "🍈",
        category: "fruits",
        defaultUnit: "kg",

        lifespan: {
            room: 2,
            refrigerator: 5,
            freezer: 90
        },

        note:
            "Cut jackfruit is highly perishable and should be refrigerated."
    },


    {
        id: "fig",
        name: "Fig",
        emoji: "🫐",
        category: "fruits",
        defaultUnit: "grams",

        lifespan: {
            room: 2,
            refrigerator: 5,
            freezer: 90
        },

        note:
            "Fresh figs are delicate and should be refrigerated."
    },


    {
        id: "cherry",
        name: "Cherry",
        emoji: "🍒",
        category: "fruits",
        defaultUnit: "grams",

        lifespan: {
            room: 1,
            refrigerator: 7,
            freezer: 180
        },

        note:
            "Fresh cherries should be refrigerated promptly."
    },


    {
        id: "lychee",
        name: "Lychee",
        emoji: "🍒",
        category: "fruits",
        defaultUnit: "grams",

        lifespan: {
            room: 2,
            refrigerator: 7,
            freezer: 90
        },

        note:
            "Fresh lychee is perishable and benefits from refrigeration."
    },


    {
        id: "passion-fruit",
        name: "Passion Fruit",
        emoji: "🟣",
        category: "fruits",
        defaultUnit: "pieces",

        lifespan: {
            room: 7,
            refrigerator: 14,
            freezer: 90
        },

        note:
            "Whole passion fruit keeps longer under cool conditions."
    },


    /* =====================================================
       BAKERY
    ===================================================== */

    {
        id: "bread",
        name: "Bread",
        emoji: "🍞",
        category: "bakery",
        defaultUnit: "packets",

        lifespan: {
            room: 5,
            refrigerator: 7,
            freezer: 90
        },

        note:
            "Bread storage depends strongly on humidity and packaging. Freezing is useful for longer storage."
    },


    {
        id: "chapati",
        name: "Chapati",
        emoji: "🫓",
        category: "bakery",
        defaultUnit: "pieces",

        lifespan: {
            room: 1,
            refrigerator: 3,
            freezer: 30
        },

        note:
            "Fresh homemade chapati is perishable and should be refrigerated if not eaten soon."
    },


    {
        id: "paratha",
        name: "Paratha",
        emoji: "🫓",
        category: "bakery",
        defaultUnit: "pieces",

        lifespan: {
            room: 1,
            refrigerator: 3,
            freezer: 30
        },

        note:
            "Fresh cooked paratha should be refrigerated for storage."
    },


    {
        id: "naan",
        name: "Naan",
        emoji: "🫓",
        category: "bakery",
        defaultUnit: "pieces",

        lifespan: {
            room: 1,
            refrigerator: 3,
            freezer: 30
        },

        note:
            "Fresh naan is best eaten promptly; refrigerate leftovers."
    },


    {
        id: "dosa-batter",
        name: "Dosa Batter",
        emoji: "🥞",
        category: "bakery",
        defaultUnit: "liters",

        lifespan: {
            room: 1,
            refrigerator: 5,
            freezer: 30
        },

        note:
            "Fermented batter should be refrigerated after fermentation."
    },


    {
        id: "idli-batter",
        name: "Idli Batter",
        emoji: "🍚",
        category: "bakery",
        defaultUnit: "liters",

        lifespan: {
            room: 1,
            refrigerator: 5,
            freezer: 30
        },

        note:
            "Keep fermented batter refrigerated after preparation."
    },


    {
        id: "cake",
        name: "Cake",
        emoji: "🍰",
        category: "bakery",
        defaultUnit: "pieces",

        lifespan: {
            room: 2,
            refrigerator: 5,
            freezer: 60
        },

        note:
            "Storage varies greatly with frosting and filling."
    },


    {
        id: "croissant",
        name: "Croissant",
        emoji: "🥐",
        category: "bakery",
        defaultUnit: "pieces",

        lifespan: {
            room: 2,
            refrigerator: 4,
            freezer: 30
        },

        note:
            "Fresh bakery croissants are best consumed quickly."
    },


    {
        id: "bun",
        name: "Bun",
        emoji: "🍔",
        category: "bakery",
        defaultUnit: "pieces",

        lifespan: {
            room: 3,
            refrigerator: 5,
            freezer: 30
        },

        note:
            "Fresh bakery buns have shorter lives than commercially packaged shelf-stable bread."
    },


    {
        id: "pav",
        name: "Pav",
        emoji: "🍞",
        category: "bakery",
        defaultUnit: "pieces",

        lifespan: {
            room: 3,
            refrigerator: 5,
            freezer: 30
        },

        note:
            "Fresh pav is best consumed quickly or frozen."
    },


    /* =====================================================
       GRAINS / DRY FOODS
    ===================================================== */

    {
        id: "cooked-rice",
        name: "Cooked Rice",
        emoji: "🍚",
        category: "grains",
        defaultUnit: "grams",

        lifespan: {
            room: null,
            refrigerator: 4,
            freezer: 30
        },

        note:
            "Cooked rice should be cooled promptly and refrigerated. Do not leave cooked rice at room temperature for extended periods."
    },


    {
        id: "cooked-pasta",
        name: "Cooked Pasta",
        emoji: "🍝",
        category: "grains",
        defaultUnit: "grams",

        lifespan: {
            room: null,
            refrigerator: 4,
            freezer: 60
        },

        note:
            "Refrigerate cooked pasta promptly."
    },


    {
        id: "tofu",
        name: "Tofu",
        emoji: "⬜",
        category: "grains",
        defaultUnit: "grams",

        lifespan: {
            room: null,
            refrigerator: 5,
            freezer: 90
        },

        note:
            "Fresh tofu should remain refrigerated."
    },


    {
        id: "fresh-coconut",
        name: "Fresh Coconut",
        emoji: "🥥",
        category: "grains",
        defaultUnit: "pieces",

        lifespan: {
            room: 2,
            refrigerator: 7,
            freezer: 90
        },

        note:
            "Fresh grated coconut is highly perishable and should be refrigerated."
    },


    {
        id: "coconut-meat",
        name: "Coconut Meat",
        emoji: "🥥",
        category: "grains",
        defaultUnit: "grams",

        lifespan: {
            room: null,
            refrigerator: 7,
            freezer: 180
        },

        note:
            "Cut coconut meat should be refrigerated."
    },


    /* =====================================================
       BEVERAGES
    ===================================================== */

    {
        id: "fresh-fruit-juice",
        name: "Fresh Fruit Juice",
        emoji: "🧃",
        category: "beverages",
        defaultUnit: "liters",

        lifespan: {
            room: null,
            refrigerator: 3,
            freezer: 30
        },

        note:
            "Freshly prepared juice should be refrigerated promptly."
    },


    {
        id: "fresh-orange-juice",
        name: "Fresh Orange Juice",
        emoji: "🍊",
        category: "beverages",
        defaultUnit: "liters",

        lifespan: {
            room: null,
            refrigerator: 3,
            freezer: 30
        },

        note:
            "Fresh juice is perishable and should remain refrigerated."
    },


    {
        id: "coconut-water",
        name: "Fresh Coconut Water",
        emoji: "🥥",
        category: "beverages",
        defaultUnit: "liters",

        lifespan: {
            room: null,
            refrigerator: 2,
            freezer: 30
        },

        note:
            "Fresh coconut water should be refrigerated promptly."
    },


    {
        id: "sugarcane-juice",
        name: "Fresh Sugarcane Juice",
        emoji: "🥤",
        category: "beverages",
        defaultUnit: "liters",

        lifespan: {
            room: null,
            refrigerator: 1,
            freezer: 7
        },

        note:
            "Fresh sugarcane juice is highly perishable and should be consumed promptly."
    },


    {
        id: "smoothie",
        name: "Fresh Smoothie",
        emoji: "🥤",
        category: "beverages",
        defaultUnit: "liters",

        lifespan: {
            room: null,
            refrigerator: 1,
            freezer: 30
        },

        note:
            "Fresh smoothies should be refrigerated promptly and consumed quickly."
    }

];


/* =========================================================
   DATABASE INFORMATION
========================================================= */

console.log(
    `PantryPal Food Database loaded: ${foodDatabase.length} foods`
);