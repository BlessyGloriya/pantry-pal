/* =========================================================
   PANTRYPAL
   Food Expiry & Pantry Tracker
   Main JavaScript
========================================================= */


/* =========================================================
   1. GLOBAL VARIABLES
========================================================= */

const STORAGE_KEY = "pantryPalItems";

let pantryItems = [];

let currentFilter = "all";

let editingItemId = null;

let selectedFood = null;


/* =========================================================
   2. DOM ELEMENTS
========================================================= */

const pageLoader = document.getElementById("pageLoader");

const mobileMenuBtn = document.getElementById("mobileMenuBtn");
const mainNav = document.getElementById("mainNav");

const foodForm = document.getElementById("foodForm");

const foodName = document.getElementById("foodName");
const foodCategory = document.getElementById("foodCategory");
const foodQuantity = document.getElementById("foodQuantity");
const foodUnit = document.getElementById("foodUnit");
const purchaseDate = document.getElementById("purchaseDate");
const storageLocation = document.getElementById("storageLocation");
const expiryDate = document.getElementById("expiryDate");
const foodImage = document.getElementById("foodImage");

const foodSuggestions = document.getElementById("foodSuggestions");

const foodLifePreview = document.getElementById("foodLifePreview");
const previewLifeText = document.getElementById("previewLifeText");

const imagePreview = document.getElementById("imagePreview");

const pantryList = document.getElementById("pantryList");
const pantrySearch = document.getElementById("pantrySearch");
const clearPantrySearch = document.getElementById("clearPantrySearch");

const useFirstList = document.getElementById("useFirstList");

const foodLifeSearch = document.getElementById("foodLifeSearch");
const clearFoodSearch = document.getElementById("clearFoodSearch");
const foodLifeSuggestions = document.getElementById("foodLifeSuggestions");
const foodLifeResult = document.getElementById("foodLifeResult");

const addFoodTopBtn = document.getElementById("addFoodTopBtn");
const addFoodHeroBtn = document.getElementById("addFoodHeroBtn");
const emptyAddBtn = document.getElementById("emptyAddBtn");
const pantryEmptyAddBtn = document.getElementById("pantryEmptyAddBtn");

const cancelFoodBtn = document.getElementById("cancelFoodBtn");
const saveFoodBtn = document.getElementById("saveFoodBtn");

const totalItems = document.getElementById("totalItems");
const freshItems = document.getElementById("freshItems");
const expiringItems = document.getElementById("expiringItems");
const expiredItems = document.getElementById("expiredItems");

const toast = document.getElementById("toast");
const toastIcon = document.getElementById("toastIcon");
const toastTitle = document.getElementById("toastTitle");
const toastMessage = document.getElementById("toastMessage");
const toastClose = document.getElementById("toastClose");

const modalOverlay = document.getElementById("modalOverlay");
const modal = document.getElementById("modal");
const modalClose = document.getElementById("modalClose");
const modalContent = document.getElementById("modalContent");


/* =========================================================
   3. FOOD DATABASE CONNECTION
========================================================= */

function getFoodDatabase() {

    if (
        typeof foodDatabase !== "undefined" &&
        Array.isArray(foodDatabase)
    ) {
        return foodDatabase;
    }

    if (
        typeof FOOD_DATABASE !== "undefined" &&
        Array.isArray(FOOD_DATABASE)
    ) {
        return FOOD_DATABASE;
    }

    console.error(
        "PantryPal: Food database was not found."
    );

    return [];
}


/* =========================================================
   4. INITIALIZE APP
========================================================= */

document.addEventListener("DOMContentLoaded", () => {

    initializeApp();

});


function initializeApp() {

    loadPantry();

    setDefaultPurchaseDate();

    setupEventListeners();

    renderDashboard();

    renderPantry();

    renderUseFirst();

    updateFoodLifePreview();

    hideLoader();

}


/* =========================================================
   5. HIDE LOADER
========================================================= */

function hideLoader() {

    setTimeout(() => {

        if (pageLoader) {
            pageLoader.classList.add("hidden");
        }

    }, 500);

}


/* =========================================================
   6. EVENT LISTENERS
========================================================= */

