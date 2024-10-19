
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `pumpkin` icon from the `thin` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/pumpkin?s=thin pumpkin}
 * @preview ![pumpkin](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1NzYgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik0yMzQuMzU1IDk1LjkzN0MyMzQuMzU1IDEwMC40MjggMjM4LjAyMiAxMDMuOTIyIDI0Mi4zNiAxMDMuOTIyQzI0NS41MzUgMTAzLjkyMiAyNDguNTM4IDEwMi4wMTcgMjQ5Ljc5IDk4Ljg5NEwyODAuOTQ2IDIxLjA0NUMyODIuODY4IDE2LjI2MyAyODcuNTI3IDE1Ljk4IDI4OC4zODcgMTUuOThDMjg5LjYwMyAxNS45OCAyOTAuODE2IDE2LjI3MyAyOTEuOTcyIDE2Ljg2TDMzMS42MjEgMzYuNTk5QzMzNC4zNzQgMzcuOTczIDMzNi4wNzkgNDAuNjkxIDMzNi4wNzkgNDMuNjg5Vjk1LjkyNkMzMzYuMDc5IDEwMC4zNDYgMzM5LjY2MSAxMDMuOTIyIDM0NC4wODcgMTAzLjkyMlMzNTIuMDk1IDEwMC4zNDYgMzUyLjA5NSA5NS45MjZWNDMuNjg5QzM1Mi4wOTUgMzQuNTg0IDM0Ni45OTYgMjYuNDAxIDMzOC43NjkgMjIuMjk0TDI5OS4xOTggMi42MDJDMjk1LjgzMyAwLjg2OCAyOTIuMTI4IDAgMjg4LjM5OCAwQzI3OC4yNzIgMCAyNjkuNjI3IDYuMjY0IDI2Ni4wODcgMTUuMTExTDIzNC45MzEgOTIuOTU5QzIzNC41NCA5My45MzcgMjM0LjM1NSA5NC45NDUgMjM0LjM1NSA5NS45MzdaTTE4My45MjUgMTY3Ljg4NUMxODMuOTI1IDE3Mi4zMTQgMTg3LjUyOSAxNzUuODc5IDE5MS45NTMgMTc1Ljg3OUMyMDMuMTM4IDE3NS44NzkgMjE2LjQyOSAxMzUuOTA1IDI4OC4wMzEgMTM1LjkwNUMzNTkuMDQ1IDEzNS45MDUgMzczLjc2MyAxNzUuODg0IDM4NC4xMjcgMTc1Ljg4NEMzOTAuMjc5IDE3NS44ODQgMzkyLjEzNyAxNzAuMjExIDM5Mi4xMzcgMTY3Ljg4NUMzOTIuMTM3IDE2NC40NDIgMzYyLjU3IDExOS45MTQgMjg4LjAzMSAxMTkuOTE0QzIxMy4zNjUgMTE5LjkxNCAxODMuOTI1IDE2NC41MzkgMTgzLjkyNSAxNjcuODg1Wk01NzYgMzEwLjMwMUM1NzYgMjMyLjQ0OSA1MjcuOTg2IDExOS45OTIgNDIwLjQ0MiAxMTkuOTkyQzQwOC4xMzMgMTE5Ljk5MiAzOTUuNTM5IDEyMS42MzYgMzgyLjgyOSAxMjUuMDA1QzM3OS4yNDkgMTI1Ljk2IDM3Ni44NzkgMTI5LjE5OSAzNzYuODc5IDEzMi43MzNDMzc2Ljg3OSAxMzYuNjg3IDM3OS45OTMgMTQwLjczNyAzODQuODY1IDE0MC43MzdDMzg4LjE3MyAxNDAuNzM3IDM5OS43NCAxMzYuMDE2IDQyMC4xMzMgMTM2LjAxNkM0OTAuNDcgMTM2LjAxNiA1NTkuOTkgMjA0LjM0MyA1NTkuOTkgMzEwLjE4MkM1NTkuOTkgMzcwLjAzIDUxNC45NTYgNDk1LjczNCA0MjAuOTA4IDQ5NS43MzRDMzc2LjYxNiA0OTUuNzM0IDM2MS4yMTkgNDcyLjA3NyAzNTMuNDkxIDQ3Mi4wNzdDMzQ1LjM4NSA0NzIuMDc3IDMzMi43NDkgNDk1LjkzMSAyODguMDMxIDQ5NS45MzFDMjQzLjM0MSA0OTUuOTMxIDIzMC43MTcgNDcyLjA3OSAyMjIuNyA0NzIuMDc5QzIxNC45OTkgNDcyLjA3OSAxOTkuMzU2IDQ5NS43MjIgMTU1LjIwOSA0OTUuNzIyQzYxLjA0MSA0OTUuNzIyIDE2LjAwMyAzNzAuODUyIDE2LjAwMyAzMTAuMTc4QzE2LjAwMyAyMDEuNDY4IDg3LjYzNSAxMzYuMDM1IDE1Ni4wMjIgMTM2LjAzNUMxNzYuMzg1IDEzNi4wMzUgMTg3Ljk4NSAxNDAuNzM3IDE5MS4xOTcgMTQwLjczN0MxOTYuMDM1IDE0MC43MzcgMTk5LjE4MyAxMzYuNzMxIDE5OS4xODMgMTMyLjczM0MxOTkuMTgzIDEyOS4xOTkgMTk2LjgxMyAxMjUuOTYgMTkzLjIzMyAxMjUuMDA1QzE4MC41NTQgMTIxLjYzNSAxNjcuOTg0IDExOS45OTEgMTU1LjY5MyAxMTkuOTkxQzQ3LjE4NyAxMTkuOTkxIDAgMjMyLjc2NyAwIDMxMC4zMDFDMCA0MDcuMDU5IDY4LjY4MSA1MTEuOTc0IDE1NS4xNTYgNTExLjk3NEMxNzkuMDE3IDUxMS45NzQgMjAyLjkxMyA1MDQuNzg0IDIyMi41NDQgNDkwLjM3MUMyNDAuODU5IDUwNC42NzYgMjYyLjg1IDUxMS45MjIgMjg4LjAzMSA1MTEuOTIyQzMxMy4xNjUgNTExLjkyMiAzMzUuMjAzIDUwNC42NzYgMzUzLjYxMiA0OTAuMzU1QzM3My4yMSA1MDQuODAxIDM5Ny4wNjIgNTEyIDQyMC45MTQgNTEyQzUwNy4xNzUgNTEyIDU3NiA0MDcuMzI4IDU3NiAzMTAuMzAxWiIvPjwvc3ZnPg==|width=32|height=32)
 */
