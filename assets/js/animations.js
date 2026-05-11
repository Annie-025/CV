const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
const isTouchDevice = window.matchMedia("(hover: none), (pointer: coarse)").matches;

function initLenis() {
    if (prefersReducedMotion || typeof Lenis === "undefined") return;

    window.lenis = new Lenis({
        duration: 1.22,
        easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
        smoothWheel: true,
        wheelMultiplier: 0.86,
        touchMultiplier: 1.15
    });

    window.lenis.on("scroll", () => {
        if (window.ScrollTrigger) ScrollTrigger.update();
    });

    if (window.gsap && window.ScrollTrigger) {
        gsap.ticker.add((time) => window.lenis.raf(time * 1000));
        gsap.ticker.lagSmoothing(0);
    } else {
        const raf = (time) => {
            window.lenis.raf(time);
            requestAnimationFrame(raf);
        };
        requestAnimationFrame(raf);
    }
}

function initLoader() {
    const loader = document.getElementById("loader");
    if (!loader) return;

    const hide = () => loader.classList.add("is-hidden");
    if (window.gsap && !prefersReducedMotion) {
        gsap.delayedCall(0.75, hide);
    } else {
        window.setTimeout(hide, 450);
    }
}

function initHeroMotion() {
    const motto = document.querySelector(".motto span");
    const mottoText = document.querySelector(".motto")?.dataset.motto || "";

    if (!window.gsap || prefersReducedMotion) {
        if (motto) motto.textContent = mottoText;
        return;
    }

    const titleLetters = gsap.utils.toArray(".hero__title span");

    gsap.set([".reveal-text", ".hero__desc", ".motto", ".hero__actions", ".hero__portrait-wrap"], {
        y: 26,
        opacity: 0
    });
    gsap.set(titleLetters, { yPercent: 110, opacity: 0, rotateX: -42 });

    const tl = gsap.timeline({ defaults: { ease: "power3.out" }, delay: 0.28 });
    tl.to(titleLetters, {
        yPercent: 0,
        opacity: 1,
        rotateX: 0,
        stagger: 0.045,
        duration: 1.12
    })
        .to(".reveal-text", { y: 0, opacity: 1, duration: 0.75 }, 0.12)
        .to(".hero__portrait-wrap", { y: 0, opacity: 1, duration: 1.2 }, 0.3)
        .to([".hero__desc", ".motto", ".hero__actions"], {
            y: 0,
            opacity: 1,
            duration: 0.85,
            stagger: 0.12
        }, 0.72)
        .add(() => typeMotto(motto, mottoText), 1.15);

    gsap.to(".hero__light--one", {
        xPercent: 8,
        yPercent: -10,
        scrollTrigger: {
            trigger: ".hero",
            start: "top top",
            end: "bottom top",
            scrub: 1.2
        }
    });

    gsap.to(".hero__portrait-wrap", {
        yPercent: 12,
        scrollTrigger: {
            trigger: ".hero",
            start: "top top",
            end: "bottom top",
            scrub: 1.4
        }
    });

    if (!isTouchDevice) {
        initHeroParallax();
    }
}

function typeMotto(node, text) {
    if (!node || !text) return;
    node.textContent = "";
    let index = 0;
    const tick = () => {
        node.textContent = text.slice(0, index);
        index += 1;
        if (index <= text.length) {
            window.setTimeout(tick, 42);
        }
    };
    tick();
}

function initHeroParallax() {
    const hero = document.querySelector(".hero");
    const portrait = document.querySelector(".hero__portrait-wrap");
    const gradient = document.querySelector(".hero__gradient");
    const grid = document.querySelector(".hero__grid");
    if (!hero || !portrait || !gradient || !grid) return;

    const pointer = { x: 0, y: 0 };
    const target = { x: 0, y: 0 };
    let rafId = null;

    const render = () => {
        pointer.x += (target.x - pointer.x) * 0.08;
        pointer.y += (target.y - pointer.y) * 0.08;
        portrait.style.transform = `translate3d(${pointer.x * 20}px, ${pointer.y * 16}px, 0)`;
        gradient.style.transform = `translate3d(${pointer.x * -18}px, ${pointer.y * -14}px, 0) scale(1.04)`;
        grid.style.transform = `perspective(700px) rotateX(62deg) translate3d(${pointer.x * 14}px, ${pointer.y * 8}px, 0) translateY(15%)`;
        rafId = requestAnimationFrame(render);
    };

    hero.addEventListener("pointermove", (event) => {
        const rect = hero.getBoundingClientRect();
        target.x = (event.clientX - rect.left) / rect.width - 0.5;
        target.y = (event.clientY - rect.top) / rect.height - 0.5;
        if (!rafId) rafId = requestAnimationFrame(render);
    });

    hero.addEventListener("pointerleave", () => {
        target.x = 0;
        target.y = 0;
    });
}

