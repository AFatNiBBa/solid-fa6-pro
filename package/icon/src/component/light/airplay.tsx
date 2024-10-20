
import { Icon } from "../../index";

/**
 * A component that renders the `airplay` icon from the `light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/airplay?s=light airplay}
 * @preview ![airplay](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/light/airplay.svg)
 */
const Airplay: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path d="M480 64L96 64c-35.3 0-64 28.7-64 64l0 192c0 35.3 28.7 64 64 64l37.5 0-18.7 18.7c-4 4-7.4 8.5-10.2 13.3L96 416c-53 0-96-43-96-96L0 128C0 75 43 32 96 32l384 0c53 0 96 43 96 96l0 192c0 53-43 96-96 96l-8.6 0c-2.8-4.8-6.2-9.2-10.2-13.3L442.5 384l37.5 0c35.3 0 64-28.7 64-64l0-192c0-35.3-28.7-64-64-64zM162.2 435.7c-1.4 1.3-2.2 3.2-2.2 5.2c0 3.9 3.2 7.1 7.1 7.1l241.7 0c3.9 0 7.1-3.2 7.1-7.1c0-2-.8-3.8-2.2-5.2L293.6 322.2c-1.4-1.3-3.5-2.2-5.6-2.2s-4.2 .8-5.6 2.2L162.2 435.7zm-22-23.3L260.4 298.9c7.4-7 17.4-10.9 27.6-10.9s20.1 3.9 27.6 10.9L435.7 412.4c7.8 7.4 12.3 17.7 12.3 28.5c0 21.6-17.5 39.1-39.1 39.1l-241.7 0c-21.6 0-39.1-17.5-39.1-39.1c0-10.8 4.4-21.1 12.3-28.5z" />
    </Icon>
);

export default Airplay;