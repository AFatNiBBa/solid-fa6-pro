
import { Icon } from "../../index";

/**
 * A component that renders the `raygun` icon from the `regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/raygun?s=regular raygun}
 * @preview ![raygun](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/regular/raygun.svg)
 */
const Raygun: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path d="M288 64l-96 0L102.2 4.1C98.2 1.4 93.4 0 88.6 0C75 0 64 11 64 24.6l0 50.2C26.2 92.8 0 131.3 0 176c0 59.3 46.1 107.8 104.4 111.7l-69 137.9c-7.9 15.8-1.5 35 14.3 42.9l80 40c15.8 7.9 35 1.5 42.9-14.3l103-206 .2-.3 12.2 0 0 8c0 13.3 10.7 24 24 24s24-10.7 24-24l0-8 0-48 0-128 0-48 0-8c0-13.3-10.7-24-24-24s-24 10.7-24 24l0 8zM112 112l176 0 0 128-176 0c-35.3 0-64-28.7-64-64s28.7-64 64-64zM392 64c-13.3 0-24 10.7-24 24l0 176c0 13.3 10.7 24 24 24s24-10.7 24-24l0-56 60.9 0 77.1 30.9c4.9 2 10.5 1.4 14.9-1.6s7-7.9 7-13.2l0-96c0-5.3-2.6-10.3-7-13.2s-10-3.6-14.9-1.6L476.9 144 416 144l0-56c0-13.3-10.7-24-24-24zM112 200a24 24 0 1 0 0-48 24 24 0 1 0 0 48zm120-24a24 24 0 1 0 -48 0 24 24 0 1 0 48 0zM222 288.3L136.8 458.5 85.5 432.8l72.3-144.5 64.2 0z" />
    </Icon>
);

export default Raygun;