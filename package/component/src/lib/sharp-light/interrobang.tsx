
import { Icon } from "../../index";

/**
 * A component that renders the `interrobang` icon from the `sharp-light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/interrobang?s=sharp-light interrobang}
 * @preview ![interrobang](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-light/interrobang.svg)
 */
const Interrobang: typeof Icon = x => (
    <Icon viewBox="0 0 320 512" {...x}>
        <path d="M144 64c-53 0-96 43-96 96l-32 0C16 89.3 73.3 32 144 32l32 0c70.7 0 128 57.3 128 128c0 35.3-16.6 68.4-44.8 89.6L176 312l0 32 0 8 0 8 0 8-32 0 0-8 0-8 0-8 0-40 0-8 0-136 0-16 32 0 0 16 0 112 64-48c20.1-15.1 32-38.8 32-64c0-53-43-96-96-96l-32 0zm-8 360l48 0 0 48-48 0 0-48z" />
    </Icon>
);

export default Interrobang;