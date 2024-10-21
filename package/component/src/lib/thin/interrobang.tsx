
import { Icon } from "../../index";

/**
 * A component that renders the `interrobang` icon from the `thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/interrobang?s=thin interrobang}
 * @preview ![interrobang](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/thin/interrobang.svg)
 */
const Interrobang: typeof Icon = x => (
    <Icon viewBox="0 0 320 512" {...x}>
        <path d="M136 48C78.6 48 32 94.6 32 152l0 8c0 4.4-3.6 8-8 8s-8-3.6-8-8l0-8C16 85.7 69.7 32 136 32l48 0c66.3 0 120 53.7 120 120l0 6.3c0 33.8-16.4 65.5-44 85L195.1 289c-17 12-27.1 31.5-27.1 52.3l0 10.7 0 16c0 4.4-3.6 8-8 8s-8-3.6-8-8l0-16 0-10.7L152 128c0-4.4 3.6-8 8-8s8 3.6 8 8l0 165.3c5-6.6 11-12.5 17.9-17.4l64.9-45.8c23.4-16.5 37.3-43.3 37.3-71.9l0-6.3c0-57.4-46.6-104-104-104l-48 0zm8 400a16 16 0 1 1 32 0 16 16 0 1 1 -32 0z" />
    </Icon>
);

export default Interrobang;