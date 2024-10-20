
import { Icon } from "../../index";

/**
 * A component that renders the `panorama` icon from the `sharp-light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/panorama?s=sharp-light panorama}
 * @preview ![panorama](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-light/panorama.svg)
 */
const Panorama: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path d="M0 64L0 32l32 0 21.5 0C138.3 62.3 230.5 72 320 72s181.7-9.7 266.5-40L608 32l32 0 0 32 0 384 0 32-32 0-21.5 0c-84.8-30.3-176.9-40-266.5-40c-79.2 0-160.4 7.6-236.7 30.3l-.1 .1-.1-.1c-9.9 3-19.8 6.2-29.6 9.7L32 480 0 480l0-32L0 64zM114.2 429.1c27.3-6.3 55-10.9 82.7-14.2L260 330.7l-36-48L114.2 429.1zm125.7-18.3c26.9-1.9 53.7-2.8 80.1-2.8c74.1 0 151.3 6.5 225.4 25.9L384 218.7 292.8 340.3l-52.9 70.5zM596 448l12 0 0-384-16.1 0C504 94.5 409.8 104 320 104s-184-9.5-271.9-40L32 64l0 384 16.1 0c5.3-1.8 10.6-3.6 15.9-5.2l3.3-4.4 144-192L224 229.3l12.8 17.1L280 304l91.2-121.6L384 165.3l12.8 17.1 192 256L596 448zM112 184a24 24 0 1 1 48 0 24 24 0 1 1 -48 0z" />
    </Icon>
);

export default Panorama;