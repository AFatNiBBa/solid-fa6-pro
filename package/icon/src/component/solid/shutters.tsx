
import { Icon } from "../../index";

/**
 * A component that renders the `shutters` icon from the `solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/shutters?s=solid shutters}
 * @preview ![shutters](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/solid/shutters.svg)
 */
const Shutters: typeof Icon = x => (
    <Icon {...x}>
        <path d="M32 32C14.3 32 0 46.3 0 64S14.3 96 32 96l448 0c17.7 0 32-14.3 32-32s-14.3-32-32-32L32 32zM20.6 224l470.7 0c11.4 0 20.6-9.2 20.6-20.6c0-2.2-.4-4.4-1.1-6.5L488 128 24 128 1.1 196.8c-.7 2.1-1.1 4.3-1.1 6.5C0 214.8 9.2 224 20.6 224zM491.4 352c11.4 0 20.6-9.2 20.6-20.6c0-2.2-.4-4.4-1.1-6.5L488 256 24 256 1.1 324.8c-.7 2.1-1.1 4.3-1.1 6.5C0 342.8 9.2 352 20.6 352l470.7 0zM20.6 480l470.7 0c11.4 0 20.6-9.2 20.6-20.6c0-2.2-.4-4.4-1.1-6.5L488 384 24 384 1.1 452.8c-.7 2.1-1.1 4.3-1.1 6.5C0 470.8 9.2 480 20.6 480z" />
    </Icon>
);

export default Shutters;