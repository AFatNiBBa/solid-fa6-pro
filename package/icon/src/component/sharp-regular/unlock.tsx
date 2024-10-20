
import { Icon } from "../../index";

/**
 * A component that renders the `unlock` icon from the `sharp-regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/unlock?s=sharp-regular unlock}
 * @preview ![unlock](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-regular/unlock.svg)
 */
const Unlock: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M144 128c0-44.2 35.8-80 80-80c35.6 0 65.8 23.2 76.1 55.4l45.7-14.8C329.2 37.2 281 0 224 0C153.3 0 96 57.3 96 128l0 64-48 0L0 192l0 48L0 464l0 48 48 0 352 0 48 0 0-48 0-224 0-48-48 0-256 0 0-64zM48 464l0-224 352 0 0 224L48 464z" />
    </Icon>
);

export default Unlock;