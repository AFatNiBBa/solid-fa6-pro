
import { Icon } from "../../index";

/**
 * A component that renders the `family` icon from the `sharp-regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/family?s=sharp-regular family}
 * @preview ![family](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-regular/family.svg)
 */
const Family: typeof Icon = x => (
    <Icon {...x}>
        <path d="M192 64A64 64 0 1 0 64 64a64 64 0 1 0 128 0zM78 208l50 0 50 0 4.7 0c-4.3-9.8-6.7-20.6-6.7-32c0-5.5 .6-10.8 1.6-16L32 160 26 304l-2 48 40 0 0 136 0 24 48 0 0-24 0-136 32 0 0-48-32 0-38 0 4-96zm258-32c0 11.4-2.4 22.2-6.7 32l26.9 0 27.8 0 27.8 0 36.6 128L368 336l0 48 32 0 0 104 0 24 48 0 0-24 0-104 14.1 0 49.9 0-13.7-48L448 160l-113.6 0c1 5.2 1.6 10.5 1.6 16zM448 64A64 64 0 1 0 320 64a64 64 0 1 0 128 0zM256 224a48 48 0 1 0 0-96 48 48 0 1 0 0 96zM224 368l0-64 64 0 0 64-64 0zm112 48l0-48 0-64 0-48-48 0-64 0-48 0 0 48 0 64 0 48 32 0 0 96 96 0 0-96 32 0z" />
    </Icon>
);

export default Family;