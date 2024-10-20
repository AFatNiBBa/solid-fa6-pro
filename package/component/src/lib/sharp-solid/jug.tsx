
import { Icon } from "../../index";

/**
 * A component that renders the `jug` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/jug?s=sharp-solid jug}
 * @preview ![jug](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-solid/jug.svg)
 */
const Jug: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M160 0L288 0l32 0 0 64-32 0L160 64l-32 0 0-64 32 0zM359 151l-3.7 3.7L387 190.9 393 185c9.4-9.4 9.4-24.6 0-33.9s-24.6-9.4-33.9 0zm67.9 67.9L416 229.8 416 512 32 512l0-288L144 96l160 0 19.7 22.5 1.4-1.4c28.1-28.1 73.7-28.1 101.8 0s28.1 73.7 0 101.8zM352 288L96 288l0 128 256 0 0-128z" />
    </Icon>
);

export default Jug;