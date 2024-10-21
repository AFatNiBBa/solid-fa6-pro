
import { Icon } from "../../index";

/**
 * A component that renders the `microwave` icon from the `sharp-thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/microwave?s=sharp-thin microwave}
 * @preview ![microwave](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-thin/microwave.svg)
 */
const Microwave: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path d="M560 48l0 384L16 432 16 48l544 0zM16 32L0 32 0 48 0 432l0 16 16 0 48 0 0 32 16 0 0-32 416 0 0 32 16 0 0-32 48 0 16 0 0-16 0-384 0-16-16 0L16 32zM496 96l0 288 16 0 0-288-16 0zM96 128l320 0 0 224L96 352l0-224zM80 112l0 16 0 224 0 16 16 0 320 0 16 0 0-16 0-224 0-16-16 0L96 112l-16 0z" />
    </Icon>
);

export default Microwave;