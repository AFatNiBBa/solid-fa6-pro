
import { Icon, generic } from "../../index";

/**
 * A component that renders the `face-sleeping` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/face-sleeping?s=sharp-duotone-solid face-sleeping}
 * @preview ![face-sleeping](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/face-sleeping.svg)
 */
const FaceSleeping: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M0 256C0 397.4 114.6 512 256 512s256-114.6 256-256c0-46.6-12.5-90.3-34.2-128L432 128l-48 0 0-48 0-8 0-8 0-16 0-13.8C346.3 12.5 302.6 0 256 0C114.6 0 0 114.6 0 256zm91.2-2.4l25.6-19.2c21.6 28.8 64.8 28.8 86.4 0c8.5 6.4 17 12.8 25.6 19.2c-34.4 45.9-103.2 45.9-137.6 0zM296 384a40 40 0 1 1 -80 0 40 40 0 1 1 80 0zM256 64l16 0 64 0 16 0 0 16 0 8 0 8-6.4 4.8L309.3 128l26.7 0 16 0 0 32-16 0-64 0-16 0c0-5.3 0-10.7 0-16c0-2.7 0-5.3 0-8s0-5.3 0-8l6.4-4.8c12.1-9.1 24.2-18.1 36.3-27.2L272 96l-16 0c0-10.7 0-21.3 0-32zm27.2 189.6c8.5-6.4 17.1-12.8 25.6-19.2c21.6 28.8 64.8 28.8 86.4 0l25.6 19.2c-17.2 22.9-43 34.4-68.8 34.4s-51.6-11.5-68.8-34.4z" />
        <path d="M432 0L416 0l0 32 16 0 26.7 0L422.4 59.2 416 64l0 8 0 8 0 16 16 0 64 0 16 0 0-32-16 0-26.7 0 36.3-27.2L512 32l0-8 0-8 0-16L496 0 432 0zM272 64l-16 0 0 32 16 0 26.7 0-36.3 27.2L256 128l0 8 0 8 0 16 16 0 64 0 16 0 0-32-16 0-26.7 0 36.3-27.2L352 96l0-8 0-8 0-16-16 0-64 0zm36.8 170.4l-25.6 19.2c34.4 45.9 103.2 45.9 137.6 0l-25.6-19.2c-21.6 28.8-64.8 28.8-86.4 0zm-192 0L91.2 253.6c34.4 45.9 103.2 45.9 137.6 0l-25.6-19.2c-21.6 28.8-64.8 28.8-86.4 0z" />
    </Icon>
);

export default FaceSleeping;