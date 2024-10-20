
import { Icon } from "../../index";

/**
 * A component that renders the `sprinkler` icon from the `solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/sprinkler?s=solid sprinkler}
 * @preview ![sprinkler](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/solid/sprinkler.svg)
 */
const Sprinkler: typeof Icon = x => (
    <Icon {...x}>
        <path d="M24 0a24 24 0 1 1 0 48A24 24 0 1 1 24 0zM0 128a24 24 0 1 1 48 0A24 24 0 1 1 0 128zM0 232a24 24 0 1 1 48 0A24 24 0 1 1 0 232zM64 72a24 24 0 1 1 48 0A24 24 0 1 1 64 72zm24 88a24 24 0 1 1 0 48 24 24 0 1 1 0-48zm40-32a24 24 0 1 1 48 0 24 24 0 1 1 -48 0zm360 80a24 24 0 1 1 0 48 24 24 0 1 1 0-48zm24-80a24 24 0 1 1 -48 0 24 24 0 1 1 48 0zM488 0a24 24 0 1 1 0 48 24 24 0 1 1 0-48zM448 72a24 24 0 1 1 -48 0 24 24 0 1 1 48 0zm-24 88a24 24 0 1 1 0 48 24 24 0 1 1 0-48zm-40-32a24 24 0 1 1 -48 0 24 24 0 1 1 48 0zM256 64c17.7 0 32 14.3 32 32l0 160 100.2 0c15.3 0 27.8 12.4 27.8 27.8c0 7.8-3.3 15.2-9 20.5L320 384l0 96c0 17.7-14.3 32-32 32l-64 0c-17.7 0-32-14.3-32-32l0-96-87-79.7c-5.7-5.3-9-12.7-9-20.5c0-15.3 12.4-27.8 27.8-27.8L224 256l0-160c0-17.7 14.3-32 32-32z" />
    </Icon>
);

export default Sprinkler;