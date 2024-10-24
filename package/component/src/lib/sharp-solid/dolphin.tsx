
import { Icon } from "../../index";

/**
 * A component that renders the `dolphin` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/dolphin?s=sharp-solid dolphin}
 * @preview ![dolphin](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-solid/dolphin.svg)
 */
const Dolphin: typeof Icon = x => (
    <Icon {...x}>
        <path d="M176 0l30.5 0c46.1 0 89.7 10.2 128.9 28.6L464 0l16 16L427.4 94.8c52.4 55 84.6 129.4 84.6 211.3c0 94.2-79.2 169.5-173.3 164.3l-72.5-4L248 512l-88 0 32-80-32-80 88 0 21.5 53.7 60-3C360 401.2 384 376 384 345.4c0-31.7-25.7-57.4-57.4-57.4l-6.6 0 0 64-32 0-80-64-16 0-16 0L32 288 0 288l0-32 0-16 0-18.1 15.5-9.3L42 196.7c-6.4-16.3-10-34.1-10-52.7C32 64.5 96.5 0 176 0zm0 168a24 24 0 1 0 0-48 24 24 0 1 0 0 48z" />
    </Icon>
);

export default Dolphin;