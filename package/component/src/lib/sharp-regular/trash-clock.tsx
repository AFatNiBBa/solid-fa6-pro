
import { Icon } from "../../index";

/**
 * A component that renders the `trash-clock` icon from the `sharp-regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/trash-clock?s=sharp-regular trash-clock}
 * @preview ![trash-clock](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-regular/trash-clock.svg)
 */
const TrashClock: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path d="M147.2 0L160 0 288 0l12.8 0L308 10.7 354.2 80l13.7 0L416 80l32 0 0 48-35.6 0-4.9 65.7c-17.3 2.4-33.9 7.3-49.2 14.4l5.9-80.1-33 0-1.9 1.3-.9-1.3-209 0-.9 1.3-1.9-1.3-33 0 24.9 336 175.9 0c12.3 18.8 28 35.1 46.3 48L64 512 35.6 128 0 128 0 80l32 0 48.1 0 13.7 0L140 10.7 147.2 0zm4.4 80l145 0L275.2 48 172.8 48 151.5 80zM288 368a144 144 0 1 1 288 0 144 144 0 1 1 -288 0zm160-80l-32 0 0 16 0 64 0 16 16 0 48 0 16 0 0-32-16 0-32 0 0-48 0-16z" />
    </Icon>
);

export default TrashClock;