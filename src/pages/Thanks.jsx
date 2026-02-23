import { Link } from "react-router-dom";


function Thanks() {

    return (
        <main className="budy font-sans antialiased text-slate-800">

            <div className="w-full max-w-2xl px-6 py-12 text-center animate-fade-in-up" data-purpose="success-content">

                <div className="mb-10 relative inline-block" data-purpose="illustration-wrapper">

                    <div className="absolute -inset-4 bg-white/50 rounded-full blur-xl animate-pulse"></div>

                    <div className="relative bg-white w-32 h-32 rounded-3xl shadow-sm animate-float flex items-center justify-center">
                        <svg className="text-indigo-500 transform rotate-12 size-10" fill="none" height="64" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" viewbox="0 0 24 24" width="64" xmlns="http://www.w3.org/2000/svg">
                            <path d="m22 2-7 20-4-9-9-4Z"></path>
                            <path d="M22 2 11 13"></path>
                        </svg>
                    </div>
                </div>

                <div className="glass-card rounded-3xl p-8 md:p-12 mb-8">
                    <h1 className="font-display text-3xl md:text-4xl font-bold mb-4 tracking-tight text-slate-900">
                        Message Sent!
                    </h1>
                    <p className="text-lg md:text-xl text-slate-600 leading-relaxed max-w-md mx-auto font-light">
                        Thanks for your message. I will get back to you as soon as possible.
                    </p>
                </div>

                <div className="flex flex-col items-center gap-4">
                    <Link to={'/'} className="inline-flex items-center px-8 py-4 bg-slate-900 text-white font-medium rounded-full transition-all duration-300 hover:bg-slate-800 hover:shadow-lg hover:-translate-y-1 focus:ring-4 focus:ring-slate-200" data-purpose="return-home-button" href="/">
                        <svg className="h-5 w-5 mr-2" fill="currentColor" viewbox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                            <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z"></path>
                        </svg>
                        Return to Home
                    </Link>
                    <span className="text-xs uppercase tracking-widest text-slate-400 font-semibold">
                        Developer Portfolio • 2024
                    </span>
                </div>

            </div>
        </main>
    )
}

export default Thanks;