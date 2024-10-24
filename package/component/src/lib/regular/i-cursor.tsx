
import { Icon } from "../../index";

/**
 * A component that renders the `i-cursor` icon from the `regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/i-cursor?s=regular i-cursor}
 * @preview ![i-cursor](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/regular/i-cursor.svg)
 */
const ICursor: typeof Icon = x => (
    <Icon viewBox="0 0 256 512" {...x}>
        <path d="M.1 22.2c-1 13.2 8.9 24.8 22.1 25.8l15.4 1.2C75 52 104 83.3 104 120.9L104 232l-40 0c-13.3 0-24 10.7-24 24s10.7 24 24 24l40 0 0 111.1c0 37.6-29 68.9-66.5 71.8l-15.4 1.2C8.9 465.1-.9 476.6 .1 489.8s12.6 23.1 25.8 22.1l15.4-1.2c35.7-2.7 66.7-20.9 86.8-47.6c20.1 26.7 51.1 44.9 86.8 47.6l15.4 1.2c13.2 1 24.8-8.9 25.8-22.1s-8.9-24.8-22.1-25.8l-15.4-1.2C181 460 152 428.7 152 391.1L152 280l40 0c13.3 0 24-10.7 24-24s-10.7-24-24-24l-40 0 0-111.1c0-37.6 29-68.9 66.5-71.8l15.4-1.2c13.2-1 23.1-12.6 22.1-25.8S243.4-.9 230.2 .1L214.8 1.3C179.1 4 148.1 22.2 128 48.9C107.9 22.2 76.9 4 41.2 1.3L25.8 .1C12.6-.9 1.1 8.9 .1 22.2z" />
    </Icon>
);

export default ICursor;