
import { Icon } from "../../index";

/**
 * A component that renders the `alien` icon from the `sharp-thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/alien?s=sharp-thin alien}
 * @preview ![alien](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-thin/alien.svg)
 */
const Alien: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M224 16C109.1 16 16 109.1 16 224c0 81.1 51.8 149.1 106.7 198.1c27.2 24.3 54.4 43.2 74.9 56.2c10.2 6.5 18.7 11.4 24.6 14.6l1.8 1 1.8-1c5.9-3.3 14.4-8.2 24.6-14.6c20.5-12.9 47.7-31.9 74.9-56.2C380.2 373.1 432 305.1 432 224c0-114.9-93.1-208-208-208zM0 224C0 100.3 100.3 0 224 0S448 100.3 448 224c0 176-224 288-224 288S0 400 0 224zm368 0l-32 0c-44.2 0-80 35.8-80 80l32 0c44.2 0 80-35.8 80-80zm-32-16l32 0 16 0 0 16c0 53-43 96-96 96l-32 0-16 0 0-16c0-53 43-96 96-96zM112 224l-32 0c0 44.2 35.8 80 80 80l32 0c0-44.2-35.8-80-80-80zm96 80l0 16-16 0-32 0c-53 0-96-43-96-96l0-16 16 0 32 0c53 0 96 43 96 96z" />
    </Icon>
);

export default Alien;