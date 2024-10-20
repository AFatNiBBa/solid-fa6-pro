
import { Icon } from "../../index";

/**
 * A component that renders the `airplay` icon from the `thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/airplay?s=thin airplay}
 * @preview ![airplay](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/thin/airplay.svg)
 */
const Airplay: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path d="M480 48L96 48c-44.2 0-80 35.8-80 80l0 192c0 44.2 35.8 80 80 80l21.5 0-2.7 2.7c-4 4-7.4 8.5-10.2 13.3L96 416c-53 0-96-43-96-96L0 128C0 75 43 32 96 32l384 0c53 0 96 43 96 96l0 192c0 53-43 96-96 96l-8.6 0c-2.8-4.8-6.2-9.2-10.2-13.3l-2.7-2.7 21.5 0c44.2 0 80-35.8 80-80l0-192c0-44.2-35.8-80-80-80zM147.5 442.7c-2.2 2.3-3.5 5.4-3.5 8.7c0 7 5.6 12.6 12.6 12.6l262.8 0c7 0 12.6-5.6 12.6-12.6c0-3.2-1.2-6.3-3.5-8.7L303.4 310.6c-4-4.2-9.6-6.6-15.4-6.6s-11.4 2.4-15.4 6.6L147.5 442.7zm-11.6-11L261 299.6c7-7.4 16.8-11.6 27-11.6s20 4.2 27 11.6L440.2 431.7c5 5.3 7.8 12.4 7.8 19.7c0 15.8-12.8 28.6-28.6 28.6l-262.8 0c-15.8 0-28.6-12.8-28.6-28.6c0-7.3 2.8-14.4 7.8-19.7z" />
    </Icon>
);

export default Airplay;