function setupEventListeners() {


    /* -----------------------------------------
       MOBILE MENU
    ----------------------------------------- */

    if (mobileMenuBtn) {

        mobileMenuBtn.addEventListener("click", () => {

            mainNav.classList.toggle("open");

            const icon = mobileMenuBtn.querySelector("i");

            if (!icon) return;

            if (mainNav.classList.contains("open")) {

                icon.className = "fa-solid fa-xmark";

            } else {

                icon.className = "fa-solid fa-bars";

            }

        });

    }


    /* -----------------------------------------
       NAVIGATION
    ----------------------------------------- */

    document.querySelectorAll(".nav-link").forEach(link => {

        link.addEventListener("click", () => {

            if (mainNav) {
                mainNav.classList.remove("open");
            }

            const icon = mobileMenuBtn?.querySelector("i");

            if (icon) {
                icon.className = "fa-solid fa-bars";
            }

        });

    });


    /* -----------------------------------------
       ADD FOOD BUTTONS
    ----------------------------------------- */

    addFoodTopBtn?.addEventListener(
        "click",
        scrollToAddFood
    );

    addFoodHeroBtn?.addEventListener(
        "click",
        scrollToAddFood
    );

    emptyAddBtn?.addEventListener(
        "click",
        scrollToAddFood
    );

    pantryEmptyAddBtn?.addEventListener(
        "click",
        scrollToAddFood
    );


    /* -----------------------------------------
       FOOD FORM
    ----------------------------------------- */

    foodForm?.addEventListener(
        "submit",
        handleFoodSubmit
    );


    /* -----------------------------------------
       FOOD NAME SEARCH
    ----------------------------------------- */

    foodName?.addEventListener(
        "input",
        handleFoodNameInput
    );


    foodName?.addEventListener(
        "focus",
        handleFoodNameInput
    );


    foodName?.addEventListener(
        "keydown",
        handleFoodNameKeydown
    );


    /* -----------------------------------------
       STORAGE CHANGE
    ----------------------------------------- */

    storageLocation?.addEventListener(
        "change",
        updateFoodLifePreview
    );


    /* -----------------------------------------
       EXPIRY DATE CHANGE
    ----------------------------------------- */

    expiryDate?.addEventListener(
        "change",
        updateFoodLifePreview
    );


    /* -----------------------------------------
       PURCHASE DATE CHANGE
    ----------------------------------------- */

    purchaseDate?.addEventListener(
        "change",
        updateFoodLifePreview
    );


    /* -----------------------------------------
       IMAGE
    ----------------------------------------- */

    foodImage?.addEventListener(
        "change",
        handleImagePreview
    );


    /* -----------------------------------------
       CANCEL
    ----------------------------------------- */

    cancelFoodBtn?.addEventListener(
        "click",
        resetFoodForm
    );


    /* -----------------------------------------
       PANTRY SEARCH
    ----------------------------------------- */

    pantrySearch?.addEventListener(
        "input",
        renderPantry
    );


    clearPantrySearch?.addEventListener(
        "click",
        () => {

            pantrySearch.value = "";

            renderPantry();

            pantrySearch.focus();

        }
    );


    /* -----------------------------------------
       FILTER BUTTONS
    ----------------------------------------- */

    document.querySelectorAll(".filter-btn").forEach(button => {

        button.addEventListener("click", () => {

            document
                .querySelectorAll(".filter-btn")
                .forEach(btn => btn.classList.remove("active"));

            button.classList.add("active");

            currentFilter = button.dataset.filter || "all";

            renderPantry();

        });

    });


    /* -----------------------------------------
       FOOD LIFE SEARCH
    ----------------------------------------- */

    foodLifeSearch?.addEventListener(
        "input",
        handleFoodLifeSearch
    );


    foodLifeSearch?.addEventListener(
        "focus",
        handleFoodLifeSearch
    );


    clearFoodSearch?.addEventListener(
        "click",
        () => {

            foodLifeSearch.value = "";

            foodLifeSuggestions.innerHTML = "";

            renderFoodLifePlaceholder();

            foodLifeSearch.focus();

        }
    );


    /* -----------------------------------------
       CATEGORY CARDS
    ----------------------------------------- */

    document.querySelectorAll(".category-card").forEach(card => {

        card.addEventListener("click", () => {

            const category = card.dataset.category;

            if (!category) return;

            currentFilter = "all";

            document
                .querySelectorAll(".filter-btn")
                .forEach(btn => {

                    btn.classList.toggle(
                        "active",
                        btn.dataset.filter === "all"
                    );

                });

            pantrySearch.value = "";

            renderPantry(category);

            document
                .getElementById("my-pantry")
                ?.scrollIntoView({
                    behavior: "smooth"
                });

        });

    });


    /* -----------------------------------------
       TOAST
    ----------------------------------------- */

    toastClose?.addEventListener(
        "click",
        hideToast
    );


    /* -----------------------------------------
       MODAL
    ----------------------------------------- */

    modalClose?.addEventListener(
        "click",
        closeModal
    );


    modalOverlay?.addEventListener(
        "click",
        event => {

            if (event.target === modalOverlay) {
                closeModal();
            }

        }
    );


    document.addEventListener(
        "keydown",
        event => {

            if (event.key === "Escape") {

                closeModal();

                foodSuggestions.innerHTML = "";

                foodLifeSuggestions.innerHTML = "";

            }

        }
    );

}


/* =========================================================
   7. DEFAULT PURCHASE DATE
========================================================= */

function setDefaultPurchaseDate() {

    if (!purchaseDate) return;

    if (!purchaseDate.value) {

        purchaseDate.value =
            getTodayString();

    }

}


function getTodayString() {

    const today = new Date();

    const year = today.getFullYear();

    const month = String(
        today.getMonth() + 1
    ).padStart(2, "0");

    const day = String(
        today.getDate()
    ).padStart(2, "0");

    return `${year}-${month}-${day}`;

}


/* =========================================================
   8. DATE HELPERS
========================================================= */

function addDaysToDate(dateString, days) {

    if (!dateString || days === null || days === undefined) {
        return "";
    }

    const date = new Date(
        `${dateString}T12:00:00`
    );

    if (Number.isNaN(date.getTime())) {
        return "";
    }

    date.setDate(
        date.getDate() + Number(days)
    );

    return formatDateInput(date);

}


function formatDateInput(date) {

    const year = date.getFullYear();

    const month = String(
        date.getMonth() + 1
    ).padStart(2, "0");

    const day = String(
        date.getDate()
    ).padStart(2, "0");

    return `${year}-${month}-${day}`;

}


function formatDisplayDate(dateString) {

    if (!dateString) {
        return "Not available";
    }

    const date = new Date(
        `${dateString}T12:00:00`
    );

    if (Number.isNaN(date.getTime())) {
        return "Not available";
    }

    return date.toLocaleDateString(
        "en-IN",
        {
            day: "numeric",
            month: "short",
            year: "numeric"
        }
    );

}


