
import { Icon } from "../../index";

/**
 * A component that renders the `sailboat` icon from the `light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/sailboat?s=light sailboat}
 * @preview ![sailboat](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/light/sailboat.svg)
 */
const Sailboat: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path d="M285.1 6.8c-4-5.7-11.3-8.2-17.9-6.1S256 9 256 16l0 320c0 8.8 7.2 16 16 16l224 0c6 0 11.4-3.3 14.2-8.6s2.3-11.7-1.1-16.6l-224-320zM288 320l0-253.2L465.3 320 288 320zM212.1 96.5c-7-1.9-14.4 1.2-18 7.5l-128 224c-2.8 5-2.8 11 .1 16s8.1 8 13.8 8l128 0c8.8 0 16-7.2 16-16l0-224c0-7.3-4.9-13.6-11.9-15.5zM107.6 320L192 172.2 192 320l-84.4 0zM42.5 416l491.1 0c-13.5 38.1-49.6 64-90.5 64L133 480c-40.9 0-77-25.9-90.5-64zM21.1 384c-10.6 0-18.3 10.1-15.4 20.3l4 14.3C25.3 473.9 75.6 512 133 512L443 512c57.3 0 107.7-38.1 123.2-93.3l4-14.3c2.9-10.2-4.8-20.3-15.4-20.3L21.1 384z" />
    </Icon>
);

export default Sailboat;