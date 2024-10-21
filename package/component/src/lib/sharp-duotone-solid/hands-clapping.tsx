
import { Icon, generic } from "../../index";

/**
 * A component that renders the `hands-clapping` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/hands-clapping?s=sharp-duotone-solid hands-clapping}
 * @preview ![hands-clapping](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/hands-clapping.svg)
 */
const HandsClapping: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M201.8 27.6L228.4 9.8l8.9 13.3 32 48 8.9 13.3-26.6 17.8-8.9-13.3-32-48-8.9-13.3zM304 0l32 0 0 16 0 64 0 16-32 0 0-16 0-64 0-16zm51.4 508c48.1-39.6 76.6-99 76.6-162.4l0-91.5 16 16 0-86.1 0-24 24 0 16 0 24 0 0 24 0 161.6c0 57.1-30 110-78.9 139.4c-24.2 14.5-50.9 22.1-77.7 23.1zm6.4-423.6l8.9-13.3 32-48 8.9-13.3 26.6 17.8-8.9 13.3-32 48-8.9 13.3L361.8 84.4z" />
        <path d="M152 102.1l17 17 151 151 0-86.1 0-24 24 0 16 0 24 0 0 24 0 161.6c0 57.1-30 110-78.9 139.4c-64 38.4-145.8 28.3-198.5-24.4L7 361l-17-17L24 310.1l17 17 64 64L127 369 23 265l-17-17L40 214.1l17 17L161 335 183 313 55 185l-17-17L72 134.1l17 17L217 279 239 257 135 153l-17-17L152 102.1z" />
    </Icon>
);

export default HandsClapping;