/* =========================================================
   9. FOOD DATABASE HELPERS
========================================================= */

function normalizeText(value) {

    return String(value || "")
        .trim()
        .toLowerCase();

}


function findFoodByName(name) {

    const database = getFoodDatabase();

    const normalized = normalizeText(name);

    return database.find(food =>
        normalizeText(food.name) === normalized
    ) || null;

}


function getFoodLifespan(food, storage) {

    if (!food) return null;

    if (
        food.lifespan &&
        typeof food.lifespan === "object"
    ) {

        const value =
            food.lifespan[storage];

        if (
            value !== undefined &&
            value !== null
        ) {

            return Number(value);

        }

    }


    if (
        food.storageLife &&
        typeof food.storageLife === "object"
    ) {

        const value =
            food.storageLife[storage];

        if (
            value !== undefined &&
            value !== null
        ) {

            return Number(value);

        }

    }


    if (
        food.lifespanDays !== undefined &&
        food.lifespanDays !== null
    ) {

        return Number(
            food.lifespanDays
        );

    }


    return null;

}


function getLifespanText(days) {

    if (
        days === null ||
        days === undefined ||
        Number.isNaN(Number(days))
    ) {

        return "Not available";

    }

    days = Number(days);


    if (days === 0) {
        return "Use immediately";
    }


    if (days === 1) {
        return "1 day";
    }


    if (days < 7) {
        return `${days} days`;
    }


    if (days === 7) {
        return "About 1 week";
    }


    if (days < 30) {
        return `${days} days`;
    }


    if (days === 30) {
        return "About 1 month";
    }


    if (days < 365) {
        const months = Math.round(
            days / 30
        );

        return `About ${months} months`;
    }


    if (days === 365) {
        return "About 1 year";
    }


    const years = Math.round(
        days / 365
    );

    return `About ${years} years`;

}


/* =========================================================
   10. FOOD NAME AUTOCOMPLETE
========================================================= */

function handleFoodNameInput() {

    const query =
        normalizeText(foodName.value);

    if (!query) {

        foodSuggestions.innerHTML = "";

        selectedFood = null;

        updateFoodLifePreview();

        return;

    }


    const database = getFoodDatabase();

    const matches = database
        .filter(food =>
            normalizeText(food.name)
                .includes(query)
        )
        .slice(0, 8);


    renderFoodSuggestions(matches);

}


function renderFoodSuggestions(matches) {

    foodSuggestions.innerHTML = "";

    if (!matches.length) {
        return;
    }


    matches.forEach(food => {

        const item =
            document.createElement("div");

        item.className =
            "food-suggestion-item";


        item.innerHTML = `
            <span class="suggestion-emoji">
                ${escapeHTML(food.emoji || "🍱")}
            </span>

            <div>
                <strong>
                    ${escapeHTML(food.name)}
                </strong>

                <small>
                    ${escapeHTML(
                        capitalize(food.category || "other")
                    )}
                </small>
            </div>
        `;


        item.addEventListener(
            "click",
            () => {

                fillFoodFromDatabase(food);

                foodSuggestions.innerHTML = "";

            }
        );


        foodSuggestions.appendChild(item);

    });

}


function handleFoodNameKeydown(event) {

    if (event.key !== "Enter") {
        return;
    }

    const first =
        foodSuggestions.querySelector(
            ".food-suggestion-item"
        );

    if (first) {

        event.preventDefault();

        first.click();

    }

}


/* =========================================================
   11. SELECT FOOD FROM DATABASE
========================================================= */

function fillFoodFromDatabase(food) {

    if (!food) return;

    selectedFood = food;

    foodName.value =
        food.name;

    if (foodCategory) {

        foodCategory.value =
            food.category || "";

    }


    if (foodUnit && food.defaultUnit) {

        foodUnit.value =
            food.defaultUnit;

    }


    updateFoodLifePreview();

}


/* =========================================================
   12. UPDATE FOOD LIFE PREVIEW
========================================================= */

function updateFoodLifePreview() {

    if (!previewLifeText) return;


    const food =
        selectedFood ||
        findFoodByName(foodName?.value);


    if (!food) {

        previewLifeText.textContent =
            "Select a food and storage location";

        return;

    }


    const storage =
        storageLocation?.value;


    if (!storage) {

        previewLifeText.textContent =
            "Choose a storage location";

        return;

    }


    const days =
        getFoodLifespan(
            food,
            storage
        );


    if (days === null) {

        if (storage === "room") {

            previewLifeText.textContent =
                "Room temperature storage is not recommended";

        } else {

            previewLifeText.textContent =
                "Typical storage life not available";

        }

        return;

    }


    previewLifeText.textContent =
        `${getLifespanText(days)} in ${getStorageName(storage)}`;

}


/* =========================================================
   13. STORAGE NAME
========================================================= */

function getStorageName(storage) {

    const names = {

        room: "room temperature",

        refrigerator: "the refrigerator",

        freezer: "the freezer"

    };

    return names[storage] || storage;

}


/* =========================================================
   14. IMAGE PREVIEW
========================================================= */

