
import { Icon } from "../../index";

/**
 * A component that renders the `worm` icon from the `thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/worm?s=thin worm}
 * @preview ![worm](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/thin/worm.svg)
 */
const Worm: typeof Icon = x => (
    <Icon {...x}>
        <path d="M432 178.3l0-13.9-13.7-2-54.4-7.8c-34.3-4.9-59.8-34.3-59.8-69C304 47.2 335.2 16 373.7 16l48.7 0C463 16 496 49 496 89.6l0 86.4 0 16 0 168c0 75.1-60.9 136-136 136s-136-60.9-136-136l0-48c0-39.8-32.2-72-72-72s-72 32.2-72 72l0 152c0 17.7-14.3 32-32 32s-32-14.3-32-32l0-152c0-75.1 60.9-136 136-136s136 60.9 136 136l0 48c0 39.8 32.2 72 72 72s72-32.2 72-72l0-181.7zM373.7 0C326.4 0 288 38.4 288 85.7c0 42.6 31.4 78.8 73.6 84.8l54.4 7.8L416 360c0 30.9-25.1 56-56 56s-56-25.1-56-56l0-48c0-83.9-68.1-152-152-152S0 228.1 0 312L0 464c0 26.5 21.5 48 48 48s48-21.5 48-48l0-152c0-30.9 25.1-56 56-56s56 25.1 56 56l0 48c0 83.9 68.1 152 152 152s152-68.1 152-152l0-168 0-16 0-86.4C512 40.1 471.9 0 422.4 0L373.7 0zM400 96a16 16 0 1 0 0-32 16 16 0 1 0 0 32z" />
    </Icon>
);

export default Worm;