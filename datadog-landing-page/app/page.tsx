"use client";

import React, { useState } from "react";
import { Clock, MapPin, Calendar, ArrowRight, X } from "lucide-react";
import Head from "next/head";

export default function Home() {
  const [isAgendaOpen, setIsAgendaOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[radial-gradient(ellipse_at_bottom,_var(--tw-gradient-stops))] from-slate-200 via-slate-50 to-white text-slate-800 font-sans flex items-center justify-center p-4 sm:p-8 selection:bg-purple-200 selection:text-purple-900">
      
      {/* Decorative ambient background behind the card */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
        <div className="absolute -top-[20%] -left-[10%] w-[50%] h-[50%] rounded-full bg-purple-200/20 blur-[120px]"></div>
        <div className="absolute top-[60%] -right-[10%] w-[40%] h-[60%] rounded-full bg-indigo-100/40 blur-[120px]"></div>
      </div>

      <main className="w-full max-w-4xl bg-white shadow-[0_20px_60px_-15px_rgba(0,0,0,0.1)] rounded-2xl overflow-hidden border border-white/60 relative z-10 backdrop-blur-sm">
        
        {/* Top Dark Section */}
        <div className="bg-slate-950 p-10 md:p-16 text-center relative overflow-hidden group">
          
          {/* Dynamic Premium Gradients */}
          <div className="absolute inset-0 pointer-events-none overflow-hidden">
            <div className="absolute top-[-50%] left-[20%] w-[60%] h-[200%] bg-purple-600/20 blur-[100px] rounded-full mix-blend-screen transition-transform duration-1000 group-hover:scale-110"></div>
            <div className="absolute bottom-[-50%] right-[-20%] w-[50%] h-[150%] bg-indigo-500/20 blur-[90px] rounded-full mix-blend-screen transition-transform duration-1000 group-hover:-translate-x-10"></div>
            {/* Very subtle noise texture overlay */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:24px_24px] opacity-20"></div>
          </div>
          
          <div className="relative z-10 flex flex-col items-center">
            
            {/* Partner Logos */}
            <div className="w-full flex justify-between items-center mb-10 px-0 md:px-8">
              {/* Datadog Logo */}
              <div className="h-10 md:h-12 flex items-center justify-center">
                <img 
                  src="/dd_logo_v_white.png" 
                  alt="Datadog" 
                  className="max-h-full max-w-[120px] md:max-w-[160px] object-contain drop-shadow-md"
                />
              </div>
              {/* INNOV8 Logo */}
              <div className="h-10 md:h-12 flex items-center justify-center">
                <img 
                  src="/INNOV8%20Logo%20PNG.png" 
                  alt="Innov8" 
                  className="max-h-full max-w-[120px] md:max-w-[160px] object-contain drop-shadow-md brightness-0 invert opacity-90"
                />
              </div>
            </div>

            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 mb-8 backdrop-blur-md">
              <span className="w-1.5 h-1.5 rounded-full bg-purple-400 animate-pulse"></span>
              <h2 className="bg-clip-text text-transparent bg-gradient-to-r from-purple-300 to-indigo-300 uppercase tracking-[0.35em] text-[10px] font-bold">
                You Are Invited
              </h2>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif text-white mb-6 leading-[1.1] tracking-tight drop-shadow-lg">
              Datadog Executive<br />
              <span className="text-transparent bg-clip-text bg-gradient-to-br from-white via-slate-200 to-slate-400">
                Roundtable
              </span>
            </h1>
            <p className="text-slate-400 font-light text-lg md:text-xl tracking-wide max-w-xl mx-auto mb-4">
              Observability, Security & AI for Modern Enterprises
            </p>
          </div>
        </div>

        {/* Separator Gradient Line */}
        <div className="h-1 w-full bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 opacity-90"></div>

        {/* Bottom White Section */}
        <div className="p-10 md:p-16 lg:p-20 bg-white flex flex-col items-center relative">
          
          <div className="max-w-2xl text-left w-full relative">
            <span className="absolute -top-8 -left-6 text-7xl text-slate-50 font-serif opacity-50 pointer-events-none select-none">"</span>
            
            <p className="text-xl text-slate-800 mb-8 font-serif italic">Dear [Guest Name],</p>
            <p className="text-slate-600 leading-relaxed md:leading-loose mb-14 text-base md:text-lg font-light text-justify hyphens-auto">
              We are delighted to extend a personal invitation to you for our upcoming Datadog Executive Roundtable. Join Innov8 as we officially introduce and establish enterprise-grade Datadog solutions in Sri Lanka. It would be a pleasure to have you join us for an evening of thoughtful conversation, knowledge sharing, and networking among industry leaders.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-3xl mb-14">
            {/* Date Box */}
            <div className="group relative bg-white border border-slate-200/60 rounded-2xl p-8 text-center flex flex-col items-center shadow-sm hover:shadow-xl hover:border-purple-300/50 transition-all duration-500 hover:-translate-y-1">
              <div className="absolute inset-0 bg-gradient-to-b from-purple-50/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl pointer-events-none"></div>
              <div className="w-12 h-12 rounded-full bg-purple-50 flex items-center justify-center mb-5 group-hover:scale-110 group-hover:bg-purple-100 transition-all duration-500">
                <Calendar className="w-6 h-6 text-purple-600" strokeWidth={1.5} />
              </div>
              <h3 className="text-[11px] uppercase tracking-[0.25em] text-slate-400 mb-2 font-bold">Date</h3>
              <p className="text-slate-800 font-medium font-serif text-lg md:text-xl">April 29</p>
              <p className="text-slate-500 text-sm mt-1">2026</p>
            </div>

            {/* Time Box */}
            <div className="group relative bg-white border border-slate-200/60 rounded-2xl p-8 text-center flex flex-col items-center shadow-sm hover:shadow-xl hover:border-purple-300/50 transition-all duration-500 hover:-translate-y-1">
              <div className="absolute inset-0 bg-gradient-to-b from-purple-50/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl pointer-events-none"></div>
              <div className="w-12 h-12 rounded-full bg-purple-50 flex items-center justify-center mb-5 group-hover:scale-110 group-hover:bg-purple-100 transition-all duration-500">
                <Clock className="w-6 h-6 text-purple-600" strokeWidth={1.5} />
              </div>
              <h3 className="text-[11px] uppercase tracking-[0.25em] text-slate-400 mb-2 font-bold">Time</h3>
              <p className="text-slate-800 font-medium font-serif text-lg md:text-xl whitespace-nowrap">
                5:30 PM
              </p>
              <p className="text-slate-500 text-sm mt-1">onwards</p>
            </div>

            {/* Venue Box */}
            <div className="group relative bg-white border border-slate-200/60 rounded-2xl p-8 text-center flex flex-col items-center shadow-sm hover:shadow-xl hover:border-purple-300/50 transition-all duration-500 hover:-translate-y-1">
              <div className="absolute inset-0 bg-gradient-to-b from-purple-50/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl pointer-events-none"></div>
              <div className="w-12 h-12 rounded-full bg-purple-50 flex items-center justify-center mb-5 group-hover:scale-110 group-hover:bg-purple-100 transition-all duration-500">
                <MapPin className="w-6 h-6 text-purple-600" strokeWidth={1.5} />
              </div>
              <h3 className="text-[11px] uppercase tracking-[0.25em] text-slate-400 mb-2 font-bold">Venue</h3>
              <p className="text-slate-800 font-medium font-serif text-lg md:text-xl leading-tight">Celestine</p>
              <p className="text-slate-500 text-sm mt-1">Cinnamon Life</p>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row items-center gap-4 w-full justify-center">
            <button className="px-8 py-3.5 bg-gradient-to-r from-purple-600 to-indigo-600 text-white font-semibold rounded-full shadow-lg hover:shadow-purple-500/30 hover:-translate-y-0.5 transition-all duration-300 flex items-center justify-center min-w-[220px]">
              Confirm Attendance
              <ArrowRight className="w-4 h-4 ml-2" />
            </button>
            <button 
              onClick={() => setIsAgendaOpen(true)}
              className="px-8 py-3.5 bg-white text-slate-700 border border-slate-200 font-semibold rounded-full shadow-sm hover:bg-slate-50 hover:border-slate-300 hover:-translate-y-0.5 transition-all duration-300 flex items-center justify-center min-w-[220px]"
            >
              View Agenda
            </button>
          </div>
          
        </div>
      </main>

      {/* Agenda Modal overlay */}
      <div 
        className={`fixed inset-0 z-50 flex items-center justify-center p-4 transition-all duration-300 ${
          isAgendaOpen ? "opacity-100 visible" : "opacity-0 invisible pointer-events-none"
        }`}
      >
        {/* Backdrop */}
        <div 
          className={`absolute inset-0 bg-slate-900/60 backdrop-blur-sm transition-opacity duration-300 ${
             isAgendaOpen ? "opacity-100" : "opacity-0"
          }`} 
          onClick={() => setIsAgendaOpen(false)}
        ></div>
        
        {/* Modal Window */}
        <div className={`bg-white rounded-2xl shadow-2xl w-full max-w-2xl relative z-10 overflow-hidden flex flex-col max-h-[85vh] transition-all duration-300 transform ${
          isAgendaOpen ? "scale-100 translate-y-0" : "scale-95 translate-y-8"
        }`}>
          {/* Header */}
          <div className="p-6 border-b border-slate-100 flex justify-between items-center bg-slate-50/50">
            <h3 className="text-2xl font-serif text-slate-800">Event Agenda</h3>
            <button 
              onClick={() => setIsAgendaOpen(false)}
              className="p-2 text-slate-400 hover:text-purple-600 hover:bg-purple-50 rounded-full transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
          
          {/* Content Body */}
          <div className="p-6 md:p-8 overflow-y-auto">
            <div className="space-y-4">
              
              {/* Agenda Items */}
              <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-8 p-4 rounded-xl hover:bg-purple-50/50 transition-colors border border-transparent hover:border-purple-100">
                <div className="w-36 flex-shrink-0 text-purple-600 font-semibold text-sm">5:30 - 6:30 PM</div>
                <div>
                  <h4 className="text-slate-800 font-medium">Registration and welcome</h4>
                  <p className="text-slate-500 text-sm mt-1">Ice Breaker • 60 mins</p>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-8 p-4 rounded-xl hover:bg-purple-50/50 transition-colors border border-transparent hover:border-purple-100">
                <div className="w-36 flex-shrink-0 text-purple-600 font-semibold text-sm">6:30 - 6:35 PM</div>
                <div>
                  <h4 className="text-slate-800 font-medium">Innov8 Welcome Address</h4>
                  <p className="text-slate-500 text-sm mt-1">5 mins</p>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-8 p-4 rounded-xl hover:bg-purple-50/50 transition-colors border border-transparent hover:border-purple-100">
                <div className="w-36 flex-shrink-0 text-purple-600 font-semibold text-sm">6:35 - 7:00 PM</div>
                <div>
                  <h4 className="text-slate-800 font-medium">Datadog Welcome Address</h4>
                  <p className="text-slate-500 text-sm mt-1">25 mins</p>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-8 p-4 rounded-xl hover:bg-purple-50/50 transition-colors border border-transparent hover:border-purple-100">
                <div className="w-36 flex-shrink-0 text-purple-600 font-semibold text-sm">6:55 - 7:45 PM</div>
                <div>
                  <h4 className="text-slate-800 font-medium leading-tight">Building Unified Visibility Without Tool Sprawl</h4>
                  <p className="text-slate-500 text-sm mt-1">50 mins</p>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-8 p-4 rounded-xl hover:bg-purple-50/50 transition-colors border border-transparent hover:border-purple-100">
                <div className="w-36 flex-shrink-0 text-purple-600 font-semibold text-sm">8:30 PM onwards</div>
                <div>
                  <h4 className="text-slate-800 font-medium">Dinner and Drinks</h4>
                  <p className="text-slate-500 text-sm mt-1">90 mins</p>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>

    </div>
  );
}
