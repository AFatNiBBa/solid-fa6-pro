
import { Icon } from "../../index";

/**
 * A component that renders the `interrobang` icon from the `light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/interrobang?s=light interrobang}
 * @preview ![interrobang](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/light/interrobang.svg)
 */
const Interrobang: typeof Icon = x => (
    <Icon viewBox="0 0 320 512" {...x}>
        <path d="M48 160c0-53 43-96 96-96l32 0c53 0 96 43 96 96c0 25.2-11.9 48.9-32 64l-60.8 45.6c-1.1 .8-2.2 1.7-3.2 2.5L176 160c0-8.8-7.2-16-16-16s-16 7.2-16 16l0 180 0 4 0 8c0 8.8 7.2 16 16 16s16-7.2 16-16l0-8 0-4c0-17.6 8.3-34.2 22.4-44.8l60.8-45.6C287.4 228.4 304 195.3 304 160c0-70.7-57.3-128-128-128l-32 0C73.3 32 16 89.3 16 160c0 8.8 7.2 16 16 16s16-7.2 16-16zM160 472a24 24 0 1 0 0-48 24 24 0 1 0 0 48z" />
    </Icon>
);

export default Interrobang;