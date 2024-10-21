
import { Icon } from "../../index";

/**
 * A component that renders the `user-visor` icon from the `sharp-regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/user-visor?s=sharp-regular user-visor}
 * @preview ![user-visor](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-regular/user-visor.svg)
 */
const UserVisor: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M224 208c26.2 0 49.4-12.6 64-32l-128 0c14.6 19.4 37.8 32 64 32zm0 48c-53.7 0-99.7-33.1-118.7-80L80 176 80 48l44.1 0C147.5 18.7 183.6 0 224 0s76.5 18.7 99.9 48L368 48l0 128-25.3 0c-19 46.9-65 80-118.7 80zM128 96l0 32 16 0 160 0 16 0 0-32-16 0L144 96l-16 0zM65 464l318 0L348.5 352 99.5 352 65 464zM64 304l320 0 49.2 160L448 512l-50.2 0L50.2 512 0 512l14.8-48L64 304zM286.7 448l-6.7-6.7L313.3 368l33.3 73.3L340 448l-20-20-33.3 20z" />
    </Icon>
);

export default UserVisor;