
import { Icon, generic } from "../../index";

/**
 * A component that renders the `hand-fist` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/hand-fist?s=duotone hand-fist}
 * @preview ![hand-fist](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/duotone/hand-fist.svg)
 */
const HandFist: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path class={generic.secondary} d="M32 240l0 27c0 33.9 13.5 66.5 37.5 90.5l11.6 11.6c13.7 13.7 29.6 24.6 46.9 32.5l0 78.4c0 17.7 14.3 32 32 32l160 0c17.7 0 32-14.3 32-32l0-96c38.9-29.2 64-75.7 64-128l0-8.6c-9.4 5.4-20.3 8.6-32 8.6c-27.9 0-51.7-17.9-60.4-42.8C313.4 220 301.2 224 288 224c-11.7 0-22.6-3.1-32-8.6c0 .2 0 .4 0 .6c0 39.8-32.2 72-72 72l-56 0c-8.8 0-16-7.2-16-16s7.2-16 16-16l56 0c22.1 0 40-17.9 40-40s-17.9-40-40-40l-88 0c-35.3 0-64 28.7-64 64z" />
        <path d="M160 32l0 112 64 0 0-112c0-17.7-14.3-32-32-32s-32 14.3-32 32zM96 32C78.3 32 64 46.3 64 64l0 80 64 0 0-80c0-17.7-14.3-32-32-32zm192 0c-17.7 0-32 14.3-32 32l0 96c0 17.7 14.3 32 32 32s32-14.3 32-32l0-96c0-17.7-14.3-32-32-32zm96 64c-17.7 0-32 14.3-32 32l0 64c0 17.7 14.3 32 32 32s32-14.3 32-32l0-64c0-17.7-14.3-32-32-32z" />
    </Icon>
);

export default HandFist;