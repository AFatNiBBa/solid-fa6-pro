
import { Icon } from "../../index";

/**
 * A component that renders the `at` icon from the `thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/at?s=thin at}
 * @preview ![at](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/thin/at.svg)
 */
const At: typeof Icon = x => (
    <Icon {...x}>
        <path d="M256 16C123.5 16 16 123.5 16 256s107.5 240 240 240c4.4 0 8 3.6 8 8s-3.6 8-8 8C114.6 512 0 397.4 0 256S114.6 0 256 0S512 114.6 512 256l0 20c0 46.4-37.6 84-84 84c-36.8 0-68.1-23.6-79.4-56.6C331.3 337 296.4 360 256 360c-57.4 0-104-46.6-104-104s46.6-104 104-104c37.1 0 69.6 19.4 88 48.5l0-32.5c0-4.4 3.6-8 8-8s8 3.6 8 8l0 88 0 20c0 37.6 30.4 68 68 68s68-30.4 68-68l0-20C496 123.5 388.5 16 256 16zm88 240a88 88 0 1 0 -176 0 88 88 0 1 0 176 0z" />
    </Icon>
);

export default At;