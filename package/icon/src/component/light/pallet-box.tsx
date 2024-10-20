
import { Icon } from "../../index";

/**
 * A component that renders the `pallet-box` icon from the `light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/pallet-box?s=light pallet-box}
 * @preview ![pallet-box](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/light/pallet-box.svg)
 */
const PalletBox: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path d="M464 32c8.8 0 16 7.2 16 16l0 192c0 8.8-7.2 16-16 16l-288 0c-8.8 0-16-7.2-16-16l0-192c0-8.8 7.2-16 16-16l64 0 0 112c0 6.1 3.4 11.6 8.8 14.3s11.9 2.1 16.8-1.5L320 116l54.4 40.8c4.8 3.6 11.3 4.2 16.8 1.5s8.8-8.3 8.8-14.3l0-112 64 0zM272 32l96 0 0 80L329.6 83.2c-5.7-4.3-13.5-4.3-19.2 0L272 112l0-80zM176 0c-26.5 0-48 21.5-48 48l0 192c0 26.5 21.5 48 48 48l288 0c26.5 0 48-21.5 48-48l0-192c0-26.5-21.5-48-48-48L176 0zM0 368c0 8.8 7.2 16 16 16l48 0 0 96-48 0c-8.8 0-16 7.2-16 16s7.2 16 16 16l64 0 240 0 240 0 64 0c8.8 0 16-7.2 16-16s-7.2-16-16-16l-48 0 0-96 48 0c8.8 0 16-7.2 16-16s-7.2-16-16-16l-64 0-240 0L80 352l-64 0c-8.8 0-16 7.2-16 16zM96 480l0-96 208 0 0 96L96 480zm240 0l0-96 208 0 0 96-208 0z" />
    </Icon>
);

export default PalletBox;