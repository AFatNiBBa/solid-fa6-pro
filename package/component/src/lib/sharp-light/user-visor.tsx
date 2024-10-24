
import { Icon } from "../../index";

/**
 * A component that renders the `user-visor` icon from the `sharp-light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/user-visor?s=sharp-light user-visor}
 * @preview ![user-visor](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-light/user-visor.svg)
 */
const UserVisor: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M224 224c41.8 0 77.4-26.7 90.5-64l-181.1 0c13.2 37.3 48.7 64 90.5 64zm0 32c-59.6 0-109.8-40.8-124-96l-20 0 0-32 0-32 0-32 32 0 1.1 0C135.3 25.7 176.6 0 224 0s88.7 25.7 110.9 64l1.1 0 32 0 0 32 0 32 0 32-20 0c-14.2 55.2-64.3 96-124 96zM152.4 64l143.1 0C278 44.4 252.4 32 224 32s-54 12.4-71.6 32zM43.3 480l361.3 0L360.4 336 87.6 336 43.3 480zM64 304l320 0 54.2 176 9.8 32-33.5 0-381 0L0 512l9.8-32L64 304zM336 96L112 96l0 32 224 0 0-32zM288 456l-8-8 40-88 40 88-8 8-24-24-40 24z" />
    </Icon>
);

export default UserVisor;