import { motion, AnimatePresence } from 'framer-motion';
import { SidebarLink } from './sidebar-link';
import { useSidebarStore } from '../model/sidebar-store';

import { X } from 'lucide-react';
import { sidebarLinks } from '../model/links';


export const Sidebar = () => {
    const { isOpen, toggle } = useSidebarStore()


    return (
        <AnimatePresence>
            {isOpen && (
                <>
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={toggle}
                        className="fixed inset-0 bg-black/30 backdrop-blur-sm z-40"
                    />

                    <motion.div
                        initial={{ x: '-100%' }}
                        animate={{ x: 0 }}
                        exit={{ x: '-100%' }}
                        transition={{ type: 'spring', damping: 20 }}
                        className="fixed top-0 left-0 h-full w-[280px] bg-background z-50 "
                    >
                        <div className=" pt-5 flex flex-col h-full">
                            <div className='pl-8 justify-between h-full'>
                                <div className="flex mb-8">
                                    <button onClick={toggle}>
                                        <X className="text-primary" size={28} />
                                    </button>
                                </div>
                                <nav className="flex flex-col gap-4">
                                    {sidebarLinks.map((item) => (
                                        <SidebarLink
                                            key={item.name}
                                            icon={item.icon}
                                            name={item.name}
                                            path={item.path}
                                        />
                                    ))}
                                </nav>
                            </div>
                            <div className="py-4 text-light_gray self-center">
                                Snejok Mining
                            </div>
                        </div>
                    </motion.div>
                </>
            )}
        </AnimatePresence>
    );
};