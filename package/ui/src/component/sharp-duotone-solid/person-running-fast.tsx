
import { Icon, generic } from "../../index";

/**
 * A component that renders the `person-running-fast` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/person-running-fast?s=sharp-duotone-solid person-running-fast}
 * @preview ![person-running-fast](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/person-running-fast.svg)
 */
const PersonRunningFast: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M0 95.8l0 32 16 0 112 0 16 0 0-32-16 0-112 0-16 0zm0 64l0 32 16 0 64 0 16 0 0-32-16 0-64 0-16 0zm0 64l0 32 16 0 128 0 16 0 0-32-16 0-128 0-16 0zM96 352l0 64 32 0 80 0 20.8 0 8.4-19 28.9-64.9c-1.9-1.2-3.8-2.4-5.7-3.6c-25.1-15.7-36.1-46.5-26.8-74.5c2.8-8.5 5.7-17 8.5-25.6L187.2 352 128 352l-32 0z" />
        <path d="M368 96a48 48 0 1 0 0-96 48 48 0 1 0 0 96zM224 96l-13.3 0-9.4 9.4-48 48-8 8 45.3 45.3 8-8L237.3 160l27.7 0-31.3 94c-9.3 28 1.7 58.8 26.8 74.5l86.2 53.9-9.4 32.8-16 56L309.6 512l66.6 0 6.6-23.2 16-56 16-56 6.6-23.2L401 340.9 334 299l29-77.4 24.3 48.6 8.8 17.7 19.8 0 48 0 32 0 0-64-32 0-28.2 0-39.2-78.3-5.4-10.9-11.3-4.5-80-32L294.2 96 288 96l-64 0z" />
    </Icon>
);

export default PersonRunningFast;