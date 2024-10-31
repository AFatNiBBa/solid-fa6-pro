
import { Icon } from "../../index";

/**
 * A component that renders the `skull` icon from the `regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/skull?s=regular skull}
 * @preview ![skull](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/regular/skull.svg)
 */
const Skull: typeof Icon = x => (
    <Icon {...x}>
        <path d="M368 400c-.4-16 7.3-31.2 20.4-40.4C436.1 326.2 464 276.9 464 224c0-91.4-86.9-176-208-176S48 132.6 48 224c0 52.9 27.9 102.2 75.6 135.6c13.1 9.2 20.8 24.4 20.4 40.4c0 0 0 0 0 0l0 64 48 0 0-24c0-13.3 10.7-24 24-24s24 10.7 24 24l0 24 32 0 0-24c0-13.3 10.7-24 24-24s24 10.7 24 24l0 24 48 0 0-64s0 0 0 0zm48-1.1c0 .4 0 .7 0 1.1l0 64c0 26.5-21.5 48-48 48l-224 0c-26.5 0-48-21.5-48-48l0-64c0-.4 0-.7 0-1.1C37.5 357.8 0 294.7 0 224C0 100.3 114.6 0 256 0S512 100.3 512 224c0 70.7-37.5 133.8-96 174.9zM112 256a56 56 0 1 1 112 0 56 56 0 1 1 -112 0zm232-56a56 56 0 1 1 0 112 56 56 0 1 1 0-112z" />
    </Icon>
);

export default Skull;