
import { Icon } from "../../index";

/**
 * A component that renders the `face-icicles` icon from the `sharp-regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/face-icicles?s=sharp-regular face-icicles}
 * @preview ![face-icicles](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-regular/face-icicles.svg)
 */
const FaceIcicles: typeof Icon = x => (
    <Icon {...x}>
        <path d="M48 256C48 141.1 141.1 48 256 48s208 93.1 208 208c0 1.5 .1 3 .4 4.5L488 512l23.6-251.5c.3-1.5 .4-3 .4-4.5C512 114.6 397.4 0 256 0S0 114.6 0 256c0 2.1 .3 4 .7 6L24 448 47.3 262c.5-1.9 .7-3.9 .7-6zm96 98.7l0-34.7 32 0 0 48-18.7 0L144 354.7zM208 368l0-48 32 0 0 48-32 0zm64 0l0-48 32 0 0 48-32 0zm82.7 0L336 368l0-48 32 0 0 34.7L354.7 368zM400 320l0-32-32 0-224 0-32 0 0 32 0 48 32 32 140.7 0 14 48 16-48 33.6 0 14.4 80 19.3-93.9L400 368l0-48zM176.4 240a32 32 0 1 0 0-64 32 32 0 1 0 0 64zm192-32a32 32 0 1 0 -64 0 32 32 0 1 0 64 0zM256 512c23.8 0 46.9-3.3 68.8-9.4l-2-19.4-.3-3.3-21.2 0-5.3 0-25 0-4.1-16.3c-3.6 .2-7.3 .3-10.9 .3c-79.8 0-149.1-44.9-184-110.9l-6.2 74.3C112.7 479.3 180.5 512 256 512zm151.3-49.5c12.8-9.4 24.7-20 35.6-31.6l-4.7-74.6c-6.7 12.2-14.6 23.6-23.5 34.1l-7.4 72z" />
    </Icon>
);

export default FaceIcicles;