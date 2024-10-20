
import { Icon, generic } from "../../index";

/**
 * A component that renders the `bullseye-pointer` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/bullseye-pointer?s=sharp-duotone-solid bullseye-pointer}
 * @preview ![bullseye-pointer](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/bullseye-pointer.svg)
 */
const BullseyePointer: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M0 256c0 10.2 .6 20.2 1.8 30.1l62.6-18.4c-.2-3.9-.4-7.8-.4-11.7C64 150 150 64 256 64s192 86 192 192s-86 192-192 192c-3.9 0-7.8-.1-11.7-.4l-18.4 62.6c9.9 1.2 19.9 1.8 30.1 1.8c141.4 0 256-114.6 256-256S397.4 0 256 0S0 114.6 0 256zm112-2.3L179.1 234c9.6-33.5 40.4-58 76.9-58c44.2 0 80 35.8 80 80c0 36.5-24.5 67.4-58 76.9l-19.7 67C336.8 398.8 400 334.8 400 256c0-79.5-64.5-144-144-144c-78.8 0-142.8 63.2-144 141.7z" />
        <path d="M272 240L0 320l96 48 1.4 1.4-96 96 45.3 45.3 96-96L144 416l48 96 80-272z" />
    </Icon>
);

export default BullseyePointer;