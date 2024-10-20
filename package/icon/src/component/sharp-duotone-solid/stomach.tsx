
import { Icon, generic } from "../../index";

/**
 * A component that renders the `stomach` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/stomach?s=sharp-duotone-solid stomach}
 * @preview ![stomach](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/stomach.svg)
 */
const Stomach: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M214.8 414l1.7 1.4c11.4 9.5 21.6 17.1 34.4 22.8c12.6 5.5 29.1 9.8 53.1 9.8c69.7 0 127.9-49.5 141.1-115.3c-7.3 1.9-14.6 3.3-21.1 3.3c-16.8 .2-28.4-7.9-40-16s-23.2-16.3-40-16c-7.9 .1-17.1 2.1-25.6 4.6c-8.6 53.5-50.4 95.8-103.6 105.4z" />
        <path d="M192 0l0 32 0 128 81.1 0c22.1-38.3 63.5-64 110.9-64c70.7 0 128 57.3 128 128l0 80c0 114.9-93.1 208-208 208c-32 0-57.5-5.8-78.9-15.2c-21.2-9.3-36.9-21.7-49.6-32.2c-1.8-1.5-3.6-3-5.3-4.4c0 0 0 0 0 0C148 441.5 136.6 432 112 432l-48 0 0 48 0 32L0 512l0-32 0-80 0-16 0-32 32 0 160 0c35.3 0 64-28.7 64-64l0-64-96 0-32 0 0-32 0-160 0-32 64 0zm22.8 414c.6 .5 1.1 1 1.7 1.4c11.4 9.5 21.6 17.1 34.4 22.8c12.6 5.5 29.1 9.8 53.1 9.8c79.5 0 144-64.5 144-144l0-80c0-35.3-28.7-64-64-64s-64 28.7-64 64l0 64c0 62.9-45.4 115.2-105.2 126z" />
    </Icon>
);

export default Stomach;