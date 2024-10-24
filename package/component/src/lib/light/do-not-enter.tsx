
import { Icon } from "../../index";

/**
 * A component that renders the `do-not-enter` icon from the `light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/do-not-enter?s=light do-not-enter}
 * @preview ![do-not-enter](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/light/do-not-enter.svg)
 */
const DoNotEnter: typeof Icon = x => (
    <Icon {...x}>
        <path d="M480 256A224 224 0 1 0 32 256a224 224 0 1 0 448 0zM0 256a256 256 0 1 1 512 0A256 256 0 1 1 0 256zm112-16l0 32c0 4.4 3.6 8 8 8l272 0c4.4 0 8-3.6 8-8l0-32c0-4.4-3.6-8-8-8l-272 0c-4.4 0-8 3.6-8 8zm-32 0c0-22.1 17.9-40 40-40l272 0c22.1 0 40 17.9 40 40l0 32c0 22.1-17.9 40-40 40l-272 0c-22.1 0-40-17.9-40-40l0-32z" />
    </Icon>
);

export default DoNotEnter;