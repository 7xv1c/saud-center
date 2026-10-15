document.addEventListener("DOMContentLoaded", function () {
    const menuToggle = document.getElementById("menuToggle");
    const mainNav = document.getElementById("mainNav");

    if (menuToggle && mainNav) {
        menuToggle.addEventListener("click", function () {
            const isOpen = mainNav.classList.toggle("open");
            menuToggle.setAttribute("aria-expanded", String(isOpen));
        });
    }

    const year = document.getElementById("year");
    if (year) {
        year.textContent = new Date().getFullYear();
    }

    const services = {
        mechanical: {
            title: "خدمات الميكانيكا",
            description: "فحص وصيانة وإصلاح أنظمة المحرك والحركة وفق حالة السيارة ونتائج الفحص.",
            items: ["فحص المحرك", "الصيانة الدورية", "فحص أنظمة التبريد", "تشخيص أصوات المحرك"]
        },
        electrical: {
            title: "الكهرباء والفحص الإلكتروني",
            description: "قراءة أكواد الأعطال وتشخيص المشكلات الكهربائية والإلكترونية.",
            items: ["قراءة أكواد الأعطال", "فحص الحساسات", "فحص أنظمة التشغيل", "تشخيص الأعطال الكهربائية"]
        },
        ac: {
            title: "خدمات التكييف",
            description: "فحص نظام التكييف وتحديد أسباب ضعف التبريد أو الأعطال.",
            items: ["فحص التبريد", "فحص التسريبات", "فحص الضاغط", "تشخيص أعطال نظام التكييف"]
        },
        bodywork: {
            title: "السمكرة والدهان",
            description: "خدمات إصلاح الهيكل والدهان بحسب حالة السيارة ونطاق العمل المطلوب.",
            items: ["إصلاح أضرار الهيكل", "تجهيز الأسطح", "أعمال الدهان", "فحص المظهر الخارجي"]
        }
    };

    const models = {
        es: {
            title: "Lexus ES",
            description: "استكشف خدمات الفحص والصيانة المناسبة لسيارتك Lexus ES.",
            image: "https://images.unsplash.com/photo-1621007947382-bb3c3994e3fb?auto=format&fit=crop&w=1200&q=85"
        },
        ls: {
            title: "Lexus LS",
            description: "خدمات فحص وصيانة للسيارة الفاخرة Lexus LS حسب حالتها واحتياجاتها.",
            image: "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?auto=format&fit=crop&w=1200&q=85"
        },
        lx: {
            title: "Lexus LX",
            description: "استكشف خيارات الفحص والصيانة لسيارة Lexus LX.",
            image: "https://images.unsplash.com/photo-1519641471654-76ce0107ad1b?auto=format&fit=crop&w=1200&q=85"
        }
    };

    const serviceDetail = document.getElementById("serviceDetail");
    if (serviceDetail) {
        const params = new URLSearchParams(window.location.search);
        const key = params.get("type") || "mechanical";
        const service = services[key] || services.mechanical;

        serviceDetail.innerHTML = `
            <div class="detail-layout">
                <div class="content-panel">
                    <span class="eyebrow">OUR SERVICES</span>
                    <h2>${service.title}</h2>
                    <p>${service.description}</p>
                    <h3>ماذا تشمل الخدمة؟</h3>
                    <div class="feature-list">
                        ${service.items.map(item => `
                            <div class="feature-item">
                                <h3>✓ ${item}</h3>
                                <p>يتم تحديد نطاق العمل بعد فحص السيارة.</p>
                            </div>
                        `).join("")}
                    </div>
                </div>
                <aside class="detail-sidebar">
                    <h3>هل تحتاج إلى هذه الخدمة؟</h3>
                    <p>تواصل مع المركز لمناقشة احتياج سيارتك وتحديد موعد مناسب.</p>
                    <a class="btn btn-gold" href="booking.html?service=${encodeURIComponent(service.title)}">احجز موعدك</a>
                    <br>
                    <a class="text-link" href="https://wa.me/966502514079" target="_blank" rel="noopener">تواصل عبر واتساب ↗</a>
                </aside>
            </div>`;
    }

    const carDetail = document.getElementById("carDetail");
    if (carDetail) {
        const params = new URLSearchParams(window.location.search);
        const key = params.get("model") || "es";
        const car = models[key] || models.es;

        carDetail.innerHTML = `
            <div class="detail-layout">
                <div>
                    <div class="detail-image" style="background-image:url('${car.image}')"></div>
                    <div class="content-panel" style="margin-top:20px">
                        <span class="eyebrow">VEHICLE CARE</span>
                        <h2>${car.title}</h2>
                        <p>${car.description}</p>
                        <p>تختلف احتياجات الصيانة بحسب سنة الصنع، والممشى، وحالة السيارة.</p>
                    </div>
                </div>
                <aside class="detail-sidebar">
                    <h3>الخدمات المتاحة</h3>
                    <p>الميكانيكا، والكهرباء والفحص، والتكييف، والسمكرة والدهان.</p>
                    <a class="btn btn-gold" href="booking.html?car=${encodeURIComponent(car.title)}">احجز موعدًا لسيارتك</a>
                    <a class="text-link" href="services.html">استعراض جميع الخدمات ←</a>
                </aside>
            </div>`;
    }

    const bookingForm = document.getElementById("bookingForm");
    if (bookingForm) {
        const params = new URLSearchParams(window.location.search);
        const carField = document.getElementById("car");
        const serviceField = document.getElementById("service");

        if (carField && params.get("car")) carField.value = params.get("car");
        if (serviceField && params.get("service")) serviceField.value = params.get("service");

        bookingForm.addEventListener("submit", function (event) {
            event.preventDefault();

            const data = new FormData(bookingForm);
            const message = [
                "السلام عليكم، أرغب في حجز موعد لدى مركز سعود التخصصي.",
                "الاسم: " + (data.get("name") || ""),
                "رقم الجوال: " + (data.get("phone") || ""),
                "السيارة: " + (data.get("car") || ""),
                "الخدمة: " + (data.get("service") || ""),
                "التاريخ المفضل: " + (data.get("date") || ""),
                "تفاصيل إضافية: " + (data.get("notes") || "لا يوجد")
            ].join("\n");

            const url = "https://wa.me/966502514079?text=" + encodeURIComponent(message);
            window.open(url, "_blank", "noopener");
        });
    }
});
// تقويم حجز الموعد
document.addEventListener("DOMContentLoaded", function () {
    const dateInput = document.getElementById("appointmentDate");
    if (dateInput) {
        const today = new Date();
        const year = today.getFullYear();
        const month = String(today.getMonth() + 1).padStart(2, "0");
        const day = String(today.getDate()).padStart(2, "0");
        dateInput.min = `${year}-${month}-${day}`;
    }
});

