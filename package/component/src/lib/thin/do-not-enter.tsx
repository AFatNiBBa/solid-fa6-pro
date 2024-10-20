
import { Icon } from "../../index";

/**
 * A component that renders the `do-not-enter` icon from the `thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/do-not-enter?s=thin do-not-enter}
 * @preview ![do-not-enter](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/thin/do-not-enter.svg)
 */
const DoNotEnter: typeof Icon = x => (
    <Icon {...x}>
        <path d="M496 256A240 240 0 1 0 16 256a240 240 0 1 0 480 0zM0 256a256 256 0 1 1 512 0A256 256 0 1 1 0 256zm96-16l0 32c0 8.8 7.2 16 16 16l288 0c8.8 0 16-7.2 16-16l0-32c0-8.8-7.2-16-16-16l-288 0c-8.8 0-16 7.2-16 16zm-16 0c0-17.7 14.3-32 32-32l288 0c17.7 0 32 14.3 32 32l0 32c0 17.7-14.3 32-32 32l-288 0c-17.7 0-32-14.3-32-32l0-32z" />
    </Icon>
);

export default DoNotEnter;