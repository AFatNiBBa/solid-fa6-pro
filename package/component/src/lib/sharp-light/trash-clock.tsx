
import { Icon } from "../../index";

/**
 * A component that renders the `trash-clock` icon from the `sharp-light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/trash-clock?s=sharp-light trash-clock}
 * @preview ![trash-clock](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-light/trash-clock.svg)
 */
const TrashClock: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path d="M151.1 0L160 0 288 0l8.9 0 4.7 7.5L336.9 64l47.1 0L416 64l32 0 0 32-34.3 0-7 97.8c-11.3 1.6-22.2 4.3-32.6 8L381.6 96 66.4 96 93.8 480l202.4 0c10 12.1 21.7 22.9 34.6 32L64 512 34.3 96 0 96 0 64l32 0 32.1 0 47.1 0L146.4 7.5 151.1 0zm-2.3 64l150.3 0-20-32L168.9 32l-20 32zM432 480a112 112 0 1 0 0-224 112 112 0 1 0 0 224zm0-256a144 144 0 1 1 0 288 144 144 0 1 1 0-288zm16 64l0 16 0 48 32 0 16 0 0 32-16 0-48 0-16 0 0-16 0-64 0-16 32 0z" />
    </Icon>
);

export default TrashClock;