
import { Icon } from "../../index";

/**
 * A component that renders the `squirrel` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/squirrel?s=sharp-solid squirrel}
 * @preview ![squirrel](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-solid/squirrel.svg)
 */
const Squirrel: typeof Icon = x => (
    <Icon {...x}>
        <path d="M160 299.3c-19.9 22.6-32 52.2-32 84.7l0 128 128 0 64 0 32 0 96 0 32 0 0-64-32 0-16 0c10-13.4 16-30 16-48c0-26.2-12.6-49.4-32-64c-13.4-10-30-16-48-16c-9.4 0-18.3 1.6-26.7 4.5l-10.7-30.2c11.7-4.1 24.3-6.4 37.3-6.4c17.2 0 33.5 3.9 48 10.8l0-58.8 64 0 32-48 0-32-87.9-58.6c-2.5-1.7-5.3-3-8.1-3.9l0-1.5 0-32c-20.4 0-38.2 10.9-48 27.1C358.2 74.9 340.4 64 320 64l0 32 0 32 0 54.2 0 41.8-25.3 38c-2.2-.7-4.4-1.3-6.7-1.9l0-116C288 64.5 223.5 0 144 0S0 64.5 0 144s64.5 144 144 144c5.4 0 10.7-.3 16-.9l0 12.2zM416 144a16 16 0 1 1 0 32 16 16 0 1 1 0-32z" />
    </Icon>
);

export default Squirrel;