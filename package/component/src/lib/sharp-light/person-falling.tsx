
import { Icon } from "../../index";

/**
 * A component that renders the `person-falling` icon from the `sharp-light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/person-falling?s=sharp-light person-falling}
 * @preview ![person-falling](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-light/person-falling.svg)
 */
const PersonFalling: typeof Icon = x => (
    <Icon {...x}>
        <path d="M320 16l0-16L288 0l0 16 0 78.8L103.9 202.2 96 206.8l0 9.2 0 152 0 16 32 0 0-16 0-142.8 7.9-4.6 2.8 4.2 184 280 26.7-17.6L252.7 340.1l57.5-44.7 67-6.7 74.6 89.5 24.6-20.5-80-96-5.4-6.5-8.4 .8-70.3 7L243.2 158l68.9-40.2 7.9-4.6 0-9.2 0-88zM282.5 276.4l-47.4 36.9L165.4 207.2l-1.8-2.8 51.9-30.3 67 102.3zM96 88a24 24 0 1 1 48 0A24 24 0 1 1 96 88zm80 0A56 56 0 1 0 64 88a56 56 0 1 0 112 0z" />
    </Icon>
);

export default PersonFalling;