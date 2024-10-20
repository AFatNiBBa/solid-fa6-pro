
import { Icon } from "../../index";

/**
 * A component that renders the `spade` icon from the `thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/spade?s=thin spade}
 * @preview ![spade](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/thin/spade.svg)
 */
const Spade: typeof Icon = x => (
    <Icon {...x}>
        <path d="M460.7 220.6s0 0 0 0L268 21c-7-6.9-17.4-6.2-22.8-.4c0 0 0 0 0 0l-.3 .3L51.2 220.6s0 0 0 0C1.6 272.1 4.3 357.3 60.1 405.2c0 0 0 0 0 0l.1 .1c46.6 40.6 119.9 33.7 164.8-12l19.9-20.9c3.1-3.2 7.3-5 11.8-5s8.7 2 11.7 5.3l18.8 20.7c44.7 45.4 117 52.6 165.7 11.8c54.8-47.9 57.5-133.1 7.9-184.5zM233.5 9.7c12-13 33-13 45.9 0L472.2 209.5c55.9 57.9 52.9 153.8-9 207.8c-55.9 47-137.8 38-187.8-13l-8.2-9.1-3.2-3.5L264 496l80 0c4.4 0 8 3.6 8 8s-3.6 8-8 8l-176 0c-4.4 0-8-3.6-8-8s3.6-8 8-8l80 0 0-103.8-2.6 2.7-8.9 9.4c-49.9 51-132.8 59.9-186.8 13c-62.9-53.9-65.9-149.8-10-207.8L233.5 9.7z" />
    </Icon>
);

export default Spade;