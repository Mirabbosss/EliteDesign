'use client';
import { useState } from "react";
import { useRouter } from 'next/navigation';

const Login = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const router = useRouter();

    const handleLogin = async (e: React.FormEvent) => {
        e.preventDefault();
        setError('');
    
        try {
            const response = await fetch('https://api.escuelajs.co/api/v1/auth/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ email: username, password }),
            });
    
            if (response.ok) {
                const data = await response.json();
                localStorage.setItem('token', data.access_token);
                router.push('/admin');
            } else {
                const errorData = await response.json();
                console.log('Error data:', errorData);
                setError('Неправильный логин или пароль');
            }
        } catch (error) {
            console.error('Error:', error);
            setError('Произошла ошибка, попробуйте позже.');
        }
    };

    return (
        <div>
            <div className="container max-w-[1440px] w-full mx-auto dark:bg-gray-900">
                <div className="h-screen w-full py-8 px-4 flex items-center justify-items-center">
                    <div className="w-full lg:max-w-[500px] mx-auto p-6 space-y-8 sm:p-8 bg-white rounded-lg shadow-xl dark:bg-gray-800">
                        <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
                            Войдите в админ-панель
                        </h2>
                        <form onSubmit={handleLogin} className="mt-8 space-y-6" action="#">
                            <div>
                                <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Логин</label>
                                <input 
                                    value={username}
                                    onChange={(e) => setUsername(e.target.value)} 
                                    type="email" 
                                    name="email" 
                                    id="email" 
                                    className={`bg-gray-50 border ${error ? 'border-red-500' : 'border-gray-300'} text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500`} 
                                    placeholder="john@mail.com" 
                                    required 
                                />
                            </div>
                            <div>
                                <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Ваш пароль</label>
                                <input 
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)} 
                                    type="password" 
                                    name="password" 
                                    id="password" 
                                    placeholder="changeme" 
                                    className={`bg-gray-50 border ${error ? 'border-red-500' : 'border-gray-300'} text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500`} 
                                    required 
                                />
                                {error && <p className="mt-1 text-sm text-red-500">{error}</p>} {/* Неверный логин или пароль */}
                            </div>
                            
                            <button type="submit" className="w-full px-5 py-3 text-base font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 sm:w-auto dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Войдите в свой аккаунт</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;
