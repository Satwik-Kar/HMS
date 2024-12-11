"use client";
import Loader from '../app/components/loader_component';
import {useState} from "react";

export default function Home() {
    const [loading, setLoading] = useState(true);

    return (
        <>
            <header className="absolute top-0 left-0">
                <img
                    width={"100px"}
                    height={"100px"}
                    src={"/logos/secondary.webp"}
                    alt="logo"
                    className="object-contain"
                />
            </header>

            <div
                className="bg-primary w-screen h-screen flex justify-center items-center font-[family-name:var(--font-geist-sans)]"
            >
                <div className="flex   w-max h-max flex-col justify-center items-center">

                    <img
                        src={"/logos/primary_lg.webp"}
                        alt="primary logo"
                        className="max-w-[50%] max-h-[50%] md:max-h-[60%] lg:max-h-[70%] object-contain"
                    />

                    <div className="flex">
                        {loading && <Loader/>}
                    </div>
                </div>

            </div>
        </>
    );
}
