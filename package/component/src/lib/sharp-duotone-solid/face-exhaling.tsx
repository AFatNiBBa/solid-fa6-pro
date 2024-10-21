
import { Icon, generic } from "../../index";

/**
 * A component that renders the `face-exhaling` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/face-exhaling?s=sharp-duotone-solid face-exhaling}
 * @preview ![face-exhaling](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/face-exhaling.svg)
 */
const FaceExhaling: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path class={generic.secondary} d="M0 256C0 397.4 114.6 512 256 512c55.8 0 107.4-17.9 149.5-48.2c-10.5-9.3-17.9-22.1-20.5-36.5l-42.2-12.7L320 407.8l0-47.6 22.8-6.8L385 340.7c5.3-30 31.5-52.7 63-52.7c.7 0 1.4 0 2.1 0c13.2-14.7 32.3-24 53.7-24c2.7 0 5.4 .2 8.1 .5c.1-2.8 .1-5.6 .1-8.5C512 114.6 397.4 0 256 0S0 114.6 0 256zm91.2-2.4l25.6-19.2c21.6 28.8 64.8 28.8 86.4 0l25.6 19.2c-34.4 45.9-103.2 45.9-137.6 0zM296 384a40 40 0 1 1 -80 0 40 40 0 1 1 80 0zM283.2 253.6l25.6-19.2c21.6 28.8 64.8 28.8 86.4 0l25.6 19.2c-34.4 45.9-103.2 45.9-137.6 0z" />
        <path d="M543.5 336c0 .8 0 1.7-.1 2.5c19 6.4 32.6 24.4 32.6 45.5s-13.6 39.1-32.6 45.5c.1 .8 .1 1.7 .1 2.5c0 22.1-17.9 40-39.9 40c-14.2 0-26.6-7.4-33.7-18.5c-4.4 1.6-9.1 2.5-14 2.5c-22.1 0-39.9-17.9-39.9-40c0-4.3 .7-8.4 1.9-12.2L352 384l64.2-19.3c-.2-1.5-.3-3.1-.3-4.7c0-22.1 17.9-40 39.9-40c3.6 0 7.2 .5 10.5 1.4c5.8-14.9 20.3-25.4 37.2-25.4c22.1 0 39.9 17.9 39.9 40z" />
    </Icon>
);

export default FaceExhaling;