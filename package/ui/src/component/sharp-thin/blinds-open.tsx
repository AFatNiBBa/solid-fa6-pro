
import { Icon } from "../../index";

/**
 * A component that renders the `blinds-open` icon from the `sharp-thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/blinds-open?s=sharp-thin blinds-open}
 * @preview ![blinds-open](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-thin/blinds-open.svg)
 */
const BlindsOpen: typeof Icon = x => (
    <Icon {...x}>
        <path d="M496 16l0 64L152 80l-16 0L16 80l0-64 480 0zM16 96l120 0 0 80 0 16 0 64.7c-22.7 3.8-40 23.6-40 47.3c0 12.3 4.6 23.5 12.2 32c.6 .7 1.2 1.3 1.8 1.9c8.7 8.7 20.7 14.1 33.9 14.1c14.2 0 27-6.2 35.8-16c7.6-8.5 12.2-19.7 12.2-32c0-23.8-17.3-43.5-40-47.3l0-64.7 0-16 0-80 344 0 16 0 0-16 0-64 0-16L496 0 16 0 0 0 0 16 0 80 0 96l16 0zM144 272a32 32 0 1 1 0 64 32 32 0 1 1 0-64zM8 176l-8 0 0 16 8 0 96 0 0-16L8 176zM8 336l-8 0 0 16 8 0 72 0c-3.7-4.9-6.8-10.3-9.3-16L8 336zm496 16l8 0 0-16-8 0-286.7 0c-2.5 5.7-5.6 11.1-9.3 16l296 0zm0-160l8 0 0-16-8 0-320 0 0 16 320 0zM0 496l0 16 8 0 496 0 8 0 0-16-8 0L8 496l-8 0z" />
    </Icon>
);

export default BlindsOpen;