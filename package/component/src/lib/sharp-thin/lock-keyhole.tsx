
import { Icon } from "../../index";

/**
 * A component that renders the `lock-keyhole` icon from the `sharp-thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/lock-keyhole?s=sharp-thin lock-keyhole}
 * @preview ![lock-keyhole](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-thin/lock-keyhole.svg)
 */
const LockKeyhole: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M224 16c61.9 0 112 50.1 112 112l0 64-224 0 0-64c0-61.9 50.1-112 112-112zM96 128l0 64-80 0L0 192l0 16L0 496l0 16 16 0 416 0 16 0 0-16 0-288 0-16-16 0-80 0 0-64C352 57.3 294.7 0 224 0S96 57.3 96 128zM16 208l80 0 16 0 224 0 16 0 80 0 0 288L16 496l0-288zM208 400l0-96 32 0 0 96-32 0zM192 288l0 16 0 96 0 16 16 0 32 0 16 0 0-16 0-96 0-16-16 0-32 0-16 0z" />
    </Icon>
);

export default LockKeyhole;