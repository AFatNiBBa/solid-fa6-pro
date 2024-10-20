
import { Icon } from "../../index";

/**
 * A component that renders the `bus-simple` icon from the `light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/bus-simple?s=light bus-simple}
 * @preview ![bus-simple](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/light/bus-simple.svg)
 */
const BusSimple: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M33.2 90C49.2 70.2 106.1 32 224 32c126.8 0 175.9 38.1 190.7 57.5c.6 .8 1.3 2.5 1.3 5.6l0 .8L32 96l0-.8c0-3.2 .8-4.6 1.2-5.1zM32 128l384 0 0 128L32 256l0-128zM416 288l0 96c0 17.7-14.3 32-32 32l-80.8 0L64 416c-17.7 0-32-14.3-32-32l0-96 384 0zM224 0C100.2 0 32.5 40.1 8.3 69.9C1.8 77.9 0 87.4 0 95.2L0 384c0 23.7 12.9 44.4 32 55.4L32 496c0 8.8 7.2 16 16 16s16-7.2 16-16l0-48 239.2 0 80.8 0 0 48c0 8.8 7.2 16 16 16s16-7.2 16-16l0-56.6c19.1-11.1 32-31.7 32-55.4l0-288.8c0-7.8-1.8-17-7.8-25C417.2 40 356.6 0 224 0zM96 376a24 24 0 1 0 0-48 24 24 0 1 0 0 48zm280-24a24 24 0 1 0 -48 0 24 24 0 1 0 48 0z" />
    </Icon>
);

export default BusSimple;