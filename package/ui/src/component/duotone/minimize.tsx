
import { Icon, generic } from "../../index";

/**
 * A component that renders the `minimize` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/minimize?s=duotone minimize}
 * @preview ![minimize](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/duotone/minimize.svg)
 */
const Minimize: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M0 456c0 5.1 2 10 5.7 13.7l36.7 36.7C46 510 50.9 512 56 512s10-2 13.7-5.7L143 433l40 40c6.9 6.9 17.2 8.9 26.2 5.2s14.8-12.5 14.8-22.2l0-144c0-13.3-10.7-24-24-24L56 288c-9.7 0-18.5 5.8-22.2 14.8s-1.7 19.3 5.2 26.2l40 40L5.7 442.3C2 446 0 450.9 0 456zM288 56l0 144c0 13.3 10.7 24 24 24l144 0c9.7 0 18.5-5.8 22.2-14.8s1.7-19.3-5.2-26.2l-40-40 73.4-73.4C510 66 512 61.1 512 56s-2-10-5.7-13.7L469.7 5.7C466 2 461.1 0 456 0s-10 2-13.7 5.7L369 79 329 39c-6.9-6.9-17.2-8.9-26.2-5.2S288 46.3 288 56z" />
        <path d="M56 224l144 0c13.3 0 24-10.7 24-24l0-144c0-9.7-5.8-18.5-14.8-22.2s-19.3-1.7-26.2 5.2L143 79 69.7 5.7C66 2 61.1 0 56 0S46 2 42.3 5.7L5.7 42.3C2 46 0 50.9 0 56s2 10 5.7 13.7L79 143 39 183c-6.9 6.9-8.9 17.2-5.2 26.2s12.5 14.8 22.2 14.8zm400 64l-144 0c-13.3 0-24 10.7-24 24l0 144c0 9.7 5.8 18.5 14.8 22.2s19.3 1.7 26.2-5.2l40-40 73.4 73.4c3.6 3.6 8.5 5.7 13.7 5.7s10-2 13.7-5.7l36.7-36.7c3.6-3.6 5.7-8.5 5.7-13.7s-2-10-5.7-13.7L433 369l40-40c6.9-6.9 8.9-17.2 5.2-26.2s-12.5-14.8-22.2-14.8z" />
    </Icon>
);

export default Minimize;