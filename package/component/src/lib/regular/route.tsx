
import { Icon } from "../../index";

/**
 * A component that renders the `route` icon from the `regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/route?s=regular route}
 * @preview ![route](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/regular/route.svg)
 */
const Route: typeof Icon = x => (
    <Icon {...x}>
        <path d="M438.6 155.7c-7.2 11.5-15 22.6-22.6 32.7c-7.5-10.1-15.4-21.2-22.6-32.7C375.7 127.3 368 106.3 368 96c0-26.5 21.5-48 48-48s48 21.5 48 48c0 10.3-7.7 31.3-25.4 59.7zM427.4 251C452.9 221.1 512 146.2 512 96c0-53-43-96-96-96s-96 43-96 96c0 33.3 25.9 77.3 50.8 112L328 208c-48.6 0-88 39.4-88 88s39.4 88 88 88l96 0c22.1 0 40 17.9 40 40s-17.9 40-40 40l-246.2 0c-2.7 3.8-5.5 7.6-8.2 11.2c-10.7 14.2-21.3 26.9-30 36.8L424 512c48.6 0 88-39.4 88-88s-39.4-88-88-88l-96 0c-22.1 0-40-17.9-40-40s17.9-40 40-40l84.9 0c5.1 1.1 10.7-.6 14.5-5zM118.9 408.4c-7.3 11-15.3 21.7-22.9 31.2c-7.6-9.5-15.6-20.2-22.9-31.2C55.4 381.7 48 361.9 48 352c0-26.5 21.5-48 48-48s48 21.5 48 48c0 9.9-7.4 29.7-25.1 56.4zm19 55.6c25.9-33.1 54.1-77.3 54.1-112c0-53-43-96-96-96s-96 43-96 96c0 50.5 59.8 121 85 148.4c6 6.5 16 6.5 21.9 0c.1-.1 .2-.2 .3-.3c.3-.3 .6-.7 .9-1c2.8-3.1 6-6.7 9.5-10.7c.1-.1 .1-.1 .2-.2c6.1-7 13-15.2 20-24.2z" />
    </Icon>
);

export default Route;