import { motion, AnimatePresence } from 'framer-motion';
import { usePopupStore } from '../shared/model/popup-store/popup-store';
import { PopupHeader } from '../shared/ui/popup-header/popup-header';

interface IPopupLayoutProps {
    id: string;
    title: string;
    children: React.ReactNode;
}

export const PopupLayout = ({ id, title, children }: IPopupLayoutProps) => {
    const { closePopup, isPopupOpen } = usePopupStore();

    return (
        <AnimatePresence>
            {isPopupOpen(id) ? (
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                    onClick={() => closePopup(id)}
                    className="fixed inset-0 z-50 flex items-center justify-center"
                >
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                        className="absolute inset-0 bg-black/30 backdrop-blur-sm"
                    />
                    <motion.div
                        initial={{ scale: 0.9, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        exit={{ scale: 0.9, opacity: 0 }}
                        transition={{
                            type: "spring",
                            stiffness: 300,
                            damping: 25
                        }}
                        onClick={(e) => e.stopPropagation()}
                        className="relative z-10 bg-background rounded-[18px] w-[330px] h-[330px] p-4"
                    >
                        <PopupHeader id={id} title={title} />
                        {children}
                    </motion.div>
                </motion.div>
            ) : null}
        </AnimatePresence>
    )
}
