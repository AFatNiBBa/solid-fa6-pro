
import { Icon } from "../../index";

/**
 * A component that renders the `grill` icon from the `solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/grill?s=solid grill}
 * @preview ![grill](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/solid/grill.svg)
 */
const Grill: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M0 72C0 49.9 17.9 32 40 32l368 0c22.1 0 40 17.9 40 40l0 24c0 89.8-52.9 167.3-129.2 203l63.2 147.5c5.2 12.2-.4 26.3-12.6 31.5s-26.3-.4-31.5-12.6L316.7 416 160 416c0 35.3-28.7 64-64 64s-64-28.7-64-64s28.7-64 64-64c3.4 0 6.8 .3 10.1 .8L129.2 299C52.9 263.3 0 185.8 0 96L0 72zM151.8 368l144.3 0-22.9-53.4c-15.9 3.6-32.3 5.4-49.3 5.4s-33.4-1.9-49.3-5.4L151.8 368zM96 440a24 24 0 1 0 0-48 24 24 0 1 0 0 48z" />
    </Icon>
);

export default Grill;