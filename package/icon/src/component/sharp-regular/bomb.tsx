
import { Icon } from "../../index";

/**
 * A component that renders the `bomb` icon from the `sharp-regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/bomb?s=sharp-regular bomb}
 * @preview ![bomb](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-regular/bomb.svg)
 */
const Bomb: typeof Icon = x => (
    <Icon {...x}>
        <path d="M432 0l26.7 53.3L512 80l-53.3 26.7L432 160l-26.7-53.3L352 80l53.3-26.7L432 0zM290.9 163.7l-28.7-10.3c-16.9-6.1-35.1-9.4-54.2-9.4c-88.4 0-160 71.6-160 160s71.6 160 160 160s160-71.6 160-160c0-19.1-3.3-37.4-9.4-54.2l-10.3-28.7L361.4 208 304 150.6l-13.1 13.1zm47-47l57.4 57.4 11.3 11.3L429.3 208l-22.6 22.6-2.9 2.9c7.9 22 12.2 45.7 12.2 70.5c0 114.9-93.1 208-208 208S0 418.9 0 304S93.1 96 208 96c24.7 0 48.5 4.3 70.5 12.3l2.9-2.9L304 82.7l22.6 22.6 11.3 11.3zM208 224c-44.2 0-80 35.8-80 80l-48 0c0-70.7 57.3-128 128-128l0 48z" />
    </Icon>
);

export default Bomb;