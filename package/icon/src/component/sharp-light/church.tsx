
import { Icon } from "../../index";

/**
 * A component that renders the `church` icon from the `sharp-light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/church?s=sharp-light church}
 * @preview ![church](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-light/church.svg)
 */
const Church: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path d="M336 16l0-16L304 0l0 16 0 32-40 0-16 0 0 32 16 0 40 0 0 39.4L167.1 210.7l-7.1 4.8 0 8.6 0 256L32 480l0-119.3 96-62.1 0-38.1L7.3 338.6 0 343.3 0 352 0 496l0 16 16 0 168 0s0 0 0 0l72 0 32 0 64 0 32 0 72 0s0 0 0 0l168 0 16 0 0-16 0-144 0-8.7-7.3-4.7L512 260.5l0 38.1 96 62.1L608 480l-128 0 0-256 0-8.6-7.1-4.8L336 119.4 336 80l40 0 16 0 0-32-16 0-40 0 0-32zM448 480l-64 0 0-96c0-35.3-28.7-64-64-64s-64 28.7-64 64l0 96-64 0 0-247.4 128-85.3 128 85.3L448 480zm-96-96l0 96-64 0 0-96c0-17.7 14.3-32 32-32s32 14.3 32 32z" />
    </Icon>
);

export default Church;