// شريط السيارات المتحرك في الصفحة الرئيسية
(function () {
    const track = document.getElementById("carsTrack");
    const wrapper = document.querySelector(".cars-track-wrapper");
    if (!track || !wrapper) return;
    const previousButton = document.getElementById("sliderPrev");
    const nextButton = document.getElementById("sliderNext");
    const progress = document.getElementById("sliderProgress");
    let position = 0;
    let animationFrame = null;
    let lastTime = 0;
    let paused = false;
    let dragging = false;
    let startX = 0;
    let startPosition = 0;
    const speed = 35; // سرعة الحركة بالبكسل في الثانية
    const originalCards = Array.from(track.children);
    // تكرار البطاقات لتستمر الحركة بسلاسة.
    originalCards.forEach(card => {
        const clone = card.cloneNode(true);
        clone.setAttribute("aria-hidden", "true");
        clone.querySelectorAll("a, button").forEach(el => {
            el.setAttribute("tabindex", "-1");
        });
        track.appendChild(clone);
    });
    function getLoopWidth() {
        return track.scrollWidth / 2;
    }
    function render() {
        const loopWidth = getLoopWidth();
        if (loopWidth > 0) {
            position = ((position % loopWidth) + loopWidth) % loopWidth;
        }
        track.style.transform = `translate3d(${-position}px, 0, 0)`;
        const maxScroll = Math.max(1, loopWidth - wrapper.clientWidth);
        const percentage = Math.min(100, (position / maxScroll) * 100);
        if (progress) {
            progress.style.width = percentage + "%";
        }
    }
    function animate(timestamp) {
        if (!track.isConnected) return;
        if (!lastTime) lastTime = timestamp;
        const elapsed = Math.min((timestamp - lastTime) / 1000, 0.05);
        lastTime = timestamp;
        if (!paused && !dragging) {
            // يتحرك باتجاه اليسار باستمرار.
            position += speed * elapsed;
            render();
        }
        animationFrame = requestAnimationFrame(animate);
    }
    function moveByCard(direction) {
        const firstCard = track.querySelector(".showcase-car");
        if (!firstCard) return;
        const gap = parseFloat(getComputedStyle(track).gap) || 0;
        position += direction * (firstCard.getBoundingClientRect().width + gap);
        render();
    }
    previousButton?.addEventListener("click", () => moveByCard(-1));
    nextButton?.addEventListener("click", () => moveByCard(1));
    wrapper.addEventListener("mouseenter", () => {
        paused = true;
    });
    wrapper.addEventListener("mouseleave", () => {
        paused = false;
    });
    wrapper.addEventListener("focusin", () => {
        paused = true;
    });
    wrapper.addEventListener("focusout", () => {
        paused = false;
    });
    wrapper.addEventListener("pointerdown", event => {
        if (event.pointerType === "mouse" && event.button !== 0) return;
        dragging = true;
        startX = event.clientX;
        startPosition = position;
        wrapper.setPointerCapture?.(event.pointerId);
    });
    wrapper.addEventListener("pointermove", event => {
        if (!dragging) return;
        const distance = startX - event.clientX;
        position = startPosition + distance;
        render();
    });
    function stopDragging() {
        dragging = false;
    }
    wrapper.addEventListener("pointerup", stopDragging);
    wrapper.addEventListener("pointercancel", stopDragging);
    wrapper.addEventListener("lostpointercapture", stopDragging);
    wrapper.style.touchAction = "pan-y";
    window.addEventListener("resize", render);
    render();
    animationFrame = requestAnimationFrame(animate);
})();

