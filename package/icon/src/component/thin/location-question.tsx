
import { Icon } from "../../index";

/**
 * A component that renders the `location-question` icon from the `thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/location-question?s=thin location-question}
 * @preview ![location-question](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/thin/location-question.svg)
 */
const LocationQuestion: typeof Icon = x => (
    <Icon viewBox="0 0 384 512" {...x}>
        <path d="M368 192c0-97.2-78.8-176-176-176S16 94.8 16 192c0 18.7 6.4 42.5 17.8 69.6c11.3 26.9 27.1 55.8 44.7 84.3c35.2 57 76.8 111.4 102.3 143.2c5.9 7.3 16.6 7.3 22.4 0c25.5-31.8 67.1-86.2 102.3-143.2c17.6-28.5 33.4-57.4 44.7-84.3C361.6 234.5 368 210.7 368 192zm16 0c0 87.4-117 243-168.3 307.2c-12.3 15.3-35.1 15.3-47.4 0C117 435 0 279.4 0 192C0 86 86 0 192 0S384 86 384 192zM104 152c0-30.9 25.1-56 56-56l56.2 0c35.2 0 63.8 28.6 63.8 63.8c0 21.4-10.8 41.5-28.7 53.3L200 246.9l0 25.1c0 4.4-3.6 8-8 8s-8-3.6-8-8l0-29.5c0-2.7 1.4-5.2 3.6-6.7l54.9-36.2c13.4-8.8 21.5-23.8 21.5-39.9c0-26.4-21.4-47.8-47.8-47.8L160 112c-22.1 0-40 17.9-40 40l0 6.5c0 4.4-3.6 8-8 8s-8-3.6-8-8l0-6.5zm72 168a16 16 0 1 1 32 0 16 16 0 1 1 -32 0z" />
    </Icon>
);

export default LocationQuestion;