
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `bell-slash` icon from the `duotone` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/bell-slash?s=duotone bell-slash}
 * @preview ![bell-slash](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA2NDAgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxkZWZzPjxzdHlsZT4uZmEtc2Vjb25kYXJ5e29wYWNpdHk6LjR9PC9zdHlsZT48L2RlZnM+PHBhdGggZD0iTTEwNC42MjUgMzYyLjI1MUM5OC42MjUgMzY4Ljc1MSA5NiAzNzYuNTAxIDk2IDM4NC4wMDFDOTYuMTI1IDQwMC4zNzYgMTA5IDQxNi4wMDEgMTI4LjEyNSA0MTYuMDAxSDQwNy40MjRMMTU5LjUwNCAyMjEuNjg2QzE1Ni4yNjYgMzEyLjUxNiAxMjIuOTM4IDM0Mi41MTEgMTA0LjYyNSAzNjIuMjUxWk0zMjAgNTEyQzM1NS4zNzUgNTEyIDM4NCA0ODMuMzc1IDM4NCA0NDguMDAxSDI1NkMyNTYgNDgzLjM3NSAyODQuNjI1IDUxMiAzMjAgNTEyWk01MzUuMzc1IDM2Mi4yNTFDNTE2LjEyNSAzNDEuNTAyIDQ3OS44NzUgMzEwLjI1MiA0NzkuODc1IDIwOC4wMDNDNDc5Ljg3NSAxMzAuMjU0IDQyNS41IDY4LjEyOSAzNTIgNTIuODc5VjMyLjAwNEMzNTIgMTQuMzggMzM3LjYyNSAwLjAwNSAzMjAgMC4wMDVDMzAyLjI1IDAuMDA1IDI4OCAxNC4zOCAyODggMzIuMDA0VjUyLjg3OUMyNDUuMzQgNjEuNzMxIDIwOS41NDMgODYuNjg2IDE4Ni42NiAxMjEuMDFMNTQwLjIwNyAzOTguMTFDNTQyLjQxNiAzOTMuNjkxIDU0My45NjMgMzg4Ljk3NiA1NDQgMzg0LjAwMUM1NDQgMzc1Ljg3NiA1NDEgMzY4LjEyNiA1MzUuMzc1IDM2Mi4yNTFaIiBjbGFzcz0iZmEtc2Vjb25kYXJ5Ii8+PHBhdGggZD0iTTYxNS45ODQgNTEyQzYxMC43OTYgNTEyIDYwNS41OTMgNTEwLjM0NCA2MDEuMTg3IDUwNi44NzVMOS4xODcgNDIuODc5Qy0xLjIzNSAzNC43MjMgLTMuMDYzIDE5LjYzIDUuMTA5IDkuMTkyQzEzLjI5NiAtMS4yMTQgMjguMzQzIC0zLjA4OSAzOC44MTIgNS4xM0w2MzAuODEyIDQ2OS4xMjVDNjQxLjIzNCA0NzcuMjgyIDY0My4wNjIgNDkyLjM3NSA2MzQuODkgNTAyLjgxM0M2MzAuMTU2IDUwOC44NDQgNjIzLjEwOSA1MTIgNjE1Ljk4NCA1MTJaIiBjbGFzcz0iZmEtcHJpbWFyeSIvPjwvc3ZnPg==|width=32|height=32)
 */
export default function BellSlash(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 640 512" {...props}>
            <path class={generic.secondary} d="M104.625 362.251C98.625 368.751 96 376.501 96 384.001C96.125 400.376 109 416.001 128.125 416.001H407.424L159.504 221.686C156.266 312.516 122.938 342.511 104.625 362.251ZM320 512C355.375 512 384 483.375 384 448.001H256C256 483.375 284.625 512 320 512ZM535.375 362.251C516.125 341.502 479.875 310.252 479.875 208.003C479.875 130.254 425.5 68.129 352 52.879V32.004C352 14.38 337.625 0.005 320 0.005C302.25 0.005 288 14.38 288 32.004V52.879C245.34 61.731 209.543 86.686 186.66 121.01L540.207 398.11C542.416 393.691 543.963 388.976 544 384.001C544 375.876 541 368.126 535.375 362.251Z" />
            <path d="M615.984 512C610.796 512 605.593 510.344 601.187 506.875L9.187 42.879C-1.235 34.723 -3.063 19.63 5.109 9.192C13.296 -1.214 28.343 -3.089 38.812 5.13L630.812 469.125C641.234 477.282 643.062 492.375 634.89 502.813C630.156 508.844 623.109 512 615.984 512Z" />
        </Icon>
    </>
}