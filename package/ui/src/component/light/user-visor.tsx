
import { Icon } from "../../index";

/**
 * A component that renders the `user-visor` icon from the `light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/user-visor?s=light user-visor}
 * @preview ![user-visor](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/light/user-visor.svg)
 */
const UserVisor: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M224 224c41.8 0 77.4-26.7 90.5-64l-181.1 0c13.2 37.3 48.7 64 90.5 64zm0 32c-60.6 0-111.3-42.1-124.6-98.6C88 152.5 80 141.2 80 128l0-32c0-17.7 14.3-32 32-32l1.1 0C135.3 25.7 176.6 0 224 0s88.7 25.7 110.9 64l1.1 0c17.7 0 32 14.3 32 32l0 32c0 13.2-8 24.5-19.4 29.4C335.3 213.9 284.6 256 224 256zM152.4 64l143.1 0C278 44.4 252.4 32 224 32s-54 12.4-71.6 32zm25.8 272c-80 0-145 64.3-146.3 144l384 0c-1.2-79.7-66.2-144-146.3-144l-91.4 0zM0 482.3C0 383.8 79.8 304 178.3 304l91.4 0C368.2 304 448 383.8 448 482.3c0 16.4-13.3 29.7-29.7 29.7L29.7 512C13.3 512 0 498.7 0 482.3zM336 96L112 96l0 32 224 0 0-32zm-7.1 341.4c-9.5 0-22.5 11.4-31.7 19.5c-2.6 2.2-4.8 4.2-6.6 5.6c-2.8 2-6.8 .1-6.5-3.5c3.9-36.5 15.9-66.5 35.7-89.5c1.5-1.8 4.9-1.9 6.1 .1c18.9 24.6 29 55 30.1 90.2c0 3.9-4.9 5.7-7.3 2.5c-12.2-17.3-17.6-23-19.9-25z" />
    </Icon>
);

export default UserVisor;