const maintenanceMileageGroups = [
    [
        10000, 30000, 50000, 70000, 90000,
        110000, 130000, 150000, 170000,
        190000, 210000, 230000, 250000,
        270000, 290000
    ],
    [
        20000, 40000, 60000, 100000, 120000,
        140000, 180000, 200000, 220000,
        260000, 280000, 300000
    ],
    [80000, 160000, 240000, 320000, 400000]
];

// تحديد أقرب صيانة للممشى المدخل
function getNearestMaintenanceMileage(mileage) {
    const value = Number(mileage);

    if (!Number.isFinite(value) || value < 0) {
        return null;
    }

    const allMileages = maintenanceMileageGroups.flat();

    let nearest = allMileages[0];

    for (const scheduledMileage of allMileages) {
        const currentDifference = Math.abs(value - scheduledMileage);
        const nearestDifference = Math.abs(value - nearest);

        if (
            currentDifference < nearestDifference ||
            (currentDifference === nearestDifference &&
             scheduledMileage > nearest)
        ) {
            nearest = scheduledMileage;
        }
    }

    return nearest;
}

// معرفة رقم جدول الصيانة الذي ينتمي إليه الممشى
function getMaintenanceGroup(mileage) {
    const nearest = getNearestMaintenanceMileage(mileage);

    if (nearest === null) {
        return null;
    }

    return maintenanceMileageGroups.findIndex(
        group => group.includes(nearest)
    ) + 1;
}