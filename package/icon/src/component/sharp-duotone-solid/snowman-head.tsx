
import { Icon, generic } from "../../index";

/**
 * A component that renders the `snowman-head` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/snowman-head?s=sharp-duotone-solid snowman-head}
 * @preview ![snowman-head](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/snowman-head.svg)
 */
const SnowmanHead: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path class={generic.secondary} d="M32 352c0 66.8 34.1 125.6 85.8 160l212.3 0c51.7-34.4 85.8-93.2 85.8-160c0-35-9.4-67.8-25.7-96L57.7 256C41.3 284.2 32 317 32 352zm144-40a24 24 0 1 1 -48 0 24 24 0 1 1 48 0zm16 71.6c0-17.5 14.2-31.6 31.6-31.6l.8 0c17.5 0 31.6 14.2 31.6 31.6c0 5.5-1.4 10.9-4.2 15.7L224 448l-27.8-48.7c-2.7-4.8-4.2-10.2-4.2-15.7zM320 312a24 24 0 1 1 -48 0 24 24 0 1 1 48 0z" />
        <path d="M64 0L384 0l0 160L64 160 64 0zm88 288a24 24 0 1 1 0 48 24 24 0 1 1 0-48zm144 0a24 24 0 1 1 0 48 24 24 0 1 1 0-48zM32 192l384 0 32 0 0 64-32 0L32 256 0 256l0-64 32 0z" />
    </Icon>
);

export default SnowmanHead;