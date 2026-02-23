import { useDarkMode } from "../useDarkMode";
import kgomotso from "../assets/Justin.jpg";
import Drums from "../assets/Drums.jpg";
import Cosmetic from "../assets/promo2.jpg";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { projects, socialLinks } from "../constant";
import { useForm, ValidationError } from "@formspree/react"


function Home() {
    const [isDark, setIsDark] = useDarkMode();
    const [add, setAdd] = useState(2);
    const navigate = useNavigate();
    const [state, handleSubmit] = useForm("xbdaapal");

    if (state.succeeded) {
        return <p>Thanks for your message. I will get back to you as soon as possible.</p>
    }

    const handleLink = (link) => {
        window.open(link, "_blank");
    };


    return (
        <main className="bf-background-light dark:bg-background-dark text-slate-800 dark:text-slate-100 font-sans transition-colors duration-300">
            <nav className="fixed w-full z-50 top-0 left-0 bg-white/60 dark:bg-slate-900/60 backdrop-blur-md border-b border-slate-200 dark:border-slate-800">
                <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
                    <div className="flex items-center gap-4">
                        <div className="flex items-center space-x-2">
                            <span className="material-icons-round text-primary text-3xl">terminal</span>
                            <span className="font-display font-extrabold text-xl tracking-tight">KGOMOTSO</span>
                        </div>
                    </div>
                    <div className="hidden md:flex items-center space-x-8">
                        <a className="font-medium hover:text-primary transition-colors" href="#about">Skills</a>
                        <a className="font-medium hover:text-primary transition-colors" href="#projects">Projects</a>
                        <a className="px-6 py-2.5 bg-[#8B5CF6] text-white rounded-full font-semibold hover:shadow-lg hover:scale-105 transition-all" href="#contact">Hire Me</a>
                        <button onClick={() => setIsDark(!isDark)} className="p-2 rounded-full hover:bg-slate-200 dark:hover:bg-slate-800 transition-colors cursor-pointer" id="theme-toggle">
                            <span className="material-icons-round text-slate-600 dark:text-slate-300">dark_mode</span>
                        </button>
                    </div>
                    <div className="md:hidden">
                        <span className="material-icons-round cursor-pointer">menu</span>
                    </div>
                </div>
            </nav>
            <section className="pt-32 pb-20 px-6 relative overflow-hidden">
                <div className="absolute top-0 right-0 -z-10 w-96 h-96 bg-primary/10 rounded-full blur-3xl"></div>
                <div className="absolute bottom-0 left-0 -z-10 w-96 h-96 bg-accent-pink/10 rounded-full blur-3xl"></div>
                <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-12 lg:gap-24">
                    <div className="flex-1 text-center md:text-left">
                        <p className="text-[#8B5CF6] font-bold tracking-widest uppercase mb-4">Hello, I am Kgomotso</p>
                        <h1 className="font-display text-5xl lg:text-7xl font-extrabold mb-6 leading-[1.1]">
                            <span className="text-gradient">Software Developer</span>,
                            <br/>
                            <span className="dark:text-white">building the future.</span>
                        </h1>
                        <p className="text-lg text-slate-600 dark:text-slate-400 mb-8 max-w-xl leading-relaxed">
                                With a strong focus on artificial intelligence and modern web development, 
                                I transform complex problems into beautiful, functional digital realities.
                            </p>
                            <div className="flex flex-wrap gap-4 justify-center md:justify-start">
                            <a className="px-8 py-4 vibrant-gradient text-white rounded-2xl font-bold shadow-xl hover:shadow-2xl hover:-translate-y-1 transition-all" href="#projects">View Projects</a>
                            <a className="px-8 py-4 bg-white dark:bg-slate-800 border-2 border-slate-200 dark:border-slate-700 rounded-2xl font-bold hover:bg-slate-50 dark:hover:bg-slate-700 transition-all" href="#contact">Get in Touch</a>
                        </div>
                        <div className="mt-12 flex items-center justify-center md:justify-start gap-6 text-slate-400">
                            <span onClick={()=>handleLink(socialLinks[0].url)} className="material-icons-round cursor-pointer hover:text-primary transition-colors">email</span>
                            <span onClick={()=>handleLink(socialLinks[1].url)} className="material-icons-round cursor-pointer hover:text-primary transition-colors">link</span>
                            <span onClick={()=>handleLink(socialLinks[2].url)} className="material-icons-round cursor-pointer hover:text-primary transition-colors">code</span>
                        </div>
                    </div>
                    <div className="flex-1 relative">
                        <div className="relative w-64 h-64 md:w-80 md:h-80 lg:w-[450px] lg:h-[450px] mx-auto">
                            <div className="absolute inset-0 vibrant-gradient rounded-full animate-pulse opacity-20 blur-2xl"></div>
                            <div className="relative z-10 w-full h-full rounded-full border-8 border-white dark:border-slate-800 overflow-hidden glow-avatar">
                                <img alt="Kgomotso Profile" className="w-full h-full object-cover" src={kgomotso}/>
                            </div>
                            <div className="absolute -top-4 -right-4 w-16 h-16 bg-accent-peach rounded-2xl rotate-12 flex items-center justify-center shadow-lg animate-bounce">
                                <span className="material-icons-round text-white">bolt</span>
                            </div>
                            <div className="absolute bottom-8 -left-8 w-20 h-20 bg-accent-green rounded-full -rotate-12 flex items-center justify-center shadow-lg">
                                <span className="material-icons-round text-white">auto_awesome</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="py-24 px-6 bg-slate-50 dark:bg-slate-900/50" id="about">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-20">
                        <h2 className="font-display text-4xl font-extrabold mb-4">What I Do</h2>
                        <div className="h-1.5 w-24 vibrant-gradient mx-auto rounded-full mb-8"></div>
                        <p className="max-w-2xl mx-auto text-slate-600 dark:text-slate-400">
                            I bridge the gap between human needs and technical implementation through 
                            thoughtful engineering and clean visual design.
                        </p>
                    </div>
                    <div className="grid md:grid-cols-3 gap-8">
                        <div className="p-8 bg-white dark:bg-slate-800 rounded-3xl shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all group">
                            <div className="w-16 h-16 bg-primary/10 dark:bg-primary/20 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-primary transition-colors">
                                <span className="material-icons-round text-primary group-hover:text-white text-3xl">psychology</span>
                            </div>
                            <h3 className="text-xl font-bold mb-4">AI Software Development</h3>
                            <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                                I develop intelligent software solutions that use artificial intelligence to automate processes, analyze data, and enhance application functionality.
                            </p>
                        </div>
                        <div className="p-8 bg-white dark:bg-slate-800 rounded-3xl shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all group">
                            <div className="w-16 h-16 bg-accent-pink/10 dark:bg-accent-pink/20 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-accent-pink transition-colors">
                                <span className="material-icons-round text-accent-pink group-hover:text-white text-3xl">palette</span>
                            </div>
                            <h3 className="text-xl font-bold mb-4">Frontend Development</h3>
                            <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                                I build responsive, data-driven interfaces for AI-powered applications using modern technologies like React, Tailwind CSS, and Framer Motion.
                            </p>
                        </div>
                        <div className="p-8 bg-white dark:bg-slate-800 rounded-3xl shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all group">
                            <div className="w-16 h-16 bg-accent-peach/10 dark:bg-accent-peach/20 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-accent-peach transition-colors">
                                <span className="material-icons-round text-accent-peach group-hover:text-white text-3xl">dns</span>
                            </div>
                            <h3 className="text-xl font-bold mb-4">Backend Development</h3>
                            <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                                I design and maintain backend systems, integrating APIs, AI models and server-side logic using Node.js, Python, and PostgreSQL.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            <section className="py-24 px-6" id="projects">
                <div className="max-w-7xl mx-auto">
                    <div className="flex flex-col md:flex-row items-end justify-between mb-16 gap-4">
                        <div className="max-w-xl">
                            <h2 className="font-display text-4xl font-extrabold mb-4">Featured Work</h2>
                            <p className="text-slate-600 dark:text-slate-400">A selection of my recent projects involving complex engineering and creative UI solutions.</p>
                        </div>
                        <button onClick={() => setAdd(prev => prev + 2)} className="px-6 py-3 border-2 border-primary text-primary font-bold rounded-2xl hover:bg-primary hover:text-gray transition-all cursor-pointer">
                            View More Projects
                        </button>
                    </div>
                    <div className="grid md:grid-cols-2 gap-10">
                        {projects.slice(0, add).map((project) => (
                            <article onClick={()=>navigate(`/detail/${project.id}`)} key={project.id} className="group bg-white dark:bg-slate-800 rounded-3xl overflow-hidden shadow-sm hover:shadow-2xl transition-all cursor-pointer">
                                <div className="relative aspect-video overflow-hidden">
                                    <img alt="Justin 'n Beats" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" src={project.image}/>
                                    <div className="absolute top-4 left-4 flex gap-2">
                                        <span className="px-4 py-1.5 bg-white/90 dark:bg-slate-900/90 backdrop-blur-md rounded-full text-sm font-bold shadow-sm">{project.type}</span>
                                        <span className="px-4 py-1.5 bg-primary/90 text-white backdrop-blur-md rounded-full text-sm font-bold shadow-sm">{project.niche}</span>
                                    </div>
                                </div>
                                <div className="p-8">
                                    <h3 className="text-2xl font-bold mb-3">{project.title}</h3>
                                    <p className="text-slate-600 dark:text-slate-400 mb-6">{project.description}</p>
                                    <div className="flex gap-4">
                                        <button onClick={(e)=>{e.stopPropagation();handleLink(project.github)}} className="flex items-center gap-2 px-4 py-2 bg-slate-100 dark:bg-slate-700 rounded-xl font-semibold hover:bg-primary hover:text-black transition-all cursor-pointer">
                                            <span className="material-icons-round text-sm">code</span> Code
                                        </button>
                                        <button onClick={(e)=>{e.stopPropagation();handleLink(project.link)}} className="flex items-center gap-2 px-4 py-2 bg-slate-100 dark:bg-slate-700 rounded-xl font-semibold hover:bg-primary hover:text-black transition-all cursor-pointer">
                                            <span className="material-icons-round text-sm">visibility</span> Demo
                                        </button>
                                    </div>
                                </div>
                            </article>
                        ))}
                    </div>
                </div>
            </section>

            <section className="py-24 px-6 bg-slate-50 dark:bg-slate-900/50">
                <div className="max-w-7xl mx-auto text-center">
                    <h2 className="font-display text-4xl font-extrabold mb-16">Technical Expertise</h2>
                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">

                        <div className="p-6 glass rounded-2xl flex flex-col items-center group hover:scale-105 transition-all">
                            <div className="w-12 h-12 mb-4 flex items-center justify-center bg-yellow-400/10 text-yellow-600 rounded-xl">
                                <span className="font-bold text-lg">JS</span>
                            </div>
                            <h4 className="font-bold text-sm mb-1 uppercase tracking-wider">JavaScript</h4>
                            <p className="text-xs text-slate-500 dark:text-slate-400">ES6+, React, Node</p>
                        </div>
                        <div className="p-6 glass rounded-2xl flex flex-col items-center group hover:scale-105 transition-all">
                            <div className="w-12 h-12 mb-4 flex items-center justify-center bg-blue-400/10 text-blue-600 rounded-xl">
                                <span className="font-bold text-lg">PY</span>
                            </div>
                            <h4 className="font-bold text-sm mb-1 uppercase tracking-wider">Python</h4>
                            <p className="text-xs text-slate-500 dark:text-slate-400">Django, Pandas, ML</p>
                        </div>
                        <div className="p-6 glass rounded-2xl flex flex-col items-center group hover:scale-105 transition-all">
                            <div className="w-12 h-12 mb-4 flex items-center justify-center bg-purple-400/10 text-purple-600 rounded-xl">
                                <span className="material-icons-round">cloud_done</span>
                            </div>
                            <h4 className="font-bold text-sm mb-1 uppercase tracking-wider">Deployment</h4>
                            <p className="text-xs text-slate-500 dark:text-slate-400">Vercel, GCP, CI/CD</p>
                        </div>
                        <div className="p-6 glass rounded-2xl flex flex-col items-center group hover:scale-105 transition-all">
                            <div className="w-12 h-12 mb-4 flex items-center justify-center bg-red-400/10 text-red-600 rounded-xl">
                                <span className="material-icons-round">psychology_alt</span>
                            </div>
                            <h4 className="font-bold text-sm mb-1 uppercase tracking-wider">LLM Integration</h4>
                            <p className="text-xs text-slate-500 dark:text-slate-400">OpenAI, Groq, LangChain</p>
                        </div>
                        <div className="p-6 glass rounded-2xl flex flex-col items-center group hover:scale-105 transition-all">
                            <div className="w-12 h-12 mb-4 flex items-center justify-center bg-indigo-400/10 text-indigo-600 rounded-xl">
                                <span className="font-bold text-lg">BS</span>
                            </div>
                            <h4 className="font-bold text-sm mb-1 uppercase tracking-wider">Bootstrap</h4>
                            <p className="text-xs text-slate-500 dark:text-slate-400">Styling, Responsive</p>
                        </div>
                        <div className="p-6 glass rounded-2xl flex flex-col items-center group hover:scale-105 transition-all">
                            <div className="w-12 h-12 mb-4 flex items-center justify-center bg-blue-500/10 text-blue-500 rounded-xl">
                                <span className="font-bold text-lg">R</span>
                            </div>
                            <h4 className="font-bold text-sm mb-1 uppercase tracking-wider">React</h4>
                            <p className="text-xs text-slate-500 dark:text-slate-400">Hooks, Context API</p>
                        </div>
                        <div className="p-6 glass rounded-2xl flex flex-col items-center group hover:scale-105 transition-all">
                            <div className="w-12 h-12 mb-4 flex items-center justify-center bg-orange-400/10 text-orange-600 rounded-xl">
                                <span className="font-bold text-lg">H5</span>
                            </div>
                            <h4 className="font-bold text-sm mb-1 uppercase tracking-wider">HTML5</h4>
                            <p className="text-xs text-slate-500 dark:text-slate-400">Semantic, APIs</p>
                        </div>
                        <div className="p-6 glass rounded-2xl flex flex-col items-center group hover:scale-105 transition-all">
                            <div className="w-12 h-12 mb-4 flex items-center justify-center bg-pink-400/10 text-pink-600 rounded-xl">
                                <span className="material-icons-round">source</span>
                            </div>
                            <h4 className="font-bold text-sm mb-1 uppercase tracking-wider">Git</h4>
                            <p className="text-xs text-slate-500 dark:text-slate-400">Workflow, Branching</p>
                        </div>
                    </div>
                </div>
            </section>

            <section className="py-24 px-6 overflow-hidden relative">
                <div className="absolute top-1/2 left-0 w-full h-1 vibrant-gradient -translate-y-1/2 opacity-10 hidden md:block"></div>
                <div className="max-w-7xl mx-auto relative z-10">
                    <div className="text-center mb-20">
                        <h2 className="font-display text-4xl font-extrabold mb-4">Work Process</h2>
                        <p className="max-w-2xl mx-auto text-slate-600 dark:text-slate-400">How I bring ideas from concept to production-ready applications.</p>
                    </div>
                    <div className="grid md:grid-cols-4 gap-8">
                        <div className="relative">
                            <div className="p-8 bg-white dark:bg-slate-800 rounded-3xl shadow-lg relative z-10 border-b-4 border-primary">
                                <span className="block text-primary font-black text-4xl mb-4 opacity-30">01</span>
                                <h4 className="font-bold text-lg mb-2">Research</h4>
                                <p className="text-sm text-slate-600 dark:text-slate-400">Understanding user needs and defining technical requirements.</p>
                            </div>
                        </div>
                        <div className="relative">
                            <div className="p-8 bg-white dark:bg-slate-800 rounded-3xl shadow-lg relative z-10 border-b-4 border-accent-pink">
                                <span className="block text-accent-pink font-black text-4xl mb-4 opacity-30">02</span>
                                <h4 className="font-bold text-lg mb-2">Design</h4>
                                <p className="text-sm text-slate-600 dark:text-slate-400">Drafting system architecture and intuitive UI layouts.</p>
                            </div>
                        </div>
                        <div className="relative">
                            <div className="p-8 bg-white dark:bg-slate-800 rounded-3xl shadow-lg relative z-10 border-b-4 border-accent-peach">
                                <span className="block text-accent-peach font-black text-4xl mb-4 opacity-30">03</span>
                                <h4 className="font-bold text-lg mb-2">Develop</h4>
                                <p className="text-sm text-slate-600 dark:text-slate-400">Iterative coding with focus on performance and clean logic.</p>
                            </div>
                        </div>
                        <div className="relative">
                            <div className="p-8 bg-white dark:bg-slate-800 rounded-3xl shadow-lg relative z-10 border-b-4 border-accent-green">
                                <span className="block text-accent-green font-black text-4xl mb-4 opacity-30">04</span>
                                <h4 className="font-bold text-lg mb-2">Launch</h4>
                                <p className="text-sm text-slate-600 dark:text-slate-400">Deploying, monitoring, and scaling for the end user.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="py-24 px-6 bg-slate-50 dark:bg-slate-900/50" id="contact">
                <div className="max-w-7xl mx-auto">
                    <div className="grid lg:grid-cols-2 gap-16">
                    <div>
                        <h2 className="font-display text-4xl font-extrabold mb-6">Let's discuss your Project</h2>
                        <p className="text-slate-600 dark:text-slate-400 mb-12 text-lg">
                                                I'm always open to discussing new projects, creative ideas or opportunities to be part of your visions.
                                            </p>
                        <div className="space-y-6">
                            <div className="flex items-start gap-5">
                                <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                                    <span className="material-icons-round text-primary">location_on</span>
                                </div>
                                <div>
                                    <h4 className="font-bold">Address:</h4>
                                    <p className="text-slate-500 dark:text-slate-400">Johannesburg, Gauteng (RSA)</p>
                                </div>
                            </div>
                            <div className="flex items-start gap-5">
                                <div className="w-12 h-12 rounded-2xl bg-accent-pink/10 flex items-center justify-center flex-shrink-0">
                                    <span className="material-icons-round text-accent-pink">email</span>
                                </div>
                                <div>
                                    <h4 className="font-bold">My Email:</h4>
                                    <p className="text-slate-500 dark:text-slate-400">kgomotsomkhawane@gmail.com</p>
                                </div>
                            </div>
                            <div className="flex items-start gap-5">
                                <div className="w-12 h-12 rounded-2xl bg-accent-peach/10 flex items-center justify-center flex-shrink-0">
                                    <span className="material-icons-round text-accent-peach">call</span>
                                </div>
                                <div>
                                    <h4 className="font-bold">Call Me:</h4>
                                    <p className="text-slate-500 dark:text-slate-400">+27 (71) 797 4903</p>
                                </div>
                            </div>
                        </div>
                        </div>
                        <div className="bg-white dark:bg-slate-800 p-8 md:p-12 rounded-3xl shadow-xl">
                            <h3 className="text-2xl font-bold mb-8">Send me a message</h3>
                            <form onSubmit={handleSubmit}  className="space-y-6">
                                <div className="grid md:grid-cols-2 gap-6">
                                    <div className="space-y-2">
                                        <label htmlFor="name" className="text-sm font-bold opacity-60 ml-1">Name</label>
                                        <input className="w-full px-4 py-3 rounded-xl border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-900 focus:ring-primary focus:border-primary" placeholder="John Doe" type="text" id="name" name="name"/>
                                        <ValidationError prefix="Name" field="name" errors={state.errors} />
                                    </div>
                                    <div className="space-y-2">
                                        <label htmlFor="email" className="text-sm font-bold opacity-60 ml-1">Email</label>
                                        <input className="w-full px-4 py-3 rounded-xl border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-900 focus:ring-primary focus:border-primary" placeholder="john@example.com" type="email" id="email" name="email"/>
                                        <ValidationError prefix="Email" field="email" errors={state.errors} />
                                    </div>
                                </div>
                                <div className="space-y-2">
                                    <label htmlFor="subject" className="text-sm font-bold opacity-60 ml-1">Subject</label>
                                    <input className="w-full px-4 py-3 rounded-xl border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-900 focus:ring-primary focus:border-primary" placeholder="Project Inquiry" type="text" id="subject" name="subject"/>
                                    <ValidationError prefix="Subject" field="subject" errors={state.errors} />
                                </div>
                                <div className="space-y-2">
                                    <label htmlFor="message" className="text-sm font-bold opacity-60 ml-1">Message</label>
                                    <textarea className="w-full px-4 py-3 rounded-xl border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-900 focus:ring-primary focus:border-primary" placeholder="How can I help you?" rows="4" id="message" name="message"></textarea>
                                    <ValidationError prefix="Message" field="message" errors={state.errors} />
                                </div>
                                <button  className="w-full py-4 vibrant-gradient text-white font-bold rounded-2xl hover:shadow-xl transition-all hover:scale-[1.01]" type="submit" disabled={state.submitting} >
                                    Send Message
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    )
}

export default Home;