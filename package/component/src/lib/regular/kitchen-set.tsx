
import { Icon } from "../../index";

/**
 * A component that renders the `kitchen-set` icon from the `regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/kitchen-set?s=regular kitchen-set}
 * @preview ![kitchen-set](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/regular/kitchen-set.svg)
 */
const KitchenSet: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path d="M240 144A96 96 0 1 0 48 144a96 96 0 1 0 192 0zm46 24c-11.4 68.1-70.7 120-142 120C64.5 288 0 223.5 0 144S64.5 0 144 0c71.4 0 130.6 51.9 142 120l66.7 0c3.8-22.7 23.6-40 47.3-40l96 0c26.5 0 48 21.5 48 48l0 32c0 26.5-21.5 48-48 48l-96 0c-23.8 0-43.5-17.3-47.3-40L286 168zM80 144a64 64 0 1 1 128 0A64 64 0 1 1 80 144zM376 264c0-13.3 10.7-24 24-24s24 10.7 24 24l0 8 40 0 56 0c13.3 0 24 10.7 24 24s-10.7 24-24 24l-8 0 0 144c0 26.5-21.5 48-48 48l-128 0c-26.5 0-48-21.5-48-48l0-144-8 0c-13.3 0-24-10.7-24-24s10.7-24 24-24l56 0 40 0 0-8zm-40 56l0 144 128 0 0-144-128 0zM32 336c0-8.8 7.2-16 16-16l80 0 16 0 32 0c26.5 0 48 21.5 48 48s-21.5 48-48 48l-16 0c0 17.7-14.3 32-32 32l-64 0c-17.7 0-32-14.3-32-32l0-80zm128 48l16 0c8.8 0 16-7.2 16-16s-7.2-16-16-16l-16 0 0 32zM0 488c0-13.3 10.7-24 24-24l176 0c13.3 0 24 10.7 24 24s-10.7 24-24 24L24 512c-13.3 0-24-10.7-24-24zM400 128l0 32 96 0 0-32-96 0z" />
    </Icon>
);

export default KitchenSet;