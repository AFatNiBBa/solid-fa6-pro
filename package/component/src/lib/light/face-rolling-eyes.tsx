
import { Icon } from "../../index";

/**
 * A component that renders the `face-rolling-eyes` icon from the `light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/face-rolling-eyes?s=light face-rolling-eyes}
 * @preview ![face-rolling-eyes](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/light/face-rolling-eyes.svg)
 */
const FaceRollingEyes: typeof Icon = x => (
    <Icon {...x}>
        <path d="M480 256A224 224 0 1 0 32 256a224 224 0 1 0 448 0zM0 256a256 256 0 1 1 512 0A256 256 0 1 1 0 256zM192 368l128 0c8.8 0 16 7.2 16 16s-7.2 16-16 16l-128 0c-8.8 0-16-7.2-16-16s7.2-16 16-16zm-32-96c26.5 0 48-21.5 48-48c0-14.3-6.3-27.2-16.2-36c.2 1.3 .2 2.6 .2 4c0 17.7-14.3 32-32 32s-32-14.3-32-32c0-1.4 .1-2.7 .2-4c-10 8.8-16.2 21.7-16.2 36c0 26.5 21.5 48 48 48zm0-128a80 80 0 1 1 0 160 80 80 0 1 1 0-160zm240 80c0-14.3-6.3-27.2-16.2-36c.2 1.3 .2 2.6 .2 4c0 17.7-14.3 32-32 32s-32-14.3-32-32c0-1.4 .1-2.7 .2-4c-10 8.8-16.2 21.7-16.2 36c0 26.5 21.5 48 48 48s48-21.5 48-48zm-128 0a80 80 0 1 1 160 0 80 80 0 1 1 -160 0z" />
    </Icon>
);

export default FaceRollingEyes;