function handleImagePreview() {

    if (!foodImage || !imagePreview) {
        return;
    }

    const file =
        foodImage.files?.[0];


    if (!file) {

        imagePreview.innerHTML = "";

        imagePreview.style.display =
            "none";

        return;

    }


    if (!file.type.startsWith("image/")) {

        showToast(
            "Error",
            "Please select an image file.",
            "!"
        );

        foodImage.value = "";

        return;

    }


    const reader =
        new FileReader();


    reader.onload = event => {

        imagePreview.innerHTML = `
            <img
                src="${event.target.result}"
                alt="Food preview"
            >
        `;

        imagePreview.style.display =
            "block";

    };


    reader.readAsDataURL(file);

}


/* =========================================================
   15. HANDLE ADD / EDIT
========================================================= */

function handleFoodSubmit(event) {

    event.preventDefault();


    const name =
        foodName.value.trim();


    const category =
        foodCategory.value;


    const quantity =
        Number(foodQuantity.value);


    const unit =
        foodUnit.value;


    const purchase =
        purchaseDate.value;


    const storage =
        storageLocation.value;


    const actualExpiry =
        expiryDate.value;


    /* -----------------------------------------
       VALIDATION
    ----------------------------------------- */

    if (!name) {

        showToast(
            "Missing food",
            "Please enter a food name.",
            "!"
        );

        foodName.focus();

        return;

    }


    if (
        !quantity ||
        quantity <= 0
    ) {

        showToast(
            "Invalid quantity",
            "Please enter a valid quantity.",
            "!"
        );

        foodQuantity.focus();

        return;

    }


    if (!purchase) {

        showToast(
            "Missing date",
            "Please select the purchase date.",
            "!"
        );

        return;

    }


    if (!storage) {

        showToast(
            "Storage required",
            "Please choose where you will store the food.",
            "!"
        );

        storageLocation.focus();

        return;

    }


    /* -----------------------------------------
       FIND DATABASE FOOD
    ----------------------------------------- */

    const databaseFood =
        selectedFood ||
        findFoodByName(name);


    let calculatedExpiry = "";


    if (!actualExpiry) {

        if (!databaseFood) {

            showToast(
                "Expiry information needed",
                "Select a known food so PantryPal can estimate its storage life, or enter the actual expiry date.",
                "!"
            );

            return;

        }


        const lifespan =
            getFoodLifespan(
                databaseFood,
                storage
            );


        if (
            lifespan === null ||
            Number.isNaN(lifespan)
        ) {

            showToast(
                "Storage not suitable",
                `${databaseFood.name} does not have a typical lifespan for ${getStorageName(storage)}. Choose another storage location.`,
                "!"
            );

            return;

        }


        calculatedExpiry =
            addDaysToDate(
                purchase,
                lifespan
            );

    }


    const finalExpiry =
        actualExpiry ||
        calculatedExpiry;


    /* -----------------------------------------
       IMAGE
    ----------------------------------------- */

    const imageFile =
        foodImage?.files?.[0];


    if (editingItemId) {

        updateExistingFood({

            id: editingItemId,

            name,

            category,

            quantity,

            unit,

            purchaseDate: purchase,

            storageLocation: storage,

            expiryDate: finalExpiry,

            expiryType:
                actualExpiry
                    ? "actual"
                    : "estimated",

            imageFile,

            databaseFood

        });

    } else {

        addNewFood({

            name,

            category,

            quantity,

            unit,

            purchaseDate: purchase,

            storageLocation: storage,

            expiryDate: finalExpiry,

            expiryType:
                actualExpiry
                    ? "actual"
                    : "estimated",

            imageFile,

            databaseFood

        });

    }

}


/* =========================================================
   16. ADD NEW FOOD
========================================================= */

function addNewFood(data) {

    const item = {

        id:
            createId(),

        name:
            data.name,

        category:
            data.category,

        quantity:
            data.quantity,

        unit:
            data.unit,

        purchaseDate:
            data.purchaseDate,

        storageLocation:
            data.storageLocation,

        expiryDate:
            data.expiryDate || "",

        expiryType:
            data.expiryType,

        image:
            "",

        createdAt:
            new Date().toISOString()

    };


    /* -----------------------------------------
       IMAGE
    ----------------------------------------- */

    if (data.imageFile) {

        const reader =
            new FileReader();


        reader.onload = event => {

            item.image =
                event.target.result;

            pantryItems.unshift(item);

            savePantry();

            afterFoodSaved(
                "Food added",
                `${item.name} was added to your pantry.`
            );

        };


        reader.readAsDataURL(
            data.imageFile
        );

    } else {

        pantryItems.unshift(item);

        savePantry();

        afterFoodSaved(
            "Food added",
            `${item.name} was added to your pantry.`
        );

    }

}


/* =========================================================
   17. UPDATE EXISTING FOOD
========================================================= */

function updateExistingFood(data) {

    const index =
        pantryItems.findIndex(
            item =>
                item.id === editingItemId
        );


    if (index === -1) {

        showToast(
            "Error",
            "The food item could not be found.",
            "!"
        );

        resetFoodForm();

        return;

    }


    const oldItem =
        pantryItems[index];


    const updateItem = image => {

        pantryItems[index] = {

            ...oldItem,

            name:
                data.name,

            category:
                data.category,

            quantity:
                data.quantity,

            unit:
                data.unit,

            purchaseDate:
                data.purchaseDate,

            storageLocation:
                data.storageLocation,

            expiryDate:
                data.expiryDate || "",

            expiryType:
                data.expiryType,

            image:
                image !== undefined
                    ? image
                    : oldItem.image

        };


        savePantry();

        afterFoodSaved(
            "Food updated",
            `${data.name} was updated successfully.`
        );

    };


    if (data.imageFile) {

        const reader =
            new FileReader();


        reader.onload = event => {

            updateItem(
                event.target.result
            );

        };


        reader.readAsDataURL(
            data.imageFile
        );

    } else {

        updateItem();

    }

}


