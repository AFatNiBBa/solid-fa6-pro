
import { Icon } from "../../index";

/**
 * A component that renders the `shish-kebab` icon from the `sharp-regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/shish-kebab?s=sharp-regular shish-kebab}
 * @preview ![shish-kebab](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-regular/shish-kebab.svg)
 */
const ShishKebab: typeof Icon = x => (
    <Icon {...x}>
        <path d="M368 96c0-26.5 21.5-48 48-48s48 21.5 48 48c0 9.9-3 19.1-8.1 26.7l39.9 26.7C506 134.1 512 115.7 512 96c0-53-43-96-96-96s-96 43-96 96c0 17.8 4.9 34.5 13.3 48.8L303 175l-45.1-45.1L224 96l-33.9 33.9-60.1 60.1L128 192 96 224l-1.9 1.9L33.9 286.1 0 320l33.9 33.9L79 399 2.2 475.8l33.9 33.9L113 433l45.1 45.1L192 512l33.9-33.9 60.1-60.1L288 416l32-32 1.9-1.9 60.1-60.1L416 288l-33.9-33.9L337 209l45.1-45.1 17-17-17-17C373.3 121.2 368 109.3 368 96zM288 348.1L163.9 224 224 163.9 348.1 288 288 348.1zm-96 96L67.9 320 128 259.9 252.1 384 192 444.1z" />
    </Icon>
);

export default ShishKebab;