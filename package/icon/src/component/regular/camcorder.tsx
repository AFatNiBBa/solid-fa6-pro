
import { Icon } from "../../index";

/**
 * A component that renders the `camcorder` icon from the `regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/camcorder?s=regular camcorder}
 * @preview ![camcorder](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/regular/camcorder.svg)
 */
const Camcorder: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path d="M96 120c0-22.1 17.9-40 40-40l160 0c13.3 0 24-10.7 24-24s-10.7-24-24-24L136 32c-48.6 0-88 39.4-88 88l0 42c-27.6 7.1-48 32.2-48 62L0 416c0 35.3 28.7 64 64 64l256 0c35.3 0 64-28.7 64-64l0-17 0-158 0-17c0-35.3-28.7-64-64-64L96 160l0-40zM64 208l256 0c8.8 0 16 7.2 16 16l0 192c0 8.8-7.2 16-16 16L64 432c-8.8 0-16-7.2-16-16l0-192c0-8.8 7.2-16 16-16zM520.3 460.5c5.1 2.3 10.6 3.5 16.2 3.5c21.8 0 39.5-17.7 39.5-39.5l0-209c0-21.8-17.7-39.5-39.5-39.5c-5.6 0-11.1 1.2-16.2 3.5L416 226.4l0 52.6 112-50.4 0 182.7L416 361l0 52.6 104.3 46.9zM80 264c0 13.3 10.7 24 24 24l176 0c13.3 0 24-10.7 24-24s-10.7-24-24-24l-176 0c-13.3 0-24 10.7-24 24z" />
    </Icon>
);

export default Camcorder;