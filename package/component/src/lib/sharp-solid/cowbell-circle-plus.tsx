
import { Icon } from "../../index";

/**
 * A component that renders the `cowbell-circle-plus` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/cowbell-circle-plus?s=sharp-solid cowbell-circle-plus}
 * @preview ![cowbell-circle-plus](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-solid/cowbell-circle-plus.svg)
 */
const CowbellCirclePlus: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path d="M128 0l24 0L296 0l24 0 0 24 0 72 64 0 19.7 98.3C319.9 207.8 256 280.4 256 368c0 16.6 2.3 32.7 6.6 48L0 416 64 96l64 0 0-72 0-24zM285.5 465.6C277.9 492.4 253.2 512 224 512c-35.3 0-64-28.7-64-64l115.2 0c3.1 6.1 6.6 12 10.3 17.6zM272 48l-96 0 0 48 96 0 0-48zM432 224a144 144 0 1 1 0 288 144 144 0 1 1 0-288zm16 80l0-16-32 0 0 16 0 48-48 0-16 0 0 32 16 0 48 0 0 48 0 16 32 0 0-16 0-48 48 0 16 0 0-32-16 0-48 0 0-48z" />
    </Icon>
);

export default CowbellCirclePlus;