
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `galaxy` icon from the `solid` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/galaxy?s=solid galaxy}
 * @preview ![galaxy](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik01MDYuNjMyIDI3NC4xMjZDNDg5Ljc1NyAyMDIuOTk4IDQzMS4yNTUgMTQ2LjI0NyAzNTkuNjI4IDEzMS45OTZDMzI1LjYyNyAxMjQuOTk2IDI5MC41MDEgMTI3LjM3MSAyNTcuNzUgMTM4LjYyMkMyNjUuMjUgODkuMzcgMjk3LjUwMSA0Ny40OTQgMzQzLjI1MyAyNy44NjhDMzU2LjYyOCAyMi4xMTggMzUzLjYyOCAyLjM2OCAzMzkuMjUyIDAuOTkyQzMxNy4zNzcgLTEuMjU4IDI5NS4zNzYgMC4zNjcgMjc0LjEyNiA1LjM2OEMyMDIuOTk4IDIyLjI0MyAxNDYuMjQ3IDgwLjc0NSAxMzEuOTk2IDE1Mi4zNzJDMTI0Ljk5NiAxODYuMzczIDEyNy4zNzEgMjIxLjQ5OSAxMzguNjIyIDI1NC4yNUM4OS4zNyAyNDYuNzUgNDcuNDk0IDIxNC40OTkgMjcuODY4IDE2OC43NDdDMjIuMTE4IDE1NS4zNzIgMi4zNjcgMTU4LjM3MiAwLjk5MiAxNzIuNzQ4Qy0xLjI1OCAxOTQuNjIzIDAuMzY3IDIxNi42MjQgNS4zNjggMjM3Ljg3NEMyMi4yNDMgMzA5LjAwMiA4MC43NDUgMzY1Ljc1MyAxNTIuMzcyIDM4MC4wMDRDMTg2LjM3MyAzODcuMDA0IDIyMS40OTkgMzg0LjYyOSAyNTQuMjUgMzczLjM3OEMyNDYuNzUgNDIyLjYzIDIxNC40OTkgNDY0LjUwNiAxNjguNzQ3IDQ4NC4xMzJDMTU1LjM3MiA0ODkuODgyIDE1OC4zNzIgNTA5LjYzMyAxNzIuNzQ4IDUxMS4wMDhDMTk0LjYyMyA1MTMuMjU4IDIxNi42MjQgNTExLjYzMyAyMzcuODc0IDUwNi42MzJDMzA5LjAwMiA0ODkuNzU3IDM2NS43NTMgNDMxLjI1NSAzODAuMDA0IDM1OS42MjhDMzg3LjAwNCAzMjUuNjI3IDM4NC42MjkgMjkwLjUwMSAzNzMuMzc4IDI1Ny43NUM0MjIuNjMgMjY1LjI1IDQ2NC41MDYgMjk3LjUwMSA0ODQuMTMyIDM0My4yNTNDNDg5Ljg4MiAzNTYuNjI4IDUwOS42MzMgMzUzLjYyOCA1MTEuMDA4IDMzOS4yNTJDNTEzLjI1OCAzMTcuMzc3IDUxMS42MzMgMjk1LjM3NiA1MDYuNjMyIDI3NC4xMjZaTTI1NiAzMDQuMDAxQzIyOS40OTkgMzA0LjAwMSAyMDcuOTk5IDI4Mi41MDEgMjA3Ljk5OSAyNTZTMjI5LjQ5OSAyMDcuOTk5IDI1NiAyMDcuOTk5UzMwNC4wMDEgMjI5LjQ5OSAzMDQuMDAxIDI1NlMyODIuNTAxIDMwNC4wMDEgMjU2IDMwNC4wMDFaIi8+PC9zdmc+|width=32|height=32)
 */
export default function Galaxy(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon {...props}>
            <path d="M506.632 274.126C489.757 202.998 431.255 146.247 359.628 131.996C325.627 124.996 290.501 127.371 257.75 138.622C265.25 89.37 297.501 47.494 343.253 27.868C356.628 22.118 353.628 2.368 339.252 0.992C317.377 -1.258 295.376 0.367 274.126 5.368C202.998 22.243 146.247 80.745 131.996 152.372C124.996 186.373 127.371 221.499 138.622 254.25C89.37 246.75 47.494 214.499 27.868 168.747C22.118 155.372 2.367 158.372 0.992 172.748C-1.258 194.623 0.367 216.624 5.368 237.874C22.243 309.002 80.745 365.753 152.372 380.004C186.373 387.004 221.499 384.629 254.25 373.378C246.75 422.63 214.499 464.506 168.747 484.132C155.372 489.882 158.372 509.633 172.748 511.008C194.623 513.258 216.624 511.633 237.874 506.632C309.002 489.757 365.753 431.255 380.004 359.628C387.004 325.627 384.629 290.501 373.378 257.75C422.63 265.25 464.506 297.501 484.132 343.253C489.882 356.628 509.633 353.628 511.008 339.252C513.258 317.377 511.633 295.376 506.632 274.126ZM256 304.001C229.499 304.001 207.999 282.501 207.999 256S229.499 207.999 256 207.999S304.001 229.499 304.001 256S282.501 304.001 256 304.001Z" />
        </Icon>
    </>
}