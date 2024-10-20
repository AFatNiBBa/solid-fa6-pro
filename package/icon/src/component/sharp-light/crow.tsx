
import { Icon } from "../../index";

/**
 * A component that renders the `crow` icon from the `sharp-light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/crow?s=sharp-light crow}
 * @preview ![crow](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-light/crow.svg)
 */
const Crow: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path d="M63.2 384l-12.1 9.2L25.7 412.7 6.3 387.3l25.4-19.5 12.1-9.2 8.6-6.6L320 147l0-51c0-53 43-96 96-96c28.4 0 54 12.4 71.6 32L592 32l48 48 0 32L512 144l0 48c0 78.8-47.5 146.5-115.4 176.1L455.9 512l-34.6 0-55-133.6C351.4 382.1 336 384 320 384l-12.8 0 52.7 128-34.6 0L272.6 384 63.2 384zM512 96l0 15 91-22.8L578.7 64l-72.2 0c3.5 10 5.5 20.8 5.5 32zM352 162.8l0 11.6c0 83.1-58.2 154.9-139.5 172.2L186.8 352 320 352c88.4 0 160-71.6 160-160l0-64 0-32c0-35.3-28.7-64-64-64s-64 28.7-64 64l0 51 0 5 0 10.8zm-219.3 168l73.2-15.5C268 302.1 313.6 250 319.4 187.8l-186.7 143zM392 96a24 24 0 1 1 48 0 24 24 0 1 1 -48 0z" />
    </Icon>
);

export default Crow;