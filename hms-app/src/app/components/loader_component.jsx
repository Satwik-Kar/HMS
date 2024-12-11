"use client";
export default function Loader() {
    return (
        <div className="loader-wrapper">
            <div className="spinner"></div>
            <style jsx>{`
                .loader-wrapper {
                    
                   
                    width: 100%;
                    height: 100%;
                    
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    z-index: 9999;
                }
                .spinner {
                    width: 50px;
                    height: 50px;
                    border: 5px solid rgba(0, 0, 0, 1);
                    border-top-color: #22C55E;
                    border-radius: 50%;
                    animation: spin 1s linear infinite;
                }
                @keyframes spin {
                    0% {
                        transform: rotate(0deg);
                    }
                    100% {
                        transform: rotate(360deg);
                    }
                }
            `}</style>
        </div>
    );
}
