
import { Icon } from "../../index";

/**
 * A component that renders the `warehouse` icon from the `light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/warehouse?s=light warehouse}
 * @preview ![warehouse](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/light/warehouse.svg)
 */
const Warehouse: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path d="M326.2 36c-4-1.7-8.4-1.7-12.4 0L51.6 146.4C39.7 151.4 32 163 32 175.9L32 496c0 8.8-7.2 16-16 16s-16-7.2-16-16L0 175.9c0-25.8 15.4-49 39.2-59L301.4 6.5c11.9-5 25.3-5 37.3 0L600.8 116.9c23.7 10 39.2 33.2 39.2 59L640 496c0 8.8-7.2 16-16 16s-16-7.2-16-16l0-320.1c0-12.9-7.7-24.5-19.6-29.5L326.2 36zM96 224c0-17.7 14.3-32 32-32l384 0c17.7 0 32 14.3 32 32l0 272c0 8.8-7.2 16-16 16c-.1 0-.2 0-.2 0l-415.5 0c-.1 0-.2 0-.2 0c-8.8 0-16-7.2-16-16l0-272zm32 256l384 0 0-64-384 0 0 64zM512 320l-384 0 0 64 384 0 0-64zM128 288l384 0 0-64-384 0 0 64z" />
    </Icon>
);

export default Warehouse;