/* =========================================================
   18. AFTER SAVE
========================================================= */

function afterFoodSaved(title, message) {

    renderDashboard();

    renderPantry();

    renderUseFirst();

    resetFoodForm();

    showToast(
        title,
        message,
        "✓"
    );


    document
        .getElementById("my-pantry")
        ?.scrollIntoView({
            behavior: "smooth"
        });

}


/* =========================================================
   19. RESET FORM
========================================================= */

function resetFoodForm() {

    if (!foodForm) return;


    editingItemId = null;

    selectedFood = null;


    foodForm.reset();


    setDefaultPurchaseDate();


    if (saveFoodBtn) {

        saveFoodBtn.innerHTML = `
            <i class="fa-solid fa-plus"></i>
            Add Food
        `;

    }


    if (cancelFoodBtn) {

        cancelFoodBtn.textContent =
            "Cancel";

    }


    if (foodSuggestions) {

        foodSuggestions.innerHTML = "";

    }


    if (imagePreview) {

        imagePreview.innerHTML = "";

        imagePreview.style.display =
            "none";

    }


    updateFoodLifePreview();

}


/* =========================================================
   20. EDIT FOOD
========================================================= */

function editFood(id) {

    const item =
        pantryItems.find(
            food => food.id === id
        );


    if (!item) return;


    editingItemId = id;


    const databaseFood =
        findFoodByName(item.name);


    selectedFood =
        databaseFood || null;


    foodName.value =
        item.name;


    foodCategory.value =
        item.category || "";


    foodQuantity.value =
        item.quantity;


    foodUnit.value =
        item.unit || "";


    purchaseDate.value =
        item.purchaseDate || "";


    storageLocation.value =
        item.storageLocation || "";


    expiryDate.value =
        item.expiryType === "actual"
            ? item.expiryDate
            : "";


    if (saveFoodBtn) {

        saveFoodBtn.innerHTML = `
            <i class="fa-solid fa-pen"></i>
            Update Food
        `;

    }


    if (cancelFoodBtn) {

        cancelFoodBtn.textContent =
            "Cancel Edit";

    }


    if (item.image) {

        imagePreview.innerHTML = `
            <img
                src="${item.image}"
                alt="${escapeHTML(item.name)}"
            >
        `;

        imagePreview.style.display =
            "block";

    } else {

        imagePreview.innerHTML = "";

        imagePreview.style.display =
            "none";

    }


    updateFoodLifePreview();


    scrollToAddFood();


    showToast(
        "Editing food",
        `You are editing ${item.name}.`,
        "✎"
    );

}


/* =========================================================
   21. DELETE FOOD
========================================================= */

function deleteFood(id) {

    const item =
        pantryItems.find(
            food => food.id === id
        );


    if (!item) return;


    openDeleteModal(item);

}


/* =========================================================
   22. DELETE CONFIRMATION MODAL
========================================================= */

function openDeleteModal(item) {

    if (!modalOverlay || !modalContent) {

        const confirmed =
            window.confirm(
                `Delete ${item.name} from your pantry?`
            );

        if (confirmed) {
            confirmDeleteFood(item.id);
        }

        return;

    }


    modalContent.innerHTML = `

        <div style="text-align:center;">

            <div
                style="
                    font-size:3rem;
                    margin-bottom:12px;
                "
            >
                🗑️
            </div>

            <h2
                style="
                    font-family:'Playfair Display',serif;
                    color:#3b2115;
                "
            >
                Delete this food?
            </h2>

            <p
                style="
                    margin-top:8px;
                    color:#8b7c71;
                "
            >
                Are you sure you want to remove
                <strong>
                    ${escapeHTML(item.name)}
                </strong>
                from your pantry?
            </p>

            <div
                style="
                    display:flex;
                    gap:10px;
                    justify-content:center;
                    margin-top:25px;
                "
            >

                <button
                    type="button"
                    class="secondary-btn"
                    onclick="closeModal()"
                >
                    Cancel
                </button>

                <button
                    type="button"
                    class="primary-btn"
                    style="background:#b94b43;"
                    onclick="confirmDeleteFood('${item.id}')"
                >
                    <i class="fa-solid fa-trash"></i>
                    Delete
                </button>

            </div>

        </div>

    `;


    openModal();

}


/* =========================================================
   23. CONFIRM DELETE
========================================================= */

function confirmDeleteFood(id) {

    const item =
        pantryItems.find(
            food => food.id === id
        );


    pantryItems =
        pantryItems.filter(
            food => food.id !== id
        );


    savePantry();

    closeModal();

    renderDashboard();

    renderPantry();

    renderUseFirst();


    showToast(
        "Food deleted",
        item
            ? `${item.name} was removed from your pantry.`
            : "Food was removed from your pantry.",
        "✓"
    );

}


/* =========================================================
   24. PANTRY STORAGE
========================================================= */

function savePantry() {

    try {

        localStorage.setItem(
            STORAGE_KEY,
            JSON.stringify(pantryItems)
        );

    } catch (error) {

        console.error(
            "Could not save pantry:",
            error
        );


        showToast(
            "Storage error",
            "Your browser could not save this item.",
            "!"
        );

    }

}


