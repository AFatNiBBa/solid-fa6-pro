
import { Icon } from "../../index";

/**
 * A component that renders the `red-river` icon from the `brands` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/red-river?s=brands red-river}
 * @preview ![red-river](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/brands/red-river.svg)
 */
const RedRiver: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M353.2 32H94.8C42.4 32 0 74.4 0 126.8v258.4C0 437.6 42.4 480 94.8 480h258.4c52.4 0 94.8-42.4 94.8-94.8V126.8c0-52.4-42.4-94.8-94.8-94.8zM144.9 200.9v56.3c0 27-21.9 48.9-48.9 48.9V151.9c0-13.2 10.7-23.9 23.9-23.9h154.2c0 27-21.9 48.9-48.9 48.9h-56.3c-12.3-.6-24.6 11.6-24 24zm176.3 72h-56.3c-12.3-.6-24.6 11.6-24 24v56.3c0 27-21.9 48.9-48.9 48.9V247.9c0-13.2 10.7-23.9 23.9-23.9h154.2c0 27-21.9 48.9-48.9 48.9z" />
    </Icon>
);

export default RedRiver;