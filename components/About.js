import React from "react"
import Image from "next/image"
import portfolioImage from "../public/portfolio_img.jpeg"

const About = () => {
    return (
        <div className="container px-4 mx-auto">
            <div className="lg:space-x-5 lg:flex lg:flex-row item-center lg:-mx-4 flex flex-col-reverse text-center lg:text-left">
                <div className="lg:px-4 lg:mt-12 ">
                    <h1 className="text-2xl font-bold text-gray-900 lg:text-5xl dark:text-white">
                        Hey there!
                    </h1>
                    <div className="mt-10 text-gray-800 font-medium dark:text-white">
                        <p className="mb-4">
                            My name is Florence, I'm a frontend  developer with a huge appetite for appealing interfaces and problem solving.
                            Some of my day-to-day technologies are HTML/CSS, Javascript, Typescript, React, Redux, Git... And hey! I just recently started learning about Web3 and NFTs. Feel free to get in touch 😊
                        </p>
                    </div>
                </div>
                <div className="flex-shrink-0 lg:mt-12  mb-10">
                    <Image
                        src={portfolioImage}
                        alt="Profile"
                        priority={true}
                        className="rounded-full"
                        width={300}
                        height={300}
                        placeholder="blur"
                    />
                </div>
            </div>
        </div>
    )
}

export default About;