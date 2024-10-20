
import { Icon, generic } from "../../index";

/**
 * A component that renders the `face-zipper` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/face-zipper?s=sharp-duotone-solid face-zipper}
 * @preview ![face-zipper](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/face-zipper.svg)
 */
const FaceZipper: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M0 256C0 397.4 114.6 512 256 512c40 0 77.8-9.2 111.5-25.5l-44.1-88.2L316.2 384 304 384l0-16 0-32 0-16 32 0 0 16 0 18.7 25.4-25.4 16.3-16.3 20.6 10.3 88.2 44.1C502.8 333.8 512 296 512 256C512 114.6 397.4 0 256 0S0 114.6 0 256zm112 64l32 0 0 16 0 32 0 16-32 0 0-16 0-32 0-16zm32.4-112c0-17.7 14.3-32 32-32c8.8 0 16.8 3.6 22.6 9.4c2.9 2.9 5.2 6.3 6.9 10.2c.8 1.9 1.4 3.9 1.9 6c.2 1 .4 2.1 .5 3.2c.1 .5 .1 1.1 .1 1.6s0 1 0 1.8c0 .5 0 1 0 1.5s-.1 1.1-.1 1.6c-.1 1.1-.3 2.1-.5 3.2c-.4 2.1-1.1 4.1-1.9 6c-1.6 3.8-4 7.3-6.9 10.2c-5.8 5.8-13.8 9.4-22.6 9.4c-17.7 0-32-14.3-32-32zM176 320l32 0 0 16 0 32 0 16-32 0 0-16 0-32 0-16zm64 0l32 0 0 16 0 32 0 16-32 0 0-16 0-32 0-16zM368.4 208a32 32 0 1 1 -64 0 32 32 0 1 1 64 0z" />
        <path d="M208.4 208a32 32 0 1 0 -64 0 32 32 0 1 0 64 0zm160 0a32 32 0 1 0 -64 0 32 32 0 1 0 64 0zM512 416L384 352l-32 32 64 128 32 0 64-64 0-32zm-55 8l-8.5 8.5-16 16L424 457l-17-17 8.5-8.5 16-16L440 407l17 17z" />
    </Icon>
);

export default FaceZipper;