export default function Pumpkin(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 576 512" {...props}>
            <path d="M234.355 95.937C234.355 100.428 238.022 103.922 242.36 103.922C245.535 103.922 248.538 102.017 249.79 98.894L280.946 21.045C282.868 16.263 287.527 15.98 288.387 15.98C289.603 15.98 290.816 16.273 291.972 16.86L331.621 36.599C334.374 37.973 336.079 40.691 336.079 43.689V95.926C336.079 100.346 339.661 103.922 344.087 103.922S352.095 100.346 352.095 95.926V43.689C352.095 34.584 346.996 26.401 338.769 22.294L299.198 2.602C295.833 0.868 292.128 0 288.398 0C278.272 0 269.627 6.264 266.087 15.111L234.931 92.959C234.54 93.937 234.355 94.945 234.355 95.937ZM183.925 167.885C183.925 172.314 187.529 175.879 191.953 175.879C203.138 175.879 216.429 135.905 288.031 135.905C359.045 135.905 373.763 175.884 384.127 175.884C390.279 175.884 392.137 170.211 392.137 167.885C392.137 164.442 362.57 119.914 288.031 119.914C213.365 119.914 183.925 164.539 183.925 167.885ZM576 310.301C576 232.449 527.986 119.992 420.442 119.992C408.133 119.992 395.539 121.636 382.829 125.005C379.249 125.96 376.879 129.199 376.879 132.733C376.879 136.687 379.993 140.737 384.865 140.737C388.173 140.737 399.74 136.016 420.133 136.016C490.47 136.016 559.99 204.343 559.99 310.182C559.99 370.03 514.956 495.734 420.908 495.734C376.616 495.734 361.219 472.077 353.491 472.077C345.385 472.077 332.749 495.931 288.031 495.931C243.341 495.931 230.717 472.079 222.7 472.079C214.999 472.079 199.356 495.722 155.209 495.722C61.041 495.722 16.003 370.852 16.003 310.178C16.003 201.468 87.635 136.035 156.022 136.035C176.385 136.035 187.985 140.737 191.197 140.737C196.035 140.737 199.183 136.731 199.183 132.733C199.183 129.199 196.813 125.96 193.233 125.005C180.554 121.635 167.984 119.991 155.693 119.991C47.187 119.991 0 232.767 0 310.301C0 407.059 68.681 511.974 155.156 511.974C179.017 511.974 202.913 504.784 222.544 490.371C240.859 504.676 262.85 511.922 288.031 511.922C313.165 511.922 335.203 504.676 353.612 490.355C373.21 504.801 397.062 512 420.914 512C507.175 512 576 407.328 576 310.301Z" />
        </Icon>
    </>
}