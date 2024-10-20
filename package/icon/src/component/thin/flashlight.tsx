
import { Icon } from "../../index";

/**
 * A component that renders the `flashlight` icon from the `thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/flashlight?s=thin flashlight}
 * @preview ![flashlight](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/thin/flashlight.svg)
 */
const Flashlight: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path d="M388.8 336l-4.8 0L48 336c-17.7 0-32-14.3-32-32l0-96c0-17.7 14.3-32 32-32l336 0 4.8 0 4-2.7 31.5-21c31.2-20.8 66.7-33.9 103.6-38.5l0 284.4c-36.9-4.6-72.4-17.7-103.6-38.5l-31.5-21-4-2.7zm168.7 64c-4.5 0-9-.1-13.5-.4l0-287.2c4.5-.3 9-.4 13.5-.4l42.5 0c13.3 0 24 10.7 24 24l0 240c0 13.3-10.7 24-24 24l-42.5 0zM0 208l0 96c0 26.5 21.5 48 48 48l336 0 31.5 21c42.1 28 91.5 43 142 43l42.5 0c22.1 0 40-17.9 40-40l0-240c0-22.1-17.9-40-40-40l-42.5 0c-50.5 0-100 15-142 43L384 160 48 160c-26.5 0-48 21.5-48 48zm256 32l32 0c8.8 0 16 7.2 16 16s-7.2 16-16 16l-32 0c-8.8 0-16-7.2-16-16s7.2-16 16-16zm-32 16c0 17.7 14.3 32 32 32l32 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-32 0c-17.7 0-32 14.3-32 32z" />
    </Icon>
);

export default Flashlight;