
import { Icon, generic } from "../../index";

/**
 * A component that renders the `flower-daffodil` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/flower-daffodil?s=sharp-duotone-solid flower-daffodil}
 * @preview ![flower-daffodil](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/flower-daffodil.svg)
 */
const FlowerDaffodil: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M0 320l0 16c0 97.2 78.8 176 176 176l48 0 32 0 32 0 48 0c97.2 0 176-78.8 176-176l0-16-80 0c-59.5 0-112.1 29.6-144 74.8l0-113.4c-12.7-5.6-23.8-14.4-32-25.3c-.5 .7-1 1.4-1.6 2s-1.1 1.3-1.6 2c-1.1 1.3-2.3 2.6-3.5 3.8c-2.4 2.5-4.9 4.8-7.6 6.9c-5.4 4.3-11.3 7.9-17.7 10.6l0 113.4C192.1 349.6 139.5 320 80 320L0 320z" />
        <path d="M320 288c-26.2 0-49.4-12.6-64-32c-14.6 19.4-37.8 32-64 32c-44.2 0-80-35.8-80-80c0-26.2 12.6-49.4 32-64c-19.4-14.6-32-37.8-32-64c0-44.2 35.8-80 80-80c26.2 0 49.4 12.6 64 32c14.6-19.4 37.8-32 64-32c44.2 0 80 35.8 80 80c0 26.2-12.6 49.4-32 64c19.4 14.6 32 37.8 32 64c0 44.2-35.8 80-80 80zm-64-88l56-56L256 88l-56 56 56 56z" />
    </Icon>
);

export default FlowerDaffodil;