
import { Icon } from "../../index";

/**
 * A component that renders the `sausage` icon from the `regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/sausage?s=regular sausage}
 * @preview ![sausage](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/regular/sausage.svg)
 */
const Sausage: typeof Icon = x => (
    <Icon {...x}>
        <path d="M447.5 69.3l15.2-41.9c.8-2.2 1.2-4.6 1.2-7C464 9.1 454.9 0 443.6 0L388.4 0C377.1 0 368 9.1 368 20.4c0 2.4 .4 4.7 1.2 7l15.2 41.9C346.9 82.3 320 118 320 160c0 88.4-71.6 160-160 160c-42 0-77.7 26.9-90.7 64.5L27.4 369.2c-2.2-.8-4.6-1.2-7-1.2C9.1 368 0 377.1 0 388.4l0 55.2C0 454.9 9.1 464 20.4 464c2.4 0 4.7-.4 7-1.2l41.9-15.2C82.3 485.1 118 512 160 512c194.4 0 352-157.6 352-352c0-42-26.9-77.7-64.5-90.7zM112 416c0-26.5 21.5-48 48-48c114.9 0 208-93.1 208-208c0-26.5 21.5-48 48-48s48 21.5 48 48c0 167.9-136.1 304-304 304c-26.5 0-48-21.5-48-48z" />
    </Icon>
);

export default Sausage;