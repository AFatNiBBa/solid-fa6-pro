
import { Icon } from "../../index";

/**
 * A component that renders the `alarm-exclamation` icon from the `sharp-light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/alarm-exclamation?s=sharp-light alarm-exclamation}
 * @preview ![alarm-exclamation](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-light/alarm-exclamation.svg)
 */
const AlarmExclamation: typeof Icon = x => (
    <Icon {...x}>
        <path d="M92.2 0C41.3 0 0 41.3 0 92.2c0 18.2 5.3 35.2 14.4 49.5l27-17.2c-5.9-9.3-9.4-20.4-9.4-32.3C32 58.9 58.9 32 92.2 32c15.8 0 30.2 6.1 40.9 16.1l21.8-23.5C138.4 9.3 116.4 0 92.2 0zM357.1 24.6l21.8 23.5C389.6 38.1 404 32 419.8 32C453 32 480 58.9 480 92.2c0 11.9-3.4 23-9.4 32.3l27 17.2c9.1-14.3 14.4-31.3 14.4-49.5C512 41.3 470.7 0 419.8 0c-24.2 0-46.3 9.3-62.7 24.6zM67.3 499.3l42-42C148.6 491.4 199.9 512 256 512s107.4-20.6 146.7-54.7l42 42L456 510.6 478.6 488l-11.3-11.3-42-42C459.4 395.4 480 344.1 480 288C480 164.3 379.7 64 256 64S32 164.3 32 288c0 56.1 20.6 107.4 54.7 146.7l-42 42L33.4 488 56 510.6l11.3-11.3zM256 96a192 192 0 1 1 0 384 192 192 0 1 1 0-384zm16 64l-32 0 0 16 0 144 0 16 32 0 0-16 0-144 0-16zM240 400l32 0 0-32-32 0 0 32z" />
    </Icon>
);

export default AlarmExclamation;