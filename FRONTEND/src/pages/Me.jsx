import { useNavigate } from "react-router-dom";

const Me = () => {
    const navigate = useNavigate();

    return (
        <div className="min-h-screen bg-lineart-to-b from-slate-100 via-white to-slate-100 flex items-start justify-center py-10">
            <div className="w-full max-w-5xl px-6">

                <header className="flex items-center justify-between bg-white/60 backdrop-blur-md rounded-xl p-4 shadow-md">
                    <div className="flex items-center gap-4 min-w-0">
                        <img src="/logo.png" alt="logo" className="w-12 h-12 rounded-full shadow-sm object-cover flex-shrink-0" />
                        <div className="min-w-0">
                            <div className="text-2xl font-semibold font-primary truncate hidden md:inline">SimuPay</div>
                            <div className="text-xs text-slate-500 hidden sm:block">Demo MERN payment app</div>
                        </div>
                    </div>

                    <div className="flex items-center gap-2 sm:gap-3">
                        <a
                            href="https://github.com/yashveersinghh/SimuPay"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-2 rounded-lg px-1 py-1 text-slate-900 hover:bg-slate-900/3 shrink-0"
                            >
                            <svg viewBox="0 0 24 24" aria-hidden="true" className="w-6 h-6 fill-slate-900">
                                <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.463 2 11.97c0 4.404 2.865 8.14 6.839 9.458.5.092.682-.216.682-.48 0-.236-.008-.864-.013-1.695-2.782.602-3.369-1.337-3.369-1.337-.454-1.151-1.11-1.458-1.11-1.458-.908-.618.069-.606.069-.606 1.003.07 1.531 1.027 1.531 1.027.892 1.524 2.341 1.084 2.91.828.092-.643.35-1.083.636-1.332-2.22-.251-4.555-1.107-4.555-4.927 0-1.088.39-1.979 1.029-2.675-.103-.252-.446-1.266.098-2.638 0 0 .84-.268 2.75 1.022A9.607 9.607 0 0 1 12 6.82c.85.004 1.705.114 2.504.336 1.909-1.29 2.747-1.022 2.747-1.022.546 1.372.202 2.386.1 2.638.64.696 1.028 1.587 1.028 2.675 0 3.83-2.339 4.673-4.566 4.92.359.307.678.915.678 1.846 0 1.332-.012 2.407-.012 2.734 0 .267.18.577.688.48 3.97-1.32 6.833-5.054 6.833-9.458C22 6.463 17.522 2 12 2Z"/>
                            </svg>

                            <span className="hidden md:inline text-sm font-semibold">Repo</span>
                            </a>
                        <button
                            onClick={() => navigate("/signin")}
                            className="px-4 py-2 rounded-full bg-green-600 text-white font-semibold hover:bg-green-500 transition cursor-pointer text-sm md:px-4 md:py-2"
                        >
                            Sign in
                        </button>
                        <button
                            onClick={() => navigate("/signup")}
                            className="px-4 py-2 rounded-full border border-green-600 text-green-600 font-semibold hover:bg-green-50 transition cursor-pointer text-sm md:px-4 md:py-2"
                        >
                            Sign up
                        </button>
                    </div>
                </header>
                <main className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                    <div className="space-y-6">
                        <h1 className="text-4xl md:text-5xl font-bold leading-tight font-primary">SimuPay — learn payments by building</h1>
                        <p className="text-lg text-slate-700 max-w-xl">SimuPay gives users a simulated balance and lets them transfer demo money. No real payments — just a safe playground for learning authentication, transactions, and frontend↔backend flows.</p>

                        <div className="flex flex-wrap gap-3">
                            <button onClick={() => navigate('/signup')} className="bg-green-600 text-white px-5 py-2 rounded-lg font-semibold hover:bg-green-500 cursor-pointer">Get started</button>
                            <a href="#video" className="px-5 py-2 rounded-lg border border-slate-200 text-slate-700 hover:bg-slate-50">See demo</a>
                        </div>

                        <div className="mt-4 grid grid-cols-2 gap-3 max-w-sm">
                            <div className="bg-white rounded-lg p-3 shadow-sm">
                                <div className="text-sm font-medium">Authentication</div>
                                <div className="text-xs text-slate-500">Signup, signin and JWT-based auth</div>
                            </div>
                            <div className="bg-white rounded-lg p-3 shadow-sm">
                                <div className="text-sm font-medium">Transactions</div>
                                <div className="text-xs text-slate-500">Simulated transfers & balances</div>
                            </div>
                        </div>
                    </div>

                    <div id="video" className="w-full">
                        <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
                            <div className="p-4 border-b border-slate-100 flex items-center justify-between">
                                <div className="font-medium">Demo Walkthrough</div>
                                <div className="text-xs text-slate-500">Auto-play muted loop</div>
                            </div>
                            <video
                                src="/demo.mp4"
                                autoPlay
                                muted
                                loop
                                className="w-full h-64 md:h-80 object-cover"
                            />
                            <div className="p-4 text-sm text-slate-600">
                                This short demo shows signing up, checking your balance, and sending demo money to another user.
                            </div>
                        </div>
                    </div>
                </main>
            </div>
        </div>
    );
};

export default Me;