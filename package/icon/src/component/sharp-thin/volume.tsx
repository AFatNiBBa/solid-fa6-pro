
import { Icon } from "../../index";

/**
 * A component that renders the `volume` icon from the `sharp-thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/volume?s=sharp-thin volume}
 * @preview ![volume](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-thin/volume.svg)
 */
const Volume: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path d="M170.6 340l-4.5-4-6.1 0L48 336l0-160 112 0 6.1 0 4.5-4L310.1 48 336 48l0 416-25.9 0L170.6 340zM32 352l16 0 112 0L304 480l32 0 16 0 0-16 0-416 0-16-16 0-32 0L160 160 48 160l-16 0 0 16 0 160 0 16zm409.6-19.2C464.9 315.3 480 287.4 480 256s-15.1-59.3-38.4-76.8L432 192c19.4 14.6 32 37.8 32 64s-12.6 49.4-32 64l9.6 12.8zm57.6 76.8c46.6-35 76.8-90.8 76.8-153.6s-30.2-118.6-76.8-153.6l-9.6 12.8C532.4 147.3 560 198.4 560 256s-27.6 108.7-70.4 140.8l9.6 12.8z" />
    </Icon>
);

export default Volume;