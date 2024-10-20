
import { Icon, generic } from "../../index";

/**
 * A component that renders the `circle-trash` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/circle-trash?s=duotone circle-trash}
 * @preview ![circle-trash](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/duotone/circle-trash.svg)
 */
const CircleTrash: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M0 256a256 256 0 1 0 512 0A256 256 0 1 0 0 256zM144 144c0-8.8 7.2-16 16-16l41.4 0 11.3-11.3c3-3 7.1-4.7 11.3-4.7l64 0c4.2 0 8.3 1.7 11.3 4.7L310.6 128l41.4 0c8.8 0 16 7.2 16 16s-7.2 16-16 16l-192 0c-8.8 0-16-7.2-16-16zm16 48l192 0L338.4 354.7c-1.4 16.6-15.2 29.3-31.9 29.3l-101.1 0c-16.6 0-30.5-12.8-31.9-29.3L160 192z" />
        <path d="M212.7 116.7L201.4 128 160 128c-8.8 0-16 7.2-16 16s7.2 16 16 16l192 0c8.8 0 16-7.2 16-16s-7.2-16-16-16l-41.4 0-11.3-11.3c-3-3-7.1-4.7-11.3-4.7l-64 0c-4.2 0-8.3 1.7-11.3 4.7zM160 192l13.6 162.7c1.4 16.6 15.2 29.3 31.9 29.3l101.1 0c16.6 0 30.5-12.8 31.9-29.3L352 192l-192 0z" />
    </Icon>
);

export default CircleTrash;