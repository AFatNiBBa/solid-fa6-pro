
import { Icon } from "../../index";

/**
 * A component that renders the `forklift` icon from the `thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/forklift?s=thin forklift}
 * @preview ![forklift](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/thin/forklift.svg)
 */
const Forklift: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path d="M144 40c0-13.3 10.7-24 24-24l100.5 0c9 0 17.2 5 21.3 13l103 198.7c2 3.9 6.9 5.5 10.8 3.4s5.5-6.9 3.4-10.8L304.1 21.6C297.2 8.3 283.5 0 268.5 0L168 0c-22.1 0-40 17.9-40 40l0 88c0 4.4 3.6 8 8 8s8-3.6 8-8l0-88zM96 336a80 80 0 1 1 0 160 80 80 0 1 1 0-160zm0 176c53 0 96-43 96-96l64 0c0 53 43 96 96 96s96-43 96-96c0-28.4-12.4-54-32-71.6l0-48.4c0-22.1-17.9-40-40-40l-112 0L159.3 172.3c-9.9-7.9-22.3-12.3-35-12.3L64 160c-35.3 0-64 28.7-64 64L0 400l0 16c0 53 43 96 96 96zm0-192c-33.4 0-62.8 17-80 42.9L16 224c0-26.5 21.5-48 48-48l60.4 0c9.1 0 17.9 3.1 25 8.8L254 268.5c2.8 2.3 6.4 3.5 10 3.5l112 0c13.3 0 24 10.7 24 24l0 36.8s0 0 0 0c-14.1-8.2-30.5-12.8-48-12.8c-47.6 0-87.1 34.6-94.7 80l-66.7 0c-7.6-45.4-47.1-80-94.7-80zm256 16a80 80 0 1 1 0 160 80 80 0 1 1 0-160zM496 8c0-4.4-3.6-8-8-8s-8 3.6-8 8l0 432c0 4.4 3.6 8 8 8l144 0c4.4 0 8-3.6 8-8s-3.6-8-8-8l-136 0L496 8z" />
    </Icon>
);

export default Forklift;