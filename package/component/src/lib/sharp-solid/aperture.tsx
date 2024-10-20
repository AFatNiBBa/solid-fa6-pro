
import { Icon } from "../../index";

/**
 * A component that renders the `aperture` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/aperture?s=sharp-solid aperture}
 * @preview ![aperture](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-solid/aperture.svg)
 */
const Aperture: typeof Icon = x => (
    <Icon {...x}>
        <path d="M256 0c12.1 0 23.9 .8 35.5 2.4L163.6 224 76.6 73.3C122.8 28 186.1 0 256 0zM0 256C0 196.6 20.2 141.9 54.2 98.5L182.1 320l-174 0C2.8 299.5 0 278.1 0 256zM187.5 502.7C110.6 481.4 48.2 425.1 18.6 352l255.9 0-87 150.7zM256 512c-12.1 0-23.9-.8-35.5-2.4L348.4 288l87 150.7C389.2 484 325.9 512 256 512zM512 256c0 59.4-20.2 114.1-54.2 157.5L329.9 192l174 0c5.3 20.5 8.1 41.9 8.1 64zM324.5 9.3C401.4 30.6 463.8 86.9 493.4 160l-255.9 0 87-150.7z" />
    </Icon>
);

export default Aperture;