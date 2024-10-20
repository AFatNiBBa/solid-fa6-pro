
import { Icon } from "../../index";

/**
 * A component that renders the `registered` icon from the `light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/registered?s=light registered}
 * @preview ![registered](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/light/registered.svg)
 */
const Registered: typeof Icon = x => (
    <Icon {...x}>
        <path d="M256 32a224 224 0 1 1 0 448 224 224 0 1 1 0-448zm0 480A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM160 176l0 96 0 96c0 8.8 7.2 16 16 16s16-7.2 16-16l0-80 71.4 0 59.3 88.9c4.9 7.4 14.8 9.3 22.2 4.4s9.3-14.8 4.4-22.2l-50.5-75.7c31-11 53.2-40.6 53.2-75.4c0-44.2-35.8-80-80-80l-64 0c-26.5 0-48 21.5-48 48zm32 80l0-80c0-8.8 7.2-16 16-16l64 0c26.5 0 48 21.5 48 48s-21.5 48-48 48l-80 0z" />
    </Icon>
);

export default Registered;