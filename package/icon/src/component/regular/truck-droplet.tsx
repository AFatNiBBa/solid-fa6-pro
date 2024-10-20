
import { Icon } from "../../index";

/**
 * A component that renders the `truck-droplet` icon from the `regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/truck-droplet?s=regular truck-droplet}
 * @preview ![truck-droplet](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/regular/truck-droplet.svg)
 */
const TruckDroplet: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path d="M64 48c-8.8 0-16 7.2-16 16l0 288c0 8.8 7.2 16 16 16l12.8 0c16.6-28.7 47.6-48 83.2-48s66.6 19.3 83.2 48l76.8 0 32 0c8.8 0 16-7.2 16-16l0-288c0-8.8-7.2-16-16-16L64 48zM480 512c-53 0-96-43-96-96l-8 0-24 0-32 0-64 0c0 53-43 96-96 96s-96-43-96-96c-35.3 0-64-28.7-64-64L0 64C0 28.7 28.7 0 64 0L352 0c35.3 0 64 28.7 64 64l0 32 42.7 0c14.9 0 29.1 5.9 39.6 16.4l93.3 93.3c10.5 10.5 16.4 24.7 16.4 39.6L608 368l8 0c13.3 0 24 10.7 24 24s-10.7 24-24 24l-40 0c0 53-43 96-96 96zm78-272c-.1-.1-.2-.3-.4-.4l-93.3-93.3c-1.5-1.5-3.5-2.3-5.7-2.3L416 144l0 96 142 0zM160 464a48 48 0 1 0 0-96 48 48 0 1 0 0 96zm368-48a48 48 0 1 0 -96 0 48 48 0 1 0 96 0zM208 272c-39.8 0-72-29.6-72-66c0-27 39.4-82.9 59.9-110.3c6.1-8.2 18.1-8.2 24.2 0C240.6 123 280 179 280 206c0 36.5-32.2 66-72 66z" />
    </Icon>
);

export default TruckDroplet;