
import { Icon } from "../../index";

/**
 * A component that renders the `washing-machine` icon from the `light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/washing-machine?s=light washing-machine}
 * @preview ![washing-machine](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/light/washing-machine.svg)
 */
const WashingMachine: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M64 32C46.3 32 32 46.3 32 64l0 384c0 17.7 14.3 32 32 32l320 0c17.7 0 32-14.3 32-32l0-384c0-17.7-14.3-32-32-32L64 32zM0 64C0 28.7 28.7 0 64 0L384 0c35.3 0 64 28.7 64 64l0 384c0 35.3-28.7 64-64 64L64 512c-35.3 0-64-28.7-64-64L0 64zm104 8a24 24 0 1 1 0 48 24 24 0 1 1 0-48zm56 24a24 24 0 1 1 48 0 24 24 0 1 1 -48 0zM325.7 351c-7 .7-14.3 1-21.7 1c-41.8 0-72.9-20.8-95.7-36l-2.1-1.4c-25-16.7-41.3-26.6-62.2-26.6c-9.8 0-20.6 1.6-31.4 4c-.4 3.9-.6 7.9-.6 12c0 61.9 50.1 112 112 112c45.1 0 84-26.6 101.7-65zm9.5-33.4c.5-4.4 .8-8.9 .8-13.5c0-61.9-50.1-112-112-112c-45.3 0-84.4 27-102 65.7c7.4-1.1 14.8-1.7 22-1.7c32 0 56 16 80 32s48 32 80 32c10.9 0 21.4-.9 31.2-2.5zM80 304a144 144 0 1 1 288 0A144 144 0 1 1 80 304z" />
    </Icon>
);

export default WashingMachine;