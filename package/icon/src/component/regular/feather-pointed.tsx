
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `feather-pointed` icon from the `regular` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/feather-pointed?s=regular feather-pointed}
 * @preview ![feather-pointed](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik00ODEuMTUyIDBDNDgwLjM5NSAwIDQ3OS42MzUgMC4wMjcgNDc4Ljg2NSAwLjA4MkMzNjIuNDggOC40MzQgLTIuOTc1IDYxLjk3MSA3NS4xMDcgNDAyLjk1NUw3LjAzMSA0NzEuMDMxQy0yLjM0NCA0ODAuNDA2IC0yLjM0NCA0OTUuNTk0IDcuMDMxIDUwNC45NjlDMTEuNzE5IDUwOS42NTYgMTcuODQ0IDUxMiAyNCA1MTJTMzYuMjgxIDUwOS42NTYgNDAuOTY5IDUwNC45NjlMMTA4Ljk5OCA0MzYuOTM5QzE0MS40MzIgNDQ0LjM3MyAxNzEuNDA0IDQ0OCAxOTguODQgNDQ4QzQ1OS45NDkgNDQ4IDUwNC4zNTkgMTM4LjQ2MSA1MTEuOTE4IDMzLjEzNUM1MTMuMjE3IDE1LjAzOSA0OTguOTY3IDAgNDgxLjE1MiAwWk0xOTguODQgNDAwQzE4My40NTkgNDAwIDE2Ny4wNDMgMzk4LjI2IDE1MC4yMTMgMzk1LjcyNUwxOTMuOTM4IDM1MkgzMzUuMTAyQzI4NC43MyAzOTIuMDMxIDIzMS42MTEgNDAwIDE5OC44NCA0MDBaTTM4MC4yNDQgMzA0SDI0MS45MzhMMjg5LjkzOCAyNTZINDA5Ljc2MkM0MDAuNjIxIDI3NC4zNTkgMzkwLjYwNCAyODkuODU5IDM4MC4yNDQgMzA0Wk00MjkuNDgyIDIwOEgzMzcuOTM4TDM0NC45NjkgMjAwLjk2OUMzNTQuMzQ0IDE5MS41OTQgMzU0LjM0NCAxNzYuNDA2IDM0NC45NjkgMTY3LjAzMVMzMjAuNDA2IDE1Ny42NTYgMzExLjAzMSAxNjcuMDMxTDExNS45MjIgMzYyLjE0MUMxMDUuMDAyIDI5MS4zNzcgMTE2LjQxNCAyMzMuNTcgMTUwLjY0MyAxODYuMzU3QzIyNC4xOTkgODQuODk1IDM4OS4yMTEgNTcuMTA5IDQ2Mi40MDIgNDkuNjkxQzQ1Ni40ODIgMTEzLjcwNSA0NDQuNjMxIDE2NS4xNTIgNDI5LjQ4MiAyMDhaIi8+PC9zdmc+|width=32|height=32)
 */
export default function FeatherPointed(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon {...props}>
            <path d="M481.152 0C480.395 0 479.635 0.027 478.865 0.082C362.48 8.434 -2.975 61.971 75.107 402.955L7.031 471.031C-2.344 480.406 -2.344 495.594 7.031 504.969C11.719 509.656 17.844 512 24 512S36.281 509.656 40.969 504.969L108.998 436.939C141.432 444.373 171.404 448 198.84 448C459.949 448 504.359 138.461 511.918 33.135C513.217 15.039 498.967 0 481.152 0ZM198.84 400C183.459 400 167.043 398.26 150.213 395.725L193.938 352H335.102C284.73 392.031 231.611 400 198.84 400ZM380.244 304H241.938L289.938 256H409.762C400.621 274.359 390.604 289.859 380.244 304ZM429.482 208H337.938L344.969 200.969C354.344 191.594 354.344 176.406 344.969 167.031S320.406 157.656 311.031 167.031L115.922 362.141C105.002 291.377 116.414 233.57 150.643 186.357C224.199 84.895 389.211 57.109 462.402 49.691C456.482 113.705 444.631 165.152 429.482 208Z" />
        </Icon>
    </>
}