function loadPantry() {

    try {

        const saved =
            localStorage.getItem(
                STORAGE_KEY
            );


        if (!saved) {

            pantryItems = [];

            return;

        }


        const parsed =
            JSON.parse(saved);


        pantryItems =
            Array.isArray(parsed)
                ? parsed
                : [];

    } catch (error) {

        console.error(
            "Could not load pantry:",
            error
        );

        pantryItems = [];

    }

}


/* =========================================================
   25. RENDER PANTRY
========================================================= */

function renderPantry(categoryFilter = null) {

    if (!pantryList) return;


    let items =
        [...pantryItems];


    /* -----------------------------------------
       SEARCH
    ----------------------------------------- */

    const query =
        normalizeText(
            pantrySearch?.value
        );


    if (query) {

        items =
            items.filter(item =>
                normalizeText(item.name)
                    .includes(query)
            );

    }


    /* -----------------------------------------
       CATEGORY
    ----------------------------------------- */

    if (categoryFilter) {

        items =
            items.filter(item =>
                item.category === categoryFilter
            );

    }


    /* -----------------------------------------
       STATUS FILTER
    ----------------------------------------- */

    if (currentFilter !== "all") {

        items =
            items.filter(item => {

                const status =
                    getItemStatus(item);

                return status === currentFilter;

            });

    }


    /* -----------------------------------------
       EMPTY
    ----------------------------------------- */

    if (!items.length) {

        pantryList.innerHTML = `

            <div class="empty-state">

                <div class="empty-icon">
                    ${pantryItems.length ? "🔎" : "🥕"}
                </div>

                <h3>
                    ${
                        pantryItems.length
                            ? "No matching food"
                            : "Your pantry is empty"
                    }
                </h3>

                <p>
                    ${
                        pantryItems.length
                            ? "Try another search or filter."
                            : "Add your first food item to get started."
                    }
                </p>

                ${
                    pantryItems.length
                        ? ""
                        : `
                            <button
                                type="button"
                                class="primary-btn"
                                onclick="scrollToAddFood()"
                            >
                                <i class="fa-solid fa-plus"></i>
                                Add Your First Food
                            </button>
                        `
                }

            </div>

        `;

        return;

    }


    /* -----------------------------------------
       SORT
    ----------------------------------------- */

    items.sort(
        (a, b) =>
            getDaysLeft(a) -
            getDaysLeft(b)
    );


    pantryList.innerHTML =
        items
            .map(renderPantryCard)
            .join("");

}


/* =========================================================
   26. PANTRY CARD
========================================================= */

function renderPantryCard(item) {

    const status =
        getItemStatus(item);


    const statusInfo =
        getStatusInfo(item);


    const imageHTML =
        item.image
            ? `
                <img
                    src="${item.image}"
                    alt="${escapeHTML(item.name)}"
                    style="
                        width:100%;
                        height:100%;
                        object-fit:cover;
                        border-radius:17px;
                    "
                >
            `
            : escapeHTML(
                getFoodEmoji(item.name)
            );


    const expiryLabel =
        item.expiryDate
            ? (
                item.expiryType === "estimated"
                    ? "Estimated expiry"
                    : "Expiry date"
            )
            : "No expiry date";


    return `

        <article class="pantry-card">

            <div class="pantry-card-top">

                <div class="pantry-food-icon">
                    ${imageHTML}
                </div>

                <div class="pantry-card-actions">

                    <button
                        type="button"
                        class="card-action-btn"
                        title="Edit"
                        onclick="editFood('${item.id}')"
                    >
                        <i class="fa-solid fa-pen"></i>
                    </button>

                    <button
                        type="button"
                        class="card-action-btn"
                        title="Delete"
                        onclick="deleteFood('${item.id}')"
                    >
                        <i class="fa-solid fa-trash"></i>
                    </button>

                </div>

            </div>


            <h3>
                ${escapeHTML(item.name)}
            </h3>


            <div class="pantry-card-meta">

                <span class="meta-tag">
                    ${escapeHTML(
                        formatQuantity(
                            item.quantity,
                            item.unit
                        )
                    )}
                </span>

                <span class="meta-tag">
                    ${escapeHTML(
                        capitalize(item.category || "other")
                    )}
                </span>

                <span class="meta-tag">
                    ${escapeHTML(
                        getStorageName(
                            item.storageLocation
                        )
                    )}
                </span>

            </div>


            <div class="pantry-card-expiry">

                <i class="fa-regular fa-calendar"></i>

                <span>
                    ${
                        item.expiryDate
                            ? `${expiryLabel}: ${formatDisplayDate(item.expiryDate)}`
                            : "Expiry not provided"
                    }
                </span>

                <span
                    class="expiry-status ${statusInfo.className}"
                >
                    ${statusInfo.label}
                </span>

            </div>

        </article>

    `;

}


/* =========================================================
   27. FOOD EMOJI
========================================================= */

function getFoodEmoji(name) {

    const food =
        findFoodByName(name);


    if (food?.emoji) {
        return food.emoji;
    }


    return "🍱";

}


/* =========================================================
   28. STATUS
========================================================= */

function getItemStatus(item) {

    if (!item.expiryDate) {

        return "fresh";

    }


    const days =
        getDaysLeft(item);


    if (days < 0) {

        return "expired";

    }


    if (days <= 3) {

        return "expiring";

    }


    return "fresh";

}


/* =========================================================
   29. DAYS LEFT
========================================================= */

function getDaysLeft(item) {

    if (!item.expiryDate) {

        return 999999;

    }


    const today =
        new Date(
            `${getTodayString()}T12:00:00`
        );


    const expiry =
        new Date(
            `${item.expiryDate}T12:00:00`
        );


    const difference =
        expiry.getTime() -
        today.getTime();


    return Math.ceil(
        difference /
        (1000 * 60 * 60 * 24)
    );

}


/* =========================================================
   30. STATUS INFORMATION
========================================================= */

function getStatusInfo(item) {

    const status =
        getItemStatus(item);


    if (status === "expired") {

        return {

            label: "Expired",

            className:
                "status-expired"

        };

    }


    if (status === "expiring") {

        const days =
            getDaysLeft(item);


        return {

            label:
                days === 0
                    ? "Today"
                    : `${days} day${days === 1 ? "" : "s"} left`,

            className:
                "status-expiring"

        };

    }


    if (!item.expiryDate) {

        return {

            label: "No expiry",

            className:
                "status-no-expiry"

        };

    }


    return {

        label: "Fresh",

        className:
            "status-fresh"

    };

}


/* =========================================================
   31. FORMAT QUANTITY
========================================================= */

function formatQuantity(
    quantity,
    unit
) {

    return `${quantity} ${unit || ""}`
        .trim();

}


/* =========================================================
   32. DASHBOARD
========================================================= */

function renderDashboard() {

    if (totalItems) {

        totalItems.textContent =
            pantryItems.length;

    }


    const fresh =
        pantryItems.filter(
            item =>
                getItemStatus(item) === "fresh"
        ).length;


    const expiring =
        pantryItems.filter(
            item =>
                getItemStatus(item) === "expiring"
        ).length;


    const expired =
        pantryItems.filter(
            item =>
                getItemStatus(item) === "expired"
        ).length;


    if (freshItems) {
        freshItems.textContent = fresh;
    }

    if (expiringItems) {
        expiringItems.textContent = expiring;
    }

    if (expiredItems) {
        expiredItems.textContent = expired;
    }

}


/* =========================================================
   33. USE FIRST
========================================================= */

function renderUseFirst() {

    if (!useFirstList) return;


    const priorityItems =
        pantryItems
            .filter(item => {

                if (!item.expiryDate) {
                    return false;
                }

                return getDaysLeft(item) <= 7;

            })
            .sort(
                (a, b) =>
                    getDaysLeft(a) -
                    getDaysLeft(b)
            )
            .slice(0, 6);


    if (!priorityItems.length) {

        useFirstList.innerHTML = `

            <div class="empty-state">

                <div class="empty-icon">
                    🍽️
                </div>

                <h3>
                    Nothing to use first
                </h3>

                <p>
                    Foods with an expiry within 7 days
                    will appear here.
                </p>

            </div>

        `;

        return;

    }


    useFirstList.innerHTML =
        priorityItems
            .map(renderUseFirstCard)
            .join("");

}


function renderUseFirstCard(item) {

    const days =
        getDaysLeft(item);


    let daysText;


    if (days < 0) {

        daysText = "Expired";

    } else if (days === 0) {

        daysText = "Today";

    } else {

        daysText =
            `${days} day${days === 1 ? "" : "s"} left`;

    }


    return `

        <div class="use-first-card">

            <div class="food-card-image">

                ${
                    item.image
                        ? `
                            <img
                                src="${item.image}"
                                alt="${escapeHTML(item.name)}"
                                style="
                                    width:100%;
                                    height:100%;
                                    object-fit:cover;
                                    border-radius:15px;
                                "
                            >
                        `
                        : escapeHTML(
                            getFoodEmoji(item.name)
                        )
                }

            </div>


            <div>

                <h4>
                    ${escapeHTML(item.name)}
                </h4>

                <p>
                    ${escapeHTML(
                        formatDisplayDate(
                            item.expiryDate
                        )
                    )}
                </p>

            </div>


            <span class="days-left">
                ${daysText}
            </span>

        </div>

    `;

}


/* =========================================================
   34. FOOD LIFE SEARCH
========================================================= */

function handleFoodLifeSearch() {

    const query =
        normalizeText(
            foodLifeSearch.value
        );


    if (!query) {

        foodLifeSuggestions.innerHTML = "";

        renderFoodLifePlaceholder();

        return;

    }


    const database =
        getFoodDatabase();


    const matches =
        database
            .filter(food =>
                normalizeText(food.name)
                    .includes(query)
            )
            .slice(0, 8);


    renderFoodLifeSuggestions(matches);


    const exact =
        database.find(food =>
            normalizeText(food.name) === query
        );


    if (exact) {

        renderFoodLifeResult(exact);

    }

}


function renderFoodLifeSuggestions(matches) {

    foodLifeSuggestions.innerHTML = "";


    if (!matches.length) {

        foodLifeSuggestions.innerHTML = `

            <div
                class="food-life-suggestion-item"
                style="cursor:default;"
            >
                <span>🔎</span>

                <div>
                    <strong>
                        No food found
                    </strong>

                    <small>
                        Try another food name.
                    </small>
                </div>

            </div>

        `;

        return;

    }


    matches.forEach(food => {

        const item =
            document.createElement("div");


        item.className =
            "food-life-suggestion-item";


        item.innerHTML = `

            <span>
                ${escapeHTML(food.emoji || "🍱")}
            </span>

            <div>

                <strong>
                    ${escapeHTML(food.name)}
                </strong>

                <small>
                    ${escapeHTML(
                        capitalize(
                            food.category || "other"
                        )
                    )}
                </small>

            </div>

        `;


        item.addEventListener(
            "click",
            () => {

                foodLifeSearch.value =
                    food.name;

                foodLifeSuggestions.innerHTML =
                    "";

                renderFoodLifeResult(food);

            }
        );


        foodLifeSuggestions.appendChild(item);

    });

}


/* =========================================================
   35. FOOD LIFE RESULT
========================================================= */

function renderFoodLifeResult(food) {

    if (!foodLifeResult || !food) {
        return;
    }


    const room =
        getFoodLifespan(
            food,
            "room"
        );


    const refrigerator =
        getFoodLifespan(
            food,
            "refrigerator"
        );


    const freezer =
        getFoodLifespan(
            food,
            "freezer"
        );


    foodLifeResult.innerHTML = `

        <div class="food-life-card">

            <div class="food-life-card-header">

                <div class="food-life-card-icon">
                    ${escapeHTML(
                        food.emoji || "🍱"
                    )}
                </div>

                <div>

                    <h3>
                        ${escapeHTML(food.name)}
                    </h3>

                    <p>
                        Typical storage life
                    </p>

                </div>

            </div>


            <div class="life-grid">


                <!-- Room -->

                <div class="life-box">

                    <div class="life-icon">
                        🏠
                    </div>

                    <span class="life-label">
                        Room Temperature
                    </span>

                    <strong>
                        ${
                            room === null
                                ? "Not recommended"
                                : getLifespanText(room)
                        }
                    </strong>

                </div>


                <!-- Refrigerator -->

                <div class="life-box">

                    <div class="life-icon">
                        🧊
                    </div>

                    <span class="life-label">
                        Refrigerator
                    </span>

                    <strong>
                        ${
                            refrigerator === null
                                ? "Not available"
                                : getLifespanText(refrigerator)
                        }
                    </strong>

                </div>


                <!-- Freezer -->

                <div class="life-box">

                    <div class="life-icon">
                        ❄️
                    </div>

                    <span class="life-label">
                        Freezer
                    </span>

                    <strong>
                        ${
                            freezer === null
                                ? "Not available"
                                : getLifespanText(freezer)
                        }
                    </strong>

                </div>

            </div>


            ${
                food.note
                    ? `
                        <div class="food-life-note">

                            <strong>
                                Note:
                            </strong>

                            ${escapeHTML(food.note)}

                        </div>
                    `
                    : ""
            }


            <div class="food-life-note">

                <strong>
                    Important:
                </strong>

                These are typical storage-life
                estimates, not guaranteed expiry dates.
                Always follow the package instructions
                and check the food before consuming.

            </div>

        </div>

    `;

}


function renderFoodLifePlaceholder() {

    if (!foodLifeResult) return;


    foodLifeResult.innerHTML = `

        <div class="food-life-placeholder">

            <div class="large-food-icon">
                🥛
            </div>

            <h3>
                Search for a food
            </h3>

            <p>
                For example, search for
                <strong>Milk</strong>
                to see its typical storage life.
            </p>

        </div>

    `;

}


/* =========================================================
   36. MODAL
========================================================= */

function openModal() {

    if (!modalOverlay) return;

    modalOverlay.classList.add("show");

    document.body.classList.add(
        "modal-open"
    );

}


function closeModal() {

    if (!modalOverlay) return;

    modalOverlay.classList.remove("show");

    document.body.classList.remove(
        "modal-open"
    );

}


/* =========================================================
   37. TOAST
========================================================= */

let toastTimer = null;


function showToast(
    title,
    message,
    icon = "✓"
) {

    if (
        !toast ||
        !toastTitle ||
        !toastMessage
    ) {

        return;

    }


    toastTitle.textContent =
        title;

    toastMessage.textContent =
        message;


    if (toastIcon) {

        toastIcon.textContent =
            icon;

    }


    toast.classList.add("show");


    clearTimeout(
        toastTimer
    );


    toastTimer =
        setTimeout(
            hideToast,
            4000
        );

}


function hideToast() {

    toast?.classList.remove(
        "show"
    );

}


/* =========================================================
   38. SCROLL TO ADD FOOD
========================================================= */

function scrollToAddFood() {

    const section =
        document.getElementById(
            "add-food"
        );


    if (!section) return;


    section.scrollIntoView({
        behavior: "smooth"
    });


    setTimeout(() => {

        foodName?.focus();

    }, 600);

}


/* =========================================================
   39. CREATE UNIQUE ID
========================================================= */

function createId() {

    return (
        Date.now().toString(36) +
        Math.random()
            .toString(36)
            .substring(2, 8)
    );

}


/* =========================================================
   40. CAPITALIZE
========================================================= */

function capitalize(value) {

    if (!value) return "";

    return value.charAt(0).toUpperCase() +
        value.slice(1);

}


/* =========================================================
   41. HTML ESCAPE
========================================================= */

function escapeHTML(value) {

    return String(value ?? "")
        .replaceAll("&", "&amp;")
        .replaceAll("<", "&lt;")
        .replaceAll(">", "&gt;")
        .replaceAll('"', "&quot;")
        .replaceAll("'", "&#039;");

}


/* =========================================================
   42. GLOBAL FUNCTIONS
   These are used by buttons created dynamically.
========================================================= */

window.scrollToAddFood =
    scrollToAddFood;

window.editFood =
    editFood;

window.deleteFood =
    deleteFood;

window.confirmDeleteFood =
    confirmDeleteFood;

window.closeModal =
    closeModal;


/* =========================================================
   43. DATABASE CHECK
========================================================= */

console.log(
    `PantryPal Food Database connected: ${getFoodDatabase().length} foods`
);

console.log(
    "PantryPal JavaScript loaded successfully."
);