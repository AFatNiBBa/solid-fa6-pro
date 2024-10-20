
import { Icon } from "../../index";

/**
 * A component that renders the `temperature-sun` icon from the `sharp-regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/temperature-sun?s=sharp-regular temperature-sun}
 * @preview ![temperature-sun](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-regular/temperature-sun.svg)
 */
const TemperatureSun: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path d="M104 104L0 121.3 60.7 208 0 294.7 104 312l17.3 104L208 355.3 294.7 416l.8-5c-4.9-16.1-7.5-33.3-7.5-51c0-37.7 11.8-72.6 32-101.2l0-153.4-8-1.3L294.7 0 208 60.7 121.3 0 104 104zM208 272a64 64 0 1 0 0-128 64 64 0 1 0 0 128zm0-160a96 96 0 1 1 0 192 96 96 0 1 1 0-192zM389.3 307.7L400 294.5l0-17L400 48l128 0 0 229.5 0 17 10.7 13.2C552 324.2 560 345.1 560 368c0 53-43 96-96 96s-96-43-96-96c0-22.9 8-43.8 21.3-60.3zM576 0L528 0 400 0 352 0l0 48 0 229.5c-20 24.7-32 56.2-32 90.5c0 79.5 64.5 144 144 144s144-64.5 144-144c0-34.3-12-65.8-32-90.5L576 48l0-48zM464 416c26.5 0 48-21.5 48-48c0-20.9-13.4-38.7-32-45.3L480 112l0-16-32 0 0 16 0 210.8c-18.6 6.6-32 24.4-32 45.3c0 26.5 21.5 48 48 48z" />
    </Icon>
);

export default TemperatureSun;