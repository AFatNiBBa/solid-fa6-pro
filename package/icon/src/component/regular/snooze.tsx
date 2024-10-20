
import { Icon } from "../../index";

/**
 * A component that renders the `snooze` icon from the `regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/snooze?s=regular snooze}
 * @preview ![snooze](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/regular/snooze.svg)
 */
const Snooze: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M184 0c-13.3 0-24 10.7-24 24s10.7 24 24 24l59.1 0-77.2 88.2c-6.2 7.1-7.7 17.1-3.8 25.7S174.6 176 184 176l112 0c13.3 0 24-10.7 24-24s-10.7-24-24-24l-59.1 0 77.2-88.2c6.2-7.1 7.7-17.1 3.8-25.7S305.4 0 296 0L184 0zM312 224c-13.3 0-24 10.7-24 24s10.7 24 24 24l62.9 0L293.1 377.3c-5.6 7.2-6.6 17-2.6 25.3s12.4 13.5 21.6 13.5l112 0c13.3 0 24-10.7 24-24s-10.7-24-24-24l-62.9 0 81.9-105.3c5.6-7.2 6.6-17 2.6-25.3s-12.4-13.5-21.6-13.5l-112 0zM24 224c-13.3 0-24 10.7-24 24s10.7 24 24 24l128.6 0L4.6 473.8c-5.3 7.3-6.1 17-2.1 25S15 512 24 512l176 0c13.3 0 24-10.7 24-24s-10.7-24-24-24L71.4 464l148-201.8c5.3-7.3 6.1-17 2.1-25S209 224 200 224L24 224z" />
    </Icon>
);

export default Snooze;