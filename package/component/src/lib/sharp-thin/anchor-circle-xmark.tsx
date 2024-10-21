
import { Icon } from "../../index";

/**
 * A component that renders the `anchor-circle-xmark` icon from the `sharp-thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/anchor-circle-xmark?s=sharp-thin anchor-circle-xmark}
 * @preview ![anchor-circle-xmark](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-thin/anchor-circle-xmark.svg)
 */
const AnchorCircleXmark: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path d="M352 80A64 64 0 1 1 224 80a64 64 0 1 1 128 0zM288 0c-44.2 0-80 35.8-80 80c0 41.5 31.6 75.6 72 79.6c0 .1 0 .3 0 .4l0 48-80 0-8 0 0 16 8 0 80 0 0 272L88 496l0-204.7 58.3 58.3 11.3-11.3-72-72L80 260.7l-5.6 5.6s0 0 0 0l-72 72 11.3 11.3L72 291.3 72 504l0 8 8 0 208 0 106.8 0c-6.9-4.9-13.4-10.2-19.6-16L296 496l0-272 80 0 8 0 0-16-8 0-80 0 0-48c0-.1 0-.3 0-.4c40.4-4 72-38.1 72-79.6c0-44.2-35.8-80-80-80zm80 368a128 128 0 1 1 256 0 128 128 0 1 1 -256 0zm272 0a144 144 0 1 0 -288 0 144 144 0 1 0 288 0zm-82.3-50.3l5.7-5.7L552 300.7l-5.7 5.7L496 356.7l-50.3-50.3-5.7-5.7L428.7 312l5.7 5.7L484.7 368l-50.3 50.3-5.7 5.7L440 435.3l5.7-5.7L496 379.3l50.3 50.3 5.7 5.7L563.3 424l-5.7-5.7L507.3 368l50.3-50.3z" />
    </Icon>
);

export default AnchorCircleXmark;