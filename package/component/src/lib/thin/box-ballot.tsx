
import { Icon } from "../../index";

/**
 * A component that renders the `box-ballot` icon from the `thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/box-ballot?s=thin box-ballot}
 * @preview ![box-ballot](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/thin/box-ballot.svg)
 */
const BoxBallot: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path d="M160 16c-8.8 0-16 7.2-16 16l0 192c0 8.8 7.2 16 16 16l256 0c8.8 0 16-7.2 16-16l0-192c0-8.8-7.2-16-16-16L160 16zM128 32c0-17.7 14.3-32 32-32L416 0c17.7 0 32 14.3 32 32l0 192c0 17.7-14.3 32-32 32l-256 0c-17.7 0-32-14.3-32-32l0-192zM48 160l48 0 0 16-48 0c-17.7 0-32 14.3-32 32l0 112 544 0 0-112c0-17.7-14.3-32-32-32l-48 0 0-16 48 0c26.5 0 48 21.5 48 48l0 112 0 8 0 8 0 128c0 26.5-21.5 48-48 48L48 512c-26.5 0-48-21.5-48-48L0 336l0-8 0-8L0 208c0-26.5 21.5-48 48-48zM560 336L16 336l0 128c0 17.7 14.3 32 32 32l480 0c17.7 0 32-14.3 32-32l0-128z" />
    </Icon>
);

export default BoxBallot;