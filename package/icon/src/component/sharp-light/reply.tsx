
import { Icon } from "../../index";

/**
 * A component that renders the `reply` icon from the `sharp-light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/reply?s=sharp-light reply}
 * @preview ![reply](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-light/reply.svg)
 */
const Reply: typeof Icon = x => (
    <Icon {...x}>
        <path d="M440.2 446.6C411 469.9 384 480 384 480s20.2-20.2 28.5-52.6c2.1-8.4 3.5-17.5 3.5-27.4c0-61.9-50.1-112-112-112l-48 0-32 0 0 32 0 32 0 32-32 0L23.7 229.7 0 208l23.7-21.7L192 32l32 0 0 32 0 32 0 32 32 0 80 0c97.2 0 176 78.8 176 176c0 69.2-37.5 115.1-71.8 142.6zm7.7-52.3c18.3-22.5 32.1-52 32.1-90.3c0-79.5-64.5-144-144-144l-112 0-32 0 0-32 0-52.6L47.4 208 192 340.6l0-52.6 0-32 32 0 80 0c77.6 0 140.9 61.4 143.9 138.3z" />
    </Icon>
);

export default Reply;