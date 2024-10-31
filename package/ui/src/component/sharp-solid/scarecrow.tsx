
import { Icon } from "../../index";

/**
 * A component that renders the `scarecrow` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/scarecrow?s=sharp-solid scarecrow}
 * @preview ![scarecrow](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-solid/scarecrow.svg)
 */
const Scarecrow: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M320 96c0 11.2-1.9 22-5.5 32L432 128l-16 32 32 32-32 32 16 32-112 0 32 160-64-32-64 32-64-32L96 416l32-160L16 256l16-32L0 192l32-32L16 128l117.5 0c-3.5-10-5.5-20.8-5.5-32c0-53 43-96 96-96s96 43 96 96zM208 80a16 16 0 1 0 -32 0 16 16 0 1 0 32 0zm48 32a16 16 0 1 0 0-32 16 16 0 1 0 0 32zM192 480l0-44.2 17.7 8.8 14.3 7.2 14.3-7.2 17.7-8.8 0 44.2 0 32-64 0 0-32z" />
    </Icon>
);

export default Scarecrow;