
import { Icon, generic } from "../../index";

/**
 * A component that renders the `table-tennis-paddle-ball` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/table-tennis-paddle-ball?s=sharp-duotone-solid table-tennis-paddle-ball}
 * @preview ![table-tennis-paddle-ball](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/table-tennis-paddle-ball.svg)
 */
const TableTennisPaddleBall: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M320 416a96 96 0 1 0 192 0 96 96 0 1 0 -192 0z" />
        <path d="M301.4 358.8c21-42 64.4-70.8 114.6-70.8c29 0 55.8 9.6 77.2 25.9c35.9-82 20.3-181.2-46.8-248.3c-87.5-87.5-229.3-87.5-316.8 0L68.9 126.3 301.4 358.8zm-11.3 33.9L46.3 148.9 32 163.2 32 272l75.4 75.4L0 448l64 64L164.6 404.6 240 480l65.1 0c-10.9-18.8-17.1-40.7-17.1-64c0-7.9 .7-15.7 2.1-23.3z" />
    </Icon>
);

export default TableTennisPaddleBall;