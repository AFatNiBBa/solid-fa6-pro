
import { Icon } from "../../index";

/**
 * A component that renders the `eject` icon from the `light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/eject?s=light eject}
 * @preview ![eject](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/light/eject.svg)
 */
const Eject: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M224 96c-4.5 0-8.8 1.9-11.8 5.2l-176 192c-4.3 4.7-5.4 11.4-2.9 17.3s8.3 9.6 14.6 9.6l352 0c6.3 0 12.1-3.7 14.6-9.6s1.4-12.6-2.9-17.3l-176-192c-3-3.3-7.3-5.2-11.8-5.2zm0-32c13.5 0 26.3 5.6 35.4 15.6l176 192c12.9 14 16.2 34.3 8.6 51.8S419 352 400 352L48 352c-19 0-36.3-11.2-43.9-28.7s-4.3-37.7 8.6-51.8l176-192C197.7 69.6 210.5 64 224 64zM16 416l416 0c8.8 0 16 7.2 16 16s-7.2 16-16 16L16 448c-8.8 0-16-7.2-16-16s7.2-16 16-16z" />
    </Icon>
);

export default Eject;