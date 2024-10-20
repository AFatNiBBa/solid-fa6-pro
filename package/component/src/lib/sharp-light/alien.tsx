
import { Icon } from "../../index";

/**
 * A component that renders the `alien` icon from the `sharp-light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/alien?s=sharp-light alien}
 * @preview ![alien](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-light/alien.svg)
 */
const Alien: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M224 32C118 32 32 118 32 224c0 74.2 47.5 138.1 101.3 186.1c26.3 23.5 52.8 42 72.8 54.6c6.9 4.3 13 8 17.9 10.8c5-2.9 11-6.5 17.9-10.8c19.9-12.6 46.4-31 72.8-54.6C368.5 362.1 416 298.2 416 224c0-106-86-192-192-192zM0 224C0 100.3 100.3 0 224 0S448 100.3 448 224c0 176-224 288-224 288S0 400 0 224zm352 16l-32 0c-26.5 0-48 21.5-48 48l32 0c26.5 0 48-21.5 48-48zm-32-32l32 0 32 0 0 32c0 44.2-35.8 80-80 80l-32 0-32 0 0-32c0-44.2 35.8-80 80-80zM128 240l-32 0c0 26.5 21.5 48 48 48l32 0c0-26.5-21.5-48-48-48zm80 48l0 32-32 0-32 0c-44.2 0-80-35.8-80-80l0-32 32 0 32 0c44.2 0 80 35.8 80 80z" />
    </Icon>
);

export default Alien;