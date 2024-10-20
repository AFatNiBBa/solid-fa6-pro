
import { Icon } from "../../index";

/**
 * A component that renders the `calendars` icon from the `sharp-thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/calendars?s=sharp-thin calendars}
 * @preview ![calendars](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-thin/calendars.svg)
 */
const Calendars: typeof Icon = x => (
    <Icon {...x}>
        <path d="M224 0l0 8 0 56 160 0 0-56 0-8 16 0 0 8 0 56 96 0 16 0 0 16 0 96 0 16 0 208 0 16-16 0-384 0-16 0 0-16 0-208 0-16 0-96 0-16 16 0 96 0 0-56 0-8 16 0zM208 120l0-40-96 0 0 96 384 0 0-96-96 0 0 40 0 8-16 0 0-8 0-40L224 80l0 40 0 8-16 0 0-8zm288 72l-384 0 0 208 384 0 0-208zM16 160l32 0 0 16-32 0 0 320 384 0 0-32 16 0 0 32 0 16-16 0L16 512 0 512l0-16L0 176l0-16 16 0z" />
    </Icon>
);

export default Calendars;