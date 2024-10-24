
import { Icon } from "../../index";

/**
 * A component that renders the `pallet-box` icon from the `regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/pallet-box?s=regular pallet-box}
 * @preview ![pallet-box](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/regular/pallet-box.svg)
 */
const PalletBox: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path d="M384 48l0 80c0 5.9-3.2 11.3-8.5 14.1s-11.5 2.5-16.4-.8L320 115.2l-39.1 26.1c-4.9 3.3-11.2 3.6-16.4 .8s-8.5-8.2-8.5-14.1l0-80-80 0 0 192 288 0 0-192-80 0zM128 48c0-26.5 21.5-48 48-48L464 0c26.5 0 48 21.5 48 48l0 192c0 26.5-21.5 48-48 48l-288 0c-26.5 0-48-21.5-48-48l0-192zM0 344c0-13.3 10.7-24 24-24l64 0 232 0 232 0 64 0c13.3 0 24 10.7 24 24s-10.7 24-24 24l-40 0 0 96 40 0c13.3 0 24 10.7 24 24s-10.7 24-24 24l-64 0-232 0L88 512l-64 0c-13.3 0-24-10.7-24-24s10.7-24 24-24l40 0 0-96-40 0c-13.3 0-24-10.7-24-24zM112 464l184 0 0-96-184 0 0 96zm232 0l184 0 0-96-184 0 0 96z" />
    </Icon>
);

export default PalletBox;