import { Link, useParams } from "react-router-dom";
import { projects } from "../constant";

function Detail() {
    const { id } = useParams();
    const project = projects.find((project) => project.id === parseInt(id));
    const handleLink = (link) => {
        window.open(link, '_blank');
    }

    return (
        <main className="max-w-5xl mx-auto px-6 pt-12 pb-32">
            <Link to='/' className="inline-flex items-center gap-2 text-sm font-medium text-slate-500 dark:text-slate-400 hover:text-primary dark:hover:text-primary transition-colors mb-8 group" to="/">
                <span className="material-symbols-outlined text-lg group-hover:-translate-x-1 transition-transform">arrow_back</span>
                Back to Portfolio
            </Link>
            <header className="mb-16">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent-purple/10 text-accent-purple text-xs font-bold uppercase tracking-wider mb-6">
                    <span className="size-1.5 rounded-full bg-accent-purple animate-pulse"></span>
                    Featured Case Study
                </div>
                <h1 className="text-5xl md:text-7xl font-extrabold tracking-tighter mb-6 leading-[1.1] text-slate-900 dark:text-white">
                    {project.title}
                </h1>
                <p className="text-xl md:text-2xl font-light text-slate-500 dark:text-slate-400 max-w-2xl leading-relaxed">
                    {project.description}
                </p>
            </header>

            <div className="relative group mb-20">
                <div className="absolute -inset-1 bg-gradient-to-r from-accent-purple/20 to-accent-pink/20 rounded-xl blur opacity-25 group-hover:opacity-50 transition duration-1000 group-hover:duration-200"></div>
                <div className="relative bg-white dark:bg-slate-800 rounded-xl overflow-hidden shadow-2xl border border-slate-200 dark:border-slate-700 aspect-video">
                    <img alt="Project Preview" className="w-full h-full object-cover grayscale-[20%] hover:grayscale-0 transition-all duration-700" data-alt="High-quality minimalist software dashboard interface with clean charts" src={project.image}/>
                </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">

                <div className="lg:col-span-7 space-y-12">
                    <section>
                        <h3 className="text-xs font-bold uppercase tracking-[0.2em] text-slate-400 mb-6">Overview</h3>
                        <p className="text-lg leading-relaxed text-slate-600 dark:text-slate-300">
                            {project.overview}
                        </p>
                    </section>
                    <section>
                        <h3 className="text-xs font-bold uppercase tracking-[0.2em] text-slate-400 mb-6">Outcome</h3>
                        <p className="text-lg leading-relaxed text-slate-600 dark:text-slate-300">
                            {project.outcome}
                        </p>
                    </section>
                </div>

                <div className="lg:col-span-5 space-y-12">

                    <section>
                        <h3 className="text-xs font-bold uppercase tracking-[0.2em] text-slate-400 mb-6">Technologies</h3>
                        <div className="flex flex-wrap gap-2">
                            {project.technologies.map((tech) => (
                                <span key={tech} className="px-4 py-2 rounded-lg bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-sm font-medium">{tech}</span>
                            ))}
                        </div>
                    </section>

                    <section className="flex flex-col gap-4">
                        <button className="w-full h-14 bg-primary text-white rounded-xl font-bold flex items-center justify-center gap-3 hover:shadow-lg hover:shadow-primary/30 transition-all active:scale-[0.98]">
                            <span className="material-symbols-outlined">rocket_launch</span>
                            Launch Live Dem
                        </button>
                        <button onClick={()=>handleLink(project.github)} className="w-full h-14 bg-white dark:bg-slate-800 text-slate-900 dark:text-white border border-slate-200 dark:border-slate-700 rounded-xl font-bold flex items-center justify-center gap-3 hover:bg-slate-50 dark:hover:bg-slate-700 transition-all active:scale-[0.98] cursor-pointer">
                            <span className="material-symbols-outlined">code</span>
                            Source Code
                        </button>
                    </section>

                    <div className="p-6 rounded-xl border border-accent-pink/20 bg-accent-pink/5 flex items-start gap-4">
                        <span className="material-symbols-outlined text-accent-pink">info</span>
                        <div>
                            <h4 className="text-sm font-bold text-accent-pink mb-1">Project Status</h4>
                            <p className="text-sm text-slate-600 dark:text-slate-400">This project is currently in maintenance mode. Last updated: Oct 2023.</p>
                        </div>
                    </div>
                </div>
            </div>
        
        </main>
    )
}

export default Detail;