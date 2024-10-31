
import { Icon, generic } from "../../index";

/**
 * A component that renders the `party-horn` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/party-horn?s=duotone party-horn}
 * @preview ![party-horn](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/duotone/party-horn.svg)
 */
const PartyHorn: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M32 32a32 32 0 1 0 64 0A32 32 0 1 0 32 32zm3.9 346.5c32.5 32.5 65.1 65.1 97.6 97.6c11-4.1 21.9-8.2 32.9-12.3C127 424.4 87.6 385 48.2 345.6c-4.1 11-8.2 21.9-12.3 32.9zm34.9-93.1c51.9 51.9 103.9 103.9 155.8 155.8l32.9-12.3L83.1 252.5c-4.1 11-8.2 21.9-12.3 32.9zM167 119c-9.4 9.4-9.4 24.6 0 33.9s24.6 9.4 33.9 0l8.3-8.3C233.6 120.3 249 88.3 252.8 54l3-27.4c1.5-13.2-8-25-21.2-26.5c-.9-.1-1.8-.1-2.7-.1c-12.1 0-22.5 9.1-23.8 21.4l-3 27.4c-2.6 23.5-13.1 45.4-29.8 62.1L167 119zm94.6 96.5c8.6 10.1 23.7 11.4 33.8 2.8l10-8.5c5.8-4.9 13.2-7.5 20.7-7.3c42.5 1.1 78.3-31.7 80.8-74.2l1.8-30c1-16.6 15-29.4 31.6-29c19.4 .5 38.2-6.1 53-18.6l10-8.5c10.1-8.6 11.4-23.7 2.8-33.8s-23.7-11.4-33.8-2.8l-10 8.5c-5.8 4.9-13.2 7.5-20.7 7.3c-42.5-1.1-78.3 31.7-80.8 74.2l-1.8 30c-1 16.6-15 29.4-31.6 29c-19.4-.5-38.2 6.1-53 18.6l-10 8.5c-10.1 8.6-11.4 23.7-2.8 33.8zM359 311c-9.4 9.4-9.4 24.6 0 33.9s24.6 9.4 33.9 0l8.3-8.3c16.7-16.7 38.6-27.2 62.1-29.8l27.4-3c12.3-1.4 21.4-11.8 21.4-23.8c0-.9 0-1.8-.1-2.7c-1.5-13.2-13.3-22.7-26.5-21.2l-27.4 3c-34.3 3.8-66.3 19.2-90.7 43.6L359 311zm89-151a32 32 0 1 0 64 0 32 32 0 1 0 -64 0zm0 288a32 32 0 1 0 64 0 32 32 0 1 0 -64 0z" />
        <path d="M121.2 192.7c10.6-2.3 21.7 1 29.4 8.6l160 160c7.7 7.7 10.9 18.8 8.6 29.4s-9.9 19.4-20 23.2l-39.7 14.9L83.1 252.5 98 212.8c3.8-10.2 12.6-17.7 23.2-20zM70.8 285.4L226.6 441.2l-60.2 22.6L48.2 345.6l22.6-60.2zm62.7 190.7L43.2 510c-11.7 4.4-25 1.5-33.9-7.3S-2.4 480.5 2 468.8l33.8-90.3 97.6 97.6z" />
    </Icon>
);

export default PartyHorn;