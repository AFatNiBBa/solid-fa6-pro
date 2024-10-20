
import { Icon } from "../../index";

/**
 * A component that renders the `icicles` icon from the `sharp-thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/icicles?s=sharp-thin icicles}
 * @preview ![icicles](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-thin/icicles.svg)
 */
const Icicles: typeof Icon = x => (
    <Icon {...x}>
        <path d="M343.9 194.6l63.2 278.2L416 512l7.4-39.6L509 16l3-16L495.7 0 16.6 0 0 0 4.4 16 88 322.8 96 352l8.7-29 29.8-99.2L144 192l7 32.5 32.9 153.3L192 416l8.2-38.2L233 224.5l7-32.5 9.5 31.8L279 322l9 30 7.6-30.4 31.8-127.3L336 160l7.9 34.6zm-57.3 97.1L255.3 187.4l-17.9-59.7-13.1 60.9L192 339.6l-32.4-151-13.1-60.9-17.9 59.7L96.7 293.9 20.9 16l471.8 0L414.5 433.2 351.6 156.5 336.7 91.1l-16.3 65.1L286.6 291.6z" />
    </Icon>
);

export default Icicles;