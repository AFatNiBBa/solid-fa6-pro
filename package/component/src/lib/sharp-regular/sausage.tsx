
import { Icon } from "../../index";

/**
 * A component that renders the `sausage` icon from the `sharp-regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/sausage?s=sharp-regular sausage}
 * @preview ![sausage](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-regular/sausage.svg)
 */
const Sausage: typeof Icon = x => (
    <Icon {...x}>
        <path d="M384.7 69.2C347.1 82.2 320 117.9 320 160c0 88.4-71.6 160-160 160c-42.1 0-77.8 27.1-90.8 64.7L0 360 0 472l69.2-24.7c13 37.7 48.7 64.7 90.8 64.7c194.4 0 352-157.6 352-352c0-42.1-27.1-77.8-64.7-90.8L472 0 360 0l24.7 69.2zM416 112c26.5 0 48 21.5 48 48c0 167.9-136.1 304-304 304c-26.5 0-48-21.5-48-48s21.5-48 48-48c114.9 0 208-93.1 208-208c0-26.5 21.5-48 48-48z" />
    </Icon>
);

export default Sausage;