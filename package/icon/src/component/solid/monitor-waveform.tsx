
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `monitor-waveform` icon from the `solid` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/monitor-waveform?s=solid monitor-waveform}
 * @preview ![monitor-waveform](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1NzYgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik00ODAgMTI4SDk2VjI1NkgxOTdDMjAwIDI1NiAyMDIuNzUgMjU3Ljc1IDIwNC4xMjUgMjYwLjM3NUwyMjQgMzAwLjI1TDI3My43NSAyMDAuODc1QzI3OS42MjUgMTg5IDI5Ni4zNzUgMTg5IDMwMi4yNSAyMDAuODc1TDMyOS44NzUgMjU2SDQwMEM0MDguODc1IDI1NiA0MTYgMjYzLjEyNSA0MTYgMjcyUzQwOC44NzUgMjg4IDQwMCAyODhIMzEwLjEyNUwyODggMjQzLjc1TDIzOC4yNSAzNDMuMTI1QzIzMi4zNzUgMzU1IDIxNS42MjUgMzU1IDIwOS43NSAzNDMuMTI1TDE4Mi4xMjUgMjg4SDk2VjM4NEg0ODBWMTI4Wk01MjggMzJINDhDMjEuNSAzMiAwIDUzLjUgMCA4MFY0MzJDMCA0NTguNSAyMS41IDQ4MCA0OCA0ODBINTI4QzU1NC41IDQ4MCA1NzYgNDU4LjUgNTc2IDQzMlY4MEM1NzYgNTMuNSA1NTQuNSAzMiA1MjggMzJaTTUxMiA0MTZINjRWOTZINTEyVjQxNloiLz48L3N2Zz4=|width=32|height=32)
 */
export default function MonitorWaveform(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 576 512" {...props}>
            <path d="M480 128H96V256H197C200 256 202.75 257.75 204.125 260.375L224 300.25L273.75 200.875C279.625 189 296.375 189 302.25 200.875L329.875 256H400C408.875 256 416 263.125 416 272S408.875 288 400 288H310.125L288 243.75L238.25 343.125C232.375 355 215.625 355 209.75 343.125L182.125 288H96V384H480V128ZM528 32H48C21.5 32 0 53.5 0 80V432C0 458.5 21.5 480 48 480H528C554.5 480 576 458.5 576 432V80C576 53.5 554.5 32 528 32ZM512 416H64V96H512V416Z" />
        </Icon>
    </>
}