
import { Icon } from "../../index";

/**
 * A component that renders the `chair` icon from the `light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/chair?s=light chair}
 * @preview ![chair](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/light/chair.svg)
 */
const Chair: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M192 32l0 192-32 0 0-186.5C122.7 50.6 96 86.2 96 128l0 96-32 0 0-96C64 57.3 121.3 0 192 0l64 0c70.7 0 128 57.3 128 128l0 96-32 0 0-96c0-41.8-26.7-77.4-64-90.5L288 224l-32 0 0-192-64 0zM64 288L32 352l384 0-32-64L64 288zM35.4 273.7C40.8 262.8 51.9 256 64 256l320 0c12.1 0 23.2 6.8 28.6 17.7l32 64c5 9.9 4.4 21.7-1.4 31.1s-16.1 15.2-27.2 15.2l0 112c0 8.8-7.2 16-16 16s-16-7.2-16-16l0-112L64 384l0 112c0 8.8-7.2 16-16 16s-16-7.2-16-16l0-112c-11.1 0-21.4-5.7-27.2-15.2s-6.4-21.2-1.4-31.1l32-64z" />
    </Icon>
);

export default Chair;