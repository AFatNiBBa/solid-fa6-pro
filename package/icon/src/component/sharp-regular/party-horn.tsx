
import { Icon } from "../../index";

/**
 * A component that renders the `party-horn` icon from the `sharp-regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/party-horn?s=sharp-regular party-horn}
 * @preview ![party-horn](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-regular/party-horn.svg)
 */
const PartyHorn: typeof Icon = x => (
    <Icon {...x}>
        <path d="M32 32a32 32 0 1 1 64 0A32 32 0 1 1 32 32zM448 160a32 32 0 1 1 64 0 32 32 0 1 1 -64 0zm32 256a32 32 0 1 1 0 64 32 32 0 1 1 0-64zM150.1 136l17-17 8.3-8.3c16.7-16.7 27.2-38.6 29.8-62.1l3-27.4 47.7 5.3-3 27.4c-3.8 34.3-19.2 66.3-43.6 90.7L201 153l-17 17L150.1 136zM359 311l8.2-8.3c24.4-24.4 56.4-39.8 90.7-43.6l27.4-3 5.3 47.7-27.4 3c-23.5 2.6-45.4 13.1-62.1 29.8L393 345l-17 17L342.1 328l17-17zM503.5 42.3l-10 8.5c-14.8 12.5-33.7 19.1-53 18.6c-16.6-.4-30.6 12.4-31.6 29l-1.8 30c-2.5 42.5-38.3 75.3-80.8 74.2c-7.6-.2-15 2.4-20.7 7.3l-10 8.5-18.3 15.5-31-36.6 18.3-15.5 10-8.5c14.8-12.5 33.7-19.1 53-18.6c16.6 .4 30.6-12.4 31.6-29l1.8-30c2.5-42.5 38.3-75.3 80.8-74.2c7.6 .2 15-2.4 20.7-7.3l10-8.5 31 36.6zM63.9 448.1l79.4-30.9L94.8 368.7 63.9 448.1zM234 381.9l-104-104-16.3 41.9 78.4 78.4L234 381.9zM93 240.9L112 192l37.1 37.1L282.9 362.9 320 400l-48.9 19L32 512 0 480 93 240.9z" />
    </Icon>
);

export default PartyHorn;