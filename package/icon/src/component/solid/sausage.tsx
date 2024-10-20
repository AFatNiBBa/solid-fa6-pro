
import { Icon } from "../../index";

/**
 * A component that renders the `sausage` icon from the `solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/sausage?s=solid sausage}
 * @preview ![sausage](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/solid/sausage.svg)
 */
const Sausage: typeof Icon = x => (
    <Icon {...x}>
        <path d="M320 160c0-42 26.9-77.7 64.5-90.7L369.2 27.4c-.8-2.2-1.2-4.6-1.2-7C368 9.1 377.1 0 388.4 0l55.2 0C454.9 0 464 9.1 464 20.4c0 2.4-.4 4.7-1.2 7L447.5 69.3C485.1 82.3 512 118 512 160c0 194.4-157.6 352-352 352c-42 0-77.7-26.9-90.7-64.5L27.4 462.8c-2.2 .8-4.6 1.2-7 1.2C9.1 464 0 454.9 0 443.6l0-55.2C0 377.1 9.1 368 20.4 368c2.4 0 4.7 .4 7 1.2l41.9 15.2C82.3 346.9 118 320 160 320c88.4 0 160-71.6 160-160zm80 0c0-8.8-7.2-16-16-16s-16 7.2-16 16c0 114.9-93.1 208-208 208c-8.8 0-16 7.2-16 16s7.2 16 16 16c132.5 0 240-107.5 240-240z" />
    </Icon>
);

export default Sausage;