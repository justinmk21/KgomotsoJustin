function Footer() {

    return (
        <footer className="bg-slate-900 text-white py-12 px-6">
            <div className="max-w-7xl mx-auto">
                <div className="flex flex-col md:flex-row items-center justify-between gap-8 mb-12">
                    <div className="flex items-center gap-3">
                        <div className="w-10 h-10 bg-primary rounded-xl flex items-center justify-center text-white font-black">K</div>
                        <span className="font-display font-extrabold text-xl">Kgomotso</span>
                    </div>
                    <div className="flex gap-8 text-slate-400">
                        <a className="hover:text-white transition-colors" href="#">LinkedIn</a>
                        <a className="hover:text-white transition-colors" href="#">GitHub</a>
                    </div>
                </div>
                <div className="pt-8 border-t border-slate-800 flex flex-col md:flex-row items-center justify-between gap-4 text-slate-500 text-sm">
                    <p>© 2024 Hex Tech. All rights reserved.</p>
                    <div className="flex items-center gap-4">
                        <a className="hover:text-white transition-colors" href="#">Privacy Policy</a>
                        <a className="hover:text-white transition-colors" href="#">Terms of Service</a>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer;