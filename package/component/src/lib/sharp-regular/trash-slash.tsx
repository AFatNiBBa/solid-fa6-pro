
import { Icon } from "../../index";

/**
 * A component that renders the `trash-slash` icon from the `sharp-regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/trash-slash?s=sharp-regular trash-slash}
 * @preview ![trash-slash](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-regular/trash-slash.svg)
 */
const TrashSlash: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path d="M243.2 0L256 0 384 0l12.8 0L404 10.7 450.2 80l13.7 0L512 80l32 0 0 48-35.6 0L491.4 358.7 620.9 459.3l19 14.7-29.4 37.9-19-14.7L19 52.7 0 38 29.4 .1l19 14.7 84 65.2 43.8 0 13.7 0L236 10.7 243.2 0zm-49 128L445.8 323.4 460.3 128l-266.1 0zm243 312.4l45.5 35.8L480 512l-320 0L137.2 204.1l51.1 40.3L204.6 464l230.8 0 1.7-23.6zM247.5 80l145 0L371.2 48 268.8 48 247.5 80z" />
    </Icon>
);

export default TrashSlash;