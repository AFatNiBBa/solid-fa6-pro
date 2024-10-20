
import { Icon } from "../../index";

/**
 * A component that renders the `award-simple` icon from the `sharp-light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/award-simple?s=sharp-light award-simple}
 * @preview ![award-simple](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-light/award-simple.svg)
 */
const AwardSimple: typeof Icon = x => (
    <Icon viewBox="0 0 384 512" {...x}>
        <path d="M236.2 26.9L192 0 147.8 26.9 96 25.7 71.2 71.2 25.7 96l1.2 51.8L0 192l26.9 44.2L25.7 288l45.4 24.8L96 358.3l51.8-1.2L192 384l44.2-26.9 51.8 1.2 24.8-45.4L358.3 288l-1.2-51.8L384 192l-26.9-44.2L358.3 96 312.8 71.2 288 25.7l-51.8 1.2zm33 31.2l15.5 28.3 4.5 8.2 8.2 4.5 28.3 15.5-.8 32.3-.2 9.4 4.9 8L346.5 192l-16.8 27.6-4.9 8 .2 9.4 .8 32.3-28.3 15.5-8.2 4.5-4.5 8.2-15.5 28.3-32.3-.8-9.4-.2-8 4.9L192 346.5l-27.6-16.8-8-4.9-9.4 .2-32.3 .8L99.3 297.5l-4.5-8.2-8.2-4.5L58.2 269.3l.8-32.3 .2-9.4-4.9-8L37.5 192l16.8-27.6 4.9-8-.2-9.4-.8-32.3L86.5 99.3l8.2-4.5 4.5-8.2 15.5-28.3 32.3 .8 9.4 .2 8-4.9L192 37.5l27.6 16.8 8 4.9 9.4-.2 32.3-.8zM192 248a56 56 0 1 1 0-112 56 56 0 1 1 0 112zm-88-56a88 88 0 1 0 176 0 88 88 0 1 0 -176 0zM92.1 390.4L72.6 474.6 64 512l36-13.5L192 464l92 34.5L320 512l-8.6-37.4-19.4-84.2-4.7-.1-28.3-.7 16.5 71.5L203.2 434 192 429.8 180.8 434l-72.2 27.1 16.5-71.5-28.3 .7-4.7 .1z" />
    </Icon>
);

export default AwardSimple;