import router from 'next/router';
import React from 'react';

const TopLoadingBar = () => {
    const [isVisible, setIsVisible] = React.useState(false);

    React.useEffect(() => {
        const handleRouteChangeStart = () => setIsVisible(true);
        const handleRouteChangeComplete = () => setIsVisible(false);
        const handleRouteChangeError = () => setIsVisible(false);

        router.events.on('routeChangeStart', handleRouteChangeStart);
        router.events.on('routeChangeComplete', handleRouteChangeComplete);
        router.events.on('routeChangeError', handleRouteChangeError);

        // Cleanup function (optional):
        return () => {
            router.events.off('routeChangeStart', handleRouteChangeStart);
            router.events.off('routeChangeComplete', handleRouteChangeComplete);
            router.events.off('routeChangeError', handleRouteChangeError);
        };
    }, [router]);

    return (
        isVisible && (
            <div className="top-loading-bar">
                {/* Your loading bar animation and styling here */}
            </div>
        )
    );
};

export default TopLoadingBar;
