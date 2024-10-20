
import { Icon, generic } from "../../index";

/**
 * A component that renders the `bullseye-pointer` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/bullseye-pointer?s=duotone bullseye-pointer}
 * @preview ![bullseye-pointer](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/duotone/bullseye-pointer.svg)
 */
const BullseyePointer: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M0 256c0 10.2 .6 20.2 1.8 30.1l62.6-18.4c-.2-3.9-.4-7.8-.4-11.7C64 150 150 64 256 64s192 86 192 192s-86 192-192 192c-3.9 0-7.8-.1-11.7-.4l-18.4 62.6c9.9 1.2 19.9 1.8 30.1 1.8c141.4 0 256-114.6 256-256S397.4 0 256 0S0 114.6 0 256zm112-2.3L179.1 234c9.6-33.5 40.4-58 76.9-58c44.2 0 80 35.8 80 80c0 36.5-24.5 67.4-58 76.9l-19.7 67C336.8 398.8 400 334.8 400 256c0-79.5-64.5-144-144-144c-78.8 0-142.8 63.2-144 141.7z" />
        <path d="M243.9 248.3L39 308.5c-13.9 4.1-15.6 23.2-2.6 29.7l57.3 28.7c1.3 .7 2.6 1.5 3.7 2.5l-88 88c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l88-88c1 1.1 1.9 2.3 2.5 3.7l28.7 57.3c6.5 13 25.6 11.3 29.7-2.6l60.2-204.8c3.6-12.1-7.7-23.4-19.9-19.9z" />
    </Icon>
);

export default BullseyePointer;