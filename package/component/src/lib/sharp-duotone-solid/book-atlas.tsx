
import { Icon, generic } from "../../index";

/**
 * A component that renders the `book-atlas` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/book-atlas?s=sharp-duotone-solid book-atlas}
 * @preview ![book-atlas](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/book-atlas.svg)
 */
const BookAtlas: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path class={generic.secondary} d="M64 416c0-17.7 14.3-32 32-32l160 0 96 0 64 0 0 64-64 0-96 0L96 448c-17.7 0-32-14.3-32-32z" />
        <path d="M96 0C43 0 0 43 0 96L0 416c0 53 43 96 96 96l288 0 32 0 32 0 0-64-32 0-64 0-96 0L96 448c-17.7 0-32-14.3-32-32s14.3-32 32-32l160 0 96 0 64 0 32 0L448 0 416 0 384 0 96 0zM247.4 283.8c3.8-3.7 8-10 11.8-18.9c6.2-14.5 10.8-34.3 12.2-56.9l-63 0c1.5 22.6 6 42.4 12.2 56.9c3.8 8.9 8 15.2 11.8 18.9c3.7 3.7 6.2 4.2 7.4 4.2s3.7-.5 7.4-4.2zm42.7-9.9c23.2-14.2 39.9-38 44.5-65.9l-31.1 0c-1.4 24.7-6.1 47.5-13.4 65.9zm0-163.8c7.3 18.3 12 41.1 13.4 65.9l31.1 0c-4.7-27.9-21.4-51.7-44.5-65.9zM112 192a128 128 0 1 1 256 0 128 128 0 1 1 -256 0zm33.3 16c4.7 27.9 21.4 51.7 44.5 65.9c-7.3-18.3-12-41.1-13.4-65.9l-31.1 0zm31.1-32c1.4-24.7 6.1-47.5 13.4-65.9c-23.2 14.2-39.9 38-44.5 65.9l31.1 0zm56.1-75.8c-3.8 3.7-8 10-11.8 18.9c-6.2 14.5-10.8 34.3-12.2 56.9l63 0c-1.5-22.6-6-42.4-12.2-56.9c-3.8-8.9-8-15.2-11.8-18.9c-3.7-3.7-6.2-4.2-7.4-4.2s-3.7 .5-7.4 4.2z" />
    </Icon>
);

export default BookAtlas;