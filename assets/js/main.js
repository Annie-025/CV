const translations = {
    zh: {
        "nav-home": "主页",
        "nav-exp": "经历",
        "nav-proj": "作品",
        "nav-work": "记录",
        "nav-contact": "联系",
        "title-exp": "实践经历",
        "title-proj": "视觉成果集",
        "title-work": "工作记录",
        "title-contact": "与我联系",
        "hero-desc": "中山大学经济学本科生，具备出色的商业分析能力与跨学科技术实践背景。雅思 7.5，熟练掌握 Python 与前端开发。",
        "hero-cta": "探索作品",
        "hero-mail": "联系我",
        "hero-status": "OPEN TO CREATIVE STRATEGY",
        "exp-gs": "参与公司晨会，汇报行业动态与政策信息。协助客户开户与投资者教育，参与银行拜访。",
        "exp-uf": "撰写致商会新春贺信，获科室采纳。参与宗教场所安全排查与文件归档。",
        "exp-sysu-league": "负责学术交流活动的策划与组织，参与校级学术竞赛等项目的执行与推广。",
        "exp-debate": "参与校内外英语辩论赛事，提升语言表达与逻辑思维能力。积极参加外语文化交流活动。",
        "proj-esg": "ESG 应用",
        "proj-design": "视觉设计",
        "proj-loreal": "欧莱雅设计",
        "proj-esg-sub": "产品原型 / 商业逻辑 / 用户体验",
        "proj-design-sub": "校园传播 / 海报系统 / 内容统筹",
        "proj-loreal-sub": "Brandstorm / 前端 UI / 定价策略",
        "proj-esg-type": "CASE FILE / PRODUCT",
        "proj-design-type": "CASE FILE / VISUAL SYSTEM",
        "proj-loreal-type": "CASE FILE / BRAND EXPERIENCE",
        "proj-esg-role": "ROLE: Product Design",
        "proj-design-role": "ROLE: Visual Direction",
        "proj-loreal-role": "ROLE: Front-end UI",
        "open-case": "OPEN CASE →",
        "viewer-role": "Role",
        "viewer-tools": "Tools",
        "viewer-timeline": "Timeline",
        "viewer-outcome": "Outcome",
        "pos-intern": "实习生",
        "pos-staff": "干事",
        "pos-vice-director": "副委员",
        "pos-member": "成员",
        "view-project": "查看项目"
    },
    en: {
        "nav-home": "HOME",
        "nav-exp": "EXPERIENCE",
        "nav-proj": "PROJECTS",
        "nav-work": "LOG",
        "nav-contact": "CONTACT",
        "title-exp": "EXPERIENCE",
        "title-proj": "VISUAL PORTFOLIO",
        "title-work": "WORK LOG",
        "title-contact": "CONNECT",
        "hero-desc": "Economics undergrad at Sun Yat-sen University with a business-analysis mindset and a technical edge. IELTS 7.5, proficient in Python and front-end development.",
        "hero-cta": "Explore Work",
        "hero-mail": "Contact",
        "hero-status": "OPEN TO CREATIVE STRATEGY",
        "exp-gs": "Participated in morning meetings, reported industry trends and policy signals. Assisted with client onboarding, investor education, and bank visits.",
        "exp-uf": "Drafted official New Year letters for chambers of commerce and supported safety inspections plus document management.",
        "exp-sysu-league": "Planned and organized academic exchange activities, supporting the execution and promotion of campus-level academic competitions.",
        "exp-debate": "Joined English debate competitions and cultural exchange activities, strengthening language expression and critical thinking.",
        "proj-esg": "ESG App",
        "proj-design": "Visual Design",
        "proj-loreal": "L'Oreal Design",
        "proj-esg-sub": "Product Prototype / Business Logic / UX",
        "proj-design-sub": "Campus Media / Poster System / Content Ops",
        "proj-loreal-sub": "Brandstorm / Front-end UI / Pricing",
        "proj-esg-type": "CASE FILE / PRODUCT",
        "proj-design-type": "CASE FILE / VISUAL SYSTEM",
        "proj-loreal-type": "CASE FILE / BRAND EXPERIENCE",
        "proj-esg-role": "ROLE: Product Design",
        "proj-design-role": "ROLE: Visual Direction",
        "proj-loreal-role": "ROLE: Front-end UI",
        "open-case": "OPEN CASE →",
        "viewer-role": "Role",
        "viewer-tools": "Tools",
        "viewer-timeline": "Timeline",
        "viewer-outcome": "Outcome",
        "pos-intern": "Intern",
        "pos-staff": "Staff",
        "pos-vice-director": "Vice Director",
        "pos-member": "Member",
        "view-project": "View Project"
    }
};

