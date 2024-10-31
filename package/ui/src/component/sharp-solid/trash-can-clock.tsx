
import { Icon } from "../../index";

/**
 * A component that renders the `trash-can-clock` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/trash-can-clock?s=sharp-solid trash-can-clock}
 * @preview ![trash-can-clock](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-solid/trash-can-clock.svg)
 */
const TrashCanClock: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path d="M144 0L304 0l16 32 128 0 0 64L0 96 0 32l128 0L144 0zM32 128l384 0 0 64.7c-29.3 2.6-56.6 12.5-80 27.7l0-12.5 0-16-32 0 0 16 0 39.2c-29.8 31.5-48 74-48 120.8c0 59.5 29.6 112.1 74.8 144L32 512l0-384zm112 64l-32 0 0 16 0 224 0 16 32 0 0-16 0-224 0-16zm96 0l-32 0 0 16 0 224 0 16 32 0 0-16 0-224 0-16zm48 176a144 144 0 1 1 288 0 144 144 0 1 1 -288 0zm160-80l-32 0 0 16 0 64 0 16 16 0 48 0 16 0 0-32-16 0-32 0 0-48 0-16z" />
    </Icon>
);

export default TrashCanClock;