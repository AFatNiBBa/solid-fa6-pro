
import { Icon } from "../../index";

/**
 * A component that renders the `laptop` icon from the `sharp-light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/laptop?s=sharp-light laptop}
 * @preview ![laptop](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-light/laptop.svg)
 */
const Laptop: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path d="M544 64L96 64l0 288-32 0L64 64l0-32 32 0 448 0 32 0 0 32 0 288-32 0 0-288zM61.3 448l517.5 0L608 418.7l0-2.7L32 416l0 2.7L61.3 448zM640 384l0 32 0 16-48 48L48 480 0 432l0-16 0-32 32 0 576 0 32 0z" />
    </Icon>
);

export default Laptop;