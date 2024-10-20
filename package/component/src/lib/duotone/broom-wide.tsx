
import { Icon, generic } from "../../index";

/**
 * A component that renders the `broom-wide` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/broom-wide?s=duotone broom-wide}
 * @preview ![broom-wide](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/duotone/broom-wide.svg)
 */
const BroomWide: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M329.4 137.4c15.1 15.1 30.2 30.2 45.3 45.3l128-128c6.2-6.2 9.4-14.4 9.4-22.6s-3.1-16.4-9.4-22.6S488.2 0 480 0s-16.4 3.1-22.6 9.4l-128 128z" />
        <path d="M313.6 121.6c-15.2-15.2-38.5-18.4-57.3-8l-32.5 18L380.4 288.1l18-32.5c10.4-18.7 7.1-42.1-8-57.3l-76.8-76.8zM187.5 151.8L16.4 246.9C6.3 252.5 0 263.2 0 274.8c0 8.5 3.4 16.6 9.3 22.6l43.2 43.2c2.1 2.1 5.3 2.9 8.2 1.9l52.1-17.4c6.3-2.1 12.2 3.9 10.1 10.1l-17.4 52.1c-1 2.9-.2 6 1.9 8.2L214.7 502.7c6 6 14.1 9.3 22.6 9.3c11.6 0 22.3-6.3 27.9-16.4l95.1-171.1L187.5 151.8z" />
    </Icon>
);

export default BroomWide;