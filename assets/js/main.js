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
        "case-role": "Role",
        "case-tools": "Tools",
        "case-timeline": "Timeline",
        "case-outcome": "Outcome",
        "case-esg-desc": "主导 UI 原型设计与产品功能策划，将 ESG 议题转化为更清晰的用户任务、数据表达与商业逻辑。",
        "case-design-desc": "负责校级比赛海报制作与推文全流程统筹，用统一视觉节奏提升活动传播的辨识度与完成度。",
        "case-loreal-desc": "参与欧莱雅 Brandstorm 商赛，负责前端 UI、海报设计、生产与定价表达，将品牌概念转化为可展示体验。",
        "case-esg-outcome": "完成 ESG 产品原型与视觉叙事，让复杂议题以更清晰的任务流呈现。",
        "case-design-outcome": "形成更统一的校园传播视觉节奏，提升活动内容的识别度。",
        "case-loreal-outcome": "将品牌概念转化为可浏览的前端体验和完整展示素材。",
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
        "case-role": "Role",
        "case-tools": "Tools",
        "case-timeline": "Timeline",
        "case-outcome": "Outcome",
        "case-esg-desc": "Led UI prototyping and product planning, translating ESG topics into clear user tasks, data storytelling, and business logic.",
        "case-design-desc": "Coordinated campus event posters and social content, using consistent visual rhythm to improve recognition and delivery quality.",
        "case-loreal-desc": "Worked on L'Oreal Brandstorm front-end UI, poster design, production, and pricing narrative to turn a brand concept into a presentable experience.",
        "case-esg-outcome": "Built an ESG prototype and visual narrative that turns complex topics into a clearer task flow.",
        "case-design-outcome": "Created a more unified visual rhythm for campus communication and event recognition.",
        "case-loreal-outcome": "Turned the brand concept into a browsable front-end experience and presentation assets.",
        "pos-intern": "Intern",
        "pos-staff": "Staff",
        "pos-vice-director": "Vice Director",
        "pos-member": "Member",
        "view-project": "View Project"
    }
};

let currentLang = "zh";

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
}

function toggleMenu(force) {
    const menu = qs("#navLinks");
    const button = qs(".menu-toggle");
    const shouldOpen = typeof force === "boolean" ? force : !menu.classList.contains("active");
    menu.classList.toggle("active", shouldOpen);
    button.setAttribute("aria-expanded", String(shouldOpen));
}

function bindNavigation() {
    qsa('a[href^="#"]').forEach((link) => {
        link.addEventListener("click", (event) => {
            const target = qs(link.getAttribute("href"));
            if (!target) return;
            event.preventDefault();
            toggleMenu(false);
            target.scrollIntoView({ behavior: "smooth", block: "start" });
        });
    });
}

function scrollToTarget(selector) {
    const target = qs(selector);
    if (!target) return;
    target.scrollIntoView({ behavior: "smooth", block: "start" });
}

function bindInteractions() {
    qs("#lang-switch").addEventListener("click", () => {
        setLanguage(currentLang === "zh" ? "en" : "zh");
    });

    qs(".menu-toggle").addEventListener("click", () => toggleMenu());

    qsa("[data-target]").forEach((card) => {
        const openCase = () => scrollToTarget(card.dataset.target);
        card.addEventListener("click", openCase);
        card.addEventListener("keydown", (event) => {
            if (event.key === "Enter" || event.key === " ") {
                event.preventDefault();
                openCase();
            }
        });
    });

    document.addEventListener("keydown", (event) => {
        if (event.key === "Escape") {
            toggleMenu(false);
        }
    });
}

document.addEventListener("DOMContentLoaded", () => {
    setLanguage(currentLang);
    bindNavigation();
    bindInteractions();
});
