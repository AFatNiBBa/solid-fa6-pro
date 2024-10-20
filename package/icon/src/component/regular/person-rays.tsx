
import { Icon } from "../../index";

/**
 * A component that renders the `person-rays` icon from the `regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/person-rays?s=regular person-rays}
 * @preview ![person-rays](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/regular/person-rays.svg)
 */
const PersonRays: typeof Icon = x => (
    <Icon {...x}>
        <path d="M256 96a48 48 0 1 0 0-96 48 48 0 1 0 0 96zm-13.7 80l27.5 0c.8 0 1.5 0 2.3 .1L272 304l-32 0 0-127.9c.7 0 1.5-.1 2.3-.1zM240 488l0-136 32 0 0 136c0 13.3 10.7 24 24 24s24-10.7 24-24l0-264.4 43.1 76.2c6.5 11.5 21.2 15.6 32.7 9.1s15.6-21.2 9.1-32.7L346.3 172.7c-15.6-27.6-44.9-44.7-76.6-44.7l-27.5 0c-31.7 0-61 17.1-76.6 44.7L107.1 276.2c-6.5 11.5-2.5 26.2 9.1 32.7s26.2 2.5 32.7-9.1L192 223.6 192 488c0 13.3 10.7 24 24 24s24-10.7 24-24zM7 7C-2.3 16.4-2.3 31.6 7 41l80 80c9.4 9.4 24.6 9.4 33.9 0s9.4-24.6 0-33.9L41 7C31.6-2.3 16.4-2.3 7 7zM505 7c-9.4-9.4-24.6-9.4-33.9 0L391 87c-9.4 9.4-9.4 24.6 0 33.9s24.6 9.4 33.9 0l80-80c9.4-9.4 9.4-24.6 0-33.9zM41 505l80-80c9.4-9.4 9.4-24.6 0-33.9s-24.6-9.4-33.9 0L7 471c-9.4 9.4-9.4 24.6 0 33.9s24.6 9.4 33.9 0zm464 0c9.4-9.4 9.4-24.6 0-33.9l-80-80c-9.4-9.4-24.6-9.4-33.9 0s-9.4 24.6 0 33.9l80 80c9.4 9.4 24.6 9.4 33.9 0z" />
    </Icon>
);

export default PersonRays;