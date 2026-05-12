const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
const isTouchDevice = window.matchMedia("(hover: none), (pointer: coarse)").matches;

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

    const titleLines = gsap.utils.toArray(".hero__name-line");

    gsap.set([".reveal-text", ".hero__desc", ".motto", ".hero__actions", ".hero__portrait-motion"], {
        y: 26,
        opacity: 0
    });
    gsap.set([".hero__name-line", ".hero__cn-name"], {
        y: 36,
        opacity: 0
    });

    const tl = gsap.timeline({ defaults: { ease: "power3.out" }, delay: 0.28 });
    tl.to(titleLines, {
        y: 0,
        opacity: 1,
        stagger: 0.08,
        duration: 0.9
    })
        .to(".hero__cn-name", { y: 0, opacity: 1, duration: 0.72 }, "-=0.48")
        .to(".reveal-text", { y: 0, opacity: 1, duration: 0.75 }, 0.12)
        .to(".hero__portrait-motion", { y: 0, opacity: 1, duration: 1.2 }, 0.3)
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

    gsap.to(".hero__portrait-motion", {
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

    gsap.utils.toArray(".exp-card, .proj-item, .work-photo, .case-section").forEach((card, index) => {
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
            },
            clearProps: "transform"
        });
    });

    gsap.utils.toArray(".case-gallery").forEach((gallery) => {
        gsap.from(gallery.querySelectorAll("figure"), {
            y: 28,
            opacity: 0,
            duration: 0.72,
            stagger: 0.055,
            ease: "power3.out",
            scrollTrigger: {
                trigger: gallery,
                start: "top 84%"
            },
            clearProps: "transform"
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

document.addEventListener("DOMContentLoaded", () => {
    initLoader();
    initHeroMotion();
    initScrollStories();
});
