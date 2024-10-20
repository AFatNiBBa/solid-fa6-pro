
import { Icon, generic } from "../../index";

/**
 * A component that renders the `party-horn` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/party-horn?s=sharp-duotone-solid party-horn}
 * @preview ![party-horn](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/party-horn.svg)
 */
const PartyHorn: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M32 32a32 32 0 1 0 64 0A32 32 0 1 0 32 32zm6.5 349.1l92.4 92.4 32.6-12.7L51.1 348.5 38.5 381.1zm35.8-92.2c49.6 49.6 99.2 99.2 148.8 148.8L255.7 425C199.4 368.8 143.2 312.6 87 256.3c-4.2 10.9-8.4 21.7-12.7 32.6zm75.8-153.8l33 34.8c5.8-5.5 11.6-11 17.4-16.5l.3-.3 .6-.6c.5-.5 1.2-1.2 2-2c1.6-1.7 3.8-4.1 6.4-7.1c5.1-6.1 11.9-14.8 18.7-25.9C241.9 95.4 256 63 256 24l0-24L208 0l0 24c0 27.5-9.9 51.1-20.5 68.4c-5.2 8.6-10.5 15.3-14.3 19.9c-1.9 2.3-3.5 3.9-4.5 5c-.5 .5-.9 .9-1.1 1.1c-6 5.7-11.8 11.2-17.5 16.6zm96.1 62.1l31 36.6 18.3-15.5 10-8.5c5.8-4.9 13.2-7.5 20.7-7.3c42.5 1.1 78.3-31.7 80.8-74.2l1.8-30c1-16.6 15-29.4 31.6-29c19.4 .5 38.2-6.1 53-18.6l10-8.5-31-36.6-10 8.5c-5.8 4.9-13.2 7.5-20.7 7.3c-42.5-1.1-78.3 31.7-80.8 74.2l-1.8 30c-1 16.6-15 29.4-31.6 29c-19.4-.5-38.2 6.1-53 18.6l-10 8.5-18.3 15.5zm95.9 131.5l34.7 33.2 16.5-17.3c.4-.4 .8-.8 1.3-1.3c1.1-1 2.8-2.6 5.1-4.5c4.6-3.9 11.4-9.1 20-14.3C437.1 313.9 460.8 304 488 304l24 0 0-48-24 0c-38.8 0-71.1 14.1-93.2 27.5c-11.1 6.8-19.9 13.5-26 18.7c-3.1 2.6-5.5 4.8-7.2 6.4c-.8 .8-1.5 1.5-2 1.9l-.6 .6-.3 .3c-5.6 5.8-11.1 11.6-16.6 17.4zm16.6-17.4c5.7 5.6 11.5 11.1 17.3 16.6c-17.3-16.6-17.3-16.6-17.3-16.6zM448 160a32 32 0 1 0 64 0 32 32 0 1 0 -64 0zm0 288a32 32 0 1 0 64 0 32 32 0 1 0 -64 0z" />
        <path d="M0 480l32 32 98.9-38.5L38.5 381.1 0 480zM51.1 348.5L163.5 460.9l59.6-23.2L74.3 288.9 51.1 348.5zM87 256.3L255.7 425 320 400 112 192 87 256.3z" />
    </Icon>
);

export default PartyHorn;