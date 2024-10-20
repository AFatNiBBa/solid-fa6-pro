
import { Icon, generic } from "../../index";

/**
 * A component that renders the `person-running` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/person-running?s=duotone person-running}
 * @preview ![person-running](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/duotone/person-running.svg)
 */
const PersonRunning: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path class={generic.secondary} d="M0 384c0 17.7 14.3 32 32 32l69.6 0c19 0 36.2-11.2 43.9-28.5l24.6-55.4-5.7-3.6c-25.1-15.7-36.1-46.5-26.8-74.5c2.8-8.5 5.7-17 8.5-25.6L91.2 352 32 352c-17.7 0-32 14.3-32 32z" />
        <path d="M272 0a48 48 0 1 1 0 96 48 48 0 1 1 0-96zM163.2 160c-14.1 0-27.5 5.6-37.5 15.5l-23.1 23.1c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3l23.1-23.1C102.4 108.3 132.2 96 163.2 96c11.7 0 23.3 1.7 34.4 5.2l48.7 15c36.4 11.2 65.9 38 80.5 73.1l6.3 15c5 11.9 16.6 19.7 29.5 19.7l21.3 0c17.7 0 32 14.3 32 32s-14.3 32-32 32l-21.3 0c-38.8 0-73.7-23.3-88.6-59.1l-5.1-12.3L238 299l56.7 35.4c18.1 11.3 26.6 33.3 20.7 53.9L286.8 488.8c-4.9 17-22.6 26.8-39.6 22s-26.8-22.6-22-39.6l25.4-88.8-86.2-53.9c-25.1-15.7-36.1-46.5-26.8-74.5l31.2-93.7c-1.9-.2-3.7-.3-5.6-.3z" />
    </Icon>
);

export default PersonRunning;