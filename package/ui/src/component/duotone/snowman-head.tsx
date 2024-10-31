
import { Icon, generic } from "../../index";

/**
 * A component that renders the `snowman-head` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/snowman-head?s=duotone snowman-head}
 * @preview ![snowman-head](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/duotone/snowman-head.svg)
 */
const SnowmanHead: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path class={generic.secondary} d="M32 352c0 59.8 27.4 113.3 70.3 148.5c9.7 8 22.3 11.5 34.9 11.5l173.7 0c12.6 0 25.1-3.5 34.9-11.5C388.6 465.3 416 411.8 416 352c0-35-9.4-67.8-25.7-96L57.7 256C41.3 284.2 32 317 32 352zm144-40a24 24 0 1 1 -48 0 24 24 0 1 1 48 0zm16 72.2c0-17.7 14.3-32.2 32-32.2s32 14.5 32 32.2c0 5.1-1.2 10.2-3.5 14.7l-23.8 46.3c-.9 1.7-2.7 2.8-4.7 2.8s-3.8-1.1-4.7-2.8l-23.8-46.3c-2.3-4.5-3.5-9.6-3.5-14.7zM320 312a24 24 0 1 1 -48 0 24 24 0 1 1 48 0z" />
        <path d="M64 64C64 28.7 92.7 0 128 0L320 0c35.3 0 64 28.7 64 64l0 96L64 160l0-96zm88 224a24 24 0 1 1 0 48 24 24 0 1 1 0-48zm144 0a24 24 0 1 1 0 48 24 24 0 1 1 0-48zM32 192l384 0c17.7 0 32 14.3 32 32s-14.3 32-32 32L32 256c-17.7 0-32-14.3-32-32s14.3-32 32-32z" />
    </Icon>
);

export default SnowmanHead;