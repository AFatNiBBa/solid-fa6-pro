
import { Icon } from "../../index";

/**
 * A component that renders the `trash-clock` icon from the `solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/trash-clock?s=solid trash-clock}
 * @preview ![trash-clock](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/solid/trash-clock.svg)
 */
const TrashClock: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path d="M135.2 17.7L128 32 32 32C14.3 32 0 46.3 0 64S14.3 96 32 96l384 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-96 0-7.2-14.3C307.4 6.8 296.3 0 284.2 0L163.8 0c-12.1 0-23.2 6.8-28.6 17.7zM416 128L32 128 53.2 467c1.6 25.3 22.6 45 47.9 45l229.7 0C285.6 480.1 256 427.5 256 368c0-90.4 68.2-164.9 155.9-174.9L416 128zM576 368a144 144 0 1 0 -288 0 144 144 0 1 0 288 0zM432 288c8.8 0 16 7.2 16 16l0 48 32 0c8.8 0 16 7.2 16 16s-7.2 16-16 16l-48 0c-8.8 0-16-7.2-16-16l0-64c0-8.8 7.2-16 16-16z" />
    </Icon>
);

export default TrashClock;