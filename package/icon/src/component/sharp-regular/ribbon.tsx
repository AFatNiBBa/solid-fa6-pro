
import { Icon } from "../../index";

/**
 * A component that renders the `ribbon` icon from the `sharp-regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/ribbon?s=sharp-regular ribbon}
 * @preview ![ribbon](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-regular/ribbon.svg)
 */
const Ribbon: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M352 142.9l-11.8-17.2-16.5 18.4-45.9 51-32.3-35.9L288 112 224 48l-64 64L415.7 396.1 448 432l-39.3 28.1L336 512 48 192l0-64L136 0l40 0 48 0 48 0 40 0 88 128 0 64-62.5 69.4-32.3-35.9 46.8-52 0-30.7zM142.8 345.1l-71.1 79L105 448l65.2-72.4 32.3 35.9L112 512 39.3 460.1 0 432l32.3-35.9 78.2-86.8 32.3 35.9zM96 142.9l0 30.7L343 448l33.4-23.8L124.3 144.1l-16.5-18.4L96 142.9z" />
    </Icon>
);

export default Ribbon;