import React from 'react'

import { useSpring, animated } from 'react-spring'

const LoadingDots = () => {
    const items = new Array(3).fill(null)

    const { values } = useSpring({
        from: { values: 0 },
        to: { values: 2 * Math.PI },
        loop: true,
        config: {
            duration: 2000,
        },
        keys: items,
    })
    return (
        <div className="flex justify-center align-middle ml-[3px]">
            {items.map((item, i) => (
                <animated.div
                    className="inline-block rounded w-[4px] h-[4px] bg-gray-500 mr-[3px]"
                    key={i}
                    style={{
                        transform: values.to(
                            (r) =>
                                `translate3d(0, ${
                                    2 * Math.sin(r + (i * 2 * Math.PI) / 5)
                                }px, 0)`
                        ),
                    }}
                />
            ))}
        </div>
    )
}

export default LoadingDots
