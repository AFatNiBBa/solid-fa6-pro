
import { Icon, generic } from "../../index";

/**
 * A component that renders the `person-hiking` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/person-hiking?s=sharp-duotone-solid person-hiking}
 * @preview ![person-hiking](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/person-hiking.svg)
 */
const PersonHiking: typeof Icon = x => (
    <Icon viewBox="0 0 384 512" {...x}>
        <path class={generic.secondary} d="M0 272l96 16L144 96 48 96 0 272zM336 160l0 24c0 8 0 16 0 24c0 21.3 0 42.7 0 64l0 216 0 24 48 0 0-24 0-304 0-24-48 0z" />
        <path d="M192 48a48 48 0 1 1 96 0 48 48 0 1 1 -96 0zm-23.5 69.1l31.3 7.8 48 12 12 3 6.9 10.3L305.1 208l30.9 0 0 64-48 0-17.1 0-9.5-14.2-18.1-27.1L224.2 307l54.4 54.4 9.4 9.4 0 13.3 0 96 0 32-64 0 0-32 0-82.7-69.7-69.7-1.1-.3 .2-.7-3.3-3.3c-15.8-15.8-22.2-38.6-16.9-60.3l27.8-114.5 7.6-31.3zM117.3 334c3 4.2 6.4 8.2 10.1 11.9l41.9 41.9L136.7 512l-66.2 0 46.8-178z" />
    </Icon>
);

export default PersonHiking;