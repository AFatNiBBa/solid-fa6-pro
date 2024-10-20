
import { Icon } from "../../index";

/**
 * A component that renders the `empty-set` icon from the `light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/empty-set?s=light empty-set}
 * @preview ![empty-set](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/light/empty-set.svg)
 */
const EmptySet: typeof Icon = x => (
    <Icon {...x}>
        <path d="M491.3 43.3c6.2-6.2 6.2-16.4 0-22.6s-16.4-6.2-22.6 0l-66 66C363.4 52.6 312.1 32 256 32C132.3 32 32 132.3 32 256c0 56.1 20.6 107.4 54.7 146.7l-66 66c-6.2 6.2-6.2 16.4 0 22.6s16.4 6.2 22.6 0l66-66C148.6 459.4 199.9 480 256 480c123.7 0 224-100.3 224-224c0-56.1-20.6-107.4-54.7-146.7l66-66zM380 109.4L109.4 380C81.1 346.5 64 303.3 64 256C64 150 150 64 256 64c47.3 0 90.5 17.1 124 45.4zM132 402.6L402.6 132c28.3 33.5 45.4 76.7 45.4 124c0 106-86 192-192 192c-47.3 0-90.5-17.1-124-45.4z" />
    </Icon>
);

export default EmptySet;