function initScrollStories() {
    if (!window.gsap || !window.ScrollTrigger || prefersReducedMotion) return;

    gsap.registerPlugin(ScrollTrigger);

    gsap.utils.toArray("[data-section]").forEach((section) => {
        const heading = section.querySelector(".section-heading, .site-footer .section-title");
        if (heading) {
            gsap.from(heading, {
                y: 34,
                opacity: 0,
                duration: 0.9,
                ease: "power3.out",
                scrollTrigger: {
                    trigger: section,
                    start: "top 78%"
                }
            });
        }
    });

    gsap.utils.toArray(".exp-card, .proj-item, .work-photo").forEach((card, index) => {
        gsap.from(card, {
            y: 42,
            opacity: 0,
            scale: 0.98,
            duration: 0.85,
            delay: (index % 4) * 0.05,
            ease: "power3.out",
            scrollTrigger: {
                trigger: card,
                start: "top 86%"
            }
        });
    });

    gsap.utils.toArray(".project-orb").forEach((orb) => {
        gsap.to(orb, {
            y: -18,
            duration: 2.8,
            ease: "sine.inOut",
            repeat: -1,
            yoyo: true
        });
    });

    gsap.to(".footer-glow", {
        scale: 1.16,
        opacity: 0.72,
        duration: 4,
        ease: "sine.inOut",
        repeat: -1,
        yoyo: true
    });
}

function initProjectViewerMotion() {
    if (!window.gsap || prefersReducedMotion) return;

    const viewer = document.getElementById("projectViewer");
    const panel = document.querySelector(".viewer-panel");
    const backdrop = document.querySelector(".viewer-backdrop");

    window.addEventListener("projectViewer:open", () => {
        gsap.fromTo(backdrop, { opacity: 0 }, { opacity: 1, duration: 0.45, ease: "power2.out" });
        gsap.fromTo(panel, {
            y: 44,
            opacity: 0,
            scale: 0.985
        }, {
            y: 0,
            opacity: 1,
            scale: 1,
            duration: 0.72,
            ease: "power3.out"
        });
        gsap.fromTo(".viewer-meta > *, .viewer-gallery img", {
            y: 24,
            opacity: 0
        }, {
            y: 0,
            opacity: 1,
            duration: 0.62,
            stagger: 0.045,
            ease: "power3.out",
            delay: 0.12
        });
    });

    window.addEventListener("projectViewer:close", () => {
        gsap.set(viewer, { clearProps: "all" });
    });
}

function initCursor() {
    if (isTouchDevice || prefersReducedMotion) return;

    const cursor = document.getElementById("cursor");
    const glow = document.getElementById("cursorGlow");
    if (!cursor || !glow) return;

    const pos = { x: window.innerWidth / 2, y: window.innerHeight / 2 };
    const glowPos = { x: pos.x, y: pos.y };
    const target = { x: pos.x, y: pos.y };

    window.addEventListener("pointermove", (event) => {
        target.x = event.clientX;
        target.y = event.clientY;
    });

    const render = () => {
        pos.x += (target.x - pos.x) * 0.38;
        pos.y += (target.y - pos.y) * 0.38;
        glowPos.x += (target.x - glowPos.x) * 0.12;
        glowPos.y += (target.y - glowPos.y) * 0.12;
        cursor.style.transform = `translate3d(${pos.x}px, ${pos.y}px, 0) translate(-50%, -50%)`;
        glow.style.transform = `translate3d(${glowPos.x}px, ${glowPos.y}px, 0) translate(-50%, -50%)`;
        requestAnimationFrame(render);
    };
    requestAnimationFrame(render);

    document.addEventListener("pointerover", (event) => {
        if (event.target.closest("a, button, [role='button'], .magnetic")) {
            glow.classList.add("is-active");
        }
    });

    document.addEventListener("pointerout", (event) => {
        if (event.target.closest("a, button, [role='button'], .magnetic")) {
            glow.classList.remove("is-active");
        }
    });
}

function initMagnetic() {
    if (isTouchDevice || prefersReducedMotion) return;

    document.querySelectorAll(".magnetic").forEach((el) => {
        el.addEventListener("pointermove", (event) => {
            const rect = el.getBoundingClientRect();
            const x = event.clientX - rect.left - rect.width / 2;
            const y = event.clientY - rect.top - rect.height / 2;
            el.style.transform = `translate3d(${x * 0.16}px, ${y * 0.16}px, 0)`;
        });

        el.addEventListener("pointerleave", () => {
            el.style.transform = "";
        });
    });
}

document.addEventListener("DOMContentLoaded", () => {
    initLenis();
    initLoader();
    initHeroMotion();
    initScrollStories();
    initProjectViewerMotion();
    initCursor();
    initMagnetic();
});
