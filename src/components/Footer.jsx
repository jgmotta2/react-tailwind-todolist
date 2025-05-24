function Footer() {
    return (
        <footer className="relative text-lg font-semibold bg-gradient-to-r from-black via-[#1a1a1a] to-black text-[#bfa14a] py-8 px-4 text-center rounded-t-2xl shadow-2xl border-t-4 border-[#bfa14a] drop-shadow-lg mt-12 overflow-hidden">
            {/* Efeito de brilho mais visual */}
            <div className="pointer-events-none absolute inset-0 z-0">
                {/* Brilho central forte */}
                <div className="absolute left-1/2 top-0 w-2/3 h-1/2 -translate-x-1/2 bg-gradient-to-r from-transparent via-[#fffbe6]/70 to-transparent blur-2xl opacity-70 animate-pulse"></div>
                {/* Brilho lateral dourado */}
                <div className="absolute left-0 bottom-0 w-1/3 h-1/3 bg-gradient-to-r from-[#bfa14a]/40 to-transparent blur-xl opacity-60 animate-pulse"></div>
                <div className="absolute right-0 bottom-0 w-1/3 h-1/3 bg-gradient-to-l from-[#bfa14a]/40 to-transparent blur-xl opacity-60 animate-pulse"></div>
            </div>
            <span className="relative z-10 bg-gradient-to-r from-[#bfa14a] via-[#ffe066] to-[#bfa14a] bg-clip-text text-transparent drop-shadow-[0_2px_8px_rgba(191,161,74,0.5)] tracking-wide transition-all duration-500 hover:scale-110 hover:drop-shadow-[0_4px_16px_rgba(191,161,74,0.7)]">
                © {new Date().getFullYear()} <b>ToDo List</b> <span className="text-[#ffe066]">•</span> All Rights Reserved
            </span>
        </footer>
    );
}

export default Footer;