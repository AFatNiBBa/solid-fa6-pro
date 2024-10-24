
import { Icon } from "../../index";

/**
 * A component that renders the `snowman-head` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/snowman-head?s=sharp-solid snowman-head}
 * @preview ![snowman-head](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-solid/snowman-head.svg)
 */
const SnowmanHead: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M64 0L384 0l0 160-160 0L64 160 64 0zM330.2 192l85.8 0 32 0 0 64-32 0-25.7 0c16.3 28.2 25.7 61 25.7 96c0 66.8-34.1 125.6-85.8 160l-212.3 0C66.1 477.6 32 418.8 32 352c0-35 9.3-67.8 25.7-96L32 256 0 256l0-64 32 0 85.8 0 212.3 0zM152 336a24 24 0 1 0 0-48 24 24 0 1 0 0 48zm168-24a24 24 0 1 0 -48 0 24 24 0 1 0 48 0zM224 448l27.8-48.7c2.7-4.8 4.2-10.2 4.2-15.7c0-17.5-14.2-31.6-31.6-31.6l-.8 0c-17.5 0-31.6 14.2-31.6 31.6c0 5.5 1.4 10.9 4.2 15.7L224 448z" />
    </Icon>
);

export default SnowmanHead;