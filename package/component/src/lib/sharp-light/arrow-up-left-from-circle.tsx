
import { Icon } from "../../index";

/**
 * A component that renders the `arrow-up-left-from-circle` icon from the `sharp-light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/arrow-up-left-from-circle?s=sharp-light arrow-up-left-from-circle}
 * @preview ![arrow-up-left-from-circle](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-light/arrow-up-left-from-circle.svg)
 */
const ArrowUpLeftFromCircle: typeof Icon = x => (
    <Icon {...x}>
        <path d="M16 0L0 0 0 16 0 176l0 16 32 0 0-16L32 54.6 300.7 323.3 312 334.6 334.6 312l-11.3-11.3L54.6 32 176 32l16 0 0-32L176 0 16 0zM288 64l-16 0 0 32 16 0c106 0 192 86 192 192s-86 192-192 192S96 394 96 288l0-16-32 0 0 16c0 123.7 100.3 224 224 224s224-100.3 224-224S411.7 64 288 64z" />
    </Icon>
);

export default ArrowUpLeftFromCircle;