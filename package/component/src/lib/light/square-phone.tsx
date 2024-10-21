
import { Icon } from "../../index";

/**
 * A component that renders the `square-phone` icon from the `light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/square-phone?s=light square-phone}
 * @preview ![square-phone](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/light/square-phone.svg)
 */
const SquarePhone: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M64 64C46.3 64 32 78.3 32 96l0 320c0 17.7 14.3 32 32 32l320 0c17.7 0 32-14.3 32-32l0-320c0-17.7-14.3-32-32-32L64 64zM0 96C0 60.7 28.7 32 64 32l320 0c35.3 0 64 28.7 64 64l0 320c0 35.3-28.7 64-64 64L64 480c-35.3 0-64-28.7-64-64L0 96zm175 44.1l-64 16c-1.8 .4-3 2-3 3.9c0 114.9 97.1 212 212 212c1.8 0 3.4-1.3 3.9-3l16-64c.5-2-.6-4.1-2.6-4.8l-48-16c-1.4-.5-3-.1-4.1 1l-24.4 24.4c-5 5-12.6 6.1-18.8 2.8c-31.5-16.7-57.7-42.9-74.4-74.4c-3.3-6.2-2.1-13.8 2.8-18.8l24.4-24.4c1.1-1.1 1.4-2.7 1-4.1l-16-48c-.7-2-2.7-3.1-4.8-2.6zm35.1-7.5l16 48c4.3 12.9 .9 27.2-8.7 36.8l-15.7 15.7c11.5 18.1 27 33.6 45.1 45.1l15.7-15.7c9.6-9.6 23.9-13 36.8-8.7l48 16c17.8 5.9 28.1 24.6 23.5 42.9l-16 64c-4 16-18.4 27.3-34.9 27.3C187.5 404 76 292.5 76 160c0-16.5 11.2-30.9 27.3-34.9l64-16c18.2-4.6 36.9 5.7 42.9 23.5z" />
    </Icon>
);

export default SquarePhone;