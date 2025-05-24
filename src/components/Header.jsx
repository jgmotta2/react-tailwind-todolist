import coroa from '../assets/coroa.png';

function Header() {
    return (
        <header className="relative text-6xl font-extrabold bg-gradient-to-r from-black via-[#1a1a1a] to-black text-[#bfa14a] pt-16 pb-12 px-6 text-center rounded-b-2xl shadow-2xl tracking-wide border-b-4 border-[#bfa14a] drop-shadow-lg overflow-hidden">
            <span className="absolute left-1/2 -translate-x-1/2 top-4 z-20 animate-bounce">
                <img
                    src={coroa}
                    alt="Coroa"
                    width={72}
                    height={72}
                    className="drop-shadow-[0_4px_24px_rgba(191,161,74,0.7)] saturate-150"
                    style={{
                        filter: 'drop-shadow(0 0 16px #bfa14a) drop-shadow(0 2px 8px #a98c2c)',
                    }}
                />
            </span>
            <h1 className="bg-gradient-to-r from-[#bfa14a] via-[#a98c2c] to-[#bfa14a] bg-clip-text text-transparent drop-shadow-[0_2px_12px_rgba(191,161,74,0.5)] transition-all duration-500 hover:scale-105">
                ToDo List
            </h1>
            <p className="mt-4 text-2xl font-semibold bg-gradient-to-r from-[#bfa14a] via-[#a98c2c] to-[#bfa14a] bg-clip-text text-transparent drop-shadow-[0_1px_8px_rgba(191,161,74,0.3)] tracking-wide italic transition-all duration-500 hover:scale-105">
                Organize suas tarefas com estilo
            </p>
            {/* Efeito de brilho sutil */}
            <div className="pointer-events-none absolute inset-0">
                <div className="absolute left-1/2 top-0 w-2/3 h-1/3 -translate-x-1/2 bg-gradient-to-r from-transparent via-[#fffbe6]/30 to-transparent blur-2xl opacity-40 animate-pulse"></div>
            </div>
        </header>
    );
}

export default Header;