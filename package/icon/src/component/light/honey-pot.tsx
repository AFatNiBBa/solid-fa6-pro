
import { Icon } from "../../index";

/**
 * A component that renders the `honey-pot` icon from the `light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/honey-pot?s=light honey-pot}
 * @preview ![honey-pot](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/light/honey-pot.svg)
 */
const HoneyPot: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M128 64l32 0 0 80c0 8.8 7.2 16 16 16s16-7.2 16-16l0-80 32 0 144 0c8.8 0 16 7.2 16 16s-7.2 16-16 16l-48 0-96 0 0 32 96 0c53 0 96 43 96 96L32 224c0-53 43-96 96-96l0-32L80 96c-8.8 0-16-7.2-16-16s7.2-16 16-16l48 0zM447.8 237.2c.2-4.3 .2-8.7 .2-13.2c0-42.9-21.1-80.8-53.4-104c12.9-8.6 21.4-23.3 21.4-40c0-26.5-21.5-48-48-48L176 32 80 32C53.5 32 32 53.5 32 80c0 16.7 8.5 31.4 21.4 40C21.1 143.2 0 181.1 0 224c0 4.5 .1 8.9 .2 13.2C.1 238.1 0 239 0 240c0 1.5 .2 2.9 .6 4.3c7.2 126.3 80.7 199 112.7 224.9c9.3 7.5 21.1 10.9 33.1 10.9l155.3 0c12 0 23.7-3.3 33.1-10.9c32-25.9 105.5-98.6 112.7-224.9c.4-1.4 .6-2.8 .6-4.3c0-1-.1-1.9-.2-2.8zM414.4 256c-2.4 23.5-7.3 44.9-13.9 64c-.2 0-.3 0-.5 0L48 320c-.2 0-.3 0-.5 0C41 300.9 36 279.5 33.6 256l380.8 0zm-27.1 96c-23.4 47.9-55.2 78.1-72.7 92.3c-2.5 2-6.7 3.7-12.9 3.7l-155.3 0c-6.3 0-10.5-1.7-12.9-3.7c-17.5-14.1-49.4-44.4-72.7-92.3l326.6 0z" />
    </Icon>
);

export default HoneyPot;