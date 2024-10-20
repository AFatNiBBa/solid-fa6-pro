
import { Icon, generic } from "../../index";

/**
 * A component that renders the `square-n` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/square-n?s=duotone square-n}
 * @preview ![square-n](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/duotone/square-n.svg)
 */
const SquareN: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path class={generic.secondary} d="M0 96L0 416c0 35.3 28.7 64 64 64l320 0c35.3 0 64-28.7 64-64l0-320c0-35.3-28.7-64-64-64L64 32C28.7 32 0 60.7 0 96zm112 56c0-10.1 6.3-19.1 15.7-22.5s20.1-.7 26.6 7c44.6 52.7 89.1 105.3 133.7 158L288 152c0-13.3 10.7-24 24-24s24 10.7 24 24l0 208c0 10.1-6.3 19.1-15.7 22.5c-2.7 1-5.5 1.5-8.3 1.5c-6.9 0-13.7-3-18.3-8.5c-44.6-52.7-89.1-105.3-133.7-158L160 360c0 13.3-10.7 24-24 24s-24-10.7-24-24l0-208z" />
        <path d="M127.7 129.5c9.5-3.5 20.1-.7 26.6 7L288 294.5 288 152c0-13.3 10.7-24 24-24s24 10.7 24 24l0 208c0 10.1-6.3 19.1-15.7 22.5s-20.1 .7-26.6-7L160 217.5 160 360c0 13.3-10.7 24-24 24s-24-10.7-24-24l0-208c0-10.1 6.3-19.1 15.7-22.5z" />
    </Icon>
);

export default SquareN;