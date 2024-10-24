
import { Icon } from "../../index";

/**
 * A component that renders the `envelope-dot` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/envelope-dot?s=sharp-solid envelope-dot}
 * @preview ![envelope-dot](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-solid/envelope-dot.svg)
 */
const EnvelopeDot: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path d="M496 0a80 80 0 1 1 0 160A80 80 0 1 1 496 0zM0 64l385.1 0c-.7 5.2-1.1 10.6-1.1 16c0 47 29 87.3 70 103.9L256 320 0 144 0 64zM274.1 346.4L498.7 192c4.5-.1 8.9-.5 13.3-1.1L512 448 0 448 0 182.8 237.9 346.4 256 358.8l18.1-12.5z" />
    </Icon>
);

export default EnvelopeDot;