
import { Icon } from "../../index";

/**
 * A component that renders the `binary` icon from the `regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/binary?s=regular binary}
 * @preview ![binary](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/regular/binary.svg)
 */
const Binary: typeof Icon = x => (
    <Icon viewBox="0 0 384 512" {...x}>
        <path d="M328 24l0 152 32 0c13.3 0 24 10.7 24 24s-10.7 24-24 24l-56 0-56 0c-13.3 0-24-10.7-24-24s10.7-24 24-24l32 0 0-118.7-16.4 5.5C251 67 237.4 60.2 233.2 47.6S235.8 21.4 248.4 17.2l48-16C303.7-1.2 311.8 0 318 4.5S328 16.3 328 24zM104 312l0 152 32 0c13.3 0 24 10.7 24 24s-10.7 24-24 24l-56 0-56 0c-13.3 0-24-10.7-24-24s10.7-24 24-24l32 0 0-118.7-16.4 5.5C27 355 13.4 348.2 9.2 335.6S11.8 309.4 24.4 305.2l48-16c7.3-2.4 15.4-1.2 21.6 3.3s10 11.8 10 19.5zM0 72C0 32.2 32.2 0 72 0l48 0c39.8 0 72 32.2 72 72l0 80c0 39.8-32.2 72-72 72l-48 0c-39.8 0-72-32.2-72-72L0 72zM72 48C58.7 48 48 58.7 48 72l0 80c0 13.3 10.7 24 24 24l48 0c13.3 0 24-10.7 24-24l0-80c0-13.3-10.7-24-24-24L72 48zM264 288l48 0c39.8 0 72 32.2 72 72l0 80c0 39.8-32.2 72-72 72l-48 0c-39.8 0-72-32.2-72-72l0-80c0-39.8 32.2-72 72-72zm-24 72l0 80c0 13.3 10.7 24 24 24l48 0c13.3 0 24-10.7 24-24l0-80c0-13.3-10.7-24-24-24l-48 0c-13.3 0-24 10.7-24 24z" />
    </Icon>
);

export default Binary;