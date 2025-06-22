'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Briefcase, ShoppingCart, ArrowRight } from 'lucide-react';
import { createClient } from '@/utils/supabase/client';
import { useRouter } from 'next/navigation';

const RoleSelectionPage = () => {
    const [loadingRole, setLoadingRole] = useState<string | null>(null);
    const router = useRouter();
    const supabase = createClient();

    const handleRoleSelection = async (role: string) => {
        setLoadingRole(role);
        
        const { data: { user } } = await supabase.auth.getUser();
        if (!user) {
            console.error("User not logged in");
            setLoadingRole(null);
            return;
        }

        // Use upsert to handle both new user record creation and existing user updates.
        // This is more robust than a simple update.
        const { error } = await supabase
            .from('users')
            .upsert({ id: user.id, role: role });

        if (error) {
            console.error("Error upserting role:", error);
            setLoadingRole(null);
        } else {
            // Poll to confirm the role update and handle potential replication delay.
            // This is a more robust way to ensure the data is ready before navigating.
            const pollForRole = async () => {
                for (let i = 0; i < 10; i++) { // Try up to 10 times (e.g., 3 seconds)
                    const { data: updatedUserData, error: selectError } = await supabase
                        .from('users')
                        .select('role')
                        .eq('id', user.id)
                        .single();
                    
                    if (selectError) {
                        // This might happen briefly if the row is not yet available for reading after upsert.
                        // We can log it but continue polling for a few attempts.
                        console.warn("Polling warning:", selectError.message);
                    }
                    
                    if (updatedUserData?.role === role) {
                        // Success! The role is confirmed. Navigate now.
                        window.location.assign(`/dashboard/${role}`);
                        return;
                    }
                    
                    // Wait a bit before the next attempt.
                    await new Promise(resolve => setTimeout(resolve, 300));
                }

                // If the loop finishes, the role was not confirmed in time.
                console.error("Failed to confirm role update after several attempts.");
                // Optionally, show an error to the user here.
                setLoadingRole(null);
            };

            pollForRole();
        }
    };

    const roles = [
        {
            name: 'Buyer',
            value: 'buyer',
            description: 'Find and hire talented professionals for your creative projects.',
            icon: <ShoppingCart className="w-12 h-12 text-primary" />,
        },
        {
            name: 'Seller',
            value: 'seller',
            description: 'Showcase your skills, get discovered by clients, and grow your business.',
            icon: <Briefcase className="w-12 h-12 text-primary" />,
        },
    ];

    return (
        <div className="flex flex-col items-center justify-center min-h-screen text-white p-4">
            <motion.div
                initial={{ opacity: 0, y: -50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="text-center mb-12"
            >
                <h1 className="text-4xl font-bold">Choose Your Role</h1>
                <p className="text-gray-400 mt-2">This will help us personalize your experience.</p>
            </motion.div>

            <div className="flex flex-col md:flex-row gap-8">
                {roles.map((role) => (
                    <motion.div
                        key={role.name}
                        whileHover={{ y: -5 }}
                        className={`w-80 p-8 rounded-2xl shadow-xl cursor-pointer bg-gray-800/50 backdrop-blur-lg border-2 transition-colors ${loadingRole === role.value ? 'border-primary' : 'border-gray-700 hover:border-primary'}`}
                        onClick={() => handleRoleSelection(role.value)}
                    >
                        <div className="flex justify-center mb-6">{role.icon}</div>
                        <h2 className="text-2xl font-bold text-center mb-4">{role.name}</h2>
                        <p className="text-center text-gray-400 mb-6 flex-grow">{role.description}</p>
                        <button 
                            className="w-full flex items-center justify-center py-3 bg-primary text-white font-semibold rounded-lg hover:bg-primary-600 transition-colors"
                            disabled={loadingRole !== null}
                        >
                            {loadingRole === role.value ? 'Loading...' : `I'm a ${role.name}`}
                            {loadingRole !== role.value && <ArrowRight className="ml-2 w-5 h-5" />}
                        </button>
                    </motion.div>
                ))}
            </div>
            
            <p className="mt-12 text-gray-500">You can change your role later in your settings.</p>
        </div>
    );
};

export default RoleSelectionPage; 