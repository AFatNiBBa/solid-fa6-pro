
import { Icon } from "../../index";

/**
 * A component that renders the `starfighter` icon from the `solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/starfighter?s=solid starfighter}
 * @preview ![starfighter](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/solid/starfighter.svg)
 */
const Starfighter: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path d="M353.8 14L384 256l0 208c0 8.8-7.2 16-16 16l-96 0c-8.8 0-16-7.2-16-16l0-208L286.2 14c1-8 7.8-14 15.9-14l35.8 0c8.1 0 14.9 6 15.9 14zM288 256l0 48c0 8.8 7.2 16 16 16l32 0c8.8 0 16-7.2 16-16l0-48c0-17.7-14.3-32-32-32s-32 14.3-32 32zM48 72c13.3 0 24 10.7 24 24l0 24c13.3 0 24 10.7 24 24s-10.7 24-24 24l0 184 56 0 0-32c0-17.7 14.3-32 32-32l32 0c17.7 0 32 14.3 32 32l0 32 0 64 0 32 0 32c0 17.7-14.3 32-32 32s-32-14.3-32-32l0-9.6L72 444l0 4c0 13.3-10.7 24-24 24s-24-10.7-24-24l0-280c-13.3 0-24-10.7-24-24s10.7-24 24-24l0-24c0-13.3 10.7-24 24-24zm544 0c13.3 0 24 10.7 24 24l0 24c13.3 0 24 10.7 24 24s-10.7 24-24 24l0 280c0 13.3-10.7 24-24 24s-24-10.7-24-24l0-4-88 26.4 0 9.6c0 17.7-14.3 32-32 32s-32-14.3-32-32l0-32 0-32 0-64 0-32c0-17.7 14.3-32 32-32l32 0c17.7 0 32 14.3 32 32l0 32 56 0 0-184c-13.3 0-24-10.7-24-24s10.7-24 24-24l0-24c0-13.3 10.7-24 24-24z" />
    </Icon>
);

export default Starfighter;