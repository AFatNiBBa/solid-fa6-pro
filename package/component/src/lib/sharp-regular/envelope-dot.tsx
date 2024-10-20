
import { Icon } from "../../index";

/**
 * A component that renders the `envelope-dot` icon from the `sharp-regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/envelope-dot?s=sharp-regular envelope-dot}
 * @preview ![envelope-dot](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-regular/envelope-dot.svg)
 */
const EnvelopeDot: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path d="M496 160A80 80 0 1 0 496 0a80 80 0 1 0 0 160zm16 240l0-209.1c-5.2 .7-10.6 1.1-16 1.1c-23.5 0-45.4-7.3-63.4-19.7L256 293.8 48 150.8 48 112l340.6 0c-3-10.1-4.6-20.9-4.6-32c0-5.4 .4-10.8 1.1-16L48 64 0 64l0 48 0 64L0 400l0 48 48 0 416 0 48 0 0-48zM464 209l0 191L48 400l0-191L256 352 464 209z" />
    </Icon>
);

export default EnvelopeDot;