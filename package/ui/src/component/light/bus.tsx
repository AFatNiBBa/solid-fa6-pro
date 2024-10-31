
import { Icon } from "../../index";

/**
 * A component that renders the `bus` icon from the `light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/bus?s=light bus}
 * @preview ![bus](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/light/bus.svg)
 */
const Bus: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path d="M288 32C170.1 32 113.2 70.2 97.2 90c-.4 .5-1.2 1.9-1.2 5.1L96 128l384 0 0-32.8c0-3.1-.8-4.9-1.3-5.6C463.9 70.1 414.8 32 288 32zM96 256l176 0 0-96L96 160l0 96zm208 0l176 0 0-96-176 0 0 96zM96 384c0 17.7 14.3 32 32 32l239.2 0 80.8 0c17.7 0 32-14.3 32-32l0-96L96 288l0 96zM72.3 69.9C96.5 40.1 164.2 0 288 0C420.6 0 481.2 40 504.2 70.2c6 7.9 7.8 17.2 7.8 25L512 384c0 23.7-12.9 44.4-32 55.4l0 56.6c0 8.8-7.2 16-16 16s-16-7.2-16-16l0-48-80.8 0L128 448l0 48c0 8.8-7.2 16-16 16s-16-7.2-16-16l0-56.6C76.9 428.4 64 407.7 64 384L64 95.2c0-7.7 1.8-17.2 8.3-25.3zM136 352a24 24 0 1 1 48 0 24 24 0 1 1 -48 0zm280-24a24 24 0 1 1 0 48 24 24 0 1 1 0-48zM240 64l96 0c8.8 0 16 7.2 16 16s-7.2 16-16 16l-96 0c-8.8 0-16-7.2-16-16s7.2-16 16-16zM32 144l0 96c0 8.8-7.2 16-16 16s-16-7.2-16-16l0-96c0-8.8 7.2-16 16-16s16 7.2 16 16zm544 0l0 96c0 8.8-7.2 16-16 16s-16-7.2-16-16l0-96c0-8.8 7.2-16 16-16s16 7.2 16 16z" />
    </Icon>
);

export default Bus;