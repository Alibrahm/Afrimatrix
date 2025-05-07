import React, { useEffect, useState } from "react";
import {
  FiArrowRight,
  // FiBarChart2,
  FiChevronDown,
  FiHome,
  // FiPieChart,
  FiUsers,
  FiGlobe,
  FiTrendingUp,
 
  FiMenu,
} from "react-icons/fi";
import { AnimatePresence, motion } from "framer-motion";

interface TabProps {
  children: React.ReactNode;
  tab: number;
  handleSetSelected: (val: number | null) => void;
  selected: number | null;
  hasMultipleLinks: boolean;
}

interface ContentProps {
  selected: number | null;
  dir: "l" | "r" | null;
}

interface MobileTabsProps {
  onClose: () => void;
}

interface ResearchProps {
  isMobile?: boolean;
}

export const ShiftingDropDown = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <div className="w-full">
      {/* Mobile Menu Button */}
      <div className="md:hidden p-2">
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="text-neutral-200 p-2"
          aria-label="Toggle menu"
        >
          <FiMenu size={24} />
        </button>
      </div>

      {/* Desktop Menu */}
      <div className="hidden md:flex w-full justify-start p-2 text-neutral-200 md:justify-end">
        <Tabs />
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden fixed top-0 left-0 w-full h-screen bg-neutral-900 z-40"
          >
            <div className="p-4 pt-20">
              <MobileTabs onClose={() => setIsMobileMenuOpen(false)} />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

const MobileTabs = ({ onClose }: MobileTabsProps) => {
  return (
    <div className="p-4 space-y-4">
      <button
        onClick={onClose}
        className="absolute top-4 right-4 text-neutral-200 p-2"
        aria-label="Close menu"
      >
        <FiMenu size={24} />
      </button>
      {TABS.map((tab) => (
        <div key={tab.id} className="border-b border-neutral-700 pb-4">
          <h3 className="text-lg font-medium text-neutral-200 mb-2">{tab.title}</h3>
          <div className="pl-4">
            <tab.Component isMobile={true} />
          </div>
        </div>
      ))}
    </div>
  );
};

const Tabs = () => {
  const [selected, setSelected] = useState<number | null>(null);
  const [dir, setDir] = useState<"l" | "r" | null>(null);

  const handleSetSelected = (val: number | null) => {
    const selectedTab = TABS.find((t) => t.id === val);
    const hasMultipleLinks = selectedTab?.hasMultipleLinks;

    if (typeof selected === "number" && typeof val === "number") {
      setDir(selected > val ? "r" : "l");
    } else if (val === null) {
      setDir(null);
    }

    setSelected(hasMultipleLinks ? val : null);
  };

  const selectedTab = TABS.find((t) => t.id === selected);
  const hasSubLinks = selectedTab?.hasMultipleLinks;

  return (
    <div
      onMouseLeave={() => handleSetSelected(null)}
      className="relative flex h-fit gap-2"
    >
      {TABS.map((t) => (
        <Tab
          key={t.id}
          selected={selected}
          handleSetSelected={handleSetSelected}
          tab={t.id}
          hasMultipleLinks={t.hasMultipleLinks}
        >
          {t.title}
        </Tab>
      ))}

      <AnimatePresence>
        {hasSubLinks && <Content dir={dir} selected={selected} />}
      </AnimatePresence>
    </div>
  );
};

const Tab = ({
  children,
  tab,
  handleSetSelected,
  selected,
  hasMultipleLinks,
}: TabProps) => {
  return (
    <button
      id={`shift-tab-${tab}`}
      onMouseEnter={() => hasMultipleLinks && handleSetSelected(tab)}
      onClick={() => hasMultipleLinks && handleSetSelected(tab)}
      className={`flex items-center gap-1 rounded-full px-3 py-1.5 text-sm transition-colors ${
        selected === tab
          ? "bg-neutral-800 text-neutral-100"
          : "text-neutral-400 hover:text-neutral-200"
      }`}
    >
      <span>{children}</span>
      {hasMultipleLinks && (
        <FiChevronDown
          className={`transition-transform ${
            selected === tab ? "rotate-180" : ""
          }`}
        />
      )}
    </button>
  );
};

const Content = ({ selected, dir }: ContentProps) => {
  return (
    <motion.div
      id="overlay-content"
      initial={{
        opacity: 0,
        y: 8,
      }}
      animate={{
        opacity: 1,
        y: 0,
      }}
      exit={{
        opacity: 0,
        y: 8,
      }}
      className="absolute left-0 top-[calc(100%_+_24.5px)] w-[29.5rem] rounded-lg border border-neutral-600 bg-gradient-to-b from-neutral-900 via-neutral-900 to-neutral-800 p-4 shadow-xl"
    >
      <Bridge />
      <Nub selected={selected} />

      {TABS.map((t) => (
        <div className="overflow-hidden" key={t.id}>
          {selected === t.id && (
            <motion.div
              initial={{
                opacity: 0,
                x: dir === "l" ? 100 : dir === "r" ? -100 : 0,
              }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.25, ease: "easeInOut" }}
            >
              <t.Component isMobile={false} />
            </motion.div>
          )}
        </div>
      ))}
    </motion.div>
  );
};

const Bridge = () => (
  <div className="absolute -top-[24px] left-0 right-0 h-[24px]" />
);

const Nub = ({ selected }: { selected: number | null }) => {
  const [left, setLeft] = useState(0);

  useEffect(() => {
    moveNub();
  }, [selected]);

  const moveNub = () => {
    if (selected) {
      const hoveredTab = document.getElementById(`shift-tab-${selected}`);
      const overlayContent = document.getElementById("overlay-content");

      if (!hoveredTab || !overlayContent) return;

      const tabRect = hoveredTab.getBoundingClientRect();
      const { left: contentLeft } = overlayContent.getBoundingClientRect();

      const tabCenter = tabRect.left + tabRect.width / 2 - contentLeft;

      setLeft(tabCenter);
    }
  };

  return (
    <motion.span
      style={{
        clipPath: "polygon(0 0, 100% 0, 50% 50%, 0% 100%)",
      }}
      animate={{ left }}
      transition={{ duration: 0.25, ease: "easeInOut" }}
      className="absolute left-1/2 top-0 h-4 w-4 -translate-x-1/2 -translate-y-1/2 rotate-45 rounded-tl border border-neutral-600 bg-neutral-900"
    />
  );
};

const Research = ({ isMobile = false }: ResearchProps) => {
  const researchLinks = [
    { icon: <FiGlobe />, title: "Market Research", href: "/research" },
    // { icon: <FiTrendingUp />, title: "Social Listening", href: "/research/social" },
    // { icon: <FiBarChart2 />, title: "Our Work", href: "/research/work" },
    // { icon: <FiPieChart />, title: "Strategy PoV", href: "/research/strategy" },
  ];

  return (
    <div className={`${isMobile ? 'grid grid-cols-1 gap-4' : 'grid grid-cols-3 gap-4 divide-x divide-neutral-700'}`}>
      {researchLinks.map((link, index) => (
        <a
          key={index}
          href={link.href}
          className="flex w-full flex-col items-center justify-center py-2 text-neutral-400 transition-colors hover:text-neutral-50"
        >
          <span className="mb-2 text-xl text-indigo-300">{link.icon}</span>
          <span className="text-xs">{link.title}</span>
        </a>
      ))}
    </div>
  );
};

const Services = ({ isMobile = false }: ResearchProps) => {
  const services = [
    { icon: <FiUsers />, title: "B2B Research", href: "/services/b2b" },
    { icon: <FiGlobe />, title: "Global Panels", href: "/services/panels" },
    { icon: <FiTrendingUp />, title: "Analytics", href: "/services/analytics" },
  ];

  return (
    <div className={`${isMobile ? 'grid grid-cols-1 gap-4' : 'grid grid-cols-3 gap-4 divide-x divide-neutral-700'}`}>
      {services.map((service, index) => (
        <a
          key={index}
          href={service.href}
          className="flex w-full flex-col items-center justify-center py-2 text-neutral-400 transition-colors hover:text-neutral-50"
        >
          <span className="mb-2 text-xl text-indigo-300">{service.icon}</span>
          <span className="text-xs">{service.title}</span>
        </a>
      ))}
    </div>
  );
};

const About = ({ isMobile = false }: ResearchProps) => {
  const aboutLinks = [
    { icon: <FiHome />, title: "About Us", href: "/about" },
    { icon: <FiUsers />, title: "Our Team", href: "/team" },
    { icon: <FiGlobe />, title: "Coverage", href: "/coverage" },
  ];

  return (
    <div className={`${isMobile ? 'grid grid-cols-1 gap-4' : 'grid grid-cols-3 gap-4 divide-x divide-neutral-700'}`}>
      {aboutLinks.map((link, index) => (
        <a
          key={index}
          href={link.href}
          className="flex w-full flex-col items-center justify-center py-2 text-neutral-400 transition-colors hover:text-neutral-50"
        >
          <span className="mb-2 text-xl text-indigo-300">{link.icon}</span>
          <span className="text-xs">{link.title}</span>
        </a>
      ))}
    </div>
  );
};

const Blog = ({ isMobile = false }: ResearchProps) => {
  return (
    <div>
      <div className={`grid ${isMobile ? 'grid-cols-1' : 'grid-cols-2'} gap-4`}>
        <a href="/blog/market-trends" className="block">
          <img
            className="mb-2 h-32 w-full rounded object-cover"
            src="/imgs/blog/market-trends.jpg"
            alt="Market Trends"
          />
          <h4 className="mb-1 text-sm font-medium">Market Trends 2024</h4>
          <p className="text-xs text-neutral-400">
            Insights into emerging market trends and consumer behavior patterns.
          </p>
        </a>
        <a href="/blog/research-methods" className="block">
          <img
            className="mb-2 h-32 w-full rounded object-cover"
            src="/imgs/blog/research-methods.jpg"
            alt="Research Methods"
          />
          <h4 className="mb-1 text-sm font-medium">Advanced Research Methods</h4>
          <p className="text-xs text-neutral-400">
            Exploring innovative approaches to market research and data analysis.
          </p>
        </a>
      </div>
      <a href="/blog" className="mt-4 flex items-center gap-1 text-sm text-indigo-300">
        <span>View all articles</span>
        <FiArrowRight />
      </a>
    </div>
  );
};

const Contact = ({ isMobile = false }: ResearchProps) => {
  return (
    <a
      href="/contact"
      className={`flex w-full flex-col items-center justify-center py-2 text-neutral-400 transition-colors hover:text-neutral-50 ${
        isMobile ? 'text-lg' : ''
      }`}
    >
      <span>Contact Us</span>
    </a>
  );
};

const TABS = [
  {
    title: "About",
    Component: About,
    hasMultipleLinks: true,
  },
  {
    title: "Research",
    Component: Research,
    hasMultipleLinks: true,
  },
  {
    title: "Services",
    Component: Services,
    hasMultipleLinks: true,
  },
  {
    title: "Blog",
    Component: Blog,
    hasMultipleLinks: true,
  },
  {
    title: "Contact",
    Component: Contact,
    hasMultipleLinks: false,
  },
].map((n, idx) => ({ ...n, id: idx + 1 }));
