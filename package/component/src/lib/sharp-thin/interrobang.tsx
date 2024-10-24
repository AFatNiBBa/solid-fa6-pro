
import { Icon } from "../../index";

/**
 * A component that renders the `interrobang` icon from the `sharp-thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/interrobang?s=sharp-thin interrobang}
 * @preview ![interrobang](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-thin/interrobang.svg)
 */
const Interrobang: typeof Icon = x => (
    <Icon viewBox="0 0 320 512" {...x}>
        <path d="M136 48C78.6 48 32 94.6 32 152l0 8-16 0 0-8C16 85.7 69.7 32 136 32l48 0c66.3 0 120 53.7 120 120l0 6.3c0 33.8-16.4 65.5-44 85l-92 64.9 0 43.9 0 16 0 8-16 0 0-8 0-16 0-48 0-4.1L152 136l0-8 16 0 0 8 0 152.6 82.7-58.4c23.4-16.5 37.3-43.3 37.3-71.9l0-6.3c0-57.4-46.6-104-104-104l-48 0zm8 384l32 0 0 32-32 0 0-32z" />
    </Icon>
);

export default Interrobang;