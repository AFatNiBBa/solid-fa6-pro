
import { Icon } from "../../index";

/**
 * A component that renders the `eject` icon from the `regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/eject?s=regular eject}
 * @preview ![eject](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/regular/eject.svg)
 */
const Eject: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M4.1 323.3c-7.7-17.4-4.3-37.7 8.6-51.8l176-192C197.7 69.6 210.5 64 224 64s26.3 5.6 35.4 15.6l176 192c12.9 14 16.2 34.3 8.6 51.8S419 352 400 352L48 352c-19 0-36.3-11.2-43.9-28.7zM48 304l352 0L224 112 48 304zM24 400l400 0c13.3 0 24 10.7 24 24s-10.7 24-24 24L24 448c-13.3 0-24-10.7-24-24s10.7-24 24-24z" />
    </Icon>
);

export default Eject;