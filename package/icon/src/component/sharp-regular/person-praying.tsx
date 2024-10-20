
import { Icon } from "../../index";

/**
 * A component that renders the `person-praying` icon from the `sharp-regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/person-praying?s=sharp-regular person-praying}
 * @preview ![person-praying](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-regular/person-praying.svg)
 */
const PersonPraying: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M224 64a64 64 0 1 1 128 0A64 64 0 1 1 224 64zm-64 80l16 0 48 0 13.4 0 7 11.4 49.4 80.2 82.7-70 18.3-15.5 31 36.6-18.3 15.5-104 88-21.3 18-14.6-23.8-17.2-27.9L194.4 391l114 68.4 11.7 7 0 13.6 0 8 0 24-24 0L56 512l-24 0 0-48 24 0 166.7 0L119.2 401.9c-30.6-18.4-43.2-56.5-29.4-89.4l64-153.7L160 144zm-7.2 222.1l66.6-159.8L210.6 192 192 192 134.1 330.9c-4.6 11-.4 23.7 9.8 29.8l8.9 5.3z" />
    </Icon>
);

export default PersonPraying;