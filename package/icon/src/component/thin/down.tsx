
import { Icon } from "../../index";

/**
 * A component that renders the `down` icon from the `thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/down?s=thin down}
 * @preview ![down](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/thin/down.svg)
 */
const Down: typeof Icon = x => (
    <Icon viewBox="0 0 384 512" {...x}>
        <path d="M192 464c8.1 0 15.9-3.2 21.7-9L362.1 306.6c3.8-3.8 5.9-9 5.9-14.3c0-11.2-9.1-20.3-20.3-20.3L248 272c-4.4 0-8-3.6-8-8l0-192c0-13.3-10.7-24-24-24l-48 0c-13.3 0-24 10.7-24 24l0 192c0 4.4-3.6 8-8 8l-99.7 0C25.1 272 16 281.1 16 292.3c0 5.4 2.1 10.5 5.9 14.3L170.3 455c5.7 5.7 13.5 9 21.7 9zM384 292.3c0 9.6-3.8 18.9-10.6 25.7L225 466.4c-8.7 8.7-20.6 13.7-33 13.7s-24.2-4.9-33-13.7L10.6 317.9C3.8 311.1 0 301.9 0 292.3c0-20 16.2-36.3 36.3-36.3l91.7 0 0-184c0-22.1 17.9-40 40-40l48 0c22.1 0 40 17.9 40 40l0 184 91.7 0c20 0 36.3 16.2 36.3 36.3z" />
    </Icon>
);

export default Down;