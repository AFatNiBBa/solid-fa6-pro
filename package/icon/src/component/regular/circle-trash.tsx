
import { Icon } from "../../index";

/**
 * A component that renders the `circle-trash` icon from the `regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/circle-trash?s=regular circle-trash}
 * @preview ![circle-trash](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/regular/circle-trash.svg)
 */
const CircleTrash: typeof Icon = x => (
    <Icon {...x}>
        <path d="M464 256A208 208 0 1 0 48 256a208 208 0 1 0 416 0zM0 256a256 256 0 1 1 512 0A256 256 0 1 1 0 256zM160 128l41.4 0 11.3-11.3c3-3 7.1-4.7 11.3-4.7l64 0c4.2 0 8.3 1.7 11.3 4.7L310.6 128l41.4 0c8.8 0 16 7.2 16 16s-7.2 16-16 16l-192 0c-8.8 0-16-7.2-16-16s7.2-16 16-16zm0 64l192 0L338.4 354.7c-1.4 16.6-15.2 29.3-31.9 29.3l-101.1 0c-16.6 0-30.5-12.8-31.9-29.3L160 192z" />
    </Icon>
);

export default CircleTrash;