const projectData = {
    esg: {
        title: "ESG APP DESIGN",
        kicker: "CASE STUDY / SUSTAINABILITY PRODUCT",
        descKey: {
            zh: "主导 UI 原型设计与产品功能策划，将 ESG 议题转化为更清晰的用户任务、数据表达与商业逻辑。",
            en: "Led UI prototyping and product planning, translating ESG topics into clear user tasks, data storytelling, and business logic."
        },
        roles: ["Product Thinking", "UI Prototype", "UX Flow"],
        tech: ["Figma", "Research", "Business Analysis"],
        timeline: ["01 Discovery", "02 IA & Flow", "03 Prototype", "04 Visual System"],
        outcome: {
            zh: "完成 ESG 产品原型与视觉叙事，让复杂议题以更清晰的任务流呈现。",
            en: "Built an ESG prototype and visual narrative that turns complex topics into a clearer task flow."
        },
        images: ["images/cd1.png", "images/cd2.png", "images/cd3.png", "images/cd4.png", "images/cd5.png", "images/cd6.png", "images/cd7.png", "images/cd8.png"]
    },
    design: {
        title: "VISUAL DESIGN",
        kicker: "CASE STUDY / CAMPUS COMMUNICATION",
        descKey: {
            zh: "负责校级比赛海报制作与推文全流程统筹，用统一视觉节奏提升活动传播的辨识度与完成度。",
            en: "Coordinated campus event posters and social content, using consistent visual rhythm to improve recognition and delivery quality."
        },
        roles: ["Poster Design", "Content Ops", "Visual Direction"],
        tech: ["Layout", "Typography", "Campaign Assets"],
        timeline: ["01 Brief", "02 Direction", "03 Production", "04 Delivery"],
        outcome: {
            zh: "形成更统一的校园传播视觉节奏，提升活动内容的识别度。",
            en: "Created a more unified visual rhythm for campus communication and event recognition."
        },
        images: ["images/1.png", "images/笃行致远.png", "images/第一届.png"]
    },
    loreal: {
        title: "L'OREAL BRANDSTORM",
        kicker: "CASE STUDY / BRAND EXPERIENCE",
        descKey: {
            zh: "参与欧莱雅 Brandstorm 商赛，负责前端 UI、海报设计、生产与定价表达，将品牌概念转化为可展示体验。",
            en: "Worked on L'Oreal Brandstorm front-end UI, poster design, production, and pricing narrative to turn a brand concept into a presentable experience."
        },
        roles: ["Front-end UI", "Poster Design", "Pricing Narrative"],
        tech: ["HTML", "CSS", "Brand System"],
        timeline: ["01 Concept", "02 Interface", "03 Poster", "04 Launch"],
        outcome: {
            zh: "将品牌概念转化为可浏览的前端体验和完整展示素材。",
            en: "Turned the brand concept into a browsable front-end experience and presentation assets."
        },
        images: ["images/loreal.jpg", "images/lr1.png", "images/lr2.png", "images/lr3.png", "images/lr4.png", "images/lr5.png", "images/lr6.png"],
        url: "https://annie-025.github.io/City_scent/"
    }
};

let currentLang = "zh";
let activeProjectId = null;
let lastFocusedElement = null;
let viewerIsClosing = false;

const qs = (selector, scope = document) => scope.querySelector(selector);
const qsa = (selector, scope = document) => [...scope.querySelectorAll(selector)];

function setLanguage(nextLang) {
    currentLang = nextLang;
    document.documentElement.lang = nextLang;
    qsa("[data-key]").forEach((el) => {
        const key = el.dataset.key;
        if (translations[nextLang][key]) {
            el.textContent = translations[nextLang][key];
        }
    });
    qs("#hero-desc").textContent = translations[nextLang]["hero-desc"];
    qs("#lang-switch").textContent = nextLang === "zh" ? "EN / 中" : "ZH / EN";

    if (activeProjectId) {
        renderViewer(activeProjectId);
    }
}

