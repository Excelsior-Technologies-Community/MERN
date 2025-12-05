import React, { useState } from 'react'

export const Password = () => {
    const [show, setShow] = useState(false);
    const [password, setPassword] = useState("");
    const [strength, setStrength] = useState("");

    const checkStrength = (value) => {
        let score = 0;

        if (value.length >= 6) score++;
        if (value.length >= 10) score++;
        if (/[A-Z]/.test(value)) score++;
        if (/[0-9]/.test(value)) score++;
        if (/[^A-Za-z0-9]/.test(value)) score++;

        if (score === 0) setStrength("");
        else if (score === 1) setStrength("Very Weak");
        else if (score === 2) setStrength("Weak");
        else if (score === 3) setStrength("Medium");
        else if (score === 4) setStrength("Good");
        else setStrength("Strong");
    };

    return (
        <div className='flex w-1/3 flex-col justify-center p-10 gap-3'>
            <label htmlFor="password" className="font-medium text-gray-700">
                Enter Password
            </label>

            {/* Input Box */}
            <div className="flex items-center gap-3 border border-gray-300 rounded-lg px-4 py-3 focus-within:ring-1 focus-within:ring-blue-500">
                <input
                    type={show ? "text" : "password"}
                    id="password"
                    placeholder='Enter your password'
                    className="flex-1 outline-none text-gray-900 placeholder:text-gray-400"
                    onChange={(e) => {
                        setPassword(e.target.value);
                        checkStrength(e.target.value);
                    }}
                />
                <button onClick={() => setShow(!show)} type="button">
                    <i className={`bi bi-${show ? 'eye-slash' : 'eye'} text-lg`}></i>
                </button>
            </div>

            <div className="flex items-center gap-1">
                <div className={`w-full h-1.5 rounded-full ${strength ? "bg-red-600" : "bg-gray-200"}`}></div>
                <div className={`w-full h-1.5 rounded-full ${["Weak", "Medium", "Good", "Strong", "Very Strong"].includes(strength) ? "bg-orange-500" : "bg-gray-200"}`}></div>
                <div className={`w-full h-1.5 rounded-full ${["Medium", "Good", "Strong", "Very Strong"].includes(strength) ? "bg-yellow-500" : "bg-gray-200"}`}></div>
                <div className={`w-full h-1.5 rounded-full ${["Good", "Strong", "Very Strong"].includes(strength) ? "bg-blue-500" : "bg-gray-200"}`}></div>
                <div className={`w-full h-1.5 rounded-full ${["Strong", "Very Strong"].includes(strength) ? "bg-green-500" : "bg-gray-200"}`}></div>

            </div>

            {/* Text */}
            {strength === "Very Weak" && <span className="text-red-600">Very Weak</span>}
            {strength === "Weak" && <span className="text-orange-500">Weak</span>}
            {strength === "Medium" && <span className="text-yellow-500">Medium</span>}
            {strength === "Good" && <span className="text-blue-500">Good</span>}
            {strength === "Strong" && <span className="text-green-600">Strong</span>}

        </div>
    )
}
