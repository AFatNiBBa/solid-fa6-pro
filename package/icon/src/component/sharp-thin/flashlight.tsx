
import { Icon } from "../../index";

/**
 * A component that renders the `flashlight` icon from the `sharp-thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/flashlight?s=sharp-thin flashlight}
 * @preview ![flashlight](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-thin/flashlight.svg)
 */
const Flashlight: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path d="M388.8 336l4 2.7 31.5 21c31.2 20.8 66.7 33.9 103.6 38.5l0-284.4c-36.9 4.6-72.4 17.7-103.6 38.5l-31.5 21-4 2.7-4.8 0L16 176l0 160 368 0 4.8 0zm168.7 64l66.5 0 0-288-66.5 0c-4.5 0-9 .1-13.5 .4l0 287.2c4.5 .3 9 .4 13.5 .4zM16 352L0 352l0-16L0 176l0-16 16 0 368 0 31.5-21c42.1-28 91.5-43 142-43L624 96l16 0 0 16 0 288 0 16-16 0-66.5 0c-50.5 0-100-15-142-43L384 352 16 352zM240 240l0 32 64 0 0-32-64 0zm-16-16l16 0 64 0 16 0 0 16 0 32 0 16-16 0-64 0-16 0 0-16 0-32 0-16z" />
    </Icon>
);

export default Flashlight;