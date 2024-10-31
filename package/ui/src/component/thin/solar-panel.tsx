
import { Icon } from "../../index";

/**
 * A component that renders the `solar-panel` icon from the `thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/solar-panel?s=thin solar-panel}
 * @preview ![solar-panel](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/thin/solar-panel.svg)
 */
const SolarPanel: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path d="M67.2 48.6l-50.5 267c-.5 2.5-.7 4.9-.7 7.4l0 5c0 22.1 17.9 40 40 40l528 0c22.1 0 40-17.9 40-40l0-5c0-2.5-.2-5-.7-7.4l-50.5-267C569.2 29.7 552.7 16 533.5 16l-427 0C87.3 16 70.8 29.7 67.2 48.6zm-15.7-3C56.5 19.1 79.6 0 106.5 0l427 0c26.9 0 50 19.1 55 45.6l50.5 267c.6 3.4 1 6.9 1 10.4l0 5c0 30.9-25.1 56-56 56l-256 0 0 112 112 0c4.4 0 8 3.6 8 8s-3.6 8-8 8l-240 0c-4.4 0-8-3.6-8-8s3.6-8 8-8l112 0 0-112L56 384c-30.9 0-56-25.1-56-56l0-5c0-3.5 .3-7 1-10.4l50.5-267zM103.7 200L84 304l142.9 0 9-104-132.2 0zm3-16l130.6 0 9-104L126.4 80 106.7 184zM262.4 80l-9 104 133.3 0-9-104L262.4 80zm131.3 0l9 104 130.6 0L513.6 80 393.7 80zM536.3 200l-132.2 0 9 104L556 304 536.3 200zM397 304l-9-104L252 200l-9 104L397 304zM110.7 77c1.4-7.6 8-13 15.7-13l387.2 0c7.7 0 14.3 5.5 15.7 13l42.4 224c1.9 9.9-5.7 19-15.7 19L84 320c-10 0-17.6-9.1-15.7-19L110.7 77z" />
    </Icon>
);

export default SolarPanel;