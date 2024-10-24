
import { Icon } from "../../index";

/**
 * A component that renders the `ethernet` icon from the `light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/ethernet?s=light ethernet}
 * @preview ![ethernet](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/light/ethernet.svg)
 */
const Ethernet: typeof Icon = x => (
    <Icon {...x}>
        <path d="M128 96c0-17.7 14.3-32 32-32l192 0c17.7 0 32 14.3 32 32l0 32 32 0c17.7 0 32 14.3 32 32l0 32 32 0c17.7 0 32 14.3 32 32l0 192c0 17.7-14.3 32-32 32l-80 0-96 0-96 0-96 0-80 0c-17.7 0-32-14.3-32-32L0 224c0-17.7 14.3-32 32-32l32 0 0-32c0-17.7 14.3-32 32-32l32 0 0-32zm224 0L160 96l0 48c0 8.8-7.2 16-16 16l-48 0 0 48c0 8.8-7.2 16-16 16l-48 0 0 192 64 0 0-80c0-8.8 7.2-16 16-16s16 7.2 16 16l0 80 64 0 0-80c0-8.8 7.2-16 16-16s16 7.2 16 16l0 80 64 0 0-80c0-8.8 7.2-16 16-16s16 7.2 16 16l0 80 64 0 0-80c0-8.8 7.2-16 16-16s16 7.2 16 16l0 80 64 0 0-192-48 0c-8.8 0-16-7.2-16-16l0-48-48 0c-8.8 0-16-7.2-16-16l0-48z" />
    </Icon>
);

export default Ethernet;