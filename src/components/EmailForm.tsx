import { useState } from 'react';
import { Send, CheckCircle } from 'lucide-react';

const EmailForm: React.FC = () => {
    const [email, setEmail] = useState('');
    const [submitted, setSubmitted] = useState(false);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (email) {
            setSubmitted(true);
            // Logic to actually save email could be placed here
            setTimeout(() => setSubmitted(false), 3000);
            setEmail('');
        }
    };

    return (
        <div className="w-full max-w-md mx-auto relative animate-fade-up delay-400 mt-10">
            {!submitted ? (
                <form onSubmit={handleSubmit} className="input-group">
                    <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="Enter your email for early access..."
                        className="glass-input"
                        required
                    />
                    <button type="submit" className="submit-btn">
                        <Send size={18} />
                    </button>
                </form>
            ) : (
                <div className="glass-panel p-4 flex items-center justify-center gap-3 text-green-400">
                    <CheckCircle size={24} />
                    <span className="font-medium">You're on the list! Welcome to Multanish.</span>
                </div>
            )}
        </div>
    );
};

export default EmailForm;
