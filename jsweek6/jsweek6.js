document.addEventListener("DOMContentLoaded", function () {
    // Product Data Array
    const products = [
        { id: "fc-1888", name: "Flux Capacitor", averagerating: 4.5 },
        { id: "fc-2050", name: "Power Laces", averagerating: 4.7 },
        { id: "fs-1987", name: "Time Circuits", averagerating: 3.5 },
        { id: "ac-2000", name: "Low Voltage Reactor", averagerating: 3.9 },
        { id: "jj-1969", name: "Warp Equalizer", averagerating: 5.0 }
    ];

    // Populate the product dropdown
    let productSelect = document.getElementById("product-name");
    if (productSelect) {
        let defaultOption = document.createElement("option");
        defaultOption.textContent = "Select a Product ...";
        defaultOption.disabled = true;
        defaultOption.selected = true;
        productSelect.appendChild(defaultOption);

        products.forEach(product => {
            let option = document.createElement("option");
            option.value = product.id;
            option.textContent = product.name;
            productSelect.appendChild(option);
        });
    }

    // Review Counter on Confirmation Page
    if (window.location.pathname.includes("review.html")) {
        let reviewCount = localStorage.getItem("reviewCount") || 0;
        reviewCount++;
        localStorage.setItem("reviewCount", reviewCount);
        document.getElementById("review-counter").textContent = `You have submitted ${reviewCount} reviews.`;
    }
});
