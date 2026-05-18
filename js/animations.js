const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

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

    gsap.set([".reveal-text", ".hero__meta span", ".hero__desc", ".motto", ".hero__actions"], {
        y: 26,
        opacity: 0
    });
    gsap.set(".hero__name-line", {
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
        .to(".reveal-text", { y: 0, opacity: 1, duration: 0.75 }, 0.12)
        .to(".hero__meta span", {
            y: 0,
            opacity: 1,
            duration: 0.62,
            stagger: 0.055
        }, 0.62)
        .to([".hero__desc", ".motto", ".hero__actions"], {
            y: 0,
            opacity: 1,
            duration: 0.85,
            stagger: 0.12
        }, 0.72)
        .add(() => typeMotto(motto, mottoText), 1.15);
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

function initScrollStories() {
    if (!window.gsap || !window.ScrollTrigger || prefersReducedMotion) return;

    try {
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
                        start: "top 78%",
                        once: true
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
                    start: "top 86%",
                    once: true
                },
                clearProps: "transform,opacity"
            });
        });

        gsap.utils.toArray(".case-gallery").filter((gallery) => !gallery.closest(".case-section[hidden]")).forEach((gallery) => {
            gsap.from(gallery.querySelectorAll("figure"), {
                y: 28,
                opacity: 0,
                duration: 0.72,
                stagger: 0.055,
                ease: "power3.out",
                scrollTrigger: {
                    trigger: gallery,
                    start: "top 84%",
                    once: true
                },
                clearProps: "transform,opacity"
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
    } catch (error) {
        document.querySelectorAll(".section-heading, .site-footer .section-title, .exp-card, .proj-item, .work-photo, .case-section, .case-gallery figure").forEach((node) => {
            node.style.opacity = "";
            node.style.transform = "";
        });
        console.warn("Scroll animation fallback enabled.", error);
    }
}

document.addEventListener("DOMContentLoaded", () => {
    initLoader();
    initHeroMotion();
    initScrollStories();
});
