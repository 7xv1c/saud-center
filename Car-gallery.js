const vehicleModels = {
    is: {
        name: "Lexus IS",
        type: "SPORT SEDAN",
        description: "سيدان رياضية تجمع بين التصميم الديناميكي والراحة.",
        images: [
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQG2b_tEkAyKQCsOFuihqI2EL8Z8dQIOsqY8EIKWMJzvA&s=10",
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQZ7CzHlgDN5ShVoihwIKFMWj-t78R5UIirSPXSFiCMNw&s=10",
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT_BKrjVc0RraqCF10TLTl3E6eqLVdQ6snjZGO_ojE7Wg&s=10"
        ]
    },
    es: {
        name: "Lexus ES",
        type: "LUXURY SEDAN",
        description: "سيدان فاخرة تتميز بالراحة والهدوء والتصميم الأنيق.",
        images: [
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT1dAiU-UxrveIqfI70Cl0H2w_2Ly_DfM1GwHuY7GDbaA&s=10",
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTTyis2yUbJwzD9O-QxIbPZ1HJxBGXU0Ds12ZIgJbUIDA&s=10",
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQERzxu0isNipTUk3UxSIA9k6G_qUATypTCR1bZ_v26kw&s=10"
        ]
    },
    ls: {
        name: "Lexus LS",
        type: "FLAGSHIP SEDAN",
        description: "سيدان رائدة لعشاق الفخامة والراحة.",
        images: [
            "https://hips.hearstapps.com/hmg-prod/images/2026-lexus-ls-heritage-edition-rear-69a0bec9d8375.jpg?crop=0.799xw:0.798xh;0.105xw,0.150xh&resize=1200:*",
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRgaT9FMTppxdKkTHUrbL3OG8GKcz-AMNfD6i1mXOqPcg&s=10",
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQLHDHswUe4pm_-oDvJ_ymcEZOC2giTbai0WSKmKkhoSw&s=10"
        ]
    },
    ux: {
        name: "Lexus UX",
        type: "COMPACT SUV",
        description: "كروس أوفر مدمجة بتصميم عصري مناسبة للاستخدام اليومي.",
        images: [
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSdGTmvdsWTTWKlNrmwn7158nhRnJlkvL3pMXoT3ROgUQ&s=10",
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSH1OpfbsGNIug-6NcN-cmUfjLp6YMj1AJOUhxw2uTVdg&s=10",
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS5ImlsAHsUg3DTdm-rldqkgGtB3QT_gEf9WtT-oLVwjQ&s=10"
        ]
    },
    nx: {
        name: "Lexus NX",
        type: "LUXURY SUV",
        description: "سيارة SUV عصرية تجمع بين التقنية والعملية.",
        images: [
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRvSGsD0fTHsu6FVfvmYsvhl-9GZSjwLNPhQ2XcqpdzLw&s=10",
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRg6lh0epVgrQObOv-Y7AQz-FX2z4yXBtNO3DKzSL1u6Q&s=10",
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSuP8v42Ty3cc_l6w60Wi4Down4qxhN7Qab7g-H0wRzxA&s=10"
        ]
    },
    rx: {
        name: "Lexus RX",
        type: "LUXURY CROSSOVER",
        description: "سيارة متعددة الاستخدامات تجمع بين الراحة والفخامة.",
        images: [
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ4Qx_8Gkunpv0-_pxyrZchSNxhE7POumI4P76yiNtKrQ&s=10",
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSkfSvvebsxUVzhS74y_IwEFjNNMZpIGk3-75WnfAkb0g&s=10",
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTJCtM9SY_m6A4orfK820FARacamVb0CPYThmHYZq0vwQ&s=10"
        ]
    },
    gx: {
        name: "Lexus GX",
        type: "LUXURY OFF-ROAD SUV",
        description: "دفع رباعي فاخر مصمم للطرق المختلفة.",
        images: [
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSkzZNupC5wqQt6VRfZ402Po5n8Lko3HvhmJ94NboX6_g&s=10",
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRlUT_r7Poy1179NCrN6KDZggRccp0S1XO0ktGioH_jnQ&s=10",
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRUPgevYgBKFbIWm3r3Agfrlihaftplptsb-fknjEbEZg&s=10"
        ]
    },
    lx: {
        name: "Lexus LX",
        type: "FLAGSHIP SUV",
        description: "سيارة دفع رباعي فاخرة تجمع بين الحضور القوي والراحة.",
        images: [
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRSvyXzCFZQ8MvpC59TR5rLhQsJZGfFAa_vwLVLZtjU2Q&s=10",
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS07MLw4ZyXv447cjwEhZ-i3ISIHDawnaf6YKuUSK7CRg&s=10",
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSXDLGM2RVoNj0bTiWvPVNS1WUMzIB2X_KPJLvwUFWaww&s=10"
        ]
    },
    tx: {
        name: "Lexus TX",
        type: "THREE-ROW SUV",
        description: "سيارة عائلية واسعة بثلاثة صفوف من المقاعد.",
        images: [
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRnPBmS6Sbrc1DqR-GIzMvD744HDhvzuXTBIhmYoVsxoA&s=10",
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRnZb6S8gxjSF3eX3g8LBsQDX9Qz0rBSop5g27LtgK_jw&s=10",
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSLBBEllDbg_2I8rlmefuv1Tr7r1VpOPagjrjVpncgqOQ&s=10"
        ]
    },
    rz: {
        name: "Lexus LFA ",
        type: "SUPER SPORTS CAR",
        description: "سيارة رياضية فاخرة    .",
        images: [
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRZYMuWJbtSoXZIIXkb5xkzmY-FXgUgXTWKa21Eq9_lYQ&s=10",
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR2WV5PlZVHsr9pjXwaKBLl1fH3O0YYaheoECzSul5Jrw&s=10",
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQRjaTuqWB_cLLbACN_4YLM9Dzfs_uPCrwg_PSG1iRB5A&s=10"
        ]
    },
    rc: {
        name: "Lexus RC",
        type: "SPORT COUPE",
        description: "كوبيه رياضية بتصميم جريء وطابع رياضي.",
        images: [
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQS89T-7msea7wQZUlccvO6KrcLaA2hsv5uU7Vly69HUQ&s=10",
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR2CGdxvx6FpsRJTWgUzZk2ZwePyB5HsjTm4g5idNfKTQ&s=10",
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQWH4TdsIsOoX7xu24h4jEq0S1QvV5wt6mLVVVrFLx9ww&s=10"
        ]
    },
    lc: {
        name: "Lexus LC",
        type: "LUXURY GRAND TOURER",
        description: "سيارة كوبيه فاخرة بتصميم مميز.",
        images: [
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQkY-Q6zG4Kq4bZTILw_mdbCcU_29UR6S1mp1nG8jJ8Sg&s=10",
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTj7ZIhKBvJnYyz-PvBzYT6or6-uy3ud-eOXnWCigPptg&s=10",
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQob85y_6YS8CRYV-gaBdVq7RKG21my7lcryb5Wt9Kn9A&s=10"
        ]
    },
    lm: {
        name: "Lexus LM",
        type: "LUXURY MPV",
        description: "مركبة فاخرة تركز على راحة الركاب والمساحة الداخلية.",
        images: [
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSIoKVjMorohmS-l0ZORY8-RU0OgYKnSZQgjkFVqu4tvg&s=10",
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQdWgm1ICZ-X2F0h3Lvqsf1rAT7bYlDn61Du7KdVL4tOw&s=10",
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQsqIB_rByiSZQ9YMMA7_rUhfw78A4L-5-wJHY6MgeN_A&s=10"
        ]
    }
};
const params = new URLSearchParams(window.location.search);
const modelKey = (params.get("model") || "es").toLowerCase();
const car = vehicleModels[modelKey];
const content = document.getElementById("vehicleContent");
const breadcrumb = document.getElementById("breadcrumbModel");
document.getElementById("year").textContent = new Date().getFullYear();
if (!car) {
    breadcrumb.textContent = "السيارة غير موجودة";
    content.innerHTML = `
        <div class="vehicle-not-found">
            <h1>لم يتم العثور على السيارة</h1>
            <p>اختر موديلًا من قائمة سيارات لكزس.</p>
            <a class="vehicle-button" href="cars.html">العودة إلى السيارات</a>
        </div>
    `;
} else {
    document.title = car.name + " | مركز سعود التخصصي";
    breadcrumb.textContent = car.name;
    content.innerHTML = `
        <section class="vehicle-heading">
            <div>
                <p class="vehicle-eyebrow">${car.type}</p>
                <h1>${car.name}</h1>
                <p>${car.description}</p>
            </div>
        </section>
        <section class="vehicle-gallery" aria-label="معرض صور السيارة">
            <div class="gallery-main">
                <button class="gallery-arrow gallery-prev"
                    type="button" aria-label="الصورة السابقة">‹</button>
                <img id="mainCarImage"
                    src="${car.images[0]}"
                    alt="${car.name}"
                    fetchpriority="high">
                <button class="gallery-arrow gallery-next"
                    type="button" aria-label="الصورة التالية">›</button>
                <div class="gallery-counter" id="galleryCounter">1 / ${car.images.length}</div>
            </div>
            <div class="gallery-thumbnails" id="galleryThumbnails">
                ${car.images.map((src, index) => `
                    <button type="button"
                        class="gallery-thumb ${index === 0 ? "selected" : ""}"
                        data-index="${index}"
                        aria-label="عرض الصورة ${index + 1}">
                        <img src="${src}" alt="${car.name} - صورة ${index + 1}">
                    </button>
                `).join("")}
            </div>
            <p class="gallery-note">
                معرض صور استرشادي. الصور الحالية عامة وليست صورًا موثقة لكل موديل.
            </p>
        </section>
        <section class="vehicle-bottom">
            <div>
                <span class="vehicle-eyebrow">SAUD SPECIALIZED CENTER</span>
                <h2>عناية تليق بسيارتك</h2>
                <p>تعرّف على خدمات المركز أو تواصل معنا للاستفسار عن صيانة سيارتك.</p>
            </div>
            <div class="vehicle-actions">
                <a class="vehicle-button" href="services.html">استعراض الخدمات</a>
                <a class="vehicle-button vehicle-button-outline"
                    href="https://wa.me/966502514079?text=${encodeURIComponent("السلام عليكم، أستفسر عن صيانة " + car.name + " في مركز سعود التخصصي.")}"
                    target="_blank" rel="noopener">استفسر عبر واتساب</a>
            </div>
        </section>
    `;
    const mainImage = document.getElementById("mainCarImage");
    const counter = document.getElementById("galleryCounter");
    const thumbnails = document.querySelectorAll(".gallery-thumb");
    let currentIndex = 0;
    function showImage(index) {
        currentIndex = (index + car.images.length) % car.images.length;
        mainImage.src = car.images[currentIndex];
        mainImage.alt = car.name + " - صورة " + (currentIndex + 1);
        counter.textContent = (currentIndex + 1) + " / " + car.images.length;
        thumbnails.forEach((thumb, i) => {
            thumb.classList.toggle("selected", i === currentIndex);
        });
    }
    document.querySelector(".gallery-prev").addEventListener("click", () => {
        showImage(currentIndex - 1);
    });
    document.querySelector(".gallery-next").addEventListener("click", () => {
        showImage(currentIndex + 1);
    });
    thumbnails.forEach(thumb => {
        thumb.addEventListener("click", () => {
            showImage(Number(thumb.dataset.index));
        });
    });
    mainImage.addEventListener("click", () => {
        const lightbox = document.createElement("div");
        lightbox.className = "gallery-lightbox";
        lightbox.innerHTML = `
            <button type="button" aria-label="إغلاق الصورة" class="lightbox-close">×</button>
            <img src="${car.images[currentIndex]}" alt="${car.name}">
        `;
        document.body.appendChild(lightbox);
        lightbox.addEventListener("click", event => {
            if (event.target === lightbox ||
                event.target.classList.contains("lightbox-close")) {
                lightbox.remove();
            }
        });
    });
}