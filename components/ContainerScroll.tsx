
import React, { useRef, useEffect, useState } from 'react';
import { useScroll, useTransform, motion } from 'framer-motion';

export const ContainerScroll = ({
    children,
}: {
    children: React.ReactNode;
}) => {
    const containerRef = useRef<any>(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
    });
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const checkMobile = () => {
            setIsMobile(window.innerWidth <= 768);
        };
        checkMobile();
        window.addEventListener('resize', checkMobile);
        return () => window.removeEventListener('resize', checkMobile);
    }, []);

    const scaleDimensions = () => {
        return isMobile ? [0.7, 0.9] : [1.05, 1];
    };

    const rotate = useTransform(scrollYProgress, [0, 1], [20, 0]);
    const scale = useTransform(scrollYProgress, [0, 1], scaleDimensions());
    const translate = useTransform(scrollYProgress, [0, 1], [0, -100]);
    const opacity = useTransform(scrollYProgress, [0, 0.5], [0.8, 1]);

    return (
        <div
            className="h-[60rem] md:h-[80rem] flex items-center justify-center relative p-2 md:p-20"
            ref={containerRef}
        >
            <div
                className="py-10 md:py-40 w-full relative"
                style={{
                    perspective: "1000px",
                }}
            >
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[90%] h-[90%] bg-blue-500/10 blur-[120px] rounded-full pointer-events-none opacity-50" />

                <Card
                    rotate={isMobile ? 0 : rotate}
                    translate={translate}
                    scale={scale}
                    opacity={opacity}
                >
                    {children}
                </Card>
            </div>
        </div>
    );
};

const Card = ({
    rotate,
    scale,
    translate,
    opacity,
    children,
}: {
    rotate: any;
    scale: any;
    translate: any;
    opacity: any;
    children: React.ReactNode;
}) => {
    return (
        <motion.div
            style={{
                rotateX: rotate,
                scale,
                opacity,
                boxShadow: "0 0 #0000004d, 0 9px 20px #0000004a, 0 37px 37px #00000042, 0 84px 50px #00000026, 0 149px 60px #0000000a, 0 233px 65px #00000003",
            }}
            className="max-w-7xl mx-auto h-[30rem] md:h-[40rem] w-full border-4 border-[#6C6C6C] p-2 md:p-6 bg-[#222222] rounded-[30px] shadow-2xl overflow-hidden"
        >
            <div className="h-full w-full overflow-hidden rounded-2xl bg-zinc-900 md:rounded-2xl p-4 flex flex-col items-center justify-center">
                <div className="absolute inset-0 bg-gradient-to-b from-slate-900/10 to-slate-900/50 pointer-events-none" />
                <div className="relative z-10 w-full h-full overflow-y-auto no-scrollbar">
                    {children}
                </div>
            </div>
        </motion.div>
    );
};
