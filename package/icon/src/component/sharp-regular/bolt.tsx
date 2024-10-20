
import { Icon } from "../../index";

/**
 * A component that renders the `bolt` icon from the `sharp-regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/bolt?s=sharp-regular bolt}
 * @preview ![bolt](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-regular/bolt.svg)
 */
const Bolt: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M311.6 161.7l22-87.8L352 0 291.1 45.7 32 240l0 48 68.2 9.1 47.9 6.4-11.7 46.9-22 87.8L96 512l60.9-45.7L416 272l0-48-68.2-9.1-47.9-6.4 11.7-46.9zm36 101.7L175.4 392.5l19.3-77.4 13-52.1-53.3-7.1-54.1-7.2L272.6 119.5l-19.3 77.4-13 52.1 53.3 7.1 54.1 7.2z" />
    </Icon>
);

export default Bolt;