function toggleMenu(force) {
    const menu = qs("#navLinks");
    const button = qs(".menu-toggle");
    const shouldOpen = typeof force === "boolean" ? force : !menu.classList.contains("active");
    menu.classList.toggle("active", shouldOpen);
    document.body.classList.toggle("menu-open", shouldOpen);
    button.setAttribute("aria-expanded", String(shouldOpen));
}

function renderDataCard(labelKey, value) {
    const content = Array.isArray(value) ? value.join(" / ") : value;
    return `<section class="viewer-data-card"><b>${translations[currentLang][labelKey]}</b><span>${content}</span></section>`;
}

function renderViewer(projectId) {
    const data = projectData[projectId];
    if (!data) return;

    qs("#viewerKicker").textContent = data.kicker;
    qs("#viewerTitle").textContent = data.title;
    qs("#viewerDesc").textContent = data.descKey[currentLang];
    qs("#viewerDataGrid").innerHTML = [
        renderDataCard("viewer-role", data.roles),
        renderDataCard("viewer-tools", data.tech),
        renderDataCard("viewer-timeline", data.timeline),
        renderDataCard("viewer-outcome", data.outcome[currentLang])
    ].join("");
    qs("#viewerGallery").innerHTML = data.images
        .map((src, index) => `<img src="${src}" alt="${data.title} visual ${index + 1}" loading="lazy">`)
        .join("");
    qs("#viewerButtons").innerHTML = data.url
        ? `<a href="${data.url}" target="_blank" rel="noopener noreferrer" class="btn btn--primary magnetic">${translations[currentLang]["view-project"]}</a>`
        : "";
}

function openViewer(projectId) {
    const viewer = qs("#projectViewer");
    const panel = qs(".viewer-panel");
    const gallery = qs("#viewerGallery");
    activeProjectId = projectId;
    lastFocusedElement = document.activeElement;
    renderViewer(projectId);
    viewer.classList.add("is-open");
    viewer.setAttribute("aria-hidden", "false");
    document.body.classList.add("viewer-open");
    panel.scrollTop = 0;
    gallery.scrollTop = 0;
    if (window.lenis?.stop) window.lenis.stop();
    qs(".viewer-close").focus();
    window.dispatchEvent(new CustomEvent("projectViewer:open"));
    qsa("#viewerGallery img").forEach((img) => {
        img.addEventListener("load", () => window.ScrollTrigger?.refresh(), { once: true });
    });
    requestAnimationFrame(() => window.ScrollTrigger?.refresh());
}

async function closeViewer() {
    const viewer = qs("#projectViewer");
    if (!viewer.classList.contains("is-open") || viewerIsClosing) return;
    viewerIsClosing = true;
    if (window.playProjectViewerClose) {
        await window.playProjectViewerClose();
    }
    viewer.classList.remove("is-open");
    viewer.setAttribute("aria-hidden", "true");
    document.body.classList.remove("viewer-open");
    activeProjectId = null;
    if (window.lenis?.start) window.lenis.start();
    window.dispatchEvent(new CustomEvent("projectViewer:close"));
    if (lastFocusedElement) {
        lastFocusedElement.focus();
    }
    viewerIsClosing = false;
}

function bindNavigation() {
    qsa('a[href^="#"]').forEach((link) => {
        link.addEventListener("click", (event) => {
            const target = qs(link.getAttribute("href"));
            if (!target) return;
            event.preventDefault();
            toggleMenu(false);
            if (window.lenis) {
                window.lenis.scrollTo(target, { offset: 0 });
            } else {
                target.scrollIntoView({ behavior: "smooth" });
            }
        });
    });
}

function bindInteractions() {
    qs("#lang-switch").addEventListener("click", () => {
        setLanguage(currentLang === "zh" ? "en" : "zh");
    });

    qs(".menu-toggle").addEventListener("click", () => toggleMenu());

    qsa("[data-project]").forEach((card) => {
        const open = () => openViewer(card.dataset.project);
        card.addEventListener("click", open);
        card.addEventListener("keydown", (event) => {
            if (event.key === "Enter" || event.key === " ") {
                event.preventDefault();
                open();
            }
        });
    });

    qsa("[data-close-viewer]").forEach((el) => {
        el.addEventListener("click", closeViewer);
    });

    document.addEventListener("keydown", (event) => {
        if (event.key === "Escape") {
            closeViewer();
            toggleMenu(false);
        }
    });
}

document.addEventListener("DOMContentLoaded", () => {
    setLanguage(currentLang);
    bindNavigation();
    bindInteractions();
});
