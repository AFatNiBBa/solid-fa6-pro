
import { Icon } from "../../index";

/**
 * A component that renders the `route` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/route?s=sharp-solid route}
 * @preview ![route](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-solid/route.svg)
 */
const Route: typeof Icon = x => (
    <Icon {...x}>
        <path d="M416 256s96-96 96-160c0-53-43-96-96-96s-96 43-96 96c0 29.4 20.2 65.5 42.1 96L256 192l-32 0 0 32 0 128 0 32 32 0 192 0 0 64-259.4 0c-6.2 9.6-12.6 18.8-19 27.2c-10.7 14.2-21.3 26.9-30 36.8L480 512l32 0 0-32 0-128 0-32-32 0-192 0 0-64 128 0zm0-192a32 32 0 1 1 0 64 32 32 0 1 1 0-64zM149.9 448c21.9-30.5 42.1-66.6 42.1-96c0-53-43-96-96-96s-96 43-96 96c0 64 96 160 96 160s3.5-3.5 9.2-9.6c.4-.4 .7-.8 1.1-1.2c3.3-3.5 7.1-7.8 11.4-12.8c.2-.2 .4-.4 .6-.6c9.4-10.8 20.7-24.6 31.6-39.8zM96 320a32 32 0 1 1 0 64 32 32 0 1 1 0-64z" />
    </Icon>
);

export default Route;