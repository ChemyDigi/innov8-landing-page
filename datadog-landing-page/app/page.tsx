"use client";

import React, { useState, Suspense } from "react";
import { Clock, MapPin, Calendar, ArrowRight, X, Loader2, CheckCircle2 } from "lucide-react";
import { useSearchParams } from "next/navigation";

function EventContent() {
  const searchParams = useSearchParams();
  const guestName = searchParams.get("name") || "[Guest Name]";
  const guestEmail = searchParams.get("email") || "";

  const [isAgendaOpen, setIsAgendaOpen] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleConfirm = async () => {
    setIsSubmitting(true);
    try {
      const response = await fetch("https://formspree.io/f/mwvwzzdq", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: guestName !== "[Guest Name]" ? guestName : "Unknown Guest",
          email: guestEmail || "No email provided",
          status: "Confirmed",
        }),
      });

      if (response.ok) {
        setIsSuccess(true);
      } else {
        alert("Something went wrong. Please try again.");
      }
    } catch (error) {
      alert("Something went wrong. Please check your connection and try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#070514] text-white font-sans flex flex-col items-center justify-center relative overflow-x-hidden selection:bg-pink-500/30 p-4 sm:p-8">
      {/* Dynamic Background Gradients */}
      <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden">
        <div className="absolute top-[-20%] left-[-10%] w-[50%] h-[50%] rounded-full bg-purple-600/30 blur-[150px]"></div>
        <div className="absolute bottom-[10%] right-[-10%] w-[40%] h-[40%] rounded-full bg-blue-500/20 blur-[120px]"></div>
        <div className="absolute top-[40%] right-[10%] w-[30%] h-[30%] rounded-full bg-pink-600/20 blur-[150px]"></div>
      </div>

      {/* Placeholders for 3D Pngs (To be replaced by user's images) */}
      <img src="/tube-top-right.png" alt="" className="fixed top-[10%] right-[2%] w-64 opacity-80 pointer-events-none hidden lg:block z-10 drop-shadow-[0_20px_40px_rgba(0,0,0,0.5)]" />
      <img src="/tube-bottom-left.png" alt="" className="fixed bottom-[5%] left-[-2%] w-80 opacity-80 pointer-events-none hidden lg:block z-10 drop-shadow-[0_20px_40px_rgba(0,0,0,0.5)]" />
      <img src="/sphere-left.png" alt="" className="fixed top-[40%] left-[5%] w-24 opacity-80 pointer-events-none hidden lg:block z-10 drop-shadow-[0_20px_40px_rgba(0,0,0,0.5)]" />
      <img src="/ring-bottom-right.png" alt="" className="fixed bottom-[-5%] right-[5%] w-96 opacity-80 pointer-events-none hidden lg:block z-10 drop-shadow-[0_20px_40px_rgba(0,0,0,0.5)]" />

      {/* Decorative Dots outside the card */}
      <div className="absolute top-[25%] left-[10%] w-1.5 h-1.5 bg-white rotate-45 opacity-40"></div>
      <div className="absolute top-[60%] right-[15%] w-1.5 h-1.5 bg-white rotate-45 opacity-40"></div>
      <div className="absolute bottom-[20%] left-[15%] w-1.5 h-1.5 bg-white rotate-45 opacity-40"></div>

      {/* INVITATION CARD CONTAINER */}
      <div className="relative z-20 w-full max-w-4xl bg-[#100c2e]/70 backdrop-blur-2xl border border-white/10 rounded-[2rem] shadow-[0_30px_80px_rgba(0,0,0,0.8),_inset_0_0_80px_rgba(233,0,116,0.03)] p-8 sm:p-12 md:p-16 flex flex-col items-center overflow-hidden my-6 sm:my-12">
        
        {/* Inner Card Subtle Glows */}
        <div className="absolute top-[-20%] right-[-10%] w-[50%] h-[50%] rounded-full bg-pink-500/10 blur-[80px] pointer-events-none"></div>
        <div className="absolute bottom-[-20%] left-[-10%] w-[50%] h-[50%] rounded-full bg-cyan-500/10 blur-[80px] pointer-events-none"></div>

        {/* Top Header Section inside card */}
        <header className="w-full flex justify-between items-center z-30 mb-12 sm:mb-16">
          <img src="/dd_logo_v_white.png" alt="Datadog" className="h-10 sm:h-14 lg:h-20 object-contain drop-shadow-md" />
          <img src="/INNOV8%20Logo%20PNG.png" alt="Innov8" className="h-5 sm:h-7 lg:h-9 object-contain brightness-0 invert opacity-90 drop-shadow-md" />
        </header>

        {/* Main Content inside card */}
        <main className="w-full relative z-30 flex flex-col items-center text-center">
          
          <div className="bg-[#e90074] text-white px-5 py-1.5 text-[10px] sm:text-xs font-black tracking-[0.2em] uppercase mb-8 sm:mb-10 shadow-[0_0_15px_rgba(233,0,116,0.3)]">
            You Are Invited
          </div>

          <h1 className="text-3xl sm:text-5xl md:text-[4rem] font-sans font-bold text-white mb-8 sm:mb-10 leading-[1.1] tracking-wider uppercase w-full">
            Datadog Executive<br/>Roundtable
          </h1>

          <p className="text-cyan-300 text-[10px] sm:text-xs md:text-sm tracking-[0.15em] md:tracking-[0.2em] uppercase max-w-2xl mb-12 sm:mb-14 leading-relaxed font-semibold">
            Observability, Security & AI for Modern Enterprises
          </p>

          <div className="text-[#00c3ff] font-bold text-[9px] sm:text-[11px] md:text-xs tracking-[0.2em] uppercase mb-6 sm:mb-8 pb-2">
            A PERSONAL INVITATION
          </div>

          <div className="mb-6 sm:mb-8 w-full text-center">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-[#00c3ff] text-4xl sm:text-5xl md:text-6xl font-black tracking-wider drop-shadow-[0_0_15px_rgba(0,195,255,0.3)]">
              {guestName}
            </span>
          </div>

          <p className="text-gray-300 text-justify hyphens-auto text-xs sm:text-sm md:text-base tracking-wide max-w-3xl mb-12 sm:mb-16 leading-relaxed font-light">
            We are delighted to extend a personal invitation to you for our upcoming Datadog Executive Roundtable. Join Innov8 as we officially introduce and establish enterprise-grade Datadog solutions in Sri Lanka. It would be a pleasure to have you join us for an evening of thoughtful conversation, knowledge sharing, and networking among industry leaders.
          </p>

          <div className="flex flex-col sm:flex-row gap-10 sm:gap-12 md:gap-20 items-center justify-center text-center mb-12 sm:mb-16 w-full">
            <div className="flex flex-col items-center group">
              <Calendar className="w-6 h-6 text-[#e90074] mb-3 group-hover:scale-110 transition-transform" />
              <div className="text-white text-[10px] sm:text-xs md:text-sm font-black tracking-widest uppercase mb-1 sm:mb-2">DATE</div>
              <div className="text-gray-400 text-[9px] sm:text-[10px] md:text-xs tracking-wider uppercase">APRIL 29, 2026</div>
            </div>
            <div className="hidden sm:block w-px h-12 bg-white/10"></div>
            <div className="flex flex-col items-center group">
              <Clock className="w-6 h-6 text-[#e90074] mb-3 group-hover:scale-110 transition-transform" />
              <div className="text-white text-[10px] sm:text-xs md:text-sm font-black tracking-widest uppercase mb-1 sm:mb-2">TIME</div>
              <div className="text-gray-400 text-[9px] sm:text-[10px] md:text-xs tracking-wider uppercase">5:30 PM ONWARDS</div>
            </div>
            <div className="hidden sm:block w-px h-12 bg-white/10"></div>
            <div className="flex flex-col items-center group">
              <MapPin className="w-6 h-6 text-[#e90074] mb-3 group-hover:scale-110 transition-transform" />
              <div className="text-white text-[10px] sm:text-xs md:text-sm font-black tracking-widest uppercase mb-1 sm:mb-2">VENUE</div>
              <div className="text-gray-400 text-[9px] sm:text-[10px] md:text-xs tracking-wider uppercase">CELESTINE, CINNAMON LIFE</div>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-6 sm:gap-10 mt-4 w-full justify-center">
            <button 
              onClick={handleConfirm}
              disabled={isSubmitting || isSuccess}
              className={`px-8 py-3.5 sm:px-10 sm:py-4 text-[10px] sm:text-xs font-black uppercase tracking-widest transition-all shadow-[0_0_20px_rgba(0,195,255,0.3)] hover:shadow-[0_0_30px_rgba(0,195,255,0.5)] ${
                isSuccess 
                  ? "bg-emerald-500 text-white cursor-default shadow-none" 
                  : "bg-[#00c3ff] hover:bg-[#00a0d6] text-white disabled:opacity-70 disabled:cursor-not-allowed hover:-translate-y-1"
              }`}
            >
              {isSubmitting ? "CONFIRMING..." : isSuccess ? "CONFIRMED!" : "CONFIRM ATTENDANCE"}
            </button>

            <button 
              onClick={() => setIsAgendaOpen(true)}
              className="text-white text-[9px] sm:text-[10px] md:text-xs font-bold tracking-[0.2em] uppercase hover:text-[#e90074] transition-colors pb-1 border-b border-transparent hover:border-[#e90074]"
            >
              VIEW EVENT AGENDA
            </button>
          </div>
        </main>
      </div>

      {/* Agenda Modal */}
      <div className={`fixed inset-0 z-50 flex items-center justify-center p-4 transition-all duration-300 ${isAgendaOpen ? "opacity-100 visible" : "opacity-0 invisible pointer-events-none"}`}>
        <div className={`absolute inset-0 bg-[#070514]/90 backdrop-blur-md transition-opacity duration-300 ${isAgendaOpen ? "opacity-100" : "opacity-0"}`} onClick={() => setIsAgendaOpen(false)}></div>
        
        <div className={`bg-[#141032] border border-[#e90074]/30 rounded-xl shadow-[0_0_40px_rgba(233,0,116,0.15)] w-full max-w-2xl relative z-10 overflow-hidden flex flex-col max-h-[85vh] transition-all duration-300 transform ${isAgendaOpen ? "scale-100 translate-y-0" : "scale-95 translate-y-8"}`}>
          <div className="p-6 border-b border-white/5 flex justify-between items-center bg-[#0d0a25]">
            <h3 className="text-lg font-bold tracking-widest uppercase text-white">Event Agenda</h3>
            <button onClick={() => setIsAgendaOpen(false)} className="p-2 text-gray-400 hover:text-[#e90074] transition-colors">
              <X className="w-5 h-5" />
            </button>
          </div>
          
          <div className="p-6 md:p-10 overflow-y-auto">
            <div className="relative max-w-2xl mx-auto px-2">
              <div className="absolute left-[19px] sm:left-[140px] top-3 bottom-5 w-px bg-gradient-to-b from-[#e90074] to-transparent"></div>
              
              <div className="space-y-8">
                {[
                  { time: "5:30 - 6:30 PM", duration: "60 MINS", title: "Registration and welcome", sub: "Ice Breaker" },
                  { time: "6:30 - 6:35 PM", duration: "5 MINS", title: "Innov8 Welcome Address" },
                  { time: "6:35 - 7:00 PM", duration: "25 MINS", title: "Datadog Welcome Address" },
                  { time: "7:00 - 7:50 PM", duration: "50 MINS", title: "Building Unified Visibility Without Tool Sprawl" },
                  { time: "8:30 PM onwards", duration: "90 MINS", title: "Dinner and Drinks" },
                ].map((item, idx) => (
                  <div key={idx} className="relative flex flex-col sm:flex-row gap-4 sm:gap-8 group">
                    <div className="absolute left-[19px] sm:left-[140px] top-3.5 w-2 h-2 bg-[#00c3ff] rounded-full transform -translate-x-1/2 group-hover:scale-150 group-hover:bg-[#e90074] transition-all duration-300 shadow-[0_0_8px_#00c3ff]"></div>
                    <div className="pl-10 sm:pl-0 sm:w-[124px] flex-shrink-0 sm:text-right sm:pr-2 pt-1.5">
                      <div className="text-[#00c3ff] font-bold text-xs tracking-widest uppercase">{item.time}</div>
                      <div className="text-gray-500 text-[10px] tracking-widest mt-1.5">{item.duration}</div>
                    </div>
                    <div className="ml-10 sm:ml-0 flex-1 bg-[#1a153f] border border-white/5 group-hover:border-[#e90074]/30 rounded-lg p-5 transition-all duration-300">
                      <h4 className="text-white font-bold text-sm tracking-wider uppercase">{item.title}</h4>
                      {item.sub && <p className="text-[#e90074] text-xs mt-2 font-bold tracking-widest uppercase">{item.sub}</p>}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Home() {
  return (
    <Suspense fallback={
      <div className="min-h-screen bg-[#070514] flex items-center justify-center">
        <div className="w-8 h-8 border-4 border-[#e90074] border-t-transparent rounded-full animate-spin"></div>
      </div>
    }>
      <EventContent />
    </Suspense>
  );
}
