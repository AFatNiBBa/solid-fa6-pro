
import { Icon, generic } from "../../index";

/**
 * A component that renders the `cup-togo` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/cup-togo?s=duotone cup-togo}
 * @preview ![cup-togo](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/duotone/cup-togo.svg)
 */
const CupTogo: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path class={generic.secondary} d="M48 128l352 0-8.7 104L56.7 232 48 128zM70 392l308 0-5.1 61.3c-2.8 33.2-30.5 58.7-63.8 58.7l-170.2 0c-33.3 0-61-25.5-63.8-58.7c-1.7-20.4-3.4-40.9-5.1-61.3z" />
        <path d="M55.2 17.7L32 64C14.3 64 0 78.3 0 96s14.3 32 32 32l384 0c17.7 0 32-14.3 32-32s-14.3-32-32-32L392.8 17.7C387.4 6.8 376.3 0 364.2 0L83.8 0C71.7 0 60.6 6.8 55.2 17.7zM378 392l13.3-160L56.7 232 70 392l308 0z" />
    </Icon>
);

export default CupTogo;