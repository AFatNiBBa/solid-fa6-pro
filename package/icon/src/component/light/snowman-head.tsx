
import { Icon } from "../../index";

/**
 * A component that renders the `snowman-head` icon from the `light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/snowman-head?s=light snowman-head}
 * @preview ![snowman-head](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/light/snowman-head.svg)
 */
const SnowmanHead: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M128 32l192 0c17.7 0 32 14.3 32 32l0 96 32 0 0-96c0-35.3-28.7-64-64-64L128 0C92.7 0 64 28.7 64 64l0 96 32 0 0-96c0-17.7 14.3-32 32-32zM352 224l.7 0c29.3 31.4 47.3 73.6 47.3 120c0 52-22.5 98.8-58.5 131c-3 2.7-8.3 5-15.8 5l-203.5 0c-7.5 0-12.7-2.2-15.8-5C70.5 442.8 48 396 48 344c0-46.4 17.9-88.6 47.3-120l.7 0 256 0zM16 192c-8.8 0-16 7.2-16 16s7.2 16 16 16l38.1 0C30.1 257.9 16 299.3 16 344c0 61.5 26.7 116.8 69.1 154.8c10.1 9.1 23.6 13.2 37.1 13.2l203.5 0c13.6 0 27-4.1 37.1-13.2C405.3 460.8 432 405.5 432 344c0-44.7-14.1-86.1-38.1-120l38.1 0c8.8 0 16-7.2 16-16s-7.2-16-16-16l-48 0-32 0L96 192l-32 0-48 0zM144 328a24 24 0 1 0 0-48 24 24 0 1 0 0 48zm184-24a24 24 0 1 0 -48 0 24 24 0 1 0 48 0zM224 320c-26.5 0-48 21.5-48 48l0 1c0 6.9 1.4 13.6 4.2 19.9l29.2 65.6c2.6 5.8 8.3 9.5 14.6 9.5s12.1-3.7 14.6-9.5l29.2-65.6c2.8-6.3 4.2-13 4.2-19.9l0-1c0-26.5-21.5-48-48-48zm-16 48c0-8.8 7.2-16 16-16s16 7.2 16 16l0 1c0 2.4-.5 4.7-1.5 6.9L224 408.6l-14.5-32.7c-1-2.2-1.5-4.5-1.5-6.9l0-1z" />
    </Icon>
);

export default SnowmanHead;