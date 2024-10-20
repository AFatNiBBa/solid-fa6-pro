
import { Icon } from "../../index";

/**
 * A component that renders the `sausage` icon from the `sharp-thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/sausage?s=sharp-thin sausage}
 * @preview ![sausage](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-thin/sausage.svg)
 */
const Sausage: typeof Icon = x => (
    <Icon {...x}>
        <path d="M363.1 0L376 0l96 0 12.9 0-5.8 11.6-16 32-3.6 7.2-14.3-7.2 3.6-7.2L459.1 16l-70.1 0 10.2 20.4 3.6 7.2-14.3 7.2-3.6-7.2-16-32L363.1 0zM16 392l0 8 0 59.1 20.4-10.2 7.2-3.6 7.2 14.3-7.2 3.6-32 16L0 484.9 0 472l0-8 0-64 0-8 0-16 0-12.9 11.6 5.8 32 16 7.2 3.6-7.2 14.3-7.2-3.6L16 388.9l0 3.1zM424 80c-39.8 0-72 32.2-72 72c0 48.6-22.8 99-61.9 138.1S200.6 352 152 352c-39.8 0-72 32.2-72 72s32.2 72 72 72c92.8 0 178.4-42.5 239.9-104.1S496 244.8 496 152c0-39.8-32.2-72-72-72zm0-16c48.6 0 88 39.4 88 88c0 97.7-44.7 187.2-108.8 251.2S249.7 512 152 512c-48.6 0-88-39.4-88-88s39.4-88 88-88c43.7 0 90.2-20.6 126.8-57.2S336 195.7 336 152c0-48.6 39.4-88 88-88zM400 168c0 128.1-103.9 232-232 232l-8 0 0-16 8 0c119.3 0 216-96.7 216-216l0-8 16 0 0 8z" />
    </Icon>
);

export default Sausage;