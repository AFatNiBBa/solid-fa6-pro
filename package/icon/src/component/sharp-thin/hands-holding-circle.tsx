
import { Icon } from "../../index";

/**
 * A component that renders the `hands-holding-circle` icon from the `sharp-thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/hands-holding-circle?s=sharp-thin hands-holding-circle}
 * @preview ![hands-holding-circle](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-thin/hands-holding-circle.svg)
 */
const HandsHoldingCircle: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path d="M208 128a112 112 0 1 1 224 0 112 112 0 1 1 -224 0zm240 0a128 128 0 1 0 -256 0 128 128 0 1 0 256 0zM96 72c0-4.4-3.6-8-8-8L8 64c-4.4 0-8 3.6-8 8L0 384c0 2.1 .8 4.2 2.3 5.7l120 120 11.3-11.3L16 380.7 16 80l64 0 0 208c0 2.1 .8 4.2 2.3 5.7l10.8 10.8 5.2 5.2 80 80 8 8 5.7 5.7L203.3 392l-5.7-5.7-8-8-74.8-74.8 37.6-43.8L288 395.3 288 504l0 8 16 0 0-8 0-112 0-3.3-2.3-2.3-144-144-6.1-6.1-5.6 6.6-42.4 49.4L96 284.7 96 72zm456-8c-4.4 0-8 3.6-8 8l0 212.7-7.5 7.5-42.4-49.4-5.6-6.6-6.1 6.1-144 144-2.3 2.3 0 3.3 0 112 0 8 16 0 0-8 0-108.7L487.5 259.8l37.6 43.8-74.8 74.8-8 8-5.7 5.7L448 403.3l5.7-5.7 8-8 80-80 5.2-5.2 10.8-10.8c1.5-1.5 2.3-3.5 2.3-5.7l0-208 64 0 0 300.7L506.3 498.3l11.3 11.3 120-120c1.5-1.5 2.3-3.5 2.3-5.7l0-312c0-4.4-3.6-8-8-8l-80 0z" />
    </Icon>
);

export default HandsHoldingCircle;