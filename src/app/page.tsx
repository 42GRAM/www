"use client";
import { useState } from "react";
export default function Home() {
    const [showShopPopup, setShowShopPopup] = useState(false);
    return (
        <div className="min-h-screen relative overflow-hidden">
            {/* Orange base */}
            <div className="fixed inset-0 z-0 bg-[#FAAB41]" />
            
                {/* Repeating monogram background */}
                <div
                    className="fixed inset-0 z-0 opacity-30"
                    style={{
                        backgroundImage: "url('/img/42monogram.jpg')",
                        backgroundRepeat: "repeat",
                        backgroundSize: "166px 166px",
                        backgroundPosition: "top left",
                    }}
                />
            
                {/* Optional gradient tint */}
                <div className="fixed inset-0 z-0 bg-gradient-to-br from-[#FAAB41]/70 via-[#F6820B]/20 to-[#FAAB41]/70" />
            
                {/* Main Content */}
                <main className="relative z-10 px-4 md:px-20 pb-10">
                {/* Logo Header */}
                <header className="py-12 md:py-20 flex justify-center">
                    <div className="logo-pulse animate-fade-in-up">
                        <div className="relative">
                            {/* Stylized 42 Logo */}
                            <h1
                                className="text-[8rem] md:text-[14rem] font-black leading-none drop-shadow-[0_10px_40px_rgba(0,0,0,0.35)] select-none"
                                style={{
                                    fontFamily: 'Anton, Impact, sans-serif',
                                    letterSpacing: '-0.05em',
                                }}
                            >
                                <img
                                    src="/img/42logo.png"
                                    alt="42 logo"
                                    className="w-auto h-[8rem] md:h-[14rem]"
                                />
                            </h1>
                        </div>
                    </div>
                </header>

                {/* Hero Section - stylized gradient card */}
                <section className="mb-20 md:mb-28">
                    <div className="relative overflow-hidden rounded-2xl shadow-[0_20px_60px_rgba(0,0,0,0.3)]">
                        <a
                            href="https://ditto.fm/boem-bam"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <img
                                src="/img/banner.jpg"
                                alt="Banner"
                                className="w-full h-auto object-cover rounded-2xl"
                            />
                        </a>
                    </div>
                </section>

                {/* Contact Grid */}
                <section className="animate-fade-in-up animate-delay-300">
                    <div className="flex flex-col lg:flex-row divide-y lg:divide-y-0 lg:divide-x divide-white/20 text-center bg-white/15 backdrop-blur-md rounded-2xl overflow-hidden shadow-[0_10px_40px_rgba(0,0,0,0.15)]">
                        {/* Contact */}
                        <div className="w-full lg:w-1/3 flex flex-col py-14 px-8 hover:bg-white/10 transition-colors duration-300">
                            <h2 className="uppercase text-xl font-bold tracking-[0.2em] mb-8 text-white">
                                Contact
                            </h2>
                            <div className="space-y-3">
                                <p className="uppercase text-xs tracking-[0.15em] text-white/70">E-mail ons</p>
                                <a
                                    href="mailto:42gram.music@gmail.com"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="link-hover text-lg font-medium inline-block text-white"
                                >
                                    42GRAM.MUSIC@GMAIL.COM
                                </a>
                            </div>
                        </div>

                        {/* Social Media */}
                        <div className="w-full lg:w-1/3 flex flex-col py-14 px-8 hover:bg-white/10 transition-colors duration-300">
                            <h2 className="uppercase text-xl font-bold tracking-[0.2em] mb-8 text-white">
                                Social Media
                            </h2>
                            <div className="space-y-6">
                                <div className="space-y-3">
                                    <p className="uppercase text-xs tracking-[0.15em] text-white/70">Instagram</p>
                                    <a
                                        href="https://instagram.com/ditis42gram"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="link-hover text-lg font-medium inline-block text-white"
                                    >
                                        42GRAM INSTAGRAM
                                    </a>
                                </div>
                                <div className="space-y-3">
                                    <p className="uppercase text-xs tracking-[0.15em] text-white/70">TikTok</p>
                                    <a
                                        href="https://tiktok.com/@ditis42gram"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="link-hover text-lg font-medium inline-block text-white"
                                    >
                                        42GRAM TIKTOK
                                    </a>
                                </div>
                                <div className="space-y-3">
                                    <p className="uppercase text-xs tracking-[0.15em] text-white/70">Facebook</p>
                                    <a
                                        href="https://www.facebook.com/ditis42GRAM"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="link-hover text-lg font-medium inline-block text-white"
                                    >
                                        42GRAM FACEBOOK
                                    </a>
                                </div>
                            </div>
                        </div>

                        {/* Latest Release */}
                        <div className="w-full lg:w-1/3 flex flex-col py-14 px-8 hover:bg-white/10 transition-colors duration-300">
                            <h2 className="uppercase text-xl font-bold tracking-[0.2em] mb-8 text-white">
                                Latest Release
                            </h2>
                            <div className="space-y-3">
                                <p className="uppercase text-xs tracking-[0.15em] text-white/70">Boem Bam</p>
                                <a
                                    href="https://ditto.fm/boem-bam"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="link-hover text-lg font-medium inline-block text-white"
                                >
                                    RELEASE LINKS
                                </a>
                            </div>
                        </div>
                    </div>
                </section>
            </main>

            {/* Footer Navigation */}
            <footer className="relative z-10 mt-auto px-4 md:px-20 border-t border-white/15 animate-fade-in-up animate-delay-400">
                <div className="py-10 md:py-12">
                    <nav>
                       <ul className="flex flex-col items-center md:flex-row md:items-stretch justify-center md:justify-between gap-4 md:gap-0 uppercase text-center">
                            <li>
                                <a
                                    href="https://instagram.com/ditis42gram"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="btn-hover block px-8 py-3 rounded-full text-sm font-bold tracking-[0.15em] text-white"
                                >
                                    Instagram
                                </a>
                            </li>
                            <li>
                                <a
                                    href="https://ditto.fm/boem-bam"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="btn-hover block px-8 py-3 rounded-full text-sm font-bold tracking-[0.15em] text-white"
                                >
                                    Music
                                </a>
                            </li>
                            <li>
                                <a
                                    href="https://tiktok.com/@ditis42gram"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="btn-hover block px-8 py-3 rounded-full text-sm font-bold tracking-[0.15em] text-white"
                                >
                                    TikTok
                                </a>
                            </li>
                            <li>
                                <button
                                    onClick={() => setShowShopPopup(true)}
                                    className="btn-hover block px-8 py-3 rounded-full text-sm font-bold tracking-[0.15em] text-white"
                                >
                                    SHOP
                                </button>
                            </li>
                            <li>
                                <a
                                    href="https://www.facebook.com/ditis42GRAM"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="btn-hover block px-8 py-3 rounded-full text-sm font-bold tracking-[0.15em] text-white"
                                >
                                    FACEBOOK
                                </a>
                            </li>
                        </ul>
                    </nav>
                </div>

                {/* Copyright */}
                <div className="py-8 text-center border-t border-white/10">
                    <p className="text-sm text-white/50 tracking-wide">
                        © 2026. 42GRAM. JUICED UNICORN. All rights reserved.
                    </p>
                    {showShopPopup && (
                        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm">
                            <div className="bg-white text-black px-10 py-8 rounded-2xl shadow-2xl text-center animate-fade-in-up">
                                <h2 className="text-2xl font-bold mb-4 tracking-widest">
                                    DE 42 SHOP KOMT ASAP!
                                </h2>
                                <button
                                    onClick={() => setShowShopPopup(false)}
                                    className="mt-4 px-6 py-2 bg-black text-white rounded-full text-sm font-bold tracking-wide hover:opacity-80 transition"
                                >
                                    CLOSE
                                </button>
                            </div>
                        </div>
                    )}
                </div>
            </footer>
        </div>
    );
}










