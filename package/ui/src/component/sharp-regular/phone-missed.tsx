
import { Icon } from "../../index";

/**
 * A component that renders the `phone-missed` icon from the `sharp-regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/phone-missed?s=sharp-regular phone-missed}
 * @preview ![phone-missed](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-regular/phone-missed.svg)
 */
const PhoneMissed: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path d="M120 0L232 0l24 0 0 48-24 0-54.1 0 80 80 108.1 0L475.8 18.2l17-17 33.9 33.9-17 17L393 169l-7 7-9.9 0-128 0-9.9 0-7-7-87-87 0 54.1 0 24-48 0 0-24L96 24 96 0l24 0zM416 464l0-80c-62.3-20.8-129.7-20.8-192 0l0 80L64 512 0 352c37.3-48 153.6-144 320-144s282.7 96 320 144L576 512 416 464zM176 384l0-34.6 32.8-10.9c72.2-24.1 150.2-24.1 222.4 0L464 349.4l0 34.6 0 44.3 83.7 25.1 36.6-91.5C540.8 319.1 446.8 256 320 256S99.2 319.1 55.6 361.9l36.6 91.5L176 428.3l0-44.3z" />
    </Icon>
);

export default PhoneMissed;