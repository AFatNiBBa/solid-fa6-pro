
import { Icon, generic } from "../../index";

/**
 * A component that renders the `vest` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/vest?s=sharp-duotone-solid vest}
 * @preview ![vest](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/vest.svg)
 */
const Vest: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path class={generic.secondary} d="M41.4 416c3.8-3.8 7.5-7.5 11.3-11.3c16-16 32-32 48-48L112 345.4 134.6 368c-3.8 3.8-7.5 7.5-11.3 11.3c-16 16-32 32-48 48c-3.8 3.8-7.5 7.5-11.3 11.3c-7.5-7.5-15.1-15.1-22.6-22.6zM128 0l7 0 13.3 0 6.9 11.1 .3 .4c.4 .6 1.2 1.5 2.3 2.8c2.3 2.6 6.1 6.3 11.5 10.1C179.9 31.8 197.4 40 224 40s44.1-8.2 54.7-15.6c5.4-3.8 9.2-7.5 11.5-10.1c1.1-1.3 1.9-2.3 2.3-2.8l.3-.4L299.6 0 313 0l7 0L296.8 69.7C279.3 79.8 255.3 88 224 88s-55.3-8.3-72.8-18.3C143.5 46.5 135.7 23.2 128 0zM313.4 368L336 345.4l11.3 11.3 48 48L406.6 416 384 438.6c-3.8-3.8-7.5-7.5-11.3-11.3c-16-16-32-32-48-48c-3.8-3.8-7.5-7.5-11.3-11.3z" />
        <path d="M128 0L64 0l0 160L0 256 0 512l192 0 0-224 0-5.2 1.6-4.9 13.5-40.5L128 0zm96 288l0 224 224 0 0-256-64-96L384 0 320 0 224 288zm112 57.4l11.3 11.3 48 48L406.6 416 384 438.6l-11.3-11.3-48-48L313.4 368 336 345.4zM100.7 356.7L112 345.4 134.6 368l-11.3 11.3-48 48L64 438.6 41.4 416l11.3-11.3 48-48z" />
    </Icon>
);

export default Vest;