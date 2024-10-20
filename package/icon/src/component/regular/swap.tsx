
import { Icon } from "../../index";

/**
 * A component that renders the `swap` icon from the `regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/swap?s=regular swap}
 * @preview ![swap](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/regular/swap.svg)
 */
const Swap: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path d="M240 119c0 22.6-18.3 41-41 41l-47 0 0 200c0 39.8 32.2 72 72 72s72-32.2 72-72l0-208c0-66.3 53.7-120 120-120s120 53.7 120 120l0 200 47 0c22.6 0 41 18.3 41 41c0 10.9-4.3 21.3-12 29l-83 83c-4.5 4.5-10.6 7-17 7s-12.5-2.5-17-7l-83-83c-7.7-7.7-12-18.1-12-29c0-22.6 18.3-41 41-41l47 0 0-200c0-39.8-32.2-72-72-72s-72 32.2-72 72l0 208c0 66.3-53.7 120-120 120s-120-53.7-120-120l0-200-47 0c-22.6 0-41-18.3-41-41c0-10.9 4.3-21.3 12-29L111 7c4.5-4.5 10.6-7 17-7s12.5 2.5 17 7l83 83c7.7 7.7 12 18.1 12 29zM73.9 112l108.1 0L128 57.9 73.9 112zm384 288L512 454.1 566.1 400l-108.1 0z" />
    </Icon>
);

export default Swap;