
import { Icon } from "../../index";

/**
 * A component that renders the `person-burst` icon from the `regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/person-burst?s=regular person-burst}
 * @preview ![person-burst](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/regular/person-burst.svg)
 */
const PersonBurst: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path d="M480 96a48 48 0 1 0 0-96 48 48 0 1 0 0 96zm-13.7 80l27.5 0c.8 0 1.5 0 2.3 .1L496 304l-32 0 0-127.9c.7 0 1.5-.1 2.3-.1zM464 488l0-136 32 0 0 136c0 13.3 10.7 24 24 24s24-10.7 24-24l0-264.4 43.1 76.2c6.5 11.5 21.2 15.6 32.7 9.1s15.6-21.2 9.1-32.7L570.3 172.7c-15.6-27.6-44.9-44.7-76.6-44.7l-27.5 0c-31.7 0-61 17.1-76.6 44.7L331.1 276.2c-6.5 11.5-2.5 26.2 9.1 32.7s26.2 2.5 32.7-9.1L416 223.6 416 488c0 13.3 10.7 24 24 24s24-10.7 24-24zM190.9 18.1C188.4 12 182.6 8 176 8s-12.4 4-14.9 10.1l-29.4 74L55.6 68.9c-6.3-1.9-13.1 .2-17.2 5.3s-4.6 12.2-1.4 17.9l39.5 69.1L10.9 206.4c-5.4 3.7-8 10.3-6.5 16.7s6.7 11.2 13.1 12.2l78.7 12.2L90.6 327c-.5 6.5 3.1 12.7 9 15.5s12.9 1.8 17.8-2.6L176 286.1l58.6 53.9c4.8 4.4 11.9 5.5 17.8 2.6s9.5-9 9-15.5l-5.6-79.4 49.9-7.8 23.5-41.6-53.7-37L315 92.2c3.3-5.7 2.7-12.8-1.4-17.9s-10.9-7.2-17.2-5.3L220.3 92.1l-29.4-74z" />
    </Icon>
);

export default PersonBurst;