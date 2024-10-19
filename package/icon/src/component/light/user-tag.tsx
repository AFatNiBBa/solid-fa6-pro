
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `user-tag` icon from the `light` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/user-tag?s=light user-tag}
 * @preview ![user-tag](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA2NDAgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik02MzAuNjM5IDM2NC42MjVMNTQwLjM4OSAyNzQuMzc1QzUyOC4zODkgMjYyLjM3NSA1MTIuMTM5IDI1NS42MjUgNDk1LjI2NCAyNTUuNjI1SDQxNS44ODlDMzk4LjI2NCAyNTUuNjI1IDM4My44ODkgMjcwIDM4My44ODkgMjg3LjYyNVYzNjdDMzgzLjg4OSAzODQgMzkwLjYzOSA0MDAuMjUgNDAyLjYzOSA0MTIuMjVMNDkyLjc2NCA1MDIuNjI1QzQ5OS4wMTQgNTA4Ljc1IDUwNy4yNjQgNTEyIDUxNS4zODkgNTEyQzUyMy42MzkgNTEyIDUzMS43NjQgNTA4Ljg3NSA1MzguMDE0IDUwMi42MjVMNjMwLjUxNCA0MTAuMTI1QzY0My4xMzkgMzk3LjUgNjQzLjEzOSAzNzcuMTI1IDYzMC42MzkgMzY0LjYyNVpNNTE1LjUxNCA0NzkuODc1TDQyNS4yNjQgMzg5LjYyNUM0MTkuMjY0IDM4My42MjUgNDE1Ljg4OSAzNzUuNSA0MTUuODg5IDM2N1YyODcuNjI1SDQ5NS4yNjRDNTAzLjc2NCAyODcuNjI1IDUxMS43NjQgMjkxIDUxNy43NjQgMjk3LjEyNUw2MDguMDE0IDM4Ny4zNzVMNTE1LjUxNCA0NzkuODc1Wk00NjMuODg5IDMxOS44NzVDNDU1LjEzOSAzMTkuODc1IDQ0Ny44ODkgMzI3LjEyNSA0NDcuODg5IDMzNS44NzVTNDU1LjEzOSAzNTEuODc1IDQ2My44ODkgMzUxLjg3NUM0NzIuNzY0IDM1MS44NzUgNDc5Ljg4OSAzNDQuNjI1IDQ3OS44ODkgMzM1Ljg3NVM0NzIuNzY0IDMxOS44NzUgNDYzLjg4OSAzMTkuODc1Wk0zOTkuOTk4IDQ4MEgzNC42NjJDMzMuMjExIDQ4MCAzMiA0NzguNzkzIDMyIDQ3Ny4zNDJDMzEuOTk0IDM5OS40MDQgOTUuMzk3IDMzNiAxNzMuMzM0IDMzNkgyNzQuNjYyQzI5NC4zMTEgMzM2IDMxMi45OSAzNDAuMSAzMjkuOTc5IDM0Ny40MjJDMzQwLjM3MyAzNTEuOSAzNTEuODg5IDM0My45NDUgMzUxLjg4OSAzMzIuNjI3QzM1MS44ODkgMzI2LjM1IDM0OC4zMTMgMzIwLjQ2MSAzNDIuNTQzIDMxNy45ODhDMzIxLjY5MiAzMDkuMDUxIDI5OC43ODcgMzA0IDI3NC42NjIgMzA0SDE3My4zMzRDNzcuNTM3IDMwNCAtMC4xMTUgMzgxLjcxNSAwIDQ3Ny41NDNDMC4wMjIgNDk2LjU3NCAxNS42MzEgNTEyIDM0LjY2MiA1MTJIMzk5Ljk5OEM0MDguODM0IDUxMiA0MTUuOTk4IDUwNC44MzYgNDE1Ljk5OCA0OTZDNDE1Ljk5OCA0ODcuMTYyIDQwOC44MzQgNDgwIDM5OS45OTggNDgwWk0yMjMuOTk4IDI1NkMyOTQuNjkzIDI1NiAzNTEuOTk4IDE5OC42OTEgMzUxLjk5OCAxMjhTMjk0LjY5MyAwIDIyMy45OTggMEMxNTMuMzExIDAgOTUuOTk4IDU3LjMwOSA5NS45OTggMTI4UzE1My4zMTEgMjU2IDIyMy45OTggMjU2Wk0yMjMuOTk4IDMyQzI3Ni45MzQgMzIgMzE5Ljk5OCA3NS4wNjQgMzE5Ljk5OCAxMjhDMzE5Ljk5OCAxODAuOTM0IDI3Ni45MzQgMjI0IDIyMy45OTggMjI0UzEyNy45OTggMTgwLjkzNCAxMjcuOTk4IDEyOEMxMjcuOTk4IDc1LjA2NCAxNzEuMDYzIDMyIDIyMy45OTggMzJaIi8+PC9zdmc+|width=32|height=32)
 */
export default function UserTag(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 640 512" {...props}>
            <path d="M630.639 364.625L540.389 274.375C528.389 262.375 512.139 255.625 495.264 255.625H415.889C398.264 255.625 383.889 270 383.889 287.625V367C383.889 384 390.639 400.25 402.639 412.25L492.764 502.625C499.014 508.75 507.264 512 515.389 512C523.639 512 531.764 508.875 538.014 502.625L630.514 410.125C643.139 397.5 643.139 377.125 630.639 364.625ZM515.514 479.875L425.264 389.625C419.264 383.625 415.889 375.5 415.889 367V287.625H495.264C503.764 287.625 511.764 291 517.764 297.125L608.014 387.375L515.514 479.875ZM463.889 319.875C455.139 319.875 447.889 327.125 447.889 335.875S455.139 351.875 463.889 351.875C472.764 351.875 479.889 344.625 479.889 335.875S472.764 319.875 463.889 319.875ZM399.998 480H34.662C33.211 480 32 478.793 32 477.342C31.994 399.404 95.397 336 173.334 336H274.662C294.311 336 312.99 340.1 329.979 347.422C340.373 351.9 351.889 343.945 351.889 332.627C351.889 326.35 348.313 320.461 342.543 317.988C321.692 309.051 298.787 304 274.662 304H173.334C77.537 304 -0.115 381.715 0 477.543C0.022 496.574 15.631 512 34.662 512H399.998C408.834 512 415.998 504.836 415.998 496C415.998 487.162 408.834 480 399.998 480ZM223.998 256C294.693 256 351.998 198.691 351.998 128S294.693 0 223.998 0C153.311 0 95.998 57.309 95.998 128S153.311 256 223.998 256ZM223.998 32C276.934 32 319.998 75.064 319.998 128C319.998 180.934 276.934 224 223.998 224S127.998 180.934 127.998 128C127.998 75.064 171.063 32 223.998 32Z" />
        </Icon>
    </>
}