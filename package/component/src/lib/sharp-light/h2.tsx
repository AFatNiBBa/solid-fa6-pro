
import { Icon } from "../../index";

/**
 * A component that renders the `h2` icon from the `sharp-light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/h2?s=sharp-light h2}
 * @preview ![h2](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-light/h2.svg)
 */
const H2: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path d="M32 80l0-16L0 64 0 80 0 256 0 432l0 16 32 0 0-16 0-160 256 0 0 160 0 16 32 0 0-16 0-176 0-176 0-16-32 0 0 16 0 160L32 240 32 80zM501.2 96l5.8 0c47 0 85 38.1 85 85c0 23.1-9.4 45.2-26.1 61.2l-185 178.2-4.9 4.7 0 22.8 16 0 232 0 16 0 0-32-16 0-192.3 0L588.1 265.3c19-18.3 31.2-42.4 34.8-68.3l1.1 0 0-16c0-64.6-52.4-117-117-117l-5.8 0c-33 0-64.8 11.8-89.9 33.2l-21.7 18.6-12.1 10.4 20.8 24.3 12.1-10.4 21.7-18.6c19.2-16.5 43.7-25.5 69-25.5z" />
    </Icon>
);

export default H2;