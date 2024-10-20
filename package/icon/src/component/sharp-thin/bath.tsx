
import { Icon } from "../../index";

/**
 * A component that renders the `bath` icon from the `sharp-thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/bath?s=sharp-thin bath}
 * @preview ![bath](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-thin/bath.svg)
 */
const Bath: typeof Icon = x => (
    <Icon {...x}>
        <path d="M32 0l8 0 64 0 3.3 0 2.3 2.3 45.4 45.4C167.4 37.9 183 32 200 32c23.1 0 43.7 10.9 56.9 27.8l1.5-1.5 5.7-5.7L275.3 64l-5.7 5.7-104 104-5.7 5.7L148.7 168l5.7-5.7 1.5-1.5C138.9 147.7 128 127.1 128 104c0-17 5.9-32.6 15.7-44.9L100.7 16 48 16l0 256 416 0 16 0 24 0 8 0 0 16-8 0-24 0-16 0L48 288l-16 0L8 288l-8 0 0-16 8 0 24 0L32 8l0-8zm0 320l16 0 0 48c0 53 43 96 96 96l224 0c53 0 96-43 96-96l0-48 16 0 0 48c0 38.1-19 71.7-48 91.9l0 44.1 0 8-16 0 0-8 0-34.8c-14.5 6.9-30.8 10.8-48 10.8l-224 0c-17.2 0-33.5-3.9-48-10.8L96 504l0 8-16 0 0-8 0-44.1C51 439.7 32 406.1 32 368l0-48zM200 48c-30.9 0-56 25.1-56 56c0 18.7 9.2 35.3 23.3 45.4l78.2-78.2C235.3 57.2 218.7 48 200 48z" />
    </Icon>
);

export default Bath;