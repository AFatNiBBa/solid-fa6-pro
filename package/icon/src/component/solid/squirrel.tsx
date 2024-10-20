
import { Icon } from "../../index";

/**
 * A component that renders the `squirrel` icon from the `solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/squirrel?s=solid squirrel}
 * @preview ![squirrel](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/solid/squirrel.svg)
 */
const Squirrel: typeof Icon = x => (
    <Icon {...x}>
        <path d="M160 296.2c0 2-.7 3.9-2 5.4c-18.7 22.3-30 51-30 82.3c0 70.7 57.3 128 128 128l96 0 96 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-16 0c10-13.4 16-30 16-48c0-26.2-12.6-49.4-32-64c-13.4-10-30-16-48-16c-9.4 0-18.3 1.6-26.7 4.5c-8.3 2.9-17.5-1.4-20.4-9.8s1.4-17.5 9.8-20.4c11.7-4.1 24.3-6.4 37.3-6.4c17.2 0 33.5 3.9 48 10.8l0-58.8 21.2 0c26.7 0 51.7-13.4 66.6-35.6L512 192c0-53-43-96-96-96l0-20.8C416 69 411 64 404.8 64c-15.2 0-28.7 7.6-36.8 19.2C359.9 71.6 346.4 64 331.2 64C325 64 320 69 320 75.2L320 96c0 54.4-10.5 108.1-30.7 158c-.9-2-1.3-4.2-1.3-6.4L288 144C288 64.5 223.5 0 144 0S0 64.5 0 144s64.5 144 144 144c2.3 0 4.6-.1 6.9-.2c4.9-.2 9.1 3.5 9.1 8.4zM416 144a16 16 0 1 1 0 32 16 16 0 1 1 0-32z" />
    </Icon>
);

export default Squirrel;