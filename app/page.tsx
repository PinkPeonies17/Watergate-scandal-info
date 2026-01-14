"use client"

import { useState } from "react"

type Tab = "overview" | "timeline" | "people" | "legacy"

export default function Home() {
  const [activeTab, setActiveTab] = useState<Tab>("overview")

  return (
    <main className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border py-12">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-5xl font-serif font-bold mb-2 text-foreground">The Watergate Scandal</h1>
          <p className="text-lg text-muted-foreground">1972 - 1974</p>
        </div>
      </header>

      {/* Tab Navigation */}
      <nav className="border-b border-border bg-card sticky top-0 z-10">
        <div className="max-w-3xl mx-auto px-6">
          <div className="flex gap-8">
            {[
              { id: "overview", label: "Overview" },
              { id: "timeline", label: "Timeline" },
              { id: "people", label: "Key People" },
              { id: "legacy", label: "Legacy" },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id as Tab)}
                className={`py-4 text-sm font-medium border-b-2 transition-colors ${
                  activeTab === tab.id
                    ? "border-primary text-primary"
                    : "border-transparent text-muted-foreground hover:text-foreground"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>
      </nav>

      {/* Content */}
      <div className="max-w-3xl mx-auto px-6 py-10">
        {activeTab === "overview" && (
          <section className="space-y-6">
            <h2 className="text-2xl font-serif font-bold text-primary">What Was Watergate?</h2>
            <p className="text-lg leading-relaxed">
              The Watergate scandal was a major political scandal involving President Richard Nixon's administration. It
              began with the arrest of five men for breaking into the Democratic National Committee headquarters at the
              Watergate complex in Washington, D.C. on June 17, 1972.
            </p>
            <p className="leading-relaxed text-muted-foreground">
              The Nixon administration's attempted cover-up of its involvement led to the discovery of multiple abuses
              of power. The scandal ultimately resulted in Nixon becoming the first and only U.S. president to resign
              from office.
            </p>

            <div className="pt-4">
              <h3 className="text-xl font-serif font-semibold text-primary mb-4">Role of the Press</h3>
              <p className="leading-relaxed text-muted-foreground">
                The Washington Post, led by reporters Bob Woodward and Carl Bernstein, played a crucial role in
                uncovering the scandal. Their investigative reporting, aided by the anonymous source known as Deep
                Throat, helped expose the cover-up and kept the story in the public eye when other outlets had moved on.
              </p>
            </div>
          </section>
        )}

        {activeTab === "timeline" && (
          <section className="space-y-6">
            <h2 className="text-2xl font-serif font-bold text-primary">Key Events</h2>
            <div className="space-y-5">
              {[
                {
                  date: "June 17, 1972",
                  title: "The Break-In",
                  desc: "Five men are arrested for breaking into the DNC headquarters at the Watergate complex.",
                },
                {
                  date: "November 1972",
                  title: "Nixon Re-elected",
                  desc: "Richard Nixon wins re-election by a landslide, defeating George McGovern.",
                },
                {
                  date: "January 1973",
                  title: "Trial Begins",
                  desc: "The Watergate burglars go on trial. Five plead guilty; two are convicted by a jury.",
                },
                {
                  date: "April 1973",
                  title: "Top Aides Resign",
                  desc: "Nixon's top aides H.R. Haldeman and John Ehrlichman resign. John Dean is fired.",
                },
                {
                  date: "July 1973",
                  title: "Secret Tapes Revealed",
                  desc: "Alexander Butterfield reveals the existence of the White House taping system.",
                },
                {
                  date: "October 1973",
                  title: "Saturday Night Massacre",
                  desc: "Nixon fires special prosecutor Archibald Cox. Attorney General and Deputy AG resign in protest.",
                },
                {
                  date: "August 8, 1974",
                  title: "Nixon Resigns",
                  desc: "Facing certain impeachment, Nixon announces his resignation, effective the next day.",
                },
              ].map((event, i) => (
                <div key={i} className="flex gap-4">
                  <div className="w-32 shrink-0 text-sm font-medium text-primary">{event.date}</div>
                  <div>
                    <h3 className="font-semibold">{event.title}</h3>
                    <p className="text-muted-foreground text-sm">{event.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>
        )}

        {activeTab === "people" && (
          <section className="space-y-6">
            <h2 className="text-2xl font-serif font-bold text-primary">Key Figures</h2>
            <div className="space-y-5">
              {[
                {
                  name: "Richard Nixon",
                  role: "37th President of the United States",
                  desc: "Resigned on August 9, 1974 to avoid impeachment. Pardoned by his successor Gerald Ford.",
                },
                {
                  name: "Bob Woodward & Carl Bernstein",
                  role: "Washington Post Reporters",
                  desc: "Investigative journalists whose reporting helped uncover the scandal.",
                },
                {
                  name: "John Dean",
                  role: "White House Counsel",
                  desc: "Became a key witness, famously warning Nixon about a cancer on the presidency.",
                },
                {
                  name: "Mark Felt (Deep Throat)",
                  role: "FBI Associate Director",
                  desc: "Anonymous source who provided crucial information to Woodward. Identity revealed in 2005.",
                },
                {
                  name: "H.R. Haldeman",
                  role: "White House Chief of Staff",
                  desc: "One of Nixon's closest aides, convicted of conspiracy, obstruction of justice, and perjury.",
                },
                {
                  name: "John Ehrlichman",
                  role: "Domestic Affairs Advisor",
                  desc: "Convicted of conspiracy, obstruction of justice, and perjury. Served 18 months in prison.",
                },
              ].map((person, i) => (
                <div key={i} className="border-b border-border pb-4 last:border-0">
                  <h3 className="font-semibold">{person.name}</h3>
                  <p className="text-sm text-primary">{person.role}</p>
                  <p className="text-muted-foreground text-sm mt-1">{person.desc}</p>
                </div>
              ))}
            </div>
          </section>
        )}

        {activeTab === "legacy" && (
          <section className="space-y-6">
            <h2 className="text-2xl font-serif font-bold text-primary">Legacy & Significance</h2>
            <ul className="space-y-3">
              {[
                "First and only resignation of a U.S. president",
                "Led to major reforms in campaign finance laws",
                "Strengthened the role of investigative journalism",
                "69 government officials were charged; 48 pleaded guilty",
                'The suffix "-gate" became standard for political scandals',
                "Demonstrated the importance of checks and balances in government",
                "Resulted in the Ethics in Government Act of 1978",
              ].map((item, i) => (
                <li key={i} className="flex gap-3">
                  <span className="text-primary">•</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </section>
        )}
      </div>

      {/* Footer */}
      <footer className="border-t border-border py-6 mt-8">
        <div className="max-w-3xl mx-auto px-6 text-center text-muted-foreground text-sm">
          Educational Resource about the Watergate Scandal (1972-1974)
        </div>
      </footer>
    </main>
  )
}
