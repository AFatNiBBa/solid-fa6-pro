
import { Icon } from "../../index";

/**
 * A component that renders the `person-circle-plus` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/person-circle-plus?s=sharp-solid person-circle-plus}
 * @preview ![person-circle-plus](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-solid/person-circle-plus.svg)
 */
const PersonCirclePlus: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path d="M112 48a48 48 0 1 1 96 0 48 48 0 1 1 -96 0zM91.4 128l17.5 0 102.2 0 17.5 0 9.4 14.8 66.4 104c-15.5 16.3-28 35.7-36.3 57l-2.3 1.4-33.8-53L232 480l0 32-64 0 0-32 0-128-16 0 0 128 0 32-64 0 0-32 0-227.8-33.8 53L.2 270.8 82 142.8 91.4 128zM432 224a144 144 0 1 1 0 288 144 144 0 1 1 0-288zm16 80l0-16-32 0 0 16 0 48-48 0-16 0 0 32 16 0 48 0 0 48 0 16 32 0 0-16 0-48 48 0 16 0 0-32-16 0-48 0 0-48z" />
    </Icon>
);

export